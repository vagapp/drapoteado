import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Checkbox } from 'ionic-angular';
import { SubscriptionManagerProvider } from '../../providers/subscription-manager/subscription-manager';
import { LoaderProvider } from '../../providers/loader/loader';
import { subscriptions } from '../../providers/user-data/subscriptions';
import { AlertProvider } from '../../providers/alert/alert';
import { SubusersManagerProvider } from '../../providers/subusers-manager/subusers-manager';
import { SubusersDataProvider } from '../../providers/subusers-data/subusers-data';
import { UserDataProvider, userd } from '../../providers/user-data/user-data';
import { PlanesDataProvider } from '../../providers/planes-data/planes-data';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { BaseUrlProvider } from '../../providers/base-url/base-url';
import { WebsocketServiceProvider } from '../../providers/websocket-service/websocket-service';
import { WsMessengerProvider } from '../../providers/ws-messenger/ws-messenger';
import { PermissionsProvider } from '../../providers/permissions/permissions';

/**
 * Generated class for the EntergrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entergrupo',
  templateUrl: 'entergrupo.html',
})
export class EntergrupoPage {
  groupName:string = "Nombre del Grupo"
  groupCode:number = null;
  groupLoaded:boolean = false;
  loaded_group_sus:subscriptions = null;
  accountsleft: number = 0;
  docsleft:number = 0;
  selectedUsers:number[] = new Array();

  canSave:boolean = false;



  constructor(public navCtrl: NavController, public navParams: NavParams,
    public subsMan: SubscriptionManagerProvider,
    public subuserMan: SubusersManagerProvider,
    public userData: UserDataProvider,
    public subuserData: SubusersDataProvider,
    public planData: PlanesDataProvider,
    public loader: LoaderProvider,
    public alert:AlertProvider,
    public bu: BaseUrlProvider,
    public wsMessenger: WsMessengerProvider,
    public perm: PermissionsProvider
    ) {
  }

  get AnyPlan(){ return this.perm.checkUserSuscription([UserDataProvider.PLAN_ANY]) }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntergrupoPage');
    this.subuserMan.cargarSubusuarios();
  }

  async buscar(){
    if(this.groupCode !== null){
      this.loader.presentLoader('Buscando grupos médicos');
      console.log('sstart');
      let sus = await this.subsMan.searchSus(this.groupCode+'');
      console.log(sus);
      if(sus){
        this.groupLoaded = true;
        this.groupName = sus.field_group_name;
        this.loaded_group_sus = sus;
        //this.accountsleft = this.subsMan.getSubAccountsLeft(sus);
        this.setSubacountsLeftDelta();
        if(this.validateDocsLeft()){ this.canSave = true; }else{ this.canSave = false;}
        this.loader.dismissLoader();
      }else{
        this.loader.dismissLoader();
        this.alert.presentAlert('Nada','No se encontro ningun grupo médico con este codigo');
      }
      console.log('send');
    }
  }

  async guardar(){
  if(this.CancelarSuscripcionAtual()){
    this.loader.presentLoader('Entrando al grupo...');
    if(this.subsMan.checkForSubscription()){
    let delsusres = await this.subsMan.deletesSus(this.subsMan.subsData.subscription).toPromise();
    console.log('NODE DELETION',delsusres);

     if(!delsusres) return false; //salir de aca si no sirve esto
    }
    this.loaded_group_sus.field_doctores.push(this.userData.userData.uid);//agregarse a si mismo a la suscripcion de grupo.
    const selected_subusers = this.getSelectedSubusersArray();
    selected_subusers.forEach((subuser)=>{ //agregar sub usuarios a la suscripcion de grupo.
      this.loaded_group_sus.field_subusuarios.push(subuser.uid);
    });
    
    this.loader.dismissLoader();
    let res = await this.subsMan.updateSus( this.loaded_group_sus ).subscribe(
      (val)=>{
        console.log('redysave val',val);
        console.log('sending msg',selected_subusers.map((user)=>{ return user.uid }));
        this.wsMessenger.generateDoctogroupMessage(this.loaded_group_sus.field_doctores);
        this.wsMessenger.generateSubtogroupMessage(selected_subusers.map((user)=>{ return user.uid }),this.loaded_group_sus.field_doctores);
        let view = this;
        setTimeout(function () {
          view.bu.locationReload();
          view.loader.dismissLoader();
      }, 1000);
      },(error)=>{
        console.log('redysave error',error);
        this.loader.dismissLoader();
      }
    );
  }
  }

  validateDocsLeft():boolean{
    console.log('validateDocsLeft');
    let ret:boolean = true;
    this.setDoctorsLeftDelta();
    if(this.docsleft <= 0){
      ret = false;
      console.log('validateDocsLeft failed');
      this.alert.presentAlertHandler('LLeno','El grupo médico al que intenta ingresar se encuentra lleno.',()=>{ this.cancelar();});
    }
    return ret;
  }

  CancelarSuscripcionAtual():boolean{
    let ret = true;
    console.log('funcionalidad cancelar suscripcion de conekta mijo');
    return ret;
  }

  cancelar(){
    this.navCtrl.setRoot('MiplanPage');
  }

  onChangeUsers(element: Checkbox, subuser:userd){
    let setTo = !subuser.selectedForGroup;
    this.setSubacountsLeftDelta();
    if(setTo && this.accountsleft > 0){ 
     element.checked = subuser.selectedForGroup = true;
    }else{
      element.checked = subuser.selectedForGroup = false;
    }
    this.setSubacountsLeftDelta();
  }

  setSubacountsLeftDelta(){
    if(this.groupLoaded){
      let leftonsus = this.subsMan.getSubAccountsLeft(this.loaded_group_sus);
      let selectedAccounts = this.getSelectedSubusersArray().length;
      this.accountsleft = leftonsus - selectedAccounts;
    }
  }

  setDoctorsLeftDelta(){
    if(this.groupLoaded){
      this.docsleft = this.subsMan.getDocAccountsLeft(this.loaded_group_sus);
      console.log('this.docsleft',this.docsleft);
      /*console.log('docs leftonsus', leftonsus);
      console.log('setDoctorsLeftDelta this.loaded_group_sus.field_doctores',this.loaded_group_sus.field_doctores.length);
      let selectedAccounts = this.loaded_group_sus.field_doctores.length;
      this.docsleft = leftonsus - selectedAccounts;*/
    }
  }

  getSelectedSubusersArray():Array<userd>{
    return  this.subuserData.subUsers.filter((subusers)=>{ console.log( subusers.selectedForGroup ); return subusers.selectedForGroup === true });
  }





}

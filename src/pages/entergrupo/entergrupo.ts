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
import { SubscriptionDataProvider } from '../../providers/subscription-data/subscription-data';

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

  get AnyPlan(){ return this.perm.checkUserSuscription([UserDataProvider.PLAN_ANY]); }
  get isbasico(){ return this.perm.checkUserSuscription([SubscriptionDataProvider.PLAN_BASIC]); }

  ionViewDidLoad() {
    this.subuserMan.cargarSubusuarios();
  }

  async buscar(){
    if(this.groupCode !== null){
      this.loader.presentLoader('Buscando grupos médicos');
      let sus = await this.subsMan.searchSus(this.groupCode+'');
      if(sus){ 
        let aux_sus = sus as subscriptions;
        this.groupLoaded = true;
        console.log('sus',sus);
        //this.groupName = sus.field_group_name;
        let aux_docs = JSON.parse(aux_sus.field_doctores_json);
        let planholder = aux_docs.find((doc)=>
        {return Number(doc.uid) === Number(aux_sus.field_plan_holder)});
        this.groupName = planholder.name;
        this.loaded_group_sus = sus;
        this.setSubacountsLeftDelta();
        if(this.validateDocsLeft()){ this.canSave = true; }else{ this.canSave = false;}
        this.loader.dismissLoader();
      }else{
        this.loader.dismissLoader();
        this.alert.presentAlert('','No se encontró ningún grupo médico con este código.');
      }
     
    }
  }

  async guardar(){
  if(this.CancelarSuscripcionAtual()){
    this.loader.presentLoader('Entrando al grupo...');
    if(this.subsMan.checkForSubscription()){
    let delsusres = await this.subsMan.deletesSus(this.subsMan.subsData.subscription).toPromise();
     if(!delsusres) return false; //salir de aca si no sirve esto
    }
    this.loaded_group_sus.field_doctores.push(this.userData.userData.uid);//agregarse a si mismo a la suscripcion de grupo.
    const selected_subusers = this.getSelectedSubusersArray();
    await this.subsMan.group_enter_selectedSubusersClean(selected_subusers,this.loaded_group_sus,true);
    let reload_users = this.subsMan.aux_docstoReload.concat(selected_subusers.map((e)=>{ return Number(e.uid)}));
    this.wsMessenger.generateSuboutofgroup(reload_users,1);
    
    this.loader.dismissLoader();
    let res = await this.subsMan.updateSus( this.loaded_group_sus ).subscribe(
      (val)=>{
       
        this.wsMessenger.generateDoctogroupMessage(this.loaded_group_sus.field_doctores.concat(this.loaded_group_sus.field_subusuarios));
        this.wsMessenger.generateSubtogroupMessage(selected_subusers.map((user)=>{ return user.uid }),this.loaded_group_sus.field_doctores);
        
        let view = this;
       
        setTimeout(function () {
          view.bu.locationReload();
          
      }, 1000);
      },(error)=>{
       
        this.loader.dismissLoader();
      }
    );
  }
  }

  validateDocsLeft():boolean{
    
    let ret:boolean = true;
    this.setDoctorsLeftDelta();
    if(this.docsleft <= 0){
      ret = false;
    
      this.alert.presentAlertHandler('','El grupo médico al que intenta ingresar se encuentra lleno.',()=>{ this.cancelar();});
    }
    return ret;
  }

  CancelarSuscripcionAtual():boolean{
    let ret = true;
   
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

    }
  }

  getSelectedSubusersArray():Array<userd>{
    return  this.subuserData.subUsers.filter((subusers)=>{ console.log( subusers.selectedForGroup ); return subusers.selectedForGroup === true });
  }





}

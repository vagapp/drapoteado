import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubscriptionManagerProvider } from '../../providers/subscription-manager/subscription-manager';
import { LoaderProvider } from '../../providers/loader/loader';
import { subscriptions } from '../../providers/user-data/subscriptions';
import { AlertProvider } from '../../providers/alert/alert';
import { SubusersManagerProvider } from '../../providers/subusers-manager/subusers-manager';
import { SubusersDataProvider } from '../../providers/subusers-data/subusers-data';
import { UserDataProvider, userd } from '../../providers/user-data/user-data';
import { PlanesDataProvider } from '../../providers/planes-data/planes-data';

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
  selectedUsers:number[] = new Array();



  constructor(public navCtrl: NavController, public navParams: NavParams,
    public subsMan: SubscriptionManagerProvider,
    public subuserMan: SubusersManagerProvider,
    public userData: UserDataProvider,
    public subuserData: SubusersDataProvider,
    public planData: PlanesDataProvider,
    public loader: LoaderProvider,
    public alert:AlertProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntergrupoPage');
    this.subuserMan.cargarSubusuarios();
  }

  async buscar(){
    if(this.groupCode !== null){
      this.loader.presentLoader('Buscando grupos medicos');
      console.log('sstart');
      let sus = await this.subsMan.searchSus(this.groupCode+'');
      console.log(sus);
      if(sus){
        this.groupLoaded = true;
        this.groupName = sus.field_group_name;
        this.loaded_group_sus = sus;
        //this.accountsleft = this.subsMan.getSubAccountsLeft(sus);
        this.setSubacountsLeftDelta();
        console.log('accounts left got',this.accountsleft);
        this.loader.dismissLoader();
      }else{
        this.loader.dismissLoader();
        this.alert.presentAlert('Nada','No se encontro ningun grupo medico con este codigo');
      }
      console.log('send');
    }
  }

  guardar(){

  }

  cancelar(){
    this.navCtrl.setRoot('MiplanPage');
  }

  onChangeUsers(event, subuser:userd){
    subuser.selectedForGroup = false;
    event = false;
    console.log('event',event);
    console.log('subusers onchange',this.subuserData.subUsers);
    this.setSubacountsLeftDelta();
    if(event){
      if(this.accountsleft < 0){
        console.log('noweeeeeeayuda');
        subuser.selectedForGroup = false;
        this.setSubacountsLeftDelta();
        event = false;
      }
    }
  }

  setSubacountsLeftDelta(){
    if(this.groupLoaded){
      let leftonsus = 1; //this.subsMan.getSubAccountsLeft(this.loaded_group_sus);
      console.log('lel',leftonsus);
      let selectedAccounts = this.subuserData.subUsers.filter((subusers)=>{ console.log( subusers.selectedForGroup ); return subusers.selectedForGroup === true }).length;
      console.log('selectedaccoubts',selectedAccounts);
      this.accountsleft = leftonsus - selectedAccounts;
      //this.accountsleft = (this.subsMan.getSubAccountsLeft(this.loaded_group_sus) - this.subuserData.subUsers.filter((subusers)=>{ return subusers.selectedForGroup }).length )
    }
  }



}

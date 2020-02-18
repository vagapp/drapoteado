import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { SubscriptionDataProvider } from '../../providers/subscription-data/subscription-data';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { SubscriptionManagerProvider } from '../../providers/subscription-manager/subscription-manager';
import { LoaderProvider } from '../../providers/loader/loader';
import { WsMessengerProvider } from '../../providers/ws-messenger/ws-messenger';
import { PermissionsProvider } from '../../providers/permissions/permissions';
import { BaseUrlProvider } from '../../providers/base-url/base-url';
import { AlertProvider } from '../../providers/alert/alert';

/**
 * Generated class for the GroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {
  public docs: Array<any> = new Array();

  constructor(
    public subsData: SubscriptionDataProvider,
    public userData: UserDataProvider,
    public subsMan: SubscriptionManagerProvider,
    public loader: LoaderProvider,
    public WS:WsMessengerProvider,
    public perm: PermissionsProvider,
    public navCtrl: NavController,
    public bu: BaseUrlProvider,
    public modalCtrl: ModalController,
    public alert: AlertProvider
  ) {
    
   
  }


  get docsleft(){
    return this.subsData.checkForSub() ? this.subsMan.getDocAccountsLeft(this.subsData.subscription) : 0 ;
  }

  ionViewDidLoad() {
    /*if(!this.perm.checkUserFeature([UserDataProvider.PLAN_ANY],[PermissionsProvider.PLAN_GROUP])){
      this.navCtrl.setRoot("HomePage");
    }*/
    console.log('ionViewDidLoad GroupPage');
    console.log('susdata is',this.subsData.subscription);
    console.log('code is', this.subsData.invcode);
    if(this.subsData.subscription.field_doctores_json){
    //this.docs = JSON.parse(this.subsData.subscription.field_doctores_json);
    this.subsData.setDoctores();
    console.log('this.docs',this.docs);
    }
  }

 

  async removerSubsUser(uid){
    console.log('toremove',uid);
    this.loader.presentLoader("Removiendo...");
    let recievers = this.subsData.subscription.field_doctores.concat(this.subsData.subscription.field_subusuarios);
    this.WS.generateDocoutgroup(recievers,uid);
    await this.subsMan.removeUser(uid);
    this.WS.generateSubsRemoveMessage(uid);
    this.loader.dismissLoader();
  }

  async getOut(uid){
    await this.removerSubsUser(uid);
    //this.bu.locationReload();
  }

  isThis(uid){
    return Number(uid) === Number(this.userData.userData.uid);
  }

  isplanHolder(){
   return this.perm.checkUserPlanHolder();
  }

  checkPlanHolder(Uid){
    return this.perm.checkPlanholderUid(Uid);

  }



  openNuevoSuscriptor(){
    console.log('subs restantes',this.subsData.getSubAccountsLeft());
    if(this.docsleft > 0  ){ 
    let Modal = this.modalCtrl.create("RegisterModalPage", { 'newSus': true }, { cssClass: "bigModal" });
    Modal.onDidDismiss(data => {
      console.log('reloaddocs ? ? ?');
    });
    Modal.present({});
  }else{
    this.alert.setStrings('IR A MI PLAN','después');
    this.alert.chooseAlert(
    '',
    'Ya agotaste los suscriptores incluidos en tu suscripción mensual, agrega todos los suscriptores adicionales que necesites ingresando aquí mi plan',
    ()=>{ this.alert.resetStrings(); this.navCtrl.setRoot("MiplanPage"); },
    ()=>{ this.alert.resetStrings(); }
    )
  }
  }

  

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubscriptionDataProvider } from '../../providers/subscription-data/subscription-data';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { SubscriptionManagerProvider } from '../../providers/subscription-manager/subscription-manager';
import { LoaderProvider } from '../../providers/loader/loader';
import { WsMessengerProvider } from '../../providers/ws-messenger/ws-messenger';
import { PermissionsProvider } from '../../providers/permissions/permissions';

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
    public navCtrl: NavController
  ) {
    
   
  }

  ionViewDidLoad() {
    /*if(!this.perm.checkUserFeature([UserDataProvider.PLAN_ANY],[PermissionsProvider.PLAN_GROUP])){
      this.navCtrl.setRoot("HomePage");
    }*/
    console.log('ionViewDidLoad GroupPage');
    console.log('susdata is',this.subsData.subscription);
    console.log('code is', this.subsData.subscription.field_invitation_code);
    console.log();
    if(this.subsData.subscription.field_doctores_json){
    //this.docs = JSON.parse(this.subsData.subscription.field_doctores_json);
    this.subsData.setDoctores();
    console.log('this.docs',this.docs);
    }
  }

 

  async removerSubsUser(uid){
    console.log('toremove',uid);
    this.loader.presentLoader("Removiendo...");
    await this.subsMan.removeUser(uid);
    this.WS.generateSubsRemoveMessage(uid);
    this.loader.dismissLoader();
  }

  async getOut(uid){
    await this.removerSubsUser(uid);
    window.location.reload();
  }

  isThis(uid){
    return Number(uid) === Number(this.userData.userData.uid);
  }

  isplanHolder(){
    console.log('isplanHolder',this.perm.checkUserPlanHolder());
   return this.perm.checkUserPlanHolder();
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubscriptionDataProvider } from '../../providers/subscription-data/subscription-data';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { SubscriptionManagerProvider } from '../../providers/subscription-manager/subscription-manager';
import { LoaderProvider } from '../../providers/loader/loader';
import { WsMessengerProvider } from '../../providers/ws-messenger/ws-messenger';

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
    public WS:WsMessengerProvider
  ) {
    
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPage');
<<<<<<< HEAD
    console.log('susdata is',this.subsData.subscription);
=======
    console.log('code is', this.subsData.subscription.field_invitation_code);
>>>>>>> 0248f9e58445ef1211b1a8adb88b82ad03e5e227
    if(this.subsData.subscription.field_doctores_json){
    //this.docs = JSON.parse(this.subsData.subscription.field_doctores_json);
    this.subsData.setDoctores();
    console.log('this.docs',this.docs);
    }
  }

 

  async removerSubsUser(uid){
    console.log('toremove',uid);
    this.loader.presentLoader("Removiendo...");
    //await this.subsMan.removeUser(uid);
    this.WS.generateSubsRemoveMessage(uid);
    this.loader.dismissLoader();
  }

  isThis(uid){
    return Number(uid) === Number(this.userData.userData.uid);
  }

}

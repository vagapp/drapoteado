import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubscriptionDataProvider } from '../../providers/subscription-data/subscription-data';
import { UserDataProvider } from '../../providers/user-data/user-data';

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
    public userData: UserDataProvider
  ) {
    
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPage');
    console.log('susdata is',this.subsData.subscription);
    if(this.subsData.subscription.field_doctores_json){
    this.docs = JSON.parse(this.subsData.subscription.field_doctores_json);
    console.log('this.docs',this.docs);
    }
  }

  removerSubsUser(uid){
    console.log('toremove',uid);
  }

  isThis(uid){
    return Number(uid) === Number(this.userData.userData.uid);
  }

}

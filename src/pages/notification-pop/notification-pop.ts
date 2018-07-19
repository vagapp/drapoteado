import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { Debugger } from '../../providers/user-data/debugger';

/**
 * Generated class for the NotificationPopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-notification-pop',
  templateUrl: 'notification-pop.html',
})
export class NotificationPopPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userData: UserDataProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPopPage');
  }

  notificationClick( notification ){
    Debugger.log(['notification',notification]);
  }

  
  

}

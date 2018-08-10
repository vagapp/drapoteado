import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, IonicPage } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { Debugger } from '../../providers/user-data/debugger';
import { NotificationsManagerProvider } from '../../providers/notifications-manager/notifications-manager';

/**
 * Generated class for the NotificationPopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-notification-pop',
  templateUrl: 'notification-pop.html',
})
export class NotificationPopPage {
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userData: UserDataProvider,
    public viewCtrl: ViewController,
    public notiMan: NotificationsManagerProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPopPage');
  }

  notificationClick( notification ){
    Debugger.log(['notification',notification]);
    this.notiMan.operateNotification(notification);
  }

  close() {
    this.viewCtrl.dismiss();
  }

  
  

}

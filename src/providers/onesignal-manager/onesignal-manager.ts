import { Injectable } from '@angular/core';
import { CordovaAvailableProvider } from '../cordova-available/cordova-available';
//import { OneSignal, OSNotificationPayload } from '@ionic-native/onesignal';
import { NotificationsManagerProvider } from '../notifications-manager/notifications-manager';
import { UserDataProvider } from '../user-data/user-data';

/*
  Generated class for the OnesignalManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OnesignalManagerProvider {
  onseignalDid = null;
  onesignalAPPid:string = '7902c2ba-310b-4eab-90c3-8cae53de891f';
  onesignalSenderid:string = '470345987173';

  constructor(
    //private oneSignal: OneSignal,
    private isco: CordovaAvailableProvider,
    private notiMan: NotificationsManagerProvider, 
    public userData: UserDataProvider
  ) {
  }

  init(){
    /*if (this.isco.isCordovaAvailable){
      var iosSettings = {};
      iosSettings["kOSSettingsKeyAutoPrompt"] = true;
      iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;
      // Initialise plugin with OneSignal service
      this.oneSignal.startInit(this.onesignalAPPid, this.onesignalSenderid).iOSSettings(iosSettings);
      this.oneSignal.getIds()
      .then((ids) =>
      {
         this.onseignalDid = ids;
      });
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
      this.oneSignal.handleNotificationReceived().subscribe(data => this.onPushReceived(data.payload));
      this.oneSignal.handleNotificationOpened().subscribe(data => this.onPushOpened(data.notification.payload));
      this.oneSignal.endInit();
    }*/
  }
/*
  private onPushReceived(payload: OSNotificationPayload) {
    //alert('Push recevied:' + payload.body);
    this.notiMan.cargarNotificaciones();
  }
  
  private onPushOpened(payload: OSNotificationPayload) {
    //Debugger.log(['onPushOpened',payload]);
    this.notiMan.operatePushNotification(payload.additionalData.action);
  }

  async savePlayerID(){
    let saveres = await this.userData.getSavePlayerIDrequest(this.onseignalDid.userId).toPromise();
    console.log('resuñt of savind onesignal id',saveres);
  }
  */

}

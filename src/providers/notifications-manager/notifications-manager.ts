import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Notification_c} from '../user-data/Notification'
import { NotificationsDataProvider } from '../notifications-data/notifications-data';
import { UserDataProvider } from '../user-data/user-data';
import { BaseUrlProvider } from '../base-url/base-url';
import { DrupalNodeManagerProvider } from '../drupal-node-manager/drupal-node-manager';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the NotificationsManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationsManagerProvider {

  constructor(
    public http: HttpClient,
    public notificationData: NotificationsDataProvider,
    public userData: UserDataProvider,
    public bu: BaseUrlProvider,
    public nodeMan: DrupalNodeManagerProvider
  ) {
  }

   /** 
   * NOTIFICACIONES
   * **/
  cargarNotificaciones():Observable<any>{
    let observer = this.getNotificationObservable().share();
    observer.subscribe((val)=>{this.setNotifications(val);});
    return observer;
  }

  getNotificationObservable(){
    let uidFilter = `?args[0]=${this.userData.userData.uid}` ;
    let url = `${this.bu.endpointUrl}/rest_notifications.json${uidFilter}`;
    let observer = this.http.get(url);
    return observer;
  }

  setNotifications( input_val ){
    for( let noti of input_val){
      let found = false;
      this.notificationData.notificaciones.forEach(snoti => {
        if(Number(snoti.Nid) === Number(noti.nid)){
          found = true;
          snoti.setData(noti);
        }
      });
      if(!found){
        let aux_notification = new Notification_c();
        aux_notification.setData(noti);
        this.notificationData.notificaciones.push(aux_notification);
      }
    }
  }


  operateNotification(noti:Notification_c){
    this.notificationData.Subject.next(noti.action);
  }

  operatePushNotification(action){
    this.notificationData.Subject.next(action);
  }

  generateNotification( forUid:number[], text:string, action:string ){
    let newNotification = new Notification_c();
    newNotification.user = forUid;
    newNotification.text = text;
    newNotification.action = action;
    const auxdata = newNotification.getData();
    this.nodeMan.generateNewNode(auxdata).toPromise();
}

}

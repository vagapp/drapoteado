import { Injectable } from '@angular/core';
import {Notification_c} from '../user-data/Notification';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the NotificationsDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationsDataProvider {
  notificaciones:Notification_c[] = new Array();
  Subject:Subject<any> = new Subject();
  constructor() {
  }
}

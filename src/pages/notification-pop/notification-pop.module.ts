import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationPopPage } from './notification-pop';

@NgModule({
  declarations: [
    NotificationPopPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationPopPage),
  ],
})
export class NotificationPopPageModule {}

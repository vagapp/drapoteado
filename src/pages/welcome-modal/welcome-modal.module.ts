import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomeModalPage } from './welcome-modal';

@NgModule({
  declarations: [
    WelcomeModalPage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomeModalPage),
  ],
})
export class WelcomeModalPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecoverModalPage } from './recover-modal';

@NgModule({
  declarations: [
    RecoverModalPage,
  ],
  imports: [
    IonicPageModule.forChild(RecoverModalPage),
  ],
})
export class RecoverModalPageModule {}

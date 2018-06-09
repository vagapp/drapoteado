import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevacitaModalPage } from './nuevacita-modal';

@NgModule({
  declarations: [
    NuevacitaModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevacitaModalPage),
  ],
})
export class NuevacitaModalPageModule {}

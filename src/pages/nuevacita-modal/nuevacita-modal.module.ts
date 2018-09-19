import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevacitaModalPage } from './nuevacita-modal';
import { CalendarModule } from "ion2-calendar";

@NgModule({
  declarations: [
    NuevacitaModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevacitaModalPage),
    CalendarModule
  ],
})
export class NuevacitaModalPageModule {}

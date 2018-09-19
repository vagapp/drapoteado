import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevacitaModalPage } from './nuevacita-modal';
import { CalendarModule } from "ion2-calendar";
import { momentPicker } from "angular-moment-picker";
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';

@NgModule({
  declarations: [
    NuevacitaModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevacitaModalPage),
    CalendarModule,
    DlDateTimePickerDateModule
  ],
})
export class NuevacitaModalPageModule {}

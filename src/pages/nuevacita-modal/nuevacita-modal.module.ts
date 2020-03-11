import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevacitaModalPage } from './nuevacita-modal';
import { CalendarModule } from "ion2-calendar";
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    NuevacitaModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevacitaModalPage),
    CalendarModule,
    DlDateTimePickerDateModule,
    DirectivesModule
  ],
})
export class NuevacitaModalPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportesPage } from './reportes';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ReportesPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportesPage),
    ComponentsModule
  ],
})
export class ReportesPageModule {}

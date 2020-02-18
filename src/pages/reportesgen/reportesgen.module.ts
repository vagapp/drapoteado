import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportesgenPage } from './reportesgen';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ReportesgenPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportesgenPage),
    ComponentsModule
  ],
})
export class ReportesgenPageModule {}

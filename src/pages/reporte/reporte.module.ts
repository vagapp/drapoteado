import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportePage } from './reporte';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    ReportePage,
  ],
  imports: [
    IonicPageModule.forChild(ReportePage),
    ComponentsModule
  ],
})
export class ReportePageModule {}

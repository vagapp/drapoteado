import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportegrupalPage } from './reportegrupal';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ReportegrupalPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportegrupalPage),
    ComponentsModule
  ],
})
export class ReportegrupalPageModule {}

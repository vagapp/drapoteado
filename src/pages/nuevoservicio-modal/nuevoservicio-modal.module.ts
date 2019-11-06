import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoservicioModalPage } from './nuevoservicio-modal';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    NuevoservicioModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoservicioModalPage),
    DirectivesModule
  ],
})
export class NuevoservicioModalPageModule {}

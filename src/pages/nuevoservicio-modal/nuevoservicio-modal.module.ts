import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoservicioModalPage } from './nuevoservicio-modal';

@NgModule({
  declarations: [
    NuevoservicioModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoservicioModalPage),
  ],
})
export class NuevoservicioModalPageModule {}

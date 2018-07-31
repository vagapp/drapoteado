import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitasPage } from './citas';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CitasPage,
  ],
  imports: [
    IonicPageModule.forChild(CitasPage),
    ComponentsModule
  ],
})
export class CitasPageModule {}

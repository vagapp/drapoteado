import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvisoprivacidadPage } from './avisoprivacidad';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AvisoprivacidadPage,
  ],
  imports: [
    IonicPageModule.forChild(AvisoprivacidadPage),
    ComponentsModule
  ],
})
export class AvisoprivacidadPageModule {}

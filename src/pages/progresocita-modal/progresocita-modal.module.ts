import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgresocitaModalPage } from './progresocita-modal';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    ProgresocitaModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgresocitaModalPage),
    DirectivesModule
  ],
})
export class ProgresocitaModalPageModule {}

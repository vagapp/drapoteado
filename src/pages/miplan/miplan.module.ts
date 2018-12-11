import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MiplanPage } from './miplan';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MiplanPage,
  ],
  imports: [
    IonicPageModule.forChild(MiplanPage),
    ComponentsModule
  ],
})
export class MiplanPageModule {}

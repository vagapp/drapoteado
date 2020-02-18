import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntergrupoPage } from './entergrupo';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EntergrupoPage,
  ],
  imports: [
    IonicPageModule.forChild(EntergrupoPage),
    ComponentsModule
  ],
})
export class EntergrupoPageModule {}

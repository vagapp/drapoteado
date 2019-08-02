import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MiplanPage } from './miplan';
import { ComponentsModule } from '../../components/components.module';
import { TooltipsModule } from 'ionic-tooltips';

@NgModule({
  declarations: [
    MiplanPage,
  ],
  imports: [
    IonicPageModule.forChild(MiplanPage),
    TooltipsModule.forRoot(),
    ComponentsModule
  ],
})
export class MiplanPageModule {}

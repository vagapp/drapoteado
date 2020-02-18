import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TerminosycondicionesPage } from './terminosycondiciones';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TerminosycondicionesPage,
  ],
  imports: [
    IonicPageModule.forChild(TerminosycondicionesPage),
    ComponentsModule
  ],
})
export class TerminosycondicionesPageModule {}

import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { IonicModule } from 'ionic-angular';
import { FooterComponent } from './footer/footer';
import { DirectivesModule } from '../directives/directives.module';


@NgModule({
	declarations: [HeaderComponent,
    FooterComponent],
	imports: [IonicModule,DirectivesModule],
	exports: [HeaderComponent,
    FooterComponent]
})
export class ComponentsModule {}

import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { IonicModule } from 'ionic-angular';
import { FooterComponent } from './footer/footer';

@NgModule({
	declarations: [HeaderComponent,
    FooterComponent],
	imports: [IonicModule],
	exports: [HeaderComponent,
    FooterComponent]
})
export class ComponentsModule {}

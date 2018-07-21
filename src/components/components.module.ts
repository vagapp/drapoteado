import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { IonicModule } from 'ionic-angular';
import { FooterComponent } from './footer/footer';
import { DirectivesModule } from '../directives/directives.module';
import { ClickOutsideModule } from 'ng-click-outside';
import { NlistComponent } from './nlist/nlist';


@NgModule({
	declarations: [HeaderComponent,
    FooterComponent,
    NlistComponent],
	imports: [IonicModule, DirectivesModule, ClickOutsideModule],
	exports: [HeaderComponent,
    FooterComponent,
    NlistComponent]
})
export class ComponentsModule {}

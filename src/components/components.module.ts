import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { IonicModule } from 'ionic-angular';
import { FooterComponent } from './footer/footer';
import { DirectivesModule } from '../directives/directives.module';
import { NlistComponent } from './nlist/nlist';
import { ConektaComponent } from './conekta/conekta';




@NgModule({
	declarations: [
    HeaderComponent,
    FooterComponent,
    NlistComponent,
    ConektaComponent

    
],
	imports: [
        IonicModule, 
        DirectivesModule
    ],
	exports: [HeaderComponent,
    FooterComponent,
    NlistComponent,
    ConektaComponent

    
]
})
export class ComponentsModule {}

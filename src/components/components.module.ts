import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { IonicModule } from 'ionic-angular';
import { FooterComponent } from './footer/footer';
import { DirectivesModule } from '../directives/directives.module';
import { NlistComponent } from './nlist/nlist';




@NgModule({
	declarations: [
    HeaderComponent,
    FooterComponent,
    NlistComponent,

    
],
	imports: [
        IonicModule, 
        DirectivesModule
    ],
	exports: [HeaderComponent,
    FooterComponent,
    NlistComponent,

    
]
})
export class ComponentsModule {}

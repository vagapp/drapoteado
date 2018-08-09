import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { IonicModule } from 'ionic-angular';
import { FooterComponent } from './footer/footer';
import { DirectivesModule } from '../directives/directives.module';
import { NlistComponent } from './nlist/nlist';
import { NotificationsDataProvider } from '../providers/notifications-data/notifications-data';
import { NotificationsManagerProvider } from '../providers/notifications-manager/notifications-manager';


@NgModule({
	declarations: [HeaderComponent,
    FooterComponent,
    NlistComponent],
	imports: [IonicModule, DirectivesModule, NotificationsDataProvider, NotificationsManagerProvider],
	exports: [HeaderComponent,
    FooterComponent,
    NlistComponent]
})
export class ComponentsModule {}

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RedbgDirective } from './redbg/redbg';

@NgModule({
	declarations: [RedbgDirective],
	imports: [IonicModule],
	exports: [RedbgDirective]
})
export class DirectivesModule {}

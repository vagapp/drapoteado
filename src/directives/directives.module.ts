import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RedbgDirective } from './redbg/redbg';
import { HidehideZeroDirective } from './hidehide-zero/hidehide-zero';
import { DisableNumberFlowDirective } from './disable-number-flow/disable-number-flow';
import { OnlynumberDirective } from './onlynumber/onlynumber';
import { MoneyinputDirective } from './moneyinput/moneyinput';

@NgModule({
	declarations: [RedbgDirective,
    HidehideZeroDirective,
    DisableNumberFlowDirective,
    OnlynumberDirective,
    MoneyinputDirective],
	imports: [IonicModule],
	exports: [RedbgDirective,
    HidehideZeroDirective,
    DisableNumberFlowDirective,
    OnlynumberDirective,
    MoneyinputDirective]
})
export class DirectivesModule {}

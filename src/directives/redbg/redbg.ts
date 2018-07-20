import { Directive } from '@angular/core';

/**
 * Generated class for the RedbgDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[redbg]' // Attribute selector
})
export class RedbgDirective {

  constructor() {
    console.log('Hello RedbgDirective Directive');
  }

}

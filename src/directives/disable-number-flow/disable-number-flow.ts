import { Directive, Renderer2  } from '@angular/core';

/**
 * Generated class for the DisableNumberFlowDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[disable-number-flow]', // Attribute selector
  host: {
    '(keydown)' : 'onKeyUp($event)',
        }
})
export class DisableNumberFlowDirective {

  constructor(private renderer: Renderer2) {
    //console.log('Hello DisableNumberFlowDirective Directive');
  }
  onKeyUp ( $event ) {
   if($event.which === 38 || $event.which == 40 )
          $event.preventDefault();
  }


}

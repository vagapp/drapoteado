import { Directive } from '@angular/core';

/**
 * Generated class for the OnlynumberDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[onlynumber]', // Attribute selector
  host: {
    '(keydown)' : 'onKeyUp($event)'
        }
})
export class OnlynumberDirective {

  constructor() {
    console.log('Hello OnlynumberDirective Directive');
  }

  onKeyUp ( $event ) {
         if ($event.which > 31 && ($event.which < 48 || $event.which > 57) && !($event.which >= 96 && $event.which <= 105 )){
          $event.preventDefault();
         }
       
}

}

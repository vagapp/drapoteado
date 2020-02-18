import { Directive } from '@angular/core';
import { NgModel } from '@angular/forms';

/**
 * Generated class for the MoneyinputDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[ngModel][moneyinput]', // Attribute selector
  host: {
    '(keydown)' : 'onKeyUp($event)'
        }
})
export class MoneyinputDirective {
  regexp = new RegExp( '^(?!0\.00)[1-9]\d*(\.?\d{0,2})$');

  constructor(public model: NgModel) {
    console.log('Hello moneyinput Directive');
  }

  onKeyUp ( $event ) {
    if ($event.which !== 190 && $event.which > 31 && ($event.which < 48 || $event.which > 57)){
      $event.preventDefault();
     }
    }

ngAfterViewChecked(){
  console.log(this.model.value);
  /*let val = this.model.value;
  let number = val.replace( /[^\d\.]/g, '' );
  if(!this.regexp.test(number)){
    number.substring(0, number.length - 1);
  }else{
    this.model.valueAccessor.writeValue(number);
  }*/
}
}
        
       
        
      



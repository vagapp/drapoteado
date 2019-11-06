import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { NgModel } from '@angular/forms';

/**
 * Generated class for the HidehideZeroDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[ngModel][hidehide-zero]', // Attribute selector
  host: {
    "(input)": 'onInputChange($event)'
        }
})
export class HidehideZeroDirective {

  constructor( public model: NgModel) {
    //console.log('Hello HidehideZeroDirective Directive',this.elem,this.model,this.model.value, !this.model.value);
    /*if(!this.model.value || Number(this.model.value) === 0){
      this.renderer.setProperty(this.elem.nativeElement,'value','');
      console.log('model',this.model);
     }*/
  }

  ngAfterViewChecked(){
    if(!this.model.value || Number(this.model.value) === 0){
      this.model.valueAccessor.writeValue(null);
      //this.renderer.setProperty(this.elem.nativeElement,'value','');
      
     }
     //console.log('model',this.model);
  }



  onInputChange($event){
   if(Number(this.model.value) === 0){
    this.model.valueAccessor.writeValue(null);
    //this.renderer.setProperty(this.elem.nativeElement,'value','');
    //console.log('model',this.model);
  }
  }

}

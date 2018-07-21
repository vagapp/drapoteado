import { Component, HostListener, ElementRef, Input } from '@angular/core';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { Debugger } from '../../providers/user-data/debugger';

/**
 * Generated class for the NlistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'nlist',
  templateUrl: 'nlist.html'
})
export class NlistComponent {
  private _nlistn = 0;
  private _openClass = '';
  show:boolean = false;
  text: string;

  @Input()
  set nlistn( n:number ){
    this._nlistn = n;
  }
  get nlistn():number{
    return this._nlistn;
  }

  @Input()
  set openClass( cssclass:string ){
    this._openClass = cssclass;
  }
  get openClass():string{
    return this._openClass;
  }
  

  constructor(
    public userData:UserDataProvider,
    public eRef:ElementRef
  ) {
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if( event.target.className.includes(this.openClass) ){
      this.open();
    }else{
      if(!this.eRef.nativeElement.contains(event.target)) {
        this.close();
      }
    }
  }


  open() {
    if(!this.show){
    this.show = true;
    }
  }

  close(){
    if(this.show){
    this.show = false;
    }
  }

  toggle(){
    this.show = !this.show;
  }

  notificationClick( notification ){
    Debugger.log(['notification',notification]);
  }

}

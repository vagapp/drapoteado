import { Injectable } from '@angular/core';

/*
  Generated class for the PwaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PwaProvider {
  pwaevent;
  showInstall:boolean = false;

  constructor() {
  }


  show(){
    this.showInstall = false;
    this.pwaevent.prompt();
    this.pwaevent.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
    });
  }

}

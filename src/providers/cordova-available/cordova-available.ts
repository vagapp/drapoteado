import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

@Injectable()
export class CordovaAvailableProvider {

  constructor(public plt: Platform) {
  }

  get isCordovaAvailable():boolean{
    let ret = true;
    if (!(<any>window).cordova) {
      //alert('This is a native feature. Please use a device');
      ret = false;
    }
    if (this.plt.is('core') || this.plt.is('mobileweb')) ret = false;
    return ret;
  }

}

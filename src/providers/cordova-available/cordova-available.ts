import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable()
export class CordovaAvailableProvider {

  constructor(public plt: Platform, public iab: InAppBrowser) {
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
  
  get isIos():boolean{
    console.log('platform is ', this.plt.is('ios') )
    return this.plt.is('ios');
  }


  directToWebApp(){
    this.iab.create('https://app.tual.mx/','_system');
  }
}

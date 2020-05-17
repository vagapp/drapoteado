import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable()
export class CordovaAvailableProvider {
  static PLATFORM_DEFAULT:string = 'default';
  static PLATFORM_IOS:string = 'ios';

  constructor(public plt: Platform, public iab: InAppBrowser) {
  }
  /**Devuelve el nombre de la plataforma que esta activa */
  get ActivePlatform():String{
    let ret = CordovaAvailableProvider.PLATFORM_DEFAULT;
    if(this.isIos){
      ret = CordovaAvailableProvider.PLATFORM_IOS;
    }
    return ret;
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
    return this.plt.is('ios');
  }


  directToWebApp(){
    this.iab.create('https://app.tual.mx/','_system');
  }
}

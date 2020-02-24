import { Injectable } from '@angular/core';
import { ToastController, Toast } from 'ionic-angular';

/*
  Generated class for the ToasterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToasterProvider {
  toasts: Array<Toast>;

  constructor(public toastCtrl:ToastController) {
    this.toasts = new Array();
  }

  genToast(label, msg, start=true){
    let toast = this.toastCtrl.create({
      message: msg,
      position: 'top'
    });
    this.toasts[label] = toast;
    if(start){
      toast.present();
    }
    return toast;
  }

  stopToast(label){
    this.toasts[label].dismiss();
  }

}

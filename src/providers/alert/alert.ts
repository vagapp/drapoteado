import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertProvider {
  yesString:string = 'Si';
  noString:string = 'No';

  constructor(
    public alertCtrl: AlertController
  ) {
    console.log('Hello AlertProvider Provider');
  }

  presentAlert(title:string, msg:string){
    let alert = this.alertCtrl.create({
      title: title,
      message: msg,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  chooseAlert(title:string, msg:string, yesCallback, noCallback){
    let alert = this.alertCtrl.create({
      title: title,
      message: msg,
      buttons: [
        {
          text: this.noString,
          role: 'cancel',
          handler: () => {
            noCallback();
          }
        },
        {
          text: this.yesString,
          handler: () => { 
            yesCallback();
          }
        }
      ]
    });
    alert.present();
  }

}

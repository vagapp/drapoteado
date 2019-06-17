import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { Debugger } from '../../providers/user-data/debugger';
import { AlertProvider } from '../../providers/alert/alert';

/**
 * Generated class for the RecoverModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recover-modal',
  templateUrl: 'recover-modal.html',
})
export class RecoverModalPage {
  recovername:string = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userData: UserDataProvider,
    public viewCtrl: ViewController,
    public alert: AlertProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoverModalPage');
  }

  basicvalidation():boolean{
    let ret = true;
    if( this.recovername.localeCompare('') === 0){
      ret = false;
    }
    return ret;
  }

  actionRequestRecover(){
    if(this.basicvalidation()){
      this.userData.requestRecover(this.recovername).subscribe(
        (val) => {
          this.alert.presentAlert('Encontrado','recibirás tu eMail dentro de la brevedad');
          Debugger.log(['return of recoverrequesto',val]);
          this.dismiss();
        },(response)=>{
          this.alert.presentAlert('Error','No encontramos nada con estos datos');
        },()=>{

        }
      );
    }
  }
  
  /*presentAlert(key,Msg) {
    let alert = this.alertCtrl.create({
      title: key,
      subTitle: Msg,
      buttons: ['Dismiss']
    });
    alert.present();
  }*/


  dismiss() {
    this.viewCtrl.dismiss();
  }



}

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
  busy:boolean = false;

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
      this.busy = true;
      this.userData.requestRecover(this.recovername).subscribe(
        (val) => {
          this.busy = false;
          this.alert.presentAlert('','Recibirás un correo electrónico a la brevedad.');
          Debugger.log(['return of recoverrequesto',val]);
          this.dismiss();
        },(response)=>{
          this.busy = false;
          this.alert.presentAlert('','No se encontró nada con este correo electrónico');
        },()=>{

        }
      );
    }
  }
  


  dismiss() {
    this.viewCtrl.dismiss();
  }



}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserDataProvider  } from '../../providers/user-data/user-data';

/**
 * Generated class for the RegisterModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-modal',
  templateUrl: 'register-modal.html',
})
export class RegisterModalPage {
  passconfirm:string;
  onGroup:boolean;
  grupoOtro:string;
  hospitalOotro:string; 
  onHospital:boolean;
  constructor(public navCtrl: NavController, public viewCtrl:ViewController, public navParams: NavParams, public userData: UserDataProvider) {
    this.grupoOtro = null;
    this.hospitalOotro = null;
    this.passconfirm = null;
    this.onGroup = false;
    this.onHospital = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterModalPage');
  }

  actionRegister(){
    if(this.onGroup){
    if(this.grupoOtro != null){
      console.log('other group functionality needed');
    }
  }
  if(this.onHospital){
    if(this.hospitalOotro != null){
      console.log('other hospital functionality needed');
    }
  }
  console.log(this.onGroup);
  console.log(this.onHospital);
  console.log(this.hospitalOotro);
  console.log(this.grupoOtro);
  this.userData.userData.field_useremail.und[0].email=this.userData.userData.mail;
  this.userData.userData.field_tipo_de_usuario.und[0]="1";
  /*registrando un doctor*/
    console.log('register',this.userData.userData);
    let register_observer = this.userData.register();
    register_observer.subscribe(
      (val) => {
          console.log("sucess register on modal");
          this.dismiss();
      },
      response => {
          console.log("POST call in error", response);
          console.log("show error");
      },
      () => {
          console.log("The POST observable is now completed.");
      });
   
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


 

}

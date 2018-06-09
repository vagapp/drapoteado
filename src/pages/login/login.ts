import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalOptions, ModalController, LoadingController } from 'ionic-angular';
import { RegisterModalPage } from '../register-modal/register-modal';
import { UserDataProvider  } from '../../providers/user-data/user-data';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  showLoginForm = false;
  username:string;
  password:string; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    public userData: UserDataProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  actionLogin(){
    console.log("tryna login");
    console.log(this.username);
    console.log(this.password);
    let login_observer = this.userData.login(this.username,this.password);
    let loader = this.loadingCtrl.create({
      content: ""
    });  
  
    login_observer.subscribe(
      (val) => {
          console.log("sucess login on login view");
          this.navCtrl.push(HomePage, {});
      },
      response => {
          console.log("POST call in error", response);
          console.log("show error");
          response.error.forEach(element => {
            this.presentToast(element);
          });
      },
      () => {
          loader.dismiss();
          console.log("The POST observable is now completed.");
      });
  }

  actionOpenRegister(){
    console.log("open Register");
    let Modal = this.modalCtrl.create(RegisterModalPage, undefined, { cssClass: "bigModal" });
    Modal.present({});
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 6000,
      position: 'top'
    });
    toast.present();
  }
  
    






}

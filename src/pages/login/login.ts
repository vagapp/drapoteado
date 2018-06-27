import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalOptions, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { RegisterModalPage } from '../register-modal/register-modal';
import { UserDataProvider  } from '../../providers/user-data/user-data';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
import { Debugger } from '../../providers/user-data/debugger';

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
    public alertCtrl: AlertController,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  actionLogin(){
    console.log("tryna login");
    console.log(this.username);
    console.log(this.password);
    let loading = this.loadingCtrl.create({
      content: 'Entrando...'
    });
    loading.present();
    let login_observer = this.userData.login(this.username,this.password);
    let loader = this.loadingCtrl.create({
      content: ""
    });  
  
    login_observer.subscribe(
      (val) => {
          console.log("sucess login on login view");
          console.log("logged in as", val['user']['name']);
            this.userData.setSessionData(val);
            //this doesnt give the complete info of the user. need to request the user info.
            this.userData.requestUserData(val['user']['uid']).subscribe((val)=>{
              //val['user'] = user_aux;
              console.log(val);
              this.userData.setUserData(val);
              this.userData.cargarPlanes();
              this.userData.cargarSubscription();
              let moveinterval = setInterval(() =>{
                if(this.userData.subscription !== null){
                  Debugger.log(["check of suscription",this.userData.subscription]);
                  if(Number(this.userData.subscription.field_active) === 0){
                  this.navCtrl.setRoot(HomePage, {});
                  loading.dismiss();
                  clearInterval(moveinterval);
                  }else{
                  this.navCtrl.setRoot(HomePage, {});
                  loading.dismiss();
                  clearInterval(moveinterval);
                  }
              }
              },500);
            },  () => {
          });
          
      },
      response => {
          Debugger.log(["POST call in error", JSON.stringify(response)]);
          this.presentAlert('Usuario o contraseña incorrectos','Error');
          loading.dismiss();
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

  presentAlert(msg:string,title:string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['Ok']
      });
      alert.present();
  }


  
    






}

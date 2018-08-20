import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { UserDataProvider  } from '../../providers/user-data/user-data';
import { LoaderProvider } from '../../providers/loader/loader';
import { DoctoresDataProvider } from '../../providers/doctores-data/doctores-data';
import { CitasManagerProvider } from '../../providers/citas-manager/citas-manager';
import { DoctoresManagerProvider } from '../../providers/doctores-manager/doctores-manager';
import { AlertProvider } from '../../providers/alert/alert';
//import { ToastController } from 'ionic-angular';
//import { Debugger } from '../../providers/user-data/debugger';

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
    public loader: LoaderProvider,
    public alert: AlertProvider,
    public docData: DoctoresDataProvider,
    public citasManager:CitasManagerProvider,
    public docMan: DoctoresManagerProvider
  ) {
  }

  ionViewDidLoad() {
  }

  async actionLogin(){
    this.loader.presentLoader('Entrando ...');
    let token_data = await this.userData.requestToken().toPromise();
    if( token_data ) this.userData.sessionData.token = token_data['token'];
    let login_observer = this.userData.login(this.username,this.password);
    await login_observer.subscribe(
      async (val) => {
        this.userData.setSessionData(val);
        await this.userData.loginSetData(val['user']['uid']);
        await this.docMan.initDoctoresUids();
        await this.citasManager.requestCitas().toPromise();
        console.log(this.citasManager.citasData.citas);
        this.loader.dismissLoader();
        this.navCtrl.setRoot("HomePage");
      },
      response => {
          this.alert.presentAlert('Error',response.error);
          this.loader.dismissLoader();
      });
    }

  

  actionOpenRegister(){
    //console.log("open Register");
    let Modal = this.modalCtrl.create("RegisterModalPage", undefined, { cssClass: "bigModal" });
    Modal.present({});
  }

  actionOpenRecover(){
    let Modal = this.modalCtrl.create("RecoverModalPage", undefined, { cssClass: "smallModal recoverModal" });
    //let Modal = this.modalCtrl.create(RecoverModalPage);
    Modal.present({});
    //console.log("open Recover");
  }

  openRegister(){
    let Modal = this.modalCtrl.create("RegisterModalPage", undefined, { cssClass: "bigModal" });
    Modal.onDidDismiss(data => {});
    Modal.present({});
  }




  
    






}

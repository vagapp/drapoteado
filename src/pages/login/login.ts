import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { UserDataProvider  } from '../../providers/user-data/user-data';
import { LoaderProvider } from '../../providers/loader/loader';
import { DoctoresDataProvider } from '../../providers/doctores-data/doctores-data';
import { CitasManagerProvider } from '../../providers/citas-manager/citas-manager';
import { DoctoresManagerProvider } from '../../providers/doctores-manager/doctores-manager';
import { AlertProvider } from '../../providers/alert/alert';
import { SubscriptionManagerProvider } from '../../providers/subscription-manager/subscription-manager';
import { ServiciosManagerProvider } from '../../providers/servicios-manager/servicios-manager';
import { BaseUrlProvider } from '../../providers/base-url/base-url';
import { StorageProvider } from '../../providers/storage/storage';
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
    public docMan: DoctoresManagerProvider,
    public subscriptionManager: SubscriptionManagerProvider,
    public serviciosManager: ServiciosManagerProvider,
    public bu: BaseUrlProvider,
    public storage: StorageProvider
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
          //if logged in set session and userdata
      this.userData.setSessionData(val);
      await this.userData.loginSetData(val['user']['uid']);
      this.storage.set('usr',this.username);
      this.storage.set('pss',this.password);
      location.reload();
      },
      response => {
        console.log('login error response',response);
          this.alert.presentAlert('','Usuario o contraseña incorrectos');
          this.loader.dismissLoader();
      });
    }

    


  actionOpenRecover(){
    let Modal = this.modalCtrl.create("RecoverModalPage", undefined, { cssClass: "smallModal recoverModal" });
    Modal.present({});
  }

  openRegister(){
    let Modal = this.modalCtrl.create("RegisterModalPage", undefined, { cssClass: "bigModal" });
    Modal.present({});
  }

  openterminos(){this.navCtrl.setRoot('TerminosycondicionesPage');}
  openAviso(){this.navCtrl.setRoot('AvisoprivacidadPage');}
  openFaq(){this.navCtrl.setRoot('FaqPage');}



  
    






}

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserDataProvider } from '../providers/user-data/user-data';
import { CordovaAvailableProvider } from '../providers/cordova-available/cordova-available';
import { WebsocketServiceProvider } from '../providers/websocket-service/websocket-service';
import { CitasManagerProvider } from '../providers/citas-manager/citas-manager';
import { PlanesDataProvider } from '../providers/planes-data/planes-data';
import { OnesignalManagerProvider } from '../providers/onesignal-manager/onesignal-manager';
import { DoctoresManagerProvider } from '../providers/doctores-manager/doctores-manager';
import { WsMessengerProvider } from '../providers/ws-messenger/ws-messenger';
import { ServiciosManagerProvider } from '../providers/servicios-manager/servicios-manager';
import { SubscriptionManagerProvider } from '../providers/subscription-manager/subscription-manager';
import { PermissionsProvider } from '../providers/permissions/permissions';



//import { Debugger } from '../providers/user-data/debugger';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = "LoginPage";
  Home: any = 'HomePage';
  token: string;
  startdate:number;
  loaddate:number;


  

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public userData: UserDataProvider,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public ica: CordovaAvailableProvider,
    public wsp: WebsocketServiceProvider,
    public citasManager: CitasManagerProvider,
    public planes: PlanesDataProvider,
    public OneMan: OnesignalManagerProvider,
    public docMan: DoctoresManagerProvider,
    public wsMessenger: WsMessengerProvider,
    public serviciosManager: ServiciosManagerProvider,
    public subscriptionManager: SubscriptionManagerProvider,
    public perm: PermissionsProvider
  ) {
    this.startdate = new Date().getTime();
    this.initializeApp();
    this.pages = [
      { title: 'Home', component: "HomePage" },
      { title: 'Citas', component: "CitasPage" },
      { title: 'Servicios', component: "ServiciosPage" },
      { title: 'Usuarios', component: "UsuariosPage" },
      { title: 'Reportes', component: "ReportesPage" },
      { title: 'Login', component: "LoginPage" }
    ];
  }



  initializeApp() {
    this.splashScreen.hide();
    this.rootPage = 'LoginPage';
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.OneMan.init();
      if(this.ica.isCordovaAvailable)this.splashScreen.hide();
      let loading = this.loadingCtrl.create({content: 'Bienvenido'});
      loading.present();
      this.initLoad().then(()=>{
        if(this.userData.userData.uid !== 0) this.rootPage = 'HomePage';
        loading.dismiss();
        this.loaddate = new Date().getTime();
        this.wsMessenger.generateMessage(
          [76],
          'loadedReport',
          `${this.userData.userData.uid}`,
          this.loaddate - this.startdate,
          true,
        );
      });
    });
  }

  //loads token and planes syncronous
  async initLoad(){
    let token_data = await this.userData.requestToken().toPromise();
    if( token_data ) this.userData.sessionData.token = token_data['token'];
    let planes_data = await this.planes.requestPlanes().toPromise();
    if( planes_data ) this.planes.setPlanes(planes_data);
    let connec_Data = await this.userData.checkConnect().toPromise();
    if(connec_Data && connec_Data['user']['uid'] != 0){
      //if logged in set session and userdata
      this.userData.setSessionData(connec_Data);
      await this.userData.loginSetData(connec_Data['user']['uid']);
      await this.subscriptionManager.loadSubscription();
      await this.docMan.initDoctoresUids();
      await this.subscriptionManager.loadDoctorsSubscriptions();
      console.log('subscription initload is', this.subscriptionManager.subsData.subscription);
      console.log('docs before filter active',JSON.stringify(this.docMan.docData.doctoresIDs));
      this.docMan.filterActiveDoctors();
      console.log('docs after filter active',JSON.stringify(this.docMan.docData.doctoresIDs));
      await this.citasManager.requestCitas().toPromise();
      this.serviciosManager.loadServicios();
      console.log(this.citasManager.citasData.citas);
      console.log('docs end initload',JSON.stringify(this.docMan.docData.doctoresIDs));
      //this.wsMessenger.testCitaSend();
   }
}

  openPage(page) {
    this.nav.setRoot(page.component);
  }
  
  openHomePage(){this.nav.setRoot(this.Home);}
  openCitasPage(){this.nav.setRoot("CitasPage");}
  openServiciosPage(){this.nav.setRoot("ServiciosPage");}
  openUsuariosPage(){this.nav.setRoot("UsuariosPage");}
  openReportesPage(){this.nav.setRoot("ReportesPage");}
  openFacturacionPage(){this.nav.setRoot("FacturacionPage");}
  openRegister(){
    //console.log("open Register");
    let Modal = this.modalCtrl.create("RegisterModalPage", undefined, { cssClass: "bigModal" });
    Modal.present({});
  }
  
  
  
  
  


}

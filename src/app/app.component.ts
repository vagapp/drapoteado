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



//import { Debugger } from '../providers/user-data/debugger';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = "LoginPage";
  Home: any = 'HomePage';
  token: string;


  

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
    public wsMessenger: WsMessengerProvider
  ) {
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
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.OneMan.init();
      if(this.ica.isCordovaAvailable)this.splashScreen.hide();
      let loading = this.loadingCtrl.create({content: 'Bienvenido'});
      loading.present();
      this.initLoad().then(()=>{
        if(this.userData.userData.uid !== 0) this.rootPage = 'HomePage';
        loading.dismiss();
      });
    
      /*this.userData.requestToken().subscribe((val) => {
        this.userData.sessionData.token = val['token'];
        //console.log("token updated",this.userData.sessionData.token);
        //request token for this session, then check if conected to system connect.
        //this.userData.cargarPlanes();
        this.userData.checkConnect().subscribe((val)=>{
          console.log('checkConnect',val);
          if(val['user']['uid'] != 0){
            //console.log("logged in as", val['user']['name']);
            this.userData.setSessionData(val);
            //this doesnt give the complete info of the user. need to request the user info.
            this.userData.requestUserData(val['user']['uid']).subscribe((val)=>{
              //val['user'] = user_aux;
              //console.log(val);
              this.userData.setUserData(val);
              this.userData.cargarSubscription();
              this.citasManager.requestCitas();
              //this.userData.generateNotification( [76],'Hello World Notification cita', 'cita-196');
              this.userData.cargarNotificaciones();
              
              let moveinterval = setInterval(() =>{
                //Debugger.log(['checking initiation']);
                //Debugger.log(['planes set',this.userData.are_planes_set]);
                //Debugger.log(['planes set',this.userData.planes]);
                //Debugger.log(['subscription',this.userData.subscription]);
                if(
                  this.userData.are_planes_set && 
                  this.userData.subscription !== null && 
                  this.userData.subscription.is_plan_set
                ){
                  //Debugger.log(["check of suscription",this.userData.subscription]);
                 
                  if(Number(this.userData.subscription.field_active) === 0){
                  //this.rootPage=RegisterModalPage;
                 
                  this.rootPage = 'HomePage';
                  loading.dismiss();
                  clearInterval(moveinterval);
                  }else{
                  this.rootPage = 'HomePage';
                  this.userData.cargarListaReportes();
                  loading.dismiss();
                  clearInterval(moveinterval);
                  }
              }
              },500);
            },  () => {
          });
          }else{
            //console.log("not logged in.");
            this.rootPage = "LoginPage";
            loading.dismiss();
          }
        });
    }, response => {
      console.log("POST call in error", JSON.stringify(response));
  },() => {
    //console.log("The POST observable is now completed.");
});
*/

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
      this.docMan.initDoctoresUids();
      await this.citasManager.requestCitas().toPromise();
      console.log(this.citasManager.citasData.citas);
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

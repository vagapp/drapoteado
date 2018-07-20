import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal, OSNotificationPayload } from '@ionic-native/onesignal';
import { isCordovaAvailable } from '../common/is-cordova-available';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage }from '../pages/login/login';
import { CitasPage } from '../pages/citas/citas';
import { ServiciosPage } from '../pages/servicios/servicios';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { ReportesPage } from '../pages/reportes/reportes';
import { UserDataProvider } from '../providers/user-data/user-data';
import { FacturacionPage } from '../pages/facturacion/facturacion';
import { Debugger } from '../providers/user-data/debugger';
import { RegisterModalPage } from '../pages/register-modal/register-modal';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  token: string;
  connectcomp:boolean=false;

  

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public userData: UserDataProvider,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    private oneSignal: OneSignal
  ) {
    this.initializeApp();
    
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Citas', component: CitasPage },
      { title: 'Servicios', component: ServiciosPage },
      { title: 'Usuarios', component: UsuariosPage },
      { title: 'Reportes', component: ReportesPage },
      { title: 'Login', component: LoginPage }
    ];
  }

  /**
   * ONESIGNAL WEB NOTIFICATION
   * <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
<script>
  var OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "7902c2ba-310b-4eab-90c3-8cae53de891f",
      autoRegister: false,
      notifyButton: {
        enable: true,
      },
    });
  });
</script>
   * **/

  initializeApp() {
    this.platform.ready().then(() => {
      this.initOnesignal();
      if(isCordovaAvailable)this.splashScreen.hide();
      Debugger.log(['platform redy']);
      let loading = this.loadingCtrl.create({
        content: 'Bienvenido'
      });
      loading.present();
     
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      
      this.userData.requestToken().subscribe((val) => {
        this.userData.sessionData.token = val['token'];
        console.log("token updated",this.userData.sessionData.token);
        //request token for this session, then check if conected to system connect.
        //sometimes this runs faster so it should be assigned here.
        this.userData.cargarPlanes();
        this.connectcomp = false;
        this.userData.checkConnect().subscribe((val)=>{
          Debugger.log(['checkConnect val',val]);
          this.connectcomp = true;
          if(val['user']['uid'] != 0){
            console.log("logged in as", val['user']['name']);
            this.userData.setSessionData(val);
            //this doesnt give the complete info of the user. need to request the user info.
            this.userData.requestUserData(val['user']['uid']).subscribe((val)=>{
              //val['user'] = user_aux;
              console.log(val);
              this.userData.setUserData(val);
              this.userData.cargarSubscription();
              let moveinterval = setInterval(() =>{
                Debugger.log(['checking initiation']);
                Debugger.log(['planes set',this.userData.are_planes_set]);
                Debugger.log(['planes set',this.userData.planes]);
                Debugger.log(['subscription',this.userData.subscription]);
                if(
                  this.userData.are_planes_set && 
                  this.userData.subscription !== null && 
                  this.userData.subscription.is_plan_set
                ){
                  Debugger.log(["check of suscription",this.userData.subscription]);
                  if(Number(this.userData.subscription.field_active) === 0){
                  //this.rootPage=RegisterModalPage;
                  this.rootPage = HomePage;
                  loading.dismiss();
                  clearInterval(moveinterval);
                  }else{
                  this.rootPage = HomePage;
                  this.userData.cargarListaReportes();
                  loading.dismiss();
                  clearInterval(moveinterval);
                  }
              }
              },500);
            },  () => {
          });
          }else{
            console.log("not logged in.");
            this.rootPage = LoginPage;
            loading.dismiss();
          }
        });
        /*let outInterval = setInterval( ()=>{
          Debugger.log(['connectTimeout is',this.connectcomp]);
          if(!this.connectcomp){
            Debugger.log(['CONECT TIMEOUT']);
            this.userData.logout();
            loading.dismiss();
            //window.location.reload();
          }
        },120000);*/
    }, response => {
      console.log("POST call in error", JSON.stringify(response));
  },() => {
    console.log("The POST observable is now completed.");
});

    });
  }


  initOnesignal(){
    if (isCordovaAvailable()){
      var iosSettings = {};
      iosSettings["kOSSettingsKeyAutoPrompt"] = true;
      iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;
      // Initialise plugin with OneSignal service
      this.oneSignal.startInit('7902c2ba-310b-4eab-90c3-8cae53de891f', '470345987173').iOSSettings(iosSettings);
      this.oneSignal.getIds()
      .then((ids) =>
      {
         console.log('getIds: ' + JSON.stringify(ids));
         this.userData.onseignalDid = ids;
      });
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
      this.oneSignal.handleNotificationReceived().subscribe(data => this.onPushReceived(data.payload));
      this.oneSignal.handleNotificationOpened().subscribe(data => this.onPushOpened(data.notification.payload));
      this.oneSignal.endInit();
      //postNotification(Parameters)
    } 
  }

  private onPushReceived(payload: OSNotificationPayload) {
    alert('Push recevied:' + payload.body);
  }
  
  private onPushOpened(payload: OSNotificationPayload) {
    alert('Push opened: ' + payload.body);
  }

  /*initCheckSession(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    console.log("initCheckSession",this.userData.sessionData);
    if(!this.userData.sessionData.sessid){
      //this.storage.get('sessionData').then((val) => {
        if(!val){
          console.log("no session");
          loading.dismiss();
          //this.openPage(LoginPage);
          //this.splashScreen.hide();
        }else{

          this.userData.sessionData = val;
          console.log("sessionData got",this.userData.sessionData);
          /*let userobserver = this.userData.getSessionUserData();
          userobserver.subscribe(
            (val) => {
                //console.log("POST call successful value returned in body", val);
            },
            response => {
                //console.log("POST call in error", response);
            },
            () => {
                //console.log("The POST observable is now completed.");
                loading.dismiss();
            });
          //this.splashScreen.hide();
          
        }
      });
    }else{
      console.log("session ok");
      loading.dismiss();
      //this.splashScreen.hide();
  }
}*/

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
  openHomePage(){this.nav.setRoot(HomePage);}
  openCitasPage(){this.nav.setRoot(CitasPage);}
  openServiciosPage(){this.nav.setRoot(ServiciosPage);}
  openUsuariosPage(){this.nav.setRoot(UsuariosPage);}
  openReportesPage(){this.nav.setRoot(ReportesPage);}
  openFacturacionPage(){this.nav.setRoot(FacturacionPage);}
  openRegister(){
    console.log("open Register");
    let Modal = this.modalCtrl.create(RegisterModalPage, undefined, { cssClass: "bigModal" });
    Modal.present({});
  }
  
  
  
  
  


}

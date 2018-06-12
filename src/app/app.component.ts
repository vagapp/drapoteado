import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage }from '../pages/login/login';
import { CitasPage } from '../pages/citas/citas';
import { ServiciosPage } from '../pages/servicios/servicios';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { ReportesPage } from '../pages/reportes/reportes';
import { UserDataProvider } from '../providers/user-data/user-data';
import { Storage } from '@ionic/storage';
import { FacturacionPage } from '../pages/facturacion/facturacion';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  token: string;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public userData: UserDataProvider,
    private storage: Storage,
    public loadingCtrl: LoadingController
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

  initializeApp() {
    this.platform.ready().then(() => {
     
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.userData.requestToken().subscribe((val) => {
        //request token for this session, then check if conected to system connect.
        //sometimes this runs faster so it should be assigned here.
        this.userData.sessionData.token = val['token'];
        this.userData.checkConnect().subscribe((val)=>{
          if(val['user']['uid'] != 0){
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
                  if(Number(this.userData.subscription.field_active) === 0){
                    this.rootPage=FacturacionPage;
                    clearInterval(moveinterval);
                  }else{
                this.rootPage = HomePage;
                this.splashScreen.hide();
                clearInterval(moveinterval);
                  }
              }
              },500);
            },  () => {
          });
          }else{
            console.log("not logged in.");
            this.rootPage = LoginPage;
            this.splashScreen.hide();
          }
        });
    });
    });
  }

  initCheckSession(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    console.log("initCheckSession",this.userData.sessionData);
    if(!this.userData.sessionData.sessid){
      this.storage.get('sessionData').then((val) => {
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
            });*/
          //this.splashScreen.hide();
          
        }
      });
    }else{
      console.log("session ok");
      loading.dismiss();
      //this.splashScreen.hide();
  }
}

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


}

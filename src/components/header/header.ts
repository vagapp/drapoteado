import { Component, HostListener, ElementRef } from '@angular/core';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { NavController, Loading, LoadingController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { Debugger } from '../../providers/user-data/debugger';
import { FacturacionPage } from '../../pages/facturacion/facturacion';
import { HomePage } from '../../pages/home/home';
import { RegisterModalPage } from '../../pages/register-modal/register-modal';
import { PopoverController } from 'ionic-angular';
import { NotificationPopPage }from '../../pages/notification-pop/notification-pop';


/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
  bgColor:"C1272D";
  fntColor:"FFFFFF";
  authObservable = null;
  susObservable = null;
  showNotifications:boolean = false;

  pagename = this.navCtrl.getActive().name;
  constructor(
    public userData: UserDataProvider,
    public navCtrl:NavController,
    public loadingCtrl:LoadingController,
    public popoverCtrl: PopoverController,
    private eRef: ElementRef
  ) {
    console.log('Loading Header Component check session');
    //this.text = 'Hello World';
    console.log("okai there is");
    this.authObservable = userData.AuthSubject;
    this.susObservable = userData.susSubject;
    this.susObservable.subscribe(
      (val)=>{
        this.pagename = this.navCtrl.getActive().name;
        Debugger.log(['sus val is',val]);
        if(Number(val) === 0){
        Debugger.log(['page is ax',this.pagename]);
        if(this.pagename.localeCompare('HomePage') !== 0){
          Debugger.log(['implying this is not facturation page']);
          this.navCtrl.setRoot(HomePage);
        }
        this.userData.resetLists();
        }else{
          if(this.userData.sus_to_reports){
            let loader = this.loadingCtrl.create({
              content: "Cargando..."
            });
            loader.present();
            this.userData.loading_reports = true;
            let loadrepointerval = setInterval(
              ()=>{
                if(!this.userData.loading_reports){ loader.dismiss();clearInterval(loadrepointerval);}
              },500
            );
            this.userData.cargarListaReportes();
          }
        }
      }
    );
    this.authObservable.subscribe( 
      (val)=>{
      console.log("user uid changed to",val);
      if(Number(val) === Number(0) ) 
        this.navCtrl.setRoot(LoginPage);
    });
  }
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.eRef.nativeElement.contains(event.target)) {
      console.log("in");
    } else {
      console.log("out");
    }
  }
  goHome(){
    this.pagename = this.navCtrl.getActive().name;
    if(this.pagename.localeCompare('HomePage') !== 0){
      Debugger.log(['implying this is not Home page']);
      this.navCtrl.setRoot(HomePage);
    }
  }

  openNotifications() {
    this.showNotifications = true;
    Debugger.log(['abrirpopoveer', this.showNotifications]);
  }

  closeNotifications(){
    this.showNotifications = false;
    Debugger.log(['clickoutside works', this.showNotifications]);
  }

  notificationClick( notification ){
    Debugger.log(['notification',notification]);
  }



  

  



}
 
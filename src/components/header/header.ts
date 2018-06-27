import { Component } from '@angular/core';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { Debugger } from '../../providers/user-data/debugger';
import { FacturacionPage } from '../../pages/facturacion/facturacion';
import { HomePage } from '../../pages/home/home';

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
  pagename = this.navCtrl.getActive().name;

  constructor(
    public userData: UserDataProvider,
    public navCtrl:NavController
  ) {
    console.log('Loading Header Component check session');
    //this.text = 'Hello World';
    console.log("okai there is");
    this.authObservable = userData.AuthSubject;
    this.susObservable = userData.susSubject;
    this.susObservable.subscribe(
      (val)=>{
        this.pagename = this.navCtrl.getActive().name;
        if(Number(val) === 0){
        Debugger.log(['page is ax',this.pagename]);
        if(this.pagename.localeCompare('FacturacionPage') !== 0){
          Debugger.log(['implying this is not facturation page']);
          this.navCtrl.setRoot(FacturacionPage);
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

  goHome(){
    /*if(this.userData.checkUserFeature([])){
    this.navCtrl.setRoot(HomePage);
    }*/
  }

  



}
 
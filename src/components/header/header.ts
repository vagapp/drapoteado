import { Component } from '@angular/core';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';

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

  constructor(
    public userData: UserDataProvider,
    public navCtrl:NavController
  ) {
    console.log('Loading Header Component check session');
    //this.text = 'Hello World';
    console.log("okai there is");
    this.authObservable = userData.AuthSubject;
    this.authObservable.subscribe( 
      (val)=>{
      console.log("user uid changed to",val);
      if(Number(val) === Number(0) ) 
        this.navCtrl.setRoot(LoginPage);
    });
  }

  



}
 
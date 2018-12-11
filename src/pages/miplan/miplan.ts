import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';

/**
 * Generated class for the MiplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-miplan',
  templateUrl: 'miplan.html',
})
export class MiplanPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userData: UserDataProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiplanPage');
  }

}

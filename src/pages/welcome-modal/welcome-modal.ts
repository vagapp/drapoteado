import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TutorialProvider } from '../../providers/tutorial/tutorial';

/**
 * Generated class for the WelcomeModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome-modal',
  templateUrl: 'welcome-modal.html',
})
export class WelcomeModalPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public tutorial: TutorialProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomeModalPage');
  }

  close(){
    this.viewCtrl.dismiss();
  }
  
  finish(){
    this.tutorial.finishTutorial();
    this.close();
  }

}

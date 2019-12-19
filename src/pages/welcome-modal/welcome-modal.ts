import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TutorialProvider } from '../../providers/tutorial/tutorial';
import { SubscriptionDataProvider } from '../../providers/subscription-data/subscription-data';

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
    public tutorial: TutorialProvider,
    public subsData: SubscriptionDataProvider
  ) {
  }

  get gt_fromStart(){ return TutorialProvider.TUTORIAL_GROUP_STATE_FROMSTART }
  get gt_fromBasic(){ return TutorialProvider.TUTORIAL_GROUP_STATE_FROMBASIC }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomeModalPage');
  }

  close(){
    this.viewCtrl.dismiss();
  }
  
  finish(){
    this.tutorial.finishTutorial();
    //this.close();
  }

  nextGPage(){
    this.tutorial.nextGPage();
/*
    if(this.tutorial.gmaxpage === this.tutorial.tutorial_group_page){
      this.tutorial.finishGTutorial();
      this.close();
    }else{
      this.tutorial.nextGPage();
    }*/
  }

  gFinalizar(){
    this.tutorial.finishGTutorial();
      this.close();
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { PlanesDataProvider } from '../../providers/planes-data/planes-data';
import { PermissionsProvider } from '../../providers/permissions/permissions';
import { SubscriptionDataProvider } from '../../providers/subscription-data/subscription-data';

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
  onplanchange:boolean = false;
  selectedPlan= null; //cargar selected plan

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userData: UserDataProvider,
    public permissions: PermissionsProvider,
    public planesData: PlanesDataProvider,
    public subsData: SubscriptionDataProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiplanPage');
    console.log('planesdata is',this.planesData.planes);
    console.log('my sub is',this.subsData.subscription)
    if(!this.permissions.checkUserSuscription([this.userData.PLAN_ANY])){
      this.activateChangePlanMode();
    }else{
      this.onplanchange = false;
      this.selectedPlan = this.subsData.subscription.field_plan_sus
    }
  }

  activateChangePlanMode(){
    this.onplanchange = true;
  }

  editar(){
    console.log('change to onplanchange true');
    this.onplanchange = true;
  }
  guardar(){
    console.log('saving to  onplanchange false');
    this.onplanchange = false;
  }  
  cancelar(){
    console.log('canceling to onplanchange false');
    this.onplanchange = false;
  }
  

}

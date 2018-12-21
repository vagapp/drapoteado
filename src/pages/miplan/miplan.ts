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
  selectedAditionals = 0;

  get selectedTotal():number{
    let ret = 0;
    if(this.onplanchange){
      console.log('this.selectedPlan',this.selectedPlan);
      console.log('this.selectedAditionals',this.selectedAditionals);
      console.log('this.subsData.subscription.field_adicionales',this.subsData.subscription.field_adicionales);
    //ret = this.selectedPlan.field_costo + (this.selectedAditionals*40) + (this.subsData.subscription.field_adicionales*40)
    }
    return ret;
  }

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

  operateExtra(operand:number){
    console.log('operateExtra',operand);
    this.selectedAditionals += operand;
    if (this.selectedAditionals < 0) this.selectedAditionals = 0;
    console.log('aditionals are',this.selectedAditionals);
  }
  

}

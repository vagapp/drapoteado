import { Injectable } from '@angular/core';
import { planes } from '../user-data/planes';
import { Observable } from 'rxjs/Observable';
import { subscriptions } from '../user-data/subscriptions';

/*
  Generated class for the SubscriptionDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SubscriptionDataProvider {

  static PLAN_GROUP:number = 1205 ; 

  subscription: subscriptions = null;
  Groups: subscriptions[] = new Array();
  

  nid:number = null; //nid de la subscripcion
  uid:number = null; //uid del doctor
  plan:planes = null;//objeto de plan completo
  field_plan_sus:number=null //nid del plan
  field_subusuarios:number[]=null; //array of sub acound uids
  field_active:boolean = false;
  docs = new Array();

  get isGroup(){
    return this.isGroupPlan();
  }

  constructor() {
  }

  setDoctores(){
    this.docs = JSON.parse(this.subscription.field_doctores_json);
  }

  getSubAccountsTotal():number{
    let ret = Number(0);
    if( this.checkForPlan() ){
      ret += Number(this.subscription.plan.field_no_subcuentas);
      ret += Number(this.subscription.field_adicionales);
      console.log('adicionales en la sus',this.subscription.field_adicionales,this.subscription.plan.field_no_subcuentas);
    }
    console.log('total subacounts',ret);
    return ret;
  }

 

  getUsedSubAccounts():number{
    let ret = Number(0);
    if(this.checkForSub()){
      ret = Number(this.subscription.field_subusuarios.length);
      //console.log('field subusuarios en este sub', this.subscription.field_subusuarios);
    }
    //console.log('total used subacounts',ret);
    return ret;
  }

  getSubAccountsLeft():number{
    //console.log('getSubAccountsLeft',this.getSubAccountsTotal(),this.getUsedSubAccounts());
    let ret = 0;
    if(this.checkForPlan()){
      ret = this.getSubAccountsTotal() - this.getUsedSubAccounts();
    }
    return ret;
  }

  


  isGroupPlan(){
    console.log('SubscriptionDataProvider isGroupPlan');
    if(this.subscription && this.subscription.field_plan_sus) return Number(this.subscription.field_plan_sus) === Number(SubscriptionDataProvider.PLAN_GROUP)
    return false;
    
  }

  getSubusersIDs():Array<number>{
    let ret = new Array<number>();
    if(this.subscription)
    ret =  this.subscription.field_subusuarios;
    console.log('getting subusers ids',ret);
    return ret;
  }

  checkForSub():boolean{
    let ret = false;
    if( this.subscription ){
      ret = true;
    }
    return ret;
  }

  checkForPlan():boolean{
    let ret = false;
    if(this.checkForSub() && this.subscription.plan){
      ret = true;
    }
    return ret;
  }



}

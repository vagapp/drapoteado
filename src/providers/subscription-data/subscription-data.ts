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

  static PLAN_BASIC:number = 33;
  static PLAN_GROUP:number = 1205 ;
  static PLAN_ANY:number = -1;

  static PLAN_BASIC_IOS_PID:string = "com.tual.mx.pb1";

  static EXTRA_SUB:number = 39;
  static EXTRA_DOC:number = 329;


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

  get PLAN_GROUP(){ return SubscriptionDataProvider.PLAN_GROUP; }
  get PLAN_ANY(){ return SubscriptionDataProvider.PLAN_ANY; }
  get EXTRA_SUB(){ return SubscriptionDataProvider.EXTRA_SUB; }
  get EXTRA_DOC(){ return SubscriptionDataProvider.EXTRA_DOC; }

  get isactive(){ let ret = 0; if(this.checkForPlan() ){ ret = this.subscription.field_active  } return ret;}
  get invcode(){ let ret = ''; if(this.checkForSub() ){ ret =  this.subscription.field_invitation_code  } return ret;}

  constructor() {
  }

  setDoctores(){
    this.docs = JSON.parse(this.subscription.field_doctores_json);
  }


  /**
   * ESTOS METODOS SON PARA OBTENER NUMEROS DE SUB DOCTORES EN LA SUSCRIPCION Y CALCULAR CUANTOS QUEDAN DISPONIBLES ETC.
   */

  getDocAccountsTotal():number{
    let ret = Number(0);
    if( this.checkForPlan() ){
      ret += Number(this.subscription.plan.field_no_doctores);
      ret += Number(this.subscription.field_docsadicionales);
    }
    return ret;
  }

  getplanDocAccounts():number{
    let ret = Number(0);
    if( this.checkForPlan() ){
    ret += Number(this.subscription.plan.field_no_doctores);
  }
  return ret;
  }


  getUsedDocAccounts():number{
    let ret = Number(0);
    if(this.checkForSub()){
      ret = Number(this.subscription.field_doctores.length);
    }
    return ret;
  }

  /**
   * ESTOS METODOS SON PARA OBTENER NUMEROS DE SUB USUARIOS EN LA SUSCRIPCION Y CALCULAR CUANTOS QUEDAN DISPONIBLES ETC.
   */

  getSubAccountsTotal():number{
    let ret = Number(0);
    if( this.checkForPlan() ){
      ret += Number(this.subscription.plan.field_no_subcuentas);
      ret += Number(this.subscription.field_adicionales);
      //console.log('adicionales en la sus',this.subscription.field_adicionales,this.subscription.plan.field_no_subcuentas);

    }
    //console.log('total subacounts',ret);
    return ret;
  }

  getplanAccounts():number{
    let ret = Number(0);
    if( this.checkForPlan() ){
    ret += Number(this.subscription.plan.field_no_subcuentas);
  }
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
  //console.log('SubscriptionDataProvider isGroupPlan');
  /*console.log('check ig is fucking group plan so dis not a doctor so he no subscription damn?');
   console.log(this.subscription);
   console.log(this.subscription.field_plan_sus);*/
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

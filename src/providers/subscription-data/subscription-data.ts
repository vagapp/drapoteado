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
  subscription: subscriptions = null;

  nid:number = null; //nid de la subscripcion
  uid:number = null; //uid del doctor
  plan:planes = null;//objeto de plan completo
  field_plan_sus:number=null //nid del plan
  field_subusuarios:number[]=null; //array of sub acound uids
  field_active:boolean = false;

  constructor() {
  }

  getSubusersIDs():Array<number>{
    let ret = new Array<number>();
    if(this.subscription)
    ret =  this.subscription.field_subusuarios;
    console.log('getting subusers ids',ret);
    return ret;
  }


}

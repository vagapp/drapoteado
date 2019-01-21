import { Injectable } from '@angular/core';
import { userd } from '../user-data/user-data';

/*
  Generated class for the SubusersDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class SubusersDataProvider {
  subUsers:userd[] = new Array();
  subscriptionSubUsers: userd[] = new Array();

  /**
   * esta cosa esta listando los sub users. 
   * pero usa subscriptionsubusers para calcular los restantes en el plan. 
   * asi que vamos a cambiar a subscriptionsubusers. ?
  */
  
  static SUBUSER_CONSUMERS = 0;
  static SUBUSERS_SUBSCRIPTION = 1;
  
  constructor() {
  }

  addUser( user: userd ){this.add(user);}
  removeUser( user:userd  ){this.remove(user);}
  checkUpdate(user: userd){return this.check(user);}

  addUserSubs( user: userd ){console.log('add subusersSUBS'); this.add(user,this.subscriptionSubUsers);}
  removeUserSubs( user:userd  ){this.remove(user,SubusersDataProvider.SUBUSERS_SUBSCRIPTION);}
  checkUpdateSubs(user: userd){return this.check(user,this.subscriptionSubUsers);}


  add( user: userd , list: Array<userd> = this.subUsers){
    console.log('add subusersSUBS LIST IS',list);
    console.log('user',user);
    if(!this.check(user,list))
    list.push(user);
  }

  remove( user:userd , list:number = SubusersDataProvider.SUBUSER_CONSUMERS){
    switch( list ){
      case SubusersDataProvider.SUBUSER_CONSUMERS: this.subUsers = this.subUsers.filter((users)=>{ return Number(users.uid) !== Number(user.uid)}); break;
      case SubusersDataProvider.SUBUSERS_SUBSCRIPTION: this.subscriptionSubUsers = this.subscriptionSubUsers.filter((users)=>{ return Number(users.uid) !== Number(user.uid)}); break;
    } 
  }

  check(user: userd , list: Array<userd> = this.subUsers){
    let ret = false;
    let found = list.find((users)=>{ return Number(users.uid) === Number(user.uid) });
    if(found){
      list[list.indexOf(found)] = user;
      ret = true;
    }
    return ret;
  }


}

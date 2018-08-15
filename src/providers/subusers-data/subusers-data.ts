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
  
  constructor() {
  }

  addUser( user: userd ){
    this.subUsers.push(user);
  }

  removeUser( user:userd  ){
    this.subUsers = this.subUsers.filter((users)=>{ return Number(users.uid) !== Number(user.uid)});
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the JsonUtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JsonUtilProvider {

  constructor(public http: HttpClient) {
    console.log('Hello JsonUtilProvider Provider');
  }
// parses into try catch, returns empty if error
   SafeParser(str) {
     let ret = new Array();
    try {
        ret = JSON.parse(str);
    } catch (e) {
      console.log('JsonUtilProvider:SafeParser error on json ',str);
      ret = new Array();
    }
    return ret;
}

}

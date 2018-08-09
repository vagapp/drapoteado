import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrlProvider } from '../base-url/base-url';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DrupalUserManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DrupalUserManagerProvider {

  constructor(
    public http: HttpClient,
    public bu: BaseUrlProvider
  ) {
  }

  requestUsers( doctores, codigo:string = null , ids:Array<number> = null):Observable<any>{
    let doctorfilter = "?args[0]=all";
    let codigofilter = "&args[1]=all";
    let ids_filter = `&args[2]=all`;
    let oneprotection = false;
    if(doctores && doctores.length > 0){doctorfilter = "?args[0]="+doctores.join(); oneprotection=true;}
    if( codigo ){ codigofilter = "&args[1]="+codigo; oneprotection=true;}
    if(ids && ids.length > 0){ ids_filter = `&args[2]=${ids.join(',')}`; oneprotection=true;}
    if(!oneprotection) doctorfilter = "?args[0]=-1" //esto evita que alguna tonteria te mande todos los usuarios del sistema, devolviendo nada
    let url = `${this.bu.endpointUrl}rest_users${doctorfilter}${codigofilter}${ids_filter}`;
    return this.http.get(url).share();
  }

  generateNewUserd( userd ):Observable<any>{
    let body = JSON.stringify(userd);
    let url = `${this.bu.endpointUrl}user/`;
    return this.http.post(url,body).share();
  }

  updateUserd( userd ){
    let body = JSON.stringify(userd);
    let url = `${this.bu.endpointUrl}user/${userd.uid}`;
    return this.http.put(url,body).share();
  }

  

}

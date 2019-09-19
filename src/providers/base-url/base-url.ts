import { Injectable } from '@angular/core';

/*
  Generated class for the BaseUrlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BaseUrlProvider {
  protocol:string = 'https://';
  //hostname:string = 'vmi118470.contaboserver.net/~drapp/';
  //hostname:string = '18.191.210.253/';
  //hostname:string = 'ec2-18-191-210-253.us-east-2.compute.amazonaws.com/';
  hostname:string = 'www.drap.com.mx/';
  //websocketUrl:string = 'ws://vagapp.mx:8081/';
  //websocketUrl:string = 'ws://www.drap.com.mx:8081/';
  websocketUrl:string = 'wss://www.drap.com.mx:8443/';
  backend_tual_internas_full_name = 'https://bkint.tual.mx/';
  backend_internas_name = 'backendint/';
  backend_pruebas_name = 'backenddev/';
  backend_pruebas_cp_name = 'backendcp/';

  constructor() {
  }

  get baseUrl():string{  return `${this.protocol}${this.hostname}`; }
  //get backendUrl():string{  return `${this.baseUrl}${this.backend_internas_name}`; }
  get backendUrl():string{  return `${this.backend_tual_internas_full_name}`; }
  _//get backendUrl():string{  return `${this.baseUrl}backenddcp/`; }
  get endpointUrl():string{  return `${this.backendUrl}appoint/`; }
  get HomeUrl():string{ return window.location.href.replace( /[\?#].*|$/, "#/home" ); }
  
  locationReload(){ //goes home, then reloads location. this prevents some template errors.
    window.location.href = this.HomeUrl;
    window.location.reload();
  }

}
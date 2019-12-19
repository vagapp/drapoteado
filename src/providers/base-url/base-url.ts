import { Injectable } from '@angular/core';

/*
  Generated class for the BaseUrlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BaseUrlProvider {
  reloading:boolean = false;
  protocol:string = 'https://';
  //hostname:string = 'vmi118470.contaboserver.net/~drapp/';
  //hostname:string = '18.191.210.253/';
  //hostname:string = 'ec2-18-191-210-253.us-east-2.compute.amazonaws.com/';
  hostname:string = 'www.drap.com.mx/';
  //websocketUrl:string = 'ws://vagapp.mx:8081/';
  //websocketUrl:string = 'ws://www.drap.com.mx:8081/';
  websocketUrl:string = 'wss://www.drap.com.mx:8443/';
  backend_tual_internas_full_name = 'https://bkint.tual.mx/';
  backend_tual_dev_full_name = 'https://bkdev.tual.mx/';
  backend_tual_pro_full_name = 'https://bkpro.tual.mx/';
  backend_internas_name = 'backendint/';237362
  backend_pruebas_name = 'backenddev/';
  backend_pruebas_cp_name = 'backendcp/';
  Terminos_page = 'https://www.tual.mx/terminos-y-condiciones';

  constructor() {
  }

  get baseUrl():string{  return `${this.protocol}${this.hostname}`; }
  //get backendUrl():string{  return `${this.baseUrl}${this.backend_internas_name}`; }
  get backendUrl():string{  return `${this.backend_tual_pro_full_name}`; }
  //get backendUrl():string{  return `${this.baseUrl}backenddcp/`; }
  get endpointUrl():string{  return `${this.backendUrl}appoint/`; }
  get HomeUrl():string{ return window.location.href.replace( /[\?#].*|$/, "#/home" ); }

  get terminosUrl():string{ return this.Terminos_page; }

  locationReload(){ //goes home, then reloads location. this prevents some template errors.
    window.location.href = this.HomeUrl;
    this.reloading = true;
    window.location.reload();
  }

}
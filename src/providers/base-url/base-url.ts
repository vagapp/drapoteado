import { Injectable } from '@angular/core';

/*
  Generated class for the BaseUrlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BaseUrlProvider {
  protocol:string = 'http://';
  hostname:string = 'vmi118470.contaboserver.net/~drapp/';
  websocketUrl:string = 'ws://vagapp.mx:8081/';

  constructor() {
  }

  get baseUrl():string{  return `${this.protocol}${this.hostname}`; }
  get backendUrl():string{  return `${this.baseUrl}backend/`; }
  get endpointUrl():string{  return `${this.backendUrl}appoint/`; }

}

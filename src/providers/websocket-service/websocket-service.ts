import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';
import { BaseUrlProvider } from '../base-url/base-url';

/*
  Generated class for the WebsocketServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/



@Injectable()
export class WebsocketServiceProvider {
  websocket:WebSocketSubject<Message>;
  constructor( public bu:BaseUrlProvider) {
    this.websocket = WebSocketSubject.create(`${bu.baseUrl}:8081`);
    this.websocket.subscribe(
      (message) => console.log(message),
      (err) => console.error(err),
      () => console.warn('Completed!')
      );
      console.log("cosas feas terminadas que pedo");
  }

  serverMessages(message){
    console.log('message received',message);
  }
}

export class Message {
  constructor(
      public sender: string,
      public content: string,
      public isBroadcast = false,
  ) { }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';
import { BaseUrlProvider } from '../base-url/base-url';
import { CitasManagerProvider } from '../citas-manager/citas-manager';
import { UserDataProvider } from '../user-data/user-data';

/*
  Generated class for the WebsocketServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/



@Injectable()
export class WebsocketServiceProvider {
  websocket:WebSocketSubject<Message>;
  constructor( 
    public bu:BaseUrlProvider,
    public cmanager: CitasManagerProvider,
    public userData: UserDataProvider
  ) {
    this.websocket = WebSocketSubject.create(bu.websocketUrl);
    this.websocket.subscribe(
      (message) => this.serverMessages(message),
      (err) => console.error(err),
      () => console.warn('Completed!')
      );
      console.log("cosas feas terminadas que pedo");
  }

  serverMessages(message:Message){
    console.log('message received', message);
    if( message.receivers.indexOf(this.userData.userData.uid) !== -1 )
    switch(message.action){
      case 'addCita': this.cmanager.generateCita(message.content); break;
    }
  }
}

export class Message {
  constructor(
      public receivers: Array<number>,
      public action: string,
      public sender: string,
      public content: any,
      public isBroadcast = false,
  ) { }
}

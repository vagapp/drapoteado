import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';
import { BaseUrlProvider } from '../base-url/base-url';
import { CitasManagerProvider } from '../citas-manager/citas-manager';
import { UserDataProvider } from '../user-data/user-data';
import { DoctoresDataProvider } from '../doctores-data/doctores-data';
import { CitasDataProvider } from '../citas-data/citas-data';
import { Citas } from '../user-data/citas';
import { ReportPresentatorProvider } from '../report-presentator/report-presentator';
import { DoctoresManagerProvider } from '../doctores-manager/doctores-manager';


@Injectable()
export class WebsocketServiceProvider {
  websocket:WebSocketSubject<Message>;
  constructor(
    public bu:BaseUrlProvider,
    public cmanager: CitasManagerProvider,
    public userData: UserDataProvider,
    public docData: DoctoresDataProvider,
    public reportPresentator: ReportPresentatorProvider,
    public doctoresManager: DoctoresManagerProvider
  ) {
    this.init();
  }

  async init(){
    this.websocket = WebSocketSubject.create(this.bu.websocketUrl);
    this.websocket.subscribe(
      (message) => this.serverMessages(message),
      (err) => console.error(err),
      () => {console.warn('Completed!'); console.log("over");}
      );
      console.log("cosas feas terminadas que pedo");
  }

  serverMessages(message:Message){
    console.log('message received', message);
    switch(message.action){
      case 'addCita': this.addCita(message); break;
      case 'removeCita': this.removeCita(message); break;
      case 'loadedReport': this.loadedReport(message); break;
    }
  }

  /**
   * 
   * @param message  a message received from websocket about a new or updated cita
   * este metodo recive un mensaje y filtra segun si debe recivir la cita, y la procesa.
   */
  addCita(message:Message){
    if(this.FilterMessageCita(message)){
      console.log("cita2addfiltered");
      let aux_cita = this.cmanager.generateCitaFullData(message.content);
      this.reportPresentator.updateCita(aux_cita);
    }
  }

  removeCita(message:Message){
    if(this.FilterMessageCita(message)){
      let aux_cita = this.cmanager.deleteCitaFullData(message.content);
      this.reportPresentator.deleteCita(aux_cita);
    }
  }

  // returns true if one of the doctors this user is listening is contained on the receivers of this message
  FilterMessageCita(message:Message):boolean{
    let ret = false;
    for(let uid of message.receivers){
      if(this.docData.existsByUid(uid)){ ret = true; break;}
    }
    return ret;
  }


  loadedReport( message:Message){
    console.log('REPORTING APP LOADED ------------------------------------------------');
    console.log(message);
  }

  send(message:Message) {
    this.websocket.next(<any>JSON.stringify(message));
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

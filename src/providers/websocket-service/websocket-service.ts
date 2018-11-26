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
import { subscriptions } from '../user-data/subscriptions';
import { SubscriptionDataProvider } from '../subscription-data/subscription-data';
import { Doctores } from '../user-data/doctores';
import { SubusersDataProvider } from '../subusers-data/subusers-data';


@Injectable()
export class WebsocketServiceProvider {
  websocket:WebSocketSubject<Message>;
  constructor(
    public bu:BaseUrlProvider,
    public cmanager: CitasManagerProvider,
    public userData: UserDataProvider,
    public docData: DoctoresDataProvider,
    public reportPresentator: ReportPresentatorProvider,
    public doctoresManager: DoctoresManagerProvider,
    public subsData: SubscriptionDataProvider,
    public subuserData: SubusersDataProvider
  ) {
    this.init();
  }

  async init(){
   this.websocketConnect();
  }

  websocketConnect(){
    this.websocket = WebSocketSubject.create(this.bu.websocketUrl);
    this.websocket.subscribe(
      (message) => this.serverMessages(message),
      (err) => { console.error(err); this.websocketConnect(); },
      () => {console.log("websocket over");}
      );
      console.log("cosas feas terminadas que pedo");
  }

  serverMessages(message:Message){
    console.log('message received', message);
    switch(message.action){
      case 'addCita': this.addCita(message); break;
      case 'removeCita': this.removeCita(message); break;
      case 'loadedReport': this.loadedReport(message); break;
      case 'addSubUser': this.addSubsUser(message); break;
      case 'removeSubUser': this.removeSubsUser(message); break;
      case 'groupAddSubSubs': this.groupAddSubSubs(message); break;
      case 'groupAddSubDocs': this.groupAddSubDocs(message); break;
    }
  }

  
  groupAddSubSubs(message){
    if(this.filterMessageById(message)){
    console.log('groupAddSubSubs',message);
    console.log(this.subuserData.subUsers);
    //add the subuser to your subscription.
    }
  }
  groupAddSubDocs(message){
    if(this.filterMessageById(message)){
      console.log('groupAddSubDocs',message);
      console.log(this.docData.doctores);
      let gropdocs = JSON.parse( message.content );
      for(let gdoc of gropdocs){
        console.log(' adding ',gdoc);
        const auxDoc = new Doctores();
      auxDoc.Uid = gdoc.uid;
      auxDoc.name = gdoc.name;
      this.docData.addDoctor(auxDoc);
      }
      console.log('finished docdata is',this.docData.doctores);
    
      }
  }

  addSubsUser(message){
    console.log('addSubsUser',message);
  }

  removeSubsUser(message){
    console.log('removeSubsUser',message);
    if(this.filterMessageById(message)){
      console.log(this.subsData.docs);
      this.subsData.docs = this.subsData.docs.filter((docs)=>{ return Number(docs.uid) !== Number(message.content)});
      console.log(this.subsData.docs);
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
    console.log('filtering msg', message);
    for(let uid of message.receivers){
      if(this.docData.existsByUid(uid)){ console.log('uid found',uid); ret = true; break; }
    }
    return ret;
  }

  filterMessageById(message:Message){
    console.log('filtering message by ids');
    console.log('message.receivers',message.receivers);
    console.log('this.userData.userData.uid',this.userData.userData.uid);
    let ret = false;
    let exists =  message.receivers.find( (uids)=>{ return Number(this.userData.userData.uid) === Number(uids); });
    console.log('exists',exists);
    if(exists) ret = true;
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

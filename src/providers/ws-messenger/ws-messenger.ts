import { Injectable } from '@angular/core';
import { WebsocketServiceProvider, Message } from '../websocket-service/websocket-service';
import { Citas } from '../user-data/citas';
import { UserDataProvider } from '../user-data/user-data';
import { DoctoresDataProvider } from '../doctores-data/doctores-data';
import { CitasDataProvider } from '../citas-data/citas-data';

/*
This class is a message generator for  the websocketService
websocket service contains the socket and managers to create elements using socket responses, but managers cant have a websocket service to generate messages
this providers generates messages to the socket.

this provider cant have managers on it, only data
*/
@Injectable()
export class WsMessengerProvider {

  constructor(
    public ws: WebsocketServiceProvider,
    public userData: UserDataProvider,
    public docData: DoctoresDataProvider,
    public citasData: CitasDataProvider
  ) {
  }

  testCitaSend(){
    for(let cita of this.citasData.citas){
      this.generateWSupdateMessage(cita);
    }
  }


  generateMessage(
    receivers: Array<number>,
    action: string,
    sender: string,
    content: any,
    isBroadcast = false,
  ){
    
    let message2send = {
      receivers,
      action,
      sender,
      content,
      isBroadcast,
    };
    let jsonsend = JSON.stringify(message2send);
    console.log(jsonsend);
    const message = JSON.parse(jsonsend) as Message;
    console.log(message);
    this.ws.send(message);
  }

  generateWSupdateMessage( cita:Citas ){
    console.log('generating update message',cita);
    let uid = cita.data.field_cita_doctor.und[0];
    let doctor = this.docData.getDoctorByUid(uid);
    cita.data.doctor_name = doctor.name;
    cita.data.doctor_alias = doctor.field_alias;
    this.generateMessage(
      [doctor.Uid],
      'addCita',
      `${this.userData.userData.uid}`,
      cita.data,
      true
    );
  }

  generateWSremoveCitaMessage( cita:Citas ){
    this.generateMessage(
      this.docData.doctoresIDs,
      'removeCita',
      `${this.userData.userData.uid}`,
      cita.data,
      true
    );
  }

}

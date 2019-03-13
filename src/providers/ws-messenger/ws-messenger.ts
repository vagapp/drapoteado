import { Injectable } from '@angular/core';
import { WebsocketServiceProvider, Message } from '../websocket-service/websocket-service';
import { Citas } from '../user-data/citas';
import { UserDataProvider, userd } from '../user-data/user-data';
import { DoctoresDataProvider } from '../doctores-data/doctores-data';
import { CitasDataProvider } from '../citas-data/citas-data';
import { subscriptions } from '../user-data/subscriptions';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
    let doctor = this.docData.getDoctorByUid(uid); //los sub usuarios "atrapan" las citas que tienen el uid de los doctores que administran.
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


  generateSubsRemoveMessage( uid:number ){
    this.generateMessage(
      this.docData.doctoresIDs,
      'removeSubUser',
      `${this.userData.userData.uid}`,
      uid,
      true
    );
  }

  generateSubsAddedMessage( uid, name){
    this.generateMessage(
      this.docData.doctoresIDs,
      'addSubUser',
      `${this.userData.userData.uid}`,
      {"uid":uid,"name":name },
      true
    );
  }

  generateSubUserAddedMessage( uid:number, name:string, docs:Array<any> ){
 
  }

  generateSubUserRemovedMessage(uid){

  }

  /**
   * Cuando un doctor entra a un grupo.
   * 
   * este mensaje se tiene que enviar a los doctores que pertenecen a la suscripcion a la que esta entrando para que se actualice su lista de doctores.
   */
  generateDoctogroupMessage(docs:Array<any>){
    this.generateMessage(
      docs,
      WebsocketServiceProvider.ACTION_DOC_TO_GROUP,
      `${this.userData.userData.uid}`,
      '',
      true
      );
  }


   /**
   * Cuando un Subusuario entra a un grupo.
   * 
   * Este mensaje se envia a los sub usuarios que entran a un grupo para que se refresque su app.
   * ademas se envia a los doctores de la suscripcion para que refresque su lista de sub usuarios.
   */
  generateSubtogroupMessage(subusers:Array<any>,docs:Array<any>){
    this.generateMessage(
      docs,
      WebsocketServiceProvider.ACTION_SUB_TO_GROUP_DOCS,
      `${this.userData.userData.uid}`,
      '',
      true
      );
      this.generateMessage(
        subusers,
        WebsocketServiceProvider.ACTION_SUB_TO_GROUP_SUBS,
        `${this.userData.userData.uid}`,
        '',
        true
        );
  }

 
}

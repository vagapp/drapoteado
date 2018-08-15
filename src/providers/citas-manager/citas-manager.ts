import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { DateProvider } from '../date/date';
import { BaseUrlProvider } from '../base-url/base-url';
import { CitasDataProvider } from '../citas-data/citas-data';
import { Citas } from '../user-data/citas';
import { UserDataProvider } from '../user-data/user-data';
import { DoctoresDataProvider } from '../doctores-data/doctores-data';
import { DrupalNodeManagerProvider } from '../drupal-node-manager/drupal-node-manager';
import { DrupalUserManagerProvider } from '../drupal-user-manager/drupal-user-manager';
import { Message } from '../websocket-service/websocket-service';


@Injectable()
export class CitasManagerProvider {
 

  constructor(
    public http: HttpClient, 
    public datep: DateProvider,
    public baseurl: BaseUrlProvider,
    public citasData: CitasDataProvider,
    public doctores: DoctoresDataProvider,
    public nodeMan: DrupalNodeManagerProvider,
    public userMan: DrupalUserManagerProvider
  ) {
    console.log('Hello CitasManagerProvider Provider');
  }

  requestCitas():Observable<any>{
    let observable = this.getCitasObservable().share();
    observable.subscribe(
      (val)=>{this.setCitas(val);},
      response => { console.log('error requestCitas',response);}
    );
    return observable;
  }

  getCitasObservable(
    from:number = this.datep.nowStart,
    to:number = this.datep.nowEnd,
    doctores:number[] = this.doctores.doctoresIDs,  
    cajas:number[] = null,  
    recepciones:number[] = null
  ):Observable<any>{
    let filterString = `?args[0]=${doctores ? doctores.join() : 'all'}&args[1]=${cajas ? cajas.join() : 'all'}&args[2]=${recepciones ? recepciones.join() : 'all'}&args[3]=${from}--${to}`;
    //let filterString = `?args[0]=${doctores ? doctores.join() : 'all'}&args[1]=${cajas ? cajas.join() : 'all'}&args[2]=${recepciones ? recepciones.join() : 'all'}`;
    let url = `${this.baseurl.endpointUrl}rest_citas.json${filterString}`;
    return this.http.get(url);
  }

  getCitaObservable( Nid ):Observable<any>{
    let url = `${this.baseurl.endpointUrl}rest_citas.json?args[0]=all&args[1]=all&args[2]=all&args[3]=all&args[4]=${Nid}`;
    return this.http.get(url);
  }

  setCitas( val ){
    console.log('citas response raw value',val);
    for(let cita of val){
      this.generateCita(cita);
    }
    this.citasData.triggerSubject();
  }

  generateCita( data ){
    let aux_cita = new Citas();
    aux_cita.setData(data);
    this.citasData.addCita(aux_cita,false);
  }

  generateCitaFullData( data ){
    let aux_cita = new Citas();
    aux_cita.data = data;
    aux_cita.processData();
    console.log('fulldata generated ',aux_cita);
    this.citasData.addCita(aux_cita,false);
  }

  updateCitaNid( Nid ):Observable<any>{
    let obs = this.getCitaObservable(Nid).share();
    obs.subscribe((val)=>{this.setCitas(val);});
    return obs;
  }

  //CITAS METHODS
  generateNewCita( newCita ){return this.nodeMan.generateNewNode(newCita);}
  updateCita( cita ){return this.nodeMan.updateNode(cita);}
  deleteCita( cita ){return this.nodeMan.deleteNode(cita);}
  updateCitaState( cita:Citas , state){
    cita.data.field_estado.und[0].value = state;
    if(Number(state) === Number(CitasDataProvider.STATE_ACTIVA)){ cita.setHoraInicio();}
    if(Number(state) === Number(CitasDataProvider.STATE_COBRO)){ cita.setHoraFin();  }
    //console.log("tryna update cita:",cita.data);
    return this.updateCita( cita.data ).share();
  }
  
}

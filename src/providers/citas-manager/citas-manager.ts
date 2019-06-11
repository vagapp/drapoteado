import { HttpClient } from '@angular/common/http';
import { Injectable, ɵConsole } from '@angular/core';
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
import { Doctores } from '../user-data/doctores';
import { ReportesDataProvider } from '../reportes-data/reportes-data';
import { SubscriptionDataProvider } from '../subscription-data/subscription-data';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable()
export class CitasManagerProvider {

  waitingupdates:number[] = new Array();
  timesout = 20;

  constructor(
    public http: HttpClient, 
    public datep: DateProvider,
    public baseurl: BaseUrlProvider,
    public citasData: CitasDataProvider,
    public doctores: DoctoresDataProvider,
    public nodeMan: DrupalNodeManagerProvider,
    public userMan: DrupalUserManagerProvider,
    public userData:UserDataProvider,
    public reportesData: ReportesDataProvider,
    public subsData: SubscriptionDataProvider
  ) {
    console.log('Hello CitasManagerProvider Provider');
  }
  
  /**
   * Este metodo retorna cuando la cita con el uid especificado se actualiza por medio de un mensaje.
   */
 
  blockOnWaiting(citanid, callback , failcallback){
    this.waitingupdates.push(citanid);
    let timeson = 0;
    let cic = setInterval(
      () => {
        timeson ++;
        if(!this.waitingupdates.find((nids)=>{ return Number(nids) === Number(citanid); })){
          callback();
          clearInterval(cic);
        }
        if(Number(timeson) === Number(this.timesout)){
          failcallback();
          clearInterval(cic);
        }
      },
      250
    );
  }


  requestCitas( from:number = this.datep.nowStart, to:number = this.datep.nowEnd+(1000*60*60*24*365*5), paciente:string=null ):Observable<any>{
    let observable = this.getCitasObservable(from,to,this.doctores.doctoresIDs,null,null,paciente).share();
    observable.subscribe(
      (val)=>{ console.log('obtained citas',val);
      this.setCitas(val);
    },
      response => { console.log('error requestCitas',response);}
    );
    return observable;
  }

  getCitasObservable(
    from:number = this.datep.nowStart,
    to:number = this.datep.nowEnd+(1000*60*60*24*365*5),
    doctores:number[] = this.doctores.doctoresIDs,  
    cajas:number[] = null,  
    recepciones:number[] = null,
    paciente:string = null,
    state:number = null
  ):Observable<any>{
    console.log('from',new Date(from));
    console.log('to',new Date(to));
    console.log('is',new Date(1534605765000));
    console.log('1534605765000');
    console.log('from',from);
    console.log('to',to)
    console.log('doctores',doctores);
    console.log('cajas',cajas);
    console.log('recepciones',recepciones);
    let fillstring = "&args[4]=all&args[5]=all&args[6]=all";
    let stateFilter =  `${state !== null ? '&args[8]=all&args[9]='+state : ''}`; 
    let pacientefilter = `${paciente !== null ? '&args[7]='+paciente : ''}`;
    let endfilter = '';
    
   if(pacientefilter !== '' || stateFilter !== ''){
    endfilter = `${pacientefilter !== null ? fillstring+'&args[7]='+paciente : fillstring+'&args[7]=all'}`+stateFilter;
   }
    let filterString = `?args[0]=${doctores && doctores.length > 0 ? doctores.join() : '0'}&args[1]=${cajas && cajas.length > 0 ? cajas.join() : 'all'}&args[2]=${recepciones && recepciones.length > 0 ? recepciones.join() : 'all'}&args[3]=${(from !== null && to !== null) ?  from+'--'+to: 'all'}${/*pacientefilter*/endfilter}`;
    //let filterString = `?args[0]=${doctores ? doctores.join() : 'all'}&args[1]=${cajas ? cajas.join() : 'all'}&args[2]=${recepciones ? recepciones.join() : 'all'}`;
    let url = `${this.baseurl.endpointUrl}rest_citas.json${filterString}`;
    console.log('url getting citas',url);
    return this.http.get(url);
  }

  getCitasObservableReport(
    from:number = this.datep.nowStart,
    to:number = this.datep.nowEnd+(1000*60*60*24*365*5),
    doctores:number[] = this.doctores.doctoresIDs,  
    cajas:number[] = null,  
    recepciones:number[] = null,
  ):Observable<any>{
    console.log('from',from,new Date(from));
    console.log('to',to,new Date(to));
    console.log('is','1554421919995',new Date(1554421919995));
    console.log('1534605765000');
    console.log('from',from);
    console.log('to',to)
    console.log('doctores',doctores);
    console.log('cajas',cajas);
    console.log('recepciones',recepciones);
    let filterString = `?args[0]=${doctores && doctores.length > 0 ? doctores.join() : '0'}&args[1]=${cajas && cajas.length > 0 ? cajas.join() : 'all'}&args[2]=${recepciones && recepciones.length > 0 ? recepciones.join() : 'all'}&args[3]=all&args[4]=all&args[5]=all&args[6]=all&args[7]=all&args[8]=${from}--${to}`;
    //let filterString = `?args[0]=${doctores ? doctores.join() : 'all'}&args[1]=${cajas ? cajas.join() : 'all'}&args[2]=${recepciones ? recepciones.join() : 'all'}`;
    let url = `${this.baseurl.endpointUrl}rest_citas.json${filterString}`;
    console.log('url getting citas',url);
    return this.http.get(url);
  }

  getCitasObservableAdeudos(
    doctores:number[] = this.doctores.doctoresIDs,  
    cajas:number[] = null,  
    recepciones:number[] = null,
    ):Observable<any>{
      console.log('doctores',doctores);
      console.log('cajas',cajas);
      console.log('recepciones',recepciones);
      let filterString = `?args[0]=${doctores && doctores.length > 0 ? doctores.join() : '0'}&args[1]=${cajas && cajas.length > 0 ? cajas.join() : 'all'}&args[2]=${recepciones && recepciones.length > 0 ? recepciones.join() : 'all'}&args[3]=all&args[4]=all&args[5]=all&args[6]=all&args[7]=all&args[8]=all&args[9]=7`;
      //let filterString = `?args[0]=${doctores ? doctores.join() : 'all'}&args[1]=${cajas ? cajas.join() : 'all'}&args[2]=${recepciones ? recepciones.join() : 'all'}`;
      let url = `${this.baseurl.endpointUrl}rest_citas.json${filterString}`;
      console.log('url getting citas adeudos',url);
      return this.http.get(url);
  }

  

  getCitaObservable( Nid ):Observable<any>{
    let url = `${this.baseurl.endpointUrl}rest_citas.json?args[0]=all&args[1]=all&args[2]=all&args[3]=all&args[4]=all&args[5]=${Nid}`;
    return this.http.get(url);
  }

  setCitas( val ){
    console.log('citas response raw value', val);
    for(let cita of val ){
      if(this.checkUserCitaDataFilter( cita ) && this.checkDoctorListDataFilter(cita)){
        this.generateCita( cita );
      }
    }
    this.citasData.triggerSubject();
  }

  /*setEdicionesData(cita:Citas){
    cita.setEdicionesField();
    this.setCitaFechaReporte(cita,true); 
  }*/

  /*async guardarEdiciones(cita:Citas){
    this.setEdicionesData(cita);
    let ret =  await this.updateCita(cita.data).toPromise();
  }*/


  checkUserCitaDataFilter(citaData):boolean{
    let ret = true;
    //console.log('data to check()',citaData);
    if(this.userData.checkUserPermission([UserDataProvider.TIPO_CAJA]) && ! (Number(citaData.field_estado) === Number(CitasDataProvider.STATE_COBRO) || Number(citaData.field_estado) === Number(CitasDataProvider.STATE_ADEUDO)) ){
      ret = false;
      console.log('cita blocked from caja couase doesnt need cobro', citaData);
    }
    return ret;
  }

  //este metodo revisa que el doctor este activo y en la suscripcion cargada para este usuario.
  checkDoctorListDataFilter(citaData):boolean{
    console.log('checkDoctorListDataFilter');
    let ret = true;
    let docsuids = this.doctores.doctores.map((docs)=>{ return Number(docs.Uid); });
    let docuid = Number(citaData.doctor_uid);
    let found = docsuids.find((docs)=>{ return docs === docuid});
    if(!found){
      ret = false;
    }
    console.log('found is',found);
    console.log('docsuids',docsuids);
    console.log('docuid',docuid);
    console.log('citaData',citaData);
    console.log('checkDoctorListDataFilter docs', this.doctores.doctores);
    console.log('subsData docs',this.subsData.docs);
    console.log();
    return ret;
  }

  sortCitas(){
    this.citasData.citas =  CitasDataProvider.sortByStateDate(this.citasData.citas);
  }

  generateCita( data ){
    let aux_cita = new Citas();
    aux_cita.setData(data);
    this.citasData.addCita(aux_cita,false);
  }

  generateCitaFullData( data ){
    console.log('generate fullcita data',data);
    let aux_cita = new Citas();
    aux_cita.data = data;
    aux_cita.processData();
    console.log('fulldata generated ',aux_cita);
    this.citasData.addCita(aux_cita);
    return aux_cita;
  }

  deleteCitaFullData(data){
    console.log('deleting data',data);
    let aux_cita = new Citas();
    aux_cita.Nid = data.Nid;
    this.citasData.removeCita(aux_cita);
    return aux_cita;
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
  updateCitaState( cita:Citas , state, saveDate:boolean = true){
    console.log('updateCitaState',cita,state);
    cita.data.field_estado.und[0].value = state;
    let reportedateset = false;
    let fechacobroset = false;
    cita.setStateChangeEdition(state);
    
    if(cita.todayEdiciones.length > 0){  this.setCitaFechaReporte(cita,saveDate);  saveDate = false; }
    if(Number(state) === Number(CitasDataProvider.STATE_ACTIVA)){ cita.setHoraInicio();}
    if(Number(state) === Number(CitasDataProvider.STATE_COBRO)){ cita.setHoraFin();  this.setCitaFechaReporte(cita,saveDate); reportedateset=true;  }
    if(Number(state) === Number(CitasDataProvider.STATE_FINALIZADA)){
      console.log('settofinalziada woe se esta tratando de pagar');
      fechacobroset = this.setCitaFechaCobro(cita,saveDate); 
      this.setCaja(cita); 
      //this.setCitaFechaReporte(cita,saveDate); 
      reportedateset = true; 
    }
    if(cita.checkState(CitasDataProvider.STATE_ADEUDO)){ // el estado de adeudo siempre se pone cuando mandas a finalizar y no se paga el monto completo.
      console.log('esta en adeudo');
      fechacobroset = this.setCitaFechaCobro(cita,saveDate); 
      this.setCaja(cita); 
      reportedateset = true; 
    }
    if(Number(state) === Number(CitasDataProvider.STATE_CANCELADA)){
      console.log('cancelando cita'); 
      this.setCitaFechaReporte(cita,saveDate); 
      reportedateset = true; 
      console.log(' this.reportesData.todayReport', this.reportesData.todayReport);
      //this.reportesData.todayReport.nocancel++;
      //this.nodeMan.updateNode(this.reportesData.todayReport.getData()).subscribe((val)=>{console.log('updated report',val);},(error)=>{console.log('updated report error',error);});
    }
    if(!reportedateset){ delete cita.data.field_fecha_reporte; }
    if(!fechacobroset){ delete cita.data.field_hora_cobromsb; }
    console.log('updating cita',cita.data);
    //return null;
    return this.updateCita( cita.data ).share();
  }

  
  

  setCaja(cita:Citas){
    console.log('setting caja',this.userData.userData.uid,this.userData.userData.name);
    console.log('caja is like dis',cita.data.field_cita_caja);
    //cita.data.field_cita_caja.und.push(this.userData.userData.uid);
    
    let found =  cita.data.field_cajas_filter.und.find((cajauid)=>{
      return Number(this.userData.userData.uid) === Number(cajauid.value);
    });
    if(!found){
      cita.data.field_cajas_filter.und.push({'value':this.userData.userData.uid});
    }
    if(cita.checkState(CitasDataProvider.STATE_COBRO)){
    cita.data.field_caja_nombre = {'und':[{'value': this.userData.userData.name}]};
    cita.data.field_cita_caja.und[0] = this.userData.userData.uid;
    }
    console.log('cajas filter ended laik ',cita.data.field_cajas_filter);
    //si el estado de la cita es adeudo no se guarda el nombre
  }
/*
  {"receivers":["76"],
  "action":"addCita","sender":"76","content":{"Nid":"1760","type":"citas","field_date":{"und":[{"value":{"date":"20/01/2019","time":"05:30"}}]},"field_hora_inicio":{"und":[{"value":{"date":"20/1/2019","time":"5:29"}}]},"field_hora_final":{"und":[{"value":{"date":"20/1/2019","time":"5:29"}}]},"field_costo_sobrescribir":{"und":[{"value":2123}]},"field_paciente":{"und":[{"value":"testNombrecaja"}]},"field_email":{"und":[{"email":""}]},"field_telefono":{"und":[{"value":0}]},"field_estado":{"und":[{"value":4}]},"field_cita_doctor":{"und":["76"]},"field_cita_caja":{"und":["76"]},"field_cita_recepcion":{"und":["76"]},"field_alias":0,"doctor_name":"","doctor_alias":"","field_servicios_cita":{"und":["401","1577"]},"field_cobro":{"und":[{"value":0}]},"field_cobro_efectivo":{"und":[{"value":0}]},"field_cobro_tarjeta":{"und":[{"value":0}]},"field_cobro_cheque":{"und":[{"value":0}]},"field_datemsb":{"und":[{"value":1547962200000}]},"field_hora_iniciomsb":{"und":[{"value":1547962176569}]},"field_hora_finalmsb":{"und":[{"value":1547962184799}]},"field_retrasda":{"und":[{"value":0}]},"aux_servicios_json":null,"field_facturar":{"und":[{"value":0}]},"field_facturar_cantidad":{"und":[{"value":null}]},"field_caja_nombre":{"und":["pruebaform1"]},"field_fecha_reporte":{"und":[{"value":1547962206215}]},"field_hora_cobromsb":{"und":[{"value":1547962206215}]}},"isBroadcast":true}
*/
  setCitaFechaCobro( cita:Citas, saveDate:boolean = true, date:Date = new Date() ){
    if(!saveDate) return false;
    console.log('saving date'); 
    console.log('citas data',cita.data);
    if(!cita.data.field_hora_cobromsb){
      cita.data.field_hora_cobromsb = {'und':[{'value': 0}]} ;
    }
    cita.data.field_hora_cobromsb['und'][0]['value'] = date.getTime();
    return true;
  }

  setCitaFechaReporte(cita:Citas,saveDate:boolean = true, date:Date = new Date()){
    console.log('setCitaFechaReporte',cita,saveDate,date); 
    if(!saveDate) return false;
    console.log('saving date'); 
    console.log('citas data',cita.data);
    if(!cita.data.field_fechas_reporte){
      console.log('no hay field_fechas_reporte data poniendolo');
      cita.data.field_fechas_reporte = { und:[] };
    }
    console.log('saving date',cita.data.field_fechas_reporte); 
    cita.data.field_fechas_reporte['und'].push( {'value': date.getTime()} );
    console.log('saving date',cita.data.field_fechas_reporte); 
    return true;
    /*if(!cita.data.field_fecha_reporte){
      cita.data.field_fecha_reporte = {'und':[{'value': 0}]} ;
    }
    cita.data.field_fecha_reporte['und'][0]['value'] = date.getTime();
*/
  }



  getDoctorOFCita( Cita:Citas ):Doctores{
    let ret = null;
    let uid = Cita.data.field_cita_doctor.und[0];
    ret = this.doctores.getDoctorByUid(uid);
    return ret;
  }

  isNextCita(cita:Citas):boolean{
    let ret = false;
    let aux_doctor = this.getDoctorOFCita(cita);
    if(aux_doctor.nextCita && ( Number(aux_doctor.nextCita.Nid) === Number(cita.Nid)) ){
      ret = true;
    }
    return ret;
  }
  
}

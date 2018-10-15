
import { Injectable } from '@angular/core';
import { Citas } from '../user-data/citas';
import { Subject } from 'rxjs/Subject';
import { citasData } from '../user-data/user-data';
import { Doctores } from '../user-data/doctores';
import { DoctoresDataProvider } from '../doctores-data/doctores-data';
import { DateProvider } from '../date/date';



@Injectable()
export class CitasDataProvider{
  citas:Citas[] = new Array();
  citasShowPool:Citas[] = new Array(); //some citas to show based on filters.
  startDateFilter:number = 0;
  endDateFilter:number = new Date().getTime()+(1000*60*60*24*365*5);
  citasSubject:Subject<any> = new Subject();

  customDateFilters:boolean = false;
  customFilters:boolean = false;

  //estados de cita:
  public static STATE_PENDIENTE = 0;
  public static STATE_CONFIRMADA = 1;
  public static STATE_ACTIVA = 2;
  public static STATE_COBRO = 3;
  public static STATE_FINALIZADA = 4;
  public static STATE_CANCELADA = 5;
  public static STATE_ELIMINADA = 6;

  public static STATE_ORDER_ACTIVA = 1;
  public static STATE_ORDER_CONFIRMADA = 2;
  public static STATE_ORDER_COBRO = 3;
  public static STATE_ORDER_PENDIENTE = 4;
  public static STATE_ORDER_FINALIZADA = 5;
  public static STATE_ORDER_CANCELADA = 6;
  public static STATE_ORDER_ELIMINADA = 7;

  public static STATE_PENDIENTE_COLOR = '#6ddeba';
  public static STATE_CONFIRMADA_COLOR = '#50A3C7';
  public static STATE_ACTIVA_COLOR = '#94BA3A';
  public static STATE_COBRO_COLOR = '#C1272D';
  public static STATE_FINALIZADA_COLOR = '#909090';
  public static STATE_CANCELADA_COLOR = '#800005';
  public static STATE_ELIMINADA_COLOR = '#800005';


  get STATE_PENDIENTE(){return CitasDataProvider.STATE_PENDIENTE;}
  get STATE_CONFIRMADA(){return CitasDataProvider.STATE_CONFIRMADA;}
  get STATE_ACTIVA(){return CitasDataProvider.STATE_ACTIVA;}
  get STATE_COBRO(){return CitasDataProvider.STATE_COBRO;}
  get STATE_FINALIZADA(){return CitasDataProvider.STATE_FINALIZADA;}
  get STATE_CANCELADA(){return CitasDataProvider.STATE_CANCELADA;}
  get STATE_ELIMINADA(){return CitasDataProvider.STATE_CANCELADA;}

  get STATE_ORDER_PENDIENTE(){return CitasDataProvider.STATE_ORDER_PENDIENTE;}
  get STATE_ORDER_CONFIRMADA(){return CitasDataProvider.STATE_ORDER_CONFIRMADA;}
  get STATE_ORDER_ACTIVA(){return CitasDataProvider.STATE_ORDER_ACTIVA;}
  get STATE_ORDER_COBRO(){return CitasDataProvider.STATE_ORDER_COBRO;}
  get STATE_ORDER_FINALIZADA(){return CitasDataProvider.STATE_ORDER_FINALIZADA;}
  get STATE_ORDER_CANCELADA(){return CitasDataProvider.STATE_ORDER_CANCELADA;}
  get STATE_ORDER_ELIMINADA(){return CitasDataProvider.STATE_ORDER_CANCELADA;}

  get STATE_PENDIENTE_COLOR(){return CitasDataProvider.STATE_PENDIENTE_COLOR;}
  get STATE_CONFIRMADA_COLOR(){return CitasDataProvider.STATE_CONFIRMADA_COLOR;}
  get STATE_ACTIVA_COLOR(){return CitasDataProvider.STATE_ACTIVA_COLOR;}
  get STATE_COBRO_COLOR(){return CitasDataProvider.STATE_COBRO_COLOR;}
  get STATE_FINALIZADA_COLOR(){return CitasDataProvider.STATE_FINALIZADA_COLOR;}
  get STATE_CANCELADA_COLOR(){return CitasDataProvider.STATE_CANCELADA_COLOR;}
  get STATE_ELIMINADA_COLOR(){return CitasDataProvider.STATE_ELIMINADA_COLOR;}



  constructor() {}
  get subject():Subject<any>{return this.citasSubject;}

  addCita( cita:Citas, call:boolean = true){
    console.log('adding a cita', cita);
    console.log('already existing citas',this.citas);
    if(!this.exists(cita)) this.citas.push(cita);
    else this.updateCita(cita.data);
    if( call )this.subject.next(this.citas);
    this.defaultSort();
    console.log('added cita',cita,this.citas);
  }

  removeCita( cita:Citas, call:boolean = true){
    //delete this.citas[cita.Nid];
    this.citas = this.citas.filter((citas)=>{ return citas.Nid !== cita.Nid});
    console.log('citas list after removed',this.citas);
    if( call ) this.subject.next(this.citas);
    this.defaultSort();
    console.log('removed cita',cita,this.citas);
  }


  updateCita( data:citasData, call:boolean = true ){
    for( let cita of this.citas ){
      if(cita.Nid === data.Nid){
        cita.data = data;
        /*cita.setData(data);*/
         if( call ) this.subject.next(this.citas);
        console.log('updated cita',cita);
      }
    }
    this.defaultSort();
  }

  defaultSort(){
    this.citas =  CitasDataProvider.sortByStateDate(this.citas);
    this.applyFilters();
    this.citasShowPool =  CitasDataProvider.sortByStateDate(this.citasShowPool);
  }


  getCitasByStatus( status:string ){
    return this.citas.filter( (citas) => {citas.checkState(status)});
  }

  exists( cita:Citas ):boolean{
   return this.citas.filter((citas)=>{ console.log(citas.Nid,'vs',cita.Nid); return Number(citas.Nid) === Number(cita.Nid) }).length > 0;
  }

  triggerSubject(){
    this.subject.next(this.citas);
  }

  resetDateFilters(){
    this.startDateFilter = 0;
    this.endDateFilter = new Date().getTime()+(1000*60*60*24*365*5);
  }

  applyFilters(){
    this.citasShowPool = CitasDataProvider.filterByDates(this.citas, this.startDateFilter, this.endDateFilter);
    
  }


  static getStateColor( state:number ):string{
    let ret = '';
    switch(state){
      case CitasDataProvider.STATE_PENDIENTE: ret = CitasDataProvider.STATE_PENDIENTE_COLOR; break;
      case CitasDataProvider.STATE_CONFIRMADA: ret = CitasDataProvider.STATE_CONFIRMADA_COLOR; break;
      case CitasDataProvider.STATE_ACTIVA: ret = CitasDataProvider.STATE_ACTIVA_COLOR; break;
      case CitasDataProvider.STATE_COBRO: ret = CitasDataProvider.STATE_COBRO_COLOR; break;
      case CitasDataProvider.STATE_FINALIZADA: ret = CitasDataProvider.STATE_FINALIZADA_COLOR; break;
      case CitasDataProvider.STATE_CANCELADA: ret = CitasDataProvider.STATE_CANCELADA_COLOR; break;
      case CitasDataProvider.STATE_ELIMINADA: ret = CitasDataProvider.STATE_ELIMINADA_COLOR; break;
      default: ret = CitasDataProvider.STATE_FINALIZADA_COLOR;
    }
    return ret;
  }

  static getStateLabel( state:number ):string{
    let ret = '';
    switch(state){
      case CitasDataProvider.STATE_PENDIENTE: ret = 'Pendiente'; break;
      case CitasDataProvider.STATE_CONFIRMADA: ret = 'Confirmada'; break;
      case CitasDataProvider.STATE_ACTIVA: ret = 'Activa'; break;
      case CitasDataProvider.STATE_COBRO: ret = 'Cobro'; break;
      case CitasDataProvider.STATE_FINALIZADA: ret = 'Finalizada'; break;
      case CitasDataProvider.STATE_CANCELADA: ret = 'Cancelada'; break;
      case CitasDataProvider.STATE_ELIMINADA: ret = 'Eliminada'; break;
      default: ret = 'Error';
    }
    return ret;
  }

  static getReceivers(cita:Citas):number[]{
    return [cita.data.field_cita_doctor.und[0]];
  }

  static sortByDate(citas:Citas[]){
    return citas.sort((a,b)=>{ 
      if (a.dateMs < b.dateMs)
      return -1;
    if (a.dateMs > b.dateMs)
      return 1;
   return 0;
    });
  }

  static filterByDates(citas:Citas[], startDate, endDate){
    return citas.filter((citas)=>{
      return 
      citas.data.field_datemsb.und[0].value >= startDate 
      &&
      citas.data.field_datemsb.und[0].value <= endDate
    });
  }

  static sortByStateDate(citas:Citas[]){
    return citas.sort((a,b)=>{ 
      console.log('sorging citas');
      console.log(CitasDataProvider.getValueOfStateSort(a.data.field_estado.und[0]['value']));
      console.log(CitasDataProvider.getValueOfStateSort(b.data.field_estado.und[0]['value']));
      if(CitasDataProvider.getValueOfStateSort(a.data.field_estado.und[0]['value']) > CitasDataProvider.getValueOfStateSort(b.data.field_estado.und[0]['value'])){return 1;}
      if(CitasDataProvider.getValueOfStateSort(a.data.field_estado.und[0]['value']) < CitasDataProvider.getValueOfStateSort(b.data.field_estado.und[0]['value'])){return -1;}
      if(CitasDataProvider.getValueOfStateSort(a.data.field_estado.und[0]['value']) === CitasDataProvider.getValueOfStateSort(b.data.field_estado.und[0]['value'])){
        if (a.dateMs < b.dateMs)
        return -1;
      if (a.dateMs > b.dateMs)
        return 1;
     return 0;
      }
      });
  }

  static getValueOfStateSort(state):number{
    let ret = 99;
    switch (Number(state)){
      case this.STATE_PENDIENTE: ret = this.STATE_ORDER_PENDIENTE; break;
      case this.STATE_CONFIRMADA:  ret = this.STATE_ORDER_CONFIRMADA; break;
      case this.STATE_ACTIVA:  ret = this.STATE_ORDER_ACTIVA; break;
      case this.STATE_COBRO:  ret = this.STATE_ORDER_COBRO; break;
      case this.STATE_FINALIZADA:  ret = this.STATE_ORDER_FINALIZADA; break;
      case this.STATE_CANCELADA:  ret = this.STATE_ORDER_CANCELADA; break;
      case this.STATE_ELIMINADA:  ret = this.STATE_ORDER_ELIMINADA; break;
      default: ret = 99;
    }
    return ret;
  }

  static sortFilterByCloserNow(citas:Citas[]){
    console.log('citas to sortfilter',citas);
    citas = CitasDataProvider.filterPassedCitas(citas);
    return citas.sort((a,b)=>{ 
      if (a.dateMs < b.dateMs)
      return -1;
    if (a.dateMs > b.dateMs)
      return 1;
   return 0;
    });
  }

  static filterPassedCitas( citas:Citas[] ){
    const nowMs = new Date().getTime();
    return citas.filter((aux_citas)=>{  console.log('filtering cita ',aux_citas.dateMs,nowMs); return aux_citas.dateMs > nowMs }); //filter citas that are coming, not the ones that have passed already
  }


 

 


}

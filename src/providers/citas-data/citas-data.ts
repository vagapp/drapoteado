
import { Injectable } from '@angular/core';
import { Citas } from '../user-data/citas';
import { Subject } from 'rxjs/Subject';
import { citasData } from '../user-data/user-data';
import { Doctores } from '../user-data/doctores';
import { DoctoresDataProvider } from '../doctores-data/doctores-data';



@Injectable()
export class CitasDataProvider{
  citas:Citas[] = new Array();
  citasSubject:Subject<any> = new Subject();

  //estados de cita:
  public static STATE_PENDIENTE = 0;
  public static STATE_CONFIRMADA = 1;
  public static STATE_ACTIVA = 2;
  public static STATE_COBRO = 3;
  public static STATE_FINALIZADA = 4;
  public static STATE_CANCELADA = 5;
  public static STATE_ELIMINADA = 6;

  get STATE_PENDIENTE(){return CitasDataProvider.STATE_PENDIENTE;}
  get STATE_CONFIRMADA(){return CitasDataProvider.STATE_CONFIRMADA;}
  get STATE_ACTIVA(){return CitasDataProvider.STATE_ACTIVA;}
  get STATE_COBRO(){return CitasDataProvider.STATE_COBRO;}
  get STATE_FINALIZADA(){return CitasDataProvider.STATE_FINALIZADA;}
  get STATE_CANCELADA(){return CitasDataProvider.STATE_CANCELADA;}
  get STATE_ELIMINADA(){return CitasDataProvider.STATE_CANCELADA;}

  constructor() {}
  get subject():Subject<any>{return this.citasSubject;}

  addCita( cita:Citas, call:boolean = true){
    console.log('adding a cita', cita);
    console.log('already existing citas',this.citas);
    if(!this.exists(cita)) this.citas.push(cita);
    else this.updateCita(cita.data);
    if( call )this.subject.next(this.citas);
    console.log('added cita',cita,this.citas);
  }

  removeCita( cita:Citas, call:boolean = true){
    //delete this.citas[cita.Nid];
    this.citas = this.citas.filter((citas)=>{ return citas.Nid !== cita.Nid});
    console.log('citas list after removed',this.citas);
    if( call ) this.subject.next(this.citas);
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

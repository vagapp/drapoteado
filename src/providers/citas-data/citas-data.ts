
import { Injectable } from '@angular/core';
import { Citas } from '../user-data/citas';
import { Subject } from 'rxjs/Subject';
import { citasData } from '../user-data/user-data';



@Injectable()
export class CitasDataProvider{
  citas:Citas[] = new Array();
  citasSubject:Subject<any> = new Subject();

  constructor() {}
  get subject():Subject<any>{return this.citasSubject;}

  addCita( cita:Citas, call:boolean = true){
    if(!this.exists(cita)) this.citas.push(cita);
    else this.updateCita(cita.data);
    if( call )this.subject.next(this.citas);
    console.log('added cita',cita,this.citas);
  }

  removeCita( cita:Citas, call:boolean = true){
    //delete this.citas[cita.Nid];
    this.citas = this.citas.filter((citas)=>{ citas.Nid !== cita.Nid});
    if( call ) this.subject.next(this.citas);
    console.log('removed cita',cita,this.citas);
  }


  updateCita( data:citasData ){
    for( let cita of this.citas ){
      if(cita.Nid === data.Nid){
        cita.setData(data);
        console.log('updated cita',cita);
      }
    }
  }

  getCitasByStatus( status:string ){
    return this.citas.filter( (citas) => {citas.checkState(status)});
  }

  exists( cita:Citas ):boolean{
   return this.citas.filter((citas)=>{ return citas.Nid === cita.Nid }).length > 0;
  }

  triggerSubject(){
    this.subject.next(this.citas);
  }
}


import { Injectable } from '@angular/core';
import { Citas } from '../user-data/citas';
import { Subject } from 'rxjs/Subject';



@Injectable()
export class CitasDataProvider{
  citas:Citas[];
  citasSubject:Subject<any> = new Subject();

  constructor() {}
  get subject():Subject<any>{return this.citasSubject;}

  addCita( cita:Citas, call:boolean = true){
    this.citas[cita.Nid] = cita;
    if( call )this.subject.next(this.citas);
    console.log('added cita',cita,this.citas);
  }

  removeCita( cita:Citas, call:boolean = true){
    delete this.citas[cita.Nid];
    if( call ) this.subject.next(this.citas);
    console.log('removed cita',cita,this.citas);
  }

  triggerSubject(){
    this.subject.next(this.citas);
  }
}

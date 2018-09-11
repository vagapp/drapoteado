
import { Injectable } from '@angular/core';
import { Doctores } from '../user-data/doctores';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the DoctoresDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DoctoresDataProvider {
  doctores: Doctores[] = new Array;
  doctoresSubject:Subject<any> = new Subject();
  
  get doctoresIDs():number[]{
    let ret = new Array();
    ret.push(0);
    console.log(this.doctores);
    if(this.doctores && this.doctores.length !== 0){
      ret = new Array();
      for(let doc of this.doctores){
        ret.push(doc.Uid);
      }
    }
    return ret;
  }
  get subject():Subject<any>{return this.doctoresSubject;}
  constructor() {
    console.log('doctoresdata');
    console.log(this.doctores);
  }
  

  addDoctor( doc:Doctores, call:boolean = true){
    if(!this.exists(doc))this.doctores.push(doc);
    if( call )this.subject.next(this.doctores);
    console.log('added doctor',doc,this.doctores);
  }

  removeDoctor( doc:Doctores, call:boolean = true){
    //delete this.citas[cita.Nid];
    this.doctores = this.doctores.filter((doctores)=>{ return doctores.Uid !== doc.Uid});
    if( call ) this.subject.next(this.doctores);
    console.log('removed doctor',doc,this.doctores);
  }

  exists( doc:Doctores ):boolean{
    return this.doctores.filter((docs)=>{ return Number(docs.Uid) === Number(doc.Uid) }).length > 0;
   }

   existsByUid( uid:number ):boolean{
    return this.doctores.filter((docs)=>{ return Number(docs.Uid) === Number(uid) }).length > 0;
   }

   static isDoctorBusy( doc:Doctores ){
    return doc.citaActiva !== null;
   }

   getDoctorByUid( uid ):Doctores{
    let ret = null;
    const exists = this.doctores.filter((docs)=>{ return Number(docs.Uid) === Number(uid) })
    if(exists.length > 0) ret = exists[0];
    return ret;
    /*this.doctores.forEach(element => {
      console.log("comparing uid", Number(element.Uid)+"==="+Number(uid));
      if(Number(element.Uid) === Number(uid) ) {
        ret = element;
      }
    });
    console.log(ret);
    return ret;*/
  }

}

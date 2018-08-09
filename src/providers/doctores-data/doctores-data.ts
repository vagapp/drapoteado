
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
    let ret = null;
    if(this.doctores && this.doctores.length !== 0){
      ret = new Array();
      for(let doc of this.doctores){
        ret.push(doc.Uid);
      }
    }
    return ret;
  }
  get subject():Subject<any>{return this.doctoresSubject;}
  constructor() {}
  

  addDoctor( doc:Doctores, call:boolean = true){
    if(!this.exists(doc))this.doctores.push(doc);
    if( call )this.subject.next(this.doctores);
    console.log('added cita',doc,this.doctores);
  }

  removeDoctor( doc:Doctores, call:boolean = true){
    //delete this.citas[cita.Nid];
    this.doctores = this.doctores.filter((doctores)=>{ doctores.Uid !== doc.Uid});
    if( call ) this.subject.next(this.doctores);
    console.log('removed cita',doc,this.doctores);
  }

  exists( doc:Doctores ):boolean{
    return this.doctores.filter((docs)=>{ return docs.Uid === doc.Uid }).length > 0;
   }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctoresDataProvider } from '../doctores-data/doctores-data';
import { Doctores } from '../user-data/doctores';


/*
  Generated class for the DoctoresManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DoctoresManagerProvider {

  constructor(
    public http: HttpClient,
    public docData:DoctoresDataProvider,
  ) {
  }


  setDoctores(Uids:number[]){
    for(let uid of Uids){
      const auxDoc = new Doctores();
      auxDoc.Uid = uid;
      this.docData.addDoctor(auxDoc);
    }
  }


  requestDoctores(){
    
  }
  /*
  cargarDoctores(){
    if(this.checkUserPermission([UserDataProvider.TIPO_DOCTOR])){
      //si es un doctor agregarse a si mismo a la lista de doctores.
      let aux_doc = new Doctores();
      aux_doc.Uid = this.userData.uid;
      this.doctores.addDoctor(aux_doc);
      }else{ //si no es un doctor cargar todos los doctores que esta manejando
        let doctoruids = new Array();
        for(let i = 0; i<this.userData.field_doctores.und.length; i++){
          let aux_doc = new Doctores();
          aux_doc.Uid = this.userData.field_doctores.und[i].uid;
          doctoruids.push(aux_doc.Uid);
          this.doctores.addDoctor(aux_doc);
        }
        Debugger.log(['doctores to search',doctoruids]);
        this.getUsers(null,null,doctoruids).subscribe(
          (val)=>{ 
            Debugger.log(['getData result Array',val]);
            let aux_results = Object.keys(val).map(function (key) { return val[key]; });
            aux_results.forEach(element => {
              Debugger.log(['setting  this element doc',element]);
              this.doctores.doctores.forEach(doc => {
                if( Number(doc.Uid) === Number(element['uid']) ){
                  doc.name = element['name'];
                  doc.field_alias = element['field_alias'];
                }
              });
            });
            Debugger.log(['doctores at the end of getting users',this.doctores.doctores]);
           
          },
          (response)=>{},
        );
      }
  }
  */

}

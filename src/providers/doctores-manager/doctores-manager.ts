import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctoresDataProvider } from '../doctores-data/doctores-data';
import { Doctores } from '../user-data/doctores';
import { UserDataProvider } from '../user-data/user-data';
import { DrupalUserManagerProvider } from '../drupal-user-manager/drupal-user-manager';
import { DrupalNodeEditorProvider } from '../drupal-node-editor/drupal-node-editor';
import { SubscriptionManagerProvider } from '../subscription-manager/subscription-manager';
import { CitasDataProvider } from '../citas-data/citas-data';
import { Subject } from 'rxjs/Subject';
import { Citas } from '../user-data/citas';


/*
  Generated class for the DoctoresManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DoctoresManagerProvider {
  citasSubject:Subject<any>;

  constructor(
    public http: HttpClient,
    public docData:DoctoresDataProvider,
    public userData: UserDataProvider,
    public userMan: DrupalUserManagerProvider,
    public subsMan: SubscriptionManagerProvider,
    public nodeEditor: DrupalNodeEditorProvider,
    public citasData: CitasDataProvider
  ) {
    this.citasSubject = this.citasData.citasSubject;
    this.citasSubject.subscribe(
      (val)=>{
        //whem there is a change on citas, doctor manager evaluates citas to get nextCitas for these doctors.
        console.log('citas change on doctor manager',val);
      }
    );
  }

  /**
   * Este metodo carga los uids de los doctores del usuario:
   * si es un doctor carga su propio uid
   * si es una subcuenta carga los uids de todos los doctores que esta manejando.
  */
  async initDoctoresUids(){
    if(this.userData.checkUserPermission([UserDataProvider.TIPO_DOCTOR])){
      this.setDoctores([this.userData.userData.uid]);
    }else{
      console.log('not a doctor setting docs uids');
      console.log(this.userData.userData.field_doctores);
      if(this.userData.userData.field_doctores && this.userData.userData.field_doctores.und.length > 0){
        console.log('it has docs');
      //this.setDoctores(this.userData.userData.field_doctores.und);
      console.log('docs ids',this.userData.userData.field_doctores.und);
      const docfilter = this.nodeEditor.getCleanField(DrupalNodeEditorProvider.FIELD_RELATION,this.userData.userData,'field_doctores',false);
      console.log('cleaned docfilter',docfilter);
      let docs_data = await this.userMan.requestUsers(null,null,docfilter).toPromise();
      this.setDoctoresData(docs_data);
      //for(let doc of doc_data){
      }
    }
  }



  setDoctores(Uids:number[]){
    for(let uid of Uids){
      const auxDoc = new Doctores();
      auxDoc.Uid = uid;
      this.docData.addDoctor(auxDoc);
    }
  }

  setDoctoresData(docs_data){
    console.log('setting docs based on data', docs_data);
    for(let doc of docs_data){
      const auxDoc = new Doctores();
      auxDoc.Uid = doc.uid;
      auxDoc.name = doc.name;
      auxDoc.field_alias = doc.field_alias;
      this.docData.addDoctor(auxDoc);
    }
  }


  filterActiveDoctors(){
    console.log('filterActiveDoctors');
    if(!this.userData.checkUserPermission([UserDataProvider.TIPO_DOCTOR])){
      console.log('this is not a doc');
    this.docData.doctores = this.docData.doctores.filter(
      (docs) =>{
        console.log('checking doc subs',docs);
        return this.subsMan.checkSusOfDoctor(docs.Uid);
      }
    );
    }
  }

  evaluateCitas(){
    for(let doctor of this.docData.doctores){
      let doc_citas = this.citasData.citas.filter((citas)=>{ Number(citas.data.field_cita_doctor.und[0]) === Number(doctor.Uid) });
      console.log('doccitas',doctor.Uid,doc_citas);
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

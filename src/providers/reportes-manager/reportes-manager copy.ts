import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReportesDataProvider } from '../reportes-data/reportes-data';
import { UserDataProvider } from '../user-data/user-data';
import { DateProvider } from '../date/date';
import { BaseUrlProvider } from '../base-url/base-url';
import { Observable } from 'rxjs/Observable';
import { reportes } from '../user-data/reportes';
import { DoctoresDataProvider } from '../doctores-data/doctores-data';
import { DrupalNodeManagerProvider } from '../drupal-node-manager/drupal-node-manager';
import { DrupalUserManagerProvider } from '../drupal-user-manager/drupal-user-manager';
import { Citas } from '../user-data/citas';
import { DrupalNodeEditorProvider } from '../drupal-node-editor/drupal-node-editor';
import { PermissionsProvider } from '../permissions/permissions';

/*
  Generated class for the ReportesManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReportesManagerProvider {

  constructor(
    public http: HttpClient,
    public reportesData: ReportesDataProvider,
    public doctoresData: DoctoresDataProvider,
    public userData: UserDataProvider,
    public dp: DateProvider,
    public bu: BaseUrlProvider,
    public nodeMan: DrupalNodeManagerProvider,
    public nodeEditor: DrupalNodeEditorProvider,
    public perm: PermissionsProvider
  ) {
    console.log('Hello ReportesManagerProvider Provider');
  }


  //REPORTES METHODS
  async cargarListaReportes(){
    console.log('cargarListaReportes');
    if(!this.reportesData.isSetTodayReport){ console.log('loading today report'); await this.getTodayReport();  console.log('end loading today report'); }
    console.log('today report is',this.reportesData.todayReport);
    let reportes_data = await this.requestReportes(-1, 'all').toPromise();
    console.log('obtained reportes data ',reportes_data);
    for( let reporte_data of reportes_data){
      if(this.reportesData.checkTodayReportNid(reporte_data['nid'])){
        console.log('Nid reporte de hoy',reporte_data);
        this.reportesData.todayReport.setData(reporte_data);
      }else{
        console.log('else nid reporte de hoy',reporte_data);
        this.reportesData.addReporte(reporte_data);
      }
    }
  }

  requestReportes(
    dialy:number = -1, 
    date:string = `${(this.dp.nowStart-30*1000)}--${(this.dp.nowEnd-30*1000)}` , 
    uid:number = this.userData.userData.uid
  ):Observable<any>
    {
      let filter = `?args[0]=${uid}`;
      let extrafilters = `&args[1]=${date}${dialy === -1?'':`&args[2]=${dialy}`}`;
      let url = this.bu.endpointUrl+'rest_reportes.json'+filter+extrafilters;
      return this.http.get(url).share();
    }

    //METE AL DOCTOR A LA LISTA DE DOCTORES DE HOY SI ES QUE NO ESTA AHI
     async checkUpdateTodayDocs( docuid:number){
       console.log('checking for doc on report ',docuid);
      //this.reportesData.todayReport.doctores = this.doctoresData.doctoresIDs;
      let exists = this.reportesData.todayReport.doctores.find((docs)=>{ return Number(docs) === Number(docuid)});
      console.log('updateTodayDocs exists',exists);
      if(!exists){
        console.log('HAY QUE AGREGAR EL DOC AL REPORTE MAMA');
        this.reportesData.todayReport.doctores.push(Number(docuid));
        await this.nodeMan.updateNode(this.reportesData.todayReport.getData()).toPromise();
      }
    }

    //este metodo te da el reporte de hoy, si no lo existe lo genera.
  async getTodayReport(){
   let todayReport_Data = await this.requestReportes(1).toPromise(); //buscando reporte de hoy
   console.log('getting todayreport',todayReport_Data);
   if(todayReport_Data.length > 0){  //generando objeto de reporte con la info del reporte de hoy
    this.reportesData.addReporte(todayReport_Data[0], true);
   }else{ //creando reporte de hoy si no existe
     console.log('generating today report');
    await this.generateTodayReport();
    console.log('after generating today report');
   }
  }

  //este metodo genera el reporte de hoy! y lo guarda en drupalito
  async generateTodayReport(){
    const uax_treport = new reportes();
      uax_treport.author_uid = this.userData.userData.uid;
      uax_treport.doctores = this.doctoresData.doctoresIDs;
      uax_treport.dateStartUTMS = this.dp.nowStart;
      uax_treport.dateEndUTMS = this.dp.nowEnd;
      uax_treport.dialy = true;
      if(this.perm.checkUserPermission([UserDataProvider.TIPO_CAJA])){
        uax_treport.cajas = [this.userData.userData.uid];
      }
      console.log('dateStartUTMS', uax_treport.dateStartUTMS);
      console.log('dateEndUTMS',uax_treport.dateEndUTMS);
    let nid = await this.nodeMan.generateNewNode(uax_treport.getData()).toPromise();
    console.log(nid);
    uax_treport.nid = nid['nid'];
    console.log('generated nid',nid['nid']);
    console.log('obtained stringified', JSON.stringify(uax_treport));
    console.log('obtained data stringified', JSON.stringify(uax_treport.getData()));
    let data = uax_treport.getData();
    this.nodeEditor.getCleanField(DrupalNodeEditorProvider.FIELD_RELATION,data,'field_doctores');
    this.nodeEditor.getCleanField(DrupalNodeEditorProvider.FIELD_RELATION,data,'field_cajas') ;
    this.nodeEditor.getCleanField(DrupalNodeEditorProvider.FIELD_RELATION,data,'field_recepciones');
    this.nodeEditor.getCleanField(DrupalNodeEditorProvider.FIELD_NUMBER,data,'field_datestartutmb');
    this.nodeEditor.getCleanField(DrupalNodeEditorProvider.FIELD_NUMBER,data,'field_dateendutmb');
    console.log('docs',data['field_doctores']);
    data['field_doctores'] = data['field_doctores'].map((val)=>{ return {uid:val}});
    data['field_cajas'] = data['field_cajas'].map((val)=>{ return {uid:val}});
    data['field_recepciones'] = data['field_recepciones'].map((val)=>{ return {uid:val}});
    data['field_datestartutmb'] = {'value': data['field_datestartutmb']}
    data['field_dateendutmb'] = {'value': data['field_dateendutmb']}
    console.log('data ends as',data);
    console.log('reporte data',data);
    this.reportesData.addReporte(data,true);
  }

  async updateReporte(reporte){
    let val = await this.nodeMan.updateNode(reporte.getData()).toPromise();+
    console.log('reporte actualizado ',val);
    return val;
    
  }

  deleteReport(report):Observable<any>{
    this.reportesData.removeReporte(report);
    return this.nodeMan.deleteNode(report.getData()).share();
  }


 

}

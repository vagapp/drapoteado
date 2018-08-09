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
    public nodeMan: DrupalNodeManagerProvider
  ) {
    console.log('Hello ReportesManagerProvider Provider');
  }


  //REPORTES METHODS
  async cargarListaReportes(){
    if(!this.reportesData.isSetTodayReport) 
    await this.getTodayReport();
    let reportes_data = await this.requestReportes(-1, 'all').toPromise();
    for( let reporte_data of reportes_data){
      if(this.reportesData.checkTodayReportNid(reporte_data['nid'])){
        this.reportesData.todayReport.setData(reporte_data);
      }else{
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

  async getTodayReport(){
   let todayReport_Data = await this.requestReportes(1).toPromise();
   if(todayReport_Data.length > 0){
    this.reportesData.addReporte(todayReport_Data[0]);
   }else{
    await this.generateTodayReport();
   }
  }

  async generateTodayReport(){
    const uax_treport = new reportes();
      uax_treport.author_uid = this.userData.userData.uid;
      uax_treport.doctores = this.doctoresData.doctoresIDs;
      uax_treport.dateStartUTMS = this.dp.nowStart;
      uax_treport.dateEndUTMS = this.dp.nowEnd;
      uax_treport.dialy = true;
    let nid = await this.nodeMan.generateNewNode(uax_treport.getData()).toPromise();
    uax_treport.nid = nid[0];
    this.reportesData.addReporte(uax_treport,true);
  }

  deleteReport(report):Observable<any>{
    this.reportesData.removeReporte(report);
    return this.nodeMan.deleteNode(report.getData()).share();
  }


}

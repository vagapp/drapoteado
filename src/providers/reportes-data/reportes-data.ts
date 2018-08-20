import { Injectable } from '@angular/core';
import { reportes } from '../user-data/reportes';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the ReportesDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReportesDataProvider {
  reportes:reportes[] = new Array();
  todayReport:reportes = null;
  subject:Subject<any> = new Subject();

  get isSetTodayReport():boolean{
    return (this.todayReport !== null && this.todayReport.nid !== null)
  }


  constructor() {
    console.log('Hello ReportesDataProvider Provider');
  }

  addReporte( input_data , today = false, call = false ){
    console.log('adding reporte',input_data);
    if(!this.checkForUpdate(input_data)){
      this.addNewReporte(input_data, today);
    }
    if(call) this.subject.next(this.reportes);
    console.log('generatedReport',input_data,this.reportes);
  }

  removeReporte( reporte:reportes, call:boolean = true){
    this.reportes = this.reportes.filter((reportes)=>{ reportes.nid !== reporte.nid});
    if( call ) this.subject.next(this.reportes);
    console.log('removed cita',reporte,this.reportes);
  }

  addNewReporte(input_data, today = false){
    let aux_rep = new reportes();
    aux_rep.setData(input_data);
    if(today) this.todayReport = aux_rep; 
    else this.reportes.push(aux_rep);
  }

  checkForUpdate(input_data):boolean{
    let ret = false;
    let aux_reportes = this.reportes.filter((reportes)=>{ return Number(input_data.nid) === Number(reportes.nid)});
    if(aux_reportes.length > 0){
      aux_reportes[0].setData(input_data);
      ret = true;
    }
    return ret;
  }


  checkTodayReportNid( Nid:number ):boolean{
    return Number(this.todayReport.nid) === Number(Nid); 
  }




}

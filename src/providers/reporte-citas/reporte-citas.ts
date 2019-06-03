import { Injectable } from '@angular/core';
import { reportes } from '../user-data/reportes';
import { Citas } from '../user-data/citas';
import { CitasManagerProvider } from '../citas-manager/citas-manager';
import { ConditionalExpr } from '@angular/compiler';

/*
  Generated class for the ReporteCitasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReporteCitasProvider {

  constructor(
    public citasManager: CitasManagerProvider
  ) {
   
  }

  async reporteLoadCitas( report:reportes , doctorUid:number = null){
    let aux_citas = new Array<Citas>();
    const obs = this.reporteGetCitasObservable(report, doctorUid);
    let citas_data = await obs.toPromise();
    console.log('reporteLoadCitas obtained data',citas_data);
    report.citas = this.generateCitasFromdata(citas_data);
    //now we gotta sort everything.
  }


  reporteGetCitasObservable(report:reportes,  doctorUid:number = null){
    console.log('reporteGetCitasObservable',report,doctorUid);
    console.log(report.dateStartUTMS);
      console.log(report.dateEndUTMS);
        console.log(report.doctoresFilter);
          console.log('reportcajafilter',report.cajaFilter);
            console.log( report.recepcionFilter);
    if(doctorUid)
    return this.citasManager.getCitasObservableReport(
      report.dateStartUTMS,
      report.dateEndUTMS,
      [doctorUid],
      report.cajaFilter,
      report.recepcionFilter
     );
    else
    return this.citasManager.getCitasObservableReport(
      report.dateStartUTMS,
      report.dateEndUTMS,
      report.doctoresFilter,
      report.cajaFilter,
      report.recepcionFilter
     );
  }

  generateCitasFromdata( citas_data ){
    let aux_citalit = new Array<Citas>()
      for(let cita of citas_data){
        let aux_cita = new Citas();
        aux_cita.setData(cita);
        let exists = aux_citalit.find((citax)=>{ return Number(citax.Nid) === Number(cita.Nid)});
        if(!exists){
         
         aux_citalit.push(aux_cita);
        }else{
          console.log('blocked report cita',cita);
        }
      }
      return aux_citalit;
  }

  checkForCitaUpdate(report:reportes, cita:Citas){
    let exists = report.citas.filter((citas)=>{return Number(citas.Nid) === Number(cita.Nid)});
    if(exists.length > 0){
      exists[0].data = cita.data;
      exists[0].processData();
    }
  }





  async reporteLoadCitasGrupales(report:reportes , doctorUids:number[] = null){
    let aux_citas = new Array<Citas>();
    console.log('docuids',doctorUids);
    let res = await this.citasManager.getCitasObservableReport(
      report.dateStartUTMS,
      report.dateEndUTMS,
      doctorUids,
      report.cajaFilter,
      report.recepcionFilter
     ).toPromise();
     console.log('resgot is',res);
     report.citas = this.generateCitasFromdata(res);
    //now we gotta sort everything.
  }
  async reporteLoadCitasAdeudo(report:reportes , doctorUids:number[] = null){
    let aux_citas = new Array<Citas>();
    console.log('docuids',doctorUids);
    let res = await this.citasManager.getCitasObservableAdeudos(
      doctorUids,
      report.cajaFilter,
      report.recepcionFilter
     ).toPromise();
     console.log('resgot is',res);
     report.citas = this.generateCitasFromdata(res);
    //now we gotta sort everything.
  }


 

}

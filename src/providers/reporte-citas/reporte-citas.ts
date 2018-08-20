import { Injectable } from '@angular/core';
import { reportes } from '../user-data/reportes';
import { Citas } from '../user-data/citas';
import { CitasManagerProvider } from '../citas-manager/citas-manager';

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

  async reporteLoadCitas( report:reportes){
    let aux_citas = new Array<Citas>();
    const obs = this.reporteGetCitasObservable(report);
    let citas_data = await obs.toPromise();
    report.citas = this.generateCitasFromdata(citas_data);
    //now we gotta sort everything.
  }

  reporteGetCitasObservable(report:reportes){
    return this.citasManager.getCitasObservable(
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
        aux_citalit.push(aux_cita);
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

 

}

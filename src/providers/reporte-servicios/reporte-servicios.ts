import { Injectable } from '@angular/core';
import { ServiciosManagerProvider } from '../servicios-manager/servicios-manager';
import { reportes } from '../user-data/reportes';
import { CitaProgressControllerProvider } from '../cita-progress-controller/cita-progress-controller';

@Injectable()
export class ReporteServiciosProvider {

  constructor(
    public servManager: ServiciosManagerProvider
  ) {
  }

  reporteLoadServicios( report:reportes){
   
  }

  getServiciosResume(report:reportes):Array<any>{
    console.log('trailtime getServiciosResume');
    let ret = new Array();
  
    console.log('loading report');
    for(let cita of report.citas){
      cita.testOriginactivereport(Number(report.dateStartUTMS), Number(report.dateEndUTMS));
      // console.log('added services',cita.reporteServicios);
      if(cita.originactivereport){
      for( let servicio of cita.reporteServicios){
        console.log('checking serv',servicio);
        let found = ret.find((servicios)=>{
          return Number(servicios.nid) === Number(servicio.Nid)
        });
        console.log('servicio found is',found);
        if(found){
          found.times++;
          found.costo += Number(servicio.costo);
        }else{
          let aux_servresume = {
            nid:Number(servicio.Nid),
            title:servicio.title,
            costo:Number(servicio.costo),
            times:1,
            doc: cita.doctor_name,
            order: servicio.order
          }
          ret.push(aux_servresume);
        }
      }
    }
    }

    console.log('returnting servresumen',ret);
    return ServiciosManagerProvider.staticDefaultSort(ret);
    //return ret;
    /*return ret.sort((a,b)=>{
      if(a.order < b.order){return 1;}
      if(a.order > b.order){return -1;}
      if(a.order === b.order){
        if (a.title < b.title)
        return -1;
      if (a.title > b.title)
        return 1;
     return 0;
      }
    });*/
  }

  
  reporteGetServiciosObservable( report:reportes ){

  }

  generateServiciosFromdata( servicio_data ){

  }

}

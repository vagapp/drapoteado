import { Injectable } from '@angular/core';
import { ServiciosManagerProvider } from '../servicios-manager/servicios-manager';
import { reportes } from '../user-data/reportes';

@Injectable()
export class ReporteServiciosProvider {

  constructor(
    public servManager: ServiciosManagerProvider
  ) {
  }

  reporteLoadServicios( report:reportes){
   
  }

  getServiciosResume(report:reportes):Array<any>{
    let ret = new Array();
  
    console.log('loading report');
    for(let cita of report.citas){
      // console.log('added services',cita.reporteServicios);
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
            times:1
          }
          ret.push(aux_servresume);
        }
      }
    }
    console.log('returnting servresumen',ret);
    return ret;
  }
  
  reporteGetServiciosObservable( report:reportes ){

  }

  generateServiciosFromdata( servicio_data ){

  }

}

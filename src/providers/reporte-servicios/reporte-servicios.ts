import { Injectable } from '@angular/core';
import { ServiciosManagerProvider } from '../servicios-manager/servicios-manager';
import { reportes } from '../user-data/reportes';

@Injectable()
export class ReporteServiciosProvider {

  constructor(
    public servManager: ServiciosManagerProvider
  ) {
  }

  reporteLoadServicios( report:reportes ){

  }
  
  reporteGetServiciosObservable( report:reportes ){

  }

  generateServiciosFromdata( servicio_data ){

  }

}

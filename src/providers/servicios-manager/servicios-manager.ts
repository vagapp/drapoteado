import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DrupalNodeManagerProvider } from '../drupal-node-manager/drupal-node-manager';
import { DoctoresDataProvider } from '../doctores-data/doctores-data';
import { servicios } from '../user-data/servicios';
import { BaseUrlProvider } from '../base-url/base-url';

/*
  Generated class for the ServiciosManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiciosManagerProvider {
  servicios:servicios[] = new Array();

  constructor(
    public http: HttpClient,
    public nodeMan: DrupalNodeManagerProvider,
    public docData: DoctoresDataProvider,
    public bu: BaseUrlProvider
  ) {
    console.log('Hello ServiciosManagerProvider Provider');
  }


  cargarServicios(){
    this.getServicios(this.docData.doctoresIDs).subscribe(
      (val)=>{
        let aux_results = Object.keys(val).map(function (key) { return val[key]; });
         aux_results.forEach((result_servicio) => {
           
          let found = false;
          this.servicios.forEach(servicio => {
            if(Number(servicio.Nid) === Number(result_servicio['Nid'])){
              servicio.setData(result_servicio);
              found = true;
            }
          });
          if( !found ){
            let aux_serv = new servicios();
            aux_serv.setData(result_servicio);
            this.servicios.push(aux_serv);
          }
        }
      );
      this.docData.doctores.forEach(doc => {
        doc.setServicios(this.servicios);
      });
     
        console.log(this.servicios);
      });
  }

    /**
   * uids:number[] son los uids de los usuarios autores de los servicios que se desea filtrar
  **/
 getServicios( uids:number[] ){
  //filter by author (doctor): args[0]=70,76,1,all
  let doctorfilter = "?args[0]="+uids.join();
  if(uids.length == 0){doctorfilter = "?args[0]=all";}
  let url = this.bu.endpointUrl+'rest_servicios'+doctorfilter;
  let observer = this.http.get(url);
  observer.subscribe(); //suscribes to send the post regardless of what view does with the observer
  return observer;
}

  removeServicioFromLists(servicio:servicios){
    var index = this.servicios.indexOf(servicio);
    if(index !== -1)this.servicios.splice(index, 1);
    this.docData.doctores.forEach(doc => {
      doc.removeServicioFromLists(servicio);
    }); 
  }


  //Service Methods
  generateNewService( newService ){return this.nodeMan.generateNewNode(newService);}
  updateService( service ){return this.nodeMan.updateNode(service);}
  deleteService( service ){return this.nodeMan.deleteNode(service);}

}

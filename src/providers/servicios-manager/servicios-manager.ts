import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DrupalNodeManagerProvider } from '../drupal-node-manager/drupal-node-manager';
import { DoctoresDataProvider } from '../doctores-data/doctores-data';
import { servicios } from '../user-data/servicios';
import { BaseUrlProvider } from '../base-url/base-url';
import { Observable } from 'rxjs/Observable';
import { CitasDataProvider } from '../citas-data/citas-data';

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


  async loadServicios(){
    console.log(this.docData.doctoresIDs);
    let servicios_data = await this.requestServiciosDoctors(this.docData.doctoresIDs).toPromise();
    for(let servicio_data of servicios_data){this.addServicio(servicio_data);}
    this.docData.doctores.forEach(doc => {
      doc.setServicios(this.servicios);
      //hecho por raul
      let existe = false;
      doc.servicios.forEach(element => {
        if(Number(element.Nid) === Number(CitasDataProvider.SERVICIO_CORTESIA_NID)){
          existe = true;
        }
      });
      if(!existe){
        doc.servicios.push(this.getCortesia());
      }
      //fin hecho por raul
      doc.servicios = this.defaultSort(doc.servicios);
    });
  }

  defaultSort(servicios:servicios[]){
    return servicios.sort((a,b)=>{
      if(a.order < b.order){return 1;}
      if(a.order > b.order){return -1;}
      if(a.order === b.order){
        if (a.title < b.title)
        return -1;
      if (a.title > b.title)
        return 1;
     return 0;
      }
    });
  }
  
  getCortesia(){
    const aux_serv = new servicios();
    aux_serv.Nid = Number(CitasDataProvider.SERVICIO_CORTESIA_NID);
    aux_serv.Uid = 1;
    aux_serv.title = 'Cortesía';
    aux_serv.costo = 0;
    aux_serv.order = 5;
    return aux_serv;
  }

  /**
   * uids:number[] son los uids de los usuarios autores de los servicios que se desea filtrar
  **/
 requestServiciosDoctors( uids:number[] ):Observable<any>{
   console.log('requesting servicios',uids);
  let url = `${this.bu.endpointUrl}rest_servicios?args[0]=${uids.length > 0 ? uids.join() : "all"}`;
  let observer = this.http.get(url).share();
  return observer;
}


  checkForUpdate( servicio_data ):boolean{
    let ret = false;
    let exists = this.servicios.filter((servicios)=>{ return (Number(servicios.Nid) === Number(servicio_data['Nid'])) });
    console.log('servicio to update',servicio_data)
    if(exists.length > 0){
      exists[0].setData(servicio_data);
      ret = true;
    }
    console.log( 'servicios after',this.servicios );
    return ret;
  }


  addServicio(servicio_data:any){
    if(!this.checkForUpdate(servicio_data)){
      const aux_serv = new servicios();
      aux_serv.setData(servicio_data);
      this.servicios.push(aux_serv);
    }
  }

  removeServicio( Nid:number ){
    
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

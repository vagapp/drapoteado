import { UserDataProvider } from "./user-data";
import { Debugger } from "./debugger";

export class servicios{
    Nid:number = null;
    Uid:number = null;
    type:string = null;
    title:string = null;
    costo:number = null;
    body:string  = null;
    field_costo_servicio:number  = null;
    field_doctor_uid:number  = null;

    constructor(){
      
    }
    
    setData( data_input ){
        Debugger.log([`setting data for a service`,data_input]);
        this.Nid = data_input['Nid'];
        this.Uid = data_input['Uid'];
        this.type = data_input['type'];
        this.title = data_input['title'];
        this.costo = data_input['costo'];
        this.body = data_input['body'];
        this.field_costo_servicio = data_input['field_costo_servicio'];
        this.field_doctor_uid = data_input['field_doctor_uid'];
        Debugger.log([`data set on servicio ${this.Nid}`,this]);
      }

      getData(){
          let aux_Data = UserDataProvider.getEmptyServicio();
          aux_Data.Nid = this.Nid;
          aux_Data.title = this.title;
          aux_Data.type = 'servicio';
          aux_Data.field_costo_servicio['und'][0]['value'] = this.costo;
          aux_Data.field_doctor_uid['und'][0]['value'] = this.field_doctor_uid;
          aux_Data.body['und'][0]['value'] = this.body;
          Debugger.log([`getting servicio data`,aux_Data]);
          return aux_Data;
      }
}
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
        Debugger.log(['']);
        this.Nid = data_input['Nid'];
        this.Uid = data_input['Uid'];
        this.type = data_input['type'];
        this.title = data_input['title'];
        this.costo = data_input['costo'];
        this.body = data_input['body'];
        this.field_costo_servicio = data_input['field_costo_servicio'];
        this.field_doctor_uid = data_input['field_doctor_uid'];
      }
}
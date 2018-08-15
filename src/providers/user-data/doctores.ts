import { Citas } from "./citas";
import { UserDataProvider } from "./user-data";
import { servicios } from "./servicios";
import { Debugger } from "./debugger";
import { CitasDataProvider } from "../citas-data/citas-data";

export class Doctores{
    Uid:number = null;
    citas:Citas[]; //listado de todas las citas
    citaActiva:Citas = null //cita activa
    nextCita:Citas = null //cita activa
    servicios:servicios[] = new Array();
    name:string = '';
    field_alias:string = '';
    playerID:string = '';

    public constructor(){
      this.citas = new Array();
    }
    

    setCitaActiva(cita:Citas):boolean{
        let ret = false;
        if(!this.citaActiva){this.citaActiva = cita; ret = true;}
        return ret;
    }


    setServicios( input_servicios:any[] ):boolean{
      Debugger.log([`setting servicios on doctor ${this.Uid}`]);
      let ret = true;
      //let aux_serv_arr = new Array();
      input_servicios.forEach(serv => {
        Debugger.log([`iterating service`,serv]);
       if(this.servicios.indexOf(serv) === -1 && Number(serv.Uid) === Number(this.Uid)){
         this.servicios.push(serv);
         Debugger.log([`servicio nuevo agregado a doc ${this.Uid}`,serv]);
       }
      });
      return ret;
    }

    removeServicioFromLists(servicio:servicios){
      var index = this.servicios.indexOf(servicio);
      if(index !== -1)this.servicios.splice(index, 1);
      Debugger.log([`removing servicio ${servicio.Nid} from list`,this.servicios]);
    }

    removeCitaFromLists(cita:Citas){
      const ArrOfArrs = [
      this.citas,
      ];
      ArrOfArrs.forEach(arr => {
        UserDataProvider.removeElementFromArray(cita,arr);
      });
      if(this.citaActiva && Number(this.citaActiva.Nid) === Number(cita.Nid)){ 
        this.citaActiva = null;
      }
    
    }

   


 //Actualizar citas desde afuera introduciendo los resultados de la busqueda de todas las citas.
 /**
  * Actualizar las citas para este doctor, citas_input es un listado del filtrado de todas las citas, este metodo filtra las citas que son
  * para este doctor asi que no es necesario preocuparse por filtrarlas para este doctor en especifico.
  * 
  * este metodo obtiene:
  *     cita proxima
  *     cita activa
  *     citas pendientes
  *     citas por cobrar
  *     citas para hoy
  *     citas pendientes
  *     todas las citas
  * **/
    setCitas( citas_input ){
        console.log("----------------------------------empezar cita "+citas_input);
    this.citas = new Array();
    let aux_citasparahoy = 0;
    let aux_nextCita = null;
    let smallestUntilMs = null;
    citas_input.forEach(cita => {
        if(Number(cita.data.field_cita_doctor.und[0]) === Number(this.Uid)){
            //console.log("encontro cita propia");
      this.citas.push(cita);
      cita.getUntilMs();
      if(cita.checkState(CitasDataProvider.STATE_PENDIENTE) || cita.checkState(CitasDataProvider.STATE_CONFIRMADA)){
        aux_citasparahoy++;
      if(cita.untilMs < 0){ cita.retrasada = true; } //si se paso la fecha ponerla como retrasada. es decir si el numero es negativo, menor a 0
      else if(smallestUntilMs === null || cita.untilMs < smallestUntilMs){
          //si no hay mas pequeño    O  si la cita es mas pequeño
          aux_nextCita = cita; //esta cita es la mas cercana
          smallestUntilMs = cita.untilMs;
        }
      }
      if(cita.checkState(CitasDataProvider.STATE_ACTIVA)){
        console.log("cita activa.",this.citaActiva);
        if(!this.citaActiva){
          console.log("agregando cita");
          this.citaActiva = cita;
          console.log("cita activa agregada",this.citaActiva);
        }else{
           /* if(! ( Number(this.citaActiva.Nid) === Number(cita.Nid) ) ){
            cita.data.field_estado.und[0].value = UserDataProvider.STATE_PENDIENTE;
            }*/
        }
      }
    }
    this.nextCita = aux_nextCita;
});
console.log("doctor got itself:",this);
}



checkUid( Uid:number ):boolean{
  let ret = false;
  if(Number(this.Uid) === Number(Uid) ){
      ret = true;
  }
  return ret;
}

 
}
import { citasData, UserDataProvider, servicios } from '../../providers/user-data/user-data';

export class Citas{
    Nid:number;
    date: Date;
    startDate:Date = null;
    endDate:Date = null;
    data: citasData;
    untilMs: number;
    untilText: string;
    readableDate: string;
    readableTime: string;
    addedServices: servicios[];
    retrasada:boolean = false;
    duracionMs:number;
    duracionText:string;
    serviceDataSet:boolean = false; //describe si los servicios de la cita han sido seteados cuando esta activa, evitando que se actualicen externamente.
    cobroDataSet:boolean = false; //describe si los cobros de la cita han sido seteados cuando esta en cobro, evitando que se actualicen externamente.
    
    constructor(){
        this.init();
    }

    init(){

        this.addedServices = new Array();
        this.data = UserDataProvider.getEmptyCita();
    }

    get doctor_name(){return this.data.doctor_name;}
    get doctor_alias(){return this.data.doctor_alias;}
    get paciente(){return this.data.field_paciente.und[0].value;}
    get costo(){return Number(this.data.field_costo_sobrescribir.und[0].value);}
    get cobro(){return Number(this.data.field_cobro.und[0].value)}
    get cobroCheque(){return Number(this.data.field_cobro_cheque.und[0].value);}
    get cobroEfectivo(){return Number(this.data.field_cobro_efectivo.und[0].value);}
    get cobroTarjeta(){return Number(this.data.field_cobro_tarjeta.und[0].value);}
    get CantidadRestante(){ return (Number(this.costo) - Number(this.cobro) ); }
    
    
    set cobroCheque(val){ this.data.field_cobro_cheque.und[0].value = Number(val); this.calcularCobroTotal();} 
    set cobroEfectivo(val){ this.data.field_cobro_efectivo.und[0].value = Number(val); this.calcularCobroTotal();}
    set cobroTarjeta(val){ this.data.field_cobro_tarjeta.und[0].value = Number(val); this.calcularCobroTotal();}

    calcularCobroTotal(){ this.data.field_cobro.und[0].value = this.cobroTarjeta + this.cobroCheque + this.cobroEfectivo }

    
    /**
     * Sets Data from a result of the citas view on drupal.
     **/
    setData( data_input ){
        console.log("setData",data_input);
          this.data = UserDataProvider.getEmptyCita();
          this.data.Nid = data_input.Nid;
          this.Nid = data_input.Nid;
          this.data.doctor_name = data_input.doctor_name;
          this.data.doctor_alias = data_input.doctor_alias;
          this.data.field_paciente.und[0].value = data_input.field_paciente;
          this.data.field_email.und[0].email = data_input.field_email;
          this.data.field_telefono.und[0].value = data_input.field_telefono;
          this.data.field_cita_doctor.und[0] = data_input.doctor_uid;
          this.data.field_cita_caja.und[0] = data_input.caja_uid;
          this.data.field_cita_recepcion.und[0] = data_input.recepcion_uid;
          this.data.field_estado.und[0].value = data_input.field_estado;
          this.data.field_servicios_cita.und = data_input.field_servicios_cita;
          this.data.field_cobro.und[0].value = data_input.field_cobro;
          this.data.field_cobro_cheque.und[0].value = data_input.field_cobro_cheque;
          this.data.field_cobro_efectivo.und[0].value = data_input.field_cobro_efectivo;
          this.data.field_cobro_tarjeta.und[0].value = data_input.field_cobro_tarjeta;
          this.data.field_costo_sobrescribir.und[0].value = data_input.field_costo_sobrescribir;
          this.setDate(data_input.field_date.value);
          this.setDurationDates(data_input.field_hora_inicio,data_input.field_hora_final);
          console.log("savedData",this.data);
        }

            /**
             * estos dos metodos se encargan de guardar la hora de inicio y fin de la cita cuando cambia de estados pendiente a activa o activa a cobro.
            */
    setHoraInicio(){
        let now = new Date();
        this.data.field_hora_inicio.und[0].value.date = now.getUTCDate()+'/'+(now.getUTCMonth()+1)+'/'+now.getUTCFullYear();
        this.data.field_hora_inicio.und[0].value.time = now.getUTCHours()+":"+now.getUTCMinutes();
        console.log("hora inicio on data",this.data.field_hora_inicio);
        //and this is saved later
    }

    setHoraFin(){
        let now = new Date();
        this.data.field_hora_final.und[0].value.date = now.getUTCDate()+'/'+(now.getUTCMonth()+1)+'/'+now.getUTCFullYear();
        this.data.field_hora_final.und[0].value.time = now.getUTCHours()+":"+now.getUTCMinutes();
        console.log("hora final on data",this.data.field_hora_final);
        //and this is saved later
    }

  
    
    /**
     *  date needs some procesing:
     *   date comes in a non usable format for input.
     *   a date object is requiered to process it.
     **/
    
    setDate( date_input ){
            //Got date on utc so adding a Z to set it on utc and use getUTCDate to bypass any timezone
            this.date = new Date(date_input+'Z');
            console.log("cita UTC date is: "+this.data);
            //set data date fields on the format requiered by inputs:
            this.data.field_date.und[0].value.date = this.date.getUTCDate()+'/'+(this.date.getUTCMonth()+1)+'/'+this.date.getUTCFullYear();
            this.data.field_date.und[0].value.time = this.date.getUTCHours()+":"+this.date.getUTCMinutes();
            //set time until this date:
            this.getUntilMs();
            this.getUntilTimeString();
            console.log("Ms until this date: ", this.untilMs);
    }


    setDurationDates( inicio_input, final_input ){
        console.log("inicio_input",inicio_input);
        console.log("final_input",final_input);
        //set dates to null to start
        this.startDate = null;
        this.endDate = null;
        this.data.field_hora_inicio.und[0].value.date = null
        this.data.field_hora_inicio.und[0].value.time = null
        this.data.field_hora_final.und[0].value.date = null
        this.data.field_hora_final.und[0].value.time = null
        //Got date on utc so adding a Z to set it on utc and use getUTCDate to bypass any timezone
        if(inicio_input.value){
            this.startDate = new Date(inicio_input.value+'Z');
            if(this.isValidDate(this.startDate)){
            this.data.field_hora_inicio.und[0].value.date = this.startDate.getUTCDate()+'/'+(this.startDate.getUTCMonth()+1)+'/'+this.startDate.getUTCFullYear();
            this.data.field_hora_inicio.und[0].value.time = this.startDate.getUTCHours()+":"+this.startDate.getUTCMinutes();
            }
        }
       if(final_input.value){
            this.endDate = new Date(final_input.value+'Z');
            if(this.isValidDate(this.endDate)){
            this.data.field_hora_final.und[0].value.date = this.endDate.getUTCDate()+'/'+(this.endDate.getUTCMonth()+1)+'/'+this.endDate.getUTCFullYear();
            this.data.field_hora_final.und[0].value.time = this.endDate.getUTCHours()+":"+this.endDate.getUTCMinutes();
            }
        }
        this.setDuracionMs();
        console.log("obtained duracionMs",this.duracionMs);
    }

    isValidDate(d){
        return d instanceof Date && !isNaN(d.getUTCDate());
    }

    setDuracionMs(){
        let now = new Date('2018/5/14 01:35:00Z');
        if(this.startDate && this.endDate){
            this.duracionMs = (this.endDate.getTime() - this.startDate.getTime());
        }else if( this.startDate){
            this.duracionMs = (now.getTime() - this.startDate.getTime());
        }
        this.duracionText = "00:00";
        let dms_seconds = this.duracionMs / 1000;
        let dms_minutes = dms_seconds / 60;
        dms_seconds =  (dms_seconds - ( dms_minutes * 60) );
        let dms_minutes_str = ""+dms_minutes;
        let dms_seconds_str = ""+dms_seconds;
        while(dms_minutes_str.length < 2) dms_minutes_str = "0"+dms_minutes_str;
        while(dms_seconds_str.length < 2) dms_seconds_str = "0"+dms_seconds_str;
        this.duracionText = dms_minutes_str+":"+dms_seconds_str;
    }


    
    /**
     * this methods gives the Milliseconds until this date, can be negative.
     * will be used to get nextDate timer
     **/

    getUntilMs():number{
        let now = new Date('2018/5/14 01:35:00Z');
        this.untilMs = ( this.date.getTime() - now.getTime() );
        return this.untilMs;
    }

    getUntilTimeString():string{
        let ret = null;
        let minutes = this.untilMs/(60*1000);
        let hours = Math.floor(minutes/(60));
        minutes = ( minutes - (hours * 60));
        let stringHours = ""+hours;
        let stringMinutes = ""+minutes;
        while(stringHours.length < 2){stringHours = "0"+stringHours;}
        while(stringMinutes.length < 2){stringMinutes = "0"+stringMinutes;}
        ret = stringHours+":"+stringMinutes;
        this.untilText = ret;
        return ret;
    }

    CloserThanMs( compareMS:Number ):boolean{
        let ret = false;
        if( Number(this.untilMs) < compareMS )ret = true;
        return ret;
    }



    checkState( state ){
        return Number(this.data.field_estado.und[0].value) === Number(state);
    }


    setAddedServices( servicios:servicios[] ){
        console.log("populating addedServices with",servicios);
        this.addedServices = new Array();
        for(let i = 0; i < this.data.field_servicios_cita.und.length; i++){
            console.log("searching for ",this.data.field_servicios_cita.und[i]);
            servicios.forEach(element => {
                if( Number(element.Nid) === Number( this.data.field_servicios_cita.und[i]) ){
                    this.addedServices.push(element);
                    console.log("found");
                }
            });
        }
        console.log("addedServices",this.addedServices);
        console.log("vs data"+this.data.field_servicios_cita);
    }

    setServicesData(){
        console.log("populating data services_cita");
        this.data.field_servicios_cita.und = new Array();
        this.addedServices.forEach(element => {
            console.log("added service",element);
            this.data.field_servicios_cita.und.push(element.Nid);
        });
        console.log("populated services_cita data",this.data.field_servicios_cita);
    }

   addServicio( servicio:servicios ):boolean{
       let ret = false;
        if(!this.checkServicio(servicio)){
            this.addedServices.push(servicio);
            ret = true;
        }
        return ret;
   }

   /**
    * returns a list of services that havent been added to this cita from a list of available services
    **/

   getServiciosAvailable( servicios: servicios[]):servicios[]{
       let ret = new Array();
       console.log("trynna get servicios available from",servicios);
        servicios.forEach(element => {
            if(!this.checkServicio(element)){
                ret.push(element);
            }
       });
       return ret;
   }

    /**
     *  Tells you if a given service has been added to this cita
     **/
   checkServicio( servicio:servicios ):boolean{
       let ret = false;
        console.log("checking if cita contains servicio ",servicio);
        this.addedServices.forEach(element => {
            if(Number(element.Nid) === Number(servicio.Nid)  ){
                ret = true;
                console.log("added service");
            }
        });
        return ret;
   }
   

    getStateString(){
        let state = parseInt(""+this.data.field_estado.und[0].value);
        let ret = "";
        switch(state){
          case UserDataProvider.STATE_PENDIENTE: ret="Pendiente"; break;
          case UserDataProvider.STATE_CONFIRMADA: ret="Confirmada"; break;
          case UserDataProvider.STATE_ACTIVA: ret="Activa"; break;
          case UserDataProvider.STATE_COBRO: ret="en Cobro"; break;
          case UserDataProvider.STATE_FINALIZADA: ret="Finalizada"; break;
          case UserDataProvider.STATE_CANCELADA: ret="Cancelada"; break;
        }
        return ret;
      }

      save(){
          console.log("saving this cita");
      }


}
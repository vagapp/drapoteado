import { citasData, UserDataProvider } from '../../providers/user-data/user-data';
import { Debugger } from './debugger';
import { servicios } from './servicios';
import { DateProvider } from '../date/date';
import { CitasDataProvider } from '../citas-data/citas-data';
import { IfObservable } from 'rxjs/observable/IfObservable';


export class Citas{
    Nid:number;
    dateMs: number;
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
    facturado:number = 0;
    serviceDataSet:boolean = false; //describe si los servicios de la cita han sido seteados cuando esta activa, evitando que se actualicen externamente.
    cobroDataSet:boolean = false; //describe si los cobros de la cita han sido seteados cuando esta en cobro, evitando que se actualicen externamente.
    reporteServicios:any[] = new Array();
    pagos:any[] = new Array();
    doctor_playerid:string = null;
    caja_playerid:string = null;
    recepcion_playerid:string = null;
    opendetail=false;

    ediciones:any[] = new Array();
    todayEdiciones:any[] = new Array();

    //variables para reportes con pagos incluidos
    pagosfrom:number = 0;
    pagosto:number = 0;    
    pagosEfectivo:number = 0;
    pagosCheque:number = 0;
    pagosTarjeta:number = 0;
    pagosFacturado: number = 0;
    pagosTotal:number = 0;
    originactivereport:boolean = false;

    //variables para reportes con ediciones incluidas.
    festado:number = 0;
    addedServicesFechas: servicios[];
    edicionesFechas: any[];
    
    constructor(){
        this.init();
    }

    init(){
        this.addedServices = new Array();
        this.data = UserDataProvider.getEmptyCita();
    }
    

    get doctor_name(){return this.data.doctor_name;}
    get doctor_alias(){return this.data.doctor_alias;}
    get caja_name(){ return this.data.field_caja_nombre.und[0].value;}
    get paciente(){ return this.data.field_paciente.und[0].value;}
    get costo(){return Number(this.data.field_costo_sobrescribir.und[0].value);}
    get cobro(){return Number(this.data.field_cobro.und[0].value)}
    //get cobroCheque(){return Number(this.data.field_cobro_cheque.und[0].value);}
    //get cobroEfectivo(){return Number(this.data.field_cobro_efectivo.und[0].value);}
    //get cobroTarjeta(){return Number(this.data.field_cobro_tarjeta.und[0].value);}
    get CantidadRestante(){ return (Number(this.costo) - Number(this.cobro) ); }
    get stateNumber() { return Number(this.data.field_estado.und[0].value); }
    get stateLabel(){ return CitasDataProvider.getStateLabel(Number(this.data.field_estado.und[0].value)); }
    get stateColor(){ return CitasDataProvider.getStateColor(Number(this.data.field_estado.und[0].value));}
    set cobroCheque(val){ this.data.field_cobro_cheque.und[0].value = Number(val); this.calcularCobroTotal();} 
    set cobroEfectivo(val){ this.data.field_cobro_efectivo.und[0].value = Number(val); this.calcularCobroTotal();}
    set cobroTarjeta(val){ this.data.field_cobro_tarjeta.und[0].value = Number(val); this.calcularCobroTotal();}
    
    calcularCobroTotal(){ this.data.field_cobro.und[0].value = this.cobroTarjeta + this.cobroCheque + this.cobroEfectivo }

    get cantidadPagada():number{
        let cantidad_pagada = 0;
        //console.log(this.pagos);
        this.pagos.forEach(pago => {
            //console.log(pago);
            //console.log(pago['efe']);
            cantidad_pagada += (Number(pago['efe']) + Number(pago['tar']) +Number(pago['che'])); 
        });
        //console.log('calculando cantidad pagada',cantidad_pagada);
        return cantidad_pagada;
    }

    get restantePagos():number{
        //console.log('restantePagos',this.costo,this.cantidadPagada);
        return this.costo - this.cantidadPagada;
    }

    get PagosonFecha(){
        if(this.pagosfrom === 0){
            return this.pagos;
        } else
        return this.pagos.filter((pago)=>{
            return (Number(pago.fec) >= Number( this.pagosfrom) && Number(pago.fec) < Number(this.pagosto));
        });
    }

 /**
  * Este metodo compara los addedServices de esta cita con una lista de servicios introducida serviciosArray, retorna los servicios que se agregaron o se quitaron.
  * **/
    compareServicios(serviciosArray:servicios[]){
        console.log('compareServicios',JSON.stringify(serviciosArray));
        console.log('addedServices',JSON.stringify(this.addedServices));
        this.todayEdiciones = new Array();
        
        let newRemovedServices = serviciosArray.filter(
            (aux_serv_original)=>{
                let found = this.addedServices.find((aux_serv_actual)=>{
                    return ( Number(aux_serv_actual.Nid) === Number(aux_serv_original.Nid) );
                });
                return !found;
            }
        );

       let newAddedServices = this.addedServices.filter(
           (aux_serv_original)=>{
               console.log('aux_serv_original',aux_serv_original);
               let found = serviciosArray.find((aux_serv_actual)=>{
                return ( Number(aux_serv_actual.Nid) === Number(aux_serv_original.Nid) );
            });
            console.log('found',found);
                return !found;
           }
       );
        console.log('added Services',newAddedServices);
        console.log('removed Services',newRemovedServices);

        newAddedServices.forEach((servicio)=>{
            let aux_edicion = {
                act: true, 
                cos: Number(servicio.costo),
                title: servicio.title,
                Nid:servicio.Nid, 
                fec:''+new Date().getTime()
              };
              this.todayEdiciones.push(aux_edicion);
        });

        newRemovedServices.forEach((servicio)=>{
            let aux_edicion = {
                act: false, 
                cos: -servicio.costo,
                title: servicio.title,
                Nid:servicio.Nid, 
                fec:''+new Date().getTime()
              };
              this.todayEdiciones.push(aux_edicion);
        });
        console.log('ediciones encontradas',this.todayEdiciones);
    }
    
    //obtiene los pagos que se hicieron a esta cita de fecha from a fecha to.
    setPagosFecha(from:number, to:number){
        console.log('setPagosFecha');
        this.pagosfrom = from;
        this.pagosto = to;

        this.pagosEfectivo = 0;
        this.pagosCheque = 0;
        this.pagosTarjeta = 0;
        this.pagosFacturado = 0;

        console.log(this.PagosonFecha);

        this.PagosonFecha.forEach(pago => {
            console.log(pago);
            this.pagosEfectivo += Number(pago.efe);
            this.pagosCheque += Number(pago.che);
            this.pagosTarjeta += Number(pago.tar);
            this.pagosFacturado += Number(pago.fac);
        });

        console.log('setPagosFecha cita is',this);
        //originactivereport
        //field_datemsb  
        this.testOriginactivereport(this.pagosfrom, this.pagosto);

        console.log( this.pagosEfectivo);
        this.pagosTotal =  this.pagosEfectivo + this.pagosCheque + this.pagosTarjeta;
    }

    setEdicionesFechas(from:number, to:number){
        console.log('setEdicionesFechas',this.ediciones);
        this.festado = 0;
        this.addedServicesFechas = new Array();
        this.edicionesFechas = new Array();
        console.log('ediciones',this.ediciones);
        //filtrar ediciones hasta este dia y ordenarlas por fecha
        this.edicionesFechas = this.ediciones.filter((edicion)=>{
            console.log(edicion);
            let ret = false;
            if(Number(edicion.fec) <= Number(to)){
                ret = true;
            }
            return ret;
        }).sort((a,b)=>{
            let ret = 0;
            if(a.fec > b.fec) ret = 1;
            if(a.fec < b.fec) ret = -1;
            return ret;
        });

        //filtrar ediciones que sean estado y ordenarlos por fecha
        let states = this.edicionesFechas.filter((edicion)=>{
            let ret = false;
            if(edicion.state) ret = true;
            return ret;
        }).sort((a,b)=>{
            let ret = 0;
            if(a.fec > b.fec) ret = 1;
            if(a.fec < b.fec) ret = -1;
            return ret;
        });
        console.log('states sorted',states);
        //obtener el ultimo estado (el mas actual)
        let latestState = {state:0};
        if(states.length > 0)
        latestState = states[states.length-1];
        console.log('latestState',latestState);
        this.festado = latestState.state;
    }

    setEdicionesField(){
        console.log('setEdicionesField');
        console.log('todayEdiciones',this.todayEdiciones);
        console.log('ediciones',this.ediciones);
        let aux_edicion = this.ediciones;
        if(this.todayEdiciones){
            aux_edicion = this.ediciones.concat(this.todayEdiciones);
        }
        this.data.field_ediciones_json =  {und:[{value:''}]};
        this.data.field_ediciones_json.und[0].value= JSON.stringify(aux_edicion);
        console.log('ediciones field final ', this.data.field_ediciones_json);
    }

    setStateChangeEdition(state){
        let aux_edicion = {
            act: true, 
            cos: 0,
            title: 0,
            Nid:0,
            state: state, 
            fec:''+new Date().getTime()
          };
          this.todayEdiciones.push(aux_edicion);
          this.setEdicionesField();
    }
 
    testOriginactivereport(from:Number,to:Number){
        console.log('testOriginactivereport');
        if( Number(this.dateMs) >= from && Number(this.dateMs) < to){
            console.log('es del reporte');
            this.originactivereport = true;
            console.log('isorigin');
        }else{
            console.log('no es del reporte');
            this.originactivereport = false;
            console.log('notorigin');
        }
    }
    
    /**
     * Sets Data from a result of the citas view on drupal.
     **/
    setData( data_input ){
        console.log("setData on cita",data_input);
        console.log('field_fechas_reporte',data_input.field_fechas_reporte);
        console.log('field_ediciones_json',data_input['field_ediciones_json']);
        console.log('field_ediciones_json', data_input['field_ediciones_json'][0]['value'] );
          this.data = UserDataProvider.getEmptyCita();
          this.data.Nid = data_input.Nid;
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
          this.data.field_datemsb.und[0].value = Number(data_input.field_datemsb.value);
          this.dateMs =  this.data.field_datemsb.und[0].value;
          this.data.field_retrasda.und[0].value = data_input.field_retrasda;
          this.data.field_hora_cobromsb.und[0].value = 0;
          this.data.field_fecha_reporte.und[0].value = 0;
          this.data.field_pagos_json = null;
          this.data.field_ediciones_json = null;
          this.data.field_fechas_reporte = {und:[]};
          this.data.field_caja_nombre.und[0].value = data_input.field_caja_nombre ? data_input.field_caja_nombre : "sin nombre";
          if(data_input.field_fecha_reporte)  this.data.field_fecha_reporte.und[0].value = data_input.field_fecha_reporte;
          if(data_input.field_hora_cobromsb)  this.data.field_hora_cobromsb.und[0].value = data_input.field_hora_cobromsb;
          if(data_input.field_hora_iniciomsb) this.data.field_hora_iniciomsb.und[0].value = Number(data_input.field_hora_iniciomsb.value);
          if(data_input.field_hora_finalmsb) this.data.field_hora_finalmsb.und[0].value = Number(data_input.field_hora_finalmsb.value);
          if(data_input['field_servicios_json'] && data_input['field_servicios_json']['value']) this.data.aux_servicios_json = data_input['field_servicios_json']['value'];//this.setServiciosReport(data_input['field_servicios_json']['value']);
          if(data_input['field_pagos_json'] && data_input['field_pagos_json']['value']) this.data.field_pagos_json = data_input['field_pagos_json']['value'];//this.setServiciosReport(data_input['field_servicios_json']['value']);
          if(data_input['field_ediciones_json'] && data_input['field_ediciones_json'][0]['value'])this.data.field_ediciones_json = data_input['field_ediciones_json'][0]['value'];//this.setServiciosReport(data_input['field_servicios_json']['value']);
          if(data_input.field_fechas_reporte) this.data.field_fechas_reporte.und = data_input.field_fechas_reporte;
          if(data_input.doctor_playerid) this.doctor_playerid = data_input.doctor_playerid;
          if(data_input.recepcion_playerid)  this.recepcion_playerid = data_input.recepcion_playerid;
          if(data_input.caja_playerid)  this.caja_playerid = data_input.caja_playerid;
          if(data_input.field_facturar)  this.data.field_facturar.und[0] = data_input.field_facturar;
          if(data_input.field_facturar_cantidad){  
              this.data.field_facturar_cantidad.und[0] = data_input.field_facturar_cantidad;
                this.facturado = Number(data_input.field_facturar_cantidad.value);
            }
          //this.setDate(data_input.field_date.value);
          this.processData();
          console.log("savedData",this.data);
          console.log('cita ended laik',this);
        }

    

    processData(){
        console.log('cita processing data')
        this.Nid = this.data.Nid
        this.dateMs =  this.data.field_datemsb.und[0].value;
        console.log('setting processData dateMs',this.dateMs);
        console.log('processData ediciones json ',this.data.field_ediciones_json);
        if(this.data.aux_servicios_json) this.setServiciosReport(this.data.aux_servicios_json);
        if(this.data.field_pagos_json) this.setPagosJson(this.data.field_pagos_json);
        if(this.data.field_ediciones_json) this.setEdicionesJson(this.data.field_ediciones_json);
        this.facturado = Number( this.data.field_facturar_cantidad.und[0].value);
        this.setDateUT(this.data.field_datemsb.und[0].value);
        console.log('processdata hora cobro check',this.data.field_hora_cobromsb);
        this.setDurationDates(this.data.field_hora_iniciomsb.und[0].value,this.data.field_hora_finalmsb.und[0].value);
    }

            /**
             * estos dos metodos se encargan de guardar la hora de inicio y fin def la cita cuando cambia de estados pendiente a activa o activa a cobro.
            */
    setHoraInicio(){
        let now = new Date();
        this.data.field_hora_iniciomsb.und[0].value = now.getTime();
        this.data.field_hora_inicio.und[0].value.date = now.getUTCDate()+'/'+(now.getUTCMonth()+1)+'/'+now.getUTCFullYear();
        this.data.field_hora_inicio.und[0].value.time = now.getUTCHours()+":"+now.getUTCMinutes();
        Debugger.log(['data af hinicio',this.data]);
        //console.log("hora inicio on data",this.data.field_hora_inicio);
        //and this is saved later
    }

    setHoraFin(){
        let now = new Date();
        this.data.field_hora_finalmsb.und[0].value = now.getTime();
        this.data.field_hora_final.und[0].value.date = now.getUTCDate()+'/'+(now.getUTCMonth()+1)+'/'+now.getUTCFullYear();
        this.data.field_hora_final.und[0].value.time = now.getUTCHours()+":"+now.getUTCMinutes();
        console.log("hora final on data",this.data.field_hora_final);
        //and this is saved later
    }


    setServiciosReport( input_data ){
        console.log('setServiciosReport',input_data);
        this.reporteServicios =  JSON.parse(input_data);
        this.reporteServicios = this.reporteServicios.sort((a,b)=>{ 
            if(a.title > b.title) return 1;
            if(a.title < b.title) return -1;
            return 0;
        });
        console.log('reporteServicios',this.reporteServicios);
        Debugger.log(['added reportservicios', this.reporteServicios]);
    }

    setPagosJson( input_data ){
        console.log('input_data is',input_data);
        if(input_data['und']){
            console.log('isarray');
        this.pagos =  JSON.parse(input_data['und'][0]['value']);
        }else{
            console.log('is not array');
            this.pagos =  JSON.parse(input_data);
        }
    }

    setEdicionesJson( input_data ){
        console.log('setEdicionesJson input_data is',input_data);
        if(input_data['und']){
            console.log('isarray');
        this.ediciones =  JSON.parse(input_data['und'][0]['value']);
        }else{
            console.log('is not array');
            this.ediciones =  JSON.parse(input_data);
        }
        console.log(this.ediciones);
    }

  
  
    
    /**
     *  date needs some procesing:
     *   date comes in a non usable format for input.
     *   a date object is requiered to process it.
     **/
    
    setDate( date_input , onutc:boolean = false ){
            //Got date on utc so adding a Z to set it on utc and use getUTCDate to bypass any timezone
            Debugger.log(["cita setdate input: "+date_input]);
            if(onutc){
                this.date = new Date(date_input);
            }else{
                this.date = new Date(date_input+'Z');
            }
            Debugger.log(["cita UTC date is: "+this.date]);
            //set data date fields on the format requiered by inputs:
            this.data.field_date.und[0].value.date = this.date.getUTCDate()+'/'+(this.date.getUTCMonth()+1)+'/'+this.date.getUTCFullYear();
            this.data.field_date.und[0].value.time = this.date.getUTCHours()+":"+this.date.getUTCMinutes();
            Debugger.log(['set date is',this.data.field_date]);
            //set time until this date:
            this.getUntilMs();
            this.getUntilTimeString();
            Debugger.log(['set date is after',this.data.field_date]);
            Debugger.log(["Ms until this date: ", this.untilMs]);
            if(this.untilMs < 0){
                this.retrasada = true;
                Debugger.log(['esta cita esta retrasada']);
            }
    }

    setDateUT( dateUTms ){
        Debugger.log([dateUTms]);
        //Got date on utc so adding a Z to set it on utc and use getUTCDate to bypass any timezone
        this.date = new Date(dateUTms);
        Debugger.log(["cita UTms date is: "+this.date]);
        //set data date fields on the format requiered by inputs:
        this.data.field_date.und[0].value.date = `${DateProvider.formatDateBinaryNumber(this.date.getUTCDate())}/${DateProvider.formatDateBinaryNumber((this.date.getUTCMonth()+1))}/${DateProvider.formatDateBinaryNumber(this.date.getUTCFullYear())}`
        this.data.field_date.und[0].value.time = `${DateProvider.formatDateBinaryNumber(this.date.getUTCHours())}:${DateProvider.formatDateBinaryNumber(this.date.getUTCMinutes())}`;
        Debugger.log(['set date is',this.data.field_date]);
        //set time until this date:
        this.getUntilMs();
        this.getUntilTimeString();
        Debugger.log(['set date is after',this.data.field_date]);
        Debugger.log(["Ms until this date: ", this.untilMs]);
        if(this.untilMs < 0){
            this.retrasada=true;
            Debugger.log(['esta cita esta retrasada']);
        }
        this.readableDate = this.getDisplayableDates().date;
        this.readableTime = this.getDisplayableDates().time;
        console.log('this.readableDate',this.readableDate);
        console.log('this.readableTime',this.readableTime);
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
        //if(inicio_input.value){
        if(inicio_input){
            this.startDate = new Date(inicio_input);
            if(this.isValidDate(this.startDate)){
            this.data.field_hora_inicio.und[0].value.date = this.startDate.getUTCDate()+'/'+(this.startDate.getUTCMonth()+1)+'/'+this.startDate.getUTCFullYear();
            this.data.field_hora_inicio.und[0].value.time = this.startDate.getUTCHours()+":"+this.startDate.getUTCMinutes();
            }
        }
       //if(final_input.value){
        if(final_input){
            this.endDate = new Date(final_input);
            if(this.isValidDate(this.endDate)){
            this.data.field_hora_final.und[0].value.date = this.endDate.getUTCDate()+'/'+(this.endDate.getUTCMonth()+1)+'/'+this.endDate.getUTCFullYear();
            this.data.field_hora_final.und[0].value.time = this.endDate.getUTCHours()+":"+this.endDate.getUTCMinutes();
            }
        }
        this.setDuracionMs();
        //console.log("obtained duracionMs",this.duracionMs);
    }

    isValidDate(d){
        return d instanceof Date && !isNaN(d.getUTCDate());
    }

    setDuracionMs(){
        if(this.data.field_hora_iniciomsb['und'][0]['value'] && this.data.field_hora_finalmsb['und'][0]['value']){
            this.duracionMs = ( new Date(this.data.field_hora_finalmsb['und'][0]['value']).getTime() - new Date(this.data.field_hora_iniciomsb['und'][0]['value']).getTime());
        }else if( this.data.field_hora_iniciomsb['und'][0]['value'] ){
            this.duracionMs = (new Date().getTime() - new Date(this.data.field_hora_iniciomsb['und'][0]['value']).getTime());
        }else{
            this.duracionMs = 0;
        }
        //Debugger.log(['this.duracionMs',this.duracionMs]);
        this.duracionText = DateProvider.getDateDifText(this.duracionMs);
        //Debugger.log(['this.duracionText', this.duracionText]);
    }

    


    
    /**
     * this methods gives the Milliseconds until this date, can be negative.
     * will be used to get nextDate timer
     **/

    getUntilMs():number{
        //let now = new Date('2018/5/14 01:35:00Z');
        let now = new Date();
        //Debugger.log(['comparing dates to get MS']);
        //Debugger.log([this.date]);
        //Debugger.log([now]);
        this.untilMs = ( this.date.getTime() - now.getTime() );
        //Debugger.log(['calculated untilMs',this.untilMs]);
        return this.untilMs;
    }

    getUntilTimeString():string{
        let ret = "00";
        ret = DateProvider.getDateDifText(this.untilMs);
        this.untilText = ret;
        return ret;
        /*let ret = null;
        let negative = false;
        let aux_untilMs = this.untilMs;
        //Debugger.log(['entering get until time string with ',aux_untilMs]);
        if(this.untilMs < 0){
            //Debugger.log(['untilMs es negativo']);
            negative = true;
            aux_untilMs = aux_untilMs*-1;
        }
        //Debugger.log(['untilMs af neg check',aux_untilMs]);
        let minutes = aux_untilMs/(60*1000);
        let hours = Math.floor(minutes/(60));
        minutes = Math.floor(( minutes - (hours * 60)));
        let stringHours = ""+hours;
        let stringMinutes = ""+minutes;
        while(stringHours.length < 2){stringHours = "0"+stringHours;}
        while(stringMinutes.length < 2){stringMinutes = "0"+stringMinutes;}
        ret = stringHours+":"+stringMinutes;
        if(negative){
            ret = `hace ${ret}`;
        }
        this.untilText = ret;
        return ret;*/
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
       console.log('adding servicio',servicio);
       let ret = false;
       if(!servicio) return false;
        if(!this.checkServicio(servicio)){
            this.addedServices.push(servicio);
            console.log('addServicio added services ',this.addedServices);
            ret = true;
        }
        return ret;
   }



   removeServicio( servicio:servicios ):boolean {
     return this.removeServicioNid(Number(servicio.Nid));
   }

   removeServicioNid( Nid ):boolean{
    let ret = false;
    this.addedServices = this.addedServices.filter( (servicios)=>{ return Number(servicios.Nid) !== Number(Nid)});
    return ret = true;
   }

   /**
    * returns a list of services that havent been added to this cita from a list of available services
    **/

   getServiciosAvailable( servicios: servicios[]):servicios[]{
       let ret = new Array();
       console.log("trynna get servicios available from",servicios);
       for(let servicio of servicios){
           console.log('checking servicio',servicio);
        if(servicio && !this.checkServicio(servicio)){
            ret.push(servicio);
        }
       }
        /*servicios.forEach(element => {
            if(!this.checkServicio(element)){
                ret.push(element);
            }
       });*/
       return ret;
   }

    /**
     *  Tells you if a given service has been added to this cita
     **/
   checkServicio( servicio:servicios ):boolean{
       let ret = false;
        console.log("checking if cita contains servicio ",servicio);
        /*this.addedServices.forEach(element => {
            if(Number(element.Nid) === Number(servicio.Nid)  ){
                ret = true;
                console.log("added service");
            }
        });*/
        if(this.addedServices.find((servicios)=>{ return Number(servicios.Nid) === Number(servicio.Nid)})) ret = true;
        console.log('found ? ',ret);
        return ret;
   }
   
   /* Esta mamada que xD**/
    getStateString(){
        return this.stateLabel;
        /*
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
        return ret;*/
      }

      save(){
          console.log("saving this cita");
      }


      getDatetimeFormat():string{
        let ret = "";
        let datestring = `${DateProvider.formatDateBinaryNumber(this.date.getDate())}/${(DateProvider.formatDateBinaryNumber(this.date.getMonth()+1))}/${this.date.getFullYear()}`;
        let timestring =  `${DateProvider.formatDateBinaryNumber(this.date.getHours())}:${DateProvider.formatDateBinaryNumber(this.date.getMinutes())}`;
        ret = `${datestring}T${timestring}`;
        return ret;
      }


      getDisplayableDates():{"date":string,"time":string}{
        let ret = {"date":'',"time":''};
        let datestring = `${DateProvider.formatDateBinaryNumber(this.date.getDate())}/${(DateProvider.formatDateBinaryNumber(this.date.getMonth()+1))}/${this.date.getFullYear()}`;
        let timestring =  `${DateProvider.formatDateBinaryNumber(this.date.getHours())}:${DateProvider.formatDateBinaryNumber(this.date.getMinutes())}`;
        ret = { "date":datestring ,"time":timestring};
        return ret;
      }

      isDateOnly():boolean{
        let ret = false;
        if((Number(this.data.field_estado.und[0]['value']) === -1)){
            ret = true;
        }
        return ret;
      }

      static dateTOTiers(){
          
      }

      static getLocalDateIso( date:Date ){
        var tzo = date.getTimezoneOffset(),
        dif = tzo >= 0 ? '+' : '-',
        pad = function(num) {
            var norm = Math.floor(Math.abs(num));
            return (norm < 10 ? '0' : '') + norm;
        };
    return date.getFullYear() +
        '-' + pad(date.getMonth() + 1) +
        '-' + pad(date.getDate()) +
        'T' + pad(date.getHours()) +
        ':' + pad(date.getMinutes()) +
        ':' + pad(date.getSeconds()) +
        dif + pad(tzo / 60) +
        ':' + pad(tzo % 60);
      }
    

      static formatDateBinaryNumber( num ){
        return (num < 10 ? '0' : '') + num;
      }
      
}

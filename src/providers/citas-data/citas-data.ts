
import { Injectable } from '@angular/core';
import { Citas } from '../user-data/citas';
import { Subject } from 'rxjs/Subject';
import { citasData } from '../user-data/user-data';
import { Doctores } from '../user-data/doctores';
import { DoctoresDataProvider } from '../doctores-data/doctores-data';
import { DateProvider } from '../date/date';



@Injectable()
export class CitasDataProvider{
  citas:Citas[] = new Array();
  citasShowPool:Citas[] = new Array(); //some citas to show based on filters.
  startDateFilter:number = 0;
  pacienteFilter:string = null;
  endDateFilter:number = new Date().getTime()+(1000*60*60*24*365*5);
  citasSubject:Subject<any> = new Subject();

  customDateFilters:boolean = false;
  customFilters:boolean = false;


  ayer: any = 0;
  amon: any = 0;

  userStateFilter:Array<number> = [
    CitasDataProvider.STATE_PENDIENTE,
    CitasDataProvider.STATE_CONFIRMADA,
    CitasDataProvider.STATE_ACTIVA,
    CitasDataProvider.STATE_COBRO,
    CitasDataProvider.STATE_FINALIZADA,
    CitasDataProvider.STATE_CANCELADA,
    CitasDataProvider.STATE_ADEUDO
  ];

  daysCitas:DaysCitas[] = new Array();
  yearCitas:YearCitas[] = new Array();

  //estados de cita:
  public static STATE_PENDIENTE = 0;
  public static STATE_CONFIRMADA = 1;
  public static STATE_ACTIVA = 2;
  public static STATE_COBRO = 3;
  public static STATE_FINALIZADA = 4;
  public static STATE_CANCELADA = 5;
  public static STATE_ELIMINADA = 6;
  public static STATE_ADEUDO = 7;

  
  public static STATE_ORDER_ACTIVA = 1;
  public static STATE_ORDER_CONFIRMADA = 2;
  public static STATE_ORDER_COBRO = 3;
  public static STATE_ORDER_ADEUDO = 4;
  public static STATE_ORDER_PENDIENTE = 5;
  public static STATE_ORDER_FINALIZADA = 6;
  public static STATE_ORDER_CANCELADA = 7;
  public static STATE_ORDER_ELIMINADA = 8;
  

  public static STATE_PENDIENTE_COLOR = '#6ddeba';
  public static STATE_CONFIRMADA_COLOR = '#50A3C7';
  public static STATE_ACTIVA_COLOR = '#94BA3A';
  public static STATE_COBRO_COLOR = '#C1272D';
  public static STATE_FINALIZADA_COLOR = '#909090';
  public static STATE_CANCELADA_COLOR = '#800005';
  public static STATE_ELIMINADA_COLOR = '#800005';
  public static STATE_ADEUDO_COLOR = '#C1272D';

  public static SERVICIO_CORTESIA_NID = "1647";


  get STATE_PENDIENTE(){return CitasDataProvider.STATE_PENDIENTE;}
  get STATE_CONFIRMADA(){return CitasDataProvider.STATE_CONFIRMADA;}
  get STATE_ACTIVA(){return CitasDataProvider.STATE_ACTIVA;}
  get STATE_COBRO(){return CitasDataProvider.STATE_COBRO;}
  get STATE_FINALIZADA(){return CitasDataProvider.STATE_FINALIZADA;}
  get STATE_CANCELADA(){return CitasDataProvider.STATE_CANCELADA;}
  get STATE_ELIMINADA(){return CitasDataProvider.STATE_CANCELADA;}
  get STATE_ADEUDO(){return CitasDataProvider.STATE_ADEUDO;}

  get STATE_ORDER_PENDIENTE(){return CitasDataProvider.STATE_ORDER_PENDIENTE;}
  get STATE_ORDER_CONFIRMADA(){return CitasDataProvider.STATE_ORDER_CONFIRMADA;}
  get STATE_ORDER_ACTIVA(){return CitasDataProvider.STATE_ORDER_ACTIVA;}
  get STATE_ORDER_COBRO(){return CitasDataProvider.STATE_ORDER_COBRO;}
  get STATE_ORDER_FINALIZADA(){return CitasDataProvider.STATE_ORDER_FINALIZADA;}
  get STATE_ORDER_CANCELADA(){return CitasDataProvider.STATE_ORDER_CANCELADA;}
  get STATE_ORDER_ELIMINADA(){return CitasDataProvider.STATE_ORDER_CANCELADA;}
  get STATE_ORDER_ADEUDO(){return CitasDataProvider.STATE_ORDER_ADEUDO;}

  get STATE_PENDIENTE_COLOR(){return CitasDataProvider.STATE_PENDIENTE_COLOR;}
  get STATE_CONFIRMADA_COLOR(){return CitasDataProvider.STATE_CONFIRMADA_COLOR;}
  get STATE_ACTIVA_COLOR(){return CitasDataProvider.STATE_ACTIVA_COLOR;}
  get STATE_COBRO_COLOR(){return CitasDataProvider.STATE_COBRO_COLOR;}
  get STATE_FINALIZADA_COLOR(){return CitasDataProvider.STATE_FINALIZADA_COLOR;}
  get STATE_CANCELADA_COLOR(){return CitasDataProvider.STATE_CANCELADA_COLOR;}
  get STATE_ELIMINADA_COLOR(){return CitasDataProvider.STATE_ELIMINADA_COLOR;}
  get STATE_ELIMINADA_ADEUDO(){return CitasDataProvider.STATE_ADEUDO_COLOR;}



  constructor( ) {}
  get subject():Subject<any>{return this.citasSubject;}

  addCita( cita:Citas, call:boolean = true){
    console.log('adding a cita', cita);
    console.log('already existing citas',this.citas);
    if(!this.exists(cita)) this.citas.push(cita);
    else this.updateCita(cita.data);
    if( call )this.subject.next(this.citas);
    this.defaultSort();
    console.log('added cita',cita,this.citas);
  }

  removeCita( cita:Citas, call:boolean = true){
    //delete this.citas[cita.Nid];
    this.citas = this.citas.filter((citas)=>{ return citas.Nid !== cita.Nid});
    console.log('citas list after removed',this.citas);
    if( call ) this.subject.next(this.citas);
    this.defaultSort();
    console.log('removed cita',cita,this.citas);
  }


  updateCita( data:citasData, call:boolean = true ){
    for( let cita of this.citas ){
      if(cita.Nid === data.Nid){
        cita.data = data;
        console.log('processDatay updateCita');
        cita.processData();
        /*cita.setData(data);*/
         if( call ) this.subject.next(this.citas);
        console.log('updated cita',cita);
      }
    }
    this.defaultSort();
  }

  defaultSort(){
    console.log('defaultsorting citas');
    this.citas =  CitasDataProvider.sortByStateDate(this.citas);
    this.applyFilters();
    this.getCitasDaysAndSort();
    this.citasShowPool =  CitasDataProvider.sortByStateDate(this.citasShowPool);
    //this.citasShowPool =  CitasDataProvider.sortByStateDateDay(this.citasShowPool);
  }

  getCitasDaysAndSort(){
    //get days of all citas and add their citas to them.
    //sort citas of everyday
    console.log('getting citas days');
    this.daysCitas = new Array();
    this.getCitasDays();
    this.sortCitasDays();
    this.sortDays();
    this.setdaysLabels();
    console.log('citas days loadded',this.daysCitas);
  }

  sortCitasDays(){
    for(let day of this.daysCitas){
      day.citasShowPool = CitasDataProvider.sortByStateDate(day.citasShowPool);
    }
  }

  sortDays(){
    this.daysCitas = this.daysCitas.sort((a,b)=>{
      if(a.DayMs > b.DayMs ){ return 1}
      if(a.DayMs < b.DayMs ){ return -1}
      return 0;
    });
  }

  setdaysLabels(){
    this.ayer = 0;
    this.amon = 0;
    for(let day of this.daysCitas){
    if(this.checkyear(day.DayMs)){
      day.yearlabel = this.ayer;
      this.amon = 0;
    }
    if(this.checkMonth(day.DayMs)){
      day.monthlabel = DateProvider.getMonthLabel(this.amon);
      console.log('setting month',day);
    }
    }
  }

  getCitasDays(){
   
    for(let cita of this.citasShowPool){
      
      let dayMS = DateProvider.getStartEndOFDate(new Date(cita.dateMs)).start.getTime();
      let exist = this.daysCitas.find((daycitas)=>{ 
        return daycitas.DayMs === dayMS;
      });
      console.log('found this day',exist);
      if(exist){
        exist.citasShowPool.push(cita);
      }else{
        console.log('creating day',dayMS,DateProvider.getStringDate(new Date(dayMS)));
        let auxday = {
          DayMs:dayMS,
          monthlabel:0,
          yearlabel:0,
          DayName:DateProvider.getStringDate(new Date(dayMS)),
          citasShowPool: new Array()
        }
        auxday.citasShowPool.push(cita);
        this.daysCitas.push( auxday );
      }
    }
  }


  checkyear (DayMs:number):boolean{
    let ret = false;
    let year = new Date(DayMs).getFullYear();
      if(this.ayer <  year) {ret = true; this.ayer = year; console.log(' checkytrailcheckyear tru');} 
      return ret;
    }
  
    checkMonth(DayMs:number):boolean{
      let ret = false;
      let month = new Date(DayMs).getMonth()+1;
      let year = new Date(DayMs).getFullYear();
      console.log('checkytrail',month,year);
      if(this.amon <= month){ 
        if( this.amon === month){
          if(this.ayer < year) {ret = true; this.amon = month; console.log(' checkytrailcheckmon tru');}
        }else{
          ret = true;
          this.amon = month; console.log(' checkytrailcheckmon tru');
         
        } 
       }
      return ret;
    }

  getCitasByStatus( status:string ){
    return this.citas.filter( (citas) => {citas.checkState(status)});
  }

  exists( cita:Citas ):boolean{
   return this.citas.filter((citas)=>{ console.log(citas.Nid,'vs',cita.Nid); return Number(citas.Nid) === Number(cita.Nid) }).length > 0;
  }

  triggerSubject(){
    this.subject.next(this.citas);
  }

  resetDateFilters(){
    this.startDateFilter = 0;
    this.endDateFilter = new Date().getTime()+(1000*60*60*24*365*5);
    this.pacienteFilter = null;
  }

  applyFilters(){
    console.log('yaweyakiwe',this.startDateFilter,this.endDateFilter);
    this.citasShowPool = CitasDataProvider.filterByDates(this.citas, this.startDateFilter, this.endDateFilter);
    this.citasShowPool = this.applyUserTypeFilters(this.citasShowPool);
    //console.log('oyeme wey',JSON.stringify(this.citasShowPool));
    this.printShowPoolDatesRn();
    if(this.pacienteFilter !== null){
      console.log('this.pacienteFilter',this.pacienteFilter);
      this.citasShowPool = CitasDataProvider.filterByPaciente(this.citasShowPool, this.pacienteFilter);
    }
    
    console.log('endfiltered citas',this.citas);
    console.log('endfilter showpool',this.citasShowPool);
  }

  applyUserTypeFilters(citas):any[]{
    console.log('applyUserTypeFilters filters is ',this.userStateFilter);
    return citas.filter(
      (cita)=>{ console.log('applyUserTypeFilters state is',cita.data.field_estado.und[0]['value']); let ret = this.userStateFilter.indexOf(Number(cita.data.field_estado.und[0]['value'])) !== -1; console.log('applyUserTypeFilters ret',ret) ; return ret; }
      );
  }


  static getStateColor( state:number ):string{
    let ret = '';
    switch(state){
      case CitasDataProvider.STATE_PENDIENTE: ret = CitasDataProvider.STATE_PENDIENTE_COLOR; break;
      case CitasDataProvider.STATE_CONFIRMADA: ret = CitasDataProvider.STATE_CONFIRMADA_COLOR; break;
      case CitasDataProvider.STATE_ACTIVA: ret = CitasDataProvider.STATE_ACTIVA_COLOR; break;
      case CitasDataProvider.STATE_COBRO: ret = CitasDataProvider.STATE_COBRO_COLOR; break;
      case CitasDataProvider.STATE_FINALIZADA: ret = CitasDataProvider.STATE_FINALIZADA_COLOR; break;
      case CitasDataProvider.STATE_CANCELADA: ret = CitasDataProvider.STATE_CANCELADA_COLOR; break;
      case CitasDataProvider.STATE_ELIMINADA: ret = CitasDataProvider.STATE_ELIMINADA_COLOR; break;
      case CitasDataProvider.STATE_ADEUDO: ret = CitasDataProvider.STATE_ADEUDO_COLOR; break;
      default: ret = CitasDataProvider.STATE_FINALIZADA_COLOR;
    }
    return ret;
  }

  static getStateLabel( state:number ):string{
    let ret = '';
    switch(state){
      case CitasDataProvider.STATE_PENDIENTE: ret = 'Pendiente'; break;
      case CitasDataProvider.STATE_CONFIRMADA: ret = 'Confirmada'; break;
      case CitasDataProvider.STATE_ACTIVA: ret = 'Activa'; break;
      case CitasDataProvider.STATE_COBRO: ret = 'Sin Cobro'; break;
      case CitasDataProvider.STATE_FINALIZADA: ret = 'Finalizada'; break;
      case CitasDataProvider.STATE_CANCELADA: ret = 'Cancelada'; break;
      case CitasDataProvider.STATE_ELIMINADA: ret = 'Eliminada'; break;
      case CitasDataProvider.STATE_ADEUDO: ret = 'Adeudo'; break;
      default: ret = 'Error';
    }
    return ret;
  }

  static getReceivers(cita:Citas):number[]{
    return [cita.data.field_cita_doctor.und[0]];
  }

  static sortByDate(citas:Citas[]){
    console.log('sortingtrail', citas);
    let sorted = citas.sort((a,b)=>{ 
      console.log('sortingtrail', a.dateMs, b.dateMs);
      if (a.dateMs > b.dateMs)
      return -1;
    if (a.dateMs < b.dateMs)
      return 1;
   return 0;
    });
    console.log('sortingtrail end', citas);
    return sorted;
  }

  printShowPoolDatesRn(){
    console.log('showpool datemss',JSON.stringify( this.citasShowPool.map((citas)=>{ return {"NID":citas.Nid,"DATE":citas.dateMs} }) ));
  }

  static filterByDates(citas:Citas[], startDate, endDate){
    return citas.filter((citas)=>{
      return (citas.data.field_datemsb.und[0].value >= startDate  && citas.data.field_datemsb.und[0].value <= endDate)
    });
  }

  static filterByPaciente(citas:Citas[], pacienteName ){
    console.log('estos men');
    return citas.filter((citas)=>{
      console.log('filtering by paciente',pacienteName);
      console.log('paciente es',citas.paciente);
      return (citas.paciente.toLowerCase().includes(pacienteName.toLowerCase()));
    });
  }

  static sortByStateDate(citas:Citas[]){
    return citas.sort((a,b)=>{ 
      /*console.log('sorging citas');
      console.log(CitasDataProvider.getValueOfStateSort(a.data.field_estado.und[0]['value']));
      console.log(CitasDataProvider.getValueOfStateSort(b.data.field_estado.und[0]['value']));*/
      if(CitasDataProvider.getValueOfStateSort(a.data.field_estado.und[0]['value']) > CitasDataProvider.getValueOfStateSort(b.data.field_estado.und[0]['value'])){return 1;}
      if(CitasDataProvider.getValueOfStateSort(a.data.field_estado.und[0]['value']) < CitasDataProvider.getValueOfStateSort(b.data.field_estado.und[0]['value'])){return -1;}
      if(CitasDataProvider.getValueOfStateSort(a.data.field_estado.und[0]['value']) === CitasDataProvider.getValueOfStateSort(b.data.field_estado.und[0]['value'])){
        if (a.dateMs < b.dateMs)
        return -1;
      if (a.dateMs > b.dateMs)
        return 1;
     return 0;
      }
      });
  }

  static sortByStateDateDay(citas:Citas[]){
    return citas.sort((a,b)=>{ 
      /*console.log('sorging citas by stateday');
      console.log(CitasDataProvider.getValueOfStateSort(a.data.field_estado.und[0]['value']));
      console.log(CitasDataProvider.getValueOfStateSort(b.data.field_estado.und[0]['value']));*/
      if( DateProvider.getStartEndOFDate(new Date(a.dateMs)).start.getTime() > DateProvider.getStartEndOFDate(new Date(b.dateMs)).start.getTime() ){
        //console.log('oyeme que');
        let aux_cita = new Citas();
        aux_cita.data.field_estado.und[0]['value'] = -1;
        aux_cita.dateMs = DateProvider.getStartEndOFDate(new Date(b.dateMs)).start.getTime();
        aux_cita.data.field_paciente.und[0].value = DateProvider.getStringDate(new Date(DateProvider.getStartEndOFDate(new Date(b.dateMs)).start.getTime()));
        citas.push( aux_cita );
        return 1; 
      }
      if( DateProvider.getStartEndOFDate(new Date(a.dateMs)).start.getTime() < DateProvider.getStartEndOFDate(new Date(b.dateMs)).start.getTime() ){ 
        //console.log('oyeme que');
        let aux_cita = new Citas();
        aux_cita.data.field_estado.und[0]['value'] = -1;
        aux_cita.dateMs = DateProvider.getStartEndOFDate(new Date(b.dateMs)).start.getTime();
        aux_cita.data.field_paciente.und[0].value = DateProvider.getStringDate(new Date(DateProvider.getStartEndOFDate(new Date(b.dateMs)).start.getTime()));
        citas.push( aux_cita );
        return -1;
      }
      if( DateProvider.getStartEndOFDate(new Date(a.dateMs)).start.getTime() === DateProvider.getStartEndOFDate(new Date(b.dateMs)).start.getTime() ){ 
        if(CitasDataProvider.getValueOfStateSort(a.data.field_estado.und[0]['value']) > CitasDataProvider.getValueOfStateSort(b.data.field_estado.und[0]['value'])){return 1;}
        if(CitasDataProvider.getValueOfStateSort(a.data.field_estado.und[0]['value']) < CitasDataProvider.getValueOfStateSort(b.data.field_estado.und[0]['value'])){return -1;}
        if(CitasDataProvider.getValueOfStateSort(a.data.field_estado.und[0]['value']) === CitasDataProvider.getValueOfStateSort(b.data.field_estado.und[0]['value'])){
          if (a.dateMs < b.dateMs)
          return -1;
        if (a.dateMs > b.dateMs)
          return 1;
      return 0;
        }
      }
      });
  }

  static getValueOfStateSort(state):number{
    let ret = 99;
    switch (Number(state)){
      case this.STATE_PENDIENTE: ret = this.STATE_ORDER_PENDIENTE; break;
      case this.STATE_CONFIRMADA:  ret = this.STATE_ORDER_CONFIRMADA; break;
      case this.STATE_ACTIVA:  ret = this.STATE_ORDER_ACTIVA; break;
      case this.STATE_COBRO:  ret = this.STATE_ORDER_COBRO; break;
      case this.STATE_FINALIZADA:  ret = this.STATE_ORDER_FINALIZADA; break;
      case this.STATE_CANCELADA:  ret = this.STATE_ORDER_CANCELADA; break;
      case this.STATE_ELIMINADA:  ret = this.STATE_ORDER_ELIMINADA; break;
      default: ret = 99;
    }
    return ret;
  }

  static sortFilterByCloserNow(citas:Citas[]){
    console.log('citas to sortfilter',citas);
    citas = CitasDataProvider.filterPassedCitas(citas);
    return citas.sort((a,b)=>{ 
      if (a.dateMs < b.dateMs)
      return -1;
    if (a.dateMs > b.dateMs)
      return 1;
   return 0;
    });
  }

  static filterPassedCitas( citas:Citas[] ){
    const nowMs = new Date().getTime();
    return citas.filter((aux_citas)=>{  console.log('filtering cita ',aux_citas.dateMs,nowMs); return aux_citas.dateMs > nowMs }); //filter citas that are coming, not the ones that have passed already
  }


  static moneyFormat( money:number ): string {
    money = Number(money);
    //console.log('stringnumber money is',money);
    let ret = '';
    let stringnumber = money.toFixed(2).split("");
    //console.log('stringnumber a',stringnumber);
    stringnumber = stringnumber.reverse();
    //console.log('stringnumber b',stringnumber);
    let pointfound = 0;
    let counter = 0;
    let addition = '';
   for(let i = 0 ; i < stringnumber.length; i++){
     if(stringnumber[i] === '.'){
       counter = 0;
       ret+=stringnumber[i];
       pointfound = 1;
     }else{
       counter++;
       ret+=addition+stringnumber[i];
       addition = '';
       if(counter === 3){
        //ret += ',';
        addition = ',';
        counter = 0;
      }
      
     }
   }
   //console.log('stringnumber ret',ret);
   stringnumber = ret.split("").reverse();
   //console.log('stringnumber c',stringnumber);
   ret = '$'+stringnumber.join('');
   //console.log('stringnumber ret b',ret);
   if(pointfound === 0){
     ret+='.00';
   }
   
   //console.log('stringnumber end---------------');
   return ret;

  }

 


}

export interface DaysCitas{
  DayMs:number;
  monthlabel: any ;
  yearlabel: any ;
  DayName:string;
  citasShowPool:Citas[];
}

export interface YearCitas{
  year:number;
  monthCitas:MonthCitas[];
}

export interface MonthCitas{
  Month:number;
  dayCitas:DaysCitas[];
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { Citas } from '../../providers/user-data/citas';
import { Debugger } from '../../providers/user-data/debugger';
import { CitasManagerProvider } from '../../providers/citas-manager/citas-manager';
import { NotificationsManagerProvider } from '../../providers/notifications-manager/notifications-manager';
import { LoaderProvider } from '../../providers/loader/loader';
import { AlertProvider } from '../../providers/alert/alert';
import { WsMessengerProvider } from '../../providers/ws-messenger/ws-messenger';
import { DoctoresDataProvider } from '../../providers/doctores-data/doctores-data';
import { PermissionsProvider } from '../../providers/permissions/permissions';
//import * as moment from 'moment';
import { DateProvider } from '../../providers/date/date';
//import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { Calendar } from '@ionic-native/calendar';
import { DoctoresManagerProvider } from '../../providers/doctores-manager/doctores-manager';
import { CitasDataProvider } from '../../providers/citas-data/citas-data';
import { SubscriptionManagerProvider } from '../../providers/subscription-manager/subscription-manager';
import { UpdaterProvider } from '../../providers/updater/updater';


/**
 * Generated class for the NuevacitaModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevacita-modal',
  templateUrl: 'nuevacita-modal.html',
})




export class NuevacitaModalPage {
  cita:Citas = null;
  isnew:boolean = true;
  selectedDate:string = null;

  //date: string;
  dateobj:Date;
  selectedHour:number = 0;
  selectedHourISO:string = '';
  type: 'string';

  hourstring:string = null;




date: Date;
daysInThisMonth: any;
daysInLastMonth: any;
daysInNextMonth: any;
monthNames: string[];
currentMonth: any;
currentMonthNum:any;
currentYear: any;
currentDate: any;
compareDate: any;

eventList: any;
selectedEvent: any;
isSelected: any;

hours:any[] = new Array();
hourIntervalMS:number = 30*60*1000;

showerrors:boolean = false;
  
horantr: string = '';
horferror:boolean = false;
  formatear(evento){
    var hora = this.horantr.replace(':','');
    var arregloHora = hora.match(/.{1,2}/g) ? hora.match(/.{1,2}/g) : [];
    if(arregloHora.length == 2){
      this.horantr = arregloHora.join(':');
    }
    if(this.horantr.length > 5){
      this.horantr = this.horantr.substring(0,5);
    }
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userData: UserDataProvider,
    public viewCtrl: ViewController,
    public citasMan: CitasManagerProvider,
    public notiMan: NotificationsManagerProvider,
    public loader: LoaderProvider,
    public alert: AlertProvider,
    public wsMessenger: WsMessengerProvider,
    public docData: DoctoresDataProvider,
    public docMan: DoctoresManagerProvider,
    public permissions: PermissionsProvider,
    public dateP: DateProvider,
    private calendar: Calendar,
    public citasData: CitasDataProvider,
    public subscriptionManager:SubscriptionManagerProvider,
    public updater: UpdaterProvider
  ) {
    
    /** 
     * Al entrar seteas la fecha a este momento:
     *  setear dia de hoy en calendario
     *  setear intervalo en las horas correspondiente a esta hora.
     *
     * **/
   
    let aux_node = navParams.get('cita');
    if(aux_node){
      this.cita = aux_node;
     
      this.isnew = false;
     
      this.selectedHourISO = Citas.getLocalDateIso(new Date(this.cita.data.field_datemsb['und'][0]['value']));//new Date().toISOString();
      this.dateobj = new Date(this.cita.data.field_datemsb['und'][0]['value']);
      let dateobj_start = new Date(this.cita.data.field_datemsb['und'][0]['value']);
      dateobj_start.setHours(0,0,0,0);
      this.selectedHour = this.dateobj.getTime() - dateobj_start.getTime();
      this.setHourstring();
    }else{
      this.isnew = true;
      this.resetNewCita();
      this.cita.date = new Date();
      this.dateobj = new Date();
      this.selectedHour = 0;
      this.selectedHourISO = Citas.getLocalDateIso(this.getDateOnNextTreshold());
    }
    if(Number(this.cita.data.field_telefono.und[0].value) === 0){
      this.cita.data.field_telefono.und[0].value = null;
    }
  }

  setHours(){
  }

  setHourstring(){
    if(!this.isnew){
      let aux_date = new Date(this.cita.dateMs);
      this.horantr = `${DateProvider.formatDateBinaryNumber(aux_date.getHours())}:${DateProvider.formatDateBinaryNumber(aux_date.getMinutes())}`;
    }
  }

  hourDisplay(hourMs):string{
    let ret = "";
    return DateProvider.getDisplayableHourfMS(hourMs);
  }

  checkSelectedHour(hour):boolean{
    let ret = false;
   
    if(DateProvider.isDateBetweenNumber( this.selectedHour, hour,hour+(this.hourIntervalMS) ) ) ret = true;
    return ret;
  }



  ionViewWillEnter() {
    this.calendarLoad();
  }

  datechange($event) {
    this.cita.date = $event;
  
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  resetNewCita(){
    this.cita = new Citas();
  }

  ionViewDidLoad() {
  }

  getDisplayableDates(){
    return DateProvider.getDisplayableDates( this.cita.date);
  }

  choseHourClick(hour){
   
    this.selectedHour = hour;
  }

  async createCita(){
    if(!this.basicNewCitaValidation()){ return false; }
    
    if(!this.notEmptyNewCitaValidation()){ return false; } 
    this.setCitaDateFromiNPUT();
    if(!this.citaDateValidation()){ return false; }
    
    this.loader.presentLoader('creando cita...');
    this.cita.data.field_estado.und["0"].value = 0;
    if(this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])){
      this.cita.data.field_cita_doctor.und[0]=this.userData.userData.uid;
  
    }
      this.cita.data.field_cita_recepcion.und[0]=this.userData.userData.uid; //esto es quien creo la cita
      this.cita.data.field_cita_caja.und[0]="_none"; //quien cobro la cita
      this.cita.caja_playerid = null;
      this.cita.data.field_servicios_cita.und = []; //limpiamos los servicios porque nos deja basura
    await this.citasMan.generateNewCita( this.cita.data ).subscribe(
    (val)=>{
     
      this.notiMan.generateNotification([this.cita.data.field_cita_doctor.und[0]],`Nueva Cita con ${this.cita.paciente} fecha: ${new Date(this.cita.data.field_datemsb['und'][0]['value'])}`,`cita-${this.cita.Nid}`);
      this.cita.data.Nid = val.nid;
      this.cita.Nid = val.nid;
      this.wsMessenger.generateWSupdateMessage(this.cita);
    },
    response => {
        console.log("POST call in error", response);
        
       this.processCitaErrors(response.error.form_errors)
      }
  );
  this.loader.dismissLoader();
  this.close();
}

notEmptyNewCitaValidation(){
  let ret = true;
  if(!this.checkIfInputfilledNPromtp(this.cita.data.field_paciente.und[0].value,ret)) ret = false;
  if(!this.checkIfInputfilledNPromtp(this.horantr,ret)) ret = false;
  return ret;
}

checkIfInputfilledNPromtp( input , actualret){
  let ret = true;
 
  if(!actualret){ return false;} ;
  if( input ? false : true ){
    ret = false;
    this.alert.presentAlert('','Revisar los campos marcados en rojo.');
    this.showerrors = true;
  }
  return ret;
}

basicNewCitaValidation(){
  let ret = true;
  if(this.cita.data.field_telefono.und[0].value === null){
    this.cita.data.field_telefono.und[0].value = 0;
  }

  if(this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])){
  }
  else{
    if( Number(this.cita.data.field_cita_doctor.und[0]) === 0 ){
      this.alert.presentAlert('','Debe elegir un doctor para esta cita');
      this.showerrors = true;
     
      ret = false;
    }
  }
  return ret;
}

citaDateValidation():boolean{
  let ret = true;
  this.horferror = false;
  //console.log('checkcitaupdate', this.cita.data.field_datemsb['und'][0]['value'], new Date().getTime(), this.cita.data.field_datemsb['und'][0]['value'] < new Date().getTime());
  //console.log('checkcitaupdate date',new Date(this.cita.data.field_datemsb['und'][0]['value']));
  //console.log('checkcitaupdate x',new Date(this.CompareDate),new Date(), this.CompareDate < new Date().getTime() );
  if( this.CompareDate < new Date().getTime()){
    this.horferror = true;
    this.alert.presentAlert('','Debe elegir una fecha a futuro');
    ret = false;
  }
  if(!DateProvider.validateHhMm(this.horantr)){
    this.horferror = true;
    this.alert.presentAlert('','Formato de hora incorrecto');
    ret = false;
  }
  return ret;
}

getDateOnNextTreshold():Date{
  let aux_date = new Date();
  if(aux_date.getMinutes()%15 !== 0){
   
    let min = 15* Math.ceil(aux_date.getMinutes()/15);
    if(min >= 60){
      aux_date.setMinutes(0);
      aux_date = new Date(aux_date.getTime() + ( 60*60*1000 ));
    }else{
      aux_date.setMinutes(min);
    }
  }else{
    
  }
  return aux_date;
}

async updateCita(){
 
  if(!this.citaDateValidation()){ return false; }
  if(this.cita.data.field_telefono.und[0].value === null){
    this.cita.data.field_telefono.und[0].value = 0;
  }
  this.setCitaDateFromiNPUT();
  this.loader.presentLoader('actualizando ...');
  await this.citasMan.updateCita( this.cita.data ).subscribe(
    (val)=>{
      this.wsMessenger.generateWSupdateMessage(this.cita);    
    },
    response => {
      console.log("POST call in error", response);
      this.processCitaErrors(response.error.form_errors);
    }
  );
  this.loader.dismissLoader();
  this.close();
}


close(){
  this.viewCtrl.dismiss();
}



setCitaDateFromiNPUT(){
  let final_date_UT = this.CompareDate;
  this.cita.setDateUT(final_date_UT);
  this.cita.data.field_datemsb['und'][0]['value'] = final_date_UT;
}

get CompareDate(){
  let aux_date = new Date(this.dateobj.getTime());
  aux_date.setHours(0,0,0,0);
  let ms = Number(this.horantr.split(':')[0])*60*60*1000;
  ms += Number(this.horantr.split(':')[1])*60*1000;
  let final_date_UT = aux_date.getTime() + ms;
  return final_date_UT;
//this.compareDate = final_date_UT;
}




calendarLoad(){
  this.date = new Date();
    this.monthNames = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    this.getDaysOfMonth();
    //this.loadEventThisMonth();
}


getDaysOfMonth() {
  this.daysInThisMonth = new Array();
  this.daysInLastMonth = new Array();
  this.daysInNextMonth = new Array();
  this.currentMonth = this.monthNames[this.date.getMonth()];
  this.currentMonthNum = this.date.getMonth();
  this.currentYear = this.date.getFullYear();
  if(this.date.getMonth() === this.dateobj.getMonth()) {
    this.currentDate = this.dateobj.getDate();
  } else {
    this.currentDate = 999;
  }

  var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
  var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
  for(var i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
    this.daysInLastMonth.push(i);
  }

  var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
  for (var i = 0; i < thisNumOfDays; i++) {
    this.daysInThisMonth.push(i+1);
  }

  var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
  var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
  for (var i = 0; i < (6-lastDayThisMonth); i++) {
    this.daysInNextMonth.push(i+1);
  }
  var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
  if(totalDays<36) {
    for(var i = (7-lastDayThisMonth); i < ((7-lastDayThisMonth)+7); i++) {
      this.daysInNextMonth.push(i);
    }
  }
}

chosedayClick( day ){
  let datex = new Date();
  datex.setFullYear(this.currentYear,this.currentMonthNum,day);
  this.currentDate = datex.getDate();
  this.dateobj = datex;
  this.date = datex;
}

goToLastMonth() {
  this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
  this.getDaysOfMonth();
}

goToNextMonth() {
  this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
  this.getDaysOfMonth();
}

async updateDoctores(){
  this.loader.presentLoader('Cargando Doctores...');
  await this.updater.updateSuscription();
  await this.updater.updateDocList();
  this.loader.dismissLoader();

}



processCitaErrors(e){
  for (var key in e) {
   if(key.includes('field_email')){
      this.alert.presentAlert('', 'El formato del correo electrónico no es válido');
    }else{
      this.alert.presentAlert('', 'Se ha detectado un error inesperado en '+AlertProvider.cleanDrupalFieldString(key));
    }
  }
}

}

/**
 * Esto de aquí es para que el date me de el toisostring en la hora de aquí
 *  **/
/*
Date.prototype.toISOString = function() {
  var tzo = -this.getTimezoneOffset(),
      dif = tzo >= 0 ? '+' : '-',
      pad = function(num) {
          var norm = Math.floor(Math.abs(num));
          return (norm < 10 ? '0' : '') + norm;
      };
  return this.getFullYear() +
      '-' + pad(this.getMonth() + 1) +
      '-' + pad(this.getDate()) +
      'T' + pad(this.getHours()) +
      ':' + pad(this.getMinutes()) +
      ':' + pad(this.getSeconds()) +
      dif + pad(tzo / 60) +
      ':' + pad(tzo % 60);
}*/

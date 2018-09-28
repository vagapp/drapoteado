import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController, AlertController } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { Citas } from '../../providers/user-data/citas';
import { Debugger } from '../../providers/user-data/debugger';
import { CitasManagerProvider } from '../../providers/citas-manager/citas-manager';
import { NotificationsManagerProvider } from '../../providers/notifications-manager/notifications-manager';
import { LoaderProvider } from '../../providers/loader/loader';
import { WebsocketServiceProvider } from '../../providers/websocket-service/websocket-service';
import { AlertProvider } from '../../providers/alert/alert';
import { WsMessengerProvider } from '../../providers/ws-messenger/ws-messenger';
import { DoctoresDataProvider } from '../../providers/doctores-data/doctores-data';
import { PermissionsProvider } from '../../providers/permissions/permissions';
//import * as moment from 'moment';
import { DateProvider } from '../../providers/date/date';
//import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { Calendar } from '@ionic-native/calendar';
import { DoctoresManagerProvider } from '../../providers/doctores-manager/doctores-manager';

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
  type: 'string';

date: Date;
daysInThisMonth: any;
daysInLastMonth: any;
daysInNextMonth: any;
monthNames: string[];
currentMonth: any;
currentMonthNum:any;
currentYear: any;
currentDate: any;

eventList: any;
selectedEvent: any;
isSelected: any;

hours:any[] = new Array();
hourIntervalMS:number = 30*60*1000;
  
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
    private calendar: Calendar
  ) {
    
    console.log('GETTING CITA', navParams.get('cita'));

    let aux_node = navParams.get('cita');
    if(aux_node){
      this.cita = aux_node;
      Debugger.log(['cita en modal es',this.cita]);
      this.isnew = false;
      //this.selectedDate = Citas.getLocalDateIso(new Date(this.cita.data.field_datemsb['und'][0]['value']));//new Date().toISOString();
      this.dateobj = new Date(this.cita.data.field_datemsb['und'][0]['value']);
      let dateobj_start = new Date(this.cita.data.field_datemsb['und'][0]['value']);
      dateobj_start.setHours(0,0,0,0);
      this.selectedHour = this.dateobj.getTime() - dateobj_start.getTime();
      console.log('selected hour is:', this.selectedHour);
      console.log(this.selectedDate);
    }else{
      this.isnew = true;
      this.resetNewCita();
      this.cita.date = new Date();
      this.dateobj = new Date();
      this.selectedHour = 0;
      //this.selectedDate = Citas.getLocalDateIso(new Date());//new Date().toISOString();
    }
  }

  setHours(){
    let minutes = 24*60*60*1000;
    let time = 0;
    this.hours = new Array();
    for(let i = 0; i < minutes/this.hourIntervalMS; i++){
      //console.log(new Date(i*this.hourInterval*60*1000));
      this.hours.push(i*this.hourIntervalMS);
    }
  }

  hourDisplay(hourMs):string{
    let ret = "";
    return DateProvider.getDisplayableHourfMS(hourMs);
  }

  checkSelectedHour(hour):boolean{
    let ret = false;
    if(this.selectedHour >= hour && this.selectedHour < hour+(this.hourIntervalMS)) ret =  true;
    return ret;
  }

  ionViewWillEnter() {
    this.setHours();
    this.calendarLoad();
  }

  datechange($event) {
    this.cita.date = $event;
    //console.log($event);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  resetNewCita(){
    this.cita = new Citas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevacitaModalPage');
  }

  getDisplayableDates(){
    return DateProvider.getDisplayableDates( this.cita.date);
  }

  choseHourClick(hour){
    console.log(hour);
    this.selectedHour = hour;
  }

  async createCita(){
    if(!this.basicNewCitaValidation()){ return false; }
    this.loader.presentLoader('creando cita...');
    this.cita.data.field_estado.und["0"].value = 0;
    if(this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])){
      this.cita.data.field_cita_doctor.und[0]=this.userData.userData.uid;
    }
      this.cita.data.field_cita_recepcion.und[0]=this.userData.userData.uid; //esto es quien creo la cita
      this.cita.data.field_cita_caja.und[0]="_none"; //quien cobro la cita
      this.cita.caja_playerid = null;
      this.cita.data.field_servicios_cita.und = []; //limpiamos los servicios porque nos deja basura
      this.setCitaDateFromiNPUT();
    await this.citasMan.generateNewCita( this.cita.data ).subscribe(
    (val)=>{
      console.log(val.nid);
      this.notiMan.generateNotification([this.cita.data.field_cita_doctor.und[0]],`Nueva Cita con ${this.cita.paciente} fecha: ${new Date(this.cita.data.field_datemsb['und'][0]['value'])}`,`cita-${this.cita.Nid}`);
      this.cita.data.Nid = val.nid;
      this.cita.Nid = val.nid;
      this.wsMessenger.generateWSupdateMessage(this.cita);
    },
    response => {
        console.log("POST call in error", response);
        console.log("show error");
        for (var key in response.error.form_errors) {
          this.alert.presentAlert(key, response.error.form_errors[key]);
        }
      }
  );
  await this.docMan.pushDisponivilidad(this.cita.data.field_cita_doctor.und[0], this.cita.data.field_datemsb['und'][0]['value'] );
  //await this.citasMan.requestCitas().toPromise();
  this.loader.dismissLoader();
  this.close();
}

basicNewCitaValidation(){
  let ret = true;
  if(this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])){
  }
  else{
    if( Number(this.cita.data.field_cita_doctor.und[0]) === 0 ){
      this.alert.presentAlert('Error','Debe elegir un doctor para esta cita');
      ret = false;
    }
  }
  return ret;
}

async updateCita(){
  this.loader.presentLoader('actualizando ...');
  this.setCitaDateFromiNPUT();
  await this.citasMan.updateCita( this.cita.data ).subscribe(
    (val)=>{
      this.wsMessenger.generateWSupdateMessage(this.cita);    
    },
    response => {
      console.log("POST call in error", response);
      console.log("show error");
      for (var key in response.error.form_errors) {
        this.alert.presentAlert(key, response.error.form_errors[key]);
      }
    }
  );
  this.loader.dismissLoader();
  this.close();
}


close(){
  this.viewCtrl.dismiss();
}



setCitaDateFromiNPUT(){
  //get the timezoned input and put it on utc on this format 2018-07-04 14:30:00-07:00 to set data using citas code
  //Debugger.log(['string that not works now is',this.selectedDate],false);
  //this.cita.setDate(this.selectedDate,true);
  //OLD CODE FROM IONIC DATEPICKER
  /*let now = new Date();
  Debugger.log([this.selectedDate]);
  let auxdate = new Date(this.selectedDate);
  Debugger.log([`times dif are now ${now.getTime()} vs sel ${auxdate.getTime()}`]);
  Debugger.log([`offset is`,new Date().getTimezoneOffset()]);
  let dateUT = auxdate.getTime();
  const offset = (new Date().getTimezoneOffset() * 60 * 1000 * 2); // offset is in minutes so 60 * 1000 to get  milliseconds
  dateUT = dateUT + offset;
  this.cita.setDateUT(dateUT);
  this.cita.data.field_datemsb['und'][0]['value'] = dateUT;
  Debugger.log([`saving ${dateUT} for ${new Date(dateUT)}`]);*/

  //CODE FOR CALENDAR PICKER
  let aux_date = new Date(this.dateobj.getTime());
  aux_date.setHours(0,0,0,0);
  aux_date = new Date(aux_date.getTime()+this.selectedHour);
  console.log('settingdateinput is',aux_date);
  let dateUT = aux_date.getTime();//this.aux_date.getTime();
  this.cita.setDateUT(dateUT);
  this.cita.data.field_datemsb['und'][0]['value'] = dateUT;
}




calendarLoad(){
  this.date = new Date();
    this.monthNames = ["Enero","Febrero","Marzo","Abril","Mayi","Junio","Julio","Augosto","Septiembre","Octubre","Noviembre","Dicimbre"];
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











}

/**
 * Esto de aqui es para que el date me de el toisostring en la hora de aqui
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

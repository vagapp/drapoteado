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
    public permissions: PermissionsProvider
  ) {
    console.log('GETTING CITA', navParams.get('cita'));
    let aux_node = navParams.get('cita');
    if(aux_node){
      this.cita = aux_node;
      Debugger.log(['cita en modal es',this.cita]);
      this.isnew = false;
    }else{
      this.isnew = true;
      this.resetNewCita();
      this.selectedDate = Citas.getLocalDateIso(new Date());//new Date().toISOString();
    }
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
  let now = new Date();
  Debugger.log([this.selectedDate]);
  let auxdate = new Date(this.selectedDate);
  Debugger.log([`times dif are now ${now.getTime()} vs sel ${auxdate.getTime()}`]);
  Debugger.log([`offset is`,new Date().getTimezoneOffset()]);
  let dateUT = auxdate.getTime();
  const offset = (new Date().getTimezoneOffset() * 60 * 1000 * 2); // offset is in minutes so 60 * 1000 to get  milliseconds
  dateUT = dateUT + offset;
  this.cita.setDateUT(dateUT);
  this.cita.data.field_datemsb['und'][0]['value'] = dateUT;
  Debugger.log([`saving ${dateUT} for ${new Date(dateUT)}`]);
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

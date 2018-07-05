import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController, AlertController } from 'ionic-angular';
import { UserDataProvider, citasData } from '../../providers/user-data/user-data';
import { Citas } from '../../providers/user-data/citas';
import { Debugger } from '../../providers/user-data/debugger';

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
  //newCita: citasData;
  cita:Citas = null;
  isnew:boolean = true;
  //citaobject:Citas = null;
  selectedDate:string = null;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userData: UserDataProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public viewCtrl: ViewController,
    private alertCtrl: AlertController
  ) {
    console.log('GETTING CITA', navParams.get('cita'));
    let aux_node = navParams.get('cita');
    if(aux_node){
      this.cita = aux_node;
      Debugger.log(['cita en modal es',this.cita]);
      this.selectedDate = Citas.getLocalDateIso(this.cita.date); //this.cita.date.toISOString();
      this.isnew = false;
      //this.newCita = UserDataProvider.getEmptyCita();
      //this.newCita = aux_node;
      //this.selectedDate = this.newCita.field_date.und.values.date;
     
    }else{
      this.isnew = true;
      this.resetNewCita();
      this.selectedDate = Citas.getLocalDateIso(new Date());//new Date().toISOString();
    }
  }

  resetNewCita(){
    this.cita = new Citas();
    /*this.newCita=UserDataProvider.getEmptyCita();
    this.selectedDate = new Date().toISOString();*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevacitaModalPage');
  }


  createCita(){
    let loader = this.loadingCtrl.create({
      content: "Generando Cita"
    }); 
    Debugger.log(["creando una cita ",this.cita.data]);
    Debugger.log(["fecha string datetimepicker",this.selectedDate]);
    this.cita.data.field_estado.und["0"].value = 0;
    if(this.userData.userData.field_tipo_de_usuario.und[0].value == 1){
      this.cita.data.field_cita_doctor.und[0]=this.userData.userData.uid;
      this.cita.data.field_cita_recepcion.und[0]=this.userData.userData.uid;
      this.cita.data.field_cita_caja.und[0]="_none";
      this.cita.data.field_servicios_cita.und = [];
    }
    //this.cita.setDate(this.selectedDate);
    this.setCitaDateFromiNPUT();
    this.userData.generateNewCita( this.cita.data ).subscribe(
    (val)=>{
      console.log("the new cita has been generated");
      this.presentToast("Completado");
      loader.dismiss();
      this.close();
    },
    response => {
        console.log("POST call in error", response);
        console.log("show error");
        for (var key in response.error.form_errors) {
          this.presentAlert(key, response.error.form_errors[key]);
          //this.presentToast(response.error.form_errors[key]);
          //console.log(key, response.error.form_errors[key]);
        }
        loader.dismiss();
      }
  );
}

updateCita(){
  let loader = this.loadingCtrl.create({
    content: "Guardando . . ."
  });
  this.setCitaDateFromiNPUT();
  this.userData.updateCita( this.cita.data ).subscribe(
    (val)=>{
      Debugger.log(['updatecita returns',val]);
      console.log("citaupdated");
      this.presentToast("Completado");
      loader.dismiss();
      this.close();
    },
    response => {
      console.log("POST call in error", response);
      console.log("show error");
      for (var key in response.error.form_errors) {
        this.presentAlert(key, response.error.form_errors[key]);
      }
    }
  );
}

presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 6000,
    position: 'top'
  });
  toast.present();
}

close(){
  this.viewCtrl.dismiss();
}

presentAlert(key,Msg) {
  let alert = this.alertCtrl.create({
    title: key,
    subTitle: Msg,
    buttons: ['Dismiss']
  });
  alert.present();
}

setCitaDateFromiNPUT(){
  //get the timezoned input and put it on utc on this format 2018-07-04 14:30:00-07:00 to set data using citas code
  Debugger.log(['string that not works now is',this.selectedDate],false);
  this.selectedDate = this.selectedDate.slice(0,19);
  let aux_date_obj = new Date(this.selectedDate+'Z');
  let aux_date_str_utc = `${aux_date_obj.getFullYear()}-${aux_date_obj.getDate()}-${(aux_date_obj.getMonth()+1)}T${aux_date_obj.getHours()}:${aux_date_obj.getMinutes()}:00`;
  let aux_testdate = new Date(aux_date_str_utc+'Z');
  this.cita.setDate(this.selectedDate,true); //this is not on utc but it contains the actual timezone so its okai
 /* let aux_date_obj = new Date(this.selectedDate);
  Debugger.log(['aux_date_obj is',aux_date_obj]);
  Debugger.log(['utc aux_date_obj is',aux_date_obj.toUTCString()]);
  let aux_datetimeparts = this.selectedDate.split('T');
  const aux_date = aux_datetimeparts[0];
  aux_datetimeparts = aux_datetimeparts[1].split('.');
  const aux_time = aux_datetimeparts[0];
  //this.cita.date = new Date(`${aux_date} ${aux_time}`);
  Debugger.log([` Setting Cita from input: ${aux_date} ${aux_time}`]);*/
  //let aux_date_str_utc = `${aux_date_obj.getUTCFullYear()}-${aux_date_obj.getUTCDate()}-${(aux_date_obj.getMonth()+1)}T${aux_date_obj.getUTCHours()}:${aux_date_obj.getUTCMinutes()}:00`;
  //let aux_testdate = new Date(aux_date_str_utc+'Z');
  //Debugger.log([]);
  /*Debugger.log(['auxdate testo on utc saving',this.cita.date]);
  Debugger.log(['cita for setDate on utc',aux_date_str_utc]);
  Debugger.log(['cita for setDate on local',`${aux_date} ${aux_time}`]);*/
  //this.cita.setDate( `${aux_date} ${aux_time}`);
  Debugger.log(['magi date setter got ',this.cita.date]);
  
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

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
      this.selectedDate = this.cita.date.toISOString();
      this.isnew = false;
      //this.newCita = UserDataProvider.getEmptyCita();
      //this.newCita = aux_node;
      //this.selectedDate = this.newCita.field_date.und.values.date;
     
    }else{
      this.isnew = true;
      this.resetNewCita();
      this.selectedDate = new Date().toISOString();
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
  let aux_datetimeparts = this.selectedDate.split('T');
  const aux_date = aux_datetimeparts[0];
  aux_datetimeparts = aux_datetimeparts[1].split('.');
  const aux_time = aux_datetimeparts[0];
  //this.cita.date = new Date(`${aux_date} ${aux_time}`);
  this.cita.setDate(`${aux_date} ${aux_time}`);
  Debugger.log(['magi date setter got ',this.cita.date]);
}


}

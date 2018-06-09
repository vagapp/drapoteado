import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController, AlertController } from 'ionic-angular';
import { UserDataProvider, citasData } from '../../providers/user-data/user-data';

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
  newCita: citasData;
  isnew:boolean;

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
      this.isnew = false;
      this.newCita = UserDataProvider.getEmptyCita();
      this.newCita = aux_node;
    }else{
      this.isnew = true;
      this.resetNewCita();
    }
  }

  resetNewCita(){
    this.newCita=UserDataProvider.getEmptyCita();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevacitaModalPage');
  }


  createCita(){
    let loader = this.loadingCtrl.create({
      content: "Generando Cita"
    }); 
    console.log("creating a service ",this.newCita);
    this.newCita.field_estado.und["0"].value = 0;
    if(this.userData.userData.field_tipo_de_usuario.und[0].value == 1){
      this.newCita.field_cita_doctor.und[0]=this.userData.userData.uid;
      this.newCita.field_cita_recepcion.und[0]=this.userData.userData.uid;
      this.newCita.field_cita_caja.und[0]="_none";
    }
    this.userData.generateNewCita( this.newCita ).subscribe(
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
  this.userData.updateCita( this.newCita ).subscribe(
    (val)=>{
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

}

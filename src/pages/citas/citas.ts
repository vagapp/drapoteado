import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { NuevacitaModalPage } from '../nuevacita-modal/nuevacita-modal';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { Citas } from '../../providers/user-data/citas';
import { EmailValidator } from '@angular/forms';
import { ProgresocitaModalPage } from '../progresocita-modal/progresocita-modal';

/**
 * Generated class for the CitasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-citas',
  templateUrl: 'citas.html',
})
export class CitasPage {
  

  //permisos
  canConfirm:boolean;
  canActivate:boolean;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    public userData:UserDataProvider,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {
    //this.citas = new Array();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitasPage');
    this.cargarCitas();
  }

  openNuevaCita(){
      let Modal = this.modalCtrl.create(NuevacitaModalPage, undefined, { cssClass: "nuevaCitaModal smallModal" });
      Modal.onDidDismiss(data => {
        this.cargarCitas();
      });
      Modal.present({});
    }

    cargarCitas(){
      this.userData.cargarCitas();
    }

    updateStatePop( cita ,state ){
      let aux_title = "";
      switch(state){
        case 0: aux_title = "pendiente";break;
        case 1: aux_title = "confirmada";break;
        case 2: aux_title = "Activa";break;
        case 3: aux_title = "a cobrar";break;
        case 4: aux_title = "finalizada";break;
      }
        let alert = this.alertCtrl.create({
          title: aux_title,
          message: '¿esta seguro que desea colocar esta cita como '+aux_title+'?',
          buttons: [
            {
              text: 'No',
              role: 'cancel',
              handler: () => {
               
              }
            },
            {
              text: 'Si',
              handler: () => { 
                this.updateStateRequest(cita,state);
              }
            }
          ]
        });
        alert.present();
      }
   

    updateStateRequest ( cita, state ) {
      let loader = this.loadingCtrl.create({
        content: "actualizando"
      });
      loader.present();
      this.userData.updateCitaState(cita,state).subscribe(
        (val)=>{
          loader.dismiss();
          this.cargarCitas();
        },
        response => {
          console.log("POST call in error", response);
          this.presentAlert("Error","Ubo un problema al presentar ");
        }
      );
    } 

    editCita( cita ){
      let Modal = this.modalCtrl.create(NuevacitaModalPage, { cita: cita }, { cssClass: "nuevaCitaModal smallModal" });
      Modal.onDidDismiss(data => {
        this.cargarCitas();
      });
      Modal.present({});
    }


    openProgreso( cita: Citas){
      console.log("sending progreso", cita);
      let Modal = this.modalCtrl.create(ProgresocitaModalPage, {cita : cita}, { cssClass: "smallModal progressModal" });
      Modal.onDidDismiss(data => {
        this.userData.cargarCitas();
      });
      Modal.present({});
    }


    iniciarCita( cita:Citas ){
      let loader = this.loadingCtrl.create({
        content: "actualizando"
      });
      loader.present();
      let aux_doc = this.userData.getDoctorOFCita(cita);
      console.log("tryin to open cita progreso",cita);
      if(cita.checkState(UserDataProvider.STATE_ACTIVA)){
        this.openProgreso(cita);
      }else{
        if(aux_doc.citaActiva){
          this.presentAlert("Ocupado","Este doctor esta ocupado con una cita Activa");
          loader.dismiss();
          return 0;
        }
      let alert = this.alertCtrl.create({
        title: "Iniciar Consulta",
        message: '¿esta seguro que desea colocar esta cita como Activa?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
            }
          },
          {
            text: 'Si',
            handler: () => { 
              this.userData.updateCitaState( cita , UserDataProvider.STATE_ACTIVA ).subscribe(
                (val)=>{
                  this.userData.cargarCitas().subscribe(
                    (val)=>{
                      loader.dismiss();
                      this.openProgreso(cita);
                    }
                  );
               
                });
            }
          }
        ]
      });
      alert.present();
    }
    }



    
    presentToast(msg) {
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 6000,
        position: 'top'
      });
      toast.present();
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

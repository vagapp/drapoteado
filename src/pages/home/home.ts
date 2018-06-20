import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ComponentsModule } from "../../components/components.module";
import { PopoverController } from 'ionic-angular';
import { WelcomeModalPage } from '../welcome-modal/welcome-modal';
import { ReporteModalPage} from '../reporte-modal/reporte-modal';
import { ProgresocitaModalPage } from '../progresocita-modal/progresocita-modal';
import { CitasPage } from '../citas/citas';
import { ServiciosPage } from '../servicios/servicios';
import { UsuariosPage } from '../usuarios/usuarios';
import { ReportesPage } from '../reportes/reportes';
import { ModalController } from 'ionic-angular';
import { NuevacitaModalPage } from '../nuevacita-modal/nuevacita-modal';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { LoginPage } from '../login/login';
import { Citas } from '../../providers/user-data/citas';
import { FacturacionPage } from '../facturacion/facturacion';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController, 
    public userData: UserDataProvider,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad(){
      //console.log("tutorial",this.userData.userData.tutorial_state);
      //console.log(this.userData.userData.tutorial_state.und[0].value);
      if( this.userData.userData.tutorial_state.und && parseInt(this.userData.userData.tutorial_state.und[0].value) == 0){
        let Modal = this.modalCtrl.create(WelcomeModalPage);
        Modal.present({});
        this.userData.userData.tutorial_state.und[0].value = "1";
    }
    this.userData.cargarCitas();
  }


  iniciarCita( cita:Citas ){
    let aux_doc = this.userData.getDoctorOFCita(cita);
    console.log("tryin to open cita progreso",cita);
    if(cita.checkState(UserDataProvider.STATE_ACTIVA)){
      this.openProgreso(cita);
    }else{
      if(aux_doc.citaActiva){
        this.presentAlert("Ocupado","Este doctor esta ocupado con una cita Activa");
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
            this.userData.updateCitaState( cita , UserDataProvider.STATE_ACTIVA );
            this.openProgreso(cita);
          }
        }
      ]
    });
    alert.present();
  }
  }


  confirmarCita(cita:Citas){
    this.userData.updateCitaState( cita , UserDataProvider.STATE_CONFIRMADA );
  }

  /*iniciarCita( cita:Citas ){
      console.log("mostrar modal de desea iniciar esta cita");
    console.log("si acepta usar openProgreso para iniciar cita");
    console.log("cargar la cita en el modal");
  }*/

  openReportModal(){
    let Modal = this.modalCtrl.create(ReporteModalPage, undefined, { cssClass: "bigModal reportModal" });
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
  openFacturacion(){
    this.navCtrl.setRoot(FacturacionPage);
  }
  openCitas(){
    this.navCtrl.setRoot(CitasPage);
  }
  openServicios(){
    this.navCtrl.setRoot(ServiciosPage);
  }
  openUsuarios(){
    this.navCtrl.setRoot(UsuariosPage);
  }
  openReportes(){
    this.navCtrl.setRoot(ReportesPage);
  }
  openNuevaCita(){
    let Modal = this.modalCtrl.create(NuevacitaModalPage, undefined, { cssClass: "nuevaCitaModal smallModal" });
    Modal.present({});
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
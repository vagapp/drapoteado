import { Component } from '@angular/core';
import { NavController, ModalController, IonicPage } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { Citas } from '../../providers/user-data/citas';
import { DrupalUserManagerProvider } from '../../providers/drupal-user-manager/drupal-user-manager';
import { CitasPresentatorProvider } from '../../providers/citas-presentator/citas-presentator';
import { ReportPresentatorProvider } from '../../providers/report-presentator/report-presentator';
import { ReportesDataProvider } from '../../providers/reportes-data/reportes-data';
import { PermissionsProvider } from '../../providers/permissions/permissions';
import { DoctoresDataProvider } from '../../providers/doctores-data/doctores-data';
import { CitasDataProvider } from '../../providers/citas-data/citas-data';
import { TutorialProvider } from '../../providers/tutorial/tutorial';
import { DateProvider } from '../../providers/date/date';
//import { Debugger } from '../../providers/user-data/debugger';

@IonicPage({
  name: 'HomePage',
  priority: 'high'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rifa:string = 'nadien';
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController, 
    public userData: UserDataProvider,
    public userMan: DrupalUserManagerProvider,
    public citasPresentator: CitasPresentatorProvider,
    public reportPresentator: ReportPresentatorProvider,
    public reportesData: ReportesDataProvider,
    public permissions: PermissionsProvider,
    public doctoresData: DoctoresDataProvider,
    public citasData: CitasDataProvider,
    public tutoralProvider: TutorialProvider,
    public dates:DateProvider
  ) {
    //console.log('hello',permissions.subsData.subscription);
  }

  async ionViewDidLoad(){
    if(this.userData.userData.uid !== 0){
      this.tutoralProvider.checkNStart();
      /*if(this.permissions.checkUserSuscription([UserDataProvider.PLAN_ANY]) && this.userData.userData.tutorial_state.und && Number(this.userData.userData.tutorial_state.und[0].value) === 0){
        let Modal = this.modalCtrl.create("WelcomeModalPage");
        Modal.present({});
        this.userData.userData.tutorial_state.und[0].value = "1";
        let cloneData = {
          uid:this.userData.userData.uid,
          field_tutorial_state: {und: [{value: "1"}]},
        }
        await this.userMan.updateUserd(cloneData).toPromise();
        console.log('update tutorial at dismiss');
    }*/
  }
  }


  iniciarCita( cita:Citas ){
   this.citasPresentator.iniciarCita(cita);
  }


  confirmarCita(cita:Citas){
    this.citasPresentator.confirmarCita(cita);
  }


  openReportModal(){
    //this.reportPresentator.openReportModal();
    //this.reportPresentator.openReportGenerate();
    this.reportPresentator.openTicket();
  }

  openProgreso( cita: Citas){
    let Modal = this.modalCtrl.create("ProgresocitaModalPage", {cita : cita}, { cssClass: "smallModal progressModal" });
    Modal.onDidDismiss(data => {
      //this.userData.cargarCitas();
    });
    Modal.present({});
  }

  openFacturacion(){
    this.navCtrl.setRoot("FacturacionPage");
  }
  openRegister(){
    let Modal = this.modalCtrl.create("RegisterModalPage", undefined, { cssClass: "bigModal" });
    Modal.present({});
  }
  
  openCitas(){
    this.navCtrl.setRoot("CitasPage");
  }
  openServicios(){
    this.navCtrl.setRoot("ServiciosPage");
  }
  openUsuarios(){
    this.navCtrl.setRoot("UsuariosPage");
  }
  openReportes(){
    this.navCtrl.setRoot("ReportesPage");
  }
  openNuevaCita(){
    let Modal = this.modalCtrl.create("NuevacitaModalPage", undefined, { cssClass: "nuevaCitaModal smallModal" });
    Modal.present({});
  }




  calcularRifa(){
    let random = Math.floor(Math.random() * 6) + 1;
    switch(random){
      case 1: this.rifa="ernesto"; break;
      case 2: this.rifa="andrea"; break;
      case 3: this.rifa="panchito"; break;
      case 4: this.rifa="lucia"; break;
      case 5: this.rifa="alberto"; break;
    }
  }
  
  
}

import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
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
import { RegisterModalPage } from '../register-modal/register-modal';
import { Debugger } from '../../providers/user-data/debugger';
import { ClickOutsideModule } from 'ng-click-outside';


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
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad(){
    Debugger.log(['this.userData.userData.tutorial_state',this.userData.userData.tutorial_state.und[0]]);
    Debugger.log(['this.userData.userData.tutorial_state',this.userData.userData.tutorial_state.und[0].value]);
      if( this.userData.userData.tutorial_state.und && Number(this.userData.userData.tutorial_state.und[0].value) === 0){
        let Modal = this.modalCtrl.create(WelcomeModalPage);
        Modal.present({});
        this.userData.userData.tutorial_state.und[0].value = "1";
        let cloneData = {
          uid:this.userData.userData.uid,
          field_tutorial_state: {und: [{value: "1"}]},
        }
        this.userData.updateUserd(cloneData).subscribe(
          (val)=>{
            Debugger.log(['update user tutorial state',val]);
          }, (response) => {
            Debugger.log(['error on update user tutorial state',response]);
          }
        );
        
    }
    this.userData.cargarCitas();
  }


  iniciarCita( cita:Citas ){
    let loader = this.loadingCtrl.create({
      content: "Iniciando Cita..."
    });
    let aux_doc = this.userData.getDoctorOFCita(cita);
    console.log("tryin to open cita progreso",cita);
    if(cita.checkState(UserDataProvider.STATE_ACTIVA) || cita.checkState(UserDataProvider.STATE_COBRO)){
      this.openProgreso(cita);
    }else{
      if(aux_doc.citaActiva){
        this.presentAlert("Ocupado","Este doctor esta ocupado con una cita Activa");
        return 0;
      }
    let alert = this.alertCtrl.create({
      title: "Iniciar Consulta",
      message: '¿Está seguro que desea colocar esta cita como Activa?',
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
            loader.present();
            this.userData.updateCitaState( cita , UserDataProvider.STATE_ACTIVA ).subscribe(
              (val)=>{
                this.userData.cargarCitas().subscribe(
                  (val)=>{
                    loader.dismiss();
                    this.openProgreso(cita);
                  },(response)=>{ loader.dismiss();}
                );
              },(response)=>{ loader.dismiss();});
          }
        }
      ]
    });
    alert.present();
  }
  }


  confirmarCita(cita:Citas){
    this.userData.updateCitaState( cita , UserDataProvider.STATE_CONFIRMADA ).subscribe((val)=>{
      this.userData.cargarCitas()
    });
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
  openRegister(){
    let Modal = this.modalCtrl.create(RegisterModalPage, undefined, { cssClass: "bigModal" });
    Modal.onDidDismiss(data => {});
    Modal.present({});
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

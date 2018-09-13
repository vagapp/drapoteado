
import { Injectable } from '@angular/core';
import { CitasDataProvider } from '../citas-data/citas-data';
import { AlertProvider } from '../alert/alert';
import { LoaderProvider } from '../loader/loader';
import { NotificationsManagerProvider } from '../notifications-manager/notifications-manager';
import { ModalController } from 'ionic-angular';
import { CitasManagerProvider } from '../citas-manager/citas-manager';
import { Citas } from '../user-data/citas';
import { UserDataProvider } from '../user-data/user-data';
import { DoctoresDataProvider } from '../doctores-data/doctores-data';
import { WsMessengerProvider } from '../ws-messenger/ws-messenger';
import { CitaProgressControllerProvider } from '../cita-progress-controller/cita-progress-controller';


/*
  Generated class for the CitasPresentatorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CitasPresentatorProvider {
  constructor(
    public userData: UserDataProvider,
    public citasManager: CitasManagerProvider,
    public notiMan: NotificationsManagerProvider,
    public alert: AlertProvider,
    public loader: LoaderProvider,
    public modalCtrl: ModalController,
    public wsMessenger: WsMessengerProvider,
    public progresSController: CitaProgressControllerProvider
  ) {

  }

  openNuevaCita(){
    let Modal = this.modalCtrl.create("NuevacitaModalPage", undefined, { cssClass: "nuevaCitaModal smallModal" });
    Modal.present({});
  }

  
  updateStatePop( cita ,state ){
    let aux_title = CitasDataProvider.getStateLabel(state);
    this.alert.chooseAlert(
      aux_title,
      `¿Está seguro que desea colocar esta cita como ${aux_title}?`,
      ()=>{this.updateStateRequest(cita,state);},
      ()=>{}
    );
    }
 
  async updateStateRequest ( cita, state ) {
    this.loader.presentLoader("Actualizando...");
    let state_res = await this.citasManager.updateCitaState(cita,state).toPromise();
    if(Number(state) === CitasDataProvider.STATE_CONFIRMADA && cita.doctor_playerid){  //crear notificacion para doctor a quien le confirmaron la cita
      this.notiMan.generateNotification([cita.data.field_cita_doctor.und[0]],`Cita Confirmada con ${cita.paciente} fecha: ${new Date(cita.data.field_datemsb['und'][0]['value'])}`,`cita-${cita.Nid}`);
    }
    if(Number(state) === CitasDataProvider.STATE_COBRO && cita.caja_playerid){ //cambiando a cita por cobrar
      this.notiMan.generateNotification([cita.data.field_cita_caja.und[0]],`La cita de de ${cita.paciente} esta en espera de cobro`,`cita-${cita.Nid}`);
    }
    this.wsMessenger.generateWSupdateMessage(cita);
    this.loader.dismissLoader();
  } 

  editCita( cita ){
    let Modal = this.modalCtrl.create("NuevacitaModalPage", { cita: cita }, { cssClass: "nuevaCitaModal smallModal" });
    Modal.present({});
  }

  openProgreso( cita: Citas){
    /*let Modal = this.modalCtrl.create("ProgresocitaModalPage", {cita : cita}, { cssClass: "smallModal progressModal" });
    Modal.present({});*/
    this.progresSController.openProgress(cita);
  }


  async iniciarCita( cita:Citas ){
    let aux_doc = this.citasManager.getDoctorOFCita(cita);
    console.log('doctor of cita is',aux_doc);
    if(cita.checkState(CitasDataProvider.STATE_ACTIVA) || cita.checkState(CitasDataProvider.STATE_COBRO)){
      this.openProgreso(cita);
    }else{
      if(DoctoresDataProvider.isDoctorBusy(aux_doc)){
        this.alert.presentAlert("Ocupado","Este doctor esta ocupado con una cita Activa");
      }else{
        this.loader.presentLoader('actualziando...');
          DoctoresDataProvider.setDoctorBusy(aux_doc,cita);
          await this.citasManager.updateCitaState( cita , CitasDataProvider.STATE_ACTIVA ).toPromise(); 
          this.wsMessenger.generateWSupdateMessage(cita);
          this.loader.dismissLoader(); 
        /*
      this.alert.chooseAlert(
        "Iniciar Consulta",
        '¿Está seguro que desea colocar esta cita como Activa?',
        async ()=>{ 
          this.loader.presentLoader('actualziando...');
          DoctoresDataProvider.setDoctorBusy(aux_doc,cita);
          await this.citasManager.updateCitaState( cita , CitasDataProvider.STATE_ACTIVA ).toPromise(); 
          this.wsMessenger.generateWSupdateMessage(cita);
          this.loader.dismissLoader(); },
        ()=>{}
      );
      */
    }
  }
  }

  async confirmarCita(cita:Citas){
    this.loader.presentLoader('confirmando cita...');
    let res =  await this.citasManager.updateCitaState( cita , CitasDataProvider.STATE_CONFIRMADA ).toPromise();
    console.log('confirmar cita res',res);
    if(res){
      this.notiMan.generateNotification([cita.data.field_cita_doctor.und[0]],`Cita Confirmada con ${cita.paciente} fecha: ${new Date(cita.data.field_datemsb['und'][0]['value'])}`,`cita-${cita.Nid}`);
      this.wsMessenger.generateWSupdateMessage(cita);
    }
      this.loader.dismissLoader();

  }

  delecitaCitaPop(cita:Citas){
    this.alert.chooseAlert(
      "Eliminar Cita",
      '¿Está seguro que desea eliminar esta cita?',
      ()=>{ this.deleteCita(cita) },
      ()=>{}
    );
  }

  async deleteCita( cita:Citas ){
   this.loader.presentLoader('Eliminando...');
   await this.citasManager.deleteCita( cita.data ).toPromise();
   this.wsMessenger.generateWSremoveCitaMessage(cita);
   this.loader.dismissLoader();
  }

  



}

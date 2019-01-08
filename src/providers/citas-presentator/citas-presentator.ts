
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
import { DateProvider } from '../date/date';


/*
  Generated class for the CitasPresentatorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CitasPresentatorProvider {
  dateFilterStart:number = 0;
  pacienteFilter:string = null;
  filteredCitas:boolean = false;
  editfinish:boolean = false;

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
    let saveDate = !this.progresSController.editfinish;
    console.log('editfinish is',saveDate);
    let state_res = await this.citasManager.updateCitaState(cita,state, saveDate).toPromise();
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
    console.log('state of cita',cita.checkState(CitasDataProvider.STATE_COBRO));
    if(cita.checkState(CitasDataProvider.STATE_FINALIZADA) || cita.checkState(CitasDataProvider.STATE_COBRO)){
      this.progresSController.editfinish = true;
      this.openProgreso(cita);
    }else{
    let Modal = this.modalCtrl.create("NuevacitaModalPage", { cita: cita }, { cssClass: "nuevaCitaModal smallModal" });
    Modal.present({});
    }
  }

  openProgreso( cita: Citas){
    /*let Modal = this.modalCtrl.create("ProgresocitaModalPage", {cita : cita}, { cssClass: "smallModal progressModal" });
    Modal.present({});*/
    console.log('opening progreso men');
    if(cita.checkState(CitasDataProvider.STATE_FINALIZADA)){
      console.log('tengo cositas aqui = ) ');
    this.progresSController.cobroEfectivo = cita.cobroEfectivo;
    this.progresSController.cobroCheque = cita.cobroCheque;
    this.progresSController.cobroTarjeta = cita.cobroTarjeta;
    this.progresSController.factura = cita.data.field_facturar.und[0].value;
    this.progresSController.factura_cantidad = cita.data.field_facturar_cantidad.und[0].value;
    }
    this.progresSController.openProgress(cita);
  }


  async iniciarCita( cita:Citas ){
    console.log('iniciando cita',cita)
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


  async desactivarCita(cita:Citas){
    let aux_doc = this.citasManager.getDoctorOFCita(cita);
    console.log('doctor of cita is',aux_doc);
    if(cita.checkState(CitasDataProvider.STATE_ACTIVA) ){
        this.loader.presentLoader('actualziando...');
          DoctoresDataProvider.setDoctorUnbusy(aux_doc);
          await this.citasManager.updateCitaState( cita , CitasDataProvider.STATE_CONFIRMADA).toPromise(); 
          this.wsMessenger.generateWSupdateMessage(cita);
          this.loader.dismissLoader(); 
    }
  }

  async desConfirmarCita(cita:Citas){
    if(cita.checkState(CitasDataProvider.STATE_CONFIRMADA) ){
        this.loader.presentLoader('actualziando...');
          await this.citasManager.updateCitaState( cita , CitasDataProvider.STATE_PENDIENTE).toPromise(); 
          this.wsMessenger.generateWSupdateMessage(cita);
          this.loader.dismissLoader(); 
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

  

filterChange(){
  console.log('this.dateFilterStart',this.dateFilterStart);
  //2019-01-08
  if(Number(this.dateFilterStart) != null && Number(this.dateFilterStart) !== 0){
  let date_Filter = DateProvider.dateWOffset(new Date(this.dateFilterStart));
  this.citasManager.citasData.customFilters = true;
  this.citasManager.citasData.startDateFilter = date_Filter.setHours(0,0,0,0);
  this.citasManager.citasData.endDateFilter = date_Filter.setHours(23,59,59,999);
  this.citasManager.citasData.defaultSort();
  this.filteredCitas = true;
  }
  if(this.pacienteFilter !== null){
    if(this.pacienteFilter === ''){ this.pacienteFilter = null; }
    this.citasManager.citasData.pacienteFilter = this.pacienteFilter;
    this.citasManager.citasData.defaultSort();
    this.filteredCitas = true;
  }
  console.log('this.dateFilterStart END',this.dateFilterStart);
  /*this.loader.presentLoader('cargando...');
  console.log("changing filter",this.dateFilterStart);
  let aux_fdate = DateProvider.dateWOffset(new Date(this.dateFilterStart));
  console.log(DateProvider.getStartEndOFDate(new Date()));
  console.log(DateProvider.getStartEndOFDate(aux_fdate));
  this.filteredResults = true;
  let dateRange = DateProvider.getStartEndOFDate(aux_fdate);
  this.citasManager.citasData.citas = new Array();
  this.citasManager.requestCitas(dateRange.start.getTime(), dateRange.end.getTime()).subscribe(
    (val)=>{
      this.loader.dismissLoader();
    }
  );*/
}

removeFilter(){
this.citasManager.citasData.resetDateFilters();
this.dateFilterStart = null;
this.filteredCitas = false;
this.citasManager.citasData.defaultSort();
}

}


import { Injectable } from '@angular/core';
import { reportes } from '../user-data/reportes';
import { ReporteCitasProvider } from '../reporte-citas/reporte-citas';
import { Citas } from '../user-data/citas';
import { LoaderProvider } from '../loader/loader';
import { AlertProvider } from '../alert/alert';
import { CitasDataProvider } from '../citas-data/citas-data';
import { DateProvider } from '../date/date';
import { UserDataProvider } from '../user-data/user-data';
import { ReporteServiciosProvider } from '../reporte-servicios/reporte-servicios';
import { ReportesDataProvider } from '../reportes-data/reportes-data';
import { ModalController, Platform } from 'ionic-angular';
import { DoctoresDataProvider } from '../doctores-data/doctores-data';
import { SubusersDataProvider } from '../subusers-data/subusers-data';
import { Subject } from 'rxjs/Subject';
import { PermissionsProvider } from '../permissions/permissions';
import { SubscriptionDataProvider } from '../subscription-data/subscription-data';
import { BaseUrlProvider } from '../base-url/base-url';
import { CitasManagerProvider } from '../citas-manager/citas-manager';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

/*
  Generated class for the ReportPresentatorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReportPresentatorProvider {
  static REPORT_TICKET = 2;
  static REPORT_COMPLETE = 1;
  static REPORT_GRUPAL = 3;
  static REPORT_ADEUDO = 4;
  get REPORT_TICKET(){ return ReportPresentatorProvider.REPORT_TICKET;}
  get REPORT_COMPLETE(){ return ReportPresentatorProvider.REPORT_COMPLETE;}
  get REPORT_GRUPAL(){ return ReportPresentatorProvider.REPORT_GRUPAL;}
  get REPORT_ADEUDO(){ return ReportPresentatorProvider.REPORT_ADEUDO;}

  reportisloading:boolean=false;
  reportSubject:Subject<any> = new Subject();
  actualReport:reportes = null;
  type:number = 1;
  docLoaded:boolean = false;
  docuid:number = null;
  docName:string = null;
  docAlias:string = null;
  noCitas:number;
  noShow:number;
  noCancel:number;
  noAdeudosR:number;
  duracionTotalMs:number;
  duracionTotalStr:string;
  //totales normales
  total:number;
  totalefectivo:number;
	totalTarjeta:number;
  totalCheques:number;
  totalBancaria:number;
	totalcuentas:number;
  totalAdeudo:number;
  costoTotal:number;
  facturadoTotal:number = 0;
  //totales de otros
  totalOut:number;
  totalefectivoOut:number;
	totalTarjetaOut:number;
  totalChequesOut:number;
  totalBancariaOut:number;
	totalcuentasOut:number;
  totalAdeudoOut:number;
  costoTotalOut:number;
  facturadoTotalOut:number = 0;
  //totales de Doctor
  totalDoc:number = 0;
  totalefectivoDoc:number;
	totalTarjetaDoc:number;
  totalChequesDoc:number;
  totalBancariaDoc:number;
	totalcuentasDoc:number;
  totalAdeudoDoc:number;
  costoTotalDoc:number;

  facturadoTotalDoc:number = 0;
  AdeudosCobrados:number; //total de adeudos del estado adeudo cobrados en este dia. (reporte)
  caja:number;
	cajaefectivo:number;
	cajaTarjeta:number;
  cajaCheques:number;
  cajaBancaria:number;
	cajacuentas:number;
  cajaAdeudo:number;

  onconsulta:number = 0;


  chosenDate:Date = new Date();


  get pendiente():number{
    return Number(this.cajaAdeudo ? this.cajaAdeudo: 0 )+Number(this.cajacuentas ? this.cajacuentas: 0);
  }

  get isgroup():boolean{  return  Number(this.type) === Number(ReportPresentatorProvider.REPORT_GRUPAL); }
  get isAdeudo():boolean{ 
    return  Number(this.type) === Number(ReportPresentatorProvider.REPORT_ADEUDO); 
  }
  get isGroup(){
    return  Number(this.type) === Number(ReportPresentatorProvider.REPORT_GRUPAL); 
  }



  serviciosResume:{
    nid:number,
    title:string,
    costo:number,
    times:number
  }[];



  constructor(
    public reporteCitas: ReporteCitasProvider,
    public reporteServicios: ReporteServiciosProvider,
    public loader: LoaderProvider,
    public alert: AlertProvider,
    public userData: UserDataProvider,
    public docData: DoctoresDataProvider,
    public subUserData: SubusersDataProvider,
    public reportesData: ReportesDataProvider,
    public dp: DateProvider,
    public modalCtrl: ModalController,
    public permissions: PermissionsProvider,
    public subsData: SubscriptionDataProvider,
    public bu: BaseUrlProvider,
    public cm: CitasManagerProvider,
    private transfer: FileTransfer,
    private file: File,
    public platform: Platform
  ) {
    
  }


  async openReportModal( report:reportes = null){
    this.openReporte(report);
  }

 async openTicket(report:reportes = null){
  this.type = ReportPresentatorProvider.REPORT_TICKET;
  this.openReporte(report);
}

async openReporte( report:reportes = null){
  this.loader.presentLoader('Cargando ...');
  await this.setReport(report);
  await this.loadReporte();
  let  load = "ReporteModalPage";
  let modalClass = 'bigModal'
  if(Number(this.type) === ReportPresentatorProvider.REPORT_TICKET){ load = "ReporteTicketPage"; modalClass = 'verysmallModal'; }
  let Modal = this.modalCtrl.create(load, undefined, { cssClass: `${modalClass} reportModal` });
  this.loader.dismissLoader();
  Modal.present({});
}

async loadReportNM(loadReport:boolean = true){
  this.loader.presentLoader('Cargando ...');
  await this.setReport();
  if(this.isgroup){
    this.docuid = 0;
  }
  if(loadReport) await this.loadReporte();
  this.loader.dismissLoader();
  this.reportisloading = true;
  this.reportSubject.next(1);
}


exportExcel(){
  let gwho = this.permissions.checkUserPermission([UserDataProvider.TIPO_DOCTOR]) ?  this.isGroup ? this.subsData.subscription.field_doctores : [this.userData.userData.uid] : this.docData.doctoresIDs;
  let report_excel = this.bu.backendUrl+`endpoint_Reporteexceldev.php?r=${this.actualReport.dateStartUTMS}-${this.actualReport.dateEndUTMS}${this.docLoaded && this.docuid!==null ? '&doc='+this.docuid : ''}${'&ur='+this.userData.userData.field_tipo_de_usuario['und'][0]['value']}${this.isAdeudo ? '&adeudo=1' : '&adeudo=0'}${this.isGroup ? '&group=1&gdocs='+gwho.join(',') : '&gdocs='+gwho.join(',')}`;
  if(this.platform.is('cordova')){
    const fileTransfer: FileTransferObject = this.transfer.create();
    var savingPath = this.platform.is('ios') ? this.file.documentsDirectory : this.file.externalRootDirectory;
    var msg = this.platform.is('ios') ? 'Se ha almacenado en tus documentos.' : "Se ha guardado en tu almacenamiento interno o tu tarjega SD.";
    var d = new Date();
    var n = d.getTime();
    this.loader.presentLoader('Estamos generando tu reporte.');
    fileTransfer.download(report_excel, savingPath + 'Tual Reporte - '+n+'.xlsx').then((entry) => {
      this.loader.dismissLoader();
      this.alert.presentAlert('Reporte',"Tu reporte se ha descargado exitosamente.<br>"+msg);
    }, (error) => {
      console.log(error);
      this.loader.dismissLoader();
      this.alert.presentAlert('Reporte',"Tuvimos un problema generando tu reporte.");
    });
  }else{
    window.open(report_excel, '_blank');
  }
}

async openReportGenerate( report:reportes = null ){
  this.loader.presentLoader('Cargando ...');
  await this.setReport(report);
  if(this.permissions.checkUserPermission([this.userData.TIPO_DOCTOR])){
    this.docuid = this.userData.userData.uid;
  }else{
    this.docuid= 0;
  }
  let Modal = this.modalCtrl.create("ReporteGeneratePage", undefined, { cssClass: "smallModal nuevoreporteModal" });
  this.loader.dismissLoader();
  Modal.present({});
}
  

  async setReport(report:reportes = null){
    let aux_dates = DateProvider.getStartEndOFDate(this.chosenDate);
    let aux_displayable = DateProvider.getDisplayableDates(this.chosenDate).date;
    const uax_treport = new reportes();
      uax_treport.author_uid = this.userData.userData.uid;
      uax_treport.doctores = this.docData.doctoresIDs;
      uax_treport.dateStartUTMS = aux_dates.start.getTime();
      uax_treport.dateEndUTMS = aux_dates.end.getTime();
      uax_treport.dateString = aux_displayable;
      if(this.permissions.checkUserPermission([UserDataProvider.TIPO_CAJA])){
        uax_treport.cajas = [this.userData.userData.uid];
      }
      uax_treport.doctores = new Array();
      this.docData.doctores.forEach((doc)=>{
      uax_treport.doctores.push(Number(doc.Uid));
      });
      this.actualReport = uax_treport;
  }

  async loadReporte(){
    switch( Number(this.type) ){
      case Number(this.REPORT_GRUPAL): 
      await this.loadReportCitasGrupal();
    await this.loadReportServiciosGrupal();
    this.evaluateCitas();
      break;
      case Number(this.REPORT_ADEUDO): 
      await this.loadReportCitasAdeudo();
      await this.loadReportServiciosAdeudo();
    this.evaluateCitas();
      break;
      default:
      await this.loadReportCitas();
    await this.loadReportServicios();
    this.evaluateCitas();
    }
  }

  async loadReportCitas(){
    if(Number(this.docuid) === 0){ this.docuid = null; }
    if(this.docuid !== null ){
      const aux_doc = this.docData.getDoctorByUid(this.docuid);
      this.docLoaded = true;
      this.docName = aux_doc.field_alias;
      this.docAlias = aux_doc.field_alias;
    }
    await this.reporteCitas.reporteLoadCitas(this.actualReport, this.docuid);
  }

  async loadReportCitasGrupal(){
    this.docuid = null;
    let who = this.permissions.checkUserPermission([UserDataProvider.TIPO_DOCTOR]) ?  this.subsData.subscription.field_doctores : this.docData.doctoresIDs;
    await this.reporteCitas.reporteLoadCitasGrupales(this.actualReport,who);
  }

  async loadReportCitasAdeudo(){
    this.docuid = null;
    await this.reporteCitas.reporteLoadCitasAdeudo(this.actualReport, this.docData.doctoresIDs);
  }

  

  async loadReportServicios(){
    this.serviciosResume = this.reporteServicios.getServiciosResume(this.actualReport);
  }

  async loadReportServiciosGrupal(){
    this.serviciosResume = this.reporteServicios.getServiciosResume(this.actualReport);
    this.serviciosResume = this.serviciosResume.sort((a,b)=>{ 
      return a.title.localeCompare(b.title);
    });
  }

  async loadReportServiciosAdeudo(){
    this.serviciosResume = this.reporteServicios.getServiciosResume(this.actualReport);
    this.serviciosResume = this.serviciosResume.sort((a,b)=>{ 
      return a.title.localeCompare(b.title);
    });
  }

  updateCita( cita:Citas ){
    if(this.actualReport){
    this.reporteCitas.checkForCitaUpdate(this.actualReport,cita);
    this.evaluateCitas();
  }
  }

  deleteCita( cita:Citas ){
    if(this.actualReport){
    this.actualReport.citas.filter((citas)=>{ return citas.Nid !== cita.Nid});
    this.evaluateCitas();
    }
  }

  /**
   * this method evaluates all of the citas of the report and generates the presented data.
  */
  evaluateCitas(){
    this.resetVars();
    this.noCitas= 0;
    this.noAdeudosR = 0;
    //this.noCitas = this.actualReport.citas.length;
    this.noCancel = this.actualReport.citas.filter((citas)=>{return citas.checkState(CitasDataProvider.STATE_CANCELADA)} ).length;
    if(isNaN(this.noCancel)) this.noCancel = 0;
    this.calcularCitasPorCobrar();
    let filteredCitas = CitasDataProvider.sortByDate(this.getFilteredCitasShow());
    for(let cita of filteredCitas){
      if(!cita.checkState(CitasDataProvider.STATE_CANCELADA)){ // si no esta cancelada se interpretan los totales.
      //let aux_costo = Number(cita.costo ? cita.costo : 0 );
      let doc = this.cm.getDoctorOFCita(cita);
      //console.log('trailCD1d',doc);
      cita.data.doctor_alias = doc.field_alias;
      let aux_costo = 0;
      cita.reporteServicios.forEach((rs)=>{
        aux_costo += Number(rs.costo);
      });
      cita.reporteCosto = Number(aux_costo);
      let aux_duracion = Number(cita.duracionMs ? cita.duracionMs : 0 );
    
      if(this.isAdeudo){
        
        cita.setPagosFecha(0,0,this.userData.userData.uid);
        cita.setEdicionesFechas(0,0);
        this.cajaAdeudo += aux_costo - cita.pagosTotal;
        
        this.costoTotal += aux_costo;
        this.total += cita.pagosTotal;
      }else{
      cita.setPagosFecha(this.actualReport.dateStartUTMS,this.actualReport.dateEndUTMS,this.userData.userData.uid); 
      cita.setEdicionesFechas(this.actualReport.dateStartUTMS,this.actualReport.dateEndUTMS);
      if(cita.originactivereport){ //esta cita fue originada el dia de este reporte y sus totales se manejan normalmente.
       
        this.noCitas++;
        this.duracionTotalMs += aux_duracion;
        this.costoTotal += aux_costo;
        this.total += cita.pagosTotal;
        this.totalefectivo += cita.pagosEfectivo;
        this.totalTarjeta += cita.pagosTarjeta;
        this.totalCheques += cita.pagosCheque;
        this.totalBancaria += cita.pagosBancaria;
        this.facturadoTotal += cita.pagosFacturado;
        this.totalOut += cita.pagosTotalOut;
        this.totalefectivoOut += cita.pagosEfectivoOut;
        this.totalTarjetaOut += cita.pagosTarjetaOut;
        this.totalChequesOut += cita.pagosChequeOut;
        this.totalBancariaOut += cita.pagosBancariaOut;
        this.facturadoTotalOut += cita.pagosFacturadoOut;
        this.totalDoc   += cita.pagosTotalDoc;
        this.totalefectivoDoc += cita.pagosEfectivoDoc;
        this.totalTarjetaDoc += cita.pagosTarjetaDoc;
        this.totalChequesDoc += cita.pagosChequeDoc;
        this.totalBancariaOut += cita.pagosBancariaOut;
        this.facturadoTotalDoc += cita.pagosFacturadoDoc;
        if(aux_costo > cita.pagosTotal && !cita.checkState(CitasDataProvider.STATE_COBRO) ){ this.cajaAdeudo += aux_costo - cita.pagosTotal;   }
      }else{ //esta cita aparece en este reporte porque se abono este dia, los totales se toman en cuenta diferente.
        
        this.noAdeudosR++;
        this.total += cita.pagosTotal;
        this.totalefectivo += cita.pagosEfectivo;
        this.totalTarjeta += cita.pagosTarjeta;
        this.totalCheques += cita.pagosCheque;
        this.totalBancaria += cita.pagosBancaria;
        this.facturadoTotal += cita.pagosFacturado;
        this.totalAdeudo += cita.pagosTotal;
        this.totalOut += cita.pagosTotalOut;
        this.totalefectivoOut += cita.pagosEfectivoOut;
        this.totalTarjetaOut += cita.pagosTarjetaOut;
        this.totalChequesOut += cita.pagosChequeOut;
        this.totalBancariaOut += cita.pagosBancariaOut;
        this.facturadoTotalOut += cita.pagosFacturadoOut;
        this.totalDoc   += cita.pagosTotalDoc;
        this.totalefectivoDoc += cita.pagosEfectivoDoc;
        this.totalTarjetaDoc += cita.pagosTarjetaDoc;
        this.totalBancariaDoc += cita.pagosBancariaDoc;
        this.totalChequesDoc += cita.pagosChequeDoc;
        this.facturadoTotalDoc += cita.pagosFacturadoDoc;
      }
    }
    }else{
      cita.setEdicionesFechas(this.actualReport.dateStartUTMS,this.actualReport.dateEndUTMS);
    }
  }
    this.duracionTotalStr = DateProvider.getDateDifText(this.duracionTotalMs);
    this.actualReport.citas = this.actualReport.citas.sort((a,b)=>{
      return b.ultimaFechaPago - a.ultimaFechaPago; 
    });
  }

  calcularCitasPorCobrar(){
    let citasPorCobrar = this.actualReport.citas.filter((citas)=>{
      return citas.checkState(CitasDataProvider.STATE_COBRO);
    }); 
    this.cajacuentas = 0;
    for(let cita of citasPorCobrar){
      if(cita.costo)
      this.cajacuentas += cita.costo;
    }
  }

  /**
   * this methos filter the report citas to get only the citas states that we want on the report.
  */
  getFilteredCitasShow(){
    return this.actualReport.citas.filter(
      (citas)=>{
        return (
          true
        )
      });
  }

  resetVars(){
    this.duracionTotalMs = 0;
    this.duracionTotalStr="00:00";
    this.noCitas = 0;
    this.noShow = 0;
    this.noCancel = 0;
    this.total = 0;
    this.totalefectivo = 0;
    this.totalTarjeta = 0;
    this.totalCheques = 0;
    this.totalBancaria = 0;
    this.totalcuentas = 0;
    this.totalAdeudo = 0;
    this.costoTotal = 0;
    this.caja = 0;
    this.cajaefectivo = 0;
    this.cajaTarjeta = 0;
    this.cajaCheques = 0;
    this.cajaBancaria = 0;
    this.cajacuentas = 0;
    this.cajaAdeudo = 0;
    this.facturadoTotal = 0;
    this.AdeudosCobrados = 0;
    this.totalOut = 0;
    this.totalefectivoOut = 0;
    this.totalTarjetaOut = 0;
    this.totalChequesOut = 0;
    this.totalBancariaOut = 0;
    this.totalcuentasOut = 0;
    this.totalAdeudoOut = 0;
    this.costoTotalOut = 0;
    this.facturadoTotalOut = 0;
    this.totalDoc = 0;
    this.totalefectivoDoc = 0;
    this.totalTarjetaDoc = 0;
    this.totalChequesDoc = 0;
    this.totalBancariaDoc = 0;
    this.totalcuentasDoc = 0;
    this.totalAdeudoDoc = 0;
    this.costoTotalDoc = 0;
    this.facturadoTotalDoc = 0;
  }







  
  

}

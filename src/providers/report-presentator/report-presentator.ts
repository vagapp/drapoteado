
import { Injectable } from '@angular/core';
import { reportes } from '../user-data/reportes';
import { ReporteCitasProvider } from '../reporte-citas/reporte-citas';
import { Citas } from '../user-data/citas';
import { LoaderProvider } from '../loader/loader';
import { CitasDataProvider } from '../citas-data/citas-data';
import { DateProvider } from '../date/date';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { UserDataProvider } from '../user-data/user-data';
import { ReporteServiciosProvider } from '../reporte-servicios/reporte-servicios';
import { ReportesDataProvider } from '../reportes-data/reportes-data';
import { ReportesManagerProvider } from '../reportes-manager/reportes-manager';
import { ModalController } from 'ionic-angular';

/*
  Generated class for the ReportPresentatorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReportPresentatorProvider {
  static REPORT_TICKET = 2;
  static REPORT_COMPLETE = 1;
  get REPORT_TICKET(){ return ReportPresentatorProvider.REPORT_TICKET;}
  get REPORT_COMPLETE(){ return ReportPresentatorProvider.REPORT_COMPLETE;}
actualReport:reportes = null;
type:number = 1;
docuid:number = null;

  noCitas:number;
  noShow:number;
  noCancel:number;
  duracionTotalMs:number;
  duracionTotalStr:string;
  
  total:number;
  totalefectivo:number;
	totalTarjeta:number;
	totalCheques:number;
	totalcuentas:number;
  totalAdeudo:number;
  costoTotal:number;

  facturadoTotal:number = 0;

  caja:number;
	cajaefectivo:number;
	cajaTarjeta:number;
	cajaCheques:number;
	cajacuentas:number;
  cajaAdeudo:number;

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
    public userData: UserDataProvider,
    public reportesData: ReportesDataProvider,
    public reportesManager: ReportesManagerProvider,
    public modalCtrl: ModalController
  ) {
    
  }

  

  async openReportModal( report:reportes = null){
    /*this.loader.presentLoader('Cargando Reporte ...');
    await this.setReport(report);
    await this.loadReporte();
    let Modal = this.modalCtrl.create("ReporteModalPage", undefined, { cssClass: "bigModal reportModal" });
    this.loader.dismissLoader();
    Modal.present({});*/
    this.openReporte(report);
  }

 async openTicket(report:reportes = null){
  /*this.loader.presentLoader('Cargando Reporte ...');
  await this.setReport(report);
  await this.loadReporte();
  let Modal = this.modalCtrl.create("ReporteTicketPage", undefined, { cssClass: "verysmallModal reportModal" });
  this.loader.dismissLoader();
  Modal.present({});*/
  this.type = ReportPresentatorProvider.REPORT_TICKET;
  this.openReporte(report);
}

async openReporte( report:reportes = null){
  console.log('opening reporte', this.type);
  this.loader.presentLoader('Cargando Reporte ...');
  await this.setReport(report);
  await this.loadReporte();
  let  load = "ReporteModalPage";
  let modalClass = 'bigModal'
  if(Number(this.type) === ReportPresentatorProvider.REPORT_TICKET){ load = "ReporteTicketPage"; modalClass = 'verysmallModal'; }
  let Modal = this.modalCtrl.create(load, undefined, { cssClass: `${modalClass} reportModal` });
  this.loader.dismissLoader();
  Modal.present({});

}

async openReportGenerate( report:reportes = null ){
  this.loader.presentLoader('Cargando Reporte ...');
  await this.setReport(report);
  let Modal = this.modalCtrl.create("ReporteGeneratePage", undefined, { cssClass: "smallModal nuevoreporteModal" });
  this.loader.dismissLoader();
  Modal.present({});
}
  

  async setReport(report:reportes = null){
    if(report){this.actualReport = report;
    }else{
      if(!this.reportesData.todayReport){
        await this.reportesManager.cargarListaReportes();
      }
      this.actualReport = this.reportesData.todayReport;
    }
  }

  async loadReporte(){
    await this.loadReportCitas();
    await this.loadReportServicios();
    this.evaluateCitas();
  }

  async loadReportCitas(){
    if(Number(this.docuid) === 0){ this.docuid = null; }
    await this.reporteCitas.reporteLoadCitas(this.actualReport, this.docuid);
  }

  async loadReportServicios(){
    this.serviciosResume = this.reporteServicios.getServiciosResume(this.actualReport);
  }
 
  updateCita( cita:Citas ){
    console.log('here we update a cita when it is updated w a socket call');
    if(this.actualReport){
    this.reporteCitas.checkForCitaUpdate(this.actualReport,cita);
    this.evaluateCitas();
  }
  }

  deleteCita( cita:Citas ){
    console.log('delete citas from socket');
    if(this.actualReport){
    this.actualReport.citas.filter((citas)=>{ return citas.Nid !== cita.Nid});
    this.evaluateCitas();
    }
  }


  /**
   * this method evaluates all of the citas of the report and generates the presented data.
  */
  evaluateCitas(){
    console.log('evaluating citas of actual report');
    this.resetVars();
    console.log('citas en evaluate citas report', this.actualReport.citas);
    this.noCitas = this.actualReport.citas.length;
    this.noCancel = this.actualReport.citas.filter((citas)=>{return citas.checkState(CitasDataProvider.STATE_CANCELADA)} ).length;
    this.calcularCitasPorCobrar();
    let filteredCitas = CitasDataProvider.sortByDate(this.getFilteredCitasShow());
    for(let cita of filteredCitas){
      if(cita.duracionMs) this.duracionTotalMs += cita.duracionMs;
      if(cita.costo) this.costoTotal += cita.costo;
      if(cita.cobro) this.total+= cita.cobro;
      if(cita.costo && cita.cobro && cita.costo > cita.cobro){ this.cajaAdeudo += cita.costo - cita.cobro; }
      if(cita.cobroEfectivo) this.totalefectivo+=cita.cobroEfectivo;
	    if(cita.cobroTarjeta) this.totalTarjeta+=cita.cobroTarjeta;
      if(cita.cobroCheque) this.totalCheques+=cita.cobroCheque;
      console.log('cita evaluada',cita);
      if(cita.data.field_facturar.und && cita.data.field_facturar.und[0].value) this.facturadoTotal += Number(cita.data.field_facturar_cantidad.und[0].value);
    }
    console.log('tota facturar es ',this.facturadoTotal);
    this.duracionTotalStr = DateProvider.getDateDifText(this.duracionTotalMs);
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
          !citas.checkState(CitasDataProvider.STATE_CANCELADA) 
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
    this.totalcuentas = 0;
    this.totalAdeudo = 0;
    this.costoTotal = 0;
    this.caja = 0;
    this.cajaefectivo = 0;
    this.cajaTarjeta = 0;
    this.cajaCheques = 0;
    this.cajacuentas = 0;
    this.cajaAdeudo = 0;
    this.facturadoTotal = 0;
  }




  generatePDF(){
    let logodataurl = `data:image/jpeg;base64,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`;
    let doc = new jsPDF('p', 'pt');
    doc.addImage(logodataurl, 'JPEG', 50, 20,80, 30);
    doc.setFontSize(12);
    doc.text(50, 80, `Reporte a la fecha de ${this.actualReport.dateString}`);
    doc.text(50, 100, `Generado por Usuario ${this.userData.userData.name}`);
    let columns = new Array();
    let rows = new Array();
    this.actualReport.citas.forEach(cita => {
      columns = new Array();
      rows = new Array();
      /**IMPRIMIENDO CITA**/
      columns.push({title: "ID", dataKey: "id"});
      columns.push({title: "Paciente", dataKey: "Paciente"});
      columns.push({title: "Doctor", dataKey: "Doctor"});
      columns.push({title: "Servicio", dataKey: "Servicio"});
      columns.push({title: "Costo", dataKey: "Costo"});
      rows.push( {
        "id": `${cita.Nid}`, 
        "Paciente": `${cita.paciente}`, 
        "Doctor": `${cita.doctor_name}/ ${cita.doctor_alias}`, 
        "Servicio": ``,
        "Costo": ``} );
        cita.reporteServicios.forEach(servicio => {
          rows.push( {
            "id": ``, 
            "Paciente": ``, 
            "Doctor": ``, 
            "Servicio": `${servicio.title}`,
            "Costo": `${servicio.costo}`} );
          });

        rows.push( {
          "id": ``, 
          "Paciente": ``, 
          "Doctor": ``, 
          "Servicio": `Total`,
          "Costo": `${cita.costo}`} );
          this.printtable(doc,columns,rows,60+60);
          /**IMPRIMIENDO  TOTALES DE CITA**/
          columns = new Array();
          rows = new Array();
          columns.push({title: "Totales", dataKey: "Totales"});
          columns.push({title: "Caja", dataKey: "Caja"});
          columns.push({title: "Efectivo", dataKey: "Efectivo"});
          columns.push({title: "Tarjeta", dataKey: "Tarjeta"});
          columns.push({title: "Total", dataKey: "Total"});
          rows.push( {
            "Totales": `iD ${cita.Nid}`, 
            "Caja": `${cita.cobroEfectivo}`, 
            "Efectivo": `${cita.cobroTarjeta}`, 
            "Tarjeta": `${cita.cobroCheque}`,
            "Total": `${cita.cobro}`} );
            this.printtable(doc,columns,rows,2);
      });
      /**IMPRIMIENDO  ESTADISTICAS**/
      columns = new Array();
      rows = new Array();
      columns.push({title: "noCitas", dataKey: "noCitas"});
      columns.push({title: "noCancel", dataKey: "noCancel"});
      columns.push({title: "noShow", dataKey: "noShow"});
      columns.push({title: "Duracion", dataKey: "Duracion"});
      rows.push( {
        "noCitas": `${this.noCitas}`, 
        "noCancel": `${this.noCancel}`, 
        "noShow": `${this.noShow  }`, 
        "Duracion": `${this.duracionTotalStr}`});
      this.printtable(doc,columns,rows,20);
      /**IMPRIMIENDO  GRANDTOTALES**/
      columns = new Array();
      rows = new Array();
      columns.push({title: "", dataKey: "titulo"});
      columns.push({title: "Efectivo", dataKey: "Efectivo"});
      columns.push({title: "Tarjeta", dataKey: "Tarjeta"});
      columns.push({title: "Cheques", dataKey: "Cheques"});
      columns.push({title: "Total", dataKey: "Total"});
      rows.push( {
        "titulo": `Cuentas`, 
        "Efectivo": ``, 
        "Tarjeta": ``, 
        "Cheques": ``,
        "Total": `${this.costoTotal}`});
        rows.push( {
          "titulo": `Caja`, 
          "Efectivo": `${this.totalefectivo}`, 
          "Tarjeta": `${this.totalTarjeta}`, 
          "Cheques": `${this.totalCheques}`,
          "Total": `${this.total}`});
      this.printtable(doc,columns,rows,20);
    doc.save(`Reporte${this.actualReport.dateString}.pdf`);
    doc.autoTable.previous = 0;
  }

  printtable( doc ,columns, rows , margintop){
    doc.autoTable(columns, rows, {
      startY : doc.autoTableEndPosY() + margintop,
      pageBreak: 'auto',
      styles: {fillColor: [200, 200, 200]},
  });
  }



  
  

}

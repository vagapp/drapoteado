import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { reportes } from '../../providers/user-data/reportes';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { ReportesManagerProvider } from '../../providers/reportes-manager/reportes-manager';
import { ReportesDataProvider } from '../../providers/reportes-data/reportes-data';
import { LoaderProvider } from '../../providers/loader/loader';
import { AlertProvider } from '../../providers/alert/alert';
import { ReportPresentatorProvider } from '../../providers/report-presentator/report-presentator';
//import { Debugger } from '../../providers/user-data/debugger';


/**
 * Generated class for the ReportesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reportes',
  templateUrl: 'reportes.html',
})
export class ReportesPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
     public modalCtrl: ModalController,
    public userData: UserDataProvider,
    public reportesMan: ReportesManagerProvider,
    public reportesData: ReportesDataProvider,
    public loader: LoaderProvider,
    public alert: AlertProvider,
    public reportPresentator: ReportPresentatorProvider
    ) {
  }

  async ionViewDidLoad() {
    //console.log('ionViewDidLoad ReportesPage');
    this.loader.presentLoader('cargando ...');
   // await this.reportesMan.cargarListaReportes();
    this.loader.dismissLoader();
    //Debugger.log(["reportes carfados",this.userData.reportes]);
  }

  openNuevoreporte(report:reportes){
    console.log('openingnuevoreporte');
   /* let Modal = this.modalCtrl.create("NuevoreporteModalPage", undefined, { cssClass: "smallModal nuevoreporteModal" });
    Modal.present({});*/
    //this.openNuevoreporteNoModal();
    this.reportPresentator.openReportGenerate(report);
  }
  
  openReportModal( report:reportes ){
    this.reportPresentator.openReportModal(report);
    //this.openReportNoModal();
    /*let Modal = this.modalCtrl.create("ReporteModalPage", {reporte:report}, { cssClass: "bigModal reportModal" });
    Modal.present({});*/
  }

  openNuevoreporteNoModal(){
    this.reportPresentator.loadReportNM().then(()=>{
      console.log('report loaded');
    });
  }

  openReportNoModal(){
    this.reportPresentator.loadReportNM().then(()=>{
      console.log('report loaded');
    });
  }

  openTicket(report:reportes){
    this.reportPresentator.openTicket(report);
  }

  elimiarReporte( report:reportes ){
    this.alert.chooseAlert(
      '',
      `¿Está seguro que desea eliminar este reporte?`,
      async ()=>{
        this.loader.presentLoader('eliminando ...');
        //let val = await this.reportesMan.deleteReport(report).toPromise();
        this.loader.dismissLoader();
      },
      ()=>{}
    );
    /*
    let alert = this.alertCtrl.create({
      title: 'eliminar reporte',
      message: `¿Está seguro que desea eliminar este reporte?`,
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
            let loader = this.loadingCtrl.create({
              content: "Eliminando..."
            });
            loader.present();
            this.reportesMan.deleteReport(report).subscribe(
              (val) => {
                this.reportesMan.cargarListaReportes();
              },
              (response)=>{
              }
            );
          }
        }
      ]
    });
    alert.present();
   */
  }

  openReporteAdeudos(){
    console.log('openReportNoModal',this.reportPresentator.docuid, this.reportPresentator.type);
    this.reportPresentator.setReport();
    this.reportPresentator.type = ReportPresentatorProvider.REPORT_ADEUDO;
    this.reportPresentator.loadReportNM().then(()=>{
    });
  }

}

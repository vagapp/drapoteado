import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
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
    this.loader.presentLoader('cargando reportes ...');
    await this.reportesMan.cargarListaReportes();
    this.loader.dismissLoader();
    //Debugger.log(["reportes carfados",this.userData.reportes]);
  }

  openNuevoreporte(){
    let Modal = this.modalCtrl.create("NuevoreporteModalPage", undefined, { cssClass: "smallModal nuevoreporteModal" });
    Modal.present({});
  }
  
  openReportModal( report:reportes ){
    this.reportPresentator.openReportModal(report);
    /*let Modal = this.modalCtrl.create("ReporteModalPage", {reporte:report}, { cssClass: "bigModal reportModal" });
    Modal.present({});*/
  }

  elimiarReporte( report:reportes ){
    this.alert.chooseAlert(
      'eliminar reporte',
      `¿Está seguro que desea eliminar este reporte?`,
      async ()=>{
        this.loader.presentLoader('eliminando ...');
        let val = await this.reportesMan.deleteReport(report).toPromise();
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

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { reportes } from '../../providers/user-data/reportes';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { ReportesManagerProvider } from '../../providers/reportes-manager/reportes-manager';
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
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public reportesMan: ReportesManagerProvider
    ) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ReportesPage');
    this.reportesMan.cargarListaReportes();
    //Debugger.log(["reportes carfados",this.userData.reportes]);
  }

  openNuevoreporte(){
    let Modal = this.modalCtrl.create("NuevoreporteModalPage", undefined, { cssClass: "smallModal nuevoreporteModal" });
    Modal.present({});
  }
  
  openReportModal( report:reportes ){
    let Modal = this.modalCtrl.create("ReporteModalPage", {reporte:report}, { cssClass: "bigModal reportModal" });
    Modal.present({});
  }

  elimiarReporte( report:reportes ){
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
   
  }

}

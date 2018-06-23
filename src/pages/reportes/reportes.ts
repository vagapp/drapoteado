import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NuevoreporteModalPage } from '../nuevoreporte-modal/nuevoreporte-modal';
import { ModalController } from 'ionic-angular';
import { reportes } from '../../providers/user-data/reportes';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { Debugger } from '../../providers/user-data/debugger';
import { ReporteModalPage } from '../reporte-modal/reporte-modal';

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
    private alertCtrl: AlertController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportesPage');
    this.userData.cargarListaReportes();
    Debugger.log(["reportes carfados",this.userData.reportes]);
  }

  openNuevoreporte(){
    let Modal = this.modalCtrl.create(NuevoreporteModalPage, undefined, { cssClass: "smallModal nuevoreporteModal" });
    Modal.present({});
  }
  
  openReportModal( report:reportes ){
    let Modal = this.modalCtrl.create(ReporteModalPage, {reporte:report}, { cssClass: "bigModal reportModal" });
    Modal.present({});
  }

  elimiarReporte( report:reportes ){
    let alert = this.alertCtrl.create({
      title: 'eliminar reporte',
      message: `¿esta seguro que desea eliminar este reporte?`,
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
            this.userData.deleteReport(report);
          }
        }
      ]
    });
    alert.present();
   
  }

}

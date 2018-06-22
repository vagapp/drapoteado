import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NuevoreporteModalPage } from '../nuevoreporte-modal/nuevoreporte-modal';
import { ModalController } from 'ionic-angular';
import { reportes } from '../../providers/user-data/reportes';
import { UserDataProvider } from '../../providers/user-data/user-data';

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
    public userData: UserDataProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportesPage');
    this.userData.cargarListaReportes();
  }

  openNuevoreporte(){
    let Modal = this.modalCtrl.create(NuevoreporteModalPage, undefined, { cssClass: "smallModal nuevoreporteModal" });
    Modal.present({});
  }

  openReporte( reporte:reportes ){
    let Modal = this.modalCtrl.create(NuevoreporteModalPage, {reporte:reporte}, { cssClass: "smallModal nuevoreporteModal" });
    Modal.present({});
  }

}

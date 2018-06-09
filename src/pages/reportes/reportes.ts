import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NuevoreporteModalPage } from '../nuevoreporte-modal/nuevoreporte-modal';
import { ModalController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportesPage');
  }

  openNuevoreporte(){
    let Modal = this.modalCtrl.create(NuevoreporteModalPage, undefined, { cssClass: "smallModal nuevoreporteModal" });
    Modal.present({});
  }

}

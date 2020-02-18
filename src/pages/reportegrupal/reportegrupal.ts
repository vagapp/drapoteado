import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReportPresentatorProvider } from '../../providers/report-presentator/report-presentator';
import { CitasDataProvider } from '../../providers/citas-data/citas-data';

/**
 * Generated class for the ReportegrupalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reportegrupal',
  templateUrl: 'reportegrupal.html',
})
export class ReportegrupalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public reportPresentator:ReportPresentatorProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportegrupalPage');
  }

  moneyFormat( money:number ): string {
    return CitasDataProvider.moneyFormat(money);
   }

   
   exportars(){
    console.log('exportars');
    this.reportPresentator.exportExcel();
  }

}

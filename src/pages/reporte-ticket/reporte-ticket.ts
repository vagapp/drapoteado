import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { reportes } from '../../providers/user-data/reportes';
import { Debugger } from '../../providers/user-data/debugger';
import { LoaderProvider } from '../../providers/loader/loader';
import { ReportesManagerProvider } from '../../providers/reportes-manager/reportes-manager';
import { ReporteCitasProvider } from '../../providers/reporte-citas/reporte-citas';
import { ReportPresentatorProvider } from '../../providers/report-presentator/report-presentator';
import { PermissionsProvider } from '../../providers/permissions/permissions';

/**
 * Generated class for the ReporteTicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reporte-ticket',
  templateUrl: 'reporte-ticket.html',
})
export class ReporteTicketPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userData: UserDataProvider,
    public viewCtrl:ViewController,
    public reportesManager: ReportesManagerProvider,
    public loader: LoaderProvider,
    public reportPresentator: ReportPresentatorProvider,
    public permissions:PermissionsProvider
  ) {}
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReporteTicketPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }



}

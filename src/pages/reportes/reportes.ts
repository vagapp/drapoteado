import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { reportes } from '../../providers/user-data/reportes';
import { UserDataProvider } from '../../providers/user-data/user-data';
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
    private loadingCtrl: LoadingController
    ) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ReportesPage');
    this.userData.cargarListaReportes();
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
            this.userData.loading_reports = true;
            let loadrepointerval = setInterval(
              ()=>{
                if(!this.userData.loading_reports){ loader.dismiss();clearInterval(loadrepointerval);}
              },500
            );
            this.userData.deleteReport(report).subscribe(
              (val) => {
                //Debugger.log([val]);
                this.userData.cargarListaReportes();
              },
              (response)=>{
                this.userData.loading_reports = false;
                //Debugger.log(['deleting node error',response]);
              }
            );
          }
        }
      ]
    });
    alert.present();
   
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController, AlertController } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { Citas } from '../../providers/user-data/citas';
import { servicios } from '../../providers/user-data/servicios';
import { Doctores } from '../../providers/user-data/doctores';
import { CitasManagerProvider } from '../../providers/citas-manager/citas-manager';
import { NotificationsManagerProvider } from '../../providers/notifications-manager/notifications-manager';
import { LoaderProvider } from '../../providers/loader/loader';
import { AlertProvider } from '../../providers/alert/alert';
import { CitasDataProvider } from '../../providers/citas-data/citas-data';
import { CitasPresentatorProvider } from '../../providers/citas-presentator/citas-presentator';
import { CitaProgressControllerProvider } from '../../providers/cita-progress-controller/cita-progress-controller';
import { PermissionsProvider } from '../../providers/permissions/permissions';


@IonicPage()
@Component({
  selector: 'page-progresocita-modal',
  templateUrl: 'progresocita-modal.html',
})
export class ProgresocitaModalPage {
 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public userData: UserDataProvider,
    public loader: LoaderProvider,
    public viewCtrl: ViewController,
    public alert: AlertProvider,
    public citasData: CitasDataProvider,
    public citasMan: CitasManagerProvider,
    public notiMan: NotificationsManagerProvider,
    public citasPresentator: CitasPresentatorProvider,
    public progressController: CitaProgressControllerProvider,
    public permissions: PermissionsProvider
  ) {
  }

  ionViewDidLoad() {
   
  }

  ionViewWillLeave(){
      this.progressController.stopInterval();
  }

      finalizarPop(){
        let exmsg = '';
        if(Number(this.progressController.activeCita.addedServices.length) === 0){ exmsg = 'Aun no se ha agregado ningún servicio a esta cita';}
        this.alert.chooseAlert(
          'Finalizar',
          `Está seguro de que desea Finalizar la consulta? ${exmsg}`,
          ()=>{ this.finalizarActualCita(); },
          ()=>{}
        );
      }

      async finalizarActualCita(){
        this.progressController.finalizarCitaActiva();
        await this.citasPresentator.updateStateRequest( this.progressController.activeCita ,CitasDataProvider.STATE_COBRO );
      }

      pagadaPop(){
        let title = 'Pagada';
        let msg = '¿Está seguro de que desea marcar esta cita como pagada?';
        
        if(this.progressController.CantidadRestante > 0){
          title = 'Cuidado';
          msg = '¿Está seguro de que desea marcar esta cita como pagada con la cantidad insuficiente?';
        }
          this.alert.chooseAlert(
            title,
            msg,
            ()=>{ this.pagarActualCita() },
            ()=>{}
          );
      }

      async pagarActualCita(){
        this.progressController.pagarCitaActiva();
        await this.citasPresentator.updateStateRequest(this.progressController.activeCita ,CitasDataProvider.STATE_FINALIZADA );
        this.close();
      }

  
      close(){
        this.viewCtrl.dismiss();
      }

}

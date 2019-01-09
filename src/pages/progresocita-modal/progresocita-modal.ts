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
        this.finalizarActualCita().then( ()=>{this.close();});
       
        /*let exmsg = '';
        if(Number(this.progressController.activeCita.addedServices.length) === 0){ exmsg = 'Aun no se ha agregado ningún servicio a esta cita';}
        this.alert.chooseAlert(
          'Finalizar',
          `Está seguro de que desea Finalizar la consulta? ${exmsg}`,
          ()=>{ this.finalizarActualCita(); },
          ()=>{}
        );*/
      }

      updateCheckedOptions(Nid,event){
        console.log('updateCheckedOptions',Nid,event.checked);
      }

      async finalizarActualCita(){
        this.progressController.finalizarCitaActiva();
        await this.citasPresentator.updateStateRequest( this.progressController.activeCita ,CitasDataProvider.STATE_COBRO );
      }

      pagadaPop(){
        /*if( Number(this.progressController.CantidadRestante) === (Number(this.progressController.activeCita.costo))){
          this.alert.presentAlert('Error','Introducir monto a pagar');
          return false;
        }*/
        console.log('cantidad restante es',this.progressController.CantidadRestante);
        if( Number(this.progressController.CantidadRestante) < 0 ){
          this.alert.presentAlert('Error','Esta introduciendo un monto mayor al costo de la cita.');
          return false;
        }
        if(
          this.progressController.factura_cantidad > this.progressController.activeCita.costo
        ){
          this.alert.presentAlert('Error','El monto facturado no puede exceder el total de la consulta');
          return false;
        }
       /* let title = 'Pagada';
        let msg = '¿Está seguro de que desea marcar esta cita como pagada?';
        
        if(this.progressController.CantidadRestante > 0){
          title = 'Cuidado';
          msg = '¿Está seguro de que desea marcar esta cita como pagada con la cantidad insuficiente?';
          this.alert.chooseAlert(
            title,
            msg,
            ()=>{ this.pagarActualCita() },
            ()=>{}
          );
        }else{
          this.pagarActualCita();
        }*/
        this.pagarActualCita();
      }

      async pagarActualCita(){
        this.progressController.pagarCitaActiva();
        await this.citasPresentator.updateStateRequest(this.progressController.activeCita ,CitasDataProvider.STATE_FINALIZADA );
        this.close();
      }

      async allsaveActualCita(){
        console.log('allsaveActualCita');
        this.progressController.updateCitaActiva();
        await this.citasPresentator.updateStateRequest(this.progressController.activeCita ,CitasDataProvider.STATE_FINALIZADA );
        this.close();
      }

  
      close(){
        this.viewCtrl.dismiss();
      }

}

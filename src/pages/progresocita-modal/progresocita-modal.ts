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
import { IfObservable } from 'rxjs/observable/IfObservable';
import { BaseUrlProvider } from '../../providers/base-url/base-url';
import { DateProvider } from '../../providers/date/date';


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
    public permissions: PermissionsProvider,
    public datep: DateProvider
   
  ) {
  }

  get SERVICIO_CORTESIA_NID(){
    return CitasDataProvider.SERVICIO_CORTESIA_NID;
  }

  ionViewDidLoad() {
    console.log('Cita activa ionViewDidLoad',this.progressController.activeCita);
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
        this.progressController.updateCheckedOption(Nid,event.checked);
        console.log('finish');
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

        
        console.log('pagadaPop start servicesCompare',JSON.stringify(this.progressController.servicesCompare));
        //this.progressController.checkCobroStates('pp1');
        if(!this.validarPagarNOEMPTY()){
          this.alert.presentAlert('Error','Introducir monto a pagar.');
          return false;
        }
        //this.progressController.checkCobroStates('pp2');

        if( !this.validarPagarNONEG() || !this.validarNotNaN() ){
          this.alert.presentAlert('Error','No se aceptan valores negativos');
          return false;
        }
        //this.progressController.checkCobroStates('pp3');
      
        console.log('cantidad restante es',this.progressController.CantidadRestante);
        if( Number(this.progressController.CantidadRestante) < 0 ){
          this.alert.presentAlert('Error','Esta introduciendo un monto mayor al costo de la cita.');
          return false;
        }
        //this.progressController.checkCobroStates('pp4');
        if(
          this.progressController.factura_cantidad > this.progressController.activeCita.restantePagos
        ){
          this.alert.presentAlert('Error','El monto facturado no puede exceder el total de la consulta');
          return false;
        }

        
       // this.progressController.checkCobroStates('pp5');
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
        console.log('pagadaPop end servicesCompare',JSON.stringify(this.progressController.servicesCompare));
       this.pagarActualCita();
      }

      async pagarActualCita(){
        console.log('pagarActualCita start servicesCompare',JSON.stringify(this.progressController.servicesCompare));
        this.progressController.pagarCitaActiva();
        console.log('pagarActualCita',this.progressController.activeCita);
        //await this.citasPresentator.updateStateRequest(this.progressController.activeCita ,CitasDataProvider.STATE_FINALIZADA );
        console.log('pagarActualCita end servicesCompare',JSON.stringify(this.progressController.servicesCompare));
        this.close();
      }

      getDateString(datenumber: number):String{
       let aux_dates = DateProvider.getDisplayableDates(new Date(Number(datenumber)));
       //console.log(aux_dates);
       return aux_dates.date +' '+aux_dates.time;
      }

      //esta validacion revisa que si se meta algo en los campos de cobro caundo se paga la cita. si no se pone nada de nada te avisa que no le metiste nada woe que malo eres
      validarPagarNOEMPTY():boolean{
        let ret = true;
        console.log('validarPagar ---------');
        console.log(this.progressController.cobroEfectivo, this.progressController.cobroEfectivo  === null );
        console.log(this.progressController.cobroTarjeta, this.progressController.cobroTarjeta === null );
        console.log(this.progressController.cobroCheque, this.progressController.cobroCheque === null );
        if( this.progressController.cobroEfectivo  === null &&  this.progressController.cobroTarjeta === null && this.progressController.cobroCheque === null ){
          console.log('nopusonada'  );
          ret = false;
        }
        return ret;
      }

      //esta validacion revisa que no se puedan meter numeros negativos en el cobro.
      validarPagarNONEG():boolean{
        let ret = true;
        console.log('validarPagarNONEG ---------');
        console.log(this.progressController.cobroEfectivo, Number(this.progressController.cobroEfectivo) );
        console.log(this.progressController.cobroTarjeta,Number(this.progressController.cobroTarjeta) );
        console.log(this.progressController.cobroCheque,Number(this.progressController.cobroCheque));
        if( Number(this.progressController.cobroEfectivo) < 0 ||  Number(this.progressController.cobroTarjeta) < 0 ||  Number(this.progressController.cobroCheque) < 0){
          ret = false;
        }
        return ret;
      }

      validarNotNaN(){
        let ret = true;
        console.log('validarNotNaN ---------');
        console.log(this.progressController.cobroEfectivo, Number(this.progressController.cobroEfectivo) );
        console.log(this.progressController.cobroTarjeta,Number(this.progressController.cobroTarjeta) );
        console.log(this.progressController.cobroCheque,Number(this.progressController.cobroCheque));
        if( isNaN(this.progressController.cobroEfectivo)  ||  isNaN(this.progressController.cobroTarjeta)  ||  isNaN(this.progressController.cobroCheque) ){
          ret = false;
        }
        return ret;
      }

     

  

      async allsaveActualCita(){
        console.log('allsaveActualCita');
        this.progressController.updateCitaActiva();
        await this.citasPresentator.updateStateRequest(this.progressController.activeCita ,CitasDataProvider.STATE_FINALIZADA );
        this.close();
      }

      async guardarEdiciones(){
        this.loader.presentLoader('Guardando');
        await this.citasMan.guardarEdiciones(this.progressController.activeCita);
        this.loader.dismissLoader();
      }

  
      close(){
        this.viewCtrl.dismiss();
      }

}

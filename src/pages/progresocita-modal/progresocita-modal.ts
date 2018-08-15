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

/**
 * Generated class for the ProgresocitaModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-progresocita-modal',
  templateUrl: 'progresocita-modal.html',
})
export class ProgresocitaModalPage {
  activeCita: Citas;
  available_services: servicios[];
  selectedService:number;
  costoCita:number;
  cobroEfectivo:number=null;
  cobroTarjeta:number=null;
  cobroCheque:number=null;
  activeCitaDoc:Doctores;
  showinterval = null;
  added_services_list:{
    servicio:servicios
    costooverride:number
  };

  get CantidadRestante(){ return 0+ ( (Number(this.activeCita.costo)) - (Number(this.cobroEfectivo) + Number(this.cobroCheque) + Number(this.cobroTarjeta) ) ); }



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
    public citasPresentator: CitasPresentatorProvider
  ) {
    this.activeCita = navParams.get('cita');
    this.activeCitaDoc = this.userData.getDoctorOFCita(this.activeCita);
    this.showinterval = setInterval(() => { this.activeCita.setDuracionMs(); }, 1000);
    console.log("opening progreso of", this.activeCita);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgresocitaModalPage');
    this.cargarServicios();
  }

  ionViewWillLeave(){
    if(this.showinterval)
      clearInterval(this.showinterval);
  }


  cargarServicios(){
    this.activeCita.setAddedServices(this.activeCitaDoc.servicios);
    this.available_services = this.activeCita.getServiciosAvailable(this.activeCitaDoc.servicios);
    }
  
    
    addService(){
        let aux_servicio = null;
        if(Number(this.selectedService) === Number(0)){
          console.log("nothing selected");
        }else{
          this.available_services.forEach(element => {
            if(Number(element.Nid) === Number(this.selectedService)  ) aux_servicio = element;
          });
           if(this.activeCita.addServicio(aux_servicio)){

              this.available_services = this.activeCita.getServiciosAvailable(this.activeCitaDoc.servicios);
              this.calcularCosto();
           }
        }
      }


      calcularCosto(){
        this.costoCita = 0;
        this.activeCita.addedServices.forEach(element => {
          this.costoCita += Number(element.costo);
        });
      }


      finalizarPop(){
        let exmsg = "";
        if(Number(this.activeCita.addedServices.length) === 0){ exmsg = 'Aun no se ha agregado ningún servicio a esta cita';}
        this.alert.chooseAlert(
          'Finalizar',
          `Está seguro de que desea Finalizar la consulta? ${exmsg}`,
          ()=>{ this.finalizarActualCita(); },
          ()=>{}
        );
      }

      async finalizarActualCita(){
        this.calcularCosto();
        this.activeCita.data.field_costo_sobrescribir.und[0].value = this.costoCita;
        this.activeCita.setServicesData();
        await this.citasPresentator.updateStateRequest( this.activeCita ,CitasDataProvider.STATE_COBRO );
        this.activeCitaDoc.citaActiva = null;
      }

     

      pagadaPop(){
        let title = 'Pagada';
        let msg = '¿Está seguro de que desea marcar esta cita como pagada?';
        
        if(this.CantidadRestante > 0){
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
        this.activeCita.cobroEfectivo = this.cobroEfectivo;
        this.activeCita.cobroCheque = this.cobroCheque;
        this.activeCita.cobroTarjeta = this.cobroTarjeta;
        await this.citasPresentator.updateStateRequest(this.activeCita ,CitasDataProvider.STATE_FINALIZADA );
        this.close();
      }

  
      close(){
        this.viewCtrl.dismiss();
      }

}

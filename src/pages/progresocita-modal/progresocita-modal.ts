import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController, AlertController } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { Citas } from '../../providers/user-data/citas';
import { servicios } from '../../providers/user-data/servicios';
import { Doctores } from '../../providers/user-data/doctores';

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



  constructor(public navCtrl: NavController, public navParams: NavParams, public userData: UserDataProvider,
    public loadingCtrl: LoadingController,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController
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

  dismiss() {
    this.viewCtrl.dismiss();
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


      finalizar(){
        let exmsg = "";
        if(Number(this.activeCita.addedServices.length) === 0){ exmsg = 'Aun no se ha agregado ningún servicio a esta cita';}
        let alert = this.alertCtrl.create({
          title: 'Finalizar',
          message: `Está seguro de que desea Finalizar la consulta? ${exmsg}`,
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => {
              }
            },
            {
              text: 'Finalizar',
              handler: () => {
                let loader = this.loadingCtrl.create({
                  content: "Guardando Cita"
                }); 
                loader.present();
                this.calcularCosto();
                this.activeCita.data.field_costo_sobrescribir.und[0].value = this.costoCita;
                this.activeCita.setServicesData();
                console.log("guardando",this.activeCita);
                this.userData.updateCitaState( this.activeCita ,UserDataProvider.STATE_COBRO ).subscribe(
                  (val) => {
                    loader.dismiss();
                    this.userData.generateNotification([this.activeCita.data.field_cita_caja.und[0]],`La cita de de ${this.activeCita.paciente} esta en espera de cobro`,`cita-${this.activeCita.Nid}`);
                    this.activeCitaDoc.citaActiva = null;
                    this.presentAlert("Completado","La cita se encuentra ahora en espera de cobro");
                  },
                  response => {
                      console.log("POST call in error", response);
                      loader.dismiss();
                      this.presentAlert("error","error inesperado, intentelo denuevo");
                      this.close();
                  },
                  () => {
                      console.log("The POST observable is now completed.");
                  }
                );
              }
            }
          ]
        });
        alert.present();
      }


      pagada(){
        if(this.CantidadRestante > 0){
          let alert = this.alertCtrl.create({
            title: 'Cuidado',
            message: '¿Está seguro de que desea marcar esta cita como pagada con la cantidad insuficiente?',
            buttons: [
              {
                text: 'Cancelar',
                role: 'cancel',
                handler: () => {
                }
              },
              {
                text: 'Aceptar',
                handler: () => {this.setToPaidPop();}
              }
            ]
          });
          alert.present();
        }else{
          this.setToPaidPop();
      }
      }

      setToPaidPop(){
        let alert = this.alertCtrl.create({
          title: 'Pagada',
          message: '¿Está seguro de que desea marcar esta cita como pagada?',
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => {
              }
            },
            {
              text: 'Aceptar',
              handler: () => {
                console.log("guardando", this.activeCita);
        let loader = this.loadingCtrl.create({
          content: "Guardando Cita"
        }); 
        this.activeCita.cobroEfectivo = this.cobroEfectivo;
        this.activeCita.cobroCheque = this.cobroCheque;
        this.activeCita.cobroTarjeta = this.cobroTarjeta;
        this.userData.updateCitaState( this.activeCita ,UserDataProvider.STATE_FINALIZADA ).subscribe(
          (val) => {
            loader.dismiss();
            this.presentAlert("Completeado","La cita ha finalizado");
            this.viewCtrl.dismiss();
          },
          response => {
              console.log("POST call in error", response);
              this.close();
               loader.dismiss();
              this.presentAlert("error","error inesperado, intentelo denuevo");
          },
          () => {
              console.log("The POST observable is now completed.");
          }
        );
              }
            }
          ]
        });
        alert.present();
      }
  

      close(){
        this.viewCtrl.dismiss();
      }


      presentAlert(key,Msg) {
        let alert = this.alertCtrl.create({
          title: key,
          subTitle: Msg,
          buttons: ['Dismiss']
        });
        alert.present();
      }
      

}

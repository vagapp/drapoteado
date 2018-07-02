import { Component, DebugContext } from '@angular/core';
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
  cobroEfectivo:number=0;
  cobroTarjeta:number=0;
  cobroCheque:number=0;
  activeCitaDoc:Doctores;

  get CantidadRestante(){ return 0+ ( (Number(this.activeCita.costo)) - (Number(this.cobroEfectivo) + Number(this.cobroCheque) + Number(this.cobroTarjeta) ) ); }



  constructor(public navCtrl: NavController, public navParams: NavParams, public userData: UserDataProvider,
    public loadingCtrl: LoadingController,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController
  ) {
    this.activeCita = navParams.get('cita');
    this.activeCitaDoc = this.userData.getDoctorOFCita(this.activeCita);
    console.log("opening progreso of", this.activeCita);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgresocitaModalPage');
    this.cargarServicios();
  }


  cargarServicios(){
    this.activeCita.setAddedServices(this.activeCitaDoc.servicios);
    this.available_services = this.activeCita.getServiciosAvailable(this.activeCitaDoc.servicios);
    /*
    console.log("cargando servicios");
    this.servicios = new Array();
    let aux_arr = new Array();
    aux_arr[0]= this.userData.userData.uid;
    this.userData.getServicios(aux_arr).subscribe(
      (val)=>{
         let aux_results = Object.keys(val).map(function (key) { return val[key]; });
         let dis  = this;
         aux_results.forEach(function(element) {
          dis.servicios.push(element);          
        });
         this.activeCita.setAddedServices(this.servicios);
         this.available_services = this.activeCita.getServiciosAvailable(this.servicios);
         this.calcularCosto();
      },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log(this.servicios);
          console.log(this.available_services);
      });
       */
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
        let alert = this.alertCtrl.create({
          title: 'Finalizar',
          message: '¿está seguro de que desea Finalizar la consulta?',
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
                this.calcularCosto();
                this.activeCita.data.field_costo_sobrescribir.und[0].value = this.costoCita;
                this.activeCita.setServicesData();
                console.log("guardando",this.activeCita);
                this.userData.updateCitaState( this.activeCita ,UserDataProvider.STATE_COBRO ).subscribe(
                  (val) => {
                    loader.dismiss();
                    this.presentAlert("Completado","La cita se encuentra ahora en espera de cobro");
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


      pagada(){
        if(this.CantidadRestante > 0){
          let alert = this.alertCtrl.create({
            title: 'Cuidado',
            message: '¿está seguro de que desea marcar esta cita como con la cantidad insuficiente?',
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
          message: '¿está seguro de que desea marcar esta cita como pagada?',
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

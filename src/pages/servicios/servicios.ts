import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { ServiciosManagerProvider } from '../../providers/servicios-manager/servicios-manager';
//import { servicios } from '../../providers/user-data/servicios';



/**
 * Generated class for the ServiciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicios',
  templateUrl: 'servicios.html',
})
export class ServiciosPage {
  
  //servicios:servicios[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,
    public userData: UserDataProvider,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public servicioMan: ServiciosManagerProvider
  ) {
    //this.servicios = new Array();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ServiciosPage');
    this.cargarServicios();
  }
  openNuevoservicio(){
    let Modal = this.modalCtrl.create("NuevoservicioModalPage", undefined, { cssClass: "smallModal nuevoservicioModal" });
    Modal.onDidDismiss(data => {
      this.cargarServicios();
    });
    Modal.present({});
  }

  cargarServicios(){
    this.servicioMan.cargarServicios();
  }

  editServicio( edit_servicio ){
    let Modal = this.modalCtrl.create("NuevoservicioModalPage",{ servicio: edit_servicio.getData() } , { cssClass: "smallModal nuevoservicioModal" });
    Modal.onDidDismiss(data => {
      this.cargarServicios();
    });
    Modal.present({});
  }

  deleteServicio( delete_servicio ){
    let alert = this.alertCtrl.create({
      title: 'Eliminar',
      message: '¿Está seguro de que desea eliminar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
           
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            //console.log('Buy clicked');
            this.servicioMan.deleteService(delete_servicio).subscribe(
              (val)=>{
                 this.servicioMan.removeServicioFromLists(delete_servicio);
                }
            );
          }
        }
      ]
    });
    alert.present();
  } 



presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 6000,
    position: 'top'
  });
  toast.present();
}
  
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController } from 'ionic-angular';
import { UserDataProvider, serviciosd } from '../../providers/user-data/user-data';
import { Debugger } from '../../providers/user-data/debugger';

/**
 * Generated class for the NuevoservicioModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevoservicio-modal',
  templateUrl: 'nuevoservicio-modal.html',
})
export class NuevoservicioModalPage {
  newService:serviciosd;
  isnew:boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userData: UserDataProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public viewCtrl: ViewController
  ) {
    console.log('loadingservice', navParams.get('servicio'));
    let aux_service = navParams.get('servicio');
    Debugger.log([`opening servicio to edit`,aux_service]);
    if(aux_service){
      this.isnew = false;
      this.newService={
        Nid: aux_service.Nid,
        Uid: aux_service.Uid,
        type:"servicios",
        title:aux_service.title,
        costo:aux_service.costo,
        body:{und:[{value:aux_service.cuerpo}]},
        field_costo_servicio:aux_service.field_costo_servicio,
        field_doctor_uid:{und:[{value:aux_service.Uid}]}
      }
      //this.newService = aux_service;
    }else{
      this.isnew = true;
      this.resetNewService();
    }
  }

  resetNewService(){
    this.newService={
      Nid:null,
      Uid:null,
      type:"servicios",
      title:"",
      costo:0,
      body:{und:[{value:""}]},
      field_costo_servicio:{und:[{value:0}]},
      field_doctor_uid:{und:[{value:0}]}
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoservicioModalPage');
    //this.resetNewService()
  }

  createService(){
    let loader = this.loadingCtrl.create({
      content: "Generando Servicio"
    }); 
    loader.present();
    this.newService.body.und[0].value="automatic description";
    this.newService.field_doctor_uid.und[0].value= this.userData.userData.uid;
    console.log("creating a service ",this.newService);
    this.userData.generateNewService( this.newService ).subscribe(
    (val)=>{
      console.log("the new service has been generated");
      this.presentToast("Completado");
      loader.dismiss();
      this.close();
    },
    response => {
        console.log("POST call in error", response);
        console.log("show error");
        response.error.forEach(element => {
          this.presentToast(element);
        });
        loader.dismiss();
      }
  );
}

updateService(){
  let loader = this.loadingCtrl.create({
    content: "Guardando . . ."
  }); 
  loader.present();
  this.userData.updateService( this.newService ).subscribe(
    (val)=>{
      console.log("serviceupdated");
      this.presentToast("Completado");
      loader.dismiss();
      this.close();
    },
    response => {
        console.log("POST call in error", response);
        console.log("show error");
        loader.dismiss();
      }
  );
}

presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 6000,
    position: 'top'
  });
  toast.present();
}


close(){
  this.viewCtrl.dismiss();
}


}

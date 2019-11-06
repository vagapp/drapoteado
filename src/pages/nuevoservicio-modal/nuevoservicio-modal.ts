import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController } from 'ionic-angular';
import { UserDataProvider, serviciosd } from '../../providers/user-data/user-data';
import { Debugger } from '../../providers/user-data/debugger';
import { ServiciosManagerProvider } from '../../providers/servicios-manager/servicios-manager';
import { LoaderProvider } from '../../providers/loader/loader';
import { TutorialProvider } from '../../providers/tutorial/tutorial';
import { AlertProvider } from '../../providers/alert/alert';

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
  isTutorial:boolean = false;
  newTutService:boolean = true;
  showerrors:boolean = false;


  get grouplabel(){
    let ret = "";
    if(this.servMan.isgroup) ret = 'Grupal';
    return ret;
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userData: UserDataProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public viewCtrl: ViewController,
    public servMan: ServiciosManagerProvider,
    public loader: LoaderProvider,
    public tutorial: TutorialProvider,
    public alert: AlertProvider
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
      this.newService.costo = null;
    }
    if(Number(this.newService.field_costo_servicio.und[0].value) === 0){
      this.newService.field_costo_servicio.und[0].value = null;
    }
  }

 

  resetNewService(){
    this.newService={
      Nid:null,
      Uid:null,
      type:"servicios",
      title:"",
      costo:null,
      body:{und:[{value:""}]},
      field_costo_servicio:{und:[{value:null}]},
      field_doctor_uid:{und:[{value:0}]}
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoservicioModalPage');
    //this.resetNewService()
  }

  resetServicio(){
    this.tutorial.serviceCreated = false;
    this.resetNewService();
    this.newTutService = false;
  }

  basicValidation():boolean{
    this.showerrors = false;
    let ret = true;
    console.log('title is',this.newService.title, this.newService.title.length === 0);
    console.log('value is',this.newService.field_costo_servicio.und[0].value);
    if(this.newService.title.length === 0){ 
      this.showerrors = true; 
      ret = false;
    }
    if(this.newService.field_costo_servicio.und[0].value === null){this.showerrors = true;  ret = false;}
    if(this.showerrors){
      this.alert.presentAlert('','Los campos en rojo son obligatorios');
    }
    if(!this.showerrors && Number(this.newService.field_costo_servicio.und[0].value) <= 0){
      this.alert.presentAlert('','El costo del servicio debe ser mayor a cero'); this.showerrors = true;  ret = false;
    }
    return ret;
  }

  async createServiceTutorial(){
    this.fixCostoOutput();
    this.newTutService = false;
    if(!this.basicValidation()){return false;}
    this.loader.presentLoader('Creando Servicio ...');
    this.newService.body.und[0].value="automatic description";
    this.newService.field_doctor_uid.und[0].value= this.userData.userData.uid;
    console.log("creating a service ",this.newService);
    let serv_res = await this.servMan.generateNewService( this.newService ).toPromise();
    let update_res = await this.servMan.loadServicios();
    this.loader.dismissLoader();
    this.tutorial.serviceCreated = true;
  }

  async createService(){
    this.fixCostoOutput();
    if(!this.basicValidation()){return false;}
    this.loader.presentLoader('Creando Servicio ...');
    this.newService.body.und[0].value="automatic description";
    this.newService.field_doctor_uid.und[0].value= this.userData.userData.uid;
    console.log("creating a service ",this.newService);
    let serv_res = await this.servMan.generateNewService( this.newService ).toPromise();
    console.log('res del servicio',serv_res);
    if(this.servMan.isgroup){
      //this.subsMan.serv_res['nid'];
      console.log('agregar al grupo we.');
    }
    let update_res = await this.servMan.loadServicios();
    this.loader.dismissLoader();
    this.dismiss();
   
}

async updateService(){
  this.fixCostoOutput();
  this.loader.presentLoader('Guardando Servicio ...');
  let serv_res = await this.servMan.updateService( this.newService ).toPromise();
  let update_res = await this.servMan.loadServicios();
  this.loader.dismissLoader();
  this.dismiss();
 
}

fixCostoOutput(){
  if(this.newService.field_costo_servicio.und[0].value === null){
    this.newService.field_costo_servicio.und[0].value = 0;
  }
}

presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 6000,
    position: 'top'
  });
  toast.present();
}


dismiss() {
  this.viewCtrl.dismiss();
}
}

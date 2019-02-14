import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController } from 'ionic-angular';
import { UserDataProvider, serviciosd } from '../../providers/user-data/user-data';
import { Debugger } from '../../providers/user-data/debugger';
import { ServiciosManagerProvider } from '../../providers/servicios-manager/servicios-manager';
import { LoaderProvider } from '../../providers/loader/loader';
import { TutorialProvider } from '../../providers/tutorial/tutorial';

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
    public tutorial: TutorialProvider
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

  resetServicio(){
    this.tutorial.serviceCreated = false;
    this.resetNewService();
    this.newTutService = false;
  }

  basicValidation():boolean{
    let ret = true;
    console.log('title is',this.newService.title, this.newService.title.length === 0);
    if(this.newService.title.length === 0) ret = false;
    if(this.newService.field_costo_servicio.und[0].value === null) ret = false;
    return ret;
  }

  async createServiceTutorial(){
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
    
    /*.subscribe(
    (val)=>{
      console.log("the new service has been generated");
      this.presentToast("Completado");
     
      this.close();
    },
    response => {
        console.log("POST call in error", response);
        console.log("show error");
        response.error.forEach(element => {
          this.presentToast(element);
        });
      }
  );*/
}

async updateService(){
  this.loader.presentLoader('Guardando Servicio ...');
  let serv_res = await this.servMan.updateService( this.newService ).toPromise();
  let update_res = await this.servMan.loadServicios();
  this.loader.dismissLoader();
  this.dismiss();
  /*.subscribe(
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
  );*/
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

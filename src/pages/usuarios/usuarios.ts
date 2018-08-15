import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { NuevousuarioModalPage } from '../nuevousuario-modal/nuevousuario-modal';
import { ModalController } from 'ionic-angular';
import { userd, UserDataProvider } from '../../providers/user-data/user-data';
import { Debugger } from '../../providers/user-data/debugger';
import { DrupalUserManagerProvider } from '../../providers/drupal-user-manager/drupal-user-manager';
import { LoaderProvider } from '../../providers/loader/loader';
import { AlertProvider } from '../../providers/alert/alert';
import { SubusersDataProvider } from '../../providers/subusers-data/subusers-data';
import { SubusersManagerProvider } from '../../providers/subusers-manager/subusers-manager';

/**
 * Generated class for the UsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {
  //usersd:userd[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    public userData:UserDataProvider,
    public viewCtrl: ViewController,
    public userMan: DrupalUserManagerProvider,
    public loader: LoaderProvider,
    public alert: AlertProvider,
    public subuserData: SubusersDataProvider,
    public subusersManager: SubusersManagerProvider
  ) {
    //this.usersd = new Array();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuariosPage');
    this.cargarUsuarios();
  }

  /*
    cargar usuarios carga los usuarios de la subscripcion y los usuarios que tienes agregados.
  **/
 async cargarUsuarios(){
 this.loader.presentLoader('Cargando Usuarios ...');
 await this.subusersManager.cargarSubusuarios();
 this.loader.dismissLoader();
  /*this.usersd = new Array();
  let doctors_array =  new Array();
  doctors_array.push(this.userData.userData.uid);
  let ids = null;
  //if(this.userData.checkUserPlanHolder() && this.userData.subscription.field_subusuarios){
    //si es planholder no busca sus usuarios si no todos los usuarios de esta subscripcion
    //ids = this.userData.subscription.field_subusuarios;
    //Debugger.log(['subusers ids to load',ids]);
    //doctors_array = null;
  //}
  this.userMan.requestUsers(doctors_array, null, ids).subscribe(
    (val)=>{ 
      let aux_results = Object.keys(val).map(function (key) { return val[key]; });
      aux_results.forEach((element) => {
        Debugger.log(['received userd',element]);
        let aux_user = this.userData.getEmptyUserd();
        aux_user.uid = element.uid;
        aux_user.name = element.name;
        aux_user.field_alias.und[0].value = element.field_alias;
        aux_user.field_nombre.und[0].value = element.field_nombre;
        aux_user.field_apellidos.und[0].value = element.field_apellidos;
        aux_user.field_useremail.und[0].email = element.field_useremail.email;
        aux_user.mail = element.mail;
        aux_user.status = "1";
        aux_user.field_doctores.und = new Array();
        let aux_docs = Object.keys(element.field_doctores).map(function (key) { return element.field_doctores[key]; });
        aux_docs.forEach(function(element){
          console.log("entrodeucing",element);
          aux_user.field_doctores.und.push(element.uid);
        });
        console.log(element.field_tipo_de_usuario);
        aux_user.field_tipo_de_usuario.und = new Array();
        let aux_tipos = Object.keys(element.field_tipo_de_usuario).map(function (key) { return element.field_tipo_de_usuario[key]; });
        aux_tipos.forEach(function(element){
          aux_user.field_tipo_de_usuario.und.push(element);
        });
        console.log( aux_user.field_tipo_de_usuario);
        this.usersd.push(aux_user);
     });
     console.log(this.usersd);
     loading.dismiss();
    },
     response => {
       console.log("POST call in error", response);
       loading.dismiss();
     }
    );*/
}

  openNuevousuario(){
    let Modal = this.modalCtrl.create(NuevousuarioModalPage, undefined, { cssClass: "smallModal nuevousuarioModal" });
    Modal.present({});
  }

  editUsuario( userd ){
    let Modal = this.modalCtrl.create(NuevousuarioModalPage, { 'userd': userd }, { cssClass: "smallModal nuevousuarioModal" });
    Modal.present({});
  }

  
  deleteUsuario( userd , fromSub:boolean = false){
    this.alert.chooseAlert(
      'Eliminar',
      '¿Está seguro de que desea eliminar este usuario de la subscripción?',
      ()=>{ this.removeSubUserFromSubs(userd); },
      ()=>{}
    );
  }

  removeUsuariopop( userd , fromSub:boolean = false){
    this.alert.chooseAlert(
      'Remover',
      '¿Está seguro de que desea remover? El usuario no se borrará, solo dejará de administrar sus citas',
      ()=>{  this.removeUsuario( userd ); },
      ()=>{}
    );
  }

  agregarusuariopop( userd ){
    this.alert.chooseAlert(
      'Agregar',
      '¿Está seguro de que desea agregar? El usuario administrara sus citas',
      ()=>{  this.addUsuario( userd ); },
      ()=>{}
    );
  }


  async removeUsuario( userd ){
    this.loader.presentLoader("removiendo usuario . . .");
    await this.subusersManager.removeSubuser(userd);
    this.loader.dismissLoader();
    //remove this user from array of doctors
    /*SubusersManagerProvider.removeDoctorFromSubUser(userd, this.userData.userData.uid);
    delete userd.field_sub_id;
    this.user
    console.log('ready to upodate',userd);*/
    /*
    this.userMan.updateUserd( userd ).subscribe(
      (val)=>{
        console.log("usuarioUpdated");
        this.presentToast("Completado");
        
        this.cargarUsuarios();
      },
      response => {
      
        console.log("POST call in error", response);
        console.log("show error");
        for (var key in response.error.form_errors) {
          this.presentAlert(key, response.error.form_errors[key]);
        }
      }
    );*/
  }

  async addUsuario( userd ){
    this.loader.presentLoader('Agregando usuario ...');
    await this.subusersManager.addSubuser(userd);
    this.loader.dismissLoader();
    /*if( !userd.field_doctores.und ){  userd.field_doctores.und = new Array();}
    userd.field_doctores.und.push(this.userData.userData.uid);
    delete userd.field_sub_id;
    this.userMan.updateUserd( userd ).subscribe(
      (val)=>{
        console.log("usuarioUpdated");
        this.presentToast("Completado");
        loader.dismiss();
        this.cargarUsuarios();
      },
      response => {
        loader.dismiss();
        console.log("POST call in error", response);
        console.log("show error");
        for (var key in response.error.form_errors) {
          this.presentAlert(key, response.error.form_errors[key]);
        }
      }
    );*/
  }




  removeSubUserFromSubs( userd ){
    /*let loader = this.loadingCtrl.create({
      content: "removiendo usuario . . ."
    });
    loader.present();
    if(this.userData.checkUserPlanHolder()){
      this.userData.subscription.removeSubUserFromSubs(userd);
      this.userData.updateSus(this.userData.subscription).subscribe(
        (val)=>{
          loader.dismiss();
          this.cargarUsuarios();
        }
      );
    }*/
  }


  





  

}

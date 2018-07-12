import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { NuevousuarioModalPage } from '../nuevousuario-modal/nuevousuario-modal';
import { ModalController } from 'ionic-angular';
import { userd, UserDataProvider } from '../../providers/user-data/user-data';
import { Debugger } from '../../providers/user-data/debugger';

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
  usersd:userd[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    public userData:UserDataProvider,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public viewCtrl: ViewController,
  ) {
    this.usersd = new Array();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuariosPage');
    this.cargarUsuarios();
  }

  openNuevousuario(){
    let Modal = this.modalCtrl.create(NuevousuarioModalPage, undefined, { cssClass: "smallModal nuevousuarioModal" });
    Modal.onDidDismiss(data => {
      this.cargarUsuarios();
    });
    Modal.present({});
  }

  editUsuario( userd ){
    let Modal = this.modalCtrl.create(NuevousuarioModalPage, { 'userd': userd }, { cssClass: "smallModal nuevousuarioModal" });
    Modal.onDidDismiss(data => {
      this.cargarUsuarios();
    });
    Modal.present({});
  }

  
  deleteUsuario( userd , fromSub:boolean = false){
    let alert = this.alertCtrl.create({
      title: 'Eliminar',
      message: '¿Está seguro de que desea eliminar este usuario de la subscripción?',
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
            //if(!fromSub) {this.removeUsuario( userd );}
            this.removeSubUserFromSubs(userd); 
          }
        }
      ]
    });
    alert.present();
  }

  removeUsuariopop( userd , fromSub:boolean = false){
    let alert = this.alertCtrl.create({
      title: 'Remover',
      message: '¿Está seguro de que desea remover? El usuario no se borrará, solo dejará de administrar sus citas',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
           
          }
        },
        {
          text: 'Remover',
          handler: () => { 
            this.removeUsuario( userd );
            //if(!fromSub) {this.removeUsuario( userd );}
            //this.removeSubUserFromSubs(userd); 
          }
        }
      ]
    });
    alert.present();
  }

  agregarusuariopop( userd ){
    let alert = this.alertCtrl.create({
      title: 'Agregar',
      message: '¿Está seguro de que desea agregar? El usuario administrara sus citas',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
           
          }
        },
        {
          text: 'Agregar',
          handler: () => { 
            this.addUsuario( userd );
            //if(!fromSub) {this.removeUsuario( userd );}
            //this.removeSubUserFromSubs(userd); 
          }
        }
      ]
    });
    alert.present();
  }


  


  
  removeUsuario( userd ){
    let loader = this.loadingCtrl.create({
      content: "removiendo usuario . . ."
    });
    loader.present();
    //remove this user from array of doctors
    console.log('doctors to remove',userd.field_doctores);
    let index = userd.field_doctores.und.indexOf(this.userData.userData.uid);
    if(index >= 0) userd.field_doctores.und.splice(index,1);

    console.log(userd.field_doctores.und);
    if(userd.field_doctores.und.length === 0){
      //userd.field_doctores.und.push("_none");
      console.log("este usuario ya no tiene doctores hay que bloquearlo?");
    }
    console.log("updating", userd);
    delete userd.field_sub_id;
    this.userData.updateUserd( userd ).subscribe(
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
    );
  }

  addUsuario( userd ){
    let loader = this.loadingCtrl.create({
      content: "removiendo usuario . . ."
    });
    loader.present();
    if( !userd.field_doctores.und ){  userd.field_doctores.und = new Array();}
    userd.field_doctores.und.push(this.userData.userData.uid);
    delete userd.field_sub_id;
    this.userData.updateUserd( userd ).subscribe(
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
    );
  }


  removeSubUserFromSubs( userd ){
    let loader = this.loadingCtrl.create({
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
    }
  }

  /*
    cargar usuarios carga los usuarios de la subscripcion y los usuarios que tienes agregados.
  **/
  cargarUsuarios(){
    console.log("cargando usuarios");
    let loading = this.loadingCtrl.create({
      content: 'Cargando Usuarios...'
    });
    loading.present();
    this.usersd = new Array();
    let doctors_array =  new Array();
    doctors_array.push(this.userData.userData.uid);
    let ids = null;
    if(this.userData.checkUserPlanHolder() && this.userData.subscription.field_subusuarios){
      //si es planholder no busca sus usuarios si no todos los usuarios de esta subscripcion
      ids = this.userData.subscription.field_subusuarios;
      doctors_array = null;
    }
    this.userData.getUsers(doctors_array, null, ids).subscribe(
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

presentAlert(key,Msg){
  let alert = this.alertCtrl.create({
    title: key,
    subTitle: Msg,
    buttons: ['Dismiss']
  });
  alert.present();
}



  

}

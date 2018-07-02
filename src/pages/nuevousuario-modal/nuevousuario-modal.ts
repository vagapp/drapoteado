import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController, AlertController } from 'ionic-angular';
import { userd, UserDataProvider } from '../../providers/user-data/user-data';
import { Debugger } from '../../providers/user-data/debugger';

/**
 * Generated class for the NuevousuarioModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevousuario-modal',
  templateUrl: 'nuevousuario-modal.html',
})
export class NuevousuarioModalPage {
  initialpage = true;
  newuser = false;
  newUser:userd;
  isnew:boolean;
  checkpass:string;
  newUserCode:string;
  codeuser=false;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userData: UserDataProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController
  ) {
    console.log('GETTING userd', navParams.get('userd'));
    let aux_node = navParams.get('userd');
    if(aux_node){
      this.isnew = false;
      this.newUser = this.userData.getEmptyUserd();
      this.newUser = aux_node;
      this.initialpage = false;
      this.newuser = true;
    }else{
      this.isnew = true;
      this.resetNewUser();
    }
  }

  resetNewUser(){
    this.newUser = this.userData.getEmptyUserd();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevousuarioModalPage');
  }



  createUserd(){
    let loader = this.loadingCtrl.create({
      content: "Generando Usuario"
    }); 
    loader.present();
    if( !this.userData.checkUserPlanHolder() || this.userData.checkSusSubaccountsFull()){
      loader.dismiss();
      this.presentAlert('Error','Se llego al limite de subcuentas');
      this.close();
    }
    Debugger.log(["creating an user ",this.newUser]);
    //revisar contraseñas
    if(!(this.newUser.pass === this.checkpass)){
      this.presentAlert("Error", "las contraseñas no coinciden");
      loader.dismiss();
      return 0;
    }
    if(!(this.newUser.mail == this.newUser.field_useremail.und[0].email)){
      this.presentAlert("Error", "Los correos no coinciden");
      loader.dismiss();
      return 0;
    }
    //agregar este doctor.
    this.newUser.field_doctores.und = new Array(); 
    this.newUser.field_doctores.und[this.userData.userData.uid] = this.userData.userData.uid;
    //crear codigo, verificar que sea unique = S
    this.newUser.field_codigo.und[0].value = "add"+this.userData.userData.uid;
    this.newUser.field_nombre.und[0].value = "Subusuario";
    this.newUser.field_apellidos.und[0].value = "Subusuario";
    this.newUser.status = ""+1;
    delete this.newUser.field_sub_id;
    this.userData.generateNewUserd( this.newUser ).subscribe(
    (val)=>{
      Debugger.log(['generated user returned',val]);
      this.userData.subscription.field_subusuarios.push(val['uid']);
      this.presentToast("Completado");
      loader.dismiss();
      this.close();
    },
    response => {
        for (var key in response.error.form_errors) {
          this.presentAlert(key, response.error.form_errors[key]);
          //this.presentToast(response.error.form_errors[key]);
          //console.log(key, response.error.form_errors[key]);
        }
        loader.dismiss();
      }
  );
}

getUserByCode(){
  if((!this.newUserCode) || (this.newUserCode === "all") ){
    console.log("all or empty is not valid mf");
    return false;
  }
  let loader = this.loadingCtrl.create({
    content: "Guardando . . ."
  });
  let dis = this;
  this.userData.getUsers(new Array(),this.newUserCode).subscribe(
    (val)=>{ 
      console.log(val);
     
      let aux_results = Object.keys(val).map(function (key) { return val[key]; });
      if(aux_results.length == 0){
        dis.presentAlert("Nada", "No se encontro ningun usuario usando este codigo");
        loader.dismiss();
        return false;
      } 
      aux_results.forEach(function(element) {
        let aux_user = dis.userData.getEmptyUserd();
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
          aux_user.field_doctores.und.push(element.uid);
        });
        aux_user.field_tipo_de_usuario.und = new Array();
        let aux_tipos = Object.keys(element.field_tipo_de_usuario).map(function (key) { return element.field_tipo_de_usuario[key]; });
        aux_tipos.forEach(function(element){
          aux_user.field_tipo_de_usuario.und.push(element);
        });
        //agregar doctor
        aux_user.field_doctores.und.push(dis.userData.userData.uid);
       //guardar usuario
       console.log("guardando usuario",aux_user);
       //agregando doctor al usuario
          dis.userData.updateUserd( aux_user).subscribe(
            (val)=>{
              console.log("usuarioUpdated");
              dis.presentToast("Usuario Agregado");
              loader.dismiss();
              dis.close();
            },
            response => {
              console.log("POST call in error", response);
              console.log("show error");
              for (var key in response.error.form_errors) {
                dis.presentAlert(key, response.error.form_errors[key]);
              }
              loader.dismiss();
            }
          );

     });
    },
     response => {
       console.log("POST call in error", response);
     }
    );
}

updateUserd(){
  let loader = this.loadingCtrl.create({
    content: "Guardando . . ."
  });
  loader.present();
  if(this.newUser.pass || this.checkpass){
  if(!(this.newUser.pass === this.checkpass)){
    this.presentAlert("Error", "las contraseñas no coinciden");
    loader.dismiss();
    return 0;
  }
}
  this.newUser.mail = this.newUser.field_useremail.und[0].email;
  this.newUser.status = ""+1;
  delete this.newUser.field_sub_id;
  console.log("updating",this.newUser);
  this.userData.updateUserd( this.newUser ).subscribe(
    (val)=>{
      console.log("usuarioUpdated");
      this.presentToast("Completado");
      loader.dismiss();
      this.close();
    },
    response => {
      console.log("POST call in error", response);
      console.log("show error");
      for (var key in response.error.form_errors) {
        this.presentAlert(key, response.error.form_errors[key]);
      }
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

presentAlert(key,Msg) {
  let alert = this.alertCtrl.create({
    title: key,
    subTitle: Msg,
    buttons: ['Dismiss']
  });
  alert.present();
}


randomCode(){
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

}

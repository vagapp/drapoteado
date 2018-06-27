import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';
import { UserDataProvider  } from '../../providers/user-data/user-data';
import { Debugger } from '../../providers/user-data/debugger';

/**
 * Generated class for the RegisterModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-modal',
  templateUrl: 'register-modal.html',
})
export class RegisterModalPage {
  passconfirm:string = null;
  onGroup:boolean = null;
  grupoOtro:string = null;
  hospitalOotro:string = null; 
  onHospital:boolean = null;
  constructor(
    public navCtrl: NavController, 
    public viewCtrl:ViewController, 
    public navParams: NavParams, 
    public userData: UserDataProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    Debugger.log(['ionViewDidLoad RegisterModalPage']);
  }

  actionRegister(){
    let loading = this.loadingCtrl.create({
      content: 'Registrando...'
    });
    loading.present();

  let cloneData = JSON.parse(JSON.stringify(this.userData.userData));
  delete cloneData.field_sub_id;
  cloneData.field_useremail.und[0].email = this.userData.userData.mail;
  cloneData.field_tipo_de_usuario.und[0]="1";
  delete cloneData.field_plan_date;
  delete cloneData.field_src_json_info;
  delete cloneData.field_stripe_customer_id;
  delete cloneData.field_sub_id;
  delete cloneData.field_doctores;
  delete cloneData.field_forma_pago;
  delete cloneData.field_plan_date;
  //this.userData.userData.field_useremail.und[0].email=this.userData.userData.mail;
  //this.userData.userData.field_tipo_de_usuario.und[0]="1";
  //this.userData.userData.field_sub_id[0] = '_none';
  
  /*registrando un doctor*/
    Debugger.log(['register',this.userData.userData]);
    let register_observer = this.userData.register(cloneData);
    register_observer.subscribe(
      (val) => {
        Debugger.log(["sucess register on modal"]);
        loading.dismiss();
        this.presentAlert('Se ha completado su registro, favor de iniciar sesión',"Registro Completo");
        this.dismiss();
      },
      response => {
        Debugger.log(["POST call in error", response]);
        if(response && response.error && response.error.form_errors){
          let error_msg = `Se encontraron los siguientes errores:`;
          for (var key in response.error.form_errors) {
            error_msg += `
            ${response.error.form_errors[key]}`;
          }
          this.presentAlert(error_msg,'Error');
        }
        loading.dismiss();
      },
      () => {
        Debugger.log(["The POST observable is now completed."]);
      });
  }

  basicValidation():boolean{
    let ret = true;
    this.passconfirm
    return ret;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  presentAlert(msg:string,title:string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['Ok']
      });
      alert.present();
  }



 

}

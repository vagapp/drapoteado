import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';
import { UserDataProvider  } from '../../providers/user-data/user-data';
import { Debugger } from '../../providers/user-data/debugger';
import { sources } from '../../providers/user-data/sources';
import { planes } from '../../providers/user-data/planes';

declare var Stripe;

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


  stripe = Stripe('pk_test_4CJTbKZki9tC21cGTx4rLPLO');
  sources:sources[] = new Array();
  selected_source:sources = null;
  selected_plan:planes = null;
  card: any;
  invitationCode:string = null;
  invitationshow:boolean = false;
  
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
    this.setupStripe();
    this.loadSources();
  }

  actionRegister(){
    let loading = this.loadingCtrl.create({
      content: 'Registrando...'
    });
    
    if(!this.basicValidation()){
      return 0;
    }
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
    if(this.passconfirm.localeCompare(this.userData.userData.pass) !== 0){
      ret = false;
      this.presentAlert('Error','Las contraseñas no coinciden.');
    }
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




  

  loadSources(){
    Debugger.log(['loading srcs']);
    let old_selected = this.selected_source;
    this.sources = new Array();
    for(let i = 0; i < this.userData.userData.field_src_json_info.und.length; i++){
      
      let new_source = new sources();
      new_source.setData(this.userData.userData.field_src_json_info.und[i]);
      this.sources.push(new_source);
      if(old_selected !== null && new_source.src_id === old_selected.src_id) this.selected_source = new_source;
    }
  }

  setupStripe(){
    if(this.userData.subscription === null || this.userData.subscription.plan === null){
    let elements = this.stripe.elements();
    var style = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    this.card = elements.create('card', { style: style });
    this.card.mount('#card-element');
    this.card.addEventListener('change', event => {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    var form = document.getElementById('payment-form');
    form.addEventListener('submit', event => {
      event.preventDefault();

      // this.stripe.createToken(this.card)
      this.stripe.createSource(this.card).then(result => {
        if (result.error) {
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          Debugger.log(["result source added"]);
          //console.log(JSON.stringify(result));
          let cu_src_data = {
                            id:result.source.id,
                            last4:result.source.card.last4,
                            client_secret:result.source.client_secret,
                            brand:result.source.card.brand
                            };
          this.userData.userData.field_src_json_info['und'].push({value: JSON.stringify(cu_src_data)});
          /*console.log( this.userData.userData.field_src_json_info);*/
        }
        this.userData.updateUser().subscribe(
          (val)=>{
            Debugger.log(['se guardo el stripe source']);
            this.loadSources();
          }
        );
      });
    });
  }
}



}

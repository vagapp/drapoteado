import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';
import { UserDataProvider  } from '../../providers/user-data/user-data';
//import { Debugger } from '../../providers/user-data/debugger';
import { sources } from '../../providers/user-data/sources';
import { planes } from '../../providers/user-data/planes';
import { subscriptions } from '../../providers/user-data/subscriptions';
import { Clipboard } from '@ionic-native/clipboard';
import { CordovaAvailableProvider } from '../../providers/cordova-available/cordova-available';
import { DrupalUserManagerProvider } from '../../providers/drupal-user-manager/drupal-user-manager';
import { PermissionsProvider } from '../../providers/permissions/permissions';
import { SubscriptionDataProvider } from '../../providers/subscription-data/subscription-data';
import { AlertProvider } from '../../providers/alert/alert';
import { LoaderProvider } from '../../providers/loader/loader';
import { SubscriptionManagerProvider } from '../../providers/subscription-manager/subscription-manager';
import { PlanesDataProvider } from '../../providers/planes-data/planes-data';


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

  get enabledButton():boolean{
    return this.selected_source !== null && this.selected_plan !== null;
  }
  
  get onCordova(){
    return this.ica.isCordovaAvailable;
  }

  stripe = Stripe('pk_test_4CJTbKZki9tC21cGTx4rLPLO');
  sources:sources[] = new Array();
  selected_source:sources = null;
  selected_plan:planes = null;
  card: any;
  invitationCode:string = null;
  invitationshow:boolean = false;
  isnew = true;
  
  constructor(
    public navCtrl: NavController, 
    public viewCtrl:ViewController, 
    public navParams: NavParams, 
    public userData: UserDataProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public clipboard: Clipboard,
    public ica: CordovaAvailableProvider,
    public userMan: DrupalUserManagerProvider,
    public permissions: PermissionsProvider,
    public subsData: SubscriptionDataProvider,
    public subsManager: SubscriptionManagerProvider,
    public alert: AlertProvider,
    public loader: LoaderProvider,
    public planesData: PlanesDataProvider
  ) {
  }

  ionViewDidLoad() {
    console.log(this.subsData.subscription);
    this.isnew = !this.userData.checkIsLoggedin();
    console.log('openingregister modal isnew? ',this.isnew);
  }

  ionViewDidEnter(){
    this.setupStripe();
    this.loadSources();
  }


  async actionUpdate(){
    if(!this.basicValidation()){return 0;}
    this.loader.presentLoader('Actualizando...');
    let aux_userData = JSON.parse(JSON.stringify(this.userData.userData));
    delete aux_userData.field_sub_id;
    delete aux_userData.field_tipo_de_usuario;
    let res = await this.userMan.updateUserd(aux_userData).toPromise();
    this.loader.dismissLoader();
  }

  actionRegister(){
    if(!this.basicValidation()){return 0;}
    this.loader.presentLoader('Registrando ...');
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
  
  //Debugger.log(['register',this.userData.userData]);
    let register_observer = this.userData.register(cloneData);
    register_observer.subscribe(
      (val) => {
        window.location.reload();
      },
      response => {
        //Debugger.log(["POST call in error", response]);
        if(response && response.error && response.error.form_errors){
          let error_msg = `Se encontraron los siguientes errores:`;
          for (var key in response.error.form_errors) {
            error_msg += `
            ${response.error.form_errors[key]}`;
          }
          this.alert.presentAlert('Error', error_msg);
        }
       this.loader.dismissLoader();
      },
      () => {
       
      });
  }

  basicValidation():boolean{
    let ret = true;
    if(this.userData.userData.pass && !this.passconfirm || !this.userData.userData.pass && this.passconfirm){
      this.alert.presentAlert('Error','Confirmar contraseña.');
    }
    if(this.userData.userData.pass && this.passconfirm && this.passconfirm.localeCompare(this.userData.userData.pass) !== 0){
      ret = false;
      this.alert.presentAlert('Error','Las contraseñas no coinciden.');
    }
    return ret;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  
  selectCard( input_src:sources ){
    //Debugger.log(['selecting source',input_src]);
    this.selected_source = input_src;
    this.selected_source.set_selected()
  }

  selectPlan( input_plan:planes ){
    this.selected_plan = input_plan;
    this.userData.setcssplanselected(input_plan);
  }
  
  async suscribirse(){
    if(!this.enabledButton) return false;
    this.loader.presentLoader('Subscribiendo ...');
    console.log(this.selected_source);
    console.log(this.selected_plan);
    await this.subsManager.subscribe( this.selected_plan,this.selected_source);
    /*console.log('subscribing');
    let ns_res = await this.subsManager.getSubscribeObs( this.selected_plan,this.selected_source).toPromise();
    if(ns_res && this.subsManager.checkForSubscription()) 
    await this.subsManager.deletesSus(this.subsData.subscription).toPromise();*/
    console.log('before this');
    window.location.reload();
    /*if(this.subsData.subscription.nid === null){
      let aux_sus = subscriptions.getEmptySuscription();
      aux_sus.plan = this.selected_plan;
      aux_sus.field_plan_sus = this.selected_plan.nid;
      aux_sus.field_plan_holder = this.userData.userData.uid;
      aux_sus.field_doctores = new Array();
      aux_sus.field_doctores.push(this.userData.userData.uid);
      aux_sus.field_stripe_src_sus_id = this.selected_source.src_id;
      aux_sus.field_stripe_cus_sub_id = this.userData.userData.field_stripe_customer_id.und[0].value;
      let res = this.subsManager.generateNewSus(aux_sus).toPromise();
      if(res) window.location.reload(); else  this.loader.dismissLoader();
    }*/
  }


  invitationSub(){
    console.log('not implemented');
    return false;
    /*if(this.invitationCode.localeCompare('all') === 0){
      return false;
    }*/
    //Debugger.log(['joining with',this.invitationCode]);
    
    /*this.userData.cargarSubscription(this.invitationCode).subscribe(
      (val)=>{
        if(this.userData.error_sub_is_full){
          this.userData.error_sub_is_full = false;
          loading.dismiss();
          let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'No es posible unirse a esta subscripción, se ha alcanzado el limite de doctores',
          buttons: ['Ok']
          });
          alert.present();
          
          }else{
        if(this.userData.subscription.nid !== null){
          this.userData.subscription.field_doctores.push(this.userData.userData.uid);
          //Debugger.log(['loeaded subscription',this.userData.subscription]);
          this.userData.updateSus(this.userData.subscription).subscribe((val=>{
            //Debugger.log(['updated subscription received',val]);
            loading.dismiss();
            this.navCtrl.setRoot("HomePage");
          }));
        
      }else{
        loading.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Nada',
          subTitle: 'Código no encontrado',
          buttons: ['Ok']
        });
        alert.present();
      }
    }
    }
    );*/
  }

  showInvitation(){
    this.invitationshow = !this.invitationshow;
  }

  popRemoveDoctorSus( uid ){
    console.log('not implemented');
    return false;
    /*this.alert.chooseAlert(
      'Remover Doctor',
      '¿Está seguro que desea remover este doctor de la subscripción?',
      ()=>{},
      ()=>{this.removeDoctorSus(uid);}
    );*/
    /*
    let alert = this.alertCtrl.create({
      title: 'Remover Doctor',
      message: '¿Está seguro que desea remover este doctor de la subscripción?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
           
          }
        },
        {
          text: 'Si',
          handler: () => { 
            this.removeDoctorSus(uid);
          }
        }
      ]
    });
    alert.present();*/
  }

  removeDoctorSus( uid ){
    console.log('not implemented');
    return false;
    /*if(this.userData.userData.uid === uid){
      return false;
    }*/
    /*let loading = this.loadingCtrl.create({
      content: 'Eliminando usuario'
    });
    loading.present();
    //Debugger.log(['removing ',uid]);
    //Debugger.log(['index of uid',this.userData.subscription.field_doctores.indexOf(uid)]);
    if(this.userData.subscription.field_doctores.indexOf(uid) >= 0){
    this.userData.subscription.field_doctores.splice(this.userData.subscription.field_doctores.indexOf(uid), 1);
    }
    //Debugger.log(['userData after removing doctor',this.userData.subscription.field_doctores]);
    this.userData.updateSus(this.userData.subscription).subscribe(
      (val) =>{
        //Debugger.log(['response from deleting doctor on subs',val]);
        this.userData.cargarSubscription().subscribe((val)=>{
        loading.dismiss();
        });
      }
    );*/
  }

  loadSources(){
    if(!this.isnew){
    //Debugger.log(['loading srcs']);
    let old_selected = this.selected_source;
    this.sources = new Array();
    for(let i = 0; i < this.userData.userData.field_src_json_info.und.length; i++){
      let new_source = new sources();
      new_source.setData(this.userData.userData.field_src_json_info.und[i]);
      this.sources.push(new_source);
      if(old_selected !== null && new_source.src_id === old_selected.src_id) this.selected_source = new_source;
    }
  }
  }

  checkStripeSetup(){
    let ret = (
      !this.isnew && 
      this.userData.checkUserPermission([UserDataProvider.TIPO_DOCTOR]) 
      && ( this.subsData.subscription === null || this.subsData.subscription.plan === null) );
      return ret;
  }

  setupStripe(){
    console.log('setting stripe');
    if(this.checkStripeSetup()){
      console.log(' stripe checked and needed');
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
    console.log('LF card elements');
    this.card = elements.create('card', { style: style });
    //let crd = document.getElementById("card-element");
    //Debugger.log([crd]);
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
      this.loader.presentLoader('Agregando tarjeta...');
      this.stripe.createSource(this.card).then( async result => {
        if (result.error) {
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
          this.loader.dismissLoader();
        } else {
          let cu_src_data = {
                            id:result.source.id,
                            last4:result.source.card.last4,
                            client_secret:result.source.client_secret,
                            brand:result.source.card.brand
                            };
          this.userData.userData.field_src_json_info['und'].push({value: JSON.stringify(cu_src_data)});
        }
        let updateUser_res = await this.userData.updateUser().toPromise();
        this.loadSources();
        this.loader.dismissLoader();
      });
    });
  }
}


copyCode(){
  /*this.clipboard.copy(this.userData.subscription.field_invitation_code);*/
}




}
/*function stripeTokenHandler(token) {
  // Insert the token ID into the form so it gets submitted to the server
  var form = document.getElementById('payment-form');
  var hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);

  // Submit the form
  form.submit();
}*/
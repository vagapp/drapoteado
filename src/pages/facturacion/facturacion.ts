import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, IonicPage } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { sources } from '../../providers/user-data/sources';
//import { Debugger } from '../../providers/user-data/debugger';
import { planes } from '../../providers/user-data/planes';
import { subscriptions } from '../../providers/user-data/subscriptions';


declare var Stripe;

/**
 * Generated class for the FacturacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facturacion',
  templateUrl: 'facturacion.html',
})
export class FacturacionPage {
  stripe = Stripe('pk_test_4CJTbKZki9tC21cGTx4rLPLO');
  sources:sources[] = new Array();
  selected_source:sources = null;
  selected_plan:planes = null;
  card: any;
  invitationCode:string = null;
  invitationshow:boolean = false;


  constructor(
    public userData: UserDataProvider,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl:LoadingController,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    //Debugger.log(['facturation checks',this.userData.subscription]);
    this.setupStripe();
    this.loadSources();
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
  
  suscribirse(){
    //Debugger.log(['suscribirse']);
    //Debugger.log(["card seleccionado",this.selected_source]);
    if(this.selected_source === null){
      //Debugger.log(['NO HAZ ELEGIDO METODO DE PAGO']);
      return false;
    }
    //Debugger.log(["plan seleccionado",this.selected_plan]);
    if(this.selected_plan === null){
      //Debugger.log(['NO HAZ ELEGIDO PLAN']);
      return false;
    }
    //Debugger.log(['validation passed como hacer una suscripcion por stripe = 0']);
    if(this.userData.subscription.nid === null){
      //Debugger.log(['new subscription']);
      let aux_sus = subscriptions.getEmptySuscription();
      aux_sus.plan = this.selected_plan;
      aux_sus.field_plan_sus = this.selected_plan.nid;
      aux_sus.field_plan_holder = this.userData.userData.uid;
      aux_sus.field_doctores = new Array();
      aux_sus.field_doctores.push(this.userData.userData.uid);
      aux_sus.field_stripe_src_sus_id = this.selected_source.src_id;
      aux_sus.field_stripe_cus_sub_id = this.userData.userData.field_stripe_customer_id.und[0].value;
      /*this.userData.generateNewSus(aux_sus).subscribe((val)=>{
        //Debugger.log(['we got this',val]);
        this.userData.subscription.nid = val['nid'];
        this.userData.userData.field_sub_id["und"][0]['value'] =  val['nid'];
        this.userData.updateUser().subscribe(
          (val)=>{
            //Debugger.log(['se guardo el stripe sub_id en usuario']);
          }
        );
        //Debugger.log(['subs updated to this, update user please',this.userData.subscription.nid]); 
      });*/
    }else{
      //Debugger.log(['UPDATE SUSCRIPTION NOT IMPLEMENTED YET']);
    }
  }


  invitationSub(){
    if(this.invitationCode.localeCompare('all') === 0){
      //Debugger.log(['all not permited']);
      return false;
    }
    let loading = this.loadingCtrl.create({
      content: 'Buscando codigo...'
    });
    loading.present();
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
    alert.present();
  }

  removeDoctorSus( uid ){
    if(this.userData.userData.uid === uid){
      return false;
    }
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
          //Debugger.log(["result source added"]);
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
            //Debugger.log(['se guardo el stripe source']);
            this.loadSources();
          }
        );
      });
    });
  }
}

}

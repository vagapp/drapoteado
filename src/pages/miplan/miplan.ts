import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { PlanesDataProvider } from '../../providers/planes-data/planes-data';
import { PermissionsProvider } from '../../providers/permissions/permissions';
import { SubscriptionDataProvider } from '../../providers/subscription-data/subscription-data';
import { AlertProvider } from '../../providers/alert/alert';
import { planes } from '../../providers/user-data/planes';
import { LoaderProvider } from '../../providers/loader/loader';
import { SubscriptionManagerProvider } from '../../providers/subscription-manager/subscription-manager';
import { sources } from '../../providers/user-data/sources';
import { ConektaComponent } from '../../components/conekta/conekta'
import { HomePage } from '../home/home';
import { BaseUrlProvider } from '../../providers/base-url/base-url';

declare var Stripe;


/**
 * Generated class for the MiplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-miplan',
  templateUrl: 'miplan.html',
})
export class MiplanPage {
  /** Things from stripe from register-modal **/
  //stripe = Stripe('pk_test_4CJTbKZki9tC21cGTx4rLPLO');
  card: any;

  sources:sources[] = new Array();
  selected_source:sources = null;

  onplanchange:boolean = false;
  selectedPlan= null; //cargar selected plan
  selectedPlanObject:planes = null; //objeto del plan seleccionado para suscripcion.

  selectedAditionals = 0;
  selectedMethod = null;

  get selectedTotal():number{
    let ret = 0;
    if(this.onplanchange){ 
      ret = this.getTotal_onChangePlan(); 
  } else{
      ret = this.getTotal_noChangePlan();
  }
  return ret;
  }

  getTotal_onChangePlan(){
    let ret:number = 0;
    if(this.onplanchange){
      let plan_costo:number = 0;
      if(this.selectedPlan){
        let selected_plan = this.planesData.getPlanById(this.selectedPlan);
        if(selected_plan)
        plan_costo = Number(selected_plan.field_costo);
      }
      ret = plan_costo;
      if(this.selectedAditionals += 0 ){
        ret += Number(this.selectedAditionals*40);
      }
     /* if(this.subsData.subscription){
      ret += Number(this.subsData.subscription.field_adicionales*40);
    }*/
    }
    return ret;
    }

    getTotal_noChangePlan(){
      let ret:number = 0;
      if(!this.onplanchange && this.subsData.subscription){
        ret += Number((this.subsData.subscription.field_cantidad));
      }
      return ret;
    }
  
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userData: UserDataProvider,
    public permissions: PermissionsProvider,
    public planesData: PlanesDataProvider,
    public subsData: SubscriptionDataProvider,
    public alert:AlertProvider,
    public loader:LoaderProvider,
    public subsManager: SubscriptionManagerProvider,
    public conekta: ConektaComponent,
    public bu: BaseUrlProvider
  ) {
    conekta.init('https://cdn.conekta.io/js/latest/conekta.js','key_FSKYyuv2qSAEryHAMM7K1dA').then((c) => {
      //Este success se ejecuta con el javascript se cargó correctamente
      console.log(c);
    }).catch((err) => {
      //Este error se ejecuta cuando el javascript no cargó, Ej. Error de conexión
      console.log(err);
    });
  }

  /*ERROR Y SUCCESS CONEKTA*/
  async successToken(token:any){
    /*brand: "visa"
    cardNumber: "4242"
    id: "tok_2jxTTjKKjFegNxbJK"
    livemode: false
    object: "token"
    used: false*/
    //Esta función se agrega al atributo (successToken) para recibir el resultado de generar el token
    let cu_src_data = {
      id: token.id,
      last4: token.cardNumber,
      client_secret: token.id,
      brand: token.brand
    };
    this.userData.userData.field_src_json_info['und'].push({value: JSON.stringify(cu_src_data)});
    let updateUser_res = await this.userData.updateUser().toPromise();
    this.loadSources();

    if(!this.enabledButton) return false;
    this.bu.locationReload();
    console.log(token);
  }
  errorToken(error:any){
    //Esta función se agrega al atributo (errorToken) para recibir lo errores al momento de generar un token
    console.log(error);
  }
  /*FIN ERROR Y SUCCESS CONEKTA*/

  
  ionViewDidEnter(){
    console.log('ionViewDidEnter miplan.ts');
    //this.setupStripe();
    this.loadSources();
  }


  calculateCostoOnChange():number{
    let ret = 0;
    if(this.onplanchange){

    }
    return ret;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiplanPage');
    console.log('planesdata is',this.planesData.planes);
    console.log('my sub is',this.subsData.subscription)
    if(!this.permissions.checkUserSuscription([this.userData.PLAN_ANY])){
      this.activateChangePlanMode();
    }else{
      this.onplanchange = false;
      this.selectedPlan = this.subsData.subscription.field_plan_sus;
      this.selectedPlanObject = this.planesData.getPlanById(this.selectedPlan);
    }
  }

  activateChangePlanMode(){
   
    //this.setupStripe();
    console.log(' this.subsData.subscription', this.subsData.subscription);
    this.selectedAditionals = Number(this.subsData.subscription.field_adicionales);
    this.onplanchange = true;
    this.loadSources();
  }

  editar(){
    console.log('change to onplanchange true');
    this.activateChangePlanMode();
  }
  async guardar(){
    console.log('saving to  onplanchange false');
    if(this.guardar_basic_validation()){
    await this.suscribirse();
    this.onplanchange = false;
    
    }
  }  

  guardar_basic_validation():boolean{
    let ret = true;
    console.log('guardar_basic_validation',this.selectedPlan);
    if(!this.selectedPlan){  ret = false; this.alert.presentAlert('Error','Es necesario seleccionar un plan'); }
    console.log('guardar_basic_validation ret',ret);
    //if(!this.selectedMethod){ ret = false; this.alert.presentAlert('Error','Es necesario seleccionar un Método de Pago'); }
    return ret;
  }

  cancelar(){
    console.log('canceling to onplanchange false');
    this.onplanchange = false;
  }

  operateExtra(operand:number){
    console.log('operateExtra',operand);
    this.selectedAditionals += operand;
    if (this.selectedAditionals < 0) this.selectedAditionals = 0;
    console.log('aditionals are',this.selectedAditionals);
  }


  async suscribirse(){
    console.log('suscribirse start');
    if(!this.enabledButton()) return false;
    this.loader.presentLoader('Subscribiendo ...');
    console.log('suscribirse this.selectedMethod',this.selectedMethod);
    console.log('suscribirse this.selectedPlanObject',this.selectedPlanObject);
    //Tengo para crear una suscripcion, pero no para editar una suscripcion. vamos a hacer un codigo para editar suscripcion.
    //must set custom price.
    if(this.subsManager.checkForSubscription()){ 
      console.log('checked for subs did tru');
      this.subsData.subscription.field_cantidad = this.selectedTotal;
      this.subsData.subscription.field_plan_sus = this.selectedPlan
      this.subsData.subscription.field_adicionales = Number(this.selectedAditionals);
      let ret = await this.subsManager.updateSus(this.subsData.subscription).toPromise();
      this.loader.dismissLoader();
      console.log('sus udate returned',ret);
      this.bu.locationReload();

    }else{
      await this.subsManager.subscribe( this.selectedPlanObject,this.selectedMethod);
      this.loader.dismissLoader();
      this.bu.locationReload();
    
    }

    console.log('before this');
    
    
  }

  /*STRIPE METHODS*/

  checkStripeSetup(){
    let ret = (
      this.onplanchange && 
      this.userData.checkUserPermission([UserDataProvider.TIPO_DOCTOR]) 
      /*&& ( this.subsData.subscription === null || this.subsData.subscription.plan === null)*/
      );
      return ret;
  }


  /*setupStripe(){
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
      if(!this.enabledButton) return false;
      this.loader.presentLoader('Agregando tarjeta...');
      this.stripe.createSource(this.card).then( async result => {
        if (result.error) {
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
          this.loader.dismissLoader();
          return false;
        } else {
          let cu_src_data = {
                            id:result.source.id,
                            last4:result.source.card.last4,
                            client_secret:result.source.client_secret,
                            brand:result.source.card.brand
                            };
          this.userData.userData.field_src_json_info['und'].push({value: JSON.stringify(cu_src_data)});
        }
        //let updateUser_res =  /await this.userData.updateUser().subscribe((val)=>{ console.log(val);},(error)=>{ console.log(error) });
        let updateUser_res = await this.userData.updateUser().toPromise();
        this.loadSources();

        if(!this.enabledButton) return false;
        //await this.subsManager.subscribe( this.selectedPlanObject,this.selected_source);
        window.location.reload();
        
        });
      });
    }
  }*/

loadSources(){
  //Debugger.log(['loading srcs']);
  let old_selected = this.selected_source;
  this.sources = new Array();
  for(let i = 0; i < this.userData.userData.field_src_json_info.und.length; i++){
    let new_source = new sources();
    new_source.setData(this.userData.userData.field_src_json_info.und[i]);
    this.sources.push(new_source);
    if(old_selected !== null && new_source.src_id === old_selected.src_id){ this.selected_source = new_source; this.selected_source.set_selected()}
    else  if(old_selected === null ){ this.selected_source = new_source; this.selected_source.set_selected()}
  }

}

selectCard( input_src:sources ){
  //Debugger.log(['selecting source',input_src]);
  this.selected_source = input_src;
  this.selected_source.set_selected()
}


  enabledButton():boolean{
    console.log('enabledButton',this.selectedPlan !== null);
    //return this.selected_source !== null && this.selected_plan !== null;
    return this.selectedPlan !== null;
  }

  

}

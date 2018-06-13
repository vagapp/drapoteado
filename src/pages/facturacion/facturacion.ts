import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { sources } from '../../providers/user-data/sources';
import { Debugger } from '../../providers/user-data/debugger';
import { planes } from '../../providers/user-data/planes';

declare var Stripe;

/**
 * Generated class for the FacturacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  constructor(
    public userData: UserDataProvider,
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) {
  }

  ionViewDidLoad() {
    this.setupStripe();
    this.loadSources();
  }

  selectCard( input_src:sources ){
    Debugger.log(['selecting source',input_src]);
    this.selected_source = input_src;
    this.selected_source.set_selected()
  }

  selectPlan( input_plan:planes ){
    this.selected_plan = input_plan;
    this.userData.setcssplanselected(input_plan);
  }

  suscribirse(){
    Debugger.log(['suscribirse']);
    if(this.selectCard === null){
      Debugger.log(['NO HAZ ELEGIDO METODO DE PAGO']);
    }
    if(this.selected_plan === null){
      Debugger.log(['NO HAZ ELEGIDO PLAN']);
    }
    Debugger.log(['validation passed como hacer una suscripcion por stripe = 0']);
    
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

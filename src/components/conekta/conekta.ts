import { Component, Input, EventEmitter, Output, Injectable } from '@angular/core';

declare var Conekta: any;
interface CARD{
  name: string;
  number: string;
  exp_month: string;
  exp_year: string;
  cvc: string;
}
/**
 * Generated class for the ConektaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 * Siempre se debe usar esta estructura en el elemento :D
 * <conekta (successToken)='successToken($event)' (errorToken)='errorToken($event)'></conekta>
 */
@Component({
  selector: 'conekta',
  templateUrl: 'conekta.html'
})
@Injectable()
export class ConektaComponent {

  @Output() successToken = new EventEmitter();
  @Output() errorToken = new EventEmitter();

  card: CARD = {
    name:null,
    number:null,
    exp_month:null,
    exp_year:null,
    cvc:null
  };
  /*card: CARD = {
    name:"Fulanito Pérez",
    number:"4242424242424242",
    exp_month:"12",
    exp_year:"2020",
    cvc:"123"
  };*/
  years:Array<string> = [];
  validCard: boolean = null;
  validCVC: boolean = null;
  cardBrand:string = null;

  constructor() {
    let start = (new Date()).getFullYear();
    for(let i=0; i<10; i++){
      this.years.push(start.toString());
      start++;
    }
  }

  init(url:string, publicKey:string){
    return new Promise( (resolve, reject) =>{
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.onload = (c) => {
        this.setPublicKey(publicKey);
        resolve(c);
      };
      script.onerror = (err:any) => {
        reject(err);
      }
      document.head.appendChild(script);
    });
  }

  setPublicKey(PK:string){
    Conekta.setPublicKey(PK);
  }
  getPublicKey():string {
    return Conekta.getPublicKey();
  }
  setLanguage(lang:string){
    Conekta.setLanguage(lang);
  }
  getLanguage():string{
    return Conekta.getLanguage();
  }
  getToken(){
    let card = {
      card: this.card
    }
    Conekta.Token.create(card, (token:any) => {
      token.cardNumber = this.card.number.replace(/\D/g,'').substr(this.card.number.replace(/\D/g,'').length - 4);
      this.getBrand();
      token.brand = this.cardBrand;
      this.successToken.emit(token);
    }, (err: any) => {
      this.errorToken.emit(err);
    });
  }
  validateNumber(){
    this.validCard = Conekta.card.validateNumber(this.card.number.replace(/\D/g,''));
    this.getBrand();
  }
  validateCVC(){
    this.validCVC = Conekta.card.validateCVC(this.card.cvc);
  }
  getBrand(){
    this.cardBrand = Conekta.card.getBrand(this.card.number.replace(/\D/g,''));
  }
}

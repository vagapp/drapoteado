webpackJsonp([2],{

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturacionPageModule", function() { return FacturacionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facturacion__ = __webpack_require__(374);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FacturacionPageModule = /** @class */ (function () {
    function FacturacionPageModule() {
    }
    FacturacionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__facturacion__["a" /* FacturacionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__facturacion__["a" /* FacturacionPage */]),
            ],
        })
    ], FacturacionPageModule);
    return FacturacionPageModule;
}());

//# sourceMappingURL=facturacion.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sources; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__debugger__ = __webpack_require__(35);

var sources = /** @class */ (function () {
    function sources() {
        this.src_id = null;
        this.client_secret = null;
        this.last4 = null;
        this.brand = null;
        this.default = null;
        this.selected = false;
        this.facturacion_list_class = '';
    }
    sources.prototype.setData = function (input_data) {
        __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log(['input_data source setup json', input_data]);
        var aux_cu_src = JSON.parse(input_data.value);
        __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log(['input_data source setup obj', aux_cu_src]);
        this.src_id = aux_cu_src.id;
        this.last4 = aux_cu_src.last4;
        this.client_secret = aux_cu_src.client_secret;
        this.brand = aux_cu_src.brand;
        this.default = false;
    };
    sources.prototype.set_selected = function () {
        this.facturacion_list_class = sources.FACTURACION_LIST_CLASS_SELECTED;
        this.selected = true;
    };
    sources.prototype.deselect = function () {
        this.facturacion_list_class = '';
        this.selected = false;
    };
    sources.FACTURACION_LIST_CLASS_SELECTED = 'list_source_selected';
    return sources;
}());

//# sourceMappingURL=sources.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data_sources__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data_subscriptions__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FacturacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacturacionPage = /** @class */ (function () {
    function FacturacionPage(userData, navCtrl, navParams, loadingCtrl, alertCtrl) {
        this.userData = userData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.stripe = Stripe('pk_test_4CJTbKZki9tC21cGTx4rLPLO');
        this.sources = new Array();
        this.selected_source = null;
        this.selected_plan = null;
        this.invitationCode = null;
        this.invitationshow = false;
    }
    FacturacionPage.prototype.ionViewDidLoad = function () {
        //Debugger.log(['facturation checks',this.userData.subscription]);
        this.setupStripe();
        this.loadSources();
    };
    FacturacionPage.prototype.selectCard = function (input_src) {
        //Debugger.log(['selecting source',input_src]);
        this.selected_source = input_src;
        this.selected_source.set_selected();
    };
    FacturacionPage.prototype.selectPlan = function (input_plan) {
        this.selected_plan = input_plan;
        this.userData.setcssplanselected(input_plan);
    };
    FacturacionPage.prototype.suscribirse = function () {
        //Debugger.log(['suscribirse']);
        //Debugger.log(["card seleccionado",this.selected_source]);
        if (this.selected_source === null) {
            //Debugger.log(['NO HAZ ELEGIDO METODO DE PAGO']);
            return false;
        }
        //Debugger.log(["plan seleccionado",this.selected_plan]);
        if (this.selected_plan === null) {
            //Debugger.log(['NO HAZ ELEGIDO PLAN']);
            return false;
        }
        //Debugger.log(['validation passed como hacer una suscripcion por stripe = 0']);
        if (this.userData.subscription.nid === null) {
            //Debugger.log(['new subscription']);
            var aux_sus = __WEBPACK_IMPORTED_MODULE_4__providers_user_data_subscriptions__["a" /* subscriptions */].getEmptySuscription();
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
        }
        else {
            //Debugger.log(['UPDATE SUSCRIPTION NOT IMPLEMENTED YET']);
        }
    };
    FacturacionPage.prototype.invitationSub = function () {
        if (this.invitationCode.localeCompare('all') === 0) {
            //Debugger.log(['all not permited']);
            return false;
        }
        var loading = this.loadingCtrl.create({
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
    };
    FacturacionPage.prototype.showInvitation = function () {
        this.invitationshow = !this.invitationshow;
    };
    FacturacionPage.prototype.popRemoveDoctorSus = function (uid) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Remover Doctor',
            message: '¿Está seguro que desea remover este doctor de la subscripción?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.removeDoctorSus(uid);
                    }
                }
            ]
        });
        alert.present();
    };
    FacturacionPage.prototype.removeDoctorSus = function (uid) {
        if (this.userData.userData.uid === uid) {
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
    };
    FacturacionPage.prototype.loadSources = function () {
        //Debugger.log(['loading srcs']);
        var old_selected = this.selected_source;
        this.sources = new Array();
        for (var i = 0; i < this.userData.userData.field_src_json_info.und.length; i++) {
            var new_source = new __WEBPACK_IMPORTED_MODULE_3__providers_user_data_sources__["a" /* sources */]();
            new_source.setData(this.userData.userData.field_src_json_info.und[i]);
            this.sources.push(new_source);
            if (old_selected !== null && new_source.src_id === old_selected.src_id)
                this.selected_source = new_source;
        }
    };
    FacturacionPage.prototype.setupStripe = function () {
        var _this = this;
        if (this.userData.subscription === null || this.userData.subscription.plan === null) {
            var elements = this.stripe.elements();
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
            this.card.addEventListener('change', function (event) {
                var displayError = document.getElementById('card-errors');
                if (event.error) {
                    displayError.textContent = event.error.message;
                }
                else {
                    displayError.textContent = '';
                }
            });
            var form = document.getElementById('payment-form');
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                // this.stripe.createToken(this.card)
                _this.stripe.createSource(_this.card).then(function (result) {
                    if (result.error) {
                        var errorElement = document.getElementById('card-errors');
                        errorElement.textContent = result.error.message;
                    }
                    else {
                        //Debugger.log(["result source added"]);
                        //console.log(JSON.stringify(result));
                        var cu_src_data = {
                            id: result.source.id,
                            last4: result.source.card.last4,
                            client_secret: result.source.client_secret,
                            brand: result.source.card.brand
                        };
                        _this.userData.userData.field_src_json_info['und'].push({ value: JSON.stringify(cu_src_data) });
                        /*console.log( this.userData.userData.field_src_json_info);*/
                    }
                    _this.userData.updateUser().subscribe(function (val) {
                        //Debugger.log(['se guardo el stripe source']);
                        _this.loadSources();
                    });
                });
            });
        }
    };
    FacturacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-facturacion',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\facturacion\facturacion.html"*/'<!--\n\n  Generated template for the FacturacionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<header></header>\n\n<ion-content padding class="drap_content">\n\n  <!--<div class="modalPage_header">\n\n    <div class="modalPage_logo"><img src="https://vagapp.mx/themes/nortec/img/logo-intro.svg"/></div>\n\n    <div class="modalPage_title">\n\n      <span class="spanBlock midFont"><b>Facturación</b></span>\n\n      <span class="spanBlock midSubFont">Verifica los datos de tu suscripción.</span>\n\n    </div>\n\n  </div>\n\n  <div class="fact_page_wrapper">\n\n    <div *ngIf="!userData.checkUserSuscription([userData.PLAN_ANY])" class="access_code_opt"><span (click)="showInvitation();" class="access_code_opt_link">Tengo un código de invitación</span></div>\n\n    <div *ngIf="!userData.checkUserSuscription([userData.PLAN_ANY]) && invitationshow" class="acesss_code_show"><ion-item class="acesss_code_show_input">\n\n        <ion-input placeholder="Código de invitación" [(ngModel)]="invitationCode"></ion-input>\n\n      </ion-item>\n\n      <button class="generalButton largeButton bgColorPrimary" (click)="invitationSub()" >Enviar</button>  \n\n    </div>\n\n  <div class="fact_subs_info fac_tsection">\n\n    <div class="fact_myplan" *ngIf="userData.checkUserSuscription([userData.PLAN_ANY])">\n\n      <span class="myplan_block">Plan activo: {{userData.subscription.plan.title}}</span>\n\n      <span *ngIf="this.userData.checkUserPlanHolder()">\n\n      <span class="myplan_block">Código de invitación: {{userData.subscription.field_invitation_code}}</span>\n\n      <span class="myplan_explain">Entrégale este código a los doctores con los que quieras compartir esta suscripción a <span class="colorPrimary">DRAP</span></span>\n\n      <span class="myplan_block">Doctores Afiliados:</span>\n\n      <span *ngFor="let dctr of userData.subscription.field_doctores_info" class="myplan_doctor">{{dctr.name}} <span class="delete_doctor" *ngIf="this.userData.userData.uid !== dctr.uid" (click)="popRemoveDoctorSus(dctr.uid);">remover</span></span>\n\n      <span class="myplan_block">Subcuentas activas:{{userData.subscription.noSubcuentas}}</span>\n\n      </span>\n\n      <span *ngIf="!this.userData.checkUserPlanHolder()">\n\n          <span class="myplan_block">Usted esta afiliado a una subscripción administrada por otro usuario</span>\n\n      </span>\n\n    </div>\n\n    <div class="fact_myplan noplan" *ngIf="!userData.checkUserSuscription([userData.PLAN_ANY])">\n\n        <span class="fact_label">Usted no cuenta con un plan activo, seleccione un plan.</span>\n\n        <div *ngFor="let factplan of this.userData.planes" [class.selectedplan]="factplan.css_fact_selected" class="fact_pna_item" (click)="selectPlan(factplan);">\n\n          {{factplan.title}} \n\n        </div>\n\n    </div>\n\n  </div>\n\n<div class="fact_page_content fact_section">\n\n  <div class="fact_payment_methods" *ngIf="!userData.checkUserSuscription([userData.PLAN_ANY])">\n\n    <span class="fact_label">seleccione un método de pago:</span>\n\n    <div *ngFor="let src of this.sources" (click)="selectCard(src)"   [class.selectedsrc]="src.selected" class="fact_src_unit">\n\n      {{src.brand}} **** **** **** {{src.last4}}\n\n    </div>\n\n  <span class="fact_label">agregar un método de pago:</span>\n\n  <div class="forwrapper">\n\n  <form action="/" method="post" id="payment-form">\n\n    \n\n    <div class="form-row">\n\n      <div id="card-element">\n\n      \n\n      </div>\n\n\n\n    \n\n      <div id="card-errors" role="alert"></div>\n\n    </div>\n\n\n\n  <button ion-button block large>Agregar Tarjeta</button>\n\n  </form>\n\n  </div>\n\n  </div>\n\n</div>\n\n</div>\n\n<div class="checkout">\n\n  <div class="details"></div>\n\n  <div class="button_section">\n\n      <button (click)="suscribirse()" [disabled]="this.selectCard === null || this.selectPlan === null" *ngIf="userData.subscription === null || userData.subscription.plan === null" ion-button block large>Suscribirse</button>\n\n  </div>\n\n</div>-->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\facturacion\facturacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FacturacionPage);
    return FacturacionPage;
}());

//# sourceMappingURL=facturacion.js.map

/***/ })

});
//# sourceMappingURL=2.js.map
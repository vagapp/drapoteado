webpackJsonp([0],{

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModalPageModule", function() { return RegisterModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_modal__ = __webpack_require__(381);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterModalPageModule = /** @class */ (function () {
    function RegisterModalPageModule() {
    }
    RegisterModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register_modal__["a" /* RegisterModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register_modal__["a" /* RegisterModalPage */]),
            ],
        })
    ], RegisterModalPageModule);
    return RegisterModalPageModule;
}());

//# sourceMappingURL=register-modal.module.js.map

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

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data_sources__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data_subscriptions__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_clipboard__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_cordova_available_cordova_available__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_drupal_user_manager_drupal_user_manager__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_permissions_permissions__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_subscription_data_subscription_data__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_alert_alert__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_loader_loader__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_subscription_manager_subscription_manager__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



//import { Debugger } from '../../providers/user-data/debugger';










/**
 * Generated class for the RegisterModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterModalPage = /** @class */ (function () {
    function RegisterModalPage(navCtrl, viewCtrl, navParams, userData, loadingCtrl, alertCtrl, clipboard, ica, userMan, permissions, subsData, subsManager, alert, loader) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.clipboard = clipboard;
        this.ica = ica;
        this.userMan = userMan;
        this.permissions = permissions;
        this.subsData = subsData;
        this.subsManager = subsManager;
        this.alert = alert;
        this.loader = loader;
        this.passconfirm = null;
        this.onGroup = null;
        this.grupoOtro = null;
        this.hospitalOotro = null;
        this.onHospital = null;
        this.stripe = Stripe('pk_test_4CJTbKZki9tC21cGTx4rLPLO');
        this.sources = new Array();
        this.selected_source = null;
        this.selected_plan = null;
        this.invitationCode = null;
        this.invitationshow = false;
        this.isnew = true;
    }
    Object.defineProperty(RegisterModalPage.prototype, "onCordova", {
        get: function () {
            return this.ica.isCordovaAvailable;
        },
        enumerable: true,
        configurable: true
    });
    RegisterModalPage.prototype.ionViewDidLoad = function () {
        console.log(this.subsData.subscription);
        this.isnew = !this.userData.checkIsLoggedin();
        console.log('openingregister modal isnew? ', this.isnew);
    };
    RegisterModalPage.prototype.ionViewDidEnter = function () {
        this.setupStripe();
        this.loadSources();
    };
    RegisterModalPage.prototype.actionUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var aux_userData, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.basicValidation()) {
                            return [2 /*return*/, 0];
                        }
                        this.loader.presentLoader('Actualizando...');
                        aux_userData = JSON.parse(JSON.stringify(this.userData.userData));
                        delete aux_userData.field_sub_id;
                        delete aux_userData.field_tipo_de_usuario;
                        return [4 /*yield*/, this.userMan.updateUserd(aux_userData).toPromise()];
                    case 1:
                        res = _a.sent();
                        this.loader.dismissLoader();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterModalPage.prototype.actionRegister = function () {
        var _this = this;
        if (!this.basicValidation()) {
            return 0;
        }
        this.loader.presentLoader('Registrando ...');
        var cloneData = JSON.parse(JSON.stringify(this.userData.userData));
        delete cloneData.field_sub_id;
        cloneData.field_useremail.und[0].email = this.userData.userData.mail;
        cloneData.field_tipo_de_usuario.und[0] = "1";
        delete cloneData.field_plan_date;
        delete cloneData.field_src_json_info;
        delete cloneData.field_stripe_customer_id;
        delete cloneData.field_sub_id;
        delete cloneData.field_doctores;
        delete cloneData.field_forma_pago;
        delete cloneData.field_plan_date;
        //Debugger.log(['register',this.userData.userData]);
        var register_observer = this.userData.register(cloneData);
        register_observer.subscribe(function (val) {
            window.location.reload();
        }, function (response) {
            //Debugger.log(["POST call in error", response]);
            if (response && response.error && response.error.form_errors) {
                var error_msg = "Se encontraron los siguientes errores:";
                for (var key in response.error.form_errors) {
                    error_msg += "\n            " + response.error.form_errors[key];
                }
                _this.alert.presentAlert('Error', error_msg);
            }
            _this.loader.dismissLoader();
        }, function () {
        });
    };
    RegisterModalPage.prototype.basicValidation = function () {
        var ret = true;
        if (this.userData.userData.pass && !this.passconfirm || !this.userData.userData.pass && this.passconfirm) {
            this.alert.presentAlert('Error', 'Confirmar contraseña.');
        }
        if (this.userData.userData.pass && this.passconfirm && this.passconfirm.localeCompare(this.userData.userData.pass) !== 0) {
            ret = false;
            this.alert.presentAlert('Error', 'Las contraseñas no coinciden.');
        }
        return ret;
    };
    RegisterModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RegisterModalPage.prototype.selectCard = function (input_src) {
        //Debugger.log(['selecting source',input_src]);
        this.selected_source = input_src;
        this.selected_source.set_selected();
    };
    RegisterModalPage.prototype.selectPlan = function (input_plan) {
        this.selected_plan = input_plan;
        this.userData.setcssplanselected(input_plan);
    };
    RegisterModalPage.prototype.suscribirse = function () {
        if (this.selected_source === null) {
            return false;
        }
        if (this.selected_plan === null) {
            return false;
        }
        this.loader.presentLoader('Subscribiendo ...');
        if (this.subsData.subscription.nid === null) {
            var aux_sus = __WEBPACK_IMPORTED_MODULE_4__providers_user_data_subscriptions__["a" /* subscriptions */].getEmptySuscription();
            aux_sus.plan = this.selected_plan;
            aux_sus.field_plan_sus = this.selected_plan.nid;
            aux_sus.field_plan_holder = this.userData.userData.uid;
            aux_sus.field_doctores = new Array();
            aux_sus.field_doctores.push(this.userData.userData.uid);
            aux_sus.field_stripe_src_sus_id = this.selected_source.src_id;
            aux_sus.field_stripe_cus_sub_id = this.userData.userData.field_stripe_customer_id.und[0].value;
            var res = this.subsManager.generateNewSus(aux_sus).toPromise();
            if (res)
                window.location.reload();
            else
                this.loader.dismissLoader();
        }
    };
    RegisterModalPage.prototype.invitationSub = function () {
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
    };
    RegisterModalPage.prototype.showInvitation = function () {
        this.invitationshow = !this.invitationshow;
    };
    RegisterModalPage.prototype.popRemoveDoctorSus = function (uid) {
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
    };
    RegisterModalPage.prototype.removeDoctorSus = function (uid) {
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
    };
    RegisterModalPage.prototype.loadSources = function () {
        if (!this.isnew) {
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
        }
    };
    RegisterModalPage.prototype.checkStripeSetup = function () {
        var ret = (!this.isnew &&
            this.userData.checkUserPermission([__WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */].TIPO_DOCTOR])
            && (this.subsData.subscription === null || this.subsData.subscription.plan === null));
        return ret;
    };
    RegisterModalPage.prototype.setupStripe = function () {
        var _this = this;
        if (this.checkStripeSetup()) {
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
            //let crd = document.getElementById("card-element");
            //Debugger.log([crd]);
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
                var loading = _this.loadingCtrl.create({
                    content: 'agregando tarjeta...'
                });
                loading.present();
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
                        //Debugger.log(['userdatajson',this.userData.userData.field_src_json_info]);
                        /*console.log( this.userData.userData.field_src_json_info);*/
                    }
                    _this.userData.updateUser().subscribe(function (val) {
                        //Debugger.log(['se guardo el stripe source']);
                        _this.loadSources();
                        loading.dismiss();
                    }, function (response) {
                        loading.dismiss();
                    });
                });
            });
        }
    };
    RegisterModalPage.prototype.copyCode = function () {
        /*this.clipboard.copy(this.userData.subscription.field_invitation_code);*/
    };
    RegisterModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register-modal',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\register-modal\register-modal.html"*/'<!--\n\n  Generated template for the RegisterModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content class="register_content">\n\n    <div class="modal_closer" *ngIf="!this.isnew" (click)="this.dismiss();">Volver</div>\n\n      <div *ngIf="!isnew"  class="fact_page_wrapper">\n\n        <div *ngIf="!permissions.checkUserSuscription([userData.PLAN_ANY])" class="access_code_opt"><span (click)="showInvitation();" class="access_code_opt_link">Tengo un código de invitación</span></div>\n\n        <!--<div *ngIf="!permissions.checkUserSuscription([userData.PLAN_ANY]) && invitationshow" class="acesss_code_show"><ion-item class="acesss_code_show_input">\n\n            <ion-input placeholder="Código de invitación" [(ngModel)]="invitationCode"></ion-input>\n\n          </ion-item>\n\n          <button class="generalButton largeButton bgColorPrimary" (click)="invitationSub()" >Enviar</button>  \n\n        </div>-->\n\n      <div class="fact_subs_info fac_tsection">\n\n        <div class="fact_myplan" *ngIf="permissions.checkUserSuscription([userData.PLAN_ANY])">\n\n          <span class="myplan_block">Plan activo: {{subsData.subscription.plan.title}}</span>\n\n          <!--<span *ngIf="this.permissions.checkUserPlanHolder()">\n\n          <button  *ngIf="onCordova"  class="generalButton copyCodeBtn"  (click)="copyCode()">Copiar Código de invitación</button>\n\n          <span class="myplan_explain">Entrégale este código a los doctores con los que quieras compartir esta suscripción a <span class="colorPrimary">DRAP</span></span>\n\n          <span class="myplan_block">Doctores Afiliados:</span>\n\n          <span *ngFor="let dctr of subsData.subscription.field_doctores_info" class="myplan_doctor">{{dctr.name}} <span class="delete_doctor" *ngIf="this.userData.userData.uid !== dctr.uid" (click)="popRemoveDoctorSus(dctr.uid);">remover</span></span>\n\n          <span class="myplan_block">Subcuentas activas:{{subsData.subscription.noSubcuentas}}</span>\n\n          </span>-->\n\n          <span *ngIf="!this.permissions.checkUserPlanHolder()">\n\n              <span class="myplan_block">Usted esta afiliado a una subscripción administrada por otro usuario</span>\n\n          </span>\n\n        </div>\n\n        <div class="fact_myplan noplan" *ngIf="!permissions.checkUserSuscription([userData.PLAN_ANY])">\n\n            <span class="fact_label">Usted no cuenta con un plan activo, seleccione un plan.</span>\n\n            <div *ngFor="let factplan of this.userData.planes" [class.selectedplan]="factplan.css_fact_selected" class="fact_pna_item" (click)="selectPlan(factplan);">\n\n              {{factplan.title}} \n\n            </div>\n\n        </div>\n\n      </div>\n\n    <div class="fact_page_content fact_section">\n\n      <div class="fact_payment_methods" *ngIf="this.checkStripeSetup()"> <!--*ngIf="!userData.checkUserSuscription([userData.PLAN_ANY])"-->\n\n        <span class="fact_label">seleccione un método de pago:</span>\n\n        <div *ngFor="let src of this.sources" (click)="selectCard(src)"   [class.selectedsrc]="src.selected" class="fact_src_unit">\n\n          {{src.brand}} **** **** **** {{src.last4}}\n\n        </div>\n\n      <span class="fact_label">agregar un método de pago:</span>\n\n      <div class="forwrapper">\n\n      <form action="/" method="post" id="payment-form">\n\n        \n\n        <div class="form-row">\n\n          <div id="card-element">\n\n            <!-- a Stripe Element will be inserted here. -->\n\n          </div>\n\n    \n\n          <!-- Used to display Element errors -->\n\n          <div id="card-errors" role="alert"></div>\n\n        </div>\n\n    \n\n      <button ion-button block large>Agregar Tarjeta</button>\n\n      </form>\n\n      </div>\n\n      </div>\n\n    </div>\n\n    </div>\n\n    <div class="checkout">\n\n      <div class="details"></div>\n\n      <div class="button_section">\n\n          <button (click)="suscribirse()" [disabled]="this.selectCard === null || this.selectPlan === null" *ngIf="this.checkStripeSetup()" ion-button block large>Suscribirse</button>\n\n      </div>\n\n    </div>\n\n\n\n  <div class="register_contet_head">\n\n    <div class="bigFont" *ngIf="this.isnew"> <span class="fontPrimary"><b>Registro</b></span> <span class="lightFont">de Nuevo Usuario</span></div>\n\n    <div class="midSubFont" *ngIf="this.isnew"> Por favor proporciona los siguientes datos: </div>\n\n    <div class="bigFont" *ngIf="!this.isnew"> <span class="fontPrimary"><b>Datos</b></span> <span class="lightFont">de Usuario</span></div>\n\n  </div>\n\n  <div class="register_contet_form">\n\n    <div class="register_base register_form_section rfsFlex">\n\n        <div class="registerInput">\n\n            <b>Email:</b><input [(ngModel)]="this.userData.userData.mail" type="text"/>\n\n          </div>\n\n          <div class="registerInput">\n\n              <b>Username:</b><input [(ngModel)]="this.userData.userData.name" type="text" />\n\n            </div>\n\n            <div class="registerInput">\n\n                <b>Contraseña:</b><input [(ngModel)]="this.userData.userData.pass" type="password"/>\n\n              </div>\n\n              <div class="registerInput">\n\n                <b>Confirmar:</b><input [(ngModel)]="passconfirm" type="password"/>\n\n              </div>\n\n              <div class="registerInput">\n\n                <b>Nombre:</b><input [(ngModel)]="this.userData.userData.field_nombre.und[0].value" type="text"/>\n\n              </div>\n\n              <div class="registerInput">\n\n                <b>Apellido:</b><input  [(ngModel)]="this.userData.userData.field_apellidos.und[0].value"  type="text" />\n\n              </div>\n\n              \n\n              <div class="registerInput">\n\n                <b>Especialidad:</b><input [(ngModel)]="this.userData.userData.field_especialidad.und[0].value" type="text"/>\n\n              </div>\n\n            \n\n              <div class="registerInput">\n\n                <b>Alias:</b><input [(ngModel)]="this.userData.userData.field_alias.und[0].value" type="text"/>\n\n              </div>\n\n             \n\n    </div>\n\n\n\n    <!--<div class="register_group register_form_section">\n\n      <div class="group_sect">\n\n          <span class="group_sect_element radio_group_wrapper">\n\n            <span class="spanBlock ">\n\n              ¿Pertenece a un grupo mèdico?\n\n            </span> \n\n              <span class="radio_group" >\n\n                <span><input [(ngModel)]="this.onGroup" type="radio" name="ongroup" value="1">Sí</span> \n\n                <span><input [(ngModel)]="this.onGroup" type="radio" name="ongroup" value="0">No</span></span>\n\n              </span>\n\n          <span class="group_sect_element"><span class="registerInput" *ngIf="(this.onGroup == true)">\n\n            <select  class="input_select input">\n\n              <option selected disabled value="0">SELECT</option>\n\n            </select>\n\n          </span></span>\n\n          <span class="group_sect_element"><span class="registerInput"  *ngIf="(this.onGroup == true)"><input  [(ngModel)]="this.grupoOtro" class="registerInput"  placeholder="OTHER" type="text" /></span></span>\n\n      </div>\n\n\n\n\n\n      <div class="group_sect">\n\n          <span class="group_sect_element radio_group_wrapper">\n\n            <span class="spanBlock ">\n\n                ¿Pertenece a algún Hospital ó Comunidad Médica?\n\n            </span> \n\n              <span class="radio_group">\n\n                <span><input [(ngModel)]="this.onHospital" type="radio" name="onHospital" value="1">Sí</span> \n\n                <span><input [(ngModel)]="this.onHospital" type="radio" name="onHospital" value="0">No</span></span>\n\n              </span>\n\n          <span class="group_sect_element"><span class="registerInput" *ngIf="(this.onHospital == true)">\n\n            <select  class="input_select input">\n\n              <option selected disabled value="0">SELECT</option>\n\n            </select>\n\n          </span></span>\n\n          <span class="group_sect_element"><span class="registerInput" *ngIf="(this.onHospital == true)"><input  [(ngModel)]="this.hospitalOotro" class="registerInput" placeholder="OTHER" type="text" /></span></span>\n\n      </div>\n\n    </div>-->\n\n\n\n    <div class="register_ubication register_form_section rfsFlex">\n\n        <div class="registerInput">\n\n            <b>Calle:</b><input [(ngModel)]="this.userData.userData.field_calle.und[0].value"  type="text"/>\n\n        </div>\n\n        <div class="ubication_det">\n\n            <span class="ubdet_input"> <b>No. Ext.</b> <input [(ngModel)]="this.userData.userData.field_no_ext.und[0].value"  type="text"/></span>\n\n            <span class="ubdet_input"> <b>No. Int.</b><input [(ngModel)]="this.userData.userData.field_no_int.und[0].value"  type="text"/></span>\n\n            <span class="ubdet_input"> <b>C.P</b> <input [(ngModel)]="this.userData.userData.field_codigo_postal.und[0].value"  type="text"/></span>\n\n        </div>\n\n        <div class="registerInput">\n\n            <b>Ciudad:</b><input [(ngModel)]="this.userData.userData.field_ciudad.und[0].value"  type="text"/>\n\n        </div>\n\n        <div class="registerInput">\n\n            <b>Colonia:</b><input [(ngModel)]="this.userData.userData.field_colonia.und[0].value"  type="text"/>\n\n        </div>\n\n        <div class="registerInput">\n\n            <b>País:</b><input [(ngModel)]="this.userData.userData.field_pais.und[0].value"  type="text"/>\n\n        </div>\n\n        <div class="registerInput">\n\n            <b>Municipio o Del.:</b><input [(ngModel)]="this.userData.userData.field_municipio.und[0].value"  type="text"/>\n\n        </div>\n\n        <div class="registerInput">\n\n          <b>Estado:</b>\n\n        <select  class="input_select input" [(ngModel)]="this.userData.userData.field_estado_ubicacion.und[0].value">\n\n            <option selected disabled value="0">SELECT</option>\n\n            <option selected  value="Aguascalientes">Aguascalientes</option>\n\n            <option selected  value="Baja California">Baja California</option>\n\n            <option selected  value="Baja California Sur">Baja California Sur</option>\n\n            <option selected  value="Campeche">Campeche</option>\n\n            <option selected  value="Chihuahua">Chihuahua</option>\n\n            <option selected  value="Chiapas">Chiapas</option>\n\n            <option selected  value="Coahuila">Coahuila</option>\n\n            <option selected  value="Colima">Colima</option>\n\n            <option selected  value="Durango">Durango</option>\n\n            <option selected  value="Guanajuato">Guanajuato</option>\n\n            <option selected  value="Guerrero">Guerrero</option>\n\n            <option selected  value="Hidalgo">Hidalgo</option>\n\n            <option selected  value="Jalisco">Jalisco</option>\n\n            <option selected  value="México">México</option>\n\n            <option selected  value="Michoacán">Michoacán</option>\n\n            <option selected  value="Morelos">Morelos</option>\n\n            <option selected  value="Nayarit">Nayarit</option>\n\n            <option selected  value="Nuevo León">Nuevo León</option>\n\n            <option selected  value="Oaxaca">Oaxaca</option>\n\n            <option selected  value="Puebla">Puebla</option>\n\n            <option selected  value="Querétaro">Querétaro</option>\n\n            <option selected  value="Quintana Roo">Quintana Roo</option>\n\n            <option selected  value="San Luis Potosí">San Luis Potosí</option>\n\n            <option selected  value="Sinaloa">Sinaloa</option>\n\n            <option selected  value="Sonora">Sonora</option>\n\n            <option selected  value="Tabasco">Tabasco</option>\n\n            <option selected  value="Tamaulipas">Tamaulipas</option>\n\n            <option selected  value="Tlaxcala">Tlaxcala</option>\n\n            <option selected  value="Veracruz">Veracruz</option>\n\n            <option selected  value="Yucatán">Yucatán</option>\n\n            <option selected  value="Zacatecas">Zacatecas</option>\n\n          </select>\n\n        </div>\n\n    </div>\n\n   \n\n    <!--\n\n    <div class="register_payment register_form_section rfsFlex">\n\n        <div class="registerInput">\n\n            <b>Forma de Pago: </b>\n\n          <select  class="input_select input">\n\n              <option selected disabled value="0">SELECT</option>\n\n            </select>\n\n          </div>\n\n        <div class="registerInput">\n\n            <b>Referido Por:</b><input type="text"/>\n\n        </div>\n\n        <div class="registerInput">\n\n            <b>Tipo de Plan:</b>\n\n          <select  class="input_select input">\n\n              <option selected disabled value="0">Básico</option>\n\n            </select>\n\n          </div>\n\n    </div>\n\n    <div class="registro_planes register_form_section">\n\n      <div class="plan_basico plan_twosided plan_span">\n\n        <div class="reg_plan_section ">\n\n          <div class="rps_title bigFont">Plan <b class="fontPrimary">Básico</b></div>\n\n          <div class="bigSubFont">$199</div>\n\n        </div>\n\n        <div class="reg_plan_section rps_lefFont">\n\n          <div class="midFont">Características</div>\n\n          <div class="midSubFont">Obtén reportes detallados de tu actividad al cierre del día</div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  -->\n\n    <div class="register_last">\n\n    <div class="register_button_section">\n\n    <button *ngIf="isnew"   class="bgColorPrimary generalButton" (click)="actionRegister()" >Registrarme</button>\n\n    <button *ngIf="!isnew"   class="bgColorPrimary generalButton" (click)="actionUpdate()" >Actualizar Datos</button>\n\n    </div>\n\n    <div class="bluelink_wrapper">\n\n    <a  *ngIf="this.isnew"   class="blueLink midFont" (click)="this.dismiss();">¡Ya Tengo una Cuenta!</a>\n\n  \n\n  </div>\n\n  </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\register-modal\register-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_6__providers_cordova_available_cordova_available__["a" /* CordovaAvailableProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_drupal_user_manager_drupal_user_manager__["a" /* DrupalUserManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_permissions_permissions__["a" /* PermissionsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_subscription_data_subscription_data__["a" /* SubscriptionDataProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_subscription_manager_subscription_manager__["a" /* SubscriptionManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_loader_loader__["a" /* LoaderProvider */]])
    ], RegisterModalPage);
    return RegisterModalPage;
}());

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
//# sourceMappingURL=register-modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
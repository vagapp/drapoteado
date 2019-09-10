webpackJsonp([20],{

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiplanPageModule", function() { return MiplanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__miplan__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_tooltips__ = __webpack_require__(426);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MiplanPageModule = /** @class */ (function () {
    function MiplanPageModule() {
    }
    MiplanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__miplan__["a" /* MiplanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__miplan__["a" /* MiplanPage */]),
                __WEBPACK_IMPORTED_MODULE_4_ionic_tooltips__["a" /* TooltipsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], MiplanPageModule);
    return MiplanPageModule;
}());

//# sourceMappingURL=miplan.module.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiplanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_planes_data_planes_data__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_permissions_permissions__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_subscription_data_subscription_data__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loader_loader__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_subscription_manager_subscription_manager__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_conekta_conekta__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_base_url_base_url__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_user_data_subscriptions__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_subusers_data_subusers_data__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_subusers_manager_subusers_manager__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_ws_messenger_ws_messenger__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_date_date__ = __webpack_require__(41);
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

















/**
 * Generated class for the MiplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MiplanPage = /** @class */ (function () {
    function MiplanPage(navCtrl, navParams, userData, permissions, planesData, subsData, alert, loader, subsManager, conekta, bu, http, subuserData, subuserMan, wsMessenger) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.permissions = permissions;
        this.planesData = planesData;
        this.subsData = subsData;
        this.alert = alert;
        this.loader = loader;
        this.subsManager = subsManager;
        this.conekta = conekta;
        this.bu = bu;
        this.http = http;
        this.subuserData = subuserData;
        this.subuserMan = subuserMan;
        this.wsMessenger = wsMessenger;
        this.sources = new Array();
        this.selected_source = null;
        this.onplanchange = false;
        this.selectedPlan = null; //cargar selected plan
        this.selectedPlanObject = null; //objeto del plan seleccionado para suscripcion.
        this.selectedAditionals = 0;
        this.selectedAditionalsDocs = 0;
        this.selectedMethod = null;
        this.cantcancel = false;
        this.isgroup = false;
        //conekta.init('https://cdn.conekta.io/js/latest/conekta.js','key_FSKYyuv2qSAEryHAMM7K1dA').then((c) => {
        conekta.init('https://cdn.conekta.io/js/latest/conekta.js', 'key_GtbbRJpEKq8zTrtq3EPCTqQ').then(function (c) {
            //Este success se ejecuta con el javascript se cargó correctamente
            console.log(c);
        }).catch(function (err) {
            //Este error se ejecuta cuando el javascript no cargó, Ej. Error de conexión
            console.log(err);
        });
    }
    Object.defineProperty(MiplanPage.prototype, "cantidad", {
        get: function () { return this.subsData.checkForSub() ? Number(this.subsData.subscription.field_cantidad) : 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiplanPage.prototype, "nextCobro", {
        get: function () {
            var ret = '';
            if (this.subsData.checkForSub() && this.subsData.subscription.field_next_cobro) {
                //console.log('trailnextcobro field ',this.subsData.subscription.field_next_cobro);
                //console.log('trailnextcobro date',new Date(Number(this.subsData.subscription.field_next_cobro)*1000));
                var auxdate = new Date(Number(this.subsData.subscription.field_next_cobro) * 1000);
                var aux_dispdates = __WEBPACK_IMPORTED_MODULE_16__providers_date_date__["a" /* DateProvider */].getDisplayableDates(auxdate);
                ret = aux_dispdates.date;
            }
            return ret;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiplanPage.prototype, "subAdicionales", {
        get: function () { return this.subsData.checkForSub() ? Number(this.subsData.subscription.field_adicionales) : 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiplanPage.prototype, "docAdicionales", {
        get: function () { return this.subsData.checkForSub() ? Number(this.subsData.subscription.field_docsadicionales) : 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiplanPage.prototype, "subPlan", {
        get: function () { return this.subsData.checkForSub() ? Number(this.subsData.subscription.field_plan_sus) : 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiplanPage.prototype, "accountsLeft", {
        get: function () {
            return (12 + this.selectedAditionals) - this.subuserData.selectedForGroupNum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiplanPage.prototype, "PLAN_GROUP", {
        get: function () { return this.subsData.PLAN_GROUP; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiplanPage.prototype, "PLAN_ANY", {
        get: function () { return this.subsData.PLAN_ANY; },
        enumerable: true,
        configurable: true
    });
    MiplanPage.prototype.checkIs = function (nid, plan) {
        return Number(nid) === Number(plan);
    };
    Object.defineProperty(MiplanPage.prototype, "selectedTotal", {
        get: function () {
            var ret = 0;
            if (this.onplanchange) {
                ret = this.getTotal_onChangePlan();
            }
            else {
                ret = this.getTotal_noChangePlan();
            }
            return ret;
        },
        enumerable: true,
        configurable: true
    });
    MiplanPage.prototype.getTotal_onChangePlan = function () {
        var ret = 0;
        if (this.onplanchange) {
            var plan_costo = 0;
            if (this.selectedPlan) {
                var selected_plan = this.planesData.getPlanById(this.selectedPlan);
                if (selected_plan) {
                    plan_costo = Number(selected_plan.field_costo);
                    this.isgroup = (Number(selected_plan.nid) === Number(__WEBPACK_IMPORTED_MODULE_5__providers_subscription_data_subscription_data__["a" /* SubscriptionDataProvider */].PLAN_GROUP)) ? true : false;
                    console.log('this.isgroup', this.isgroup);
                }
            }
            ret = plan_costo;
            if (this.selectedAditionals > 0) {
                ret += Number(this.selectedAditionals * __WEBPACK_IMPORTED_MODULE_5__providers_subscription_data_subscription_data__["a" /* SubscriptionDataProvider */].EXTRA_SUB);
            }
            if (this.selectedAditionalsDocs > 0 && this.isgroup) {
                ret += Number(this.selectedAditionalsDocs * __WEBPACK_IMPORTED_MODULE_5__providers_subscription_data_subscription_data__["a" /* SubscriptionDataProvider */].EXTRA_DOC);
            }
            /* if(this.subsData.subscription){
             ret += Number(this.subsData.subscription.field_adicionales*40);
           }*/
        }
        return ret;
    };
    MiplanPage.prototype.getTotal_noChangePlan = function () {
        var ret = 0;
        if (!this.onplanchange && this.subsData.subscription && this.subsData.subscription.field_cantidad) {
            ret += Number((this.subsData.subscription.field_cantidad));
        }
        return ret;
    };
    MiplanPage.prototype.onChangeUsers = function (element, subuser) {
        var setTo = !subuser.selectedForGroup;
        if (setTo && this.accountsLeft > 0) {
            element.checked = subuser.selectedForGroup = true;
        }
        else {
            element.checked = subuser.selectedForGroup = false;
        }
    };
    MiplanPage.prototype.checkIfisgroupPlan = function (plan) {
        return Number(plan.nid) === Number(__WEBPACK_IMPORTED_MODULE_5__providers_subscription_data_subscription_data__["a" /* SubscriptionDataProvider */].PLAN_GROUP);
        ;
    };
    /***/
    MiplanPage.prototype.baja = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.alert.chooseAlert('Cancelar suscripción', '¿Estás seguro que deseas cancelar tu suscripción?, Si cancelas tu suscripción no podras acceder a tus citas, servicios y reportes.', function () { return __awaiter(_this, void 0, void 0, function () {
                    var ret;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!this.subsManager.checkForSubscription()) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.subsManager.deletesSus(this.subsData.subscription).toPromise()];
                            case 1:
                                ret = _a.sent();
                                console.log('cancel ret is', ret);
                                if (ret) {
                                    console.log('location reload here');
                                    this.bu.locationReload();
                                }
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); }, function () { console.log('se cancelo'); });
                return [2 /*return*/];
            });
        });
    };
    /*ERROR Y SUCCESS CONEKTA*/
    MiplanPage.prototype.successToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var cu_src_data, info;
            return __generator(this, function (_a) {
                cu_src_data = {
                    id: token.id,
                    last4: token.cardNumber,
                    client_secret: token.id,
                    brand: token.brand
                };
                info = {
                    "action": "add",
                    "data": {
                        "token": token.id
                    }
                };
                this.http.post(this.bu.endpointUrl + 'payment_methods', info).subscribe(function (res) {
                    if (res != null) {
                        _this.selectedMethod = res.default_payment_source_id;
                        //this.setdefaultPaymentSource(res.default_payment_source_id);
                        _this.parseSources(res);
                    }
                    else {
                        _this.selectedMethod = null;
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    MiplanPage.prototype.errorToken = function (error) {
        //Esta función se agrega al atributo (errorToken) para recibir lo errores al momento de generar un token
        console.log(error);
        var alerta = this.alert.alertCtrl.create({
            title: "Error",
            subTitle: error.message_to_purchaser,
            buttons: ["OK"]
        });
        alerta.present();
    };
    /*FIN ERROR Y SUCCESS CONEKTA*/
    MiplanPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter miplan.ts');
        //this.setupStripe();
        this.loadSources();
    };
    MiplanPage.prototype.calculateCostoOnChange = function () {
        var ret = 0;
        if (this.onplanchange) {
        }
        return ret;
    };
    MiplanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MiplanPage');
        console.log('planesdata is', this.planesData.planes);
        console.log('my sub is', this.subsData.subscription);
        this.subuserMan.cargarSubusuarios();
        if (!this.permissions.checkUserSuscription([this.userData.PLAN_ANY])) {
            this.activateChangePlanMode();
            this.cantcancel = true;
        }
        else {
            this.onplanchange = false;
            this.selectedPlan = this.subPlan;
            this.selectedPlanObject = this.planesData.getPlanById(this.selectedPlan);
        }
    };
    MiplanPage.prototype.activateChangePlanMode = function () {
        //this.setupStripe();
        console.log(' this.subsData.subscription', this.subsData.subscription);
        this.selectedAditionals = this.subAdicionales;
        this.selectedAditionalsDocs = this.docAdicionales;
        this.onplanchange = true;
        this.loadSources();
    };
    MiplanPage.prototype.editar = function () {
        console.log('change to onplanchange true');
        this.activateChangePlanMode();
    };
    MiplanPage.prototype.guardar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var view;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('trail2 saving to  onplanchange false', this.selectedPlan, this.subsData.isGroup);
                        if (!this.guardar_basic_validation())
                            return [2 /*return*/, false];
                        if (!this.guardar_subusernumber_validation())
                            return [2 /*return*/, false];
                        if (!(!this.subsData.isGroup && Number(this.selectedPlan) === Number(__WEBPACK_IMPORTED_MODULE_5__providers_subscription_data_subscription_data__["a" /* SubscriptionDataProvider */].PLAN_GROUP))) return [3 /*break*/, 2];
                        console.log('trail2 entrando a grrupo y no es grupo');
                        return [4 /*yield*/, this.subsManager.group_enter_selectedSubusersClean(this.subuserData.selectedForGroup, this.subsData.subscription)];
                    case 1:
                        _a.sent();
                        console.log('trail2 docs to reload', this.subsManager.aux_docstoReload);
                        view = this;
                        view.wsMessenger.generateSuboutofgroup(view.subsManager.aux_docstoReload, 1);
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.suscribirse()];
                    case 3:
                        _a.sent();
                        this.onplanchange = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    MiplanPage.prototype.guardar_basic_validation = function () {
        var ret = true;
        console.log('guardar_basic_validation', this.selectedPlan);
        if (!this.selectedPlan) {
            ret = false;
            this.alert.presentAlert('Error', 'Es necesario seleccionar un plan');
        }
        else {
            this.selectedPlanObject = this.planesData.getPlanById(this.selectedPlan);
        }
        console.log('guardar_basic_validation ret', ret);
        if (!this.selectedMethod) {
            ret = false;
            this.alert.presentAlert('Error', 'Es necesario seleccionar un Método de Pago');
        }
        return ret;
    };
    MiplanPage.prototype.guardar_subusernumber_validation = function () {
        var _this = this;
        var ret = true;
        console.log('guardar_subusernumber_validation', this.selectedAditionals, this.subsData.getSubAccountsTotal());
        if ((this.selectedAditionals + this.subsData.getplanAccounts()) < this.subsData.getUsedSubAccounts()) {
            console.log('no suficientes espacios mija');
            ret = false;
            //title, msg, inputs, inputcallback, cancelCallback
            this.alert.setStrings('Usuarios', 'Cancelar');
            this.alert.chooseAlert('Error', 'No puedes reducir tus usuarios adicionales por debajo del numero de usuarios con los que cuentas actualmente.', function () {
                _this.alert.resetStrings();
                _this.navCtrl.setRoot('UsuariosPage');
            }, function () {
                _this.alert.resetStrings();
            });
        }
        return ret;
    };
    MiplanPage.prototype.guardar_docnumber_validation = function () {
        var _this = this;
        var ret = true;
        console.log('guardar_docnumber_validation', this.selectedAditionalsDocs, this.subsData.getDocAccountsTotal());
        if ((this.selectedAditionalsDocs + this.subsData.getplanDocAccounts()) < this.subsData.getUsedDocAccounts()) {
            console.log('no suficientes espacios mija');
            ret = false;
            //title, msg, inputs, inputcallback, cancelCallback
            this.alert.setStrings('Grupo', 'Cancelar');
            this.alert.chooseAlert('Error', 'No puedes reducir tus doctores adicionales por debajo del numero de doctores con los que cuentas actualmente.', function () {
                _this.alert.resetStrings();
                _this.navCtrl.setRoot('GroupPage');
            }, function () {
                _this.alert.resetStrings();
            });
        }
        return ret;
    };
    MiplanPage.prototype.cancelar = function () {
        console.log('canceling to onplanchange false');
        this.onplanchange = false;
    };
    MiplanPage.prototype.operateExtra = function (operand) {
        console.log('operateExtra', operand);
        this.selectedAditionals += operand;
        if (this.selectedAditionals < 0)
            this.selectedAditionals = 0;
        console.log('aditionals are', this.selectedAditionals);
    };
    MiplanPage.prototype.operateExtraDoc = function (operand) {
        console.log('operateExtra', operand);
        this.selectedAditionalsDocs += operand;
        if (this.selectedAditionalsDocs < 0)
            this.selectedAditionalsDocs = 0;
        console.log('aditionals are', this.selectedAditionalsDocs);
    };
    MiplanPage.prototype.suscribirse = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret, aux_sus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('suscribirse start');
                        if (!this.enabledButton())
                            return [2 /*return*/, false];
                        this.loader.presentLoader('Subscribiendo ...');
                        console.log('suscribirse this.selectedMethod', this.selectedMethod);
                        console.log('suscribirse this.selectedPlanObject', this.selectedPlanObject);
                        if (!this.subsManager.checkForSubscription()) return [3 /*break*/, 2];
                        console.log('checked for subs did tru');
                        this.subsData.subscription.field_cantidad = this.selectedTotal;
                        this.subsData.subscription.field_plan_sus = this.selectedPlan;
                        this.subsData.subscription.field_adicionales = Number(this.selectedAditionals);
                        if (this.isgroup)
                            this.subsData.subscription.field_docsadicionales = Number(this.selectedAditionalsDocs);
                        return [4 /*yield*/, this.subsManager.updateSus(this.subsData.subscription).toPromise()];
                    case 1:
                        ret = _a.sent();
                        this.loader.dismissLoader();
                        console.log('sus udate returned', ret);
                        this.bu.locationReload();
                        return [3 /*break*/, 4];
                    case 2:
                        console.log('akiwe');
                        aux_sus = __WEBPACK_IMPORTED_MODULE_12__providers_user_data_subscriptions__["a" /* subscriptions */].getEmptySuscription();
                        aux_sus.field_cantidad = this.selectedTotal;
                        aux_sus.field_plan_sus = this.selectedPlan;
                        aux_sus.field_adicionales = Number(this.selectedAditionals);
                        if (this.isgroup)
                            aux_sus.field_adicionales = Number(this.selectedAditionalsDocs);
                        return [4 /*yield*/, this.subsManager.subscribe(this.selectedPlanObject, aux_sus)];
                    case 3:
                        _a.sent();
                        this.loader.dismissLoader();
                        this.bu.locationReload();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MiplanPage.prototype.gotoentergroup = function () {
        console.log('entering enter group page');
        this.navCtrl.setRoot('EntergrupoPage');
    };
    /*STRIPE METHODS*/
    MiplanPage.prototype.checkStripeSetup = function () {
        var ret = (this.onplanchange &&
            this.userData.checkUserPermission([__WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */].TIPO_DOCTOR]));
        return ret;
    };
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
    MiplanPage.prototype.loadSources = function () {
        var _this = this;
        console.log(this.bu.endpointUrl + 'payment_methods/' + this.userData.userData.uid);
        this.http.get(this.bu.endpointUrl + 'payment_methods/' + this.userData.userData.uid).subscribe(function (res) {
            if (res != null) {
                _this.selectedMethod = res.default_payment_source_id;
                _this.parseSources(res);
            }
        });
        //Debugger.log(['loading srcs']);
        /*let old_selected = this.selected_source;
        this.sources = new Array();
        for(let i = 0; i < this.userData.userData.field_src_json_info.und.length; i++){
          let new_source = new sources();
          new_source.setData(this.userData.userData.field_src_json_info.und[i]);
          this.sources.push(new_source);
          if(old_selected !== null && new_source.src_id === old_selected.src_id){ this.selected_source = new_source; this.selected_source.set_selected()}
          else  if(old_selected === null ){ this.selected_source = new_source; this.selected_source.set_selected()}
        }*/
    };
    MiplanPage.prototype.parseSources = function (src) {
        console.log(src.data);
        this.sources = src.data;
    };
    MiplanPage.prototype.removeCard = function (index, card) {
        var _this = this;
        var alerta = this.alert.alertCtrl.create({
            title: "Eliminar tarjeta",
            message: "¿Desea eliminar esta tarjeta?",
            buttons: [
                {
                    text: "Cancelar",
                    role: "cancel",
                    handler: function () {
                        console.log('se canceló');
                    }
                },
                {
                    text: "Eliminar",
                    handler: function () {
                        var info = {
                            "action": "delete",
                            "data": {
                                "position": index
                            }
                        };
                        _this.http.post(_this.bu.endpointUrl + 'payment_methods', info).subscribe(function (res) {
                            if (res != null) {
                                _this.selectedMethod = res.default_payment_source_id;
                                _this.parseSources(res);
                            }
                            else {
                                _this.selectedMethod = null;
                                _this.sources = [];
                            }
                        });
                    }
                }
            ]
        });
        alerta.present();
    };
    MiplanPage.prototype.selectCard = function (input_src) {
        var _this = this;
        var alerta = this.alert.alertCtrl.create({
            title: "Confirmar tarjeta",
            subTitle: "¿Desea asignar esta tarjeta como predeterminada?",
            message: "Todos sus pagos se realizarán por defecto con esta tarjeta.",
            buttons: [
                {
                    text: "Cancelar",
                    role: "cancel",
                    handler: function () {
                        console.log('se canceló');
                    }
                },
                {
                    text: "Predeterminar",
                    handler: function () {
                        var info = {
                            "action": "update",
                            "data": {
                                "source": input_src.id
                            }
                        };
                        _this.http.post(_this.bu.endpointUrl + 'payment_methods', info).subscribe(function (res) {
                            if (res != null) {
                                _this.selectedMethod = res.default_payment_source_id;
                                _this.parseSources(res);
                            }
                            else {
                                _this.selectedMethod = null;
                            }
                        });
                    }
                }
            ]
        });
        alerta.present();
    };
    MiplanPage.prototype.enabledButton = function () {
        console.log('enabledButton', this.selectedPlan !== null);
        //return this.selected_source !== null && this.selected_plan !== null;
        return this.selectedPlan !== null;
    };
    MiplanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-miplan',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\miplan\miplan.html"*/'<header></header>\n\n<ion-content padding>\n\n  <div class="modalPage_header">\n\n    <div class="modalPage_title">\n\n      <span class="spanBlock midFont"><b>Mi Plan</b></span>\n\n      <span class="spanBlock midSubFont">Revisa tu plan</span>\n\n    </div>\n\n    <div class="modalPage_lpane" *ngIf="onplanchange">\n\n    <button class="generalButton bgColorPrimary " [class.disabledsubbtn]="!this.enabledButton" [disabled]="this.selectCard === null || this.selected_plan === null" *ngIf="this.checkStripeSetup() && !cantcancel"  (click)="guardar()" >Guardar</button>\n\n    <button class="generalButton bgColorPrimary " *ngIf="onplanchange && !cantcancel" (click)="cancelar()" >Cancelar</button>\n\n    </div>\n\n    <div class="modalPage_lpane" *ngIf="!onplanchange && subsData.subscription">\n\n      <span class="spanBlock midFont">Total de tu suscripción mensual: <span class="fontPrimary bold">${{cantidad}}</span></span>\n\n      <span class="spanBlock midSubFont"> vence al {{nextCobro}}</span>\n\n      <button class="generalButton bgColorPrimary " *ngIf="!onplanchange" (click)="editar()">Editar</button>\n\n    </div>\n\n    </div>\n\n    <!-- Seccion con Información de planes  -->\n\n    <div class="basicpadding nopadtop">\n\n      Estamos convencidos que DRAP te ayudará a optimizar las consultas y pagos en tu consultorio. ¡Será mucho más fácil y seguro!\n\n    </div>\n\n    <div class="plans_block" *ngIf="onplanchange"> <!-- Seleccion de plan cuando onplanchange  -->\n\n      <span class="blockSpan info_plan_title" >Selecciona un Plan </span>\n\n\n\n      <div class="plan_section"  *ngFor="let plan of this.planesData.planes">\n\n        <div class="plan_section_hr">  <!-- Plan selection check start -->\n\n            <div class="control-group"> \n\n                <label class="control control-radio">\n\n                    <!--<input type="radio" name="rtype" value=""  [(ngModel)]="this.reportPresentator.type" checked="true"/>-->\n\n                    <input type="radio" name="selectedPlan" value="{{plan.nid}}" [(ngModel)]="this.selectedPlan"/>\n\n                    <div class="control_indicator"></div>\n\n                </label> \n\n                </div>  \n\n        </div> <!-- Plan selection check end -->\n\n        \n\n        <div class="plan_section_hr">  <span class="spanBlock bigSubFont">Plan <span class="fontPrimary bold"> {{plan.title}} </span></span> <span class="spanBlock"> <span class="midSubFont"></span> <span class="largeFont">${{plan.field_costo}}</span></span> </div>\n\n        <div class="plan_section_hr"> <span class="spanBlock midFont">Características</span>  \n\n          <span class="plan_description_bullets midSubFont">\n\n            <span class="spanBlock plan_bullet" *ngFor="let bullet of plan.field_description_points">\n\n             <span class="bulleting">-</span> {{bullet}}\n\n            </span>\n\n      \n\n            <span *ngIf=" this.checkIfisgroupPlan(plan)"  class="grupos_medicos_code" (click)="gotoentergroup()">\n\n              ¿Tienes un código para Grupo Médico?, <span class="fontPrimary">ingrésalo aquí.</span>\n\n            </span>\n\n        </span> \n\n      </div>\n\n        \n\n      </div><!-- fin de plans section -->\n\n\n\n    \n\n\n\n    </div><!-- fin de plans block en onplanchange-->\n\n\n\n    <div class="plans_block" *ngIf="!onplanchange && subsData.subscription"> <!-- Información  de plan cuando no en onplanchange  -->\n\n      <span class="blockSpan info_plan_title" >Información  de tu Plan</span>\n\n\n\n      <div class="plan_section">\n\n        <div class="plan_section_hr">  <!-- Plan selection check start -->\n\n            <div class="control-group"> \n\n                <label class="control control-radio">\n\n                    <!--<input type="radio" name="rtype" value=""  [(ngModel)]="this.reportPresentator.type" checked="true"/>-->\n\n                    <input type="radio" name="rtype" value="" checked="true" />\n\n                    <div class="control_indicator"></div>\n\n                </label> \n\n                </div>  \n\n        </div> <!-- Plan selection check end -->\n\n        <div class="plan_section_hr">  <span class="spanBlock bigSubFont">Plan <span class="fontPrimary bold"> {{subsData.subscription.plan.title}} </span></span> <!--<span class="spanBlock"> <span class="midSubFont">costo base:</span> <span class="largeFont">${{subsData.subscription.plan.field_costo}}</span></span>--> </div>\n\n        <div class="plan_section_hr"> <span class="spanBlock midFont">Características</span>  \n\n          <span class="plan_description_bullets midSubFont">\n\n            <span class="spanBlock plan_bullet" *ngFor="let bullet of subsData.subscription.plan.field_description_points">\n\n             <span class="bulleting">-</span> {{bullet}}\n\n            </span>\n\n        </span> \n\n      </div>\n\n      </div><!-- fin de plans section -->\n\n\n\n     \n\n\n\n    </div><!-- fin de plans block cuando no onplanchange-->\n\n  <!-- fin de Seccion con Información  de planes  -->\n\n\n\n\n\n    <div class="plans_extras bisectional">\n\n      <div class="plans_extras_section bisectional_section right_align">\n\n        <span class="spanBlock midFont" *ngIf="onplanchange">¿Deseas agregar más usuarios a tu plan?</span> \n\n        <p class="midSubFont"> ¡Agrega todos los usuarios que necesites de acuerdo con el personal en tu consultorio!\n\n          Contrata usuarios adicionales por $39 pesos al mes.</p>\n\n      </div>\n\n\n\n      <div class="plans_extras_section bisectional_section center_align" *ngIf="onplanchange"> <!-- Usuarios adicionales onplanchange-->\n\n        <span class="spanBlock" > \n\n          <span class="operator" (click)="operateExtra(-1)" >-</span><input type="number" [(ngModel)]="this.selectedAditionals"/><span class="operator" (click)="operateExtra(1)">+</span>\n\n        </span>\n\n       <!-- <span class="spanBlock midSubFont"> actualmente cuentas con <span class="fontPrimary">{{this.subsData.subscription.field_adicionales}} adicionales</span></span>-->\n\n        <span class="spanBlock midSubFont"> añadir <span class="fontPrimary">{{this.selectedAditionals}} usuarios adicionales</span> por <span class="fontPrimary">${{this.selectedAditionals*39}}</span></span>\n\n        <!--<span class="spanBlock midFont"> Total de subusuarios:  <span class="fontPrimary">${{(this.selectedAditionals*39) + (this.subsData.subscription.field_adicionales*39)}}.00</span></span>-->\n\n        <span class="spanBlock midFont" *ngIf="!onplanchange"> Total de usuarios:  <span class="fontPrimary">${{(this.selectedAditionals*39)}}.00</span></span>\n\n\n\n        \n\n      </div> <!-- fin de usuarios adicionales onplanchange-->\n\n\n\n      <div class="plans_extras_section bisectional_section center_align" *ngIf="!onplanchange && this.subsData.subscription"> <!-- Usuarios adicionales  cuando no onplanchange-->\n\n        <span class="spanBlock midSubFont"> Actualmente cuentas con <span class="fontPrimary">{{subAdicionales}} usuarios adicionales</span> </span>\n\n        <span class="spanBlock midFont"> Costo total de usuarios adicionales:  <span class="fontPrimary">${{subAdicionales*39}}.00</span></span>\n\n      </div> <!-- fin de usuarios adicionales cuando no  onplanchange-->\n\n\n\n    </div><!-- fin de plans extras -->\n\n\n\n\n\n    <div class="plans_extras bisectional" *ngIf="this.isgroup" >\n\n      <div class="plans_extras_section bisectional_section right_align">\n\n        <span class="spanBlock midFont" *ngIf="onplanchange">¿Deseas agregar más suscriptores a tu plan?</span> \n\n        <p class="midSubFont"> Agregar suscriptores adicionales a los incluídos en tu Grupo Médico, tienen un costo preferencial de $169.00 y se agregan al pago de tu\n\n          suscripción mensual. </p>\n\n      </div>\n\n\n\n      <div class="plans_extras_section bisectional_section center_align" *ngIf="onplanchange"> <!-- Usuarios adicionales onplanchange-->\n\n        <span class="spanBlock" > \n\n          <span class="operator" (click)="operateExtraDoc(-1)" >-</span><input type="number" [(ngModel)]="this.selectedAditionalsDocs"/><span class="operator" (click)="operateExtraDoc(1)">+</span>\n\n        </span>\n\n       <!-- <span class="spanBlock midSubFont"> actualmente cuentas con <span class="fontPrimary">{{this.subsData.subscription.field_adicionales}} adicionales</span></span>-->\n\n        <span class="spanBlock midSubFont"> Añadir <span class="fontPrimary">{{this.selectedAditionalsDocs}} suscriptores</span> por <span class="fontPrimary">${{this.selectedAditionalsDocs*169}}</span></span>\n\n        <!--<span class="spanBlock midFont"> Total de subusuarios:  <span class="fontPrimary">${{(this.selectedAditionals*39) + (this.subsData.subscription.field_adicionales*39)}}.00</span></span>-->\n\n        <span class="spanBlock midFont" *ngIf="!onplanchange"> Costo total de suscriptores adicionales:  <span class="fontPrimary">${{(this.selectedAditionalsDocs*169)}}.00</span></span>\n\n\n\n        \n\n      </div> <!-- fin de usuarios adicionales onplanchange-->\n\n\n\n      <div class="plans_extras_section bisectional_section center_align" *ngIf="!onplanchange && this.subsData.subscription"> <!-- Usuarios adicionales  cuando no onplanchange-->\n\n        <span class="spanBlock midSubFont"> Actualmente cuentas con  <span class="fontPrimary">{{subAdicionales}} usuarios adicionales</span>  a los incluídos en tu plan. </span>\n\n        <span class="spanBlock midFont"> Total extra de subusuarios:  <span class="fontPrimary">${{subAdicionales*39}}.00</span></span>\n\n      </div> <!-- fin de usuarios adicionales cuando no  onplanchange-->\n\n\n\n     \n\n\n\n    </div><!-- fin de plans extras -->\n\n    <div class="enter_subuser_selection_wrap" *ngIf="this.isgroup && !this.subsData.isGroup && this.permissions.checkUserSuscription([this.PLAN_ANY]) &&  this.subuserData.mySubUsers.length > 0">\n\n    <div class="enter_subuser_selection"  >\n\n      \n\n      <div class="enter_title fontPrimary"> Selección de Usuarios </div>\n\n      <div class="enter_description"> Este plan te permite compartir usuarios entre los doctores del grupo si hay plazas disponibles puedes llevar contigo a tus usuarios actuales </div>\n\n        <div> <span class="enter_plazas_text">Plazas disponibles</span> <span class="enter_plazas_value fontPrimary">{{this.accountsLeft}}</span></div>\n\n        <table class="results_table">\n\n            <thead>\n\n                <tr>\n\n                    <th>Agregar</th>\n\n                    <th>Usuario</th>\n\n                    <th>Tipo de Usuario</th>\n\n                 </tr>\n\n            </thead>\n\n            <tbody >\n\n                <tr *ngFor="let usersub of this.subuserData.mySubUsers">\n\n                    <td>\n\n                        <ion-checkbox [checked]="usersub.selectedForGroup" (ionChange)="onChangeUsers($event,usersub)"></ion-checkbox>\n\n                        <!--<input type="checkbox" [checked]="usersub.selectedForGroup" (change)="onChangeUsers(this,usersub)"/>-->\n\n                      <!--\n\n                      <div class="control-group"> \n\n                        <label class="control control-radio">\n\n                          \n\n                          \n\n                            <div class="control_indicator"></div>\n\n                        </label> \n\n                        </div>  -->\n\n                    </td>\n\n                    <td class="midSubFont ">{{usersub.name}} </td>\n\n                    <td class="midSubFont fontHigh">{{this.userData.getTipoUsuarioString(usersub.field_tipo_de_usuario.und[0])}} </td>\n\n                 </tr>\n\n            </tbody>\n\n          </table>\n\n    </div>\n\n    </div>\n\n\n\n\n\n    <div class="informacion_pagos">\n\n      <span class="spanBlock info_plan_title">Método de pago</span>\n\n      <div class="bisectional pagos_block">\n\n        <div class="bisectional_section metodos_pago"> \n\n          <conekta *ngIf="onplanchange == true" (successToken)=\'successToken($event)\' (errorToken)=\'errorToken($event)\'></conekta>\n\n        </div>\n\n         <div class="bisectional_section neuvo_metodo_pago"> \n\n            <div class="sources_wrapper"> <!-- INICIO STRIPE LISTED SOURCES-->\n\n              <h3>Tarjetas activas</h3>\n\n              <div *ngIf="this.sources.length === 0" class="nopayment_label"> No se han agregado método de pago </div>\n\n              <ion-row *ngFor="let src of this.sources; let indice = index">\n\n                <ion-col col-10 [class.selectedsrc]="src.default" class="fact_src_unit">\n\n                  <ion-row>\n\n                    <ion-col no-padding col-2>\n\n                      {{src.brand}}\n\n                      <ion-row *ngIf="src.default">\n\n                        <ion-col no-padding>\n\n                          Pred.\n\n                        </ion-col>\n\n                      </ion-row>\n\n                    </ion-col>\n\n                    <ion-col no-padding col-10>\n\n                      **** **** **** {{src.last4}}\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-col>\n\n                <ion-col *ngIf="onplanchange == true " class="cont-buttons-srcs" col-2 no-padding>\n\n                    <button ion-button icon-only full small clear (click)="selectCard(src)" tooltip="Predeterminar Tarjeta" positionV="bottom">\n\n                        <ion-icon name="star"></ion-icon>\n\n                            \n\n                  </button>\n\n                  <button ion-button icon-only full small clear (click)="removeCard(indice,src)" tooltip="Eliminar Tarjeta" positionV="bottom">\n\n                    <ion-icon name="close"></ion-icon>\n\n                   \n\n                  </button>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div> <!-- FIN STRIPE LISTED SOURCES-->  \n\n        </div>\n\n      </div>\n\n      <div class="subtotal_pago">\n\n        <span class="spanBlock midFont" *ngIf="this.onplanchange"> Total de suscripción mensual: <span class="fontPrimary">${{selectedTotal}}.00</span></span>\n\n        <span class="spanBlock midFont" *ngIf="!this.onplanchange"> Total de suscripción mensual: <span class="fontPrimary">${{cantidad}}.00</span></span>\n\n        <p class="midSubFont" *ngIf="this.onplanchange && subsData.subscription"> Cualquier cambio en el monto total de tu suscripción se verá reflejado en tu próxima mensualidad al {{nextCobro}}</p>\n\n      </div>  \n\n      <div class="button_section"> \n\n        <button class="generalButton bgColorPrimary " [class.disabledsubbtn]="!this.enabledButton" [disabled]="this.selectCard === null || this.selected_plan === null" *ngIf="this.checkStripeSetup() && !cantcancel"  (click)="guardar()" >Guardar</button>\n\n        <button class="generalButton bgColorPrimary " [class.disabledsubbtn]="!this.enabledButton" [disabled]="this.selectCard === null || this.selected_plan === null" *ngIf="this.checkStripeSetup() && cantcancel"  (click)="guardar()" >Suscribirse</button>\n\n        <button class="generalButton bgColorPrimary " *ngIf="!onplanchange" (click)="editar()" >Editar</button>\n\n        \n\n        <button class="generalButton bgColorPrimary " *ngIf="onplanchange && !cantcancel" (click)="cancelar()" >Cancelar</button>\n\n      </div>\n\n      <div class="button_section" *ngIf="onplanchange && !cantcancel">\n\n      <a class="PrimaryLink " (click)="baja()" >Cancelar suscripción</a>\n\n    </div>\n\n \n\n\n\n  </div>\n\n  <div class="endmargin">\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\miplan\miplan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_permissions_permissions__["a" /* PermissionsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_planes_data_planes_data__["a" /* PlanesDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_subscription_data_subscription_data__["a" /* SubscriptionDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_subscription_manager_subscription_manager__["a" /* SubscriptionManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_9__components_conekta_conekta__["a" /* ConektaComponent */],
            __WEBPACK_IMPORTED_MODULE_10__providers_base_url_base_url__["a" /* BaseUrlProvider */],
            __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_13__providers_subusers_data_subusers_data__["a" /* SubusersDataProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_subusers_manager_subusers_manager__["a" /* SubusersManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_ws_messenger_ws_messenger__["a" /* WsMessengerProvider */]])
    ], MiplanPage);
    return MiplanPage;
}());

//# sourceMappingURL=miplan.js.map

/***/ })

});
//# sourceMappingURL=20.js.map
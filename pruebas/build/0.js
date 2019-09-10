webpackJsonp([0],{

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModalPageModule", function() { return RegisterModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_modal__ = __webpack_require__(663);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register_modal__["a" /* RegisterModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__register_modal__["a" /* RegisterModalPage */]),
            ],
        })
    ], RegisterModalPageModule);
    return RegisterModalPageModule;
}());

//# sourceMappingURL=register-modal.module.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sources; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__debugger__ = __webpack_require__(40);

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

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data_sources__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_cordova_available_cordova_available__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_drupal_user_manager_drupal_user_manager__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_permissions_permissions__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_subscription_data_subscription_data__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_loader_loader__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_subscription_manager_subscription_manager__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_planes_data_planes_data__ = __webpack_require__(71);
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
    function RegisterModalPage(navCtrl, viewCtrl, navParams, userData, loadingCtrl, clipboard, ica, userMan, permissions, subsData, subsManager, alert, loader, planesData) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.loadingCtrl = loadingCtrl;
        this.clipboard = clipboard;
        this.ica = ica;
        this.userMan = userMan;
        this.permissions = permissions;
        this.subsData = subsData;
        this.subsManager = subsManager;
        this.alert = alert;
        this.loader = loader;
        this.planesData = planesData;
        this.showerrors = false;
        this.emailconfirm = null;
        this.passconfirm = null;
        this.onGroup = null;
        this.grupoOtro = null;
        this.hospitalOotro = null;
        this.onHospital = null;
        this.mailsrefer = null;
        this.refuser = null;
        this.refuserName = null;
        this.searchCode = null;
        this.currentpasswordNeeded = false; //especifica si es necesario incluir el pass actual, esto se requiere al cambiar pass o email.
        this.stripe = Stripe('pk_test_4CJTbKZki9tC21cGTx4rLPLO');
        this.sources = new Array();
        this.selected_source = null;
        this.selected_plan = null;
        this.invitationCode = null;
        this.invitationshow = false;
        this.isnew = true;
        this.currentPass = null;
        this.currentMail = null;
    }
    Object.defineProperty(RegisterModalPage.prototype, "enabledButton", {
        get: function () {
            //return this.selected_source !== null && this.selected_plan !== null;
            return this.selected_plan !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterModalPage.prototype, "onCordova", {
        get: function () {
            return this.ica.isCordovaAvailable;
        },
        enumerable: true,
        configurable: true
    });
    RegisterModalPage.prototype.ionViewDidLoad = function () {
        console.log('registro view load');
        console.log(this.subsData.subscription);
        console.log('this.userData.checkIsLoggedin()', this.userData.checkIsLoggedin());
        this.isnew = !this.userData.checkIsLoggedin();
        console.log('isnew', this.isnew);
        console.log('openingregister modal isnew? ', this.isnew);
        console.log('pass', this.userData.userData.pass);
        if (!this.isnew) {
            this.currentpasswordNeeded = false;
            this.currentMail = this.userData.userData.mail;
        }
    };
    RegisterModalPage.prototype.ionViewDidEnter = function () {
        // this.setupStripe();
        this.loadSources();
    };
    RegisterModalPage.prototype.actionUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.basicValidation()) {
                            return [2 /*return*/, 0];
                        }
                        console.log('basic validation ret ??? ');
                        if (!this.passwordNeededValidation()) return [3 /*break*/, 1];
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.update()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterModalPage.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var aux_userData;
            return __generator(this, function (_a) {
                this.loader.presentLoader('Actualizando...');
                aux_userData = JSON.parse(JSON.stringify(this.userData.userData));
                delete aux_userData.field_sub_id;
                delete aux_userData.field_tipo_de_usuario;
                if (this.refuser) {
                    aux_userData.field_reference_user.und[0] = this.refuser;
                }
                else {
                    delete aux_userData.field_reference_user;
                }
                if (this.currentpasswordNeeded) {
                    /*aux_userData.pass = new Array();
                    aux_userData.pass.push({'existing': this.currentPass});*/
                    aux_userData['current_pass'] = this.currentPass;
                    if (this.checkForPasswordChange()) {
                        console.log('checkforpassword change is on');
                        //aux_userData.pass.push({"value": this.userData.userData.pass});
                        aux_userData.pass = this.userData.userData.pass;
                    }
                }
                console.log('userdata to update', aux_userData);
                //let res = await this.userMan.updateUserd(aux_userData).toPromise();
                this.userMan.updateUserd(aux_userData).subscribe(function (val) {
                    console.log('actionUpdate change done, result', val);
                    _this.loader.dismissLoader();
                }, function (error) {
                    console.log('actionUpdate error is', error);
                    _this.loader.dismissLoader();
                });
                return [2 /*return*/];
            });
        });
    };
    RegisterModalPage.prototype.passwordNeededValidation = function () {
        var _this = this;
        var ret = true;
        this.checkforEmailChange();
        this.checkForPasswordChange();
        if (this.currentpasswordNeeded) {
            this.alert.presentPrompt('Password', 'Se requiere contraseña', [
                {
                    name: 'password',
                    placeholder: 'Password',
                    type: 'password'
                }
            ], function (data) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('passwod to set', data.passwod);
                        this.currentPass = data.password;
                        return [4 /*yield*/, this.update()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            }); }); }, function () { ret = false; console.log('this was canceled'); });
            return true;
        }
        else {
            return false;
        }
    };
    RegisterModalPage.prototype.checkemailSame = function () {
        console.log('checkemailSame ');
        var ret = false;
        if (this.userData.userData.mail !== null && this.emailconfirm !== null && Number(this.emailconfirm.localeCompare(this.userData.userData.mail)) === Number(0)) {
            ret = true;
        }
        else {
            this.alert.presentAlert('Error', 'El correo electrónico no coincide con la confirmación.');
        }
        return ret;
    };
    RegisterModalPage.prototype.checkforEmailChange = function () {
        if (this.userData.userData.mail !== this.currentMail) {
            this.currentpasswordNeeded = true;
        }
    };
    RegisterModalPage.prototype.checkForPasswordChange = function () {
        var ret = false;
        console.log('checkForPasswordChange');
        console.log(this.userData.userData.pass);
        console.log(this.passconfirm);
        if (this.userData.userData.pass !== null || this.passconfirm !== null) {
            this.currentpasswordNeeded = true;
            ret = true;
        }
        return ret;
    };
    RegisterModalPage.prototype.actionBuscarRef = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('reference to search is', this.mailsrefer);
                this.loader.presentLoader('Buscando...');
                this.userMan.searchByMail(this.mailsrefer).subscribe(function (val) {
                    console.log('hola esto me salio', val);
                    if (Number(val.length) === 0) {
                        _this.alert.presentAlert('Nada', 'No se encontro un usuario con este email.');
                    }
                    else {
                        if (Number(val[0]['field_tipo_de_usuario']['value']) !== 1) {
                            _this.alert.presentAlert('Nada', 'No se encontro un usuario con este email.');
                        }
                        else {
                            _this.refuser = val[0].uid;
                            _this.refuserName = val[0].field_nombre;
                        }
                    }
                    _this.loader.dismissLoader();
                }, function (error) {
                    console.log('ayuda con esto', error);
                    _this.alert.presentAlert('Nada', 'No se encontro un usuario con este email.');
                    _this.loader.dismissLoader();
                });
                return [2 /*return*/];
            });
        });
    };
    RegisterModalPage.prototype.removeReference = function () {
        this.refuser = null;
        this.refuserName = null;
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
        if (this.refuser) {
            cloneData.field_reference_user.und[0] = this.refuser;
            /*aux_userData.field_reference_user = new Array();
            aux_userData.field_reference_user['und'] = new Array;
            aux_userData.field_reference_user['und'][0] = this.refuser;*/
        }
        else {
            delete cloneData.field_reference_user;
        }
        //Debugger.log(['register',this.userData.userData]);
        var register_observer = this.userData.register(cloneData);
        register_observer.subscribe(function (val) {
            window.location.reload();
        }, function (response) {
            //Debugger.log(["POST call in error", response]);
            if (response && response.error && response.error.form_errors) {
                //let error_msg = `Se encontraron los siguientes errores:`;
                for (var key in response.error.form_errors) {
                    /*error_msg += `
                    ${response.error.form_errors[key]}`;*/
                    _this.alert.presentAlert('Error', 'Se ha detectado un error inesperado en ' + key);
                }
                //this.alert.presentAlert('Error', error_msg);
            }
            _this.loader.dismissLoader();
        }, function () {
        });
    };
    RegisterModalPage.prototype.searchsub = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.searchsubValidation()) return [3 /*break*/, 5];
                        this.loader.presentLoader('buscando...');
                        return [4 /*yield*/, this.subsManager.searchSus(this.searchCode)];
                    case 1:
                        sus = _a.sent();
                        console.log('sus found', sus);
                        if (!sus) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.subsManager.susAssign(sus)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.alert.presentAlert('Nada', 'No se encontro ningun grupo médico');
                        _a.label = 4;
                    case 4:
                        this.loader.dismissLoader();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RegisterModalPage.prototype.searchsubValidation = function () {
        var ret = true;
        if (this.searchCode === null)
            ret = false;
        return ret;
    };
    RegisterModalPage.prototype.basicValidation = function () {
        var ret = true;
        if (this.isnew) {
            console.log('checking obligatorios----------------------------');
            if (!this.checkIfInputfilledNPromtp(this.userData.userData.mail, ret))
                ret = false;
            if (!this.checkIfInputfilledNPromtp(this.emailconfirm, ret))
                ret = false;
            if (!this.checkIfInputfilledNPromtp(this.userData.userData.name, ret))
                ret = false;
            if (!this.checkIfInputfilledNPromtp(this.userData.userData.pass, ret))
                ret = false;
            if (!this.checkIfInputfilledNPromtp(this.passconfirm, ret))
                ret = false;
            if (!this.checkIfInputfilledNPromtp(this.userData.userData.field_nombre.und[0].value, ret))
                ret = false;
            if (!this.checkIfInputfilledNPromtp(this.userData.userData.field_apellidos.und[0].value, ret))
                ret = false;
            if (!this.checkIfInputfilledNPromtp(this.userData.userData.field_especialidad.und[0].value, ret))
                ret = false;
            if (!this.checkIfInputfilledNPromtp(this.userData.userData.field_alias.und[0].value, ret))
                ret = false;
            //if(!this.checkIfInputfilledNPromtp(this.userData.userData.field_no_ext.und[0].value,ret)) ret = false;
            if (!this.checkIfInputfilledNPromtp(this.userData.userData.field_codigo_postal.und[0].value, ret))
                ret = false;
            //if(!this.checkIfInputfilledNPromtp(this.userData.userData.field_ciudad.und[0].value,ret)) ret = false;
            //if(!this.checkIfInputfilledNPromtp(this.userData.userData.field_pais.und[0].value,ret)) ret = false;
            console.log('end checking obligatorios----------------------------');
        }
        console.log('ret a1 ', ret);
        if (this.userData.userData.pass && !this.passconfirm || !this.userData.userData.pass && this.passconfirm) {
            ret = false;
            this.alert.presentAlert('Error', 'Confirmar contraseña.');
        }
        console.log('ret a2 ', ret);
        if (this.userData.userData.pass && this.passconfirm && this.passconfirm.localeCompare(this.userData.userData.pass) !== 0) {
            ret = false;
            this.alert.presentAlert('Error', 'Las contraseñas no coinciden.');
        }
        console.log('ret a3 ', ret);
        if (this.isnew) {
            if (!this.checkemailSame())
                ret = false;
        }
        console.log('ret a4 ', ret);
        return ret;
    };
    RegisterModalPage.prototype.checkIfInputfilledNPromtp = function (input, actualret) {
        var ret = true;
        console.log('enter');
        if (!actualret) {
            return false;
        }
        ;
        console.log('checkIfInputfilledNPromtp', input, input === null, input ? false : true);
        if (input ? false : true) {
            console.log('this input is not filled mf', input);
            ret = false;
            this.alert.presentAlert('Error', 'Revisar los campos marcados en rojo.');
            this.showerrors = true;
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.enabledButton)
                    return [2 /*return*/, false];
                this.loader.presentLoader('Subscribiendo ...');
                console.log(this.selected_source);
                console.log(this.selected_plan);
                //await this.subsManager.subscribe( this.selected_plan,this.selected_source);
                /*console.log('subscribing');
                let ns_res = await this.subsManager.getSubscribeObs( this.selected_plan,this.selected_source).toPromise();
                if(ns_res && this.subsManager.checkForSubscription())
                await this.subsManager.deletesSus(this.subsData.subscription).toPromise();*/
                console.log('before this');
                window.location.reload();
                return [2 /*return*/];
            });
        });
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
                if (old_selected !== null && new_source.src_id === old_selected.src_id) {
                    this.selected_source = new_source;
                    this.selected_source.set_selected();
                }
                else if (old_selected === null) {
                    this.selected_source = new_source;
                    this.selected_source.set_selected();
                }
            }
        }
    };
    RegisterModalPage.prototype.copyCode = function () {
        /*this.clipboard.copy(this.userData.subscription.field_invitation_code);*/
    };
    RegisterModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register-modal',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\register-modal\register-modal.html"*/'\n\n<ion-content class="register_content">\n\n    <div class="modal_closer" *ngIf="!this.isnew" (click)="this.dismiss();">Volver</div>\n\n  <div class="register_contet_head">\n\n    <div class="bigFont" *ngIf="this.isnew"> <span class="fontPrimary"><b>Registro</b></span> <span class="lightFont">de Nuevo Suscriptor</span></div>\n\n    <div class="midSubFont" *ngIf="this.isnew"> Por favor proporciona los siguientes datos: </div>\n\n    <div class="bigFont" *ngIf="!this.isnew"> <span class="fontPrimary"><b>Datos</b></span> <span class="lightFont">de Usuario</span></div>\n\n    <div class="bigFont" *ngIf="!this.isnew"> <span class="midSubFont">Usuario: {{this.userData.userData.name}}</span> </div>\n\n  </div>\n\n  <div class="code_wrapper"  *ngIf="!permissions.checkUserPermission([userData.TIPO_DOCTOR]) && !permissions.checkifgroup() && !this.isnew">\n\n   <span class="spanBlock"><b>Codigo de usuario:</b> <span class="ModalInput_input"><input [(ngModel)]="this.userData.userData.field_codigo.und[0].value" type="text" readonly/></span></span>\n\n   <span class="spanBlock">Los doctores pueden usar este codigo para que tengas acceso a sus citas.</span>\n\n  </div>\n\n  <div class="register_contet_form"  >\n\n\n\n\n\n      <div *ngIf="this.isnew" class="register_aliasfield_wrapper">\n\n          <div class="registerInput" >\n\n              <b>Usuario:<span class="obligatoryast" *ngIf="this.isnew">*</span></b><input [(ngModel)]="this.userData.userData.name" [class.registerInputerror]="!this.userData.userData.name && showerrors" type="text" />\n\n          </div>\n\n          <div class="register_aliasfield_description midSubFont "> </div>\n\n          </div>\n\n\n\n      \n\n\n\n      <div *ngIf="this.isnew" class="register_aliasfield_wrapper">\n\n          <div class="registerInput" >\n\n            <b>Alias:<span class="obligatoryast" *ngIf="this.isnew">*</span></b><input [(ngModel)]="this.userData.userData.field_alias.und[0].value" [class.registerInputerror]="!this.userData.userData.field_alias.und[0].value && showerrors" type="text"/>\n\n          </div>\n\n          <div class="register_aliasfield_description midSubFont "> Crea un Alias para que otros usuarios puedan identificarte dentro de DRAP ej "Dr Perez" </div>\n\n          </div>\n\n\n\n          \n\n\n\n    <div class="register_base register_form_section rfsFlex">\n\n        <div class="registerInput">\n\n            <b>Correo electrónico:<span class="obligatoryast" *ngIf="this.isnew">*</span></b><input [(ngModel)]="this.userData.userData.mail" [class.registerInputerror]="!this.userData.userData.mail && showerrors" type="text"/>\n\n          </div>\n\n          <div class="registerInput" *ngIf="this.isnew">\n\n            <b>Confirmar C. electrónico:<span class="obligatoryast" *ngIf="this.isnew">*</span></b><input [(ngModel)]="emailconfirm" [class.registerInputerror]="!this.emailconfirm && showerrors" type="text"/>\n\n          </div>\n\n\n\n         \n\n            <div class="registerInput">\n\n                <b>Contraseña:<span class="obligatoryast" *ngIf="this.isnew">*</span></b><input [(ngModel)]="this.userData.userData.pass"  [class.registerInputerror]="!this.userData.userData.pass && showerrors" type="password"/>\n\n              </div>\n\n              <div class="registerInput">\n\n                <b>Confirmar contraseña:<span class="obligatoryast" *ngIf="this.isnew">*</span></b><input [(ngModel)]="passconfirm"  [class.registerInputerror]="!this.passconfirm && showerrors" type="password"/>\n\n              </div>\n\n              <div class="registerInput">\n\n                <b>Nombre:<span class="obligatoryast" *ngIf="this.isnew">*</span></b><input [(ngModel)]="this.userData.userData.field_nombre.und[0].value" [class.registerInputerror]="!this.userData.userData.field_nombre.und[0].value && showerrors"  type="text"/>\n\n              </div>\n\n              <div class="registerInput">\n\n                <b>Apellido:<span class="obligatoryast" *ngIf="this.isnew">*</span></b><input  [(ngModel)]="this.userData.userData.field_apellidos.und[0].value" [class.registerInputerror]="!this.userData.userData.field_apellidos.und[0].value && showerrors"  type="text" />\n\n              </div>\n\n              \n\n              <div class="registerInput" *ngIf="permissions.checkUserPermission([userData.TIPO_DOCTOR]) || this.isnew">\n\n                <b>Especialidad:<span class="obligatoryast" *ngIf="this.isnew">*</span></b><input [(ngModel)]="this.userData.userData.field_especialidad.und[0].value" [class.registerInputerror]="!this.userData.userData.field_especialidad.und[0].value && showerrors" type="text"/>\n\n              </div>\n\n            \n\n              <div class="registerInput" *ngIf="!this.isnew">\n\n                <b>Alias:<span class="obligatoryast" *ngIf="this.isnew">*</span></b><input [(ngModel)]="this.userData.userData.field_alias.und[0].value" [class.registerInputerror]="!this.userData.userData.field_alias.und[0].value && showerrors" type="text"/>\n\n              </div>\n\n\n\n             \n\n    </div>\n\n    \n\n\n\n    \n\n\n\n    <div class="register_ubication register_form_section rfsFlex" *ngIf="this.isnew || permissions.checkUserPermission([userData.TIPO_DOCTOR]);">\n\n        <div class="registerInput">\n\n            <b>Calle:</b><input [(ngModel)]="this.userData.userData.field_calle.und[0].value"  type="text"/>\n\n        </div>\n\n        <div class="ubication_det">\n\n            <span class="ubdet_input"> <b>No. Ext.</b> <input [(ngModel)]="this.userData.userData.field_no_ext.und[0].value"   type="text"/></span>\n\n            <span class="ubdet_input"> <b>No. Int.</b><input [(ngModel)]="this.userData.userData.field_no_int.und[0].value"  type="text"/></span>\n\n            <span class="ubdet_input"> <b>C.P<span class="obligatoryast" *ngIf="this.isnew">*</span></b> <input [(ngModel)]="this.userData.userData.field_codigo_postal.und[0].value" [class.registerInputerrorOn]="!this.userData.userData.field_codigo_postal.und[0].value && showerrors" type="text"/></span>\n\n        </div>\n\n        <div class="registerInput">\n\n            <b>Ciudad:</b><input [(ngModel)]="this.userData.userData.field_ciudad.und[0].value"  type="text"/>\n\n        </div>\n\n        <div class="registerInput">\n\n            <b>Colonia:</b><input [(ngModel)]="this.userData.userData.field_colonia.und[0].value"   type="text"/>\n\n        </div>\n\n        <div class="registerInput">\n\n            <b>País:</b><input [(ngModel)]="this.userData.userData.field_pais.und[0].value"    type="text"/>\n\n        </div>\n\n        <div class="registerInput">\n\n            <b>Municipio o Del.:</b><input [(ngModel)]="this.userData.userData.field_municipio.und[0].value"  type="text"/>\n\n        </div>\n\n        <div class="registerInput">\n\n          <b>Estado:</b>\n\n        <select  class="input_select input" [(ngModel)]="this.userData.userData.field_estado_ubicacion.und[0].value">\n\n            <option selected disabled value="0">SELECT</option>\n\n            <option selected  value="Aguascalientes">Aguascalientes</option>\n\n            <option selected  value="Baja California">Baja California</option>\n\n            <option selected  value="Baja California Sur">Baja California Sur</option>\n\n            <option selected  value="Campeche">Campeche</option>\n\n            <option selected  value="CDMX">CDMX</option>\n\n            <option selected  value="Chihuahua">Chihuahua</option>\n\n            <option selected  value="Chiapas">Chiapas</option>\n\n            <option selected  value="Coahuila">Coahuila</option>\n\n            <option selected  value="Colima">Colima</option>\n\n            <option selected  value="Durango">Durango</option>\n\n            <option selected  value="Guanajuato">Guanajuato</option>\n\n            <option selected  value="Guerrero">Guerrero</option>\n\n            <option selected  value="Hidalgo">Hidalgo</option>\n\n            <option selected  value="Jalisco">Jalisco</option>\n\n            <option selected  value="México">México</option>\n\n            <option selected  value="Michoacán">Michoacán</option>\n\n            <option selected  value="Morelos">Morelos</option>\n\n            <option selected  value="Nayarit">Nayarit</option>\n\n            <option selected  value="Nuevo León">Nuevo León</option>\n\n            <option selected  value="Oaxaca">Oaxaca</option>\n\n            <option selected  value="Puebla">Puebla</option>\n\n            <option selected  value="Querétaro">Querétaro</option>\n\n            <option selected  value="Quintana Roo">Quintana Roo</option>\n\n            <option selected  value="San Luis Potosí">San Luis Potosí</option>\n\n            <option selected  value="Sinaloa">Sinaloa</option>\n\n            <option selected  value="Sonora">Sonora</option>\n\n            <option selected  value="Tabasco">Tabasco</option>\n\n            <option selected  value="Tamaulipas">Tamaulipas</option>\n\n            <option selected  value="Tlaxcala">Tlaxcala</option>\n\n            <option selected  value="Veracruz">Veracruz</option>\n\n            <option selected  value="Yucatán">Yucatán</option>\n\n            <option selected  value="Zacatecas">Zacatecas</option>\n\n          </select>\n\n        </div>\n\n    </div>\n\n\n\n    <div class="register_ubication register_form_section rfsFlex" *ngIf="this.isnew">\n\n      <p class="midSubFont">Referencia: ¿Alguien te invito a drap? Ingresa su correo electrónico</p> \n\n      <div class="registerInput">\n\n        <b>Email:</b><input [(ngModel)]="this.mailsrefer" type="text"/>\n\n        <button  class="bgColorPrimary generalButton" (click)="actionBuscarRef()" >Buscar</button>\n\n    </div>\n\n\n\n    <!--<div class="register_button_section">\n\n       \n\n      </div>-->\n\n\n\n    </div>\n\n    <div class="register_ubication register_form_section rfsFlex" *ngIf="this.refuser" >\n\n      <span class="user_referenced_name"> {{this.refuserName}} </span> <span class="remove_reference_name" (click)="removeReference()" > X </span>\n\n      </div>\n\n   \n\n    <!--\n\n    <div class="register_payment register_form_section rfsFlex">\n\n        <div class="registerInput">\n\n            <b>Forma de Pago: </b>\n\n          <select  class="input_select input">\n\n              <option selected disabled value="0">SELECT</option>\n\n            </select>\n\n          </div>\n\n        <div class="registerInput">\n\n            <b>Referido Por:</b><input type="text"/>\n\n        </div>\n\n        <div class="registerInput">\n\n            <b>Tipo de Plan:</b>\n\n          <select  class="input_select input">\n\n              <option selected disabled value="0">Básico</option>\n\n            </select>\n\n          </div>\n\n    </div>\n\n    <div class="registro_planes register_form_section">\n\n      <div class="plan_basico plan_twosided plan_span">\n\n        <div class="reg_plan_section ">\n\n          <div class="rps_title bigFont">Plan <b class="fontPrimary">Básico</b></div>\n\n          <div class="bigSubFont">$199</div>\n\n        </div>\n\n        <div class="reg_plan_section rps_lefFont">\n\n          <div class="midFont">Características</div>\n\n          <div class="midSubFont">Obtén reportes detallados de tu actividad al cierre del día</div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  -->\n\n    <div class="register_last">\n\n    <div class="register_button_section">\n\n    <button *ngIf="isnew"   class="bgColorPrimary generalButton" (click)="actionRegister()" >Registrarme</button>\n\n    <button *ngIf="!isnew"   class="bgColorPrimary generalButton" (click)="actionUpdate()" >Actualizar Datos</button>\n\n    </div>\n\n    <div class="bluelink_wrapper">\n\n    <a  *ngIf="this.isnew"   class="blueLink midFont" (click)="this.dismiss();">¡Ya Tengo una Cuenta!</a>\n\n  \n\n  </div>\n\n  </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\register-modal\register-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_5__providers_cordova_available_cordova_available__["a" /* CordovaAvailableProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_drupal_user_manager_drupal_user_manager__["a" /* DrupalUserManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_permissions_permissions__["a" /* PermissionsProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_subscription_data_subscription_data__["a" /* SubscriptionDataProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_subscription_manager_subscription_manager__["a" /* SubscriptionManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_planes_data_planes_data__["a" /* PlanesDataProvider */]])
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
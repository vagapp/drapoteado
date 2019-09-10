webpackJsonp([15],{

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevousuarioModalPageModule", function() { return NuevousuarioModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuevousuario_modal__ = __webpack_require__(664);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NuevousuarioModalPageModule = /** @class */ (function () {
    function NuevousuarioModalPageModule() {
    }
    NuevousuarioModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nuevousuario_modal__["a" /* NuevousuarioModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__nuevousuario_modal__["a" /* NuevousuarioModalPage */]),
            ],
        })
    ], NuevousuarioModalPageModule);
    return NuevousuarioModalPageModule;
}());

//# sourceMappingURL=nuevousuario-modal.module.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevousuarioModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_drupal_user_manager_drupal_user_manager__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_subusers_manager_subusers_manager__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_subscription_data_subscription_data__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_subscription_manager_subscription_manager__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_tutorial_tutorial__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_ws_messenger_ws_messenger__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_permissions_permissions__ = __webpack_require__(39);
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
 * Generated class for the NuevousuarioModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NuevousuarioModalPage = /** @class */ (function () {
    function NuevousuarioModalPage(navCtrl, navParams, userData, subsData, subsManager, viewCtrl, userMan, subusersManager, loader, alert, tutorial, wsMessenger, perm) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.subsData = subsData;
        this.subsManager = subsManager;
        this.viewCtrl = viewCtrl;
        this.userMan = userMan;
        this.subusersManager = subusersManager;
        this.loader = loader;
        this.alert = alert;
        this.tutorial = tutorial;
        this.wsMessenger = wsMessenger;
        this.perm = perm;
        this.initialpage = true;
        this.newuser = false;
        this.nextCode = false;
        this.codeuser = false;
        this.showerrors = false;
        this.codeuserNP = false; //if tutorial user is gotten by code this disables password show
        this.selectedUsersOptions = 0;
        /*BANDERA, USUARIO AGREGADO*/
        this.added_user = false;
        console.log('GETTING userd', navParams.get('userd'));
        var aux_node = navParams.get('userd');
        if (aux_node) {
            this.isnew = false;
            this.newUser = __WEBPACK_IMPORTED_MODULE_4__providers_subusers_manager_subusers_manager__["a" /* SubusersManagerProvider */].getEmptyUserd();
            this.newUser = aux_node;
            this.initialpage = false;
            this.newuser = true;
        }
        else {
            this.isnew = true;
            this.resetNewUser();
        }
    }
    Object.defineProperty(NuevousuarioModalPage.prototype, "subsLeft", {
        get: function () {
            return this.subsData.getSubAccountsLeft();
        },
        enumerable: true,
        configurable: true
    });
    NuevousuarioModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.added_user);
    };
    NuevousuarioModalPage.prototype.resetNewUser = function () {
        this.newUser = __WEBPACK_IMPORTED_MODULE_4__providers_subusers_manager_subusers_manager__["a" /* SubusersManagerProvider */].getEmptyUserd();
    };
    NuevousuarioModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NuevousuarioModalPage');
        console.log('tutorialstates', this.tutorial.subaccountsleft, this.tutorial.isGroup, this.tutorial.isplanholder);
    };
    NuevousuarioModalPage.prototype.selectOption = function (selected) {
        this.selectedUsersOptions = Number(selected);
        console.log('selected user option is', this.selectedUsersOptions);
    };
    NuevousuarioModalPage.prototype.checkSelectedOption = function (selected) {
        return Number(this.selectedUsersOptions) === Number(selected);
    };
    NuevousuarioModalPage.prototype.isSelectedOption = function () {
        return this.selectedUsersOptions !== 0;
    };
    NuevousuarioModalPage.prototype.userTutorialStart = function () {
        console.log('start tutorial');
        this.newuser = true;
        this.initialpage = false;
        this.tutorial.tutorial_users_selected_option = this.selectedUsersOptions;
        console.log('selected option at tutorial start ', this.tutorial.tutorial_users_selected_option);
        if (this.tutorial.tutorial_users_selected_option === __WEBPACK_IMPORTED_MODULE_9__providers_tutorial_tutorial__["a" /* TutorialProvider */].TUTORIAL_USER_BOTH) {
            console.log();
            this.newUser.field_tipo_de_usuario.und = [this.userData.TIPO_CAJA];
            this.tutorial.tutorial_user_created_step = __WEBPACK_IMPORTED_MODULE_9__providers_tutorial_tutorial__["a" /* TutorialProvider */].TUTORIAL_USER_STEP_CAJA;
        }
        else if (this.tutorial.tutorial_users_selected_option === __WEBPACK_IMPORTED_MODULE_9__providers_tutorial_tutorial__["a" /* TutorialProvider */].TUTORIAL_USER_CODE) {
            console.log('agregando usuarios por codigo');
            this.codeuser = true;
            this.newuser = false;
            //this.nextCode = true;
        }
        else {
            this.newUser.field_tipo_de_usuario.und = [this.userData.TIPO_CAJAYRECEPCION];
        }
    };
    NuevousuarioModalPage.prototype.nextUser = function () {
        if (this.tutorial.tutorial_users_selected_option === __WEBPACK_IMPORTED_MODULE_9__providers_tutorial_tutorial__["a" /* TutorialProvider */].TUTORIAL_USER_CODE) {
            this.newuser = false;
            this.codeuser = true;
            this.nextCode = true;
            this.initialpage = false;
            this.tutorial.usuarioCreated = false;
            this.restart();
            this.newUser.field_tipo_de_usuario.und = [this.userData.TIPO_RECEPCION];
        }
        else {
            this.newuser = true;
            this.initialpage = false;
            this.tutorial.usuarioCreated = false;
            this.tutorial.tutorial_user_created_step = __WEBPACK_IMPORTED_MODULE_9__providers_tutorial_tutorial__["a" /* TutorialProvider */].TUTORIAL_USER_STEP_RECEPCION;
            this.restart();
            this.newUser.field_tipo_de_usuario.und = [this.userData.TIPO_RECEPCION];
        }
    };
    NuevousuarioModalPage.prototype.checkIfgoback = function () {
        var ret = true;
        if (Number(this.tutorial.tutorial_user_created_step) === Number(__WEBPACK_IMPORTED_MODULE_9__providers_tutorial_tutorial__["a" /* TutorialProvider */].TUTORIAL_USER_STEP_RECEPCION))
            ret = false;
        if (this.nextCode)
            ret = false;
        //console.log('checkIfgoback',ret, 'nextcode',this.nextCode);
        return ret;
    };
    NuevousuarioModalPage.prototype.endUsers = function () {
        this.tutorial.usuarioCreated = true;
        this.dismiss();
    };
    NuevousuarioModalPage.prototype.createUserd = function () {
        var _this = this;
        this.showerrors = false;
        if (this.createrNotEmptyValidation() && this.createUserValidation()) {
            this.loader.presentLoader('Generando Usuario ... ');
            //agregar este doctor.
            this.newUser.field_doctores.und = new Array();
            this.newUser.field_owner.und = new Array();
            this.newUser.field_doctores.und[this.userData.userData.uid] = this.userData.userData.uid;
            this.newUser.field_owner.und[0] = this.userData.userData.uid; //crear codigo, verificar que sea unique = S
            this.newUser.field_codigo.und[0].value = "add" + this.userData.userData.uid;
            this.newUser.field_nombre.und[0].value = "Subusuario";
            this.newUser.field_apellidos.und[0].value = "Subusuario";
            this.newUser.field_nombre.und[0].value = this.checkpass;
            this.newUser.status = "" + 1;
            delete this.newUser.field_sub_id;
            this.userMan.generateNewUserd(this.newUser).subscribe(function (val) { return __awaiter(_this, void 0, void 0, function () {
                var obs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('generated user now what', val);
                            console.log('subsisgrouo', this.subsData.isGroup);
                            if (!this.subsData.subscription.field_subusuarios)
                                this.subsData.subscription.field_subusuarios = new Array();
                            this.subsData.subscription.field_subusuarios.push(val['uid']);
                            obs = this.subsManager.updateUserSuscription().subscribe(function (val) { console.log('updating subs', val); });
                            console.log(obs);
                            if (!this.subsData.isGroup) return [3 /*break*/, 1];
                            this.wsMessenger.generateSubUserAddedMessage(val['uid'], this.newUser.field_nombre.und[0].value, this.subsData.subscription.field_doctores);
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, this.subusersManager.cargarSubusuarios()];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            this.loader.dismissLoader();
                            this.added_user = true;
                            if (this.tutorial.checkTutorialState()) {
                                this.tutorial.usuarioCreated = true;
                                this.newuser = false;
                            }
                            else {
                                this.close();
                            }
                            return [2 /*return*/];
                    }
                });
            }); }, function (response) {
                console.log('responsetrail', response);
                for (var key in response.error.form_errors) {
                    console.log(key);
                    if (key === 'mail') {
                        if (response.error.form_errors[key].includes('ya se encuentra en uso')) {
                            _this.alert.presentAlert('¡Upss, tenemos un problema!', 'El correo que intentas utilizar ya existe, intenta con otro o recupera tu contraseña.');
                        }
                        else if (response.error.form_errors[key].includes('no es válida')) {
                            _this.alert.presentAlert('¡Upss, tenemos un problema!', 'El formato de tu correo electrónico no es correcto.');
                        }
                        else {
                            _this.alert.presentAlert('Error', 'Se ha detectado un error inesperado en el campo ' + key);
                        }
                    }
                    else {
                        if (!(key === 'field_useremail][und][0')) {
                            _this.alert.presentAlert('Error', 'Se ha detectado un error inesperado en el campo ' + key);
                        }
                    }
                }
                _this.loader.dismissLoader();
            });
        }
    };
    NuevousuarioModalPage.prototype.restart = function () {
        this.resetNewUser();
        this.checkpass = "";
        this.newUserCode = "";
        this.tutorial.usuarioCreated = false;
    };
    NuevousuarioModalPage.prototype.createUserValidation = function () {
        var ret = true;
        if (!this.userData.checkUserPlanHolder()) {
            this.alert.presentAlert('Error', 'Solo el administrador de plan puede crear subcuentas');
            ret = false;
        }
        if (this.userData.checkSusSubaccountsFull()) {
            this.alert.presentAlert('Error', 'Se llego al limite de subcuentas');
            ret = false;
        }
        if (!(this.newUser.pass.localeCompare(this.checkpass) === 0)) {
            this.alert.presentAlert("Error", "las contraseñas no coinciden");
            ret = false;
        }
        if (!(this.newUser.mail.localeCompare(this.newUser.field_useremail.und[0].email) === 0)) {
            this.alert.presentAlert("Error", "Los correos no coinciden");
            ret = false;
        }
        if (this.newUser.field_tipo_de_usuario.und[0] === 0) {
            this.alert.presentAlert("Error", "Selecciona un tipo de usuario");
            ret = false;
        }
        return ret;
    };
    NuevousuarioModalPage.prototype.createrNotEmptyValidation = function () {
        var ret = true;
        if (!this.newUser.name) {
            ret = false;
        }
        if (!this.newUser.field_alias.und[0].value) {
            ret = false;
        }
        if (!ret) {
            this.alert.presentAlert("Error", "Los campos marcados en rojo son obligatorios");
            this.showerrors = true;
        }
        return ret;
    };
    NuevousuarioModalPage.prototype.getUserByCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, subsdata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.getUserCodeValidation()) return [3 /*break*/, 6];
                        this.loader.presentLoader('Buscando usuario ...');
                        return [4 /*yield*/, this.userMan.requestUsers(new Array(), this.newUserCode).toPromise()];
                    case 1:
                        res = _a.sent();
                        if (!(res && res.length > 0)) return [3 /*break*/, 5];
                        console.log('user found', res[0]);
                        return [4 /*yield*/, this.subsManager.requestGroupSubscriptionsFor(res[0].uid).toPromise()];
                    case 2:
                        subsdata = _a.sent();
                        if (subsdata) {
                            subsdata = subsdata.filter(function (subs) {
                                return (Number(subs.field_plan_sus) === Number(__WEBPACK_IMPORTED_MODULE_7__providers_subscription_data_subscription_data__["a" /* SubscriptionDataProvider */].PLAN_GROUP));
                            });
                            console.log('subsdata got', subsdata.length);
                            if (subsdata && subsdata.length > 0) {
                                this.alert.presentAlert("Nada", "No se encontró ningún usuario usando este código");
                                this.loader.dismissLoader();
                                return [2 /*return*/, false];
                            }
                        }
                        return [4 /*yield*/, this.addUserFromCode(res[0])];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.subusersManager.cargarSubusuarios()];
                    case 4:
                        _a.sent();
                        // aqui el usuario ya ha sido agregado a la suscripcion y requiere enviarse un mensaje que relleno los datos del subusuario.
                        this.wsMessenger.generateUserByCode(this.subsData.subscription.field_doctores.concat([res[0].uid]));
                        this.loader.dismissLoader();
                        if (this.tutorial.checkTutorialState()) {
                            this.newUser = res[0];
                            this.codeuserNP = true;
                            this.codeuser = false;
                            this.tutorial.usuarioCreated = true;
                        }
                        else {
                            this.alert.presentAlert("Hecho", "Se le ha asignado el usuario " + res[0]['name']);
                            this.added_user = true;
                            this.close();
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        this.alert.presentAlert("Nada", "No se encontró ningún usuario usando este código");
                        this.loader.dismissLoader();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    NuevousuarioModalPage.prototype.gobackuser = function () {
        console.log('gobackuser', this.isnew);
        console.log('tutorial state is', this.tutorial.checkTutorialState());
        if (this.isnew) {
            this.newuser = false;
            this.codeuser = false;
            this.initialpage = true;
            if (this.tutorial.checkTutorialState()) {
                console.log('setting created step to 0');
                this.tutorial.tutorial_user_created_step = 0;
            }
        }
        else {
            console.log('okei no es new');
            this.dismiss();
        }
    };
    NuevousuarioModalPage.prototype.getUserCodeValidation = function () {
        var ret = true;
        if ((!this.newUserCode) || (this.newUserCode === "all")) {
            ret = false;
        }
        return ret;
    };
    NuevousuarioModalPage.prototype.addUserFromCode = function (user_data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var aux_user, _i, _a, element;
            return __generator(this, function (_b) {
                aux_user = __WEBPACK_IMPORTED_MODULE_4__providers_subusers_manager_subusers_manager__["a" /* SubusersManagerProvider */].getEmptyUserd();
                aux_user.uid = user_data.uid;
                aux_user.name = user_data.name;
                aux_user.field_codigo = user_data.field_codigo;
                aux_user.field_alias.und[0].value = user_data.field_alias;
                aux_user.field_nombre.und[0].value = user_data.field_nombre;
                aux_user.field_apellidos.und[0].value = user_data.field_apellidos;
                aux_user.field_useremail.und[0].email = user_data.field_useremail.email;
                aux_user.mail = user_data.mail;
                aux_user.field_owner.und[0] = user_data.field_owner.uid;
                aux_user.status = "1";
                aux_user.field_doctores.und = new Array();
                aux_user.field_tipo_de_usuario.und = new Array();
                for (_i = 0, _a = user_data.field_doctores; _i < _a.length; _i++) {
                    element = _a[_i];
                    aux_user.field_doctores.und.push(element.uid);
                }
                delete aux_user.field_tipo_de_usuario;
                delete aux_user.field_sub_id;
                //elete aux_user.field_owner;
                //for(let element of user_data.field_tipo_de_usuario){ aux_user.field_tipo_de_usuario.und.push(element.uid); }for(let element of user_data.field_tipo_de_usuario){ aux_user.field_tipo_de_usuario.und.push(element.uid); }
                aux_user.field_doctores.und.push(Number(this.userData.userData.uid));
                console.log('user2save', aux_user);
                console.log('user2save fdocs', aux_user.field_doctores.und);
                //let res = await this.userMan.updateUserd(aux_user).toPromise(); 
                this.userMan.updateUserd(aux_user).subscribe(function (val) {
                    console.log("usuarioUpdated");
                    if (!_this.subsData.subscription.field_subusuarios)
                        _this.subsData.subscription.field_subusuarios = new Array();
                    _this.subsData.subscription.field_subusuarios.push(val['uid']);
                    var obs = _this.subsManager.updateUserSuscription().subscribe(function (val) { console.log('updating subs', val); });
                }, function (response) {
                    console.log("POST call in error", response);
                });
                return [2 /*return*/];
            });
        });
    };
    /*
    updating user with this {"uid":"155","name":"cinthyaR","pass":"","mail":"adsd@www.com","status":"1","roles":[0],"field_tipo_de_usuario":{"und":["2"]},"field_useremail":{"und":[{"email":"adsd@www.com"}]},"field_nombre":{"und":[{"value":"Subusuario"}]},"field_apellidos":{"und":[{"value":"Subusuario"}]},"field_especialidad":{"und":[{"value":""}]},"field_alias":{"und":[{"value":null}]},"field_calle":{"und":[{"value":""}]},"field_no_ext":{"und":[{"value":""}]},"field_no_int":{"und":[{"value":""}]},"field_codigo_postal":{"und":[{"value":""}]},"field_ciudad":{"und":[{"value":""}]},"field_colonia":{"und":[{"value":""}]},"field_pais":{"und":[{"value":""}]},"field_municipio":{"und":[{"value":""}]},"field_estado_ubicacion":{"und":[{"value":""}]},"field_plan_date":{"und":[{"value":{"date":""}}]},"field_forma_pago":{"und":[{"value":""}]},"tutorial_state":{"und":[{"value":0}]},"field_codigo":"kQUiKJ1sXviGYzRi8oNxHp94o","field_doctores":{"und":["150","76"]},"field_planholder":{"und":[{"value":true}]},"field_stripe_customer_id":{"und":[{"value":""}]},"field_src_json_info":{"und":[{"value":""}]}}*/
    NuevousuarioModalPage.prototype.updateUserd = function () {
        var _this = this;
        if (this.updateUserValidation()) {
            this.loader.presentLoader('Guardando usuario ...');
            this.newUser.mail = this.newUser.field_useremail.und[0].email;
            this.newUser.status = "" + 1;
            delete this.newUser.field_sub_id;
            //this.newUser.field_doctores = {'und':[76]};
            console.log('doctores', this.newUser.field_doctores);
            console.log('guardando usuario', this.newUser);
            this.userMan.updateUserd(this.newUser).subscribe(function (val) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.subusersManager.cargarSubusuarios()];
                        case 1:
                            _a.sent();
                            this.loader.dismissLoader();
                            this.close();
                            return [2 /*return*/];
                    }
                });
            }); }, function (response) {
                for (var key in response.error.form_errors) {
                    _this.alert.presentAlert('Error', 'Se ha detectado un error inesperado en el campo ' + key);
                }
                _this.loader.dismissLoader();
            });
        }
    };
    NuevousuarioModalPage.prototype.updateUserValidation = function () {
        var ret = true;
        if (this.newUser.pass || this.checkpass) {
            if (!(this.newUser.pass === this.checkpass)) {
                this.alert.presentAlert("Error", "las contraseñas no coinciden");
                ret = false;
            }
        }
        /*if(this.newUser.field_tipo_de_usuario.und[0] === 0 ){
          this.alert.presentAlert("Error", "Selecciona un tipo de usuario");
          ret = false;
        }*/
        return ret;
    };
    /*presentToast(msg) {
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 6000,
        position: 'top'
      });
      toast.present();
    }*/
    NuevousuarioModalPage.prototype.close = function (iscreated) {
        if (iscreated === void 0) { iscreated = false; }
        this.viewCtrl.dismiss({ "changed": this.added_user });
    };
    /*presentAlert(key,Msg) {
      let alert = this.alertCtrl.create({
        title: key,
        subTitle: Msg,
        buttons: ['Dismiss']
      });
      alert.present();
    }*/
    NuevousuarioModalPage.prototype.randomCode = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    NuevousuarioModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-nuevousuario-modal',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\nuevousuario-modal\nuevousuario-modal.html"*/'<!--\n\n  Generated template for the NuevousuarioModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n    <div class="modal_closer" *ngIf="!this.tutorial.checkTutorialState()" (click)="this.dismiss();">Volver</div>\n\n    <div class="modalPage_header" *ngIf="!this.tutorial.checkTutorialState()">\n\n        <div class="modalPage_logo"><img src="assets/imgs/usuarios.svg"/></div>\n\n        <div class="modalPage_title">\n\n          <span *ngIf="this.isnew" class="spanBlock largeFont"><b>Alta de Usuario</b></span>\n\n          <span *ngIf="!this.isnew" class="spanBlock largeFont"><b>Editar Usuario {{this.newUser.name}}</b></span>\n\n        </div>\n\n    </div>\n\n\n\n    <!--<div class="modalPage_header justify_center" *ngIf="this.tutorial.checkTutorialState() && initialpage" >\n\n            <div class="modalPage_logo"><img src="assets/imgs/usuarios.svg"/></div>\n\n            <span class=" largeFont" *ngIf="this.isnew"><b>Alta de Usuario</b></span>\n\n            <p>Da de alta al personal que te ayuda a administrar y cobrar tus citas.</p>\n\n        </div>-->\n\n        <div class="modalPage_header justify_center" *ngIf="this.tutorial.checkTutorialState()" >\n\n                <div class="modal_justifytitle"><div class="modalPage_logo"><img src="assets/imgs/usuarios.svg"/></div>\n\n                <span class=" largeFont" *ngIf="this.isnew"><b>Alta de Usuario</b></span></div>\n\n                <div class="modalPage_title">\n\n                  <span class="spanBlock midSubFont">Da de alta al personal que te ayuda a administrar y cobrar tus citas.</span>\n\n                </div>\n\n            </div>\n\n        <!-- cuando es un usuario de grupo entrando a tutorial a la pagina inicial y si requiere explicacion y es el que crea el grupo-->\n\n        <div class="user_explain"  *ngIf="this.tutorial.checkTutorialState() && initialpage && this.tutorial.isGroup && this.tutorial.usergroupexplain && this.tutorial.isplanholder">\n\n            <span class="spanBlock midSubFont">Dentro de un grupo medico los usuarios creados serán compartidos por todos los doctores del grupo. A continuación te explicamos como funcionan y como crearlos. </span>\n\n            <span *ngIf="this.tutorial.subaccountsleft < 2" > * no hay suficientes espacios en el grupo para seguir el tutorial.</span>\n\n            <div class="user_explain_buttonsection">\n\n               <span class="spanBlock midSubFont"> puedes omitir el tutorial haciendo click <button class="generalButton bgColorSecondary" (click)="endUsers()">aquí</button></span>\n\n            </div>\n\n        </div>\n\n\n\n         <!-- cuando es un usuario de grupo entrando a tutorial a la pagina inicial y si requiere explicacion y NO es el que crea el grupo, es un doctor mas-->\n\n    \n\n    <div class="user_explain" *ngIf="this.tutorial.checkTutorialState() && initialpage && this.tutorial.usuarioCreated === false" ><!-- Drap agregar usuarios explicacion block-->\n\n        <span class="spanBlock midSubFont">DRAP te permite elegir entre tres opciones de usuarios.</span>\n\n        <!--<div class="trisectional">\n\n            <div class="trisectional_section"> <span class="spanBlock fontPrimary midSubFont bold">Recepción:</span><span class="spanBlock midSubFont">Crea Citas</span></div>\n\n            <div class="trisectional_section"> <span class="spanBlock fontPrimary midSubFont bold">Caja:</span><span class="spanBlock midSubFont">Cobra Citas</span></div>\n\n            <div class="trisectional_section"> <span class="spanBlock fontPrimary midSubFont bold">Caja & Recepción:</span><span class="spanBlock midSubFont">Crea y Cobra Citas</span></div>\n\n        </div>-->\n\n      \n\n    </div>\n\n\n\n    <div class="user_tutorial_selection" *ngIf="this.tutorial.checkTutorialState() && initialpage && this.tutorial.usuarioCreated === false && this.tutorial.isplanholder && this.tutorial.subaccountsleft >= 2">\n\n        <span class="spanBlock midSubFont">Por favor selecciona la opción de personal que mejor describa el proceso en tu consultorio</span>\n\n        <div class="bisectional">\n\n            <div class="bisectional_section" (click)="selectOption(2)"  [class.selectedOption]="checkSelectedOption(2)">\n\n                <span class="spanBlock"> ¿Cuentas con personal independiente en la recepción y en la caja?</span>\n\n                <span class="spanBlock"> Crea usuarios para <span class="fontPrimary">Caja</span> y <span class="fontPrimary">Recepción</span> </span>\n\n            </div>\n\n            <div class="bisectional_section"  (click)="selectOption(1)" [class.selectedOption]="checkSelectedOption(1)">\n\n                <span class="spanBlock"> ¿Una sola persona administra y cobra tus citas?</span>\n\n                <span class="spanBlock"> Crea un usuario de <span class="fontPrimary">Caja & Recepción</span></span>\n\n            </div>\n\n        </div>\n\n        <div class="addbycode" *ngIf="!this.tutorial.isGroup">\n\n            <div class="bisectional_section"  (click)="selectOption(3)" [class.selectedOption]="checkSelectedOption(3)">\n\n                <span class="spanBlock"> ¿Compartes personal con otro usuario de DRAP?</span>\n\n                <span class="spanBlock"> Si los usuarios ya han sido creados puedes agregarlos usando sus <span class="fontPrimary">codigos</span> aqui.</span>\n\n            </div>\n\n        </div>\n\n        <p *ngIf="this.tutorial.isplanholder" class="midSubFont" >Adquiere los usuarios adicionales que necesites ingresando en <span class="fontPrimary">MI PLAN</span></p>\n\n        <div class="buttonsection">\n\n            <button class="generalButton bgColorSecondary"[class.disabledsubbtn]="!isSelectedOption" [disabled]="!isSelectedOption()" (click)="userTutorialStart()">Continuar</button>\n\n        </div>\n\n    </div>\n\n    \n\n    <div class="user_explain"  *ngIf="this.tutorial.checkTutorialState() && initialpage && this.tutorial.isGroup && this.tutorial.usergroupexplain  && !this.tutorial.isplanholder">\n\n        <p class="spanBlock midSubFont">Dentro de un grupo medico los usuarios creados serán compartidos por todos los doctores del grupo. Puedes acceder a la pagina de usuarios desde el menu donde podras crear usuarios si lo necesitas, pero probablemente ya existan usuarios en tu grupo.  </p>\n\n        <div class="user_explain_buttonsection">\n\n            <span class="spanBlock midSubFont"><button class="generalButton bgColorSecondary" (click)="endUsers()">Continuar</button></span>\n\n         </div>\n\n    </div>\n\n\n\n    \n\n\n\n\n\n    <div class="modalContent">\n\n      <div class="alta_main" *ngIf="initialpage && !this.tutorial.checkTutorialState()"  >\n\n        <span class="spanBlock midSubFont">Busca usuarios compartidos o registra uno nuevo</span>\n\n        <span class="spanBlock" *ngIf="!this.subsData.isGroup"> <button class="bgColorSecondary generalButton" (click)="codeuser=true; initialpage=false;">Buscar Usuario</button></span>\n\n        <span class="spanBlock" *ngIf="this.userData.checkUserPlanHolder()"> <button class="bgColorSecondary generalButton" (click)="newuser=true; initialpage=false;">Registrar Nuevo</button></span>\n\n      </div>\n\n    <div class="nuevoservicio_content modalContent" *ngIf="codeuser">\n\n        <span class="spanBlock optionspan" (click)="gobackuser()" *ngIf="this.checkIfgoback()"> atrás </span>\n\n        <div class="ModalInput_input">\n\n            <span class="codetext"><b>Introducir Código</b> <span class="label">usuarios disponibles: {{subsLeft}}</span></span>\n\n            <input  [(ngModel)]="this.newUserCode" type="text"/>\n\n        </div>\n\n        <div class="midAlign">\n\n            <div class="register_button_section">\n\n            <button (click)="getUserByCode()"  *ngIf="subsLeft > 0" class="bgColorSecondary generalButton">Buscar</button>\n\n            </div>\n\n          </div>\n\n    </div>\n\n    <div class="nuevoservicio_content modalContent" *ngIf="this.newuser">\n\n            <span class="spanBlock optionspan" (click)="gobackuser()" *ngIf="this.checkIfgoback()"> atrás </span>\n\n            <span class="tutorial_explain_text" *ngIf="this.tutorial.checkTutorialState() && this.tutorial.tutorial_user_created_step === this.tutorial.TUTORIAL_USER_STEP_CAJA"> <span class="fontPrimary">Caja.</span> Esta persona cobra las citas </span>\n\n            <span class="tutorial_explain_text" *ngIf="this.tutorial.checkTutorialState() && this.tutorial.tutorial_user_created_step === this.tutorial.TUTORIAL_USER_STEP_RECEPCION"> <span class="fontPrimary">Recepción.</span> Esta persona administra citas </span>\n\n            <span class="tutorial_explain_text" *ngIf="this.tutorial.checkTutorialState() && this.tutorial.tutorial_users_selected_option === this.tutorial.TUTORIAL_USER_CNR"> <span class="fontPrimary">Recepción y Caja.</span> Esta persona administra y cobra las citas </span>\n\n            \n\n            <!--<div class="tutorial_usercode">\n\n                    <span class="tutorial_explain_text_sm" *ngIf="this.tutorial.checkTutorialState()"> Puedes buscar un usuario existente introduciendo el codigo de usuario aqui. </span>\n\n                <span class="span"><input [(ngModel)]="this.newUserCode" type="text" class="codigo"/><button (click)="getUserByCode()" class="bgColorSecondary generalButton">Buscar</button></span>\n\n                <span class="tutorial_explain_text_sm" *ngIf="this.tutorial.checkTutorialState()"> O puedes rellenar el siguiente formulario para crear un nuevo usuario </span>\n\n            </div>-->\n\n           \n\n        <div *ngIf="this.isnew" class="ModalInput_input">\n\n            <b>Usuario</b>\n\n            <input  [(ngModel)]="this.newUser.name" [class.registerInputerror]="!this.newUser.name && showerrors" type="text"/>\n\n        </div>\n\n        <div  class="ModalInput_input">\n\n            <b>Alias</b>\n\n            <input  [(ngModel)]="this.newUser.field_alias.und[0].value" [class.registerInputerror]="!this.newUser.field_alias.und[0].value && showerrors"  type="text"/>\n\n        </div>\n\n        <div class="ModalInput_input" *ngIf="!this.tutorial.checkTutorialState()">\n\n            <b>Tipo de Usuario:</b>\n\n          <select  [(ngModel)]="this.newUser.field_tipo_de_usuario.und"  class="input_select input" >\n\n              <option selected disabled value="0">SELECT</option>\n\n              <option value="2">recepción</option>\n\n              <option value="3">caja</option>\n\n              <option value="4">recepción & caja</option>\n\n            </select>\n\n          </div>\n\n          <div class="ModalInput_input" *ngIf="this.tutorial.checkTutorialState()">\n\n                <b>Tipo de Usuario:</b>\n\n              <select  [(ngModel)]="this.newUser.field_tipo_de_usuario.und" class="input_select input" disabled>\n\n                  <option value="2" selected  *ngIf="this.tutorial.tutorial_user_created_step === this.tutorial.TUTORIAL_USER_STEP_RECEPCION">recepción</option>\n\n                  <option value="3"  selected  *ngIf="this.tutorial.tutorial_user_created_step === this.tutorial.TUTORIAL_USER_STEP_CAJA">caja</option>\n\n                  <option value="4"  selected  *ngIf="this.tutorial.tutorial_users_selected_option === this.tutorial.TUTORIAL_USER_CNR">recepción & caja</option>\n\n                </select>\n\n              </div>\n\n          <div class="ModalInput_input">\n\n            <b>Correo electrónico</b>\n\n            <input [(ngModel)]="this.newUser.field_useremail.und[0].email"  type="text"/>\n\n        </div>\n\n        <div *ngIf="this.isnew" class="ModalInput_input">\n\n            <b>Confirmar correo electrónico</b>\n\n            <input [(ngModel)]="this.newUser.mail" type="text"/>\n\n        </div>\n\n        <div class="ModalInput_input">\n\n            <b>Contraseña</b>\n\n            <input [(ngModel)]="this.newUser.pass" type="password"/>\n\n        </div>\n\n        <div class="ModalInput_input">\n\n            <b>Confirmar contraseña</b>\n\n            <input [(ngModel)]="this.checkpass" type="password"/>\n\n        </div>\n\n        <div class="midAlign">\n\n            <div class="register_button_section">\n\n                \n\n            <button *ngIf="this.isnew"  (click)="createUserd()" class="bgColorSecondary generalButton">Agregar</button>\n\n            <button *ngIf="!this.isnew" (click)="updateUserd()"  class="bgColorSecondary generalButton">Actualizar</button>\n\n            </div>\n\n          </div>\n\n\n\n    </div>\n\n  \n\n    </div>\n\n\n\n    <div class="modalContent" style="text-align: center;" *ngIf="this.tutorial.checkTutorialState() && this.tutorial.usuarioCreated" >\n\n            <span class="spanBlock bigBoldFont">¡Felicidades!</span>\n\n            <span class="spanBlock midMainFont">Tu usuario ha sido creado</span>\n\n            <span class="spanBlock midSubFont">Te proporcionamos sus datos para que pueda ingresar desde este momento en DRAP</span>\n\n            <span class="spanBlock midSubFont">Nombre: <span class="fontHigh">{{this.newUser.name}}</span></span>\n\n            <span class="spanBlock midSubFont">Correo: <span class="fontHigh">{{this.newUser.mail}}</span></span>\n\n            <span class="spanBlock midSubFont" *ngIf="!this.codeuserNP">Contraseña: <span class="fontHigh">{{this.checkpass}}</span></span>\n\n            <span class="spanBlock midSubFont"> Puedes modificar los usuarios desde la sección de Alta de Usuarios en el Menú</span>\n\n            </div>\n\n            <div class="midAlign" *ngIf="this.tutorial.checkTutorialState() && this.tutorial.usuarioCreated">\n\n                <div class="register_button_section">\n\n                <button (click)="this.nextUser()"  *ngIf="this.tutorial.tutorial_user_created_step === this.tutorial.TUTORIAL_USER_STEP_CAJA" class="bgColorSecondary generalButton tutorialButton">Continuar</button>\n\n                <button (click)="this.endUsers()"  *ngIf="this.tutorial.tutorial_users_selected_option === this.tutorial.TUTORIAL_USER_CNR || this.tutorial.tutorial_user_created_step === this.tutorial.TUTORIAL_USER_STEP_RECEPCION " class="bgColorSecondary generalButton tutorialButton">Continuar</button>\n\n                <button (click)="this.nextUser()"  *ngIf="this.tutorial.tutorial_users_selected_option === this.tutorial.TUTORIAL_USER_CODE && subsLeft > 0" class="bgColorSecondary generalButton tutorialButton">Introducir otro</button>\n\n                <button (click)="this.endUsers()"  *ngIf="this.tutorial.tutorial_users_selected_option === this.tutorial.TUTORIAL_USER_CODE" class="bgColorSecondary generalButton tutorialButton">Continuar</button>\n\n               \n\n                <!--<button (click)="this.restart()" class="bgColorSecondary generalButton">Crear Otro</button>-->\n\n                <!--<button (click)="this.dismiss()" class="bgColorSecondary generalButton">Continuar</button>-->\n\n                </div>\n\n              </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\nuevousuario-modal\nuevousuario-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_subscription_data_subscription_data__["a" /* SubscriptionDataProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_subscription_manager_subscription_manager__["a" /* SubscriptionManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_drupal_user_manager_drupal_user_manager__["a" /* DrupalUserManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_subusers_manager_subusers_manager__["a" /* SubusersManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_tutorial_tutorial__["a" /* TutorialProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_ws_messenger_ws_messenger__["a" /* WsMessengerProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_permissions_permissions__["a" /* PermissionsProvider */]])
    ], NuevousuarioModalPage);
    return NuevousuarioModalPage;
}());

//# sourceMappingURL=nuevousuario-modal.js.map

/***/ })

});
//# sourceMappingURL=15.js.map
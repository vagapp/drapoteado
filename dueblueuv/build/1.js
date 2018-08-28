webpackJsonp([1],{

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPageModule", function() { return UsuariosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuarios__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UsuariosPageModule = /** @class */ (function () {
    function UsuariosPageModule() {
    }
    UsuariosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__usuarios__["a" /* UsuariosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__usuarios__["a" /* UsuariosPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], UsuariosPageModule);
    return UsuariosPageModule;
}());

//# sourceMappingURL=usuarios.module.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevousuarioModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data_debugger__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_drupal_user_manager_drupal_user_manager__ = __webpack_require__(42);
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
 * Generated class for the NuevousuarioModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NuevousuarioModalPage = /** @class */ (function () {
    function NuevousuarioModalPage(navCtrl, navParams, userData, loadingCtrl, toastCtrl, viewCtrl, alertCtrl, userMan) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.userMan = userMan;
        this.initialpage = true;
        this.newuser = false;
        this.codeuser = false;
        console.log('GETTING userd', navParams.get('userd'));
        var aux_node = navParams.get('userd');
        if (aux_node) {
            this.isnew = false;
            this.newUser = this.userData.getEmptyUserd();
            this.newUser = aux_node;
            this.initialpage = false;
            this.newuser = true;
        }
        else {
            this.isnew = true;
            this.resetNewUser();
        }
    }
    NuevousuarioModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NuevousuarioModalPage.prototype.resetNewUser = function () {
        this.newUser = this.userData.getEmptyUserd();
    };
    NuevousuarioModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NuevousuarioModalPage');
    };
    NuevousuarioModalPage.prototype.createUserd = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Generando Usuario"
        });
        loader.present();
        //validating if posible
        if (!this.userData.checkUserPlanHolder()) {
            loader.dismiss();
            this.presentAlert('Error', 'Solo el administrador de plan puede crear subcuentas');
            this.close();
            return 0;
        }
        if (this.userData.checkSusSubaccountsFull()) {
            loader.dismiss();
            this.presentAlert('Error', 'Se llego al limite de subcuentas');
            this.close();
            return 0;
        }
        __WEBPACK_IMPORTED_MODULE_3__providers_user_data_debugger__["a" /* Debugger */].log(["creating an user ", this.newUser]);
        //revisar contraseñas
        if (!(this.newUser.pass.localeCompare(this.checkpass) === 0)) {
            this.presentAlert("Error", "las contraseñas no coinciden");
            loader.dismiss();
            return 0;
        }
        if (!(this.newUser.mail.localeCompare(this.newUser.field_useremail.und[0].email) === 0)) {
            this.presentAlert("Error", "Los correos no coinciden");
            loader.dismiss();
            return 0;
        }
        //agregar este doctor.
        this.newUser.field_doctores.und = new Array();
        this.newUser.field_doctores.und[this.userData.userData.uid] = this.userData.userData.uid;
        //crear codigo, verificar que sea unique = S
        this.newUser.field_codigo.und[0].value = "add" + this.userData.userData.uid;
        this.newUser.field_nombre.und[0].value = "Subusuario";
        this.newUser.field_apellidos.und[0].value = "Subusuario";
        this.newUser.status = "" + 1;
        delete this.newUser.field_sub_id;
        this.userMan.generateNewUserd(this.newUser).subscribe(function (val) {
            __WEBPACK_IMPORTED_MODULE_3__providers_user_data_debugger__["a" /* Debugger */].log(['generated user returned', val]);
            if (!_this.userData.subscription.field_subusuarios)
                _this.userData.subscription.field_subusuarios = new Array();
            _this.userData.subscription.field_subusuarios.push(val['uid']);
            /*this.userData.updateSus(this.userData.subscription).subscribe(
              (val) => {
                Debugger.log(['updated subscription returned',val]);
              },
              response => {
                Debugger.log(['error on saving subscription for new user',response]);
              }
            );*/
            _this.presentToast("Completado");
            loader.dismiss();
            _this.close();
        }, function (response) {
            for (var key in response.error.form_errors) {
                _this.presentAlert(key, response.error.form_errors[key]);
                //this.presentToast(response.error.form_errors[key]);
                //console.log(key, response.error.form_errors[key]);
            }
            loader.dismiss();
        });
    };
    NuevousuarioModalPage.prototype.getUserByCode = function () {
        if ((!this.newUserCode) || (this.newUserCode === "all")) {
            console.log("all or empty is not valid mf");
            return false;
        }
        var loader = this.loadingCtrl.create({
            content: "Guardando . . ."
        });
        var dis = this;
        this.userMan.requestUsers(new Array(), this.newUserCode).subscribe(function (val) {
            console.log(val);
            var aux_results = Object.keys(val).map(function (key) { return val[key]; });
            if (aux_results.length == 0) {
                dis.presentAlert("Nada", "No se encontró ningún usuario usando este código");
                loader.dismiss();
                return false;
            }
            aux_results.forEach(function (element) {
                var aux_user = dis.userData.getEmptyUserd();
                aux_user.uid = element.uid;
                aux_user.name = element.name;
                aux_user.field_alias.und[0].value = element.field_alias;
                aux_user.field_nombre.und[0].value = element.field_nombre;
                aux_user.field_apellidos.und[0].value = element.field_apellidos;
                aux_user.field_useremail.und[0].email = element.field_useremail.email;
                aux_user.mail = element.mail;
                aux_user.status = "1";
                aux_user.field_doctores.und = new Array();
                var aux_docs = Object.keys(element.field_doctores).map(function (key) { return element.field_doctores[key]; });
                aux_docs.forEach(function (element) {
                    aux_user.field_doctores.und.push(element.uid);
                });
                aux_user.field_tipo_de_usuario.und = new Array();
                var aux_tipos = Object.keys(element.field_tipo_de_usuario).map(function (key) { return element.field_tipo_de_usuario[key]; });
                aux_tipos.forEach(function (element) {
                    aux_user.field_tipo_de_usuario.und.push(element);
                });
                //agregar doctor
                aux_user.field_doctores.und.push(dis.userData.userData.uid);
                //guardar usuario
                console.log("guardando usuario", aux_user);
                //agregando doctor al usuario
                dis.userMan.updateUserd(aux_user).subscribe(function (val) {
                    console.log("usuarioUpdated");
                    dis.presentToast("Usuario Agregado");
                    loader.dismiss();
                    dis.close();
                }, function (response) {
                    console.log("POST call in error", response);
                    console.log("show error");
                    for (var key in response.error.form_errors) {
                        dis.presentAlert(key, response.error.form_errors[key]);
                    }
                    loader.dismiss();
                });
            });
        }, function (response) {
            console.log("POST call in error", response);
        });
    };
    NuevousuarioModalPage.prototype.updateUserd = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Guardando . . ."
        });
        loader.present();
        if (this.newUser.pass || this.checkpass) {
            if (!(this.newUser.pass === this.checkpass)) {
                this.presentAlert("Error", "las contraseñas no coinciden");
                loader.dismiss();
                return 0;
            }
        }
        this.newUser.mail = this.newUser.field_useremail.und[0].email;
        this.newUser.status = "" + 1;
        delete this.newUser.field_sub_id;
        console.log("updating", this.newUser);
        this.userMan.updateUserd(this.newUser).subscribe(function (val) {
            console.log("usuarioUpdated");
            _this.presentToast("Completado");
            loader.dismiss();
            _this.close();
        }, function (response) {
            console.log("POST call in error", response);
            console.log("show error");
            for (var key in response.error.form_errors) {
                _this.presentAlert(key, response.error.form_errors[key]);
            }
            loader.dismiss();
        });
    };
    NuevousuarioModalPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 6000,
            position: 'top'
        });
        toast.present();
    };
    NuevousuarioModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    NuevousuarioModalPage.prototype.presentAlert = function (key, Msg) {
        var alert = this.alertCtrl.create({
            title: key,
            subTitle: Msg,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    NuevousuarioModalPage.prototype.randomCode = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    NuevousuarioModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nuevousuario-modal',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\nuevousuario-modal\nuevousuario-modal.html"*/'<!--\n\n  Generated template for the NuevousuarioModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n    <div class="modal_closer" (click)="this.dismiss();">Volver</div>\n\n    <div class="modalPage_header">\n\n        <div class="modalPage_logo"><img src="assets/imgs/usuarios.svg"/></div>\n\n        <div class="modalPage_title">\n\n          <span *ngIf="this.isnew" class="spanBlock largeFont"><b>Alta de Usuario</b></span>\n\n          <span *ngIf="!this.isnew" class="spanBlock largeFont"><b>Editar Usuario {{this.newUser.name}}</b></span>\n\n        </div>\n\n    </div>\n\n    <div class="modalContent">\n\n      <div class="alta_main" *ngIf="initialpage">\n\n        <span class="spanBlock midSubFont">Busca usuarios compartidos o registra uno nuevo</span>\n\n        <span class="spanBlock"> <button class="bgColorSecondary generalButton" (click)="codeuser=true; initialpage=false;">Buscar Usuario</button></span>\n\n        <span class="spanBlock" *ngIf="this.userData.checkUserPlanHolder()"> <button class="bgColorSecondary generalButton" (click)="newuser=true; initialpage=false;">Registrar Nuevo</button></span>\n\n      </div>\n\n    <div class="nuevoservicio_content modalContent" *ngIf="codeuser">\n\n        <div class="ModalInput_input">\n\n            <b>Introducir Código</b>\n\n            <input  [(ngModel)]="this.newUserCode" type="text"/>\n\n        </div>\n\n        <div class="midAlign">\n\n            <div class="register_button_section">\n\n            <button (click)="getUserByCode()" class="bgColorSecondary generalButton">Buscar</button>\n\n            </div>\n\n          </div>\n\n    </div>\n\n    <div class="nuevoservicio_content modalContent" *ngIf="newuser">\n\n        <div *ngIf="this.isnew" class="ModalInput_input">\n\n            <b>username</b>\n\n            <input  [(ngModel)]="this.newUser.name" type="text"/>\n\n        </div>\n\n        <div class="ModalInput_input">\n\n            <b>Tipo de Usuario:</b>\n\n          <select  [(ngModel)]="this.newUser.field_tipo_de_usuario.und" class="input_select input">\n\n              <option selected disabled value="0">SELECT</option>\n\n              <option value="2">recepción</option>\n\n              <option value="3">caja</option>\n\n              <option value="4">recepción&caja</option>\n\n            </select>\n\n          </div>\n\n          <div class="ModalInput_input">\n\n            <b>Correo Electrónico</b>\n\n            <input [(ngModel)]="this.newUser.field_useremail.und[0].email" type="text"/>\n\n        </div>\n\n        <div *ngIf="this.isnew" class="ModalInput_input">\n\n            <b>Confirmar Correo Electrónico</b>\n\n            <input [(ngModel)]="this.newUser.mail" type="text"/>\n\n        </div>\n\n        <div class="ModalInput_input">\n\n            <b>Contraseña</b>\n\n            <input [(ngModel)]="this.newUser.pass" type="password"/>\n\n        </div>\n\n        <div class="ModalInput_input">\n\n            <b>Confirmar Contraseña</b>\n\n            <input [(ngModel)]="this.checkpass" type="password"/>\n\n        </div>\n\n        <div class="midAlign">\n\n            <div class="register_button_section">\n\n            <button *ngIf="this.isnew"  (click)="createUserd()" class="bgColorSecondary generalButton">Agregar</button>\n\n            <button *ngIf="!this.isnew" (click)="updateUserd()"  class="bgColorSecondary generalButton">Actualizar</button>\n\n            </div>\n\n          </div>\n\n\n\n    </div>\n\n  \n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\nuevousuario-modal\nuevousuario-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_drupal_user_manager_drupal_user_manager__["a" /* DrupalUserManagerProvider */]])
    ], NuevousuarioModalPage);
    return NuevousuarioModalPage;
}());

//# sourceMappingURL=nuevousuario-modal.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuevousuario_modal_nuevousuario_modal__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_drupal_user_manager_drupal_user_manager__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_subusers_data_subusers_data__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_subusers_manager_subusers_manager__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_permissions_permissions__ = __webpack_require__(67);
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
 * Generated class for the UsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsuariosPage = /** @class */ (function () {
    //usersd:userd[];
    function UsuariosPage(navCtrl, navParams, modalCtrl, userData, viewCtrl, userMan, loader, alert, subuserData, subusersManager, permissions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.userData = userData;
        this.viewCtrl = viewCtrl;
        this.userMan = userMan;
        this.loader = loader;
        this.alert = alert;
        this.subuserData = subuserData;
        this.subusersManager = subusersManager;
        this.permissions = permissions;
        //this.usersd = new Array();
    }
    UsuariosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsuariosPage');
        this.cargarUsuarios();
    };
    /*
      cargar usuarios carga los usuarios de la subscripcion y los usuarios que tienes agregados.
    **/
    UsuariosPage.prototype.cargarUsuarios = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader.presentLoader('Cargando Usuarios ...');
                        return [4 /*yield*/, this.subusersManager.cargarSubusuarios()];
                    case 1:
                        _a.sent();
                        this.loader.dismissLoader();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuariosPage.prototype.openNuevousuario = function () {
        var Modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__nuevousuario_modal_nuevousuario_modal__["a" /* NuevousuarioModalPage */], undefined, { cssClass: "smallModal nuevousuarioModal" });
        Modal.present({});
    };
    UsuariosPage.prototype.editUsuario = function (userd) {
        var Modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__nuevousuario_modal_nuevousuario_modal__["a" /* NuevousuarioModalPage */], { 'userd': userd }, { cssClass: "smallModal nuevousuarioModal" });
        Modal.present({});
    };
    UsuariosPage.prototype.deleteUsuario = function (userd, fromSub) {
        var _this = this;
        if (fromSub === void 0) { fromSub = false; }
        this.alert.chooseAlert('Eliminar', '¿Está seguro de que desea eliminar este usuario de la subscripción?', function () { _this.removeSubUserFromSubs(userd); }, function () { });
    };
    UsuariosPage.prototype.removeUsuariopop = function (userd, fromSub) {
        var _this = this;
        if (fromSub === void 0) { fromSub = false; }
        this.alert.chooseAlert('Remover', '¿Está seguro de que desea remover? El usuario no se borrará, solo dejará de administrar sus citas', function () { _this.removeUsuario(userd); }, function () { });
    };
    UsuariosPage.prototype.agregarusuariopop = function (userd) {
        var _this = this;
        this.alert.chooseAlert('Agregar', '¿Está seguro de que desea agregar? El usuario administrara sus citas', function () { _this.addUsuario(userd); }, function () { });
    };
    UsuariosPage.prototype.removeUsuario = function (userd) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader.presentLoader("removiendo usuario . . .");
                        return [4 /*yield*/, this.subusersManager.removeSubuser(userd)];
                    case 1:
                        _a.sent();
                        console.log('is removed yet?');
                        this.loader.dismissLoader();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuariosPage.prototype.addUsuario = function (userd) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader.presentLoader('Agregando usuario ...');
                        return [4 /*yield*/, this.subusersManager.addSubuser(userd)];
                    case 1:
                        _a.sent();
                        this.loader.dismissLoader();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuariosPage.prototype.removeSubUserFromSubs = function (userd) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader.presentLoader('Eliminando usuario ...');
                        //await this.subusersManager.removeSubuser(userd);
                        return [4 /*yield*/, this.subusersManager.removeUserFromSubscription(userd)];
                    case 1:
                        //await this.subusersManager.removeSubuser(userd);
                        _a.sent();
                        console.log('is removed yet?');
                        this.loader.dismissLoader();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usuarios',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\usuarios\usuarios.html"*/'<!--\n\n  Generated template for the UsuariosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<header></header>\n\n<ion-content padding class="drap_content">\n\n  <div class="modalPage_header">\n\n    <div class="modalPage_logo"><img src="assets/imgs/usuarios.svg"/></div>\n\n    <div class="modalPage_title">\n\n      <span class="spanBlock midFont"><b>Alta de Usuarios</b></span>\n\n      <span class="spanBlock midSubFont">Da de alta a los usuarios que utilizarán esta aplicación en recepción, caja y Recepción & Caja (si es la misma persona)</span>\n\n    </div>\n\n      <button class="bgColorSecondary generalButton floatRight" (click)="openNuevousuario()">Agregar Nuevo</button>\n\n  </div>\n\n  <div class="Citas_grid result_wrapper">\n\n    <table class="results_table">\n\n        <thead>\n\n            <tr>\n\n                <th>Usuario</th>\n\n                <th>Tipo de Usuario</th>\n\n                <th></th>\n\n             </tr>\n\n        </thead>\n\n        <tbody>\n\n            <tr *ngFor="let user of this.subuserData.subUsers">\n\n                <td><b>{{user.uid}}</b>{{user.name}}</td>\n\n                <td class="fontHight">{{this.userData.getTipoUsuarioString(user.field_tipo_de_usuario.und[0])}}</td>\n\n                <td class="toolCol">\n\n                  <img     *ngIf="this.permissions.checkUserPlanHolder()"  src="assets/imgs/editar.svg" class="icon_drapo" (click)="editUsuario(user)">\n\n                  <button  *ngIf="user.field_doctores.und.indexOf(this.userData.userData.uid) >= 0"  (click)="removeUsuariopop(user)" class="bgColorPrimary generalButton tableButton">Remover</button>\n\n                  <button  *ngIf="user.field_doctores.und.indexOf(this.userData.userData.uid) === -1"  (click)="agregarusuariopop(user)" class="bgColorPrimary generalButton tableButton">Agregar</button>\n\n                  <button  *ngIf="this.permissions.checkUserPlanHolder()"  (click)="deleteUsuario(user,true)" class="bgColorPrimary generalButton tableButton">Eliminar</button>\n\n                </td>\n\n             </tr>\n\n        </tbody>\n\n    </table>\n\n  </div>\n\n<footer></footer>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\usuarios\usuarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_drupal_user_manager_drupal_user_manager__["a" /* DrupalUserManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_subusers_data_subusers_data__["a" /* SubusersDataProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_subusers_manager_subusers_manager__["a" /* SubusersManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_permissions_permissions__["a" /* PermissionsProvider */]])
    ], UsuariosPage);
    return UsuariosPage;
}());

//# sourceMappingURL=usuarios.js.map

/***/ })

});
//# sourceMappingURL=1.js.map
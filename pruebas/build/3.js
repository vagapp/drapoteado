webpackJsonp([3],{

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPageModule", function() { return UsuariosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuarios__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(420);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__usuarios__["a" /* UsuariosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__usuarios__["a" /* UsuariosPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], UsuariosPageModule);
    return UsuariosPageModule;
}());

//# sourceMappingURL=usuarios.module.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_drupal_user_manager_drupal_user_manager__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loader_loader__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_subusers_data_subusers_data__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_subusers_manager_subusers_manager__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_permissions_permissions__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_subscription_data_subscription_data__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_ws_messenger_ws_messenger__ = __webpack_require__(95);
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
    function UsuariosPage(navCtrl, navParams, modalCtrl, userData, viewCtrl, userMan, loader, alert, subsData, subuserData, subusersManager, permissions, WS) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.userData = userData;
        this.viewCtrl = viewCtrl;
        this.userMan = userMan;
        this.loader = loader;
        this.alert = alert;
        this.subsData = subsData;
        this.subuserData = subuserData;
        this.subusersManager = subusersManager;
        this.permissions = permissions;
        this.WS = WS;
        //this.usersd = new Array();
    }
    Object.defineProperty(UsuariosPage.prototype, "subusersLimit", {
        //usersd:userd[];
        get: function () {
            return this.subsData.getSubAccountsTotal();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsuariosPage.prototype, "subUsersLeft", {
        get: function () {
            return this.subsData.getSubAccountsLeft();
        },
        enumerable: true,
        configurable: true
    });
    UsuariosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsuariosPage');
        console.log('getting subusers limit', this.subsData.getSubAccountsLeft());
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
                        //await this.subusersManager.cargarSubusuariosSubs();
                        console.log('subscription subusers loaded end', this.subuserData.subscriptionSubUsers);
                        this.loader.dismissLoader();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuariosPage.prototype.openNuevousuario = function () {
        var _this = this;
        console.log('subs restantes', this.subsData.getSubAccountsLeft());
        if (this.subsData.getSubAccountsLeft() > 0) {
            var Modal = this.modalCtrl.create("NuevousuarioModalPage", undefined, { cssClass: "smallModal nuevousuarioModal" });
            Modal.onDidDismiss(function (data) {
                if (data !== null) {
                    if (data.changed === true) {
                        _this.cargarUsuarios();
                    }
                }
            });
            Modal.present({});
        }
        else {
            this.alert.presentAlert('Error', 'No puedes agregar mas usuarios');
        }
    };
    UsuariosPage.prototype.editUsuario = function (userd) {
        var Modal = this.modalCtrl.create("NuevousuarioModalPage", { 'userd': userd }, { cssClass: "smallModal nuevousuarioModal" });
        Modal.present({});
    };
    UsuariosPage.prototype.deleteUsuario = function (userd, fromSub) {
        var _this = this;
        if (fromSub === void 0) { fromSub = false; }
        this.alert.chooseAlert('Eliminar', '¿Está seguro de que desea eliminar este usuario de la subscripción?', function () { /*this.removeSubUserFromSubs(userd);*/ _this.completeSubUserRemove(userd); }, function () { });
    };
    UsuariosPage.prototype.removeUsuariopop = function (userd, fromSub) {
        var _this = this;
        if (fromSub === void 0) { fromSub = false; }
        this.alert.chooseAlert('Remover', '¿Está seguro de que desea remover? El usuario no se borrará, solo dejará de administrar sus citas', function () { /*this.removeUsuario( userd );*/ /*this.removeSubUserFromSubs(userd);*/ _this.completeSubUserRemove(userd); }, function () { });
    };
    UsuariosPage.prototype.agregarusuariopop = function (userd) {
        var _this = this;
        this.alert.chooseAlert('Agregar', '¿Está seguro de que desea asignarse a este usuario? El usuario administrara sus citas', function () { _this.addUsuario(userd); }, function () { });
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
                        return [4 /*yield*/, this.subusersManager.cargarSubusuarios()];
                    case 2:
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
                        return [4 /*yield*/, this.subusersManager.cargarSubusuarios()];
                    case 2:
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
                        return [4 /*yield*/, this.subusersManager.cargarSubusuarios()];
                    case 2:
                        _a.sent();
                        console.log('is removed yet?');
                        this.loader.dismissLoader();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuariosPage.prototype.completeSubUserAdd = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    UsuariosPage.prototype.completeSubUserRemove = function (userd) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('CHEKAME WEY');
                        this.loader.presentLoader('Removiendo usuario ...');
                        //await this.subusersManager.removeSubuser(userd);
                        return [4 /*yield*/, this.subusersManager.removeUserFromSubscription(userd)];
                    case 1:
                        //await this.subusersManager.removeSubuser(userd);
                        _a.sent();
                        console.log('CHEKAME WEY a ');
                        return [4 /*yield*/, this.subusersManager.removeSubuser(userd)];
                    case 2:
                        _a.sent();
                        console.log('CHEKAME WEY b');
                        return [4 /*yield*/, this.subusersManager.cargarSubusuarios()];
                    case 3:
                        _a.sent();
                        console.log('CHEKAME WEY c');
                        this.WS.generateSuboutofgroup(this.subsData.subscription.field_doctores, userd.uid);
                        //console.log('is removed yet?');
                        this.loader.dismissLoader();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-usuarios',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\usuarios\usuarios.html"*/'<!--\n\n  Generated template for the UsuariosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<header></header>\n\n<ion-content padding class="drap_content">\n\n  <div class="modalPage_header">\n\n    <div class="modalPage_logo"><img src="assets/imgs/usuarios.svg"/></div>\n\n    <div class="modalPage_title">\n\n      <span class="spanBlock midFont"><b>Alta de Usuarios</b></span>\n\n      <span class="spanBlock midSubFont">Da de alta al personal que te ayuda a administrar y cobrar tus citas.</span>\n\n      <span class="spanBlock midSubFont">Drap te permite elegir entre dos opciones de usuarios:</span>\n\n      <span class="user_explanation_triple">\n\n         <span class="user_explanation_section"> Recepción,</span>\n\n         <span class="user_explanation_section"> Caja y </span>\n\n         <span class="user_explanation_section">  Recepción & Caja</span>\n\n        </span>\n\n    </div>\n\n    <div class="modalPage_btn_wrapper">\n\n      <button class="bgColorSecondary generalButton" (click)="openNuevousuario()">Agregar Nuevo</button>\n\n      <span class="">Usuarios restantes: {{this.subUsersLeft }}</span>\n\n    </div>\n\n  </div>\n\n  <div class="Citas_grid result_wrapper">\n\n      <div class="subusers_subscription_div midFont">\n\n        <p class="leyenda">Esta es la lista de usuarios que actualmente están dados de alta, recuerda que para compartir estos usuarios con otro doctor o agregar un usuario nuevo necesitas incluír el código que se muestra en la tabla. Compártelo con tus colegas para aprovechar DRAP al máximo. </p>\n\n      </div>\n\n    <table class="results_table">\n\n        <thead>\n\n            <tr>\n\n                <th>Usuario</th>\n\n                <th>Tipo de Usuario</th>\n\n                <th *ngIf="!this.subsData.isGroup">Codigo</th>\n\n                <th></th>\n\n             </tr>\n\n        </thead>\n\n        <tbody>\n\n            <tr *ngFor="let user of this.subuserData.subUsers">\n\n                <td>{{user.name}}</td>\n\n                <td class="fontHigh">{{this.userData.getTipoUsuarioString(user.field_tipo_de_usuario.und[0])}}</td>\n\n                <td class="fontHight" *ngIf="!this.subsData.isGroup"><input type="text" value="{{user.field_codigo}}" class="field left codigo" readonly></td>\n\n                <td class="toolCol">\n\n                  <img     *ngIf="this.permissions.checkUserPlanHolder()"  src="assets/imgs/editar.svg" class="icon_drapo" (click)="editUsuario(user)">\n\n                  <button  *ngIf="this.permissions.checkUserPlanHolder()"  (click)="removeUsuariopop(user)" class="bgColorPrimary generalButton tableButton">Remover</button>\n\n                  <!--<button  *ngIf="user.field_doctores.und.indexOf(this.userData.userData.uid) === -1"  (click)="agregarusuariopop(user)" class="bgColorPrimary generalButton tableButton">Agregar</button>-->\n\n                </td>\n\n             </tr>\n\n        </tbody>\n\n    </table>\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\usuarios\usuarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_drupal_user_manager_drupal_user_manager__["a" /* DrupalUserManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_subscription_data_subscription_data__["a" /* SubscriptionDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_subusers_data_subusers_data__["a" /* SubusersDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_subusers_manager_subusers_manager__["a" /* SubusersManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_permissions_permissions__["a" /* PermissionsProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_ws_messenger_ws_messenger__["a" /* WsMessengerProvider */]])
    ], UsuariosPage);
    return UsuariosPage;
}());

//# sourceMappingURL=usuarios.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
webpackJsonp([21],{

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(641);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loader_loader__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_doctores_data_doctores_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_citas_manager_citas_manager__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_doctores_manager_doctores_manager__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_subscription_manager_subscription_manager__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_servicios_manager_servicios_manager__ = __webpack_require__(61);
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










//import { ToastController } from 'ionic-angular';
//import { Debugger } from '../../providers/user-data/debugger';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, modalCtrl, userData, loader, alert, docData, citasManager, docMan, subscriptionManager, serviciosManager) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.userData = userData;
        this.loader = loader;
        this.alert = alert;
        this.docData = docData;
        this.citasManager = citasManager;
        this.docMan = docMan;
        this.subscriptionManager = subscriptionManager;
        this.serviciosManager = serviciosManager;
        this.showLoginForm = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.actionLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var token_data, login_observer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader.presentLoader('Entrando ...');
                        return [4 /*yield*/, this.userData.requestToken().toPromise()];
                    case 1:
                        token_data = _a.sent();
                        if (token_data)
                            this.userData.sessionData.token = token_data['token'];
                        login_observer = this.userData.login(this.username, this.password);
                        return [4 /*yield*/, login_observer.subscribe(function (val) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            //if logged in set session and userdata
                                            this.userData.setSessionData(val);
                                            return [4 /*yield*/, this.userData.loginSetData(val['user']['uid'])];
                                        case 1:
                                            _a.sent();
                                            /*await this.subscriptionManager.loadSubscription();
                                            await this.docMan.initDoctoresUids();
                                            await this.subscriptionManager.loadDoctorsSubscriptions();
                                            console.log('subscription initload is', this.subscriptionManager.subsData.subscription);
                                            console.log('docs before filter active',JSON.stringify(this.docMan.docData.doctoresIDs));
                                            this.docMan.filterActiveDoctors();
                                            console.log('docs after filter active',JSON.stringify(this.docMan.docData.doctoresIDs));
                                            await this.citasManager.requestCitas().toPromise();
                                            this.serviciosManager.loadServicios();
                                            console.log(this.citasManager.citasData.citas);
                                            console.log('docs end initload',JSON.stringify(this.docMan.docData.doctoresIDs));
                                            /*this.rootPage = 'HomePage';
                                            loading.dismiss();
                                            this.loaddate = new Date().getTime();*/
                                            location.reload();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (response) {
                                console.log('login error response', response);
                                _this.alert.presentAlert('Error', 'Usuario o contraseña incorrectos');
                                _this.loader.dismissLoader();
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.actionOpenRecover = function () {
        var Modal = this.modalCtrl.create("RecoverModalPage", undefined, { cssClass: "smallModal recoverModal" });
        //let Modal = this.modalCtrl.create(RecoverModalPage);
        Modal.present({});
        //console.log("open Recover");
    };
    LoginPage.prototype.openRegister = function () {
        var Modal = this.modalCtrl.create("RegisterModalPage", undefined, { cssClass: "bigModal" });
        Modal.present({});
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n  <div class="loginContent">\n\n    <span class="spanBlock titleFont titleFontSpan"><img class="main_logo" src="assets/imgs/logo-rojo-blanco.svg"/></span>\n\n<div class="login_chose" *ngIf="showLoginForm == false">\n\n    <button class="generalButton largeButton bgColorPrimary" (click)="showLoginForm=true" >Ingresa</button>\n\n    <button class="generalButton largeButton bgColorPrimary" (click)="openRegister()">Registro</button>\n\n</div>\n\n<div class="login_form" *ngIf="showLoginForm">\n\n    <ion-list>\n\n        <ion-item class="loginInput">\n\n          <ion-input placeholder="Nombre de Usuario" [(ngModel)]="username"></ion-input>\n\n        </ion-item>\n\n        <ion-item class="loginInput">\n\n            <ion-input type="password" placeholder="Contraseña" [(ngModel)]="password"></ion-input>\n\n          </ion-item>\n\n    </ion-list>   \n\n    <button class="generalButton largeButton bgColorPrimary" (click)="actionLogin()" >Log In</button>  \n\n    <span class="spanBlock spanLink midFont lightFont"  (click)="actionOpenRecover()" >¿Olvidaste tú contraseña?</span>\n\n    <span class="spanBlock spanLink midFont lightFont"  (click)="openRegister()" >¿No tienes una cuenta?</span>\n\n</div>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_citas_manager_citas_manager__["a" /* CitasManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_doctores_manager_doctores_manager__["a" /* DoctoresManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_subscription_manager_subscription_manager__["a" /* SubscriptionManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_servicios_manager_servicios_manager__["a" /* ServiciosManagerProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=21.js.map
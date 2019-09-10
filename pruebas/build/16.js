webpackJsonp([16],{

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoservicioModalPageModule", function() { return NuevoservicioModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuevoservicio_modal__ = __webpack_require__(643);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NuevoservicioModalPageModule = /** @class */ (function () {
    function NuevoservicioModalPageModule() {
    }
    NuevoservicioModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nuevoservicio_modal__["a" /* NuevoservicioModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__nuevoservicio_modal__["a" /* NuevoservicioModalPage */]),
            ],
        })
    ], NuevoservicioModalPageModule);
    return NuevoservicioModalPageModule;
}());

//# sourceMappingURL=nuevoservicio-modal.module.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoservicioModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data_debugger__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_servicios_manager_servicios_manager__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_tutorial_tutorial__ = __webpack_require__(166);
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
 * Generated class for the NuevoservicioModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NuevoservicioModalPage = /** @class */ (function () {
    function NuevoservicioModalPage(navCtrl, navParams, userData, loadingCtrl, toastCtrl, viewCtrl, servMan, loader, tutorial) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.servMan = servMan;
        this.loader = loader;
        this.tutorial = tutorial;
        this.isTutorial = false;
        this.newTutService = true;
        console.log('loadingservice', navParams.get('servicio'));
        var aux_service = navParams.get('servicio');
        __WEBPACK_IMPORTED_MODULE_3__providers_user_data_debugger__["a" /* Debugger */].log(["opening servicio to edit", aux_service]);
        if (aux_service) {
            this.isnew = false;
            this.newService = {
                Nid: aux_service.Nid,
                Uid: aux_service.Uid,
                type: "servicios",
                title: aux_service.title,
                costo: aux_service.costo,
                body: { und: [{ value: aux_service.cuerpo }] },
                field_costo_servicio: aux_service.field_costo_servicio,
                field_doctor_uid: { und: [{ value: aux_service.Uid }] }
            };
            //this.newService = aux_service;
        }
        else {
            this.isnew = true;
            this.resetNewService();
            this.newService.costo = null;
        }
        if (Number(this.newService.field_costo_servicio.und[0].value) === 0) {
            this.newService.field_costo_servicio.und[0].value = null;
        }
    }
    Object.defineProperty(NuevoservicioModalPage.prototype, "grouplabel", {
        get: function () {
            var ret = "";
            if (this.servMan.isgroup)
                ret = 'Grupal';
            return ret;
        },
        enumerable: true,
        configurable: true
    });
    NuevoservicioModalPage.prototype.resetNewService = function () {
        this.newService = {
            Nid: null,
            Uid: null,
            type: "servicios",
            title: "",
            costo: null,
            body: { und: [{ value: "" }] },
            field_costo_servicio: { und: [{ value: 0 }] },
            field_doctor_uid: { und: [{ value: 0 }] }
        };
    };
    NuevoservicioModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NuevoservicioModalPage');
        //this.resetNewService()
    };
    NuevoservicioModalPage.prototype.resetServicio = function () {
        this.tutorial.serviceCreated = false;
        this.resetNewService();
        this.newTutService = false;
    };
    NuevoservicioModalPage.prototype.basicValidation = function () {
        var ret = true;
        console.log('title is', this.newService.title, this.newService.title.length === 0);
        if (this.newService.title.length === 0)
            ret = false;
        if (this.newService.field_costo_servicio.und[0].value === null)
            ret = false;
        return ret;
    };
    NuevoservicioModalPage.prototype.createServiceTutorial = function () {
        return __awaiter(this, void 0, void 0, function () {
            var serv_res, update_res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.fixCostoOutput();
                        this.newTutService = false;
                        if (!this.basicValidation()) {
                            return [2 /*return*/, false];
                        }
                        this.loader.presentLoader('Creando Servicio ...');
                        this.newService.body.und[0].value = "automatic description";
                        this.newService.field_doctor_uid.und[0].value = this.userData.userData.uid;
                        console.log("creating a service ", this.newService);
                        return [4 /*yield*/, this.servMan.generateNewService(this.newService).toPromise()];
                    case 1:
                        serv_res = _a.sent();
                        return [4 /*yield*/, this.servMan.loadServicios()];
                    case 2:
                        update_res = _a.sent();
                        this.loader.dismissLoader();
                        this.tutorial.serviceCreated = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    NuevoservicioModalPage.prototype.createService = function () {
        return __awaiter(this, void 0, void 0, function () {
            var serv_res, update_res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.fixCostoOutput();
                        if (!this.basicValidation()) {
                            return [2 /*return*/, false];
                        }
                        this.loader.presentLoader('Creando Servicio ...');
                        this.newService.body.und[0].value = "automatic description";
                        this.newService.field_doctor_uid.und[0].value = this.userData.userData.uid;
                        console.log("creating a service ", this.newService);
                        return [4 /*yield*/, this.servMan.generateNewService(this.newService).toPromise()];
                    case 1:
                        serv_res = _a.sent();
                        console.log('res del servicio', serv_res);
                        if (this.servMan.isgroup) {
                            //this.subsMan.serv_res['nid'];
                            console.log('agregar al grupo we.');
                        }
                        return [4 /*yield*/, this.servMan.loadServicios()];
                    case 2:
                        update_res = _a.sent();
                        this.loader.dismissLoader();
                        this.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    NuevoservicioModalPage.prototype.updateService = function () {
        return __awaiter(this, void 0, void 0, function () {
            var serv_res, update_res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.fixCostoOutput();
                        this.loader.presentLoader('Guardando Servicio ...');
                        return [4 /*yield*/, this.servMan.updateService(this.newService).toPromise()];
                    case 1:
                        serv_res = _a.sent();
                        return [4 /*yield*/, this.servMan.loadServicios()];
                    case 2:
                        update_res = _a.sent();
                        this.loader.dismissLoader();
                        this.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    NuevoservicioModalPage.prototype.fixCostoOutput = function () {
        if (this.newService.field_costo_servicio.und[0].value === null) {
            this.newService.field_costo_servicio.und[0].value = 0;
        }
    };
    NuevoservicioModalPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 6000,
            position: 'top'
        });
        toast.present();
    };
    NuevoservicioModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NuevoservicioModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-nuevoservicio-modal',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\nuevoservicio-modal\nuevoservicio-modal.html"*/'<!--\n\n  Generated template for the NuevoservicioModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n\n\n    <div class="modal_closer" *ngIf="!this.tutorial.checkTutorialState()" (click)="this.dismiss();">Volver</div>\n\n    \n\n    <div class="modalPage_header" *ngIf="!this.tutorial.checkTutorialState()">\n\n        <div class="modalPage_logo"><img src="assets/imgs/servicios.svg"/></div>\n\n        <div class="modalPage_title">\n\n          <span class="spanBlock largeFont" *ngIf="this.isnew"><b>Nuevo Servicio {{grouplabel}}</b></span>\n\n          <span class="spanBlock largeFont" *ngIf="!this.isnew"><b>Editando {{this.newService.title}}</b></span>\n\n        </div>\n\n    </div>\n\n\n\n    <div class="modalPage_header justify_center" *ngIf="this.tutorial.checkTutorialState()" >\n\n        <div class="modal_justifytitle"><div class="modalPage_logo"><img src="assets/imgs/servicios.svg"/></div>\n\n        <span class=" largeFont" *ngIf="this.isnew"><b>Alta de servicio y costos</b></span></div>\n\n        <div class="modalPage_title">\n\n          <span class="spanBlock midSubFont">Para comenzar agrega un servicio.</span>\n\n          <span class="spanBlock midSubFont">Te recomendamos dar de alta desde el inicio todos los servicios que ofreces para que cobrar\n\n            tu consulta sea muy rápido y sencillo. Solo debes ingresar uno a uno el nombre y costo de\n\n            cada servicio.</span>\n\n        </div>\n\n    </div>\n\n    <!--<div class="centered_bold" *ngIf="this.tutorial.checkTutorialState() && newTutService">Para comenzar agrega un servicio:</div>-->\n\n    <div class="nuevoservicio_content modalContent" *ngIf="!this.tutorial.checkTutorialState()  || (this.tutorial.checkTutorialState() && !this.tutorial.serviceCreated)" >\n\n        <div class="ModalInput_input">\n\n            <b>Nombre</b>\n\n            <input [(ngModel)]="this.newService.title" placeholder="Ej. Consulta básica" type="text"/>\n\n        </div>\n\n        <div class="ModalInput_input">\n\n            <b>Costo</b>\n\n            <input [(ngModel)]="this.newService.field_costo_servicio.und[0].value" placeholder="$0000.00" type="number"/>\n\n        </div>\n\n    </div>\n\n\n\n    <div class="nuevoservicio_content modalContent" style="text-align: center;" *ngIf="this.tutorial.checkTutorialState() && this.tutorial.serviceCreated" >\n\n        <span class="spanBlock bigBoldFont">¡Felicidades!</span>\n\n        <span class="spanBlock midMainFont"> El servicio {{this.newService.title}} ha sido agregado ahora lo podrás seleccionar cada vez que mandes cobrar una consulta.</span>\n\n        <span class="spanBlock midSubFont"> Siempre que lo desees puedes modificar o agregar más servicios en la sección de Alta de\n\n            Servicios y Costos en el Menú.</span>\n\n        </div>\n\n        \n\n\n\n    <div class="midAlign">\n\n        <div class="register_button_section">\n\n                <button class="bgColorSecondary generalButton tutorialButton" *ngIf="this.tutorial.checkTutorialState() && this.tutorial.serviceCreated" (click)="resetServicio();">Agregar servicio</button>\n\n        <button class="bgColorSecondary generalButton tutorialButton" *ngIf="this.tutorial.checkTutorialState() && !this.tutorial.serviceCreated" (click)="createServiceTutorial();">Continuar</button>\n\n        <button class="bgColorSecondary generalButton tutorialButton" *ngIf="this.tutorial.checkTutorialState() && this.tutorial.serviceCreated" (click)=" this.tutorial.showUsuarioModal(); this.dismiss();">Continuar</button>\n\n        <button class="bgColorSecondary generalButton" *ngIf="!this.tutorial.checkTutorialState() && this.isnew" (click)="createService()">Agregar</button>\n\n        <button class="bgColorSecondary generalButton" *ngIf="!this.tutorial.checkTutorialState() && !this.isnew" (click)="updateService()">Actualizar</button>\n\n        </div>\n\n      </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\nuevoservicio-modal\nuevoservicio-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_servicios_manager_servicios_manager__["a" /* ServiciosManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_tutorial_tutorial__["a" /* TutorialProvider */]])
    ], NuevoservicioModalPage);
    return NuevoservicioModalPage;
}());

//# sourceMappingURL=nuevoservicio-modal.js.map

/***/ })

});
//# sourceMappingURL=16.js.map
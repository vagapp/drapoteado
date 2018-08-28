webpackJsonp([10],{

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoservicioModalPageModule", function() { return NuevoservicioModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuevoservicio_modal__ = __webpack_require__(379);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nuevoservicio_modal__["a" /* NuevoservicioModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nuevoservicio_modal__["a" /* NuevoservicioModalPage */]),
            ],
        })
    ], NuevoservicioModalPageModule);
    return NuevoservicioModalPageModule;
}());

//# sourceMappingURL=nuevoservicio-modal.module.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoservicioModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data_debugger__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_servicios_manager_servicios_manager__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__ = __webpack_require__(66);
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
    function NuevoservicioModalPage(navCtrl, navParams, userData, loadingCtrl, toastCtrl, viewCtrl, servMan, loader) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.servMan = servMan;
        this.loader = loader;
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
    }
    NuevoservicioModalPage.prototype.resetNewService = function () {
        this.newService = {
            Nid: null,
            Uid: null,
            type: "servicios",
            title: "",
            costo: 0,
            body: { und: [{ value: "" }] },
            field_costo_servicio: { und: [{ value: 0 }] },
            field_doctor_uid: { und: [{ value: 0 }] }
        };
    };
    NuevoservicioModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NuevoservicioModalPage');
        //this.resetNewService()
    };
    NuevoservicioModalPage.prototype.createService = function () {
        return __awaiter(this, void 0, void 0, function () {
            var serv_res, update_res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nuevoservicio-modal',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\nuevoservicio-modal\nuevoservicio-modal.html"*/'<!--\n\n  Generated template for the NuevoservicioModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n    <div class="modal_closer" (click)="this.dismiss();">Volver</div>\n\n    <div class="modalPage_header">\n\n        <div class="modalPage_logo"><img src="assets/imgs/servicios.svg"/></div>\n\n        <div class="modalPage_title">\n\n          <span class="spanBlock largeFont" *ngIf="this.isnew"><b>Nuevo Servicio</b></span>\n\n          <span class="spanBlock largeFont" *ngIf="!this.isnew"><b>editando {{this.newService.title}}</b></span>\n\n        </div>\n\n    </div>\n\n    <div class="nuevoservicio_content modalContent">\n\n        <div class="ModalInput_input">\n\n            <b>Nombre</b>\n\n            <input [(ngModel)]="this.newService.title" type="text"/>\n\n        </div>\n\n        <div class="ModalInput_input">\n\n            <b>Costo</b>\n\n            <input [(ngModel)]="this.newService.field_costo_servicio.und[0].value" type="number"/>\n\n        </div>\n\n    </div>\n\n    <div class="midAlign">\n\n        <div class="register_button_section">\n\n        <button class="bgColorSecondary generalButton" *ngIf="this.isnew" (click)="createService()">Agregar</button>\n\n        <button class="bgColorSecondary generalButton" *ngIf="!this.isnew" (click)="updateService()">Actualizar</button>\n\n        </div>\n\n      </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\nuevoservicio-modal\nuevoservicio-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_servicios_manager_servicios_manager__["a" /* ServiciosManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__["a" /* LoaderProvider */]])
    ], NuevoservicioModalPage);
    return NuevoservicioModalPage;
}());

//# sourceMappingURL=nuevoservicio-modal.js.map

/***/ })

});
//# sourceMappingURL=10.js.map
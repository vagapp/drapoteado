webpackJsonp([6],{

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosPageModule", function() { return ServiciosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ServiciosPageModule = /** @class */ (function () {
    function ServiciosPageModule() {
    }
    ServiciosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__servicios__["a" /* ServiciosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__servicios__["a" /* ServiciosPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ServiciosPageModule);
    return ServiciosPageModule;
}());

//# sourceMappingURL=servicios.module.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiciosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servicios_manager_servicios_manager__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loader_loader__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_citas_data_citas_data__ = __webpack_require__(22);
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







//import { servicios } from '../../providers/user-data/servicios';
/**
 * Generated class for the ServiciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiciosPage = /** @class */ (function () {
    //servicios:servicios[];
    function ServiciosPage(navCtrl, navParams, modalCtrl, userData, alertCtrl, toastCtrl, servicioMan, loader) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.userData = userData;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.servicioMan = servicioMan;
        this.loader = loader;
        this.showMis = true;
        this.showGrupales = true;
        //this.servicios = new Array();
    }
    ServiciosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
        console.log('lista de servicios es', this.servicioMan.servicios);
        this.cargarServicios();
    };
    ServiciosPage.prototype.ToggleView = function (val) {
        switch (val) {
            case 1:
                this.showMis = !this.showMis;
                break;
            case 2:
                this.showGrupales = !this.showGrupales;
                break;
        }
    };
    Object.defineProperty(ServiciosPage.prototype, "viewMisLabel", {
        get: function () { return this.showMis ? 'Ocultar' : 'Mostrar'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiciosPage.prototype, "viewGroupLabel", {
        get: function () { return this.showGrupales ? 'Ocultar' : 'Mostrar'; },
        enumerable: true,
        configurable: true
    });
    ServiciosPage.prototype.openNuevoservicio = function () {
        this.servicioMan.isgroup = false;
        this.openNuevo();
    };
    ServiciosPage.prototype.openNuevoservicioGrupal = function () {
        this.servicioMan.isgroup = true;
        this.openNuevo();
    };
    ServiciosPage.prototype.openNuevo = function () {
        var Modal = this.modalCtrl.create("NuevoservicioModalPage", undefined, { cssClass: "smallModal nuevoservicioModal" });
        Modal.present({});
    };
    ServiciosPage.prototype.editServicio = function (edit_servicio) {
        var Modal = this.modalCtrl.create("NuevoservicioModalPage", { servicio: edit_servicio.getData() }, { cssClass: "smallModal nuevoservicioModal" });
        Modal.present({});
    };
    ServiciosPage.prototype.cargarServicios = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ServiciosPage.prototype.deleteServicio = function (delete_servicio) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Eliminar',
            message: '¿Está seguro de que desea eliminar?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        //console.log('Buy clicked');
                        _this.servicioMan.deleteService(delete_servicio).subscribe(function (val) {
                            _this.servicioMan.removeServicioFromLists(delete_servicio);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ServiciosPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 6000,
            position: 'top'
        });
        toast.present();
    };
    ServiciosPage.prototype.moneyFormat = function (money) {
        return __WEBPACK_IMPORTED_MODULE_5__providers_citas_data_citas_data__["a" /* CitasDataProvider */].moneyFormat(money);
    };
    ServiciosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-servicios',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\servicios\servicios.html"*/'<!--\n\n  Generated template for the ServiciosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<header></header>\n\n<ion-content padding class="drap_content">\n\n  <div class="modalPage_header">\n\n    <div class="modalPage_logo"><img src="assets/imgs/servicios.svg"/></div>\n\n    <div class="modalPage_title">\n\n      <span class="spanBlock midFont"><b>Alta de Servicios y Costos</b></span>\n\n      <span class="spanBlock midSubFont">Administra, agrega o elimina los servicios que ofreces en tu consultorio. </span>\n\n    </div>\n\n    <div class="modalPage_btn_wrapper">\n\n      <button class="bgColorSecondary generalButton" (click)="openNuevoservicio()">Agregar Nuevo</button>\n\n      \n\n     \n\n    </div>\n\n  </div>\n\n  <div class="Citas_grid result_wrapper">\n\n    <table class="results_table">\n\n        <thead>\n\n            <tr>\n\n                <th>Servicio</th>\n\n                <th>Costo</th>\n\n                <th>  </th>\n\n             </tr>\n\n        </thead>\n\n        <tbody *ngIf="this.showMis">\n\n            <tr *ngFor="let servicio of this.servicioMan.servicios">\n\n                <td>{{servicio.title}}</td>\n\n                <td class="fontSecondary">{{moneyFormat(servicio.costo)}}</td>\n\n                <td class="toolCol">\n\n                  <img src="assets/imgs/editar.svg" class="icon_drapo" (click)="editServicio(servicio)"/>\n\n                  <button class="bgColorPrimary generalButton tableButton" (click)="deleteServicio(servicio)">Eliminar</button>\n\n                </td>\n\n             </tr>\n\n        </tbody>\n\n    </table>\n\n  </div>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\servicios\servicios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_servicios_manager_servicios_manager__["a" /* ServiciosManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loader_loader__["a" /* LoaderProvider */]])
    ], ServiciosPage);
    return ServiciosPage;
}());

//# sourceMappingURL=servicios.js.map

/***/ })

});
//# sourceMappingURL=6.js.map
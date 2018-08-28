webpackJsonp([8],{

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgresocitaModalPageModule", function() { return ProgresocitaModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progresocita_modal__ = __webpack_require__(387);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProgresocitaModalPageModule = /** @class */ (function () {
    function ProgresocitaModalPageModule() {
    }
    ProgresocitaModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__progresocita_modal__["a" /* ProgresocitaModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__progresocita_modal__["a" /* ProgresocitaModalPage */]),
            ],
        })
    ], ProgresocitaModalPageModule);
    return ProgresocitaModalPageModule;
}());

//# sourceMappingURL=progresocita-modal.module.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgresocitaModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_citas_manager_citas_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notifications_manager_notifications_manager__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_citas_data_citas_data__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_citas_presentator_citas_presentator__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_cita_progress_controller_cita_progress_controller__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_permissions_permissions__ = __webpack_require__(67);
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











var ProgresocitaModalPage = /** @class */ (function () {
    function ProgresocitaModalPage(navCtrl, navParams, userData, loader, viewCtrl, alert, citasData, citasMan, notiMan, citasPresentator, progressController, permissions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.loader = loader;
        this.viewCtrl = viewCtrl;
        this.alert = alert;
        this.citasData = citasData;
        this.citasMan = citasMan;
        this.notiMan = notiMan;
        this.citasPresentator = citasPresentator;
        this.progressController = progressController;
        this.permissions = permissions;
    }
    ProgresocitaModalPage.prototype.ionViewDidLoad = function () {
        this.progressController.evalServicios();
    };
    ProgresocitaModalPage.prototype.ionViewWillLeave = function () {
        this.progressController.stopInterval();
    };
    ProgresocitaModalPage.prototype.finalizarPop = function () {
        var _this = this;
        var exmsg = '';
        if (Number(this.progressController.activeCita.addedServices.length) === 0) {
            exmsg = 'Aun no se ha agregado ningún servicio a esta cita';
        }
        this.alert.chooseAlert('Finalizar', "Est\u00E1 seguro de que desea Finalizar la consulta? " + exmsg, function () { _this.finalizarActualCita(); }, function () { });
    };
    ProgresocitaModalPage.prototype.finalizarActualCita = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.progressController.finalizarCitaActiva();
                        return [4 /*yield*/, this.citasPresentator.updateStateRequest(this.progressController.activeCita, __WEBPACK_IMPORTED_MODULE_7__providers_citas_data_citas_data__["a" /* CitasDataProvider */].STATE_COBRO)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgresocitaModalPage.prototype.pagadaPop = function () {
        var _this = this;
        var title = 'Pagada';
        var msg = '¿Está seguro de que desea marcar esta cita como pagada?';
        if (this.progressController.CantidadRestante > 0) {
            title = 'Cuidado';
            msg = '¿Está seguro de que desea marcar esta cita como pagada con la cantidad insuficiente?';
        }
        this.alert.chooseAlert(title, msg, function () { _this.pagarActualCita(); }, function () { });
    };
    ProgresocitaModalPage.prototype.pagarActualCita = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.progressController.pagarCitaActiva();
                        return [4 /*yield*/, this.citasPresentator.updateStateRequest(this.progressController.activeCita, __WEBPACK_IMPORTED_MODULE_7__providers_citas_data_citas_data__["a" /* CitasDataProvider */].STATE_FINALIZADA)];
                    case 1:
                        _a.sent();
                        this.close();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgresocitaModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ProgresocitaModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-progresocita-modal',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\progresocita-modal\progresocita-modal.html"*/'<!--\n\n  Generated template for the ProgresocitaModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n        <div class="modal_closer" (click)="this.close();">Volver</div>\n\n    <div class="modalPage_header">\n\n        <div class="modalPage_logo"><img src="assets/imgs/citas.svg"/></div>\n\n        <div class="modalPage_title">\n\n          <span class="spanBlock midFont"><b>Progreso de la Cita</b></span>\n\n        </div>\n\n        <div class="dateright floatRight">\n\n           <span class="spanBlock"><span class=" fontSecondary midFont">{{progressController.activeCita.getDisplayableDates().date}}</span><span class="fontHigh midFont">{{progressController.activeCita.getDisplayableDates().time}}</span></span>\n\n          </div>\n\n      </div>\n\n      <div class="CitaDetail_Content">\n\n        <div class="CitaDetail_header">\n\n            <table class="results_table">\n\n                <thead>\n\n                    <tr>\n\n                        <th>no</th>\n\n                        <th>Paciente</th>\n\n                        <th *ngIf="!(permissions.checkUserPermission([userData.TIPO_DOCTOR]))">Doctor</th>\n\n                        <th> Tiempo Transcurrido:  <span class="fontHigh midFont">{{progressController.activeCita.duracionText }} </span></th>\n\n                     </tr>\n\n                </thead>\n\n                <tbody>\n\n                    <tr>\n\n                        <td>01</td>\n\n                        <td>{{progressController.activeCita.data.field_paciente.und[0].value}}</td>\n\n                        <td *ngIf="!(permissions.checkUserPermission([userData.TIPO_DOCTOR]))">{{progressController.activeCita.data.doctor_name}}/ {{progressController.activeCita.data.doctor_alias}}</td>\n\n                        <td> </td>\n\n                    </tr>\n\n                </tbody>\n\n            </table>\n\n        </div>\n\n        <div class="CitaDetailSections">\n\n          <div class="CitaDetailSection borderRight">\n\n            <b class="midFont">Servicios</b>\n\n            <div class="CitaDetail_services" *ngIf="progressController.activeCita.checkState(citasData.STATE_ACTIVA)">\n\n                <div class="progreso_service" *ngFor="let added of progressController.activeCita.addedServices">\n\n                <b>{{added.Nid}}</b>\n\n                {{added.title}} - <span class="fontSecondary">${{added.costo}}</span> <span (click)="progressController.removeService(added);" class="removeServicebtn" >x</span>\n\n              </div>\n\n              </div>\n\n            \n\n              <div class="CitaDetail_services" *ngIf="!progressController.activeCita.checkState(userData.STATE_ACTIVA)">\n\n                    <div class="progreso_service" *ngFor="let added of progressController.activeCita.reporteServicios">\n\n                    <b>{{added.Nid}}</b>\n\n                    {{added.title}} - <span class="fontSecondary">${{added.costo}}</span> \n\n                  </div>\n\n                  </div>\n\n                  <div class="CitaDetail_services" *ngIf="progressController.activeCita.checkState(citasData.STATE_ACTIVA) && permissions.checkUserPermission([userData.TIPO_DOCTOR])">\n\n                    <div class="registerInput">\n\n                      <select [(ngModel)]="progressController.selectedService"  name="selectedService" class="input_select input" >\n\n                          <option selected disabled value="0">Select</option>\n\n                          <option *ngFor="let service of progressController.available_services" value="{{service.Nid}}">{{service.title}}</option>\n\n                        </select>\n\n                      </div>\n\n                      <div class="midAlign">\n\n                            <div class="register_button_section">\n\n                            <button (click)="progressController.addService()"  class="bgColorSecondary generalButton">Agregar</button>\n\n                            </div>\n\n                          </div>\n\n                  </div>\n\n\n\n            </div>\n\n            <div class="CitaDetailSection midFont">\n\n              <b>Costo de la Cita</b>\n\n              <span *ngIf="progressController.activeCita.checkState(this.citasData.STATE_ACTIVA)" class="floatRight"><span class="fontSecondary">${{progressController.costoCita}}</span> <ion-icon name="menu"></ion-icon> </span>\n\n              <span *ngIf="progressController.activeCita.checkState(this.citasData.STATE_COBRO)" class="floatRight"><span class="fontSecondary">${{progressController.activeCita.costo}}</span> <ion-icon name="menu"></ion-icon> </span>\n\n              costo\n\n              <div *ngIf="progressController.activeCita.checkState(citasData.STATE_COBRO) && permissions.checkUserPermission([userData.TIPO_DOCTOR, userData.TIPO_CAJA])">\n\n              <b>Formas de Pago</b>\n\n              <div class="ModalInput_input">\n\n                    Efectivo\n\n                    <input [(ngModel)]="progressController.cobroEfectivo" type="text"/>\n\n                </div>\n\n                <div class="ModalInput_input">\n\n                    Tarjeta\n\n                    <input [(ngModel)]="progressController.cobroTarjeta" type="text"/>\n\n                </div>\n\n                <div class="ModalInput_input"> \n\n                    Cheque\n\n                    <input [(ngModel)]="progressController.cobroCheque" type="text"/>\n\n                </div>\n\n                <span *ngIf="progressController.CantidadRestante > 0" class="spanBlock midAlign fontPrimary">\n\n                    Faltan ${{progressController.CantidadRestante}}\n\n                </span>\n\n                <span *ngIf="progressController.CantidadRestante < 0" class="spanBlock midAlign fontHigh">\n\n                        Sobrar ${{(progressController.CantidadRestante * -1)}}\n\n                    </span>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class="midAlign">\n\n            <div class="register_button_section">\n\n            <button  *ngIf="progressController.activeCita.checkState(citasData.STATE_ACTIVA)"  (click)="finalizarPop()" class="bgColorPrimary generalButton">Finalizar Cita</button>\n\n            <button  *ngIf="progressController.activeCita.checkState(citasData.STATE_COBRO)" (click)="pagadaPop()" class="bgColorPrimary generalButton">Marcar como pagada</button>\n\n            </div>\n\n          </div>\n\n      </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\progresocita-modal\progresocita-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_citas_data_citas_data__["a" /* CitasDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_citas_manager_citas_manager__["a" /* CitasManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_notifications_manager_notifications_manager__["a" /* NotificationsManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_citas_presentator_citas_presentator__["a" /* CitasPresentatorProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_cita_progress_controller_cita_progress_controller__["a" /* CitaProgressControllerProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_permissions_permissions__["a" /* PermissionsProvider */]])
    ], ProgresocitaModalPage);
    return ProgresocitaModalPage;
}());

//# sourceMappingURL=progresocita-modal.js.map

/***/ })

});
//# sourceMappingURL=8.js.map
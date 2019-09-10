webpackJsonp([14],{

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgresocitaModalPageModule", function() { return ProgresocitaModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progresocita_modal__ = __webpack_require__(659);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__progresocita_modal__["a" /* ProgresocitaModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__progresocita_modal__["a" /* ProgresocitaModalPage */]),
            ],
        })
    ], ProgresocitaModalPageModule);
    return ProgresocitaModalPageModule;
}());

//# sourceMappingURL=progresocita-modal.module.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgresocitaModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_citas_manager_citas_manager__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notifications_manager_notifications_manager__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_citas_data_citas_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_citas_presentator_citas_presentator__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_cita_progress_controller_cita_progress_controller__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_permissions_permissions__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_date_date__ = __webpack_require__(41);
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
    function ProgresocitaModalPage(navCtrl, navParams, userData, loader, viewCtrl, alert, citasData, citasMan, notiMan, citasPresentator, progressController, permissions, datep) {
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
        this.datep = datep;
    }
    Object.defineProperty(ProgresocitaModalPage.prototype, "SERVICIO_CORTESIA_NID", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_7__providers_citas_data_citas_data__["a" /* CitasDataProvider */].SERVICIO_CORTESIA_NID;
        },
        enumerable: true,
        configurable: true
    });
    ProgresocitaModalPage.prototype.ionViewDidLoad = function () {
        console.log('Cita activa ionViewDidLoad', this.progressController.activeCita);
    };
    ProgresocitaModalPage.prototype.ionViewWillLeave = function () {
        this.progressController.stopInterval();
    };
    ProgresocitaModalPage.prototype.finalizarPop = function () {
        var _this = this;
        this.finalizarActualCita().then(function () { _this.close(); });
        /*let exmsg = '';
        if(Number(this.progressController.activeCita.addedServices.length) === 0){ exmsg = 'Aun no se ha agregado ningún servicio a esta cita';}
        this.alert.chooseAlert(
          'Finalizar',
          `Está seguro de que desea Finalizar la consulta? ${exmsg}`,
          ()=>{ this.finalizarActualCita(); },
          ()=>{}
        );*/
    };
    ProgresocitaModalPage.prototype.updateCheckedOptions = function (Nid, event) {
        console.log('updateCheckedOptions', Nid, event.checked);
        this.progressController.updateCheckedOption(Nid, event.checked);
        console.log('finish');
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
        /*if( Number(this.progressController.CantidadRestante) === (Number(this.progressController.activeCita.costo))){
          this.alert.presentAlert('Error','Introducir monto a pagar');
          return false;
        }*/
        console.log('pagadaPop start servicesCompare', JSON.stringify(this.progressController.servicesCompare));
        //this.progressController.checkCobroStates('pp1');
        if (!this.validarPagarNOEMPTY()) {
            this.alert.presentAlert('Error', 'Introducir monto a pagar.');
            return false;
        }
        //this.progressController.checkCobroStates('pp2');
        if (!this.validarPagarNONEG() || !this.validarNotNaN()) {
            this.alert.presentAlert('Error', 'No se aceptan valores negativos');
            return false;
        }
        //this.progressController.checkCobroStates('pp3');
        console.log('cantidad restante es', this.progressController.CantidadRestante);
        if (Number(this.progressController.CantidadRestante) < 0) {
            this.alert.presentAlert('Error', 'Esta introduciendo un monto mayor al costo de la cita.');
            return false;
        }
        //this.progressController.checkCobroStates('pp4');
        if (this.progressController.factura_cantidad > this.progressController.activeCita.restantePagos) {
            this.alert.presentAlert('Error', 'El monto facturado no puede exceder el total de la consulta');
            return false;
        }
        // this.progressController.checkCobroStates('pp5');
        /* let title = 'Pagada';
         let msg = '¿Está seguro de que desea marcar esta cita como pagada?';
         
         if(this.progressController.CantidadRestante > 0){
           title = 'Cuidado';
           msg = '¿Está seguro de que desea marcar esta cita como pagada con la cantidad insuficiente?';
           this.alert.chooseAlert(
             title,
             msg,
             ()=>{ this.pagarActualCita() },
             ()=>{}
           );
         }else{
           this.pagarActualCita();
         }*/
        console.log('pagadaPop end servicesCompare', JSON.stringify(this.progressController.servicesCompare));
        this.pagarActualCita();
    };
    ProgresocitaModalPage.prototype.pagarActualCita = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('pagarActualCita start servicesCompare', JSON.stringify(this.progressController.servicesCompare));
                        this.progressController.pagarCitaActiva();
                        console.log('pagarActualCita', this.progressController.activeCita);
                        return [4 /*yield*/, this.citasPresentator.updateStateRequest(this.progressController.activeCita, __WEBPACK_IMPORTED_MODULE_7__providers_citas_data_citas_data__["a" /* CitasDataProvider */].STATE_FINALIZADA)];
                    case 1:
                        _a.sent();
                        console.log('pagarActualCita end servicesCompare', JSON.stringify(this.progressController.servicesCompare));
                        this.close();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgresocitaModalPage.prototype.getDateString = function (datenumber) {
        var aux_dates = __WEBPACK_IMPORTED_MODULE_11__providers_date_date__["a" /* DateProvider */].getDisplayableDates(new Date(Number(datenumber)));
        //console.log(aux_dates);
        return aux_dates.date + ' ' + aux_dates.time;
    };
    //esta validacion revisa que si se meta algo en los campos de cobro caundo se paga la cita. si no se pone nada de nada te avisa que no le metiste nada woe que malo eres
    ProgresocitaModalPage.prototype.validarPagarNOEMPTY = function () {
        var ret = true;
        console.log('validarPagar ---------');
        console.log(this.progressController.cobroEfectivo, this.progressController.cobroEfectivo === null);
        console.log(this.progressController.cobroTarjeta, this.progressController.cobroTarjeta === null);
        console.log(this.progressController.cobroCheque, this.progressController.cobroCheque === null);
        if (this.progressController.cobroEfectivo === null && this.progressController.cobroTarjeta === null && this.progressController.cobroCheque === null) {
            console.log('nopusonada');
            ret = false;
        }
        return ret;
    };
    //esta validacion revisa que no se puedan meter numeros negativos en el cobro.
    ProgresocitaModalPage.prototype.validarPagarNONEG = function () {
        var ret = true;
        console.log('validarPagarNONEG ---------');
        console.log(this.progressController.cobroEfectivo, Number(this.progressController.cobroEfectivo));
        console.log(this.progressController.cobroTarjeta, Number(this.progressController.cobroTarjeta));
        console.log(this.progressController.cobroCheque, Number(this.progressController.cobroCheque));
        if (Number(this.progressController.cobroEfectivo) < 0 || Number(this.progressController.cobroTarjeta) < 0 || Number(this.progressController.cobroCheque) < 0) {
            ret = false;
        }
        return ret;
    };
    ProgresocitaModalPage.prototype.validarNotNaN = function () {
        var ret = true;
        console.log('validarNotNaN ---------');
        console.log(this.progressController.cobroEfectivo, Number(this.progressController.cobroEfectivo));
        console.log(this.progressController.cobroTarjeta, Number(this.progressController.cobroTarjeta));
        console.log(this.progressController.cobroCheque, Number(this.progressController.cobroCheque));
        if (isNaN(this.progressController.cobroEfectivo) || isNaN(this.progressController.cobroTarjeta) || isNaN(this.progressController.cobroCheque)) {
            ret = false;
        }
        return ret;
    };
    ProgresocitaModalPage.prototype.allsaveActualCita = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('allsaveActualCita');
                        this.progressController.updateCitaActiva();
                        //this.progressController.guardarEdiciones();
                        return [4 /*yield*/, this.citasPresentator.updateStateRequest(this.progressController.activeCita, __WEBPACK_IMPORTED_MODULE_7__providers_citas_data_citas_data__["a" /* CitasDataProvider */].STATE_FINALIZADA)];
                    case 1:
                        //this.progressController.guardarEdiciones();
                        _a.sent();
                        this.close();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgresocitaModalPage.prototype.guardarEdiciones = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('guardarEdiciones');
                        this.progressController.updateCitaActiva();
                        console.log('check cita before sending', JSON.stringify(this.progressController.activeCita.data.field_ediciones_json), this.progressController.activeCita.data.aux_servicios_json);
                        return [4 /*yield*/, this.citasPresentator.updateStateRequest(this.progressController.activeCita, this.progressController.activeCita.stateNumber)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgresocitaModalPage.prototype.moneyFormat = function (money) {
        return __WEBPACK_IMPORTED_MODULE_7__providers_citas_data_citas_data__["a" /* CitasDataProvider */].moneyFormat(money);
    };
    ProgresocitaModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ProgresocitaModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-progresocita-modal',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\progresocita-modal\progresocita-modal.html"*/'<!--\n\n  Generated template for the ProgresocitaModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n        <div class="modal_closer" (click)="this.close();">Volver</div>\n\n    <div class="modalPage_header">\n\n        <div class="modalPage_logo"><img src="assets/imgs/citas.svg"/></div>\n\n        <div class="modalPage_title">\n\n          <span class="spanBlock midFont"><b>Progreso de la Cita</b></span>\n\n        </div>\n\n        <div class="dateright floatRight">\n\n           <span class="spanBlock"></span>\n\n          </div>\n\n      </div>\n\n      <div class="CitaDetail_Content">\n\n        <div class="CitaDetail_header">\n\n            <table class="results_table">\n\n                <thead>\n\n                    <tr>\n\n                        <!--<th>no</th>-->\n\n                        <th>Paciente</th>\n\n                        <th *ngIf="!(permissions.checkUserPermission([userData.TIPO_DOCTOR]))">Doctor</th>\n\n                        <th> Tiempo Transcurrido:  <span class="fontHigh midFont">{{progressController.activeCita.duracionText }} </span></th>\n\n                        <th> <span class=" fontHigh midFont">{{progressController.activeCita.getDisplayableDates().date}}</span> - <span class="fontHigh midFont">{{progressController.activeCita.getDisplayableDates().time}}</span> </th>\n\n                     </tr>\n\n                </thead>\n\n                <tbody>\n\n                    <tr>\n\n                        <!--<td>01</td>-->\n\n                        <td> <!--<div class="progress_input"> <b>Nombre</b><span class="input_left_emulate">{{progressController.activeCita.data.field_paciente.und[0].value}}</span></div>-->\n\n                            <div class="progress_input">\n\n                                    <b>Nombre</b>\n\n                                    <input [(ngModel)]="progressController.activeCita.data.field_paciente.und[0].value" name="field_paciente" type="text"/>\n\n                                </div>\n\n                            <div class="progress_input">\n\n                                <b>Email</b>\n\n                                <input [(ngModel)]="progressController.activeCita.data.field_email.und[0].email"  name="field_email"  type="text"/>\n\n                            </div>\n\n                            <div class="progress_input">\n\n                                <b>Télefono</b>\n\n                                <input [(ngModel)]="progressController.activeCita.data.field_telefono.und[0].value" name="field_telefono" type="number"/>\n\n                            </div>\n\n                        </td>\n\n                        <td *ngIf="!(permissions.checkUserPermission([userData.TIPO_DOCTOR]))">{{progressController.activeCita.data.doctor_name}}</td>\n\n                        <td> </td>\n\n                    </tr>\n\n                </tbody>\n\n            </table>\n\n        </div>\n\n        <div class="CitaDetailSections">\n\n          <div class="CitaDetailSection borderRight">\n\n            <b class="midFont">Servicios</b>\n\n            <!--<div class="CitaDetail_services" *ngIf="progressController.activeCita.checkState(citasData.STATE_ACTIVA) || progressController.activeCita.checkState(citasData.STATE_FINALIZADA) || (progressController.activeCita.checkState(citasData.STATE_COBRO) && this.permissions.checkUserPermission([userData.TIPO_DOCTOR]))">\n\n                <div class="progreso_service" *ngFor="let added of progressController.activeCita.addedServices">\n\n               \n\n                {{added.title}} - <span class="fontSecondary">${{added.costo}}</span> <span (click)="progressController.removeService(added);" class="removeServicebtn" >x</span>\n\n              </div>\n\n              </div>-->\n\n            \n\n              <div class="CitaDetail_services" *ngIf="! (progressController.activeCita.checkState(citasData.STATE_ACTIVA) || progressController.activeCita.checkState(citasData.STATE_FINALIZADA) || ( (progressController.activeCita.checkState(citasData.STATE_COBRO) || progressController.activeCita.checkState(citasData.STATE_ADEUDO)) && this.permissions.checkUserPermission([userData.TIPO_DOCTOR]))) ">\n\n                    <div class="progreso_service" *ngFor="let added of progressController.activeCita.reporteServicios">\n\n                    <!--<b>{{added.Nid}}</b>-->\n\n                    {{added.title}} - <span class="fontSecondary">{{moneyFormat(added.costo)}}</span> \n\n                  </div>\n\n                  </div>\n\n                  <div class="CitaDetail_services" *ngIf="\n\n                  progressController.activeCita.checkState(citasData.STATE_ACTIVA) \n\n                  || \n\n                  ( \n\n                      ( \n\n                          progressController.activeCita.checkState(citasData.STATE_FINALIZADA) \n\n                      || (progressController.activeCita.checkState(citasData.STATE_COBRO) || progressController.activeCita.checkState(citasData.STATE_ADEUDO) )\n\n                      ) \n\n                      && permissions.checkUserPermission([userData.TIPO_DOCTOR]) \n\n                      ) ">\n\n                    <div class="registerInput">\n\n                      <!--<select [(ngModel)]="progressController.selectedService"  name="selectedService" class="input_select input" >\n\n                          <option selected disabled value="0">Select</option>\n\n                          <option value="-1">cortesía</option>\n\n                          <option *ngFor="let service of progressController.available_services" value="{{service.Nid}}">{{service.title}}</option>\n\n                        </select>-->\n\n                        <!--<span class="checkbox_wrapper_progreso spanBlock"><ion-checkbox (ionChange)="updateCheckedOptions(SERVICIO_CORTESIA_NID,$event)" [checked]="this.progressController.checkChecked(SERVICIO_CORTESIA_NID)"></ion-checkbox> Cortesía- <span class="fontSecondary">$0</span> </span>-->\n\n                        <span class="checkbox_wrapper_progreso spanBlock" *ngFor="let service of progressController.activeCitaDoc.servicios" [class.cortesia_checkbox]="service.isCortesia" ><ion-checkbox  (ionChange)="updateCheckedOptions(service.Nid,$event)"  [disabled]="service.isCortesia" [checked]="this.progressController.checkChecked(service.Nid)"></ion-checkbox> {{service.title}}- <span class="fontSecondary">{{moneyFormat(service.costo)}}</span> </span>\n\n                      </div>\n\n                      <!--<div class="midAlign">\n\n                            <div class="register_button_section">\n\n                            <button (click)="progressController.addService()"  class="bgColorSecondary generalButton">Agregar</button>\n\n                            </div>\n\n                          </div>-->\n\n                  </div>\n\n\n\n            </div>\n\n            <div class="CitaDetailSection midFont">\n\n                <div class="costo-de-la-cita"><b>Costo de la Cita</b>\n\n                    <span *ngIf="progressController.activeCita.checkState(this.citasData.STATE_ACTIVA) || progressController.activeCita.checkState(this.citasData.STATE_FINALIZADA)" class="floatRight"><span class="fontPrimary">{{moneyFormat(this.progressController.costoCita)}}</span> </span>\n\n                    <span *ngIf="progressController.activeCita.checkState(this.citasData.STATE_COBRO) || progressController.activeCita.checkState(this.citasData.STATE_ADEUDO)" class="floatRight"><span class="fontPrimary">{{moneyFormat(progressController.activeCita.costo)}}</span>  </span>\n\n                    <div class="smlabel">Pagos anteriores</div>\n\n                    <div class="pagos_anteriores" *ngIf="progressController.activeCita.checkState(this.citasData.STATE_COBRO) || progressController.activeCita.checkState(this.citasData.STATE_ADEUDO) || progressController.activeCita.checkState(this.citasData.STATE_FINALIZADA)">\n\n                        <div class="pagodetail" *ngFor="let pago of progressController.activeCita.PagosonShow">\n\n                                <span class="res fontHigh">{{this.getDateString(pago.fec)}}</span>\n\n                            <span class="res fontSecondary">{{moneyFormat(pago.total)}}</span>\n\n                           \n\n                        </div>\n\n                        <div class="pago_restante" *ngIf="progressController.activeCita.checkState(this.citasData.STATE_COBRO) || progressController.activeCita.checkState(this.citasData.STATE_ADEUDO)"> <b>Restante</b><span class="res fontPrimary floatRight">{{moneyFormat(progressController.activeCita.restantePagos)}}</span></div>\n\n                    </div>\n\n                </div>\n\n                <!--<div class="formas-de-pago" *ngIf="((progressController.activeCita.checkState(citasData.STATE_COBRO)|| progressController.activeCita.checkState(this.citasData.STATE_ADEUDO)) && permissions.checkUserPermission([userData.TIPO_DOCTOR, userData.TIPO_CAJA,  userData.TIPO_CAJAYRECEPCION])) || (progressController.activeCita.checkState(this.citasData.STATE_FINALIZADA) && permissions.checkUserPermission([userData.TIPO_DOCTOR]))">-->\n\n                <div class="formas-de-pago" *ngIf="((progressController.activeCita.checkState(citasData.STATE_COBRO)|| progressController.activeCita.checkState(this.citasData.STATE_ADEUDO)) && permissions.checkUserPermission([userData.TIPO_DOCTOR, userData.TIPO_CAJA,  userData.TIPO_CAJAYRECEPCION])) ">\n\n                    <b>Formas de Pago</b>\n\n                <div class="pagos-modal ModalInput_input">\n\n                    Efectivo\n\n                    <input [(ngModel)]="progressController.cobroEfectivo" type="number"/>\n\n                </div>\n\n                <div class="ModalInput_input">\n\n                    Tarjeta\n\n                    <input [(ngModel)]="progressController.cobroTarjeta" type="number" />\n\n                </div>\n\n                <div class="ModalInput_input"> \n\n                    Cheque\n\n                    <input [(ngModel)]="progressController.cobroCheque"  type="number"/>\n\n                </div>\n\n                <span *ngIf="progressController.CantidadRestante > 0" class="spanBlock midAlign fontPrimary">\n\n                    Faltan {{moneyFormat(progressController.CantidadRestante)}}\n\n                </span>\n\n                <span *ngIf="progressController.CantidadRestante < 0" class="spanBlock midAlign fontHigh">\n\n                        Sobran {{moneyFormat((progressController.CantidadRestante * -1))}}\n\n                    </span>\n\n                    <hr>\n\n                    <div class="ModalInput_input" >\n\n                        <b>¿Requiere Factura?</b>\n\n                        <select [(ngModel)]="progressController.factura"  name="field_cita_doctor" class="input_select input">\n\n                            <option  value="1" >Si</option>\n\n                            <option  selected value="0" >No</option>\n\n                          </select>\n\n                    </div>\n\n                    <div class="ModalInput_input" *ngIf="progressController.factura"> \n\n                        Monto de la factura\n\n                        <input [(ngModel)]="progressController.factura_cantidad" type="text"/>\n\n                    </div>\n\n                    \n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class="midAlign">\n\n            <div class="register_button_section">\n\n            <button  *ngIf="progressController.activeCita.checkState(citasData.STATE_ACTIVA)"  (click)="finalizarPop()" class="bgColorPrimary generalButton">Finalizar Cita</button>\n\n            <button  *ngIf="progressController.activeCita.checkState(citasData.STATE_COBRO) || progressController.activeCita.checkState(citasData.STATE_ADEUDO)" (click)="pagadaPop()" class="bgColorPrimary generalButton">Pagar</button>\n\n            <button  *ngIf="(progressController.activeCita.checkState(citasData.STATE_COBRO) || progressController.activeCita.checkState(citasData.STATE_ADEUDO)) && this.permissions.checkUserPermission([userData.TIPO_DOCTOR])" (click)="guardarEdiciones()" class="bgColorPrimary generalButton">Guardar Cambios</button>\n\n            <button  *ngIf="progressController.activeCita.checkState(citasData.STATE_FINALIZADA)" (click)="allsaveActualCita()" class="bgColorPrimary generalButton">Guardar</button>\n\n            </div>\n\n          </div>\n\n      </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\progresocita-modal\progresocita-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_citas_data_citas_data__["a" /* CitasDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_citas_manager_citas_manager__["a" /* CitasManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_notifications_manager_notifications_manager__["a" /* NotificationsManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_citas_presentator_citas_presentator__["a" /* CitasPresentatorProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_cita_progress_controller_cita_progress_controller__["a" /* CitaProgressControllerProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_permissions_permissions__["a" /* PermissionsProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_date_date__["a" /* DateProvider */]])
    ], ProgresocitaModalPage);
    return ProgresocitaModalPage;
}());

//# sourceMappingURL=progresocita-modal.js.map

/***/ })

});
//# sourceMappingURL=14.js.map
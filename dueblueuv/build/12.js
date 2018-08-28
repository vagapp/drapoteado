webpackJsonp([12],{

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevacitaModalPageModule", function() { return NuevacitaModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuevacita_modal__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NuevacitaModalPageModule = /** @class */ (function () {
    function NuevacitaModalPageModule() {
    }
    NuevacitaModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nuevacita_modal__["a" /* NuevacitaModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nuevacita_modal__["a" /* NuevacitaModalPage */]),
            ],
        })
    ], NuevacitaModalPageModule);
    return NuevacitaModalPageModule;
}());

//# sourceMappingURL=nuevacita-modal.module.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevacitaModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data_citas__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data_debugger__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_citas_manager_citas_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notifications_manager_notifications_manager__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loader_loader__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_ws_messenger_ws_messenger__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_doctores_data_doctores_data__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_permissions_permissions__ = __webpack_require__(67);
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
 * Generated class for the NuevacitaModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NuevacitaModalPage = /** @class */ (function () {
    function NuevacitaModalPage(navCtrl, navParams, userData, viewCtrl, citasMan, notiMan, loader, alert, wsMessenger, docData, permissions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.viewCtrl = viewCtrl;
        this.citasMan = citasMan;
        this.notiMan = notiMan;
        this.loader = loader;
        this.alert = alert;
        this.wsMessenger = wsMessenger;
        this.docData = docData;
        this.permissions = permissions;
        this.cita = null;
        this.isnew = true;
        this.selectedDate = null;
        console.log('GETTING CITA', navParams.get('cita'));
        var aux_node = navParams.get('cita');
        if (aux_node) {
            this.cita = aux_node;
            __WEBPACK_IMPORTED_MODULE_4__providers_user_data_debugger__["a" /* Debugger */].log(['cita en modal es', this.cita]);
            this.isnew = false;
        }
        else {
            this.isnew = true;
            this.resetNewCita();
            this.selectedDate = __WEBPACK_IMPORTED_MODULE_3__providers_user_data_citas__["a" /* Citas */].getLocalDateIso(new Date()); //new Date().toISOString();
        }
    }
    NuevacitaModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NuevacitaModalPage.prototype.resetNewCita = function () {
        this.cita = new __WEBPACK_IMPORTED_MODULE_3__providers_user_data_citas__["a" /* Citas */]();
    };
    NuevacitaModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NuevacitaModalPage');
    };
    NuevacitaModalPage.prototype.createCita = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.basicNewCitaValidation()) {
                            return [2 /*return*/, false];
                        }
                        this.loader.presentLoader('creando cita...');
                        this.cita.data.field_estado.und["0"].value = 0;
                        if (this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])) {
                            this.cita.data.field_cita_doctor.und[0] = this.userData.userData.uid;
                        }
                        this.cita.data.field_cita_recepcion.und[0] = this.userData.userData.uid; //esto es quien creo la cita
                        this.cita.data.field_cita_caja.und[0] = "_none"; //quien cobro la cita
                        this.cita.caja_playerid = null;
                        this.cita.data.field_servicios_cita.und = []; //limpiamos los servicios porque nos deja basura
                        this.setCitaDateFromiNPUT();
                        return [4 /*yield*/, this.citasMan.generateNewCita(this.cita.data).subscribe(function (val) {
                                console.log(val.nid);
                                _this.notiMan.generateNotification([_this.cita.data.field_cita_doctor.und[0]], "Nueva Cita con " + _this.cita.paciente + " fecha: " + new Date(_this.cita.data.field_datemsb['und'][0]['value']), "cita-" + _this.cita.Nid);
                                _this.cita.data.Nid = val.nid;
                                _this.cita.Nid = val.nid;
                                _this.wsMessenger.generateWSupdateMessage(_this.cita);
                            }, function (response) {
                                console.log("POST call in error", response);
                                console.log("show error");
                                for (var key in response.error.form_errors) {
                                    _this.alert.presentAlert(key, response.error.form_errors[key]);
                                }
                            })];
                    case 1:
                        _a.sent();
                        //await this.citasMan.requestCitas().toPromise();
                        this.loader.dismissLoader();
                        this.close();
                        return [2 /*return*/];
                }
            });
        });
    };
    NuevacitaModalPage.prototype.basicNewCitaValidation = function () {
        var ret = true;
        if (this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])) {
        }
        else {
            if (Number(this.cita.data.field_cita_doctor.und[0]) === 0) {
                this.alert.presentAlert('Error', 'Debe elegir un doctor para esta cita');
                ret = false;
            }
        }
        return ret;
    };
    NuevacitaModalPage.prototype.updateCita = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader.presentLoader('actualizando ...');
                        this.setCitaDateFromiNPUT();
                        return [4 /*yield*/, this.citasMan.updateCita(this.cita.data).subscribe(function (val) {
                                _this.wsMessenger.generateWSupdateMessage(_this.cita);
                            }, function (response) {
                                console.log("POST call in error", response);
                                console.log("show error");
                                for (var key in response.error.form_errors) {
                                    _this.alert.presentAlert(key, response.error.form_errors[key]);
                                }
                            })];
                    case 1:
                        _a.sent();
                        this.loader.dismissLoader();
                        this.close();
                        return [2 /*return*/];
                }
            });
        });
    };
    NuevacitaModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    NuevacitaModalPage.prototype.setCitaDateFromiNPUT = function () {
        //get the timezoned input and put it on utc on this format 2018-07-04 14:30:00-07:00 to set data using citas code
        //Debugger.log(['string that not works now is',this.selectedDate],false);
        //this.cita.setDate(this.selectedDate,true);
        var now = new Date();
        __WEBPACK_IMPORTED_MODULE_4__providers_user_data_debugger__["a" /* Debugger */].log([this.selectedDate]);
        var auxdate = new Date(this.selectedDate);
        __WEBPACK_IMPORTED_MODULE_4__providers_user_data_debugger__["a" /* Debugger */].log(["times dif are now " + now.getTime() + " vs sel " + auxdate.getTime()]);
        __WEBPACK_IMPORTED_MODULE_4__providers_user_data_debugger__["a" /* Debugger */].log(["offset is", new Date().getTimezoneOffset()]);
        var dateUT = auxdate.getTime();
        var offset = (new Date().getTimezoneOffset() * 60 * 1000 * 2); // offset is in minutes so 60 * 1000 to get  milliseconds
        dateUT = dateUT + offset;
        this.cita.setDateUT(dateUT);
        this.cita.data.field_datemsb['und'][0]['value'] = dateUT;
        __WEBPACK_IMPORTED_MODULE_4__providers_user_data_debugger__["a" /* Debugger */].log(["saving " + dateUT + " for " + new Date(dateUT)]);
    };
    NuevacitaModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nuevacita-modal',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\nuevacita-modal\nuevacita-modal.html"*/'<!--\n\n  Generated template for the NuevacitaModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n    <div class="modal_closer" (click)="this.dismiss();">Volver</div>\n\n    <div class="modalPage_header">\n\n        <div class="modalPage_logo"><img src="assets/imgs/citas.svg"/></div>\n\n        <div class="modalPage_title">\n\n          <span class="spanBlock largeFont" *ngIf="this.isnew" ><b>Nueva Cita</b></span>\n\n          <span class="spanBlock largeFont" *ngIf="!this.isnew" ><b>Editar Cita</b></span>\n\n        </div>\n\n    </div>\n\n    <div class="nuevaCita_form">\n\n      <form>\n\n          <div class="ModalInput_input">\n\n              <b>Nombre del paciente</b>\n\n              <input [(ngModel)]="this.cita.data.field_paciente.und[0].value" name="field_paciente" type="text"/>\n\n          </div>\n\n          <!--<div class="ModalInput_input" *ngIf="!(this.userData.userData.field_tipo_de_usuario.und[0].value == 1)">-->\n\n            <div class="ModalInput_input" *ngIf="!this.permissions.checkUserPermission([this.userData.TIPO_DOCTOR]);" >\n\n                <b>Doctor:</b>\n\n              <select [(ngModel)]="this.cita.data.field_cita_doctor.und[0]"  name="field_cita_doctor" class="input_select input">\n\n                  <option *ngIf="!this.permissions.checkUserPermission([this.userData.TIPO_DOCTOR]);" selected disabled value="0" >SELECT</option>\n\n                  <option *ngFor="let doc of this.docData.doctores"  value="{{doc.Uid}}" >{{doc.name}} / {{doc.field_alias}} </option>\n\n                  <option *ngIf="this.permissions.checkUserPermission([this.userData.TIPO_DOCTOR]);" selected disabled value="{{this.userData.userData.uid}}">{{this.userData.userData.name}}</option>\n\n                </select>\n\n              </div>\n\n          <div class="ModalInput_input">\n\n              <b>Email</b>\n\n              <input [(ngModel)]="this.cita.data.field_email.und[0].email"  name="field_email"  type="text"/>\n\n          </div>\n\n          <div class="ModalInput_input">\n\n              <b>Télefono</b>\n\n              <input [(ngModel)]="this.cita.data.field_telefono.und[0].value" name="field_telefono" type="text"/>\n\n          </div>\n\n          <div class="nuevacita_dates">\n\n                <ion-item>\n\n                        <ion-label>Fecha</ion-label>\n\n                        <ion-datetime displayFormat="DDD DD/MMM/YYYY HH:mm" [(ngModel)]="selectedDate" name="selectedDate"></ion-datetime>\n\n                      </ion-item>\n\n                \n\n              <!--<div class="ModalInput_input">\n\n                  <b>Fecha</b>\n\n                  <input [(ngModel)]="this.newCita.field_date.und[0].value.date" name="date"  type="text" placeholder="00/00/0000"/>\n\n              </div>\n\n              <div class="ModalInput_input">\n\n                  <b>Hora</b>\n\n                  <input [(ngModel)]="this.newCita.field_date.und[0].value.time" name="time" type="text" placeholder="00:00"/>\n\n              </div>-->\n\n          </div>\n\n          <div class="ncf_buttonsection">\n\n          <button class="generalButton bgColorSecondary" (click)="createCita();" *ngIf="this.isnew">Agregar</button>\n\n          <button class="generalButton bgColorSecondary" (click)="updateCita();" *ngIf="!this.isnew">Actualizar</button>\n\n          </div>\n\n      </form>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\nuevacita-modal\nuevacita-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_citas_manager_citas_manager__["a" /* CitasManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_notifications_manager_notifications_manager__["a" /* NotificationsManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_ws_messenger_ws_messenger__["a" /* WsMessengerProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_permissions_permissions__["a" /* PermissionsProvider */]])
    ], NuevacitaModalPage);
    return NuevacitaModalPage;
}());

/**
 * Esto de aqui es para que el date me de el toisostring en la hora de aqui
 *  **/
/*
Date.prototype.toISOString = function() {
  var tzo = -this.getTimezoneOffset(),
      dif = tzo >= 0 ? '+' : '-',
      pad = function(num) {
          var norm = Math.floor(Math.abs(num));
          return (norm < 10 ? '0' : '') + norm;
      };
  return this.getFullYear() +
      '-' + pad(this.getMonth() + 1) +
      '-' + pad(this.getDate()) +
      'T' + pad(this.getHours()) +
      ':' + pad(this.getMinutes()) +
      ':' + pad(this.getSeconds()) +
      dif + pad(tzo / 60) +
      ':' + pad(tzo % 60);
}*/
//# sourceMappingURL=nuevacita-modal.js.map

/***/ })

});
//# sourceMappingURL=12.js.map
webpackJsonp([18],{

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevacitaModalPageModule", function() { return NuevacitaModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuevacita_modal__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_bootstrap_datetimepicker__ = __webpack_require__(425);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nuevacita_modal__["a" /* NuevacitaModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__nuevacita_modal__["a" /* NuevacitaModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_4_angular_bootstrap_datetimepicker__["a" /* DlDateTimePickerDateModule */]
            ],
        })
    ], NuevacitaModalPageModule);
    return NuevacitaModalPageModule;
}());

//# sourceMappingURL=nuevacita-modal.module.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevacitaModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data_citas__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data_debugger__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_citas_manager_citas_manager__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notifications_manager_notifications_manager__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loader_loader__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_ws_messenger_ws_messenger__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_doctores_data_doctores_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_permissions_permissions__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_date_date__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_calendar__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_doctores_manager_doctores_manager__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_citas_data_citas_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_subscription_manager_subscription_manager__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_updater_updater__ = __webpack_require__(78);
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












//import * as moment from 'moment';

//import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';





/**
 * Generated class for the NuevacitaModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NuevacitaModalPage = /** @class */ (function () {
    function NuevacitaModalPage(navCtrl, navParams, userData, viewCtrl, citasMan, notiMan, loader, alert, wsMessenger, docData, docMan, permissions, dateP, calendar, citasData, subscriptionManager, updater) {
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
        this.docMan = docMan;
        this.permissions = permissions;
        this.dateP = dateP;
        this.calendar = calendar;
        this.citasData = citasData;
        this.subscriptionManager = subscriptionManager;
        this.updater = updater;
        this.cita = null;
        this.isnew = true;
        this.selectedDate = null;
        this.selectedHour = 0;
        this.selectedHourISO = '';
        this.hourstring = null;
        this.hours = new Array();
        this.hourIntervalMS = 30 * 60 * 1000;
        this.showerrors = false;
        this.horantr = '';
        /**
         * Al entrar seteas la fecha a este momento:
         *  setear dia de hoy en calendario
         *  setear intervalo en las horas correspondiente a esta hora.
         *
         * **/
        console.log('GETTING CITA', navParams.get('cita'));
        var aux_node = navParams.get('cita');
        if (aux_node) {
            this.cita = aux_node;
            __WEBPACK_IMPORTED_MODULE_4__providers_user_data_debugger__["a" /* Debugger */].log(['cita en modal es', this.cita]);
            this.isnew = false;
            //this.selectedDate = Citas.getLocalDateIso(new Date(this.cita.data.field_datemsb['und'][0]['value']));//new Date().toISOString();
            this.selectedHourISO = __WEBPACK_IMPORTED_MODULE_3__providers_user_data_citas__["a" /* Citas */].getLocalDateIso(new Date(this.cita.data.field_datemsb['und'][0]['value'])); //new Date().toISOString();
            this.dateobj = new Date(this.cita.data.field_datemsb['und'][0]['value']);
            var dateobj_start = new Date(this.cita.data.field_datemsb['und'][0]['value']);
            dateobj_start.setHours(0, 0, 0, 0);
            this.selectedHour = this.dateobj.getTime() - dateobj_start.getTime();
            console.log('selected hour is:', this.selectedHour);
            console.log(this.selectedDate);
            this.setHourstring();
        }
        else {
            this.isnew = true;
            this.resetNewCita();
            this.cita.date = new Date();
            this.dateobj = new Date();
            this.selectedHour = 0;
            //this.selectedDate = Citas.getLocalDateIso(new Date());//new Date().toISOString();
            this.selectedHourISO = __WEBPACK_IMPORTED_MODULE_3__providers_user_data_citas__["a" /* Citas */].getLocalDateIso(this.getDateOnNextTreshold()); //new Date().toISOString();
        }
        if (Number(this.cita.data.field_telefono.und[0].value) === 0) {
            this.cita.data.field_telefono.und[0].value = null;
        }
    }
    NuevacitaModalPage.prototype.formatear = function (evento) {
        var hora = this.horantr.replace(':', '');
        var arregloHora = hora.match(/.{1,2}/g) ? hora.match(/.{1,2}/g) : [];
        if (arregloHora.length == 2) {
            this.horantr = arregloHora.join(':');
        }
        if (this.horantr.length > 5) {
            this.horantr = this.horantr.substring(0, 5);
        }
    };
    NuevacitaModalPage.prototype.setHours = function () {
    };
    NuevacitaModalPage.prototype.setHourstring = function () {
        console.log('trailsh setHourstring start');
        if (!this.isnew) {
            console.log('trailsh setting hours');
            var aux_date = new Date(this.cita.dateMs);
            this.horantr = __WEBPACK_IMPORTED_MODULE_12__providers_date_date__["a" /* DateProvider */].formatDateBinaryNumber(aux_date.getHours()) + ":" + __WEBPACK_IMPORTED_MODULE_12__providers_date_date__["a" /* DateProvider */].formatDateBinaryNumber(aux_date.getMinutes());
            //this.hourstring = aux_date.getHours()+':'+aux_date.getMinutes();
            //console.log('trailsh setting hours' , this.hourstring,aux_date);
        }
    };
    NuevacitaModalPage.prototype.hourDisplay = function (hourMs) {
        var ret = "";
        return __WEBPACK_IMPORTED_MODULE_12__providers_date_date__["a" /* DateProvider */].getDisplayableHourfMS(hourMs);
    };
    NuevacitaModalPage.prototype.checkSelectedHour = function (hour) {
        var ret = false;
        //if(this.selectedHour >= hour && this.selectedHour < hour+(this.hourIntervalMS)) ret =  true;
        if (__WEBPACK_IMPORTED_MODULE_12__providers_date_date__["a" /* DateProvider */].isDateBetweenNumber(this.selectedHour, hour, hour + (this.hourIntervalMS)))
            ret = true;
        return ret;
    };
    NuevacitaModalPage.prototype.ionViewWillEnter = function () {
        this.calendarLoad();
    };
    NuevacitaModalPage.prototype.datechange = function ($event) {
        this.cita.date = $event;
        //console.log($event);
    };
    NuevacitaModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NuevacitaModalPage.prototype.resetNewCita = function () {
        this.cita = new __WEBPACK_IMPORTED_MODULE_3__providers_user_data_citas__["a" /* Citas */]();
    };
    NuevacitaModalPage.prototype.ionViewDidLoad = function () {
        console.log('trailsh ionViewDidLoad NuevacitaModalPage');
        //console.log('ionViewWillEnter');
        //this.calendarLoad();
    };
    NuevacitaModalPage.prototype.getDisplayableDates = function () {
        return __WEBPACK_IMPORTED_MODULE_12__providers_date_date__["a" /* DateProvider */].getDisplayableDates(this.cita.date);
    };
    NuevacitaModalPage.prototype.choseHourClick = function (hour) {
        console.log(hour);
        this.selectedHour = hour;
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
                        if (!this.notEmptyNewCitaValidation()) {
                            return [2 /*return*/, false];
                        }
                        this.setCitaDateFromiNPUT();
                        if (!this.citaDateValidation()) {
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
                                    _this.alert.presentAlert('Error', 'Se ha detectado un error inesperado en ' + key);
                                }
                            })];
                    case 1:
                        _a.sent();
                        //await this.docMan.pushDisponivilidad(this.cita.data.field_cita_doctor.und[0], this.cita.data.field_datemsb['und'][0]['value'] );
                        //await this.citasMan.requestCitas().toPromise();
                        this.loader.dismissLoader();
                        this.close();
                        return [2 /*return*/];
                }
            });
        });
    };
    NuevacitaModalPage.prototype.notEmptyNewCitaValidation = function () {
        var ret = true;
        console.log('notEmptyNewCitaValidation');
        if (!this.checkIfInputfilledNPromtp(this.cita.data.field_paciente.und[0].value, ret))
            ret = false;
        //no hace falta revisar el doctor, porque ese ya esta validado.
        if (!this.checkIfInputfilledNPromtp(this.horantr, ret))
            ret = false;
        return ret;
    };
    NuevacitaModalPage.prototype.checkIfInputfilledNPromtp = function (input, actualret) {
        var ret = true;
        console.log('enter');
        if (!actualret) {
            return false;
        }
        ;
        console.log('checkIfInputfilledNPromtp', input, input === null, input ? false : true);
        if (input ? false : true) {
            console.log('this input is not filled mf', input);
            ret = false;
            this.alert.presentAlert('Error', 'Revisar los campos marcados en rojo.');
            this.showerrors = true;
        }
        return ret;
    };
    NuevacitaModalPage.prototype.basicNewCitaValidation = function () {
        var ret = true;
        if (this.cita.data.field_telefono.und[0].value === null) {
            this.cita.data.field_telefono.und[0].value = 0;
        }
        if (this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])) {
        }
        else {
            if (Number(this.cita.data.field_cita_doctor.und[0]) === 0) {
                this.alert.presentAlert('Error', 'Debe elegir un doctor para esta cita');
                this.showerrors = true;
                console.log('showerrors', this.showerrors);
                ret = false;
            }
        }
        return ret;
    };
    NuevacitaModalPage.prototype.citaDateValidation = function () {
        var ret = true;
        console.log('citaDateValidation', this.cita.data.field_datemsb);
        console.log('citaDateValidation', new Date(this.cita.data.field_datemsb['und'][0]['value']));
        console.log('this.hourstring', this.horantr);
        if (this.cita.data.field_datemsb['und'][0]['value'] < new Date().getTime()) {
            console.log('elegir fecha a futuro.');
            this.alert.presentAlert('Error', 'Debe elegir una fecha a futuro');
            ret = false;
        }
        if (!__WEBPACK_IMPORTED_MODULE_12__providers_date_date__["a" /* DateProvider */].validateHhMm(this.horantr)) {
            console.log('la hora esta mal', this.horantr);
            this.alert.presentAlert('Error', 'Formato de hora incorrecto');
            ret = false;
        }
        return ret;
    };
    NuevacitaModalPage.prototype.getDateOnNextTreshold = function () {
        var aux_date = new Date();
        if (aux_date.getMinutes() % 15 !== 0) {
            console.log('noes15');
            var min = 15 * Math.ceil(aux_date.getMinutes() / 15);
            if (min >= 60) {
                aux_date.setMinutes(0);
                aux_date = new Date(aux_date.getTime() + (60 * 60 * 1000));
            }
            else {
                aux_date.setMinutes(min);
            }
        }
        else {
            console.log('es15');
        }
        return aux_date;
    };
    NuevacitaModalPage.prototype.updateCita = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //poner que el websocket envie la informacion al updatear cita morro >=0
                        if (!this.citaDateValidation()) {
                            return [2 /*return*/, false];
                        }
                        if (this.cita.data.field_telefono.und[0].value === null) {
                            this.cita.data.field_telefono.und[0].value = 0;
                        }
                        this.setCitaDateFromiNPUT();
                        this.loader.presentLoader('actualizando ...');
                        return [4 /*yield*/, this.citasMan.updateCita(this.cita.data).subscribe(function (val) {
                                _this.wsMessenger.generateWSupdateMessage(_this.cita);
                            }, function (response) {
                                console.log("POST call in error", response);
                                console.log("show error");
                                for (var key in response.error.form_errors) {
                                    _this.alert.presentAlert('Error', 'Se ha detectado un error inesperado en ' + key);
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
        //OLD CODE FROM IONIC DATEPICKER
        /*let now = new Date();
        Debugger.log([this.selectedDate]);
        let auxdate = new Date(this.selectedDate);
        Debugger.log([`times dif are now ${now.getTime()} vs sel ${auxdate.getTime()}`]);
        Debugger.log([`offset is`,new Date().getTimezoneOffset()]);
        let dateUT = auxdate.getTime();
        const offset = (new Date().getTimezoneOffset() * 60 * 1000 * 2); // offset is in minutes so 60 * 1000 to get  milliseconds
        dateUT = dateUT + offset;
        this.cita.setDateUT(dateUT);
        this.cita.data.field_datemsb['und'][0]['value'] = dateUT;
        Debugger.log([`saving ${dateUT} for ${new Date(dateUT)}`]);*/
        //CODE FOR CALENDAR PICKER
        /*let aux_date = new Date(this.dateobj.getTime());
        aux_date.setHours(0,0,0,0);
        aux_date = new Date(aux_date.getTime()+this.selectedHour);
        console.log('settingdateinput is',aux_date);
        let dateUT = aux_date.getTime();//this.aux_date.getTime();
        this.cita.setDateUT(dateUT);
        this.cita.data.field_datemsb['und'][0]['value'] = dateUT;*/
        //console.log('originaltime ', new Date().getTime() );
        //console.log('-----------------------------' );
        //console.log('obtained', aux_hour_date.getTime() );
        //console.log('offset',new Date().getTimezoneOffset() * 60 * 1000);
        //console.log('-offset',aux_hour_date.getTime()  - (new Date().getTimezoneOffset() * 60 * 1000));
        //let min = (aux_hour_date.getHours() * 60) + ( aux_hour_date.getMinutes() );
        //console.log('minutos obtenidos',min, min/60);
        //aux_date = new Date(aux_date.getTime()+this.selectedHour);
        /*console.log('selectedHourIso is',this.selectedHourISO);
        let auxdatehour = new Date(this.selectedHourISO);
        console.log('selecteddate is',auxdatehour);
        let hours = DateProvider.getDayHours(auxdatehour);
        console.log('setting date is', new Date(aux_date.getTime() + hours));
        console.log('hours pulled', hours);
        console.log('settingdateinput is',aux_date);
        const offset = (new Date().getTimezoneOffset() * 60 * 1000 * 2); // offset is in minutes so 60 * 1000 to get  milliseconds
        let dateUT = aux_date.getTime();
        dateUT = dateUT + offset + hours;
        console.log('dateUTset is',new Date(dateUT));
        this.cita.setDateUT(dateUT);
        this.cita.data.field_datemsb['und'][0]['value'] = dateUT;*/
        //CODE FOR CALENDAR AND HOUR PICKER
        //obtenemos la fecha sin horas.
        var aux_date = new Date(this.dateobj.getTime());
        aux_date.setHours(0, 0, 0, 0);
        console.log('dia sin horas', aux_date);
        //obtenemos las horas em ms
        /*
        console.log('selectedisohour',this.selectedHourISO);
        let aux_hour_date = new Date(this.selectedHourISO);
        aux_hour_date = new Date(aux_hour_date.getTime()  + (new Date().getTimezoneOffset() * 60 * 1000 * 2));
        console.log(aux_hour_date);
        let ms =  (aux_hour_date.getHours()*60*60*1000)+(aux_hour_date.getMinutes()*60*1000);
        console.log('HOUR MS',ms,ms/(1000*60*60));*/
        //NO USAMOS ESTE CODIGO YA PORQUE YA NO QUIEREN EL IONIC HOUR INPUT HERMOSO QUE HICE. putos.
        console.log('hour string', this.horantr);
        var ms = Number(this.horantr.split(':')[0]) * 60 * 60 * 1000;
        ms += Number(this.horantr.split(':')[1]) * 60 * 1000;
        console.log('MSAdded', ms);
        var final_date_UT = aux_date.getTime() + ms;
        console.log('final date is', new Date(final_date_UT));
        this.cita.setDateUT(final_date_UT);
        this.cita.data.field_datemsb['und'][0]['value'] = final_date_UT;
    };
    NuevacitaModalPage.prototype.calendarLoad = function () {
        this.date = new Date();
        this.monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayi", "Junio", "Julio", "Augosto", "Septiembre", "Octubre", "Noviembre", "Dicimbre"];
        this.getDaysOfMonth();
        //this.loadEventThisMonth();
    };
    NuevacitaModalPage.prototype.getDaysOfMonth = function () {
        this.daysInThisMonth = new Array();
        this.daysInLastMonth = new Array();
        this.daysInNextMonth = new Array();
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentMonthNum = this.date.getMonth();
        this.currentYear = this.date.getFullYear();
        if (this.date.getMonth() === this.dateobj.getMonth()) {
            this.currentDate = this.dateobj.getDate();
        }
        else {
            this.currentDate = 999;
        }
        var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push(i);
        }
        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        for (var i = 0; i < thisNumOfDays; i++) {
            this.daysInThisMonth.push(i + 1);
        }
        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0).getDate();
        for (var i = 0; i < (6 - lastDayThisMonth); i++) {
            this.daysInNextMonth.push(i + 1);
        }
        var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
        if (totalDays < 36) {
            for (var i = (7 - lastDayThisMonth); i < ((7 - lastDayThisMonth) + 7); i++) {
                this.daysInNextMonth.push(i);
            }
        }
    };
    NuevacitaModalPage.prototype.chosedayClick = function (day) {
        var datex = new Date();
        datex.setFullYear(this.currentYear, this.currentMonthNum, day);
        this.currentDate = datex.getDate();
        this.dateobj = datex;
        this.date = datex;
    };
    NuevacitaModalPage.prototype.goToLastMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
        this.getDaysOfMonth();
    };
    NuevacitaModalPage.prototype.goToNextMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
        this.getDaysOfMonth();
    };
    NuevacitaModalPage.prototype.updateDoctores = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader.presentLoader('Cargando Doctores...');
                        return [4 /*yield*/, this.updater.updateSuscription()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updater.updateDocList()];
                    case 2:
                        _a.sent();
                        this.loader.dismissLoader();
                        return [2 /*return*/];
                }
            });
        });
    };
    NuevacitaModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-nuevacita-modal',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\nuevacita-modal\nuevacita-modal.html"*/'<!--\n\n  Generated template for the NuevacitaModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n    <div class="modal_closer" (click)="this.dismiss();">Volver</div>\n\n    <div class="modalPage_header">\n\n        <div class="modalPage_logo"><img src="assets/imgs/citas.svg"/></div>\n\n        <div class="modalPage_title">\n\n          <span class="spanBlock midFont" *ngIf="this.isnew" ><b>Nueva Cita</b></span>\n\n          <span class="spanBlock midFont" *ngIf="!this.isnew" ><b>Editar Cita</b></span>\n\n        </div>\n\n    </div>\n\n    <div class="nuevaCita_form">\n\n      <form>\n\n          <div class="ModalInput_input">\n\n              <b>Nombre del paciente</b>\n\n              <input [(ngModel)]="this.cita.data.field_paciente.und[0].value" [class.registerInputerror]="!this.cita.data.field_paciente.und[0].value && showerrors"name="field_paciente" type="text"/>\n\n          </div>\n\n          <!--<div class="ModalInput_input" *ngIf="!(this.userData.userData.field_tipo_de_usuario.und[0].value == 1)">-->\n\n            <div class="ModalInput_input" *ngIf="!this.permissions.checkUserPermission([this.userData.TIPO_DOCTOR]);" >\n\n                <b>Doctor:\n\n                  <!--<button (click)="updateDoctores()" ion-button icon-only no-padding class="refresh-doctors">\n\n                    <ion-icon name="refresh"></ion-icon>\n\n                  </button>-->\n\n                </b>\n\n              <select [(ngModel)]="this.cita.data.field_cita_doctor.und[0]" [class.registerInputerror]="!this.cita.data.field_cita_doctor.und[0] && showerrors"  name="field_cita_doctor" class="input_select input">\n\n                  <option *ngIf="!this.permissions.checkUserPermission([this.userData.TIPO_DOCTOR]);" selected disabled value="0" >SELECT</option>\n\n                  <option *ngFor="let doc of this.docData.doctores"  value="{{doc.Uid}}" >{{doc.name}} </option>\n\n                  <option *ngIf="this.permissions.checkUserPermission([this.userData.TIPO_DOCTOR]);" selected disabled value="{{this.userData.userData.uid}}">{{this.userData.showname}}</option>\n\n                </select>\n\n              </div>\n\n          <div class="ModalInput_input">\n\n              <b>Email</b>\n\n              <input [(ngModel)]="this.cita.data.field_email.und[0].email"  name="field_email"  type="text"/>\n\n          </div>\n\n          <div class="ModalInput_input">\n\n              <b>Télefono</b>\n\n              <input [(ngModel)]="this.cita.data.field_telefono.und[0].value" name="field_telefono" type="text"/>\n\n          </div>\n\n\n\n  <div *ngIf="cita.checkState(this.citasData.STATE_PENDIENTE)">        \n\n  <div class="calendar-header">\n\n    <ion-row class="calendar-month">\n\n      <ion-col col-2 (click)="goToLastMonth()"><ion-icon name="arrow-back"></ion-icon></ion-col>\n\n      <ion-col col-8>{{currentMonth}} {{currentYear}}</ion-col>\n\n      <ion-col col-2 (click)="goToNextMonth()"><ion-icon name="arrow-forward"></ion-icon></ion-col>\n\n    </ion-row>\n\n  </div>\n\n  <div class="calendar-body">\n\n    <ion-grid>\n\n      <ion-row class="calendar-weekday">\n\n        <ion-col>Dom</ion-col>\n\n        <ion-col>Lun</ion-col>\n\n        <ion-col>Mar</ion-col>\n\n        <ion-col>Mie</ion-col>\n\n        <ion-col>Jue</ion-col>\n\n        <ion-col>Vie</ion-col>\n\n        <ion-col>Sab</ion-col>\n\n      </ion-row>\n\n      <ion-row class="calendar-date">\n\n        <ion-col col-1 *ngFor="let lastDay of daysInLastMonth" class="last-month">{{lastDay}}</ion-col>\n\n        <ion-col col-1 *ngFor="let day of daysInThisMonth" (click)="chosedayClick(day);">\n\n          <span class="currentDate" *ngIf="currentDate === day; else otherDate" >{{day}}</span>\n\n          <ng-template #otherDate class="otherDate" >{{day}}</ng-template>\n\n        </ion-col>\n\n        <ion-col col-1 *ngFor="let nextDay of daysInNextMonth" class="next-month">{{nextDay}}</ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!--<ion-item>\n\n    <ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" [(ngModel)]="selectedHourISO" name="selectedHourISO" minuteValues="00,15,30,45"></ion-datetime>\n\n  </ion-item>-->\n\n  <div class="ModalInput_input">\n\n    <b>Hora</b>\n\n   <!-- <input [(ngModel)]="this.hourstring" [class.registerInputerror]="!this.cita.data.field_paciente.und[0].value && showerrors" name="time" type="text" placeholder="00:00"/>-->\n\n   <ion-input placeholder="00:00" type="text" [(ngModel)]="horantr" [ngModelOptions]="{standalone: true}" (keyup)="formatear($event)"></ion-input>\n\n</div>\n\n  </div>\n\n  <!--<ion-grid>\n\n        <ion-row class="calendar-hour">\n\n          <ion-col col-1 *ngFor="let hour of hours" (click)="choseHourClick(hour);">\n\n            <span class="currentDate" *ngIf="checkSelectedHour(hour); else otherDate" >{{this.hourDisplay(hour)}}</span>\n\n            <ng-template #otherDate class="otherDate" >{{this.hourDisplay(hour)}}</ng-template>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>-->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n          <!--<div class="nuevacita_dates">\n\n              \n\n              <span class="midMainFont"> {{getDisplayableDates().date}} {{getDisplayableDates().time}}</span>\n\n                <dl-date-time-picker name="date" [(ngModel)]="dateobj" (ngModelChange)="datechange($event)" minView="hour"></dl-date-time-picker>\n\n               \n\n               <!-- <div moment-picker="ctrl.myInput"\n\n                locale="es"\n\n                format="LL LTS"\n\n                min-view="month"\n\n                max-view="day"\n\n                today="true"\n\n                inline="true"\n\n                set-on-select="true">\n\n           </div>-->\n\n               <!-- <ion-calendar  name="date" [(ngModel)]="date"\n\n                (onChange)="onChange($event)"\n\n                [type]="type"\n\n                [format]="\'YYYY-MM-DD\'">\n\n          </ion-calendar>-->    \n\n                <!--<ion-item>\n\n                        <ion-label>Fecha</ion-label>\n\n                        <ion-datetime displayFormat="DDD DD/MMM/YYYY HH:mm" [(ngModel)]="selectedDate" name="selectedDate"></ion-datetime>\n\n                      </ion-item>-->\n\n                \n\n              <!--<div class="ModalInput_input">\n\n                  <b>Fecha</b>\n\n                  <input [(ngModel)]="this.newCita.field_date.und[0].value.date" name="date"  type="text" placeholder="00/00/0000"/>\n\n              </div>\n\n              <div class="ModalInput_input">\n\n                  <b>Hora</b>\n\n                  <input [(ngModel)]="this.newCita.field_date.und[0].value.time" name="time" type="text" placeholder="00:00"/>\n\n              </div>-->\n\n          <!--</div>-->\n\n          \n\n          <div class="ncf_buttonsection">\n\n          <button class="generalButton bgColorSecondary" (click)="createCita();" *ngIf="this.isnew">Agregar</button>\n\n          <button class="generalButton bgColorSecondary" (click)="updateCita();" *ngIf="!this.isnew">Actualizar</button>\n\n          </div>\n\n      </form>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\nuevacita-modal\nuevacita-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_citas_manager_citas_manager__["a" /* CitasManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_notifications_manager_notifications_manager__["a" /* NotificationsManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_ws_messenger_ws_messenger__["a" /* WsMessengerProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_doctores_manager_doctores_manager__["a" /* DoctoresManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_permissions_permissions__["a" /* PermissionsProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_date_date__["a" /* DateProvider */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_calendar__["a" /* Calendar */],
            __WEBPACK_IMPORTED_MODULE_15__providers_citas_data_citas_data__["a" /* CitasDataProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_subscription_manager_subscription_manager__["a" /* SubscriptionManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_updater_updater__["a" /* UpdaterProvider */]])
    ], NuevacitaModalPage);
    return NuevacitaModalPage;
}());

/**
 * Esto de aquí es para que el date me de el toisostring en la hora de aquí
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
//# sourceMappingURL=18.js.map
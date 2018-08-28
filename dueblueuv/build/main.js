webpackJsonp([18],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketServiceProvider; });
/* unused harmony export Message */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_dom_WebSocketSubject__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_dom_WebSocketSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_dom_WebSocketSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_url_base_url__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__citas_manager_citas_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__doctores_data_doctores_data__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__report_presentator_report_presentator__ = __webpack_require__(127);
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







var WebsocketServiceProvider = /** @class */ (function () {
    function WebsocketServiceProvider(bu, cmanager, userData, docData, reportPresentator) {
        this.bu = bu;
        this.cmanager = cmanager;
        this.userData = userData;
        this.docData = docData;
        this.reportPresentator = reportPresentator;
        this.init();
    }
    WebsocketServiceProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.websocket = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_dom_WebSocketSubject__["WebSocketSubject"].create(this.bu.websocketUrl);
                this.websocket.subscribe(function (message) { return _this.serverMessages(message); }, function (err) { return console.error(err); }, function () { return console.warn('Completed!'); });
                console.log("cosas feas terminadas que pedo");
                return [2 /*return*/];
            });
        });
    };
    WebsocketServiceProvider.prototype.serverMessages = function (message) {
        console.log('message received', message);
        switch (message.action) {
            case 'addCita':
                this.addCita(message);
                break;
            case 'removeCita':
                this.removeCita(message);
                break;
            case 'loadedReport':
                this.loadedReport(message);
                break;
        }
    };
    /**
     *
     * @param message  a message received from websocket about a new or updated cita
     * este metodo recive un mensaje y filtra segun si debe recivir la cita, y la procesa.
     */
    WebsocketServiceProvider.prototype.addCita = function (message) {
        if (this.FilterMessageCita(message)) {
            var aux_cita = this.cmanager.generateCitaFullData(message.content);
            this.reportPresentator.updateCita(aux_cita);
        }
    };
    WebsocketServiceProvider.prototype.removeCita = function (message) {
        if (this.FilterMessageCita(message)) {
            var aux_cita = this.cmanager.deleteCitaFullData(message.content);
            this.reportPresentator.deleteCita(aux_cita);
        }
    };
    // returns true if one of the doctors this user is listening is contained on the receivers of this message
    WebsocketServiceProvider.prototype.FilterMessageCita = function (message) {
        var ret = false;
        for (var _i = 0, _a = message.receivers; _i < _a.length; _i++) {
            var uid = _a[_i];
            if (this.docData.existsByUid(uid)) {
                ret = true;
                break;
            }
        }
        return ret;
    };
    WebsocketServiceProvider.prototype.loadedReport = function (message) {
        console.log('REPORTING APP LOADED ------------------------------------------------');
        console.log(message);
    };
    WebsocketServiceProvider.prototype.send = function (message) {
        this.websocket.next(JSON.stringify(message));
    };
    WebsocketServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__base_url_base_url__["a" /* BaseUrlProvider */],
            __WEBPACK_IMPORTED_MODULE_3__citas_manager_citas_manager__["a" /* CitasManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__report_presentator_report_presentator__["a" /* ReportPresentatorProvider */]])
    ], WebsocketServiceProvider);
    return WebsocketServiceProvider;
}());

var Message = /** @class */ (function () {
    function Message(receivers, action, sender, content, isBroadcast) {
        if (isBroadcast === void 0) { isBroadcast = false; }
        this.receivers = receivers;
        this.action = action;
        this.sender = sender;
        this.content = content;
        this.isBroadcast = isBroadcast;
    }
    return Message;
}());

//# sourceMappingURL=websocket-service.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrupalNodeEditorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DrupalNodeEditorProvider = /** @class */ (function () {
    function DrupalNodeEditorProvider() {
    }
    DrupalNodeEditorProvider_1 = DrupalNodeEditorProvider;
    /*getCleanField( data , field:string, assign:boolean = true){
    
      let field_ret = null;
      if(data[field]){
        if(data[field]['und'] && Array.isArray(data[field]['und'])){
          if(data[field]['und'].length > 1){
          let aux_arr = new Array();
          console.log('isanarray');
          for(let value of data[field]['und']){
            console.log('value is',value);
            if(value['value']){ aux_arr.push(value['value']); }
            else  if(value['uid']){ aux_arr.push(value['uid']); }
            else  if(value['nid']){ aux_arr.push(value['nid']); }
            else{ aux_arr.push(value); }
          }
          field_ret = aux_arr;
        }else{
          let value = data[field]['und'][0];
          if(value['value']){ field_ret = value['value']; }
          else  if(value['uid']){ field_ret = value['uid']; }
          else  if(value['nid']){ field_ret = value['nid']; }
          else{ field_ret = field_ret; }
        }
          
          console.log('endarray strringified data',JSON.stringify(data[field]));
        }else{ // si notiene mas de un elemento no es un array
          if(data[field]['und']['value']){ field_ret = data[field]['und']['value']; }
          else  if(data[field]['und']['uid']){ field_ret =  data[field]['und']['uid']; }
          else  if(data[field]['und']['nid']){ field_ret =  data[field]['und']['nid']; }
          else{ field_ret = data[field]['und']; }
        }
        console.log('end no array strringified data',JSON.stringify(data[field]));
      }else{
      }
      console.log(assign);
      if(assign){data[field] = field_ret; }
      console.log('end strringified data',JSON.stringify(data[field]));
      return field_ret;
    }*/
    DrupalNodeEditorProvider.prototype.getCleanField = function (type, data, field, assign) {
        if (assign === void 0) { assign = true; }
        console.log('data is', data);
        console.log('field looking 4 is ', field);
        console.log('field is', data[field]);
        console.log('start strringified data', JSON.stringify(data[field]));
        var field_ret = null;
        switch (type) {
            case DrupalNodeEditorProvider_1.FIELD_RELATION:
                console.log("frelation");
                field_ret = this.getCleanFieldRArray(data, field, assign);
                break;
            case DrupalNodeEditorProvider_1.FIELD_NUMBER:
                console.log("number");
                field_ret = this.getCleanFieldSimple(data, field, assign);
                break;
        }
        return field_ret;
    };
    DrupalNodeEditorProvider.prototype.getCleanFieldRArray = function (data, field, assign) {
        if (assign === void 0) { assign = true; }
        var field_ret = null;
        if (data[field]) {
            if (Array.isArray(data[field]['und'])) {
                var aux_arr = new Array();
                console.log('isanarray');
                for (var _i = 0, _a = data[field]['und']; _i < _a.length; _i++) {
                    var value = _a[_i];
                    console.log('value is', value);
                    if (value['value']) {
                        aux_arr.push(value['value']);
                    }
                    else if (value['uid']) {
                        aux_arr.push(value['uid']);
                    }
                    else if (value['nid']) {
                        aux_arr.push(value['nid']);
                    }
                    else {
                        aux_arr.push(value);
                    }
                }
                field_ret = aux_arr;
            }
            else {
                if (data[field]['und']['value']) {
                    field_ret = data[field]['und']['value'];
                }
                else if (data[field]['und']['uid']) {
                    field_ret = data[field]['und']['uid'];
                }
                else if (data[field]['und']['nid']) {
                    field_ret = data[field]['und']['nid'];
                }
                else {
                    field_ret = data[field]['und'];
                }
            }
            console.log('end no array strringified data', JSON.stringify(data[field]));
        }
        else {
        }
        console.log(assign);
        if (assign) {
            data[field] = field_ret;
        }
        console.log('end strringified data', JSON.stringify(data[field]));
        return field_ret;
    };
    DrupalNodeEditorProvider.prototype.getCleanFieldSimple = function (data, field, assign) {
        if (assign === void 0) { assign = true; }
        var field_ret = null;
        if (data[field]['und']) {
            console.log(data[field]['und']);
            if (data[field]['und'][0]) {
                console.log(data[field]['und'][0]);
                if (data[field]['und'][0]['value']) {
                    field_ret = data[field]['und'][0]['value'];
                }
                else if (data[field]['und'][0]['uid']) {
                    field_ret = data[field]['und'][0]['uid'];
                }
                else if (data[field]['und'][0]['nid']) {
                    field_ret = data[field]['und'][0]['nid'];
                }
                else {
                    field_ret = data[field]['und'][0];
                }
                console.log('field_ret', field_ret);
            }
            else {
                field_ret = null;
            }
        }
        else {
            field_ret = data[field];
        }
        console.log('field_ret simple', field_ret);
        if (assign) {
            data[field] = field_ret;
        }
        return field_ret;
    };
    DrupalNodeEditorProvider.prototype.getFormatedField = function (data, field) {
    };
    DrupalNodeEditorProvider.FIELD_RELATION = 0;
    DrupalNodeEditorProvider.FIELD_NUMBER = 1;
    DrupalNodeEditorProvider = DrupalNodeEditorProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DrupalNodeEditorProvider);
    return DrupalNodeEditorProvider;
    var DrupalNodeEditorProvider_1;
}());

//# sourceMappingURL=drupal-node-editor.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AlertProvider = /** @class */ (function () {
    function AlertProvider(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.yesString = 'Si';
        this.noString = 'No';
        console.log('Hello AlertProvider Provider');
    }
    AlertProvider.prototype.presentAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    AlertProvider.prototype.chooseAlert = function (title, msg, yesCallback, noCallback) {
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: [
                {
                    text: this.noString,
                    role: 'cancel',
                    handler: function () {
                        noCallback();
                    }
                },
                {
                    text: this.yesString,
                    handler: function () {
                        yesCallback();
                    }
                }
            ]
        });
        alert.present();
    };
    AlertProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AlertProvider);
    return AlertProvider;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPresentatorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reporte_citas_reporte_citas__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader_loader__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__date_date__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jspdf__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jspdf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jspdf_autotable__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jspdf_autotable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jspdf_autotable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reporte_servicios_reporte_servicios__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reportes_data_reportes_data__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reportes_manager_reportes_manager__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular__ = __webpack_require__(17);
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












/*
  Generated class for the ReportPresentatorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ReportPresentatorProvider = /** @class */ (function () {
    function ReportPresentatorProvider(reporteCitas, reporteServicios, loader, userData, reportesData, reportesManager, modalCtrl) {
        this.reporteCitas = reporteCitas;
        this.reporteServicios = reporteServicios;
        this.loader = loader;
        this.userData = userData;
        this.reportesData = reportesData;
        this.reportesManager = reportesManager;
        this.modalCtrl = modalCtrl;
        this.actualReport = null;
    }
    ReportPresentatorProvider.prototype.openReportModal = function (report) {
        if (report === void 0) { report = null; }
        return __awaiter(this, void 0, void 0, function () {
            var Modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader.presentLoader('Cargando Reporte ...');
                        return [4 /*yield*/, this.setReport(report)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadReporte()];
                    case 2:
                        _a.sent();
                        Modal = this.modalCtrl.create("ReporteModalPage", undefined, { cssClass: "bigModal reportModal" });
                        this.loader.dismissLoader();
                        Modal.present({});
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportPresentatorProvider.prototype.setReport = function (report) {
        if (report === void 0) { report = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!report) return [3 /*break*/, 1];
                        this.actualReport = report;
                        return [3 /*break*/, 4];
                    case 1:
                        if (!!this.reportesData.todayReport) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.reportesManager.cargarListaReportes()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.actualReport = this.reportesData.todayReport;
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ReportPresentatorProvider.prototype.loadReporte = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadReportCitas()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadReportServicios()];
                    case 2:
                        _a.sent();
                        this.evaluateCitas();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportPresentatorProvider.prototype.loadReportCitas = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.reporteCitas.reporteLoadCitas(this.actualReport)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportPresentatorProvider.prototype.loadReportServicios = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.reporteServicios.reporteLoadServicios(this.actualReport)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportPresentatorProvider.prototype.updateCita = function (cita) {
        console.log('here we update a cita when it is updated w a socket call');
        if (this.actualReport) {
            this.reporteCitas.checkForCitaUpdate(this.actualReport, cita);
            this.evaluateCitas();
        }
    };
    ReportPresentatorProvider.prototype.deleteCita = function (cita) {
        console.log('delete citas from socket');
        if (this.actualReport) {
            this.actualReport.citas.filter(function (citas) { return citas.Nid !== cita.Nid; });
            this.evaluateCitas();
        }
    };
    /**
     * this method evaluates all of the citas of the report and generates the presented data.
    */
    ReportPresentatorProvider.prototype.evaluateCitas = function () {
        console.log('evaluating citas of actual report');
        this.resetVars();
        this.noCitas = this.actualReport.citas.length;
        this.noCancel = this.actualReport.citas.filter(function (citas) { return citas.checkState(__WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_CANCELADA); }).length;
        this.calcularCitasPorCobrar();
        var filteredCitas = __WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].sortByDate(this.getFilteredCitasShow());
        for (var _i = 0, filteredCitas_1 = filteredCitas; _i < filteredCitas_1.length; _i++) {
            var cita = filteredCitas_1[_i];
            if (cita.duracionMs)
                this.duracionTotalMs += cita.duracionMs;
            if (cita.costo)
                this.costoTotal += cita.costo;
            if (cita.cobro)
                this.total += cita.cobro;
            if (cita.costo && cita.cobro && cita.costo > cita.cobro) {
                this.cajaAdeudo += cita.costo - cita.cobro;
            }
            if (cita.cobroEfectivo)
                this.totalefectivo += cita.cobroEfectivo;
            if (cita.cobroTarjeta)
                this.totalTarjeta += cita.cobroTarjeta;
            if (cita.cobroCheque)
                this.totalCheques += cita.cobroCheque;
        }
        this.duracionTotalStr = __WEBPACK_IMPORTED_MODULE_4__date_date__["a" /* DateProvider */].getDateDifText(this.duracionTotalMs);
    };
    ReportPresentatorProvider.prototype.calcularCitasPorCobrar = function () {
        var citasPorCobrar = this.actualReport.citas.filter(function (citas) {
            return citas.checkState(__WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_COBRO);
        });
        this.cajacuentas = 0;
        for (var _i = 0, citasPorCobrar_1 = citasPorCobrar; _i < citasPorCobrar_1.length; _i++) {
            var cita = citasPorCobrar_1[_i];
            if (cita.costo)
                this.cajacuentas += cita.costo;
        }
    };
    /**
     * this methos filter the report citas to get only the citas states that we want on the report.
    */
    ReportPresentatorProvider.prototype.getFilteredCitasShow = function () {
        return this.actualReport.citas.filter(function (citas) {
            return (!citas.checkState(__WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_CANCELADA));
        });
    };
    ReportPresentatorProvider.prototype.resetVars = function () {
        this.duracionTotalMs = 0;
        this.duracionTotalStr = "00:00";
        this.noCitas = 0;
        this.noShow = 0;
        this.noCancel = 0;
        this.total = 0;
        this.totalefectivo = 0;
        this.totalTarjeta = 0;
        this.totalCheques = 0;
        this.totalcuentas = 0;
        this.totalAdeudo = 0;
        this.costoTotal = 0;
        this.caja = 0;
        this.cajaefectivo = 0;
        this.cajaTarjeta = 0;
        this.cajaCheques = 0;
        this.cajacuentas = 0;
        this.cajaAdeudo = 0;
    };
    ReportPresentatorProvider.prototype.generatePDF = function () {
        var _this = this;
        var logodataurl = "data:image/jpeg;base64,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";
        var doc = new __WEBPACK_IMPORTED_MODULE_5_jspdf__('p', 'pt');
        doc.addImage(logodataurl, 'JPEG', 50, 20, 80, 30);
        doc.setFontSize(12);
        doc.text(50, 80, "Reporte a la fecha de " + this.actualReport.dateString);
        doc.text(50, 100, "Generado por Usuario " + this.userData.userData.name);
        var columns = new Array();
        var rows = new Array();
        this.actualReport.citas.forEach(function (cita) {
            columns = new Array();
            rows = new Array();
            /**IMPRIMIENDO CITA**/
            columns.push({ title: "ID", dataKey: "id" });
            columns.push({ title: "Paciente", dataKey: "Paciente" });
            columns.push({ title: "Doctor", dataKey: "Doctor" });
            columns.push({ title: "Servicio", dataKey: "Servicio" });
            columns.push({ title: "Costo", dataKey: "Costo" });
            rows.push({
                "id": "" + cita.Nid,
                "Paciente": "" + cita.paciente,
                "Doctor": cita.doctor_name + "/ " + cita.doctor_alias,
                "Servicio": "",
                "Costo": ""
            });
            cita.reporteServicios.forEach(function (servicio) {
                rows.push({
                    "id": "",
                    "Paciente": "",
                    "Doctor": "",
                    "Servicio": "" + servicio.title,
                    "Costo": "" + servicio.costo
                });
            });
            rows.push({
                "id": "",
                "Paciente": "",
                "Doctor": "",
                "Servicio": "Total",
                "Costo": "" + cita.costo
            });
            _this.printtable(doc, columns, rows, 60 + 60);
            /**IMPRIMIENDO  TOTALES DE CITA**/
            columns = new Array();
            rows = new Array();
            columns.push({ title: "Totales", dataKey: "Totales" });
            columns.push({ title: "Caja", dataKey: "Caja" });
            columns.push({ title: "Efectivo", dataKey: "Efectivo" });
            columns.push({ title: "Tarjeta", dataKey: "Tarjeta" });
            columns.push({ title: "Total", dataKey: "Total" });
            rows.push({
                "Totales": "iD " + cita.Nid,
                "Caja": "" + cita.cobroEfectivo,
                "Efectivo": "" + cita.cobroTarjeta,
                "Tarjeta": "" + cita.cobroCheque,
                "Total": "" + cita.cobro
            });
            _this.printtable(doc, columns, rows, 2);
        });
        /**IMPRIMIENDO  ESTADISTICAS**/
        columns = new Array();
        rows = new Array();
        columns.push({ title: "noCitas", dataKey: "noCitas" });
        columns.push({ title: "noCancel", dataKey: "noCancel" });
        columns.push({ title: "noShow", dataKey: "noShow" });
        columns.push({ title: "Duracion", dataKey: "Duracion" });
        rows.push({
            "noCitas": "" + this.noCitas,
            "noCancel": "" + this.noCancel,
            "noShow": "" + this.noShow,
            "Duracion": "" + this.duracionTotalStr
        });
        this.printtable(doc, columns, rows, 20);
        /**IMPRIMIENDO  GRANDTOTALES**/
        columns = new Array();
        rows = new Array();
        columns.push({ title: "", dataKey: "titulo" });
        columns.push({ title: "Efectivo", dataKey: "Efectivo" });
        columns.push({ title: "Tarjeta", dataKey: "Tarjeta" });
        columns.push({ title: "Cheques", dataKey: "Cheques" });
        columns.push({ title: "Total", dataKey: "Total" });
        rows.push({
            "titulo": "Cuentas",
            "Efectivo": "",
            "Tarjeta": "",
            "Cheques": "",
            "Total": "" + this.costoTotal
        });
        rows.push({
            "titulo": "Caja",
            "Efectivo": "" + this.totalefectivo,
            "Tarjeta": "" + this.totalTarjeta,
            "Cheques": "" + this.totalCheques,
            "Total": "" + this.total
        });
        this.printtable(doc, columns, rows, 20);
        doc.save("Reporte" + this.actualReport.dateString + ".pdf");
        doc.autoTable.previous = 0;
    };
    ReportPresentatorProvider.prototype.printtable = function (doc, columns, rows, margintop) {
        doc.autoTable(columns, rows, {
            startY: doc.autoTableEndPosY() + margintop,
            pageBreak: 'auto',
            styles: { fillColor: [200, 200, 200] },
        });
    };
    ReportPresentatorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__reporte_citas_reporte_citas__["a" /* ReporteCitasProvider */],
            __WEBPACK_IMPORTED_MODULE_8__reporte_servicios_reporte_servicios__["a" /* ReporteServiciosProvider */],
            __WEBPACK_IMPORTED_MODULE_2__loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_7__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_9__reportes_data_reportes_data__["a" /* ReportesDataProvider */],
            __WEBPACK_IMPORTED_MODULE_10__reportes_manager_reportes_manager__["a" /* ReportesManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["g" /* ModalController */]])
    ], ReportPresentatorProvider);
    return ReportPresentatorProvider;
}());

//# sourceMappingURL=report-presentator.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportesManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportes_data_reportes_data__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__date_date__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_url_base_url__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_data_reportes__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__doctores_data_doctores_data__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__drupal_node_manager_drupal_node_manager__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__drupal_node_editor_drupal_node_editor__ = __webpack_require__(103);
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










/*
  Generated class for the ReportesManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ReportesManagerProvider = /** @class */ (function () {
    function ReportesManagerProvider(http, reportesData, doctoresData, userData, dp, bu, nodeMan, nodeEditor) {
        this.http = http;
        this.reportesData = reportesData;
        this.doctoresData = doctoresData;
        this.userData = userData;
        this.dp = dp;
        this.bu = bu;
        this.nodeMan = nodeMan;
        this.nodeEditor = nodeEditor;
        console.log('Hello ReportesManagerProvider Provider');
    }
    //REPORTES METHODS
    ReportesManagerProvider.prototype.cargarListaReportes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var reportes_data, _i, reportes_data_1, reporte_data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.reportesData.isSetTodayReport) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getTodayReport()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        console.log('today report is', this.reportesData.todayReport);
                        return [4 /*yield*/, this.requestReportes(-1, 'all').toPromise()];
                    case 3:
                        reportes_data = _a.sent();
                        console.log('obtained reportes data ', reportes_data);
                        for (_i = 0, reportes_data_1 = reportes_data; _i < reportes_data_1.length; _i++) {
                            reporte_data = reportes_data_1[_i];
                            if (this.reportesData.checkTodayReportNid(reporte_data['nid'])) {
                                this.reportesData.todayReport.setData(reporte_data);
                            }
                            else {
                                this.reportesData.addReporte(reporte_data);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportesManagerProvider.prototype.requestReportes = function (dialy, date, uid) {
        if (dialy === void 0) { dialy = -1; }
        if (date === void 0) { date = (this.dp.nowStart - 30 * 1000) + "--" + (this.dp.nowEnd - 30 * 1000); }
        if (uid === void 0) { uid = this.userData.userData.uid; }
        var filter = "?args[0]=" + uid;
        var extrafilters = "&args[1]=" + date + (dialy === -1 ? '' : "&args[2]=" + dialy);
        var url = this.bu.endpointUrl + 'rest_reportes.json' + filter + extrafilters;
        return this.http.get(url).share();
    };
    ReportesManagerProvider.prototype.getTodayReport = function () {
        return __awaiter(this, void 0, void 0, function () {
            var todayReport_Data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestReportes(1).toPromise()];
                    case 1:
                        todayReport_Data = _a.sent();
                        if (!(todayReport_Data.length > 0)) return [3 /*break*/, 2];
                        this.reportesData.addReporte(todayReport_Data[0], true);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.generateTodayReport()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ReportesManagerProvider.prototype.generateTodayReport = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uax_treport, nid, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uax_treport = new __WEBPACK_IMPORTED_MODULE_6__user_data_reportes__["a" /* reportes */]();
                        uax_treport.author_uid = this.userData.userData.uid;
                        uax_treport.doctores = this.doctoresData.doctoresIDs;
                        uax_treport.dateStartUTMS = this.dp.nowStart;
                        uax_treport.dateEndUTMS = this.dp.nowEnd;
                        uax_treport.dialy = true;
                        return [4 /*yield*/, this.nodeMan.generateNewNode(uax_treport.getData()).toPromise()];
                    case 1:
                        nid = _a.sent();
                        console.log(nid);
                        uax_treport.nid = nid['nid'];
                        console.log('generated nid', nid[0]);
                        console.log('obtained stringified', JSON.stringify(uax_treport));
                        console.log('obtained data stringified', JSON.stringify(uax_treport.getData()));
                        data = uax_treport.getData();
                        this.nodeEditor.getCleanField(__WEBPACK_IMPORTED_MODULE_9__drupal_node_editor_drupal_node_editor__["a" /* DrupalNodeEditorProvider */].FIELD_RELATION, data, 'field_doctores');
                        this.nodeEditor.getCleanField(__WEBPACK_IMPORTED_MODULE_9__drupal_node_editor_drupal_node_editor__["a" /* DrupalNodeEditorProvider */].FIELD_RELATION, data, 'field_cajas');
                        this.nodeEditor.getCleanField(__WEBPACK_IMPORTED_MODULE_9__drupal_node_editor_drupal_node_editor__["a" /* DrupalNodeEditorProvider */].FIELD_RELATION, data, 'field_recepciones');
                        this.nodeEditor.getCleanField(__WEBPACK_IMPORTED_MODULE_9__drupal_node_editor_drupal_node_editor__["a" /* DrupalNodeEditorProvider */].FIELD_NUMBER, data, 'field_datestartutmb');
                        this.nodeEditor.getCleanField(__WEBPACK_IMPORTED_MODULE_9__drupal_node_editor_drupal_node_editor__["a" /* DrupalNodeEditorProvider */].FIELD_NUMBER, data, 'field_dateendutmb');
                        console.log('docs', data['field_doctores']);
                        data['field_doctores'] = data['field_doctores'].map(function (val) { return { uid: val }; });
                        data['field_cajas'] = data['field_cajas'].map(function (val) { return { uid: val }; });
                        data['field_recepciones'] = data['field_recepciones'].map(function (val) { return { uid: val }; });
                        data['field_datestartutmb'] = { 'value': data['field_datestartutmb'] };
                        data['field_dateendutmb'] = { 'value': data['field_dateendutmb'] };
                        console.log('data ends as', data);
                        this.reportesData.addReporte(data, true);
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportesManagerProvider.prototype.deleteReport = function (report) {
        this.reportesData.removeReporte(report);
        return this.nodeMan.deleteNode(report.getData()).share();
    };
    ReportesManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__reportes_data_reportes_data__["a" /* ReportesDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__date_date__["a" /* DateProvider */],
            __WEBPACK_IMPORTED_MODULE_5__base_url_base_url__["a" /* BaseUrlProvider */],
            __WEBPACK_IMPORTED_MODULE_8__drupal_node_manager_drupal_node_manager__["a" /* DrupalNodeManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_9__drupal_node_editor_drupal_node_editor__["a" /* DrupalNodeEditorProvider */]])
    ], ReportesManagerProvider);
    return ReportesManagerProvider;
}());

//# sourceMappingURL=reportes-manager.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitaProgressControllerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__citas_manager_citas_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CitaProgressControllerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CitaProgressControllerProvider = /** @class */ (function () {
    function CitaProgressControllerProvider(citasManager, modalCtrl) {
        this.citasManager = citasManager;
        this.modalCtrl = modalCtrl;
        this.cobroEfectivo = null;
        this.cobroTarjeta = null;
        this.cobroCheque = null;
        this.showinterval = null;
    }
    Object.defineProperty(CitaProgressControllerProvider.prototype, "CantidadRestante", {
        get: function () { return 0 + ((Number(this.activeCita.costo)) - (Number(this.cobroEfectivo) + Number(this.cobroCheque) + Number(this.cobroTarjeta))); },
        enumerable: true,
        configurable: true
    });
    CitaProgressControllerProvider.prototype.openProgress = function (cita) {
        this.setActiveCita(cita);
        this.startInterval();
        var Modal = this.modalCtrl.create("ProgresocitaModalPage", { cita: cita }, { cssClass: "smallModal progressModal" });
        Modal.present({});
    };
    CitaProgressControllerProvider.prototype.setActiveCita = function (cita) {
        this.activeCita = cita; //navParams.get('cita');
        this.activeCitaDoc = this.citasManager.getDoctorOFCita(this.activeCita);
    };
    CitaProgressControllerProvider.prototype.finalizarCitaActiva = function () {
        this.calcularCosto();
        this.activeCita.data.field_costo_sobrescribir.und[0].value = this.costoCita;
        this.activeCita.setServicesData();
        this.activeCitaDoc.citaActiva = null;
    };
    CitaProgressControllerProvider.prototype.pagarCitaActiva = function () {
        this.activeCita.cobroEfectivo = this.cobroEfectivo;
        this.activeCita.cobroCheque = this.cobroCheque;
        this.activeCita.cobroTarjeta = this.cobroTarjeta;
    };
    CitaProgressControllerProvider.prototype.addService = function () {
        var _this = this;
        var aux_servicio = null;
        console.log(this.selectedService);
        if (Number(this.selectedService) !== Number(0)) {
            var service_to_add = this.available_services.find(function (services) { return Number(services.Nid) === Number(_this.selectedService); });
            if (this.activeCita.addServicio(service_to_add)) {
                this.available_services = this.activeCita.getServiciosAvailable(this.activeCitaDoc.servicios);
                this.calcularCosto();
                this.selectedService = 0;
            }
        }
    };
    CitaProgressControllerProvider.prototype.removeService = function (servicio) {
        this.activeCita.removeServicio(servicio);
        this.available_services = this.activeCita.getServiciosAvailable(this.activeCitaDoc.servicios);
        this.calcularCosto();
    };
    CitaProgressControllerProvider.prototype.calcularCosto = function () {
        var _this = this;
        this.costoCita = 0;
        this.activeCita.addedServices.forEach(function (element) {
            _this.costoCita += Number(element.costo);
        });
    };
    CitaProgressControllerProvider.prototype.evalServicios = function () {
        this.activeCita.setAddedServices(this.activeCitaDoc.servicios);
        this.available_services = this.activeCita.getServiciosAvailable(this.activeCitaDoc.servicios);
    };
    CitaProgressControllerProvider.prototype.startInterval = function () {
        var _this = this;
        if (!this.showinterval) {
            this.showinterval = setInterval(function () { _this.activeCita.setDuracionMs(); }, 1000);
        }
    };
    CitaProgressControllerProvider.prototype.stopInterval = function () {
        if (this.showinterval) {
            clearInterval(this.showinterval);
            this.showinterval = null;
        }
    };
    CitaProgressControllerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__citas_manager_citas_manager__["a" /* CitasManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */]])
    ], CitaProgressControllerProvider);
    return CitaProgressControllerProvider;
}());

//# sourceMappingURL=cita-progress-controller.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctoresManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctores_data_doctores_data__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_data_doctores__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__drupal_user_manager_drupal_user_manager__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__drupal_node_editor_drupal_node_editor__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subscription_manager_subscription_manager__ = __webpack_require__(70);
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








/*
  Generated class for the DoctoresManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DoctoresManagerProvider = /** @class */ (function () {
    function DoctoresManagerProvider(http, docData, userData, userMan, subsMan, nodeEditor) {
        this.http = http;
        this.docData = docData;
        this.userData = userData;
        this.userMan = userMan;
        this.subsMan = subsMan;
        this.nodeEditor = nodeEditor;
    }
    /**
     * Este metodo carga los uids de los doctores del usuario:
     * si es un doctor carga su propio uid
     * si es una subcuenta carga los uids de todos los doctores que esta manejando.
    */
    DoctoresManagerProvider.prototype.initDoctoresUids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var docfilter, docs_data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.userData.checkUserPermission([__WEBPACK_IMPORTED_MODULE_4__user_data_user_data__["a" /* UserDataProvider */].TIPO_DOCTOR])) return [3 /*break*/, 1];
                        this.setDoctores([this.userData.userData.uid]);
                        return [3 /*break*/, 3];
                    case 1:
                        if (!(this.userData.userData.field_doctores && this.userData.userData.field_doctores.und.length > 0)) return [3 /*break*/, 3];
                        //this.setDoctores(this.userData.userData.field_doctores.und);
                        console.log('docs ids', this.userData.userData.field_doctores.und);
                        docfilter = this.nodeEditor.getCleanField(__WEBPACK_IMPORTED_MODULE_6__drupal_node_editor_drupal_node_editor__["a" /* DrupalNodeEditorProvider */].FIELD_RELATION, this.userData.userData, 'field_doctores', false);
                        console.log('cleaned docfilter', docfilter);
                        return [4 /*yield*/, this.userMan.requestUsers(null, null, docfilter).toPromise()];
                    case 2:
                        docs_data = _a.sent();
                        this.setDoctoresData(docs_data);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DoctoresManagerProvider.prototype.setDoctores = function (Uids) {
        for (var _i = 0, Uids_1 = Uids; _i < Uids_1.length; _i++) {
            var uid = Uids_1[_i];
            var auxDoc = new __WEBPACK_IMPORTED_MODULE_3__user_data_doctores__["a" /* Doctores */]();
            auxDoc.Uid = uid;
            this.docData.addDoctor(auxDoc);
        }
    };
    DoctoresManagerProvider.prototype.setDoctoresData = function (docs_data) {
        console.log('setting docs based on data', docs_data);
        for (var _i = 0, docs_data_1 = docs_data; _i < docs_data_1.length; _i++) {
            var doc = docs_data_1[_i];
            var auxDoc = new __WEBPACK_IMPORTED_MODULE_3__user_data_doctores__["a" /* Doctores */]();
            auxDoc.Uid = doc.uid;
            auxDoc.name = doc.name;
            auxDoc.field_alias = doc.field_alias;
            this.docData.addDoctor(auxDoc);
        }
    };
    DoctoresManagerProvider.prototype.filterActiveDoctors = function () {
        var _this = this;
        if (!this.userData.checkUserPermission([__WEBPACK_IMPORTED_MODULE_4__user_data_user_data__["a" /* UserDataProvider */].TIPO_DOCTOR])) {
            this.docData.doctores = this.docData.doctores.filter(function (docs) {
                return _this.subsMan.checkSusOfDoctor(docs.Uid);
            });
        }
    };
    DoctoresManagerProvider.prototype.requestDoctores = function () {
    };
    DoctoresManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__drupal_user_manager_drupal_user_manager__["a" /* DrupalUserManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_7__subscription_manager_subscription_manager__["a" /* SubscriptionManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__drupal_node_editor_drupal_node_editor__["a" /* DrupalNodeEditorProvider */]])
    ], DoctoresManagerProvider);
    return DoctoresManagerProvider;
}());

//# sourceMappingURL=doctores-manager.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubusersDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the SubusersDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SubusersDataProvider = /** @class */ (function () {
    function SubusersDataProvider() {
        this.subUsers = new Array();
    }
    SubusersDataProvider.prototype.addUser = function (user) {
        this.subUsers.push(user);
    };
    SubusersDataProvider.prototype.removeUser = function (user) {
        this.subUsers = this.subUsers.filter(function (users) { return Number(users.uid) !== Number(user.uid); });
    };
    SubusersDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SubusersDataProvider);
    return SubusersDataProvider;
}());

//# sourceMappingURL=subusers-data.js.map

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 144;

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctoresDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DoctoresDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DoctoresDataProvider = /** @class */ (function () {
    function DoctoresDataProvider() {
        this.doctores = new Array;
        this.doctoresSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(DoctoresDataProvider.prototype, "doctoresIDs", {
        get: function () {
            var ret = new Array();
            console.log(this.doctores);
            if (this.doctores && this.doctores.length !== 0) {
                ret = new Array();
                for (var _i = 0, _a = this.doctores; _i < _a.length; _i++) {
                    var doc = _a[_i];
                    ret.push(doc.Uid);
                }
            }
            return ret;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctoresDataProvider.prototype, "subject", {
        get: function () { return this.doctoresSubject; },
        enumerable: true,
        configurable: true
    });
    DoctoresDataProvider.prototype.addDoctor = function (doc, call) {
        if (call === void 0) { call = true; }
        if (!this.exists(doc))
            this.doctores.push(doc);
        if (call)
            this.subject.next(this.doctores);
        console.log('added doctor', doc, this.doctores);
    };
    DoctoresDataProvider.prototype.removeDoctor = function (doc, call) {
        if (call === void 0) { call = true; }
        //delete this.citas[cita.Nid];
        this.doctores = this.doctores.filter(function (doctores) { return doctores.Uid !== doc.Uid; });
        if (call)
            this.subject.next(this.doctores);
        console.log('removed doctor', doc, this.doctores);
    };
    DoctoresDataProvider.prototype.exists = function (doc) {
        return this.doctores.filter(function (docs) { return Number(docs.Uid) === Number(doc.Uid); }).length > 0;
    };
    DoctoresDataProvider.prototype.existsByUid = function (uid) {
        return this.doctores.filter(function (docs) { return Number(docs.Uid) === Number(uid); }).length > 0;
    };
    DoctoresDataProvider.isDoctorBusy = function (doc) {
        return doc.citaActiva !== null;
    };
    DoctoresDataProvider.prototype.getDoctorByUid = function (uid) {
        var ret = null;
        var exists = this.doctores.filter(function (docs) { return Number(docs.Uid) === Number(uid); });
        if (exists.length > 0)
            ret = exists[0];
        return ret;
        /*this.doctores.forEach(element => {
          console.log("comparing uid", Number(element.Uid)+"==="+Number(uid));
          if(Number(element.Uid) === Number(uid) ) {
            ret = element;
          }
        });
        console.log(ret);
        return ret;*/
    };
    DoctoresDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DoctoresDataProvider);
    return DoctoresDataProvider;
}());

//# sourceMappingURL=doctores-data.js.map

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/citas/citas.module": [
		351,
		17
	],
	"../pages/facturacion/facturacion.module": [
		354,
		2
	],
	"../pages/home/home.module": [
		352,
		16
	],
	"../pages/list/list.module": [
		353,
		15
	],
	"../pages/login/login.module": [
		355,
		14
	],
	"../pages/notification-pop/notification-pop.module": [
		356,
		13
	],
	"../pages/nuevacita-modal/nuevacita-modal.module": [
		357,
		12
	],
	"../pages/nuevoreporte-modal/nuevoreporte-modal.module": [
		358,
		11
	],
	"../pages/nuevoservicio-modal/nuevoservicio-modal.module": [
		359,
		10
	],
	"../pages/nuevousuario-modal/nuevousuario-modal.module": [
		360,
		9
	],
	"../pages/progresocita-modal/progresocita-modal.module": [
		368,
		8
	],
	"../pages/recover-modal/recover-modal.module": [
		361,
		7
	],
	"../pages/register-modal/register-modal.module": [
		362,
		0
	],
	"../pages/reporte-modal/reporte-modal.module": [
		363,
		6
	],
	"../pages/reportes/reportes.module": [
		364,
		5
	],
	"../pages/servicios/servicios.module": [
		365,
		4
	],
	"../pages/usuarios/usuarios.module": [
		366,
		1
	],
	"../pages/welcome-modal/welcome-modal.module": [
		367,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 186;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteCitasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_data_citas__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__citas_manager_citas_manager__ = __webpack_require__(40);
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



/*
  Generated class for the ReporteCitasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ReporteCitasProvider = /** @class */ (function () {
    function ReporteCitasProvider(citasManager) {
        this.citasManager = citasManager;
    }
    ReporteCitasProvider.prototype.reporteLoadCitas = function (report) {
        return __awaiter(this, void 0, void 0, function () {
            var aux_citas, obs, citas_data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        aux_citas = new Array();
                        obs = this.reporteGetCitasObservable(report);
                        return [4 /*yield*/, obs.toPromise()];
                    case 1:
                        citas_data = _a.sent();
                        report.citas = this.generateCitasFromdata(citas_data);
                        return [2 /*return*/];
                }
            });
        });
    };
    ReporteCitasProvider.prototype.reporteGetCitasObservable = function (report) {
        return this.citasManager.getCitasObservable(report.dateStartUTMS, report.dateEndUTMS, report.doctoresFilter, report.cajaFilter, report.recepcionFilter);
    };
    ReporteCitasProvider.prototype.generateCitasFromdata = function (citas_data) {
        var aux_citalit = new Array();
        for (var _i = 0, citas_data_1 = citas_data; _i < citas_data_1.length; _i++) {
            var cita = citas_data_1[_i];
            var aux_cita = new __WEBPACK_IMPORTED_MODULE_1__user_data_citas__["a" /* Citas */]();
            aux_cita.setData(cita);
            aux_citalit.push(aux_cita);
        }
        return aux_citalit;
    };
    ReporteCitasProvider.prototype.checkForCitaUpdate = function (report, cita) {
        var exists = report.citas.filter(function (citas) { return Number(citas.Nid) === Number(cita.Nid); });
        if (exists.length > 0) {
            exists[0].data = cita.data;
            exists[0].processData();
        }
    };
    ReporteCitasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__citas_manager_citas_manager__["a" /* CitasManagerProvider */]])
    ], ReporteCitasProvider);
    return ReporteCitasProvider;
}());

//# sourceMappingURL=reporte-citas.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteServiciosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_manager_servicios_manager__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReporteServiciosProvider = /** @class */ (function () {
    function ReporteServiciosProvider(servManager) {
        this.servManager = servManager;
    }
    ReporteServiciosProvider.prototype.reporteLoadServicios = function (report) {
    };
    ReporteServiciosProvider.prototype.reporteGetServiciosObservable = function (report) {
    };
    ReporteServiciosProvider.prototype.generateServiciosFromdata = function (servicio_data) {
    };
    ReporteServiciosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_manager_servicios_manager__["a" /* ServiciosManagerProvider */]])
    ], ReporteServiciosProvider);
    return ReporteServiciosProvider;
}());

//# sourceMappingURL=reporte-servicios.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reportes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__debugger__ = __webpack_require__(35);

var reportes = /** @class */ (function () {
    function reportes() {
        this.nid = 0;
        this.author_uid = 0;
        this.cajas = new Array();
        this.doctores = new Array();
        this.recepciones = new Array();
        this.dialy = true; //si es un reporte diario autogenerado
        this.citas = new Array();
        this.servicios = new Array();
        this.dateStartUTMS = 0;
        this.dateEndUTMS = 0;
    }
    Object.defineProperty(reportes.prototype, "doctoresFilter", {
        get: function () { return this.doctores; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(reportes.prototype, "cajaFilter", {
        get: function () { return this.cajas; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(reportes.prototype, "recepcionFilter", {
        get: function () { return this.recepciones; },
        enumerable: true,
        configurable: true
    });
    reportes.prototype.setData = function (input_data) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log(["input_data en reportes", input_data]);
        this.nid = input_data['nid'];
        this.doctores = new Array();
        input_data['field_doctores'].forEach(function (elm) {
            _this.doctores.push(elm['uid']);
        });
        input_data['field_cajas'].forEach(function (elm) {
            _this.cajas.push(elm['uid']);
        });
        input_data['field_recepciones'].forEach(function (elm) {
            _this.recepciones.push(elm['uid']);
        });
        this.dateStartUTMS = 0;
        this.dateEndUTMS = 0;
        if (input_data['field_datestartutmb']) {
            console.log('inputdata putting', input_data['field_datestartutmb']);
            this.dateStartUTMS = Number(input_data['field_datestartutmb'].value);
            __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log(['setted datestart', this.dateStartUTMS]);
            this.date = new Date(this.dateStartUTMS);
            __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log([this.date]);
            this.dateString = this.date.getDate() + "/" + (this.date.getMonth() + 1) + "/" + this.date.getFullYear();
        }
        if (input_data['field_dateendutmb']) {
            this.dateEndUTMS = Number(input_data['field_dateendutmb'].value);
        }
        this.author_uid = input_data['uid'];
        this.dialy = input_data['field_dialy']['value'];
        // this.getNowDatesUT();
        //cargarCitas
        __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log(["gathered dataModel", this]);
    };
    reportes.prototype.getData = function () {
        var ret = null;
        if (this.nid !== null) {
            __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log(['getinf existing report data']);
            ret = {
                Nid: this.nid,
                type: "reportes",
                /*field_datefrom:{und:[{value:{date:this.datefrom_date,time:this.datefrom_time}}]},
                field_dateto:{und:[{value:{date:this.dateTo_date,time:this.dateTo_time}}]},*/
                field_doctores: { und: [] },
                field_cajas: { und: [] },
                field_recepciones: { und: [] },
                field_dialy: { und: [{ value: this.dialy === true ? 1 : 0 }] },
                field_datestartutmb: { und: [{ value: this.dateStartUTMS }] },
                field_dateendutmb: { und: [{ value: this.dateEndUTMS }] },
            };
            if (this.doctores.length > 0) {
                this.doctores.forEach(function (element) {
                    ret.field_doctores.und.push(element);
                });
            }
            if (this.recepciones.length > 0) {
                this.recepciones.forEach(function (element) {
                    ret.field_recepciones.und.push(element);
                });
            }
            if (this.cajas.length > 0) {
                this.cajas.forEach(function (element) {
                    ret.field_cajas.und.push(element);
                });
            }
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log(['geting non existing in db report data']);
            ret = {
                type: "reportes",
                /*field_datefrom:{und:[{value:[{date:this.datefrom_date},{time:this.datefrom_time}]}]},
                field_dateto:{und:[{value:[{date:this.datefrom_date},{time:this.datefrom_time}]}]}, */
                field_doctores: { und: [] },
                field_cajas: { und: [] },
                field_recepciones: { und: [] },
                field_dialy: { und: [{ value: this.dialy === true ? 1 : 0 }] },
                field_datestartutmb: { und: [{ value: this.dateStartUTMS }] },
                field_dateendutmb: { und: [{ value: this.dateEndUTMS }] },
            };
            if (this.doctores.length > 0) {
                this.doctores.forEach(function (element) {
                    ret.field_doctores.und.push(element);
                });
            }
            if (this.recepciones.length > 0) {
                this.recepciones.forEach(function (element) {
                    ret.field_recepciones.und.push(element);
                });
            }
            if (this.cajas.length > 0) {
                this.cajas.forEach(function (element) {
                    ret.field_cajas.und.push(element);
                });
            }
        }
        __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log(['reporte getData', ret]);
        return ret;
    };
    reportes.prototype.cargarCitas = function () {
        __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log(["cargar Citas not implemented"]);
    };
    return reportes;
}());

//# sourceMappingURL=reportes.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redbg_redbg__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__redbg_redbg__["a" /* RedbgDirective */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__redbg_redbg__["a" /* RedbgDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseUrlProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the BaseUrlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BaseUrlProvider = /** @class */ (function () {
    function BaseUrlProvider() {
        this.protocol = 'http://';
        //hostname:string = 'vmi118470.contaboserver.net/~drapp/';
        //hostname:string = '18.191.210.253/';
        this.hostname = 'ec2-18-191-210-253.us-east-2.compute.amazonaws.com/';
        //websocketUrl:string = 'ws://vagapp.mx:8081/';
        this.websocketUrl = 'ws://18.191.210.253:8081/';
    }
    Object.defineProperty(BaseUrlProvider.prototype, "baseUrl", {
        get: function () { return "" + this.protocol + this.hostname; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseUrlProvider.prototype, "backendUrl", {
        get: function () { return this.baseUrl + "backend/"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseUrlProvider.prototype, "endpointUrl", {
        get: function () { return this.backendUrl + "appoint/"; },
        enumerable: true,
        configurable: true
    });
    BaseUrlProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BaseUrlProvider);
    return BaseUrlProvider;
}());

//# sourceMappingURL=base-url.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnesignalManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cordova_available_cordova_available__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_onesignal__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_manager_notifications_manager__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_data_user_data__ = __webpack_require__(9);
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





/*
  Generated class for the OnesignalManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var OnesignalManagerProvider = /** @class */ (function () {
    function OnesignalManagerProvider(oneSignal, isco, notiMan, userData) {
        this.oneSignal = oneSignal;
        this.isco = isco;
        this.notiMan = notiMan;
        this.userData = userData;
        this.onseignalDid = null;
        this.onesignalAPPid = '7902c2ba-310b-4eab-90c3-8cae53de891f';
        this.onesignalSenderid = '470345987173';
    }
    OnesignalManagerProvider.prototype.init = function () {
        var _this = this;
        if (this.isco.isCordovaAvailable) {
            var iosSettings = {};
            iosSettings["kOSSettingsKeyAutoPrompt"] = true;
            iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;
            // Initialise plugin with OneSignal service
            this.oneSignal.startInit(this.onesignalAPPid, this.onesignalSenderid).iOSSettings(iosSettings);
            this.oneSignal.getIds()
                .then(function (ids) {
                _this.onseignalDid = ids;
            });
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
            this.oneSignal.handleNotificationReceived().subscribe(function (data) { return _this.onPushReceived(data.payload); });
            this.oneSignal.handleNotificationOpened().subscribe(function (data) { return _this.onPushOpened(data.notification.payload); });
            this.oneSignal.endInit();
        }
    };
    OnesignalManagerProvider.prototype.onPushReceived = function (payload) {
        //alert('Push recevied:' + payload.body);
        this.notiMan.cargarNotificaciones();
    };
    OnesignalManagerProvider.prototype.onPushOpened = function (payload) {
        //Debugger.log(['onPushOpened',payload]);
        this.notiMan.operatePushNotification(payload.additionalData.action);
    };
    OnesignalManagerProvider.prototype.savePlayerID = function () {
        return __awaiter(this, void 0, void 0, function () {
            var saveres;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userData.getSavePlayerIDrequest(this.onseignalDid.userId).toPromise()];
                    case 1:
                        saveres = _a.sent();
                        console.log('resuñt of savind onesignal id', saveres);
                        return [2 /*return*/];
                }
            });
        });
    };
    OnesignalManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1__cordova_available_cordova_available__["a" /* CordovaAvailableProvider */],
            __WEBPACK_IMPORTED_MODULE_3__notifications_manager_notifications_manager__["a" /* NotificationsManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__user_data_user_data__["a" /* UserDataProvider */]])
    ], OnesignalManagerProvider);
    return OnesignalManagerProvider;
}());

//# sourceMappingURL=onesignal-manager.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nlist_nlist__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__footer_footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__nlist_nlist__["a" /* NlistComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__footer_footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__nlist_nlist__["a" /* NlistComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitasPresentatorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_alert__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loader_loader__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_manager_notifications_manager__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__citas_manager_citas_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__doctores_data_doctores_data__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ws_messenger_ws_messenger__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cita_progress_controller_cita_progress_controller__ = __webpack_require__(129);
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











/*
  Generated class for the CitasPresentatorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CitasPresentatorProvider = /** @class */ (function () {
    function CitasPresentatorProvider(userData, citasManager, notiMan, alert, loader, modalCtrl, wsMessenger, progresSController) {
        this.userData = userData;
        this.citasManager = citasManager;
        this.notiMan = notiMan;
        this.alert = alert;
        this.loader = loader;
        this.modalCtrl = modalCtrl;
        this.wsMessenger = wsMessenger;
        this.progresSController = progresSController;
    }
    CitasPresentatorProvider.prototype.openNuevaCita = function () {
        var Modal = this.modalCtrl.create("NuevacitaModalPage", undefined, { cssClass: "nuevaCitaModal smallModal" });
        Modal.present({});
    };
    CitasPresentatorProvider.prototype.updateStatePop = function (cita, state) {
        var _this = this;
        var aux_title = __WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].getStateLabel(state);
        this.alert.chooseAlert(aux_title, "\u00BFEst\u00E1 seguro que desea colocar esta cita como " + aux_title + "?", function () { _this.updateStateRequest(cita, state); }, function () { });
    };
    CitasPresentatorProvider.prototype.updateStateRequest = function (cita, state) {
        return __awaiter(this, void 0, void 0, function () {
            var state_res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader.presentLoader("Actualizando...");
                        return [4 /*yield*/, this.citasManager.updateCitaState(cita, state).toPromise()];
                    case 1:
                        state_res = _a.sent();
                        if (Number(state) === __WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_CONFIRMADA && cita.doctor_playerid) {
                            this.notiMan.generateNotification([cita.data.field_cita_doctor.und[0]], "Cita Confirmada con " + cita.paciente + " fecha: " + new Date(cita.data.field_datemsb['und'][0]['value']), "cita-" + cita.Nid);
                        }
                        if (Number(state) === __WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_COBRO && cita.caja_playerid) {
                            this.notiMan.generateNotification([cita.data.field_cita_caja.und[0]], "La cita de de " + cita.paciente + " esta en espera de cobro", "cita-" + cita.Nid);
                        }
                        this.wsMessenger.generateWSupdateMessage(cita);
                        this.loader.dismissLoader();
                        return [2 /*return*/];
                }
            });
        });
    };
    CitasPresentatorProvider.prototype.editCita = function (cita) {
        var Modal = this.modalCtrl.create("NuevacitaModalPage", { cita: cita }, { cssClass: "nuevaCitaModal smallModal" });
        Modal.present({});
    };
    CitasPresentatorProvider.prototype.openProgreso = function (cita) {
        /*let Modal = this.modalCtrl.create("ProgresocitaModalPage", {cita : cita}, { cssClass: "smallModal progressModal" });
        Modal.present({});*/
        this.progresSController.openProgress(cita);
    };
    CitasPresentatorProvider.prototype.iniciarCita = function (cita) {
        var _this = this;
        var aux_doc = this.citasManager.getDoctorOFCita(cita);
        if (cita.checkState(__WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_ACTIVA) || cita.checkState(__WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_COBRO)) {
            this.openProgreso(cita);
        }
        else {
            if (__WEBPACK_IMPORTED_MODULE_8__doctores_data_doctores_data__["a" /* DoctoresDataProvider */].isDoctorBusy(aux_doc)) {
                this.alert.presentAlert("Ocupado", "Este doctor esta ocupado con una cita Activa");
            }
            else {
                this.alert.chooseAlert("Iniciar Consulta", '¿Está seguro que desea colocar esta cita como Activa?', function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.loader.presentLoader('actualziando...');
                                return [4 /*yield*/, this.citasManager.updateCitaState(cita, __WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_ACTIVA).toPromise()];
                            case 1:
                                _a.sent();
                                this.wsMessenger.generateWSupdateMessage(cita);
                                this.loader.dismissLoader();
                                return [2 /*return*/];
                        }
                    });
                }); }, function () { });
            }
        }
    };
    CitasPresentatorProvider.prototype.confirmarCita = function (cita) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader.presentLoader('confirmando cita...');
                        return [4 /*yield*/, this.citasManager.updateCitaState(cita, __WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_CONFIRMADA).toPromise()];
                    case 1:
                        res = _a.sent();
                        console.log('confirmar cita res', res);
                        if (res) {
                            this.notiMan.generateNotification([cita.data.field_cita_doctor.und[0]], "Cita Confirmada con " + cita.paciente + " fecha: " + new Date(cita.data.field_datemsb['und'][0]['value']), "cita-" + cita.Nid);
                            this.wsMessenger.generateWSupdateMessage(cita);
                        }
                        this.loader.dismissLoader();
                        return [2 /*return*/];
                }
            });
        });
    };
    CitasPresentatorProvider.prototype.delecitaCitaPop = function (cita) {
        var _this = this;
        this.alert.chooseAlert("Eliminar Cita", '¿Está seguro que desea eliminar esta cita?', function () { _this.deleteCita(cita); }, function () { });
    };
    CitasPresentatorProvider.prototype.deleteCita = function (cita) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader.presentLoader('Eliminando...');
                        return [4 /*yield*/, this.citasManager.deleteCita(cita.data).toPromise()];
                    case 1:
                        _a.sent();
                        this.wsMessenger.generateWSremoveCitaMessage(cita);
                        this.loader.dismissLoader();
                        return [2 /*return*/];
                }
            });
        });
    };
    CitasPresentatorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__citas_manager_citas_manager__["a" /* CitasManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__notifications_manager_notifications_manager__["a" /* NotificationsManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_2__alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_3__loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_9__ws_messenger_ws_messenger__["a" /* WsMessengerProvider */],
            __WEBPACK_IMPORTED_MODULE_10__cita_progress_controller_cita_progress_controller__["a" /* CitaProgressControllerProvider */]])
    ], CitasPresentatorProvider);
    return CitasPresentatorProvider;
}());

//# sourceMappingURL=citas-presentator.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return subscriptions; });
//import { Debugger } from './debugger';
/**
 * @fileOverview
 * subscription describes an implementation of a plan
*/
var subscriptions = /** @class */ (function () {
    function subscriptions() {
        this.nid = null;
        this.plan = null; //objeto de plan completo
        this.field_plan_sus = null; //nid del plan
        this.field_plan_holder = null; //uid
        this.field_doctores = null; //array of doctor uids
        this.field_doctores_json = null; //a json with requiered info about doctors.
        this.field_doctores_info = null;
        this.field_subusuarios = null; //array of sub acound uids
        this.field_invitation_code = null; //String to enter this suscription
        this.field_group_name = null; // group name, just an accesory
        this.field_active = null; //wether is paid or not
        this.field_next_cobro = null; //when is time to pay again bby gime that mony.
        this.is_plan_set = false;
        this.field_stripe_sus_id = null;
        this.field_stripe_src_sus_id = null;
        this.field_stripe_cus_sub_id = null;
        this.noSubcuentas = 0;
        this.isDocfull = true;
        this.isSubFull = true;
    }
    subscriptions.prototype.setData = function (input_data) {
        var _this = this;
        var ret = false;
        if (!input_data)
            return ret;
        ret = true;
        console.log("tryna assign input data to subscription", input_data);
        this.nid = input_data['nid'];
        this.field_plan_sus = input_data['field_plan_sus'];
        this.field_plan_holder = input_data['field_plan_holder'];
        this.field_doctores = null;
        this.field_doctores_json = input_data['field_doctores_json'];
        this.field_subusuarios = null;
        this.field_invitation_code = input_data['field_invitation_code'];
        this.field_group_name = input_data['field_group_name'];
        this.field_active = input_data['field_active']['value'];
        this.field_next_cobro = input_data['field_next_cobro'];
        this.field_stripe_sus_id = input_data['field_stripe_sus_id'];
        this.field_stripe_src_sus_id = input_data['field_stripe_src_sus_id'];
        this.field_stripe_cus_sub_id = input_data['field_stripe_cus_sub_id'];
        this.field_doctores_info = new Array();
        if (input_data['field_doctores']) {
            this.field_doctores = new Array();
            input_data['field_doctores'].forEach(function (element) {
                _this.field_doctores.push(element['uid']);
            });
        }
        if (input_data['field_subusuarios']) {
            this.field_subusuarios = new Array();
            input_data['field_subusuarios'].forEach(function (element) {
                _this.field_subusuarios.push(element['uid']);
            });
        }
        //Debugger.log(['field_subusuarios at set data subscription',this.field_subusuarios]);
        this.field_doctores_info = JSON.parse(this.field_doctores_json);
        if (this.field_subusuarios)
            this.noSubcuentas = this.field_subusuarios.length;
        return ret;
    };
    subscriptions.prototype.getData = function () {
        //Debugger.log(['tryna get data from',this]);
        var ret = null;
        if (this.nid !== null) {
            ret = {
                Nid: this.nid,
                type: "suscripcion",
                field_plan_sus: { und: [this.field_plan_sus] },
                field_plan_holder: { und: [this.field_plan_holder] },
                field_doctores: { und: [] },
                field_subusuarios: { und: [] },
                field_invitation_code: { und: [{ value: this.field_invitation_code }] },
                field_group_name: { und: [{ value: this.field_group_name }] },
                field_active: { und: [{ value: this.field_active }] },
                //field_next_cobro:this.field_next_cobro,
                field_stripe_sus_id: { und: [{ value: this.field_stripe_sus_id }] },
                field_stripe_src_sus_id: { und: [{ value: this.field_stripe_src_sus_id }] },
                field_stripe_cus_sub_id: { und: [{ value: this.field_stripe_cus_sub_id }] },
            };
            if (this.field_doctores) {
                this.field_doctores.forEach(function (element) {
                    ret.field_doctores.und.push(element);
                });
            }
            if (this.field_subusuarios) {
                this.field_subusuarios.forEach(function (element) {
                    ret.field_subusuarios.und.push(element);
                });
            }
        }
        else {
            //Debugger.log(['is a new shit to save']);
            ret = {
                Nid: this.nid,
                type: "suscripcion",
                field_plan_sus: { und: [this.field_plan_sus] },
                field_plan_holder: { und: [this.field_plan_holder] },
                field_doctores: { und: [] },
                field_subusuarios: { und: [] },
                field_invitation_code: { und: [{ value: this.field_invitation_code }] },
                field_group_name: { und: [{ value: this.field_group_name }] },
                field_active: { und: [{ value: this.field_active }] },
                field_stripe_sus_id: { und: [{ value: this.field_stripe_sus_id }] },
                field_stripe_src_sus_id: { und: [{ value: this.field_stripe_src_sus_id }] },
                field_stripe_cus_sub_id: { und: [{ value: this.field_stripe_cus_sub_id }] },
            };
            if (this.field_doctores !== null) {
                this.field_doctores.forEach(function (element) {
                    ret.field_doctores.und.push(element);
                });
            }
            if (this.field_subusuarios !== null) {
                this.field_subusuarios.forEach(function (element) {
                    ret.field_subusuarios.und.push(element);
                });
            }
        }
        //Debugger.log(['source getData',ret]);
        return ret;
    };
    subscriptions.prototype.setPlanFromList = function (input_planes) {
        var _this = this;
        var ret = false;
        input_planes.forEach(function (plan) {
            if (plan.checkNid(_this.field_plan_sus)) {
                _this.plan = plan;
                _this.is_plan_set = true;
                ret = _this.is_plan_set;
                _this.checkfullness();
            }
        });
        //Debugger.log(['returning plan found and set', this.is_plan_set]);
        return ret;
    };
    subscriptions.prototype.checkfullness = function () {
        //Debugger.log(['checking fullness from plan',this.plan]);
        if (this.plan && this.plan.nid) {
            if (this.field_doctores) {
                if (this.field_doctores.length >= this.plan.field_no_doctores) {
                    this.isDocfull = true;
                }
                else {
                    this.isDocfull = false;
                }
            }
            else {
                this.isDocfull = false;
            }
            if (this.field_subusuarios) {
                if (this.field_subusuarios.length >= this.plan.field_no_subcuentas) {
                    this.isSubFull = true;
                }
                else {
                    this.isSubFull = false;
                }
            }
            else {
                this.isSubFull = false;
            }
        }
        else {
            this.isDocfull = true;
            this.isSubFull = true;
        }
    };
    subscriptions.getEmptySuscription = function () {
        var aux_sus = new subscriptions();
        aux_sus.field_active = 0;
        aux_sus.is_plan_set = false;
        aux_sus.plan = null;
        return aux_sus;
    };
    subscriptions.prototype.removeSubUserFromSubs = function (userd) {
        this.field_subusuarios = this.field_subusuarios.filter(function (s_uid) { return Number(s_uid) !== Number(userd['uid']); });
        /*if(this.field_subusuarios){
           
            let aux_index = this.field_subusuarios.indexOf(userd['uid']);
            if(aux_index !== -1)this.field_subusuarios.splice(aux_index,1);
           
        }*/
    };
    return subscriptions;
}());

//# sourceMappingURL=subscriptions.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubusersManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drupal_user_manager_drupal_user_manager__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctores_data_doctores_data__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subusers_data_subusers_data__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__subscription_data_subscription_data__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__drupal_node_manager_drupal_node_manager__ = __webpack_require__(39);
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







/*
  Generated class for the SubusersManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SubusersManagerProvider = /** @class */ (function () {
    function SubusersManagerProvider(subusersData, userData, userMan, docData, subsData, nodeManager) {
        this.subusersData = subusersData;
        this.userData = userData;
        this.userMan = userMan;
        this.docData = docData;
        this.subsData = subsData;
        this.nodeManager = nodeManager;
        console.log('Hello SubusersManagerProvider Provider');
    }
    SubusersManagerProvider_1 = SubusersManagerProvider;
    SubusersManagerProvider.prototype.cargarSubusuarios = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, _i, res_1, us;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestSubusuarios().toPromise()];
                    case 1:
                        res = _a.sent();
                        for (_i = 0, res_1 = res; _i < res_1.length; _i++) {
                            us = res_1[_i];
                            this.setSubusuariosResult(us);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SubusersManagerProvider.prototype.requestSubusuarios = function () {
        return this.userMan.requestUsers([this.userData.userData.uid], null, null).share();
    };
    SubusersManagerProvider.prototype.setSubusuariosResult = function (user_data) {
        var aux_user = this.userData.getEmptyUserd();
        aux_user.uid = user_data.uid;
        aux_user.name = user_data.name;
        aux_user.field_alias.und[0].value = user_data.field_alias;
        aux_user.field_nombre.und[0].value = user_data.field_nombre;
        aux_user.field_apellidos.und[0].value = user_data.field_apellidos;
        aux_user.field_useremail.und[0].email = user_data.field_useremail.email;
        aux_user.mail = user_data.mail;
        aux_user.status = "1";
        aux_user.field_doctores.und = new Array();
        for (var _i = 0, _a = user_data.field_doctores; _i < _a.length; _i++) {
            var doc = _a[_i];
            aux_user.field_doctores.und.push(doc.uid);
        }
        aux_user.field_tipo_de_usuario.und = new Array();
        for (var _b = 0, _c = user_data.field_tipo_de_usuario; _b < _c.length; _b++) {
            var tipo = _c[_b];
            aux_user.field_tipo_de_usuario.und.push(tipo);
        }
        this.subusersData.addUser(aux_user);
    };
    /**
     *
     * @param user user to check if it has been created by this user
     * checks if this user is registered on this subscription. meaning it has been created by this user.
     */
    SubusersManagerProvider.prototype.checkIsOwnSubuser = function (user) {
        return this.subsData.subscription.field_subusuarios.find(function (uid) { return Number(uid) === Number(user.uid); }) ? true : false;
    };
    /**
     * this removes the user from subscription rendering the user useless.
    */
    SubusersManagerProvider.prototype.removeUserFromSubscription = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var obs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.checkIsOwnSubuser(user)) return [3 /*break*/, 2];
                        this.subsData.subscription.removeSubUserFromSubs(user);
                        obs = this.nodeManager.updateNode(this.subsData.subscription.getData());
                        return [4 /*yield*/, obs.toPromise()];
                    case 1:
                        _a.sent();
                        //await this.removeSubuser(user);
                        console.log('sub removed and saved');
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /*
    * remove subuser takes this doctor out of the list of the subuser,
    * saves the subuser changes
    * and removes this subuser from the actual list
    *
    * */
    SubusersManagerProvider.prototype.removeSubuser = function (userd) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        SubusersManagerProvider_1.removeDoctorFromSubUser(userd, this.userData.userData.uid);
                        console.log('actualizando usuario sin doc id ', userd);
                        delete userd.field_sub_id;
                        return [4 /*yield*/, this.userMan.updateUserd(userd).toPromise()];
                    case 1:
                        _a.sent();
                        this.subusersData.removeUser(userd);
                        return [2 /*return*/];
                }
            });
        });
    };
    SubusersManagerProvider.prototype.addSubuser = function (userd) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        SubusersManagerProvider_1.addDoctorToSubUser(userd, this.userData.userData.uid);
                        console.log('actualizando usuario con doc id ', userd);
                        delete userd.field_sub_id;
                        return [4 /*yield*/, this.userMan.updateUserd(userd).toPromise()];
                    case 1:
                        _a.sent();
                        this.subusersData.addUser(userd);
                        return [2 /*return*/];
                }
            });
        });
    };
    SubusersManagerProvider.removeDoctorFromSubUser = function (user, uid) {
        if (user.field_doctores && user.field_doctores.und)
            user.field_doctores.und = user.field_doctores.und.filter(function (docuid) { return Number(docuid) !== Number(uid); });
    };
    SubusersManagerProvider.addDoctorToSubUser = function (user, uid) {
        if (!user.field_doctores.und) {
            user.field_doctores.und = new Array();
        }
        user.field_doctores.und.push(uid);
    };
    SubusersManagerProvider = SubusersManagerProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__subusers_data_subusers_data__["a" /* SubusersDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__drupal_user_manager_drupal_user_manager__["a" /* DrupalUserManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__subscription_data_subscription_data__["a" /* SubscriptionDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__drupal_node_manager_drupal_node_manager__["a" /* DrupalNodeManagerProvider */]])
    ], SubusersManagerProvider);
    return SubusersManagerProvider;
    var SubusersManagerProvider_1;
}());

//# sourceMappingURL=subusers-manager.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_clipboard__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_components_module__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_directives_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_interceptor_auth_interceptor__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_timeout_interceptor_timeout_interceptor__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_citas_data_citas_data__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_date_date__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_base_url_base_url__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_citas_manager_citas_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_cordova_available_cordova_available__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_websocket_service_websocket_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_doctores_data_doctores_data__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_planes_data_planes_data__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_subscription_data_subscription_data__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_subscription_manager_subscription_manager__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_onesignal_manager_onesignal_manager__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_notifications_data_notifications_data__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_notifications_manager_notifications_manager__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_drupal_node_manager_drupal_node_manager__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_doctores_manager_doctores_manager__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_servicios_manager_servicios_manager__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_drupal_user_manager_drupal_user_manager__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_reportes_data_reportes_data__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_reportes_manager_reportes_manager__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_loader_loader__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_alert_alert__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_citas_presentator_citas_presentator__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_ws_messenger_ws_messenger__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_subusers_data_subusers_data__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_subusers_manager_subusers_manager__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_reporte_citas_reporte_citas__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_report_presentator_report_presentator__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_reporte_servicios_reporte_servicios__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_drupal_node_editor_drupal_node_editor__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_cita_progress_controller_cita_progress_controller__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_permissions_permissions__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//import { HTTP } from '@ionic-native/http';



































//import { HttpBackend, HttpXhrBackend } from '@angular/common/http';
//import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';
//import { Platform } from 'ionic-angular';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    preloadModules: true,
                    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                    monthShortNames: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Cct', 'Nov', 'Dec'],
                    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
                    dayShortNames: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
                }, {
                    links: [
                        { loadChildren: '../pages/citas/citas.module#CitasPageModule', name: 'CitasPage', segment: 'citas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/facturacion/facturacion.module#FacturacionPageModule', name: 'FacturacionPage', segment: 'facturacion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification-pop/notification-pop.module#NotificationPopPageModule', name: 'NotificationPopPage', segment: 'notification-pop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevacita-modal/nuevacita-modal.module#NuevacitaModalPageModule', name: 'NuevacitaModalPage', segment: 'nuevacita-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevoreporte-modal/nuevoreporte-modal.module#NuevoreporteModalPageModule', name: 'NuevoreporteModalPage', segment: 'nuevoreporte-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevoservicio-modal/nuevoservicio-modal.module#NuevoservicioModalPageModule', name: 'NuevoservicioModalPage', segment: 'nuevoservicio-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevousuario-modal/nuevousuario-modal.module#NuevousuarioModalPageModule', name: 'NuevousuarioModalPage', segment: 'nuevousuario-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recover-modal/recover-modal.module#RecoverModalPageModule', name: 'RecoverModalPage', segment: 'recover-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register-modal/register-modal.module#RegisterModalPageModule', name: 'RegisterModalPage', segment: 'register-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reporte-modal/reporte-modal.module#ReporteModalPageModule', name: 'ReporteModalPage', segment: 'reporte-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reportes/reportes.module#ReportesPageModule', name: 'ReportesPage', segment: 'reportes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/servicios/servicios.module#ServiciosPageModule', name: 'ServiciosPage', segment: 'servicios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuarios/usuarios.module#UsuariosPageModule', name: 'UsuariosPage', segment: 'usuarios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome-modal/welcome-modal.module#WelcomeModalPageModule', name: 'WelcomeModalPage', segment: 'welcome-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/progresocita-modal/progresocita-modal.module#ProgresocitaModalPageModule', name: 'ProgresocitaModalPage', segment: 'progresocita-modal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["c" /* HttpClientModule */],
                //NativeHttpModule,
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["a" /* HttpModule */],
                //IonicStorageModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_9__directives_directives_module__["a" /* DirectivesModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_13__providers_auth_interceptor_auth_interceptor__["a" /* AuthInterceptor */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_14__providers_timeout_interceptor_timeout_interceptor__["a" /* TimeoutInterceptor */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_clipboard__["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_user_data_user_data__["a" /* UserDataProvider */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_15__providers_citas_data_citas_data__["a" /* CitasDataProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_date_date__["a" /* DateProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_base_url_base_url__["a" /* BaseUrlProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_citas_manager_citas_manager__["a" /* CitasManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_cordova_available_cordova_available__["a" /* CordovaAvailableProvider */],
                ,
                __WEBPACK_IMPORTED_MODULE_21__providers_doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_planes_data_planes_data__["a" /* PlanesDataProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_subscription_data_subscription_data__["a" /* SubscriptionDataProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_subscription_manager_subscription_manager__["a" /* SubscriptionManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_onesignal_manager_onesignal_manager__["a" /* OnesignalManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_notifications_data_notifications_data__["a" /* NotificationsDataProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_notifications_manager_notifications_manager__["a" /* NotificationsManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_drupal_node_manager_drupal_node_manager__["a" /* DrupalNodeManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_doctores_manager_doctores_manager__["a" /* DoctoresManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_servicios_manager_servicios_manager__["a" /* ServiciosManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_drupal_user_manager_drupal_user_manager__["a" /* DrupalUserManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_reportes_data_reportes_data__["a" /* ReportesDataProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_reportes_manager_reportes_manager__["a" /* ReportesManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_loader_loader__["a" /* LoaderProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_alert_alert__["a" /* AlertProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_citas_presentator_citas_presentator__["a" /* CitasPresentatorProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_websocket_service_websocket_service__["a" /* WebsocketServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_ws_messenger_ws_messenger__["a" /* WsMessengerProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_subusers_data_subusers_data__["a" /* SubusersDataProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_subusers_manager_subusers_manager__["a" /* SubusersManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_40__providers_reporte_citas_reporte_citas__["a" /* ReporteCitasProvider */],
                __WEBPACK_IMPORTED_MODULE_41__providers_report_presentator_report_presentator__["a" /* ReportPresentatorProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_reporte_servicios_reporte_servicios__["a" /* ReporteServiciosProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_drupal_node_editor_drupal_node_editor__["a" /* DrupalNodeEditorProvider */],
                __WEBPACK_IMPORTED_MODULE_44__providers_cita_progress_controller_cita_progress_controller__["a" /* CitaProgressControllerProvider */],
                __WEBPACK_IMPORTED_MODULE_45__providers_permissions_permissions__["a" /* PermissionsProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitasDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CitasDataProvider = /** @class */ (function () {
    function CitasDataProvider() {
        this.citas = new Array();
        this.citasSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    CitasDataProvider_1 = CitasDataProvider;
    Object.defineProperty(CitasDataProvider.prototype, "STATE_PENDIENTE", {
        get: function () { return CitasDataProvider_1.STATE_PENDIENTE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_CONFIRMADA", {
        get: function () { return CitasDataProvider_1.STATE_CONFIRMADA; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_ACTIVA", {
        get: function () { return CitasDataProvider_1.STATE_ACTIVA; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_COBRO", {
        get: function () { return CitasDataProvider_1.STATE_COBRO; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_FINALIZADA", {
        get: function () { return CitasDataProvider_1.STATE_FINALIZADA; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_CANCELADA", {
        get: function () { return CitasDataProvider_1.STATE_CANCELADA; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_ELIMINADA", {
        get: function () { return CitasDataProvider_1.STATE_CANCELADA; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "subject", {
        get: function () { return this.citasSubject; },
        enumerable: true,
        configurable: true
    });
    CitasDataProvider.prototype.addCita = function (cita, call) {
        if (call === void 0) { call = true; }
        console.log('adding a cita', cita);
        console.log('already existing citas', this.citas);
        if (!this.exists(cita))
            this.citas.push(cita);
        else
            this.updateCita(cita.data);
        if (call)
            this.subject.next(this.citas);
        console.log('added cita', cita, this.citas);
    };
    CitasDataProvider.prototype.removeCita = function (cita, call) {
        if (call === void 0) { call = true; }
        //delete this.citas[cita.Nid];
        this.citas = this.citas.filter(function (citas) { return citas.Nid !== cita.Nid; });
        console.log('citas list after removed', this.citas);
        if (call)
            this.subject.next(this.citas);
        console.log('removed cita', cita, this.citas);
    };
    CitasDataProvider.prototype.updateCita = function (data) {
        for (var _i = 0, _a = this.citas; _i < _a.length; _i++) {
            var cita = _a[_i];
            if (cita.Nid === data.Nid) {
                cita.data = data;
                /*cita.setData(data);*/
                console.log('updated cita', cita);
            }
        }
    };
    CitasDataProvider.prototype.getCitasByStatus = function (status) {
        return this.citas.filter(function (citas) { citas.checkState(status); });
    };
    CitasDataProvider.prototype.exists = function (cita) {
        return this.citas.filter(function (citas) { console.log(citas.Nid, 'vs', cita.Nid); return Number(citas.Nid) === Number(cita.Nid); }).length > 0;
    };
    CitasDataProvider.prototype.triggerSubject = function () {
        this.subject.next(this.citas);
    };
    CitasDataProvider.getStateLabel = function (state) {
        var ret = '';
        switch (state) {
            case CitasDataProvider_1.STATE_PENDIENTE:
                ret = 'Pendiente';
                break;
            case CitasDataProvider_1.STATE_CONFIRMADA:
                ret = 'Confirmada';
                break;
            case CitasDataProvider_1.STATE_ACTIVA:
                ret = 'Activa';
                break;
            case CitasDataProvider_1.STATE_COBRO:
                ret = 'Cobro';
                break;
            case CitasDataProvider_1.STATE_FINALIZADA:
                ret = 'Finalizada';
                break;
            case CitasDataProvider_1.STATE_CANCELADA:
                ret = 'Cancelada';
                break;
            case CitasDataProvider_1.STATE_ELIMINADA:
                ret = 'Eliminada';
                break;
            default: ret = 'Error';
        }
        return ret;
    };
    CitasDataProvider.getReceivers = function (cita) {
        return [cita.data.field_cita_doctor.und[0]];
    };
    CitasDataProvider.sortByDate = function (citas) {
        return citas.sort(function (a, b) {
            if (a.dateMs < b.dateMs)
                return -1;
            if (a.dateMs > b.dateMs)
                return 1;
            return 0;
        });
    };
    //estados de cita:
    CitasDataProvider.STATE_PENDIENTE = 0;
    CitasDataProvider.STATE_CONFIRMADA = 1;
    CitasDataProvider.STATE_ACTIVA = 2;
    CitasDataProvider.STATE_COBRO = 3;
    CitasDataProvider.STATE_FINALIZADA = 4;
    CitasDataProvider.STATE_CANCELADA = 5;
    CitasDataProvider.STATE_ELIMINADA = 6;
    CitasDataProvider = CitasDataProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CitasDataProvider);
    return CitasDataProvider;
    var CitasDataProvider_1;
}());

//# sourceMappingURL=citas-data.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return planes; });
var planes = /** @class */ (function () {
    function planes() {
        this.title = null;
        this.field_costo = null;
        this.nid = null;
        this.field_no_doctores = null;
        this.field_no_subcuentas = null;
        this.field_stripe_id = null;
        this.css_fact_selected = false;
    }
    planes.prototype.setData = function (input_data) {
        console.log("plan input data", input_data);
        this.title = input_data['title'];
        this.field_costo = input_data['field_costo'];
        this.nid = input_data['nid'];
        this.field_no_doctores = input_data['field_no_doctores'];
        this.field_no_subcuentas = input_data['field_no_subcuentas'];
        this.field_stripe_id = input_data['field_stripe_id'];
    };
    planes.prototype.checkNid = function (nid) {
        var ret = false;
        if (Number(this.nid) === Number(nid)) {
            ret = true;
        }
        return ret;
    };
    return planes;
}());

//# sourceMappingURL=planes.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notification_c; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__debugger__ = __webpack_require__(35);

var Notification_c = /** @class */ (function () {
    function Notification_c() {
        this.Nid = null;
    }
    Notification_c.prototype.setData = function (input_data) {
        __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log(['trynna set noti data from', input_data]);
        this.Nid = input_data['nid'];
        this.title = input_data['field_title']['value'];
        this.subtitle = input_data['field_subtitle']['value'];
        this.text = input_data['field_text']['value'];
        this.user = input_data['field_user']['uid'];
        this.action = input_data['field_action'];
        __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log(['item generated is this', this]);
    };
    /*
        array (
0 =>
stdClass::__set_state(array(
 'nid' => '183',
 'title' => 'Notitest1',
 'field_read' =>
array (
  'value' => '0',
),
 'field_subtitle' =>
array (
  'value' => 'subtitle',
  'format' => NULL,
  'safe_value' => 'subtitle',
),
 'field_text' =>
array (
  'value' => 'text testes texte ',
  'format' => NULL,
  'safe_value' => 'text testes texte ',
),
 'field_title' =>
array (
  'value' => 'Notitest1',
  'format' => NULL,
  'safe_value' => 'Notitest1',
),
 'field_user' =>
array (
  'uid' => '76',
  'access' => true,
),
)),
)
    */
    Notification_c.prototype.getData = function () {
        var aux_data = {
            Nid: this.Nid,
            type: 'notification',
            field_text: { und: [{ value: this.text }] },
            field_user: { und: this.user },
            field_action: { und: [{ value: this.action }] }
        };
        if (!this.Nid) {
            delete aux_data.Nid;
        }
        __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log(['Noti getData gets', aux_data]);
        return aux_data;
    };
    return Notification_c;
}());

//# sourceMappingURL=Notification.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return servicios; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debugger__ = __webpack_require__(35);


var servicios = /** @class */ (function () {
    function servicios() {
        this.Nid = null;
        this.Uid = null;
        this.title = null;
        this.costo = null;
    }
    servicios.prototype.setData = function (data_input) {
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(["setting data for a service", data_input]);
        this.Nid = data_input['Nid'];
        this.Uid = data_input['Uid'];
        this.title = data_input['title'];
        this.costo = data_input['costo'];
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(["data set on servicio " + this.Nid, this]);
    };
    servicios.prototype.getData = function () {
        var aux_Data = __WEBPACK_IMPORTED_MODULE_0__user_data__["a" /* UserDataProvider */].getEmptyServicio();
        aux_Data.Nid = this.Nid;
        aux_Data.type = 'servicio';
        aux_Data.title = this.title;
        aux_Data.field_costo_servicio['und'][0]['value'] = this.costo;
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(["getting servicio data", aux_Data]);
        return aux_Data;
    };
    return servicios;
}());

//# sourceMappingURL=servicios.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data_citas__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notifications_data_notifications_data__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_notifications_manager_notifications_manager__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_permissions_permissions__ = __webpack_require__(67);
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



//import { Debugger } from '../../providers/user-data/debugger';




/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userData, navCtrl, loadingCtrl, popoverCtrl, modalCtrl, notificationData, notiMan, perm) {
        var _this = this;
        this.userData = userData;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.notificationData = notificationData;
        this.notiMan = notiMan;
        this.perm = perm;
        this.authObservable = null;
        this.susObservable = null;
        this.showNotifications = false;
        this.pagename = null;
        //this.pagename = this.navCtrl.getActive().name;
        this.authObservable = userData.AuthSubject;
        this.susObservable = userData.susSubject;
        this.susObservable.subscribe(function (val) {
            _this.pagename = _this.navCtrl.getActive().name;
            //Debugger.log(['sus val is',val]);
            if (Number(val) === 0) {
                //Debugger.log(['page is ax',this.pagename]);
                if (_this.pagename.localeCompare('HomePage') !== 0) {
                    //Debugger.log(['implying this is not facturation page']);
                    _this.navCtrl.setRoot("HomePage");
                }
                //this.userData.resetLists();
            }
        });
        this.authObservable.subscribe(function (val) {
            if (Number(val) === Number(0))
                _this.navCtrl.setRoot("LoginPage");
        });
    } //fin constructor
    HeaderComponent.prototype.handleNotificationAction = function (action) {
        if (this.userData.checkUserFeature([__WEBPACK_IMPORTED_MODULE_1__providers_user_data_user_data__["a" /* UserDataProvider */].TIPO_ANY], [__WEBPACK_IMPORTED_MODULE_1__providers_user_data_user_data__["a" /* UserDataProvider */].PLAN_ANY])) {
            //Debugger.log(["operating notification on header",action]);
            var aux = action.split('-');
            switch (aux[0]) {
                case 'cita'://abrir cita
                    this.openCitaModal(aux[1]);
                    break;
                default:
            }
        }
    };
    HeaderComponent.prototype.openCitaModal = function (citaNid) {
        //buscar que la cita exista.
        //const index = this.userData.getCitaIndexByNid(Number(citaNid));
        //if(index !== -1){ //si la cita existe abrirla
        //const cita = this.userData.citas[index];
        //this.openProgreso(cita);
        //}else{//si la cita no existe cargarla.
        //Debugger.log(['node not on memory, loading it from database']);
        //cargar una cita por el nodo
        var observable = this.userData.getCitasNidObservable(citaNid);
        var loader = this.loadingCtrl.create({
            content: "Cargando..."
        });
        loader.present();
        observable.subscribe(function (val) {
            loader.dismiss();
            if (val[0]) {
                //Debugger.log(['wegotfrom nodeload',val]);
                var aux_cita = new __WEBPACK_IMPORTED_MODULE_3__providers_user_data_citas__["a" /* Citas */]();
                aux_cita.setData(val[0]);
                //Debugger.log(['loaded cita',aux_cita]);
                //this.openProgreso(aux_cita);
            }
        }, function (response) {
            loader.dismiss();
        });
        // }
    };
    HeaderComponent.prototype.openProgreso = function (cita) {
        var Modal = this.modalCtrl.create("ProgresocitaModalPage", { cita: cita }, { cssClass: "smallModal progressModal" });
        Modal.onDidDismiss(function (data) {
            //this.userData.cargarCitas();
        });
        Modal.present({});
    };
    HeaderComponent.prototype.goHome = function () {
        this.pagename = this.navCtrl.getActive().name;
        if (this.pagename.localeCompare('HomePage') !== 0) {
            //Debugger.log(['implying this is not Home page']);
            this.navCtrl.setRoot("HomePage");
        }
    };
    HeaderComponent.prototype.presentNotifications = function (myEvent) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.notiMan.cargarNotificaciones().toPromise()];
                    case 1:
                        _a.sent();
                        popover = this.popoverCtrl.create("NotificationPopPage", undefined, { cssClass: "notiPopover" });
                        popover.present({
                            ev: myEvent
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'header',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\components\header\header.html"*/'<!-- Generated template for the HeaderComponent component -->\n\n\n\n  <!--<ion-header >\n\n    <ion-navbar color="primary">\n\n      <ion-title (click)="goHome()" ><img src="assets/imgs/logo-blanco.svg" class="header_logo_drap"/></ion-title>\n\n      <ion-buttons right class="menu_buttons" *ngIf="this.userData.checkUserFeature([this.userData.TIPO_ANY],[this.userData.PLAN_ANY],false);">\n\n      <button ion-button>Alertas <span>10</span></button>\n\n      <button ion-button>{{this.userData.userData.name}} <img src="assets/imgs/flecha-blanca.svg" class="header_flecha_blanca" /></button>\n\n      <button ion-button class="header_showdate">{{this.userData.showhour}}</button>\n\n      </ion-buttons>\n\n      <button ion-button end menuToggle >\n\n            <img src="assets/imgs/menu.svg" class="header_menu_drap" />\n\n      </button>\n\n    </ion-navbar>\n\n  </ion-header>-->\n\n\n\n  <ion-header>\n\n    <div class="drap_global_header">\n\n        <img  (click)="goHome()"  src="assets/imgs/logo-blanco.svg" class="header_logo_drap"/>\n\n        <div class="menu_buttons">\n\n          <div class="header_span header_span_name open_nlist1" (click)="presentNotifications($event)" >{{this.userData.userData.name}}\n\n            <!--<nlist [nlistn]="1" [openClass]="\'open_nlist1\'"></nlist>-->\n\n          </div>\n\n          <!--<div class="header_span header_showdate">{{this.userData.showhour}}</div>-->\n\n          <div menuToggle><img src="assets/imgs/menu.svg" class="header_menu_drap" /></div>\n\n        </div>\n\n        </div>\n\n    </ion-header>\n\n  \n\n\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\components\header\header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_notifications_data_notifications_data__["a" /* NotificationsDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_notifications_manager_notifications_manager__["a" /* NotificationsManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_permissions_permissions__["a" /* PermissionsProvider */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        console.log('Hello FooterComponent Component');
        this.text = 'Hello World';
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'footer',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\components\footer\footer.html"*/'<!-- Generated template for the FooterComponent component -->\n\n<div class="footer">\n\n  <span class="footerSpan">F.A.Q.</span> -\n\n  <span class="footerSpan">Términos y Condiciones</span> -\n\n  <span class="footerSpan">Aviso de Privacidad </span> -\n\n  <span class="footerSpan">Contacto</span>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\components\footer\footer.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedbgDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the RedbgDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var RedbgDirective = /** @class */ (function () {
    function RedbgDirective() {
        console.log('Hello RedbgDirective Directive');
    }
    RedbgDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[redbg]' // Attribute selector
        }),
        __metadata("design:paramtypes", [])
    ], RedbgDirective);
    return RedbgDirective;
}());

//# sourceMappingURL=redbg.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_debugger__ = __webpack_require__(35);
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
 * Generated class for the NlistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var NlistComponent = /** @class */ (function () {
    function NlistComponent(userData, eRef) {
        this.userData = userData;
        this.eRef = eRef;
        this._nlistn = 0;
        this._openClass = '';
        this.show = false;
    }
    Object.defineProperty(NlistComponent.prototype, "nlistn", {
        get: function () {
            return this._nlistn;
        },
        set: function (n) {
            this._nlistn = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NlistComponent.prototype, "openClass", {
        get: function () {
            return this._openClass;
        },
        set: function (cssclass) {
            this._openClass = cssclass;
        },
        enumerable: true,
        configurable: true
    });
    NlistComponent.prototype.clickout = function (event) {
        if (event.target.className.includes(this.openClass)) {
            this.open();
        }
        else {
            if (!this.eRef.nativeElement.contains(event.target)) {
                this.close();
            }
        }
    };
    NlistComponent.prototype.open = function () {
        if (!this.show) {
            this.show = true;
        }
    };
    NlistComponent.prototype.close = function () {
        if (this.show) {
            this.show = false;
        }
    };
    NlistComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    NlistComponent.prototype.notificationClick = function (notification) {
        __WEBPACK_IMPORTED_MODULE_2__providers_user_data_debugger__["a" /* Debugger */].log(['notification', notification]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], NlistComponent.prototype, "nlistn", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NlistComponent.prototype, "openClass", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NlistComponent.prototype, "clickout", null);
    NlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'nlist',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\components\nlist\nlist.html"*/'<span>\n\n<div class="pop_body" *ngIf="this.show" >\n\n    <div *ngFor="let notification of this.userData.notificaciones" class="notification_item"  (click)="notificationClick(notification)">\n\n        {{notification.text}}\n\n</div>\n\n</div>\n\n</span>'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\components\nlist\nlist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], NlistComponent);
    return NlistComponent;
}());

//# sourceMappingURL=nlist.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Doctores; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debugger__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__citas_data_citas_data__ = __webpack_require__(29);



var Doctores = /** @class */ (function () {
    function Doctores() {
        this.Uid = null;
        this.citaActiva = null; //cita activa
        this.nextCita = null; //cita activa
        this.servicios = new Array();
        this.name = '';
        this.field_alias = '';
        this.playerID = '';
        this.citas = new Array();
    }
    Doctores.prototype.setCitaActiva = function (cita) {
        var ret = false;
        if (!this.citaActiva) {
            this.citaActiva = cita;
            ret = true;
        }
        return ret;
    };
    Doctores.prototype.setServicios = function (input_servicios) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(["setting servicios on doctor " + this.Uid]);
        var ret = true;
        //let aux_serv_arr = new Array();
        input_servicios.forEach(function (serv) {
            __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(["iterating service", serv]);
            if (_this.servicios.indexOf(serv) === -1 && Number(serv.Uid) === Number(_this.Uid)) {
                _this.servicios.push(serv);
                __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(["servicio nuevo agregado a doc " + _this.Uid, serv]);
            }
        });
        return ret;
    };
    Doctores.prototype.removeServicioFromLists = function (servicio) {
        var index = this.servicios.indexOf(servicio);
        if (index !== -1)
            this.servicios.splice(index, 1);
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(["removing servicio " + servicio.Nid + " from list", this.servicios]);
    };
    Doctores.prototype.removeCitaFromLists = function (cita) {
        var ArrOfArrs = [
            this.citas,
        ];
        ArrOfArrs.forEach(function (arr) {
            __WEBPACK_IMPORTED_MODULE_0__user_data__["a" /* UserDataProvider */].removeElementFromArray(cita, arr);
        });
        if (this.citaActiva && Number(this.citaActiva.Nid) === Number(cita.Nid)) {
            this.citaActiva = null;
        }
    };
    //Actualizar citas desde afuera introduciendo los resultados de la busqueda de todas las citas.
    /**
     * Actualizar las citas para este doctor, citas_input es un listado del filtrado de todas las citas, este metodo filtra las citas que son
     * para este doctor asi que no es necesario preocuparse por filtrarlas para este doctor en especifico.
     *
     * este metodo obtiene:
     *     cita proxima
     *     cita activa
     *     citas pendientes
     *     citas por cobrar
     *     citas para hoy
     *     citas pendientes
     *     todas las citas
     * **/
    Doctores.prototype.setCitas = function (citas_input) {
        var _this = this;
        console.log("----------------------------------empezar cita " + citas_input);
        this.citas = new Array();
        var aux_citasparahoy = 0;
        var aux_nextCita = null;
        var smallestUntilMs = null;
        citas_input.forEach(function (cita) {
            if (Number(cita.data.field_cita_doctor.und[0]) === Number(_this.Uid)) {
                //console.log("encontro cita propia");
                _this.citas.push(cita);
                cita.getUntilMs();
                if (cita.checkState(__WEBPACK_IMPORTED_MODULE_2__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_PENDIENTE) || cita.checkState(__WEBPACK_IMPORTED_MODULE_2__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_CONFIRMADA)) {
                    aux_citasparahoy++;
                    if (cita.untilMs < 0) {
                        cita.retrasada = true;
                    } //si se paso la fecha ponerla como retrasada. es decir si el numero es negativo, menor a 0
                    else if (smallestUntilMs === null || cita.untilMs < smallestUntilMs) {
                        //si no hay mas pequeño    O  si la cita es mas pequeño
                        aux_nextCita = cita; //esta cita es la mas cercana
                        smallestUntilMs = cita.untilMs;
                    }
                }
                if (cita.checkState(__WEBPACK_IMPORTED_MODULE_2__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_ACTIVA)) {
                    console.log("cita activa.", _this.citaActiva);
                    if (!_this.citaActiva) {
                        console.log("agregando cita");
                        _this.citaActiva = cita;
                        console.log("cita activa agregada", _this.citaActiva);
                    }
                    else {
                        /* if(! ( Number(this.citaActiva.Nid) === Number(cita.Nid) ) ){
                         cita.data.field_estado.und[0].value = UserDataProvider.STATE_PENDIENTE;
                         }*/
                    }
                }
            }
            _this.nextCita = aux_nextCita;
        });
        console.log("doctor got itself:", this);
    };
    Doctores.prototype.checkUid = function (Uid) {
        var ret = false;
        if (Number(this.Uid) === Number(Uid)) {
            ret = true;
        }
        return ret;
    };
    return Doctores;
}());

//# sourceMappingURL=doctores.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_cordova_available_cordova_available__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_websocket_service_websocket_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_citas_manager_citas_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_planes_data_planes_data__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_onesignal_manager_onesignal_manager__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_doctores_manager_doctores_manager__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_ws_messenger_ws_messenger__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_servicios_manager_servicios_manager__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_subscription_manager_subscription_manager__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_permissions_permissions__ = __webpack_require__(67);
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















//import { Debugger } from '../providers/user-data/debugger';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, userData, loadingCtrl, modalCtrl, ica, wsp, citasManager, planes, OneMan, docMan, wsMessenger, serviciosManager, subscriptionManager, perm) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.userData = userData;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.ica = ica;
        this.wsp = wsp;
        this.citasManager = citasManager;
        this.planes = planes;
        this.OneMan = OneMan;
        this.docMan = docMan;
        this.wsMessenger = wsMessenger;
        this.serviciosManager = serviciosManager;
        this.subscriptionManager = subscriptionManager;
        this.perm = perm;
        this.rootPage = "LoginPage";
        this.Home = 'HomePage';
        this.startdate = new Date().getTime();
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: "HomePage" },
            { title: 'Citas', component: "CitasPage" },
            { title: 'Servicios', component: "ServiciosPage" },
            { title: 'Usuarios', component: "UsuariosPage" },
            { title: 'Reportes', component: "ReportesPage" },
            { title: 'Login', component: "LoginPage" }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.splashScreen.hide();
        this.rootPage = 'LoginPage';
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.OneMan.init();
            if (_this.ica.isCordovaAvailable)
                _this.splashScreen.hide();
            var loading = _this.loadingCtrl.create({ content: 'Bienvenido' });
            loading.present();
            _this.initLoad().then(function () {
                if (_this.userData.userData.uid !== 0)
                    _this.rootPage = 'HomePage';
                loading.dismiss();
                _this.loaddate = new Date().getTime();
                _this.wsMessenger.generateMessage([76], 'loadedReport', "" + _this.userData.userData.uid, _this.loaddate - _this.startdate, true);
            });
        });
    };
    //loads token and planes syncronous
    MyApp.prototype.initLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token_data, planes_data, connec_Data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userData.requestToken().toPromise()];
                    case 1:
                        token_data = _a.sent();
                        if (token_data)
                            this.userData.sessionData.token = token_data['token'];
                        return [4 /*yield*/, this.planes.requestPlanes().toPromise()];
                    case 2:
                        planes_data = _a.sent();
                        if (planes_data)
                            this.planes.setPlanes(planes_data);
                        return [4 /*yield*/, this.userData.checkConnect().toPromise()];
                    case 3:
                        connec_Data = _a.sent();
                        if (!(connec_Data && connec_Data['user']['uid'] != 0)) return [3 /*break*/, 9];
                        //if logged in set session and userdata
                        this.userData.setSessionData(connec_Data);
                        return [4 /*yield*/, this.userData.loginSetData(connec_Data['user']['uid'])];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.subscriptionManager.loadSubscription()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.docMan.initDoctoresUids()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.subscriptionManager.loadDoctorsSubscriptions()];
                    case 7:
                        _a.sent();
                        console.log('subscription initload is', this.subscriptionManager.subsData.subscription);
                        console.log('docs before filter active', JSON.stringify(this.docMan.docData.doctoresIDs));
                        this.docMan.filterActiveDoctors();
                        console.log('docs after filter active', JSON.stringify(this.docMan.docData.doctoresIDs));
                        return [4 /*yield*/, this.citasManager.requestCitas().toPromise()];
                    case 8:
                        _a.sent();
                        this.serviciosManager.loadServicios();
                        console.log(this.citasManager.citasData.citas);
                        console.log('docs end initload', JSON.stringify(this.docMan.docData.doctoresIDs));
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openHomePage = function () { this.nav.setRoot(this.Home); };
    MyApp.prototype.openCitasPage = function () { this.nav.setRoot("CitasPage"); };
    MyApp.prototype.openServiciosPage = function () { this.nav.setRoot("ServiciosPage"); };
    MyApp.prototype.openUsuariosPage = function () { this.nav.setRoot("UsuariosPage"); };
    MyApp.prototype.openReportesPage = function () { this.nav.setRoot("ReportesPage"); };
    MyApp.prototype.openFacturacionPage = function () { this.nav.setRoot("FacturacionPage"); };
    MyApp.prototype.openRegister = function () {
        //console.log("open Register");
        var Modal = this.modalCtrl.create("RegisterModalPage", undefined, { cssClass: "bigModal" });
        Modal.present({});
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\app\app.html"*/'<ion-menu side="right" [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n    \n\n      <!--<button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>-->\n\n     \n\n      <button *ngIf="perm.checkUserFeature([userData.TIPO_ANY],[userData.PLAN_ANY])" menuClose ion-item  (click)="openHomePage()">\n\n          Home\n\n      </button>\n\n      <button *ngIf="perm.checkUserFeature([userData.TIPO_ANY],[userData.PLAN_ANY])" menuClose ion-item  (click)="openCitasPage()">\n\n          Citas\n\n      </button>\n\n      <button *ngIf="perm.checkUserFeature([userData.TIPO_DOCTOR],[userData.PLAN_ANY])" menuClose ion-item  (click)="openServiciosPage()">\n\n          Servicios\n\n      </button>\n\n      <button  *ngIf="perm.checkUserFeature([userData.TIPO_DOCTOR],[userData.PLAN_ANY])" menuClose ion-item  (click)="openUsuariosPage()">\n\n          Usuarios\n\n      </button>\n\n      <button *ngIf="perm.checkUserFeature([userData.TIPO_ANY],[userData.PLAN_ANY])" menuClose ion-item  (click)="openReportesPage()">\n\n          Reportes\n\n      </button>\n\n      <button *ngIf="perm.checkUserFeature([userData.TIPO_DOCTOR],[userData.PLAN_ANY])" menuClose ion-item  (click)="openRegister()">\n\n          Mis Datos\n\n      </button>\n\n      <button menuClose ion-item>\n\n          Tutorial\n\n        </button>\n\n      <button menuClose ion-item  (click)="userData.logout()">\n\n        Logout\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_cordova_available_cordova_available__["a" /* CordovaAvailableProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_websocket_service_websocket_service__["a" /* WebsocketServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_citas_manager_citas_manager__["a" /* CitasManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_planes_data_planes_data__["a" /* PlanesDataProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_onesignal_manager_onesignal_manager__["a" /* OnesignalManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_doctores_manager_doctores_manager__["a" /* DoctoresManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_ws_messenger_ws_messenger__["a" /* WsMessengerProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_servicios_manager_servicios_manager__["a" /* ServiciosManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_subscription_manager_subscription_manager__["a" /* SubscriptionManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_permissions_permissions__["a" /* PermissionsProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data_user_data__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(userData) {
        this.userData = userData;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        req = req.clone({ setHeaders: this.getAuthHeaders() });
        return next.handle(req).do(function (evt) {
            //console.log('AuthInterceptor handling event',evt);
        });
    };
    AuthInterceptor.prototype.getAuthHeaders = function () {
        var ret = { 'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'no-cache, no-store'
        };
        if (this.userData.sessionData.token)
            ret['X-CSRF-Token'] = "" + this.userData.sessionData.token;
        if (this.userData.sessionData.sessid && this.userData.sessionData.session_name)
            ret['Authentication'] = this.userData.sessionData.session_name + "=" + this.userData.sessionData.sessid;
        return ret;
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_data_user_data__["a" /* UserDataProvider */]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

//# sourceMappingURL=auth-interceptor.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeoutInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_timeout__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TimeoutInterceptor = /** @class */ (function () {
    function TimeoutInterceptor() {
        this.defaultTimeout = 500000;
    }
    TimeoutInterceptor.prototype.intercept = function (req, next) {
        //console.log('TimeoutInterceptor intercepts');
        var timeout = Number(req.headers.get('timeout')) || this.defaultTimeout;
        return next.handle(req).timeout(timeout);
    };
    TimeoutInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])()
    ], TimeoutInterceptor);
    return TimeoutInterceptor;
}());

//# sourceMappingURL=timeout-interceptor.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Debugger; });
var Debugger = /** @class */ (function () {
    function Debugger() {
    }
    Debugger.log = function (show, debuging_override) {
        if (debuging_override === void 0) { debuging_override = null; }
        if (Debugger.debugForce !== Debugger.DEBUT_FORCE_NOTHING) {
            if (Debugger.debugForce === Debugger.DEBUT_FORCE_YES) {
                console.log.apply(console, show);
            }
            if (Debugger.debugForce === Debugger.DEBUT_FORCE_NO) {
                return false;
            }
        }
        if (debuging_override === false) {
            return false;
        }
        if (debuging_override === true || Debugger.debug === true) {
            console.log.apply(console, show);
        }
    };
    Debugger.debug = true;
    Debugger.DEBUT_FORCE_YES = 1;
    Debugger.DEBUT_FORCE_NO = 0;
    Debugger.DEBUT_FORCE_NOTHING = -1;
    Debugger.debugForce = Debugger.DEBUT_FORCE_NOTHING;
    return Debugger;
}());

//# sourceMappingURL=debugger.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrupalNodeManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_url_base_url__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DrupalNodeManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DrupalNodeManagerProvider = /** @class */ (function () {
    function DrupalNodeManagerProvider(http, bu) {
        this.http = http;
        this.bu = bu;
    }
    DrupalNodeManagerProvider.prototype.generateNewNode = function (newNode) {
        var body = JSON.stringify(newNode);
        var url = this.bu.endpointUrl + "node/";
        return this.http.post(url, body).share();
    };
    DrupalNodeManagerProvider.prototype.updateNode = function (node) {
        var body = JSON.stringify(node);
        var url = this.bu.endpointUrl + "node/" + node.Nid;
        return this.http.put(url, body).share();
    };
    DrupalNodeManagerProvider.prototype.deleteNode = function (node) {
        var url = this.bu.endpointUrl + "node/" + node.Nid;
        return this.http.delete(url).share();
    };
    DrupalNodeManagerProvider.prototype.getNode = function (node) {
        var url = this.bu.endpointUrl + "node/" + node.Nid;
        return this.http.get(url).share();
    };
    DrupalNodeManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__base_url_base_url__["a" /* BaseUrlProvider */]])
    ], DrupalNodeManagerProvider);
    return DrupalNodeManagerProvider;
}());

//# sourceMappingURL=drupal-node-manager.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitasManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date_date__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_url_base_url__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__citas_data_citas_data__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_data_citas__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__doctores_data_doctores_data__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__drupal_node_manager_drupal_node_manager__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__drupal_user_manager_drupal_user_manager__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CitasManagerProvider = /** @class */ (function () {
    function CitasManagerProvider(http, datep, baseurl, citasData, doctores, nodeMan, userMan) {
        this.http = http;
        this.datep = datep;
        this.baseurl = baseurl;
        this.citasData = citasData;
        this.doctores = doctores;
        this.nodeMan = nodeMan;
        this.userMan = userMan;
        console.log('Hello CitasManagerProvider Provider');
    }
    CitasManagerProvider.prototype.requestCitas = function () {
        var _this = this;
        var observable = this.getCitasObservable().share();
        observable.subscribe(function (val) { console.log('obtained citas', val); _this.setCitas(val); }, function (response) { console.log('error requestCitas', response); });
        return observable;
    };
    CitasManagerProvider.prototype.getCitasObservable = function (from, to, doctores, cajas, recepciones) {
        if (from === void 0) { from = this.datep.nowStart; }
        if (to === void 0) { to = this.datep.nowEnd; }
        if (doctores === void 0) { doctores = this.doctores.doctoresIDs; }
        if (cajas === void 0) { cajas = null; }
        if (recepciones === void 0) { recepciones = null; }
        console.log('from', new Date(from));
        console.log('to', new Date(to));
        console.log('is', new Date(1534605765000));
        console.log('1534605765000');
        console.log('from', from);
        console.log('to', to);
        console.log('doctores', doctores);
        console.log('cajas', cajas);
        console.log('recepciones', recepciones);
        var filterString = "?args[0]=" + (doctores && doctores.length > 0 ? doctores.join() : '0') + "&args[1]=" + (cajas && cajas.length > 0 ? cajas.join() : 'all') + "&args[2]=" + (recepciones && recepciones.length > 0 ? recepciones.join() : 'all') + "&args[3]=" + from + "--" + to;
        //let filterString = `?args[0]=${doctores ? doctores.join() : 'all'}&args[1]=${cajas ? cajas.join() : 'all'}&args[2]=${recepciones ? recepciones.join() : 'all'}`;
        var url = this.baseurl.endpointUrl + "rest_citas.json" + filterString;
        console.log('url getting citas', url);
        return this.http.get(url);
    };
    CitasManagerProvider.prototype.getCitaObservable = function (Nid) {
        var url = this.baseurl.endpointUrl + "rest_citas.json?args[0]=all&args[1]=all&args[2]=all&args[3]=all&args[4]=" + Nid;
        return this.http.get(url);
    };
    CitasManagerProvider.prototype.setCitas = function (val) {
        console.log('citas response raw value', val);
        for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
            var cita = val_1[_i];
            this.generateCita(cita);
        }
        this.citasData.triggerSubject();
    };
    CitasManagerProvider.prototype.generateCita = function (data) {
        var aux_cita = new __WEBPACK_IMPORTED_MODULE_6__user_data_citas__["a" /* Citas */]();
        aux_cita.setData(data);
        this.citasData.addCita(aux_cita, false);
    };
    CitasManagerProvider.prototype.generateCitaFullData = function (data) {
        var aux_cita = new __WEBPACK_IMPORTED_MODULE_6__user_data_citas__["a" /* Citas */]();
        aux_cita.data = data;
        aux_cita.processData();
        console.log('fulldata generated ', aux_cita);
        this.citasData.addCita(aux_cita, false);
        return aux_cita;
    };
    CitasManagerProvider.prototype.deleteCitaFullData = function (data) {
        console.log('deleting data', data);
        var aux_cita = new __WEBPACK_IMPORTED_MODULE_6__user_data_citas__["a" /* Citas */]();
        aux_cita.Nid = data.Nid;
        this.citasData.removeCita(aux_cita);
        return aux_cita;
    };
    CitasManagerProvider.prototype.updateCitaNid = function (Nid) {
        var _this = this;
        var obs = this.getCitaObservable(Nid).share();
        obs.subscribe(function (val) { _this.setCitas(val); });
        return obs;
    };
    //CITAS METHODS
    CitasManagerProvider.prototype.generateNewCita = function (newCita) { return this.nodeMan.generateNewNode(newCita); };
    CitasManagerProvider.prototype.updateCita = function (cita) { return this.nodeMan.updateNode(cita); };
    CitasManagerProvider.prototype.deleteCita = function (cita) { return this.nodeMan.deleteNode(cita); };
    CitasManagerProvider.prototype.updateCitaState = function (cita, state) {
        cita.data.field_estado.und[0].value = state;
        if (Number(state) === Number(__WEBPACK_IMPORTED_MODULE_5__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_ACTIVA)) {
            cita.setHoraInicio();
        }
        if (Number(state) === Number(__WEBPACK_IMPORTED_MODULE_5__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_COBRO)) {
            cita.setHoraFin();
        }
        //console.log("tryna update cita:",cita.data);
        return this.updateCita(cita.data).share();
    };
    CitasManagerProvider.prototype.getDoctorOFCita = function (Cita) {
        var ret = null;
        var uid = Cita.data.field_cita_doctor.und[0];
        ret = this.doctores.getDoctorByUid(uid);
        return ret;
    };
    CitasManagerProvider.prototype.isNextCita = function (cita) {
        var ret = false;
        var aux_doctor = this.getDoctorOFCita(cita);
        if (aux_doctor.nextCita && (Number(aux_doctor.nextCita.Nid) === Number(cita.Nid))) {
            ret = true;
        }
        return ret;
    };
    CitasManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__date_date__["a" /* DateProvider */],
            __WEBPACK_IMPORTED_MODULE_4__base_url_base_url__["a" /* BaseUrlProvider */],
            __WEBPACK_IMPORTED_MODULE_5__citas_data_citas_data__["a" /* CitasDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_8__drupal_node_manager_drupal_node_manager__["a" /* DrupalNodeManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_9__drupal_user_manager_drupal_user_manager__["a" /* DrupalUserManagerProvider */]])
    ], CitasManagerProvider);
    return CitasManagerProvider;
}());

//# sourceMappingURL=citas-manager.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrupalUserManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_url_base_url__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DrupalUserManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DrupalUserManagerProvider = /** @class */ (function () {
    function DrupalUserManagerProvider(http, bu) {
        this.http = http;
        this.bu = bu;
    }
    DrupalUserManagerProvider.prototype.requestUsers = function (doctores, codigo, ids) {
        if (codigo === void 0) { codigo = null; }
        if (ids === void 0) { ids = null; }
        var doctorfilter = "?args[0]=all";
        var codigofilter = "&args[1]=all";
        var ids_filter = "&args[2]=all";
        var oneprotection = false;
        if (doctores && doctores.length > 0) {
            doctorfilter = "?args[0]=" + doctores.join();
            oneprotection = true;
        }
        if (codigo) {
            codigofilter = "&args[1]=" + codigo;
            oneprotection = true;
        }
        if (ids && ids.length > 0) {
            ids_filter = "&args[2]=" + ids.join(',');
            oneprotection = true;
        }
        if (!oneprotection)
            doctorfilter = "?args[0]=-1"; //esto evita que alguna tonteria te mande todos los usuarios del sistema, devolviendo nada
        var url = this.bu.endpointUrl + "rest_users" + doctorfilter + codigofilter + ids_filter;
        return this.http.get(url).share();
    };
    DrupalUserManagerProvider.prototype.generateNewUserd = function (userd) {
        var body = JSON.stringify(userd);
        var url = this.bu.endpointUrl + "user/";
        return this.http.post(url, body).share();
    };
    DrupalUserManagerProvider.prototype.updateUserd = function (userd) {
        var body = JSON.stringify(userd);
        var url = this.bu.endpointUrl + "user/" + userd.uid;
        return this.http.put(url, body).share();
    };
    DrupalUserManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__base_url_base_url__["a" /* BaseUrlProvider */]])
    ], DrupalUserManagerProvider);
    return DrupalUserManagerProvider;
}());

//# sourceMappingURL=drupal-user-manager.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the SubscriptionDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SubscriptionDataProvider = /** @class */ (function () {
    function SubscriptionDataProvider() {
        this.subscription = null;
        this.nid = null; //nid de la subscripcion
        this.uid = null; //uid del doctor
        this.plan = null; //objeto de plan completo
        this.field_plan_sus = null; //nid del plan
        this.field_subusuarios = null; //array of sub acound uids
        this.field_active = false;
    }
    SubscriptionDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SubscriptionDataProvider);
    return SubscriptionDataProvider;
}());

//# sourceMappingURL=subscription-data.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateProvider = /** @class */ (function () {
    function DateProvider() {
    }
    DateProvider_1 = DateProvider;
    Object.defineProperty(DateProvider.prototype, "now", {
        get: function () { return new Date(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateProvider.prototype, "nowStart", {
        get: function () { return this.now.setHours(0, 0, 0, 0); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateProvider.prototype, "nowEnd", {
        get: function () { return this.now.setHours(23, 59, 59, 999); },
        enumerable: true,
        configurable: true
    });
    DateProvider.getUntil = function (Since) {
        return Since.getTime() - (new Date().getTime());
    };
    DateProvider.formatDateBinaryNumber = function (num) {
        return (num < 10 ? '0' : '') + num;
    };
    DateProvider.getDateDifText = function (numberdatedif) {
        var ret = "00";
        var aux_ms = Math.abs(numberdatedif);
        if (aux_ms < (60 * 1000)) {
            ret = DateProvider_1.formatDateBinaryNumber(Math.floor(aux_ms / 1000)) + " segundos";
        }
        else if (aux_ms < (60 * 60 * 1000)) {
            ret = DateProvider_1.formatDateBinaryNumber(Math.floor(aux_ms / (1000 * 60))) + " Minutos";
        }
        else {
            var aux_hours = Math.floor(aux_ms / (1000 * 60 * 60));
            aux_ms -= aux_hours * (1000 * 60 * 60);
            var aux_minutes = Math.floor(aux_ms / (1000 * 60));
            aux_ms -= aux_minutes * (1000 * 60);
            var aux_seconds = Math.floor(aux_ms / (1000));
            ret = DateProvider_1.formatDateBinaryNumber(aux_hours) + ":" + DateProvider_1.formatDateBinaryNumber(aux_minutes) + ":" + DateProvider_1.formatDateBinaryNumber(aux_seconds) + " Hrs";
        }
        if (numberdatedif < 0)
            ret = "hace " + ret;
        return ret;
    };
    DateProvider = DateProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DateProvider);
    return DateProvider;
    var DateProvider_1;
}());

//# sourceMappingURL=date.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data_Notification__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_data_notifications_data__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_url_base_url__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__drupal_node_manager_drupal_node_manager__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the NotificationsManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NotificationsManagerProvider = /** @class */ (function () {
    function NotificationsManagerProvider(http, notificationData, userData, bu, nodeMan) {
        this.http = http;
        this.notificationData = notificationData;
        this.userData = userData;
        this.bu = bu;
        this.nodeMan = nodeMan;
    }
    /**
    * NOTIFICACIONES
    * **/
    NotificationsManagerProvider.prototype.cargarNotificaciones = function () {
        var _this = this;
        var observer = this.getNotificationObservable().share();
        observer.subscribe(function (val) { _this.setNotifications(val); });
        return observer;
    };
    NotificationsManagerProvider.prototype.getNotificationObservable = function () {
        var uidFilter = "?args[0]=" + this.userData.userData.uid;
        var url = this.bu.endpointUrl + "/rest_notifications.json" + uidFilter;
        var observer = this.http.get(url);
        return observer;
    };
    NotificationsManagerProvider.prototype.setNotifications = function (input_val) {
        var _loop_1 = function (noti) {
            var found = false;
            this_1.notificationData.notificaciones.forEach(function (snoti) {
                if (Number(snoti.Nid) === Number(noti.nid)) {
                    found = true;
                    snoti.setData(noti);
                }
            });
            if (!found) {
                var aux_notification = new __WEBPACK_IMPORTED_MODULE_2__user_data_Notification__["a" /* Notification_c */]();
                aux_notification.setData(noti);
                this_1.notificationData.notificaciones.push(aux_notification);
            }
        };
        var this_1 = this;
        for (var _i = 0, input_val_1 = input_val; _i < input_val_1.length; _i++) {
            var noti = input_val_1[_i];
            _loop_1(noti);
        }
    };
    NotificationsManagerProvider.prototype.operateNotification = function (noti) {
        this.notificationData.Subject.next(noti.action);
    };
    NotificationsManagerProvider.prototype.operatePushNotification = function (action) {
        this.notificationData.Subject.next(action);
    };
    NotificationsManagerProvider.prototype.generateNotification = function (forUid, text, action) {
        var newNotification = new __WEBPACK_IMPORTED_MODULE_2__user_data_Notification__["a" /* Notification_c */]();
        newNotification.user = forUid;
        newNotification.text = text;
        newNotification.action = action;
        var auxdata = newNotification.getData();
        this.nodeMan.generateNewNode(auxdata).toPromise();
    };
    NotificationsManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__notifications_data_notifications_data__["a" /* NotificationsDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__base_url_base_url__["a" /* BaseUrlProvider */],
            __WEBPACK_IMPORTED_MODULE_6__drupal_node_manager_drupal_node_manager__["a" /* DrupalNodeManagerProvider */]])
    ], NotificationsManagerProvider);
    return NotificationsManagerProvider;
}());

//# sourceMappingURL=notifications-manager.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CordovaAvailableProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CordovaAvailableProvider = /** @class */ (function () {
    function CordovaAvailableProvider(plt) {
        this.plt = plt;
    }
    Object.defineProperty(CordovaAvailableProvider.prototype, "isCordovaAvailable", {
        get: function () {
            var ret = true;
            if (!window.cordova) {
                //alert('This is a native feature. Please use a device');
                ret = false;
            }
            if (this.plt.is('core') || this.plt.is('mobileweb'))
                ret = false;
            return ret;
        },
        enumerable: true,
        configurable: true
    });
    CordovaAvailableProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], CordovaAvailableProvider);
    return CordovaAvailableProvider;
}());

//# sourceMappingURL=cordova-available.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanesDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data_planes__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_url_base_url__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the PlanesDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PlanesDataProvider = /** @class */ (function () {
    function PlanesDataProvider(http, bu) {
        this.http = http;
        this.bu = bu;
        this.planes = new Array(); //planes que ofrece drap.
        this.Setted = false; //true if planes have been loaded already
    }
    PlanesDataProvider.prototype.loadPlanes = function () {
        var _this = this;
        this.requestPlanes().subscribe(function (val) {
            _this.setPlanes(val);
        });
    };
    PlanesDataProvider.prototype.setPlanes = function (input_data) {
        for (var _i = 0, input_data_1 = input_data; _i < input_data_1.length; _i++) {
            var plan_data = input_data_1[_i];
            if (!this.checkForPlanUpdate(plan_data)) {
                var aux_plan = new __WEBPACK_IMPORTED_MODULE_2__user_data_planes__["a" /* planes */]();
                aux_plan.setData(plan_data);
                this.planes.push(aux_plan);
            }
        }
    };
    PlanesDataProvider.prototype.requestPlanes = function () {
        var url = this.bu.endpointUrl + 'rest_planes.json';
        var observable = this.http.get(url);
        return observable.share();
    };
    /**
     * returns true if it updates a plan,
     * returns false if no plan found for this input data nid
     * **/
    PlanesDataProvider.prototype.checkForPlanUpdate = function (input_data) {
        var ret = false;
        this.planes.forEach(function (plan) {
            if (plan.checkNid(input_data.nid)) {
                plan.setData(input_data);
                ret = true;
                return ret;
            }
        });
        return ret;
    };
    PlanesDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__base_url_base_url__["a" /* BaseUrlProvider */]])
    ], PlanesDataProvider);
    return PlanesDataProvider;
}());

//# sourceMappingURL=planes-data.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LoaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoaderProvider = /** @class */ (function () {
    function LoaderProvider(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.loader = null;
        this.loaderActive = false;
    }
    LoaderProvider.prototype.presentLoader = function (content) {
        if (!this.loaderActive) {
            this.loader = this.loadingCtrl.create({ content: content });
            this.loader.present();
            this.loaderActive = true;
        }
    };
    LoaderProvider.prototype.dismissLoader = function () {
        if (this.loaderActive) {
            this.loader.dismiss();
            this.loaderActive = false;
        }
    };
    LoaderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoaderProvider);
    return LoaderProvider;
}());

//# sourceMappingURL=loader.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subscription_data_subscription_data__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PermissionsProvider = /** @class */ (function () {
    function PermissionsProvider(userData, subsData) {
        this.userData = userData;
        this.subsData = subsData;
        console.log('pmp online');
    }
    /**
    * CheckUserFeature resolves if a feature should appear for this user giving the user roles (permision) and the user plan suscriptions (suscriptions)
    * and has been created to simplify the check on features that requiere both.
   */
    PermissionsProvider.prototype.checkUserFeature = function (permision, suscriptions, debug) {
        if (debug === void 0) { debug = false; }
        var ret = false;
        var permisioncheck = false;
        var suscriptionscheck = false;
        if (permision === null || permision === undefined || permision.length === 0) {
            permisioncheck = true;
        }
        else {
            permisioncheck = this.checkUserPermission(permision, debug);
        }
        if (suscriptions === null || suscriptions === undefined || suscriptions.length === 0) {
            suscriptionscheck = true;
        }
        else {
            suscriptionscheck = this.checkUserSuscription(suscriptions, debug);
        }
        if (permisioncheck && suscriptionscheck) {
            ret = true;
        }
        return ret;
    };
    PermissionsProvider.prototype.checkUserPermission = function (permision, debug) {
        if (debug === void 0) { debug = false; }
        var ret = false;
        //checking for ANY
        if (permision.indexOf(__WEBPACK_IMPORTED_MODULE_1__user_data_user_data__["a" /* UserDataProvider */].TIPO_ANY) > -1 && this.userData.userData.field_tipo_de_usuario.und.length > 0) {
            return true;
        }
        //regular check
        for (var i = 0; i < this.userData.userData.field_tipo_de_usuario.und.length; i++) {
            if (permision.indexOf(parseInt(this.userData.userData.field_tipo_de_usuario.und[i].value)) > -1) {
                ret = true;
                break;
            }
        }
        return ret;
    };
    /**
     * la suscripcion debe resultar false si:
     * el usuario no tiene guardado un id de suscripcion en su data, o esta es 0
     * la suscripcion que carga el usuario esta inactiva.
    */
    PermissionsProvider.prototype.checkUserSuscription = function (suscriptions, debug) {
        if (debug === void 0) { debug = false; }
        var ret = false;
        //si la subscripcion no esta activa (expiro, no ha sido pagada etc) retorna false
        //if(Number(this.userData.field_sub_id.und[0]) === Number(0) || this.subscription === null){return false;}
        if (this.subsData.subscription === null) {
            return false;
        }
        if (Number(this.subsData.subscription.field_active) === Number(0)) {
            return false;
        } //if not active returns false also
        // checking for ANY, automatically returns true since we checked for not 0 or null up here
        if (suscriptions.indexOf(__WEBPACK_IMPORTED_MODULE_1__user_data_user_data__["a" /* UserDataProvider */].PLAN_ANY) > -1) {
            return true;
        }
        //regular check
        if (suscriptions.indexOf(this.subsData.subscription.field_plan_sus) > -1) {
            ret = true;
        }
        return ret;
    };
    PermissionsProvider.prototype.checkUserPlanHolder = function () {
        return this.checkUserPermission([__WEBPACK_IMPORTED_MODULE_1__user_data_user_data__["a" /* UserDataProvider */].TIPO_DOCTOR]);
    };
    PermissionsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__subscription_data_subscription_data__["a" /* SubscriptionDataProvider */]])
    ], PermissionsProvider);
    return PermissionsProvider;
}());

//# sourceMappingURL=permissions.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiciosManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drupal_node_manager_drupal_node_manager__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctores_data_doctores_data__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_data_servicios__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_url_base_url__ = __webpack_require__(21);
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






/*
  Generated class for the ServiciosManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiciosManagerProvider = /** @class */ (function () {
    function ServiciosManagerProvider(http, nodeMan, docData, bu) {
        this.http = http;
        this.nodeMan = nodeMan;
        this.docData = docData;
        this.bu = bu;
        this.servicios = new Array();
        console.log('Hello ServiciosManagerProvider Provider');
    }
    ServiciosManagerProvider.prototype.loadServicios = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var servicios_data, _i, servicios_data_1, servicio_data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.docData.doctoresIDs);
                        return [4 /*yield*/, this.requestServiciosDoctors(this.docData.doctoresIDs).toPromise()];
                    case 1:
                        servicios_data = _a.sent();
                        for (_i = 0, servicios_data_1 = servicios_data; _i < servicios_data_1.length; _i++) {
                            servicio_data = servicios_data_1[_i];
                            this.addServicio(servicio_data);
                        }
                        this.docData.doctores.forEach(function (doc) { doc.setServicios(_this.servicios); });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * uids:number[] son los uids de los usuarios autores de los servicios que se desea filtrar
    **/
    ServiciosManagerProvider.prototype.requestServiciosDoctors = function (uids) {
        console.log('requesting servicios', uids);
        var url = this.bu.endpointUrl + "rest_servicios?args[0]=" + (uids.length > 0 ? uids.join() : "all");
        var observer = this.http.get(url).share();
        return observer;
    };
    ServiciosManagerProvider.prototype.checkForUpdate = function (servicio_data) {
        var ret = false;
        var exists = this.servicios.filter(function (servicios) { return (Number(servicios.Nid) === Number(servicio_data['Nid'])); });
        console.log('servicio to update', servicio_data);
        if (exists.length > 0) {
            exists[0].setData(servicio_data);
            ret = true;
        }
        console.log('servicios after', this.servicios);
        return ret;
    };
    ServiciosManagerProvider.prototype.addServicio = function (servicio_data) {
        if (!this.checkForUpdate(servicio_data)) {
            var aux_serv = new __WEBPACK_IMPORTED_MODULE_4__user_data_servicios__["a" /* servicios */]();
            aux_serv.setData(servicio_data);
            this.servicios.push(aux_serv);
        }
    };
    ServiciosManagerProvider.prototype.removeServicio = function (Nid) {
    };
    ServiciosManagerProvider.prototype.removeServicioFromLists = function (servicio) {
        var index = this.servicios.indexOf(servicio);
        if (index !== -1)
            this.servicios.splice(index, 1);
        this.docData.doctores.forEach(function (doc) {
            doc.removeServicioFromLists(servicio);
        });
    };
    //Service Methods
    ServiciosManagerProvider.prototype.generateNewService = function (newService) { return this.nodeMan.generateNewNode(newService); };
    ServiciosManagerProvider.prototype.updateService = function (service) { return this.nodeMan.updateNode(service); };
    ServiciosManagerProvider.prototype.deleteService = function (service) { return this.nodeMan.deleteNode(service); };
    ServiciosManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__drupal_node_manager_drupal_node_manager__["a" /* DrupalNodeManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__base_url_base_url__["a" /* BaseUrlProvider */]])
    ], ServiciosManagerProvider);
    return ServiciosManagerProvider;
}());

//# sourceMappingURL=servicios-manager.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportesDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_data_reportes__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ReportesDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ReportesDataProvider = /** @class */ (function () {
    function ReportesDataProvider() {
        this.reportes = new Array();
        this.todayReport = null;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        console.log('Hello ReportesDataProvider Provider');
    }
    Object.defineProperty(ReportesDataProvider.prototype, "isSetTodayReport", {
        get: function () {
            return (this.todayReport !== null && this.todayReport.nid !== null);
        },
        enumerable: true,
        configurable: true
    });
    ReportesDataProvider.prototype.addReporte = function (input_data, today, call) {
        if (today === void 0) { today = false; }
        if (call === void 0) { call = false; }
        console.log('adding reporte', input_data);
        if (!this.checkForUpdate(input_data)) {
            this.addNewReporte(input_data, today);
        }
        if (call)
            this.subject.next(this.reportes);
        console.log('generatedReport', input_data, this.reportes);
    };
    ReportesDataProvider.prototype.removeReporte = function (reporte, call) {
        if (call === void 0) { call = true; }
        this.reportes = this.reportes.filter(function (reportes) { return reportes.nid !== reporte.nid; });
        if (call)
            this.subject.next(this.reportes);
        console.log('removed cita', reporte, this.reportes);
    };
    ReportesDataProvider.prototype.addNewReporte = function (input_data, today) {
        if (today === void 0) { today = false; }
        var aux_rep = new __WEBPACK_IMPORTED_MODULE_1__user_data_reportes__["a" /* reportes */]();
        aux_rep.setData(input_data);
        if (today)
            this.todayReport = aux_rep;
        else
            this.reportes.push(aux_rep);
    };
    ReportesDataProvider.prototype.checkForUpdate = function (input_data) {
        var ret = false;
        var aux_reportes = this.reportes.filter(function (reportes) { return Number(input_data.nid) === Number(reportes.nid); });
        if (aux_reportes.length > 0) {
            aux_reportes[0].setData(input_data);
            ret = true;
        }
        return ret;
    };
    ReportesDataProvider.prototype.checkTodayReportNid = function (Nid) {
        return Number(this.todayReport.nid) === Number(Nid);
    };
    ReportesDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ReportesDataProvider);
    return ReportesDataProvider;
}());

//# sourceMappingURL=reportes-data.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subscription_data_subscription_data__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_url_base_url__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_data_subscriptions__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__doctores_data_doctores_data__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__planes_data_planes_data__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__drupal_node_manager_drupal_node_manager__ = __webpack_require__(39);
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









/*
  Generated class for the SubscriptionManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SubscriptionManagerProvider = /** @class */ (function () {
    function SubscriptionManagerProvider(http, userData, subsData, docData, planesData, bu, nodeManager) {
        this.http = http;
        this.userData = userData;
        this.subsData = subsData;
        this.docData = docData;
        this.planesData = planesData;
        this.bu = bu;
        this.nodeManager = nodeManager;
        this.doc_subscriptions = new Array();
    }
    SubscriptionManagerProvider.prototype.loadSubscription = function (nid) {
        if (nid === void 0) { nid = null; }
        return __awaiter(this, void 0, void 0, function () {
            var sus_data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestSubscription().toPromise()];
                    case 1:
                        sus_data = _a.sent();
                        if (sus_data && sus_data[0]) {
                            console.log('sus_data', sus_data);
                            this.subsData.subscription = new __WEBPACK_IMPORTED_MODULE_5__user_data_subscriptions__["a" /* subscriptions */]();
                            this.subsData.subscription.setData(sus_data[0]);
                            this.subsData.subscription.setPlanFromList(this.planesData.planes);
                            console.log('subscription is ', this.subsData.subscription);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SubscriptionManagerProvider.prototype.loadDoctorsSubscriptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var docs_subs_data, _i, docs_subs_data_1, doc_sus, aux_sus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.userData.checkUserPermission([__WEBPACK_IMPORTED_MODULE_2__user_data_user_data__["a" /* UserDataProvider */].TIPO_DOCTOR])) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.requestDocsSubscription().toPromise()];
                    case 1:
                        docs_subs_data = _a.sent();
                        if (docs_subs_data)
                            for (_i = 0, docs_subs_data_1 = docs_subs_data; _i < docs_subs_data_1.length; _i++) {
                                doc_sus = docs_subs_data_1[_i];
                                aux_sus = new __WEBPACK_IMPORTED_MODULE_5__user_data_subscriptions__["a" /* subscriptions */]();
                                aux_sus.setData(doc_sus);
                                this.doc_subscriptions.push(aux_sus);
                            }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    SubscriptionManagerProvider.prototype.requestSubscription = function () {
        var filter = "?args[0]=all&" + (this.userData.checkUserPermission([__WEBPACK_IMPORTED_MODULE_2__user_data_user_data__["a" /* UserDataProvider */].TIPO_DOCTOR], false) ? "args[1]=" + this.userData.userData.uid : 'args[1]=all') + "&" + ((!this.userData.checkUserPermission([__WEBPACK_IMPORTED_MODULE_2__user_data_user_data__["a" /* UserDataProvider */].TIPO_DOCTOR], false)) ? "args[2]=" + this.userData.userData.uid : 'args[2]=all') + "&args[3]=all";
        var url = this.bu.endpointUrl + "rest_suscripciones.json" + filter;
        var observer = this.http.get(url).share();
        return observer;
    };
    SubscriptionManagerProvider.prototype.requestDocsSubscription = function () {
        //const filter=`?args[0]=all&${this.userData.checkUserPermission([UserDataProvider.TIPO_DOCTOR],false)?`args[1]=${this.userData.userData.uid}`:'args[1]=all'}&${(!this.userData.checkUserPermission([UserDataProvider.TIPO_DOCTOR],false))?`args[2]=${this.userData.userData.uid}`:'args[2]=all'}&args[3]=all`;
        var filter = "?args[0]=all&args[1]=all&args[2]=all&args[3]=" + this.docData.doctoresIDs;
        var url = this.bu.endpointUrl + "rest_suscripciones.json" + filter;
        var observer = this.http.get(url).share();
        return observer;
    };
    SubscriptionManagerProvider.prototype.checkSusOfDoctor = function (nid) {
        var ret = false;
        var subs = this.doc_subscriptions.find(function (subs) {
            return (Number(subs.field_plan_holder) === nid)
                && subs.field_active === 1;
        });
        if (subs)
            ret = true;
        return ret;
    };
    SubscriptionManagerProvider.prototype.removeSubuser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var obs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.subsData.subscription.removeSubUserFromSubs(user);
                        obs = this.nodeManager.updateNode(this.subsData.subscription.getData());
                        return [4 /*yield*/, obs.toPromise()];
                    case 1:
                        _a.sent();
                        console.log('sub removed and saved');
                        return [2 /*return*/];
                }
            });
        });
    };
    SubscriptionManagerProvider.prototype.generateNewSus = function (suscription) { return this.nodeManager.generateNewNode(suscription.getData()); };
    SubscriptionManagerProvider.prototype.updateSus = function (suscription) { return this.nodeManager.updateNode(suscription.getData()); };
    SubscriptionManagerProvider.prototype.deletesSus = function (suscription) { return this.nodeManager.deleteNode(suscription.getData()); };
    SubscriptionManagerProvider.prototype.generateUserSuscription = function () {
        this.generateNewSus(this.subsData.subscription);
    };
    SubscriptionManagerProvider.prototype.updateUserSuscription = function () {
        this.updateSus(this.subsData.subscription);
    };
    SubscriptionManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__subscription_data_subscription_data__["a" /* SubscriptionDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__planes_data_planes_data__["a" /* PlanesDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__base_url_base_url__["a" /* BaseUrlProvider */],
            __WEBPACK_IMPORTED_MODULE_8__drupal_node_manager_drupal_node_manager__["a" /* DrupalNodeManagerProvider */]])
    ], SubscriptionManagerProvider);
    return SubscriptionManagerProvider;
}());

//# sourceMappingURL=subscription-manager.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the NotificationsDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NotificationsDataProvider = /** @class */ (function () {
    function NotificationsDataProvider() {
        this.notificaciones = new Array();
        this.Subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    NotificationsDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NotificationsDataProvider);
    return NotificationsDataProvider;
}());

//# sourceMappingURL=notifications-data.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Citas; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debugger__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_date__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__ = __webpack_require__(29);




var Citas = /** @class */ (function () {
    function Citas() {
        this.startDate = null;
        this.endDate = null;
        this.retrasada = false;
        this.serviceDataSet = false; //describe si los servicios de la cita han sido seteados cuando esta activa, evitando que se actualicen externamente.
        this.cobroDataSet = false; //describe si los cobros de la cita han sido seteados cuando esta en cobro, evitando que se actualicen externamente.
        this.reporteServicios = new Array();
        this.doctor_playerid = null;
        this.caja_playerid = null;
        this.recepcion_playerid = null;
        this.init();
    }
    Citas.prototype.init = function () {
        this.addedServices = new Array();
        this.data = __WEBPACK_IMPORTED_MODULE_0__providers_user_data_user_data__["a" /* UserDataProvider */].getEmptyCita();
    };
    Object.defineProperty(Citas.prototype, "doctor_name", {
        get: function () { return this.data.doctor_name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "doctor_alias", {
        get: function () { return this.data.doctor_alias; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "paciente", {
        get: function () { return this.data.field_paciente.und[0].value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "costo", {
        get: function () { return Number(this.data.field_costo_sobrescribir.und[0].value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "cobro", {
        get: function () { return Number(this.data.field_cobro.und[0].value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "cobroCheque", {
        get: function () { return Number(this.data.field_cobro_cheque.und[0].value); },
        set: function (val) { this.data.field_cobro_cheque.und[0].value = Number(val); this.calcularCobroTotal(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "cobroEfectivo", {
        get: function () { return Number(this.data.field_cobro_efectivo.und[0].value); },
        set: function (val) { this.data.field_cobro_efectivo.und[0].value = Number(val); this.calcularCobroTotal(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "cobroTarjeta", {
        get: function () { return Number(this.data.field_cobro_tarjeta.und[0].value); },
        set: function (val) { this.data.field_cobro_tarjeta.und[0].value = Number(val); this.calcularCobroTotal(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "CantidadRestante", {
        get: function () { return (Number(this.costo) - Number(this.cobro)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "stateLabel", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].getStateLabel(Number(this.data.field_estado.und[0].value)); },
        enumerable: true,
        configurable: true
    });
    Citas.prototype.calcularCobroTotal = function () { this.data.field_cobro.und[0].value = this.cobroTarjeta + this.cobroCheque + this.cobroEfectivo; };
    /**
     * Sets Data from a result of the citas view on drupal.
     **/
    Citas.prototype.setData = function (data_input) {
        console.log("setData on cita", data_input);
        this.data = __WEBPACK_IMPORTED_MODULE_0__providers_user_data_user_data__["a" /* UserDataProvider */].getEmptyCita();
        this.data.Nid = data_input.Nid;
        this.data.doctor_name = data_input.doctor_name;
        this.data.doctor_alias = data_input.doctor_alias;
        this.data.field_paciente.und[0].value = data_input.field_paciente;
        this.data.field_email.und[0].email = data_input.field_email;
        this.data.field_telefono.und[0].value = data_input.field_telefono;
        this.data.field_cita_doctor.und[0] = data_input.doctor_uid;
        this.data.field_cita_caja.und[0] = data_input.caja_uid;
        this.data.field_cita_recepcion.und[0] = data_input.recepcion_uid;
        this.data.field_estado.und[0].value = data_input.field_estado;
        this.data.field_servicios_cita.und = data_input.field_servicios_cita;
        this.data.field_cobro.und[0].value = data_input.field_cobro;
        this.data.field_cobro_cheque.und[0].value = data_input.field_cobro_cheque;
        this.data.field_cobro_efectivo.und[0].value = data_input.field_cobro_efectivo;
        this.data.field_cobro_tarjeta.und[0].value = data_input.field_cobro_tarjeta;
        this.data.field_costo_sobrescribir.und[0].value = data_input.field_costo_sobrescribir;
        this.data.field_datemsb.und[0].value = Number(data_input.field_datemsb.value);
        this.data.field_retrasda.und[0].value = data_input.field_retrasda;
        if (data_input.field_hora_iniciomsb)
            this.data.field_hora_iniciomsb.und[0].value = Number(data_input.field_hora_iniciomsb.value);
        if (data_input.field_hora_finalmsb)
            this.data.field_hora_finalmsb.und[0].value = Number(data_input.field_hora_finalmsb.value);
        if (data_input['field_servicios_json'] && data_input['field_servicios_json']['value'])
            this.data.aux_servicios_json = data_input['field_servicios_json']['value']; //this.setServiciosReport(data_input['field_servicios_json']['value']);
        if (data_input.doctor_playerid)
            this.doctor_playerid = data_input.doctor_playerid;
        if (data_input.recepcion_playerid)
            this.recepcion_playerid = data_input.recepcion_playerid;
        if (data_input.caja_playerid)
            this.caja_playerid = data_input.caja_playerid;
        //this.setDate(data_input.field_date.value);
        this.processData();
        console.log("savedData", this.data);
    };
    Citas.prototype.processData = function () {
        this.Nid = this.data.Nid;
        if (this.data.aux_servicios_json)
            this.setServiciosReport(this.data.aux_servicios_json);
        this.setDateUT(this.data.field_datemsb.und[0].value);
        this.setDurationDates(this.data.field_hora_iniciomsb.und[0].value, this.data.field_hora_finalmsb.und[0].value);
    };
    /**
     * estos dos metodos se encargan de guardar la hora de inicio y fin de la cita cuando cambia de estados pendiente a activa o activa a cobro.
    */
    Citas.prototype.setHoraInicio = function () {
        var now = new Date();
        this.data.field_hora_iniciomsb.und[0].value = now.getTime();
        this.data.field_hora_inicio.und[0].value.date = now.getUTCDate() + '/' + (now.getUTCMonth() + 1) + '/' + now.getUTCFullYear();
        this.data.field_hora_inicio.und[0].value.time = now.getUTCHours() + ":" + now.getUTCMinutes();
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(['data af hinicio', this.data]);
        //console.log("hora inicio on data",this.data.field_hora_inicio);
        //and this is saved later
    };
    Citas.prototype.setHoraFin = function () {
        var now = new Date();
        this.data.field_hora_finalmsb.und[0].value = now.getTime();
        this.data.field_hora_final.und[0].value.date = now.getUTCDate() + '/' + (now.getUTCMonth() + 1) + '/' + now.getUTCFullYear();
        this.data.field_hora_final.und[0].value.time = now.getUTCHours() + ":" + now.getUTCMinutes();
        console.log("hora final on data", this.data.field_hora_final);
        //and this is saved later
    };
    Citas.prototype.setServiciosReport = function (input_data) {
        this.reporteServicios = JSON.parse(input_data);
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(['added reportservicios', this.reporteServicios]);
    };
    /**
     *  date needs some procesing:
     *   date comes in a non usable format for input.
     *   a date object is requiered to process it.
     **/
    Citas.prototype.setDate = function (date_input, onutc) {
        if (onutc === void 0) { onutc = false; }
        //Got date on utc so adding a Z to set it on utc and use getUTCDate to bypass any timezone
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(["cita setdate input: " + date_input]);
        if (onutc) {
            this.date = new Date(date_input);
        }
        else {
            this.date = new Date(date_input + 'Z');
        }
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(["cita UTC date is: " + this.date]);
        //set data date fields on the format requiered by inputs:
        this.data.field_date.und[0].value.date = this.date.getUTCDate() + '/' + (this.date.getUTCMonth() + 1) + '/' + this.date.getUTCFullYear();
        this.data.field_date.und[0].value.time = this.date.getUTCHours() + ":" + this.date.getUTCMinutes();
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(['set date is', this.data.field_date]);
        //set time until this date:
        this.getUntilMs();
        this.getUntilTimeString();
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(['set date is after', this.data.field_date]);
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(["Ms until this date: ", this.untilMs]);
        if (this.untilMs < 0) {
            this.retrasada = true;
            __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(['esta cita esta retrasada']);
        }
    };
    Citas.prototype.setDateUT = function (dateUTms) {
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log([dateUTms]);
        //Got date on utc so adding a Z to set it on utc and use getUTCDate to bypass any timezone
        this.date = new Date(dateUTms);
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(["cita UTms date is: " + this.date]);
        //set data date fields on the format requiered by inputs:
        this.data.field_date.und[0].value.date = __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].formatDateBinaryNumber(this.date.getUTCDate()) + "/" + __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].formatDateBinaryNumber((this.date.getUTCMonth() + 1)) + "/" + __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].formatDateBinaryNumber(this.date.getUTCFullYear());
        this.data.field_date.und[0].value.time = __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].formatDateBinaryNumber(this.date.getUTCHours()) + ":" + __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].formatDateBinaryNumber(this.date.getUTCMinutes());
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(['set date is', this.data.field_date]);
        //set time until this date:
        this.getUntilMs();
        this.getUntilTimeString();
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(['set date is after', this.data.field_date]);
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(["Ms until this date: ", this.untilMs]);
        if (this.untilMs < 0) {
            this.retrasada = true;
            __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(['esta cita esta retrasada']);
        }
    };
    Citas.prototype.setDurationDates = function (inicio_input, final_input) {
        console.log("inicio_input", inicio_input);
        console.log("final_input", final_input);
        //set dates to null to start
        this.startDate = null;
        this.endDate = null;
        this.data.field_hora_inicio.und[0].value.date = null;
        this.data.field_hora_inicio.und[0].value.time = null;
        this.data.field_hora_final.und[0].value.date = null;
        this.data.field_hora_final.und[0].value.time = null;
        //Got date on utc so adding a Z to set it on utc and use getUTCDate to bypass any timezone
        //if(inicio_input.value){
        if (inicio_input) {
            this.startDate = new Date(inicio_input);
            if (this.isValidDate(this.startDate)) {
                this.data.field_hora_inicio.und[0].value.date = this.startDate.getUTCDate() + '/' + (this.startDate.getUTCMonth() + 1) + '/' + this.startDate.getUTCFullYear();
                this.data.field_hora_inicio.und[0].value.time = this.startDate.getUTCHours() + ":" + this.startDate.getUTCMinutes();
            }
        }
        //if(final_input.value){
        if (final_input) {
            this.endDate = new Date(final_input);
            if (this.isValidDate(this.endDate)) {
                this.data.field_hora_final.und[0].value.date = this.endDate.getUTCDate() + '/' + (this.endDate.getUTCMonth() + 1) + '/' + this.endDate.getUTCFullYear();
                this.data.field_hora_final.und[0].value.time = this.endDate.getUTCHours() + ":" + this.endDate.getUTCMinutes();
            }
        }
        this.setDuracionMs();
        //console.log("obtained duracionMs",this.duracionMs);
    };
    Citas.prototype.isValidDate = function (d) {
        return d instanceof Date && !isNaN(d.getUTCDate());
    };
    Citas.prototype.setDuracionMs = function () {
        if (this.data.field_hora_iniciomsb['und'][0]['value'] && this.data.field_hora_finalmsb['und'][0]['value']) {
            this.duracionMs = (new Date(this.data.field_hora_finalmsb['und'][0]['value']).getTime() - new Date(this.data.field_hora_iniciomsb['und'][0]['value']).getTime());
        }
        else if (this.data.field_hora_iniciomsb['und'][0]['value']) {
            this.duracionMs = (new Date().getTime() - new Date(this.data.field_hora_iniciomsb['und'][0]['value']).getTime());
        }
        else {
            this.duracionMs = 0;
        }
        //Debugger.log(['this.duracionMs',this.duracionMs]);
        this.duracionText = __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].getDateDifText(this.duracionMs);
        //Debugger.log(['this.duracionText', this.duracionText]);
    };
    /**
     * this methods gives the Milliseconds until this date, can be negative.
     * will be used to get nextDate timer
     **/
    Citas.prototype.getUntilMs = function () {
        //let now = new Date('2018/5/14 01:35:00Z');
        var now = new Date();
        //Debugger.log(['comparing dates to get MS']);
        //Debugger.log([this.date]);
        //Debugger.log([now]);
        this.untilMs = (this.date.getTime() - now.getTime());
        //Debugger.log(['calculated untilMs',this.untilMs]);
        return this.untilMs;
    };
    Citas.prototype.getUntilTimeString = function () {
        var ret = "00";
        ret = __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].getDateDifText(this.untilMs);
        this.untilText = ret;
        return ret;
        /*let ret = null;
        let negative = false;
        let aux_untilMs = this.untilMs;
        //Debugger.log(['entering get until time string with ',aux_untilMs]);
        if(this.untilMs < 0){
            //Debugger.log(['untilMs es negativo']);
            negative = true;
            aux_untilMs = aux_untilMs*-1;
        }
        //Debugger.log(['untilMs af neg check',aux_untilMs]);
        let minutes = aux_untilMs/(60*1000);
        let hours = Math.floor(minutes/(60));
        minutes = Math.floor(( minutes - (hours * 60)));
        let stringHours = ""+hours;
        let stringMinutes = ""+minutes;
        while(stringHours.length < 2){stringHours = "0"+stringHours;}
        while(stringMinutes.length < 2){stringMinutes = "0"+stringMinutes;}
        ret = stringHours+":"+stringMinutes;
        if(negative){
            ret = `hace ${ret}`;
        }
        this.untilText = ret;
        return ret;*/
    };
    Citas.prototype.CloserThanMs = function (compareMS) {
        var ret = false;
        if (Number(this.untilMs) < compareMS)
            ret = true;
        return ret;
    };
    Citas.prototype.checkState = function (state) {
        return Number(this.data.field_estado.und[0].value) === Number(state);
    };
    Citas.prototype.setAddedServices = function (servicios) {
        var _this = this;
        console.log("populating addedServices with", servicios);
        this.addedServices = new Array();
        var _loop_1 = function (i) {
            console.log("searching for ", this_1.data.field_servicios_cita.und[i]);
            servicios.forEach(function (element) {
                if (Number(element.Nid) === Number(_this.data.field_servicios_cita.und[i])) {
                    _this.addedServices.push(element);
                    console.log("found");
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.data.field_servicios_cita.und.length; i++) {
            _loop_1(i);
        }
        console.log("addedServices", this.addedServices);
        console.log("vs data" + this.data.field_servicios_cita);
    };
    Citas.prototype.setServicesData = function () {
        var _this = this;
        console.log("populating data services_cita");
        this.data.field_servicios_cita.und = new Array();
        this.addedServices.forEach(function (element) {
            console.log("added service", element);
            _this.data.field_servicios_cita.und.push(element.Nid);
        });
        console.log("populated services_cita data", this.data.field_servicios_cita);
    };
    Citas.prototype.addServicio = function (servicio) {
        var ret = false;
        if (!this.checkServicio(servicio)) {
            this.addedServices.push(servicio);
            ret = true;
        }
        return ret;
    };
    Citas.prototype.removeServicio = function (servicio) {
        var ret = false;
        this.addedServices = this.addedServices.filter(function (servicios) { return Number(servicios.Nid) !== Number(servicio.Nid); });
        return ret = true;
    };
    /**
     * returns a list of services that havent been added to this cita from a list of available services
     **/
    Citas.prototype.getServiciosAvailable = function (servicios) {
        var _this = this;
        var ret = new Array();
        console.log("trynna get servicios available from", servicios);
        servicios.forEach(function (element) {
            if (!_this.checkServicio(element)) {
                ret.push(element);
            }
        });
        return ret;
    };
    /**
     *  Tells you if a given service has been added to this cita
     **/
    Citas.prototype.checkServicio = function (servicio) {
        var ret = false;
        console.log("checking if cita contains servicio ", servicio);
        /*this.addedServices.forEach(element => {
            if(Number(element.Nid) === Number(servicio.Nid)  ){
                ret = true;
                console.log("added service");
            }
        });*/
        if (this.addedServices.find(function (servicios) { return Number(servicios.Nid) === Number(servicio.Nid); }))
            ret = true;
        console.log('found ? ', ret);
        return ret;
    };
    /* Esta mamada que xD**/
    Citas.prototype.getStateString = function () {
        return this.stateLabel;
        /*
        let state = parseInt(""+this.data.field_estado.und[0].value);
        let ret = "";
        switch(state){
          case UserDataProvider.STATE_PENDIENTE: ret="Pendiente"; break;
          case UserDataProvider.STATE_CONFIRMADA: ret="Confirmada"; break;
          case UserDataProvider.STATE_ACTIVA: ret="Activa"; break;
          case UserDataProvider.STATE_COBRO: ret="en Cobro"; break;
          case UserDataProvider.STATE_FINALIZADA: ret="Finalizada"; break;
          case UserDataProvider.STATE_CANCELADA: ret="Cancelada"; break;
        }
        return ret;*/
    };
    Citas.prototype.save = function () {
        console.log("saving this cita");
    };
    Citas.prototype.getDatetimeFormat = function () {
        var ret = "";
        var datestring = this.date.getDate() + "/" + (this.date.getMonth() + 1) + "/" + this.date.getFullYear();
        var timestring = this.date.getHours() + ":" + this.date.getMinutes();
        ret = datestring + "T" + timestring;
        return ret;
    };
    Citas.prototype.getDisplayableDates = function () {
        var ret = { "date": '', "time": '' };
        var datestring = this.date.getDate() + "/" + (this.date.getMonth() + 1) + "/" + this.date.getFullYear();
        var timestring = this.date.getHours() + ":" + this.date.getMinutes();
        ret = { "date": datestring, "time": timestring };
        return ret;
    };
    Citas.getLocalDateIso = function (date) {
        var tzo = date.getTimezoneOffset(), dif = tzo >= 0 ? '+' : '-', pad = function (num) {
            var norm = Math.floor(Math.abs(num));
            return (norm < 10 ? '0' : '') + norm;
        };
        return date.getFullYear() +
            '-' + pad(date.getMonth() + 1) +
            '-' + pad(date.getDate()) +
            'T' + pad(date.getHours()) +
            ':' + pad(date.getMinutes()) +
            ':' + pad(date.getSeconds()) +
            dif + pad(tzo / 60) +
            ':' + pad(tzo % 60);
    };
    return Citas;
}());

//# sourceMappingURL=citas.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WsMessengerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__websocket_service_websocket_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctores_data_doctores_data__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__citas_data_citas_data__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
This class is a message generator for  the websocketService
websocket service contains the socket and managers to create elements using socket responses, but managers cant have a websocket service to generate messages
this providers generates messages to the socket.

this provider cant have managers on it, only data
*/
var WsMessengerProvider = /** @class */ (function () {
    function WsMessengerProvider(ws, userData, docData, citasData) {
        this.ws = ws;
        this.userData = userData;
        this.docData = docData;
        this.citasData = citasData;
    }
    WsMessengerProvider.prototype.testCitaSend = function () {
        for (var _i = 0, _a = this.citasData.citas; _i < _a.length; _i++) {
            var cita = _a[_i];
            this.generateWSupdateMessage(cita);
        }
    };
    WsMessengerProvider.prototype.generateMessage = function (receivers, action, sender, content, isBroadcast) {
        if (isBroadcast === void 0) { isBroadcast = false; }
        var message2send = {
            receivers: receivers,
            action: action,
            sender: sender,
            content: content,
            isBroadcast: isBroadcast,
        };
        var jsonsend = JSON.stringify(message2send);
        console.log(jsonsend);
        var message = JSON.parse(jsonsend);
        console.log(message);
        this.ws.send(message);
    };
    WsMessengerProvider.prototype.generateWSupdateMessage = function (cita) {
        this.generateMessage(this.docData.doctoresIDs, 'addCita', "" + this.userData.userData.uid, cita.data, true);
    };
    WsMessengerProvider.prototype.generateWSremoveCitaMessage = function (cita) {
        this.generateMessage(this.docData.doctoresIDs, 'removeCita', "" + this.userData.userData.uid, cita.data, true);
    };
    WsMessengerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__websocket_service_websocket_service__["a" /* WebsocketServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__citas_data_citas_data__["a" /* CitasDataProvider */]])
    ], WsMessengerProvider);
    return WsMessengerProvider;
}());

//# sourceMappingURL=ws-messenger.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__debugger__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cordova_available_cordova_available__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__citas_data_citas_data__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__doctores_data_doctores_data__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__planes_data_planes_data__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__subscription_data_subscription_data__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_url_base_url__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__drupal_user_manager_drupal_user_manager__ = __webpack_require__(42);
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











var UserDataProvider = /** @class */ (function () {
    function UserDataProvider(http, ica, citas, doctores, planes, subscription, bu, druserMan) {
        this.http = http;
        this.ica = ica;
        this.citas = citas;
        this.doctores = doctores;
        this.planes = planes;
        this.subscription = subscription;
        this.bu = bu;
        this.druserMan = druserMan;
        //AuthObservable
        this.AuthSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.susSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.sessionData = {
            sessid: false,
            session_name: false,
            token: false,
            uid: false
        };
        //urlbase:string = "http://vmi118470.contaboserver.net/~drapp/backend/";
        //urlbase:string = "https://servidor.nortecsoluciones.com/~drapp/backend/";
        //urlbase:string = 'http://localhost:8100/backend/';
        this.userData = {
            uid: 0,
            name: "",
            pass: "",
            mail: "",
            status: "",
            roles: [],
            field_tipo_de_usuario: { und: [] },
            field_useremail: { und: [{ email: "" }] },
            field_nombre: { und: [{ value: "" }] },
            field_apellidos: { und: [{ value: "" }] },
            field_especialidad: { und: [{ value: "" }] },
            field_alias: { und: [{ value: "" }] },
            field_calle: { und: [{ value: "" }] },
            field_no_ext: { und: [{ value: "" }] },
            field_no_int: { und: [{ value: "" }] },
            field_codigo_postal: { und: [{ value: "" }] },
            field_ciudad: { und: [{ value: "" }] },
            field_colonia: { und: [{ value: "" }] },
            field_pais: { und: [{ value: "" }] },
            field_municipio: { und: [{ value: "" }] },
            field_estado_ubicacion: { und: [{ value: "" }] },
            field_plan_date: { und: [{ value: { date: "" } }] },
            field_forma_pago: { und: [{ value: "" }] },
            tutorial_state: { und: [{ value: "0" }] },
            field_doctores: { und: [] },
            //valores de suscripcion
            field_sub_id: { und: [0] },
            field_planholder: { und: [{ value: true }] },
            field_stripe_customer_id: { und: [{ value: "" }] },
            field_src_json_info: { und: [{ value: "" }] }
        };
    }
    UserDataProvider_1 = UserDataProvider;
    Object.defineProperty(UserDataProvider.prototype, "TIPO_DOCTOR", {
        get: function () { return UserDataProvider_1.TIPO_DOCTOR; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDataProvider.prototype, "TIPO_RECEPCION", {
        get: function () { return UserDataProvider_1.TIPO_RECEPCION; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDataProvider.prototype, "TIPO_CAJA", {
        get: function () { return UserDataProvider_1.TIPO_CAJA; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDataProvider.prototype, "TIPO_CAJAYRECEPCION", {
        get: function () { return UserDataProvider_1.TIPO_CAJAYRECEPCION; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDataProvider.prototype, "TIPO_ANY", {
        get: function () { return UserDataProvider_1.TIPO_ANY; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDataProvider.prototype, "PLAN_ANY", {
        get: function () { return UserDataProvider_1.PLAN_ANY; },
        enumerable: true,
        configurable: true
    });
    UserDataProvider.prototype.requestToken = function () {
        var url = this.bu.endpointUrl + 'user/token.json';
        var observer = this.http.post(url, "", {});
        return observer.share();
    };
    UserDataProvider.prototype.initreset = function () {
        this.userData = {
            uid: 0,
            name: "",
            pass: "",
            mail: "",
            status: "",
            roles: [],
            field_tipo_de_usuario: { und: [] },
            field_useremail: { und: [{ email: "" }] },
            field_nombre: { und: [{ value: "" }] },
            field_apellidos: { und: [{ value: "" }] },
            field_especialidad: { und: [{ value: "" }] },
            field_alias: { und: [{ value: "" }] },
            field_calle: { und: [{ value: "" }] },
            field_no_ext: { und: [{ value: "" }] },
            field_no_int: { und: [{ value: "" }] },
            field_codigo_postal: { und: [{ value: "" }] },
            field_ciudad: { und: [{ value: "" }] },
            field_colonia: { und: [{ value: "" }] },
            field_pais: { und: [{ value: "" }] },
            field_municipio: { und: [{ value: "" }] },
            field_estado_ubicacion: { und: [{ value: "" }] },
            field_plan_date: { und: [{ value: { date: "" } }] },
            field_forma_pago: { und: [{ value: "" }] },
            tutorial_state: { und: [{ value: "0" }] },
            field_doctores: { und: [] },
            field_sub_id: { und: [] },
            field_planholder: { und: [{ value: true }] },
            field_stripe_customer_id: { und: [{ value: "" }] },
            field_src_json_info: { und: [{ value: "" }] }
        };
    };
    UserDataProvider.prototype.loginSetData = function (Uid) {
        return __awaiter(this, void 0, void 0, function () {
            var u_data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestUserData(Uid).toPromise()];
                    case 1:
                        u_data = _a.sent();
                        this.setUserData(u_data);
                        return [2 /*return*/];
                }
            });
        });
    };
    UserDataProvider.prototype.checkConnect = function () {
        var url = this.bu.endpointUrl + 'system/connect.json';
        var observer = this.http.post(url, "");
        return observer.share();
    };
    UserDataProvider.prototype.checkIsLoggedin = function () {
        return Number(this.userData.uid) !== 0;
    };
    UserDataProvider.prototype.requestUserData = function (uid) {
        var url = this.bu.endpointUrl + 'user/' + uid;
        var userData_observer = this.http.get(url);
        return userData_observer.share();
    };
    UserDataProvider.prototype.setSessionData = function (val) {
        console.log('setting sessionData', val);
        this.sessionData.sessid = val['sessid'];
        this.sessionData.session_name = val['session_name'];
        if (val['token']) {
            //console.log("updating token");
            this.sessionData.token = val['token'];
        }
    };
    UserDataProvider.prototype.setUserData = function (val) {
        console.log('setting user data', val);
        this.userData.uid = val['uid'];
        this.userData.name = val['name'];
        this.userData.pass = val['pass'];
        this.userData.mail = val['mail'];
        this.userData.status = val['status'];
        this.userData.roles = val['roles'];
        this.userData.field_tipo_de_usuario = val['field_tipo_de_usuario'];
        this.userData.field_useremail = val['field_useremail'];
        if (val['field_nombre'].length !== 0)
            this.userData.field_nombre = val['field_nombre'];
        if (val['field_apellidos'].length !== 0)
            this.userData.field_apellidos = val['field_apellidos'];
        if (val['field_especialidad'].length !== 0) {
            this.userData.field_especialidad = val['field_especialidad'];
            __WEBPACK_IMPORTED_MODULE_3__debugger__["a" /* Debugger */].log(['setting especialidad']);
        }
        if (val['field_alias'].length !== 0)
            this.userData.field_alias = val['field_alias'];
        if (val['field_calle'].length !== 0)
            this.userData.field_calle = val['field_calle'];
        if (val['field_no_ext'].length !== 0)
            this.userData.field_no_ext = val['field_no_ext'];
        if (val['field_no_int'].length !== 0)
            this.userData.field_no_int = val['field_no_int'];
        if (val['field_codigo_postal'].length !== 0)
            this.userData.field_codigo_postal = val['field_codigo_postal'];
        if (val['field_ciudad'].length !== 0)
            this.userData.field_ciudad = val['field_ciudad'];
        if (val['field_colonia'].length !== 0)
            this.userData.field_colonia = val['field_colonia'];
        if (val['field_pais'].length !== 0)
            this.userData.field_pais = val['field_pais'];
        if (val['field_municipio'].length !== 0)
            this.userData.field_municipio = val['field_municipio'];
        if (val['field_estado_ubicacion'].length !== 0)
            this.userData.field_estado_ubicacion = val['field_estado_ubicacion'];
        this.userData.field_plan_date = val['field_plan_date'];
        this.userData.field_forma_pago = val['field_forma_pago'];
        this.userData.tutorial_state = val['field_tutorial_state'];
        if (val['field_doctores'].length !== 0) {
            this.userData.field_doctores = val['field_doctores'];
        }
        else {
            this.userData.field_doctores.und = new Array();
        }
        __WEBPACK_IMPORTED_MODULE_3__debugger__["a" /* Debugger */].log(["checking this out subs id", val['field_sub_id']]);
        if (val['field_sub_id'].length != 0) {
            this.userData.field_sub_id.und[0] = val['field_sub_id']['und'][0]['nid'];
            __WEBPACK_IMPORTED_MODULE_3__debugger__["a" /* Debugger */].log(["set a", this.userData.field_sub_id]);
        }
        else {
            this.userData.field_sub_id.und[0] = 0;
            __WEBPACK_IMPORTED_MODULE_3__debugger__["a" /* Debugger */].log(["set b", this.userData.field_sub_id]);
        }
        this.userData.field_planholder = val['field_planholder'];
        this.userData.field_stripe_customer_id = val['field_stripe_customer_id'];
        if (val['field_src_json_info'].length != 0) {
            this.userData.field_src_json_info = val['field_src_json_info'];
        }
        else {
            this.userData.field_src_json_info.und = new Array();
        }
        //this.savePlayerID();
        //Debugger.log(["doctores encontrados",this.doctores.doctores]);
        //this.cargarServicios();
        console.log('filled userData', this.userData);
    };
    UserDataProvider.prototype.login = function (username, password) {
        var body = JSON.stringify({ "username": username, "password": password });
        var url = this.bu.endpointUrl + "user/login";
        return this.http.post(url, body).share();
    };
    UserDataProvider.prototype.logout = function () {
        var _this = this;
        var url = this.bu.endpointUrl + "user/logout";
        var logout_request = this.http.post(url, "").share();
        logout_request.subscribe(function (val) {
            _this.initreset();
            _this.AuthSubject.next(_this.userData.uid);
        });
        return logout_request;
    };
    UserDataProvider.prototype.register = function (data) {
        if (data === void 0) { data = this.userData; }
        /*let aux_registerdata = null;
        if(data){
          aux_registerdata = data;
        }else{
          aux_registerdata = this.userData;
        } */
        var body = JSON.stringify(data);
        //Debugger.log(['register data sending',body]);
        var url = this.bu.endpointUrl + 'user/register';
        var register_observer = this.http.post(url, body);
        return register_observer.share();
    };
    UserDataProvider.prototype.checkUserPlanHolder = function () {
        return this.checkUserPermission([UserDataProvider_1.TIPO_DOCTOR]);
    };
    /*removeCitaFromLists(cita:Citas){
      //todas las listas
      const ArrOfArrs = [
      this.citas,
      this.citasActivas,
      this.nextCitas,
      this.citasPendientes,
      this.citasCloser,
      this.citasCobrar
      ];
      ArrOfArrs.forEach(arr => {
        UserDataProvider.removeElementFromArray(cita,arr);
      });
      this.doctores.forEach(doc => {
        doc.removeCitaFromLists(cita);
      });
      Debugger.log(['checking citas list after removing',this.citas]);
    }*/
    UserDataProvider.removeElementFromArray = function (element, array) {
        var ret = -2;
        if (array) {
            ret = array.indexOf(element);
            if (ret >= 0)
                array.splice(ret, 1);
        }
        return ret;
    };
    //SUBSCRIPTION METHODS
    /*
    generateNewSus( suscription ){return this.generateNewNode(suscription.getData());}
    updateSus( suscription ){return this.updateNode(suscription.getData());}
    deletesSus( suscription ){return this.deleteNode(suscription.getData());}
    generateUserSuscription(){
      this.generateNewSus(this.subscription);
    }
    updateUserSuscription(){
      this.updateSus(this.subscription);
    }
  */
    /*static getTodayDateTimeStringsSaveFormat(){
      let date = new Date();
      let datestring = `${date.getDate()}/${(date.getMonth()+1)}/${date.getFullYear()}`;
      let timestring =  `${date.getHours()}:${date.getMinutes()}`;
      return {"datestring":datestring,"timestring":timestring};
    }*/
    /*
    static getTodayDateTimeStringsSearchFormat( where:string = null ){
      let date = new Date();
      let datestring = `${(date.getMonth()+1)}/${date.getDate()}/${date.getFullYear()}`;
      //let datestring = `${date.getFullYear()}/${(date.getMonth()+1)}/${date.getDate()}`;
      let timestring = `${date.getHours()}:${date.getMinutes()}`;
      Debugger.log(['where is ',where]);
      if( where && where.localeCompare('reportes') === 0){
        Debugger.log(['es en reportes']);
        datestring = `${date.getFullYear()}-${(date.getMonth()+1)}-${date.getDate()}`;
      }
     
      Debugger.log(['getting today date for search format: ', {"datestring":datestring,"timestring":timestring}]);
      return {"datestring":datestring,"timestring":timestring};
    }*/
    /*
      static getNowUTdates(){
        let start =  new Date().setHours(0,0,0,0);
        let end =  new Date().setHours(23,59,59,999);
        Debugger.log([`getting now ut dates ${start} to ${end} and are for ${new Date(start)} to ${new Date(end)}`]);
        return {"start":start,"end":end};
      }
    
      static formatDateBinaryNumber( num ){
        return (num < 10 ? '0' : '') + num;
      }*/
    /*
    cargarCitas( logoutonerror = true ):Observable<any>{
      console.log("cargando citas");
      const ret = this.getCargarCitasObservable();
      ret.subscribe(
        (val)=>{
          this.setCitasFO(val);
        },
         response => {
           Debugger.log(["POST call in error", response]);
           if(logoutonerror)
           this.logout();
         }
        );
        Debugger.log(['returning ret observable',ret]);
        return ret;
    }
  
    getCargarCitasObservable(){
      let UTdates = UserDataProvider.getNowUTdates();
      Debugger.log([` dates searching en cargar citas es ${UTdates.start}--${UTdates.end}`]);
      return this.getCitasUTms(`${UTdates.start}--${UTdates.end}`,this.getDoctoresSimpleArray(),new Array(),new Array());
    }
  
    setCitasFO( val ){
    //aqui creamos el pool de citas, este pool sirve para que los doctores tomen y administren las citas que tienen.
    Debugger.log(['citas Cargadas',val]);
    for( let cita of val ){
      let citaIndex = this.getCitaIndexByNid(cita.Nid);
      if(citaIndex > -1){
        this.citas[citaIndex].setData(cita);
      }else{
      let aux_cita = new Citas();
      aux_cita.setData(cita);
      this.citas.push(aux_cita);
      }
  }
  //si tiene algun permiso o plan se llenan las listas para mostrar las citas.
    this.organizarCitas();
  }
  
  
    organizarCitas(){
       //tenemos un pool de citas actualizadas en this.citas, los doctores deben tomar esas citas y organizarlas.
      
      if(this.checkUserFeature([UserDataProvider.TIPO_ANY],[UserDataProvider.PLAN_ANY])){ //revisar que el usuario tenga plan y permisos validos
         this.clearCitaLists();
         for( let doc of this.doctores){
            doc.setCitas(this.citas);
            if(doc.citaActiva) { this.citasActivas.push(doc.citaActiva); }
            if(doc.nextCita){ this.nextCitas.push(doc.nextCita); }
            this.citasPendientes =  this.citasPendientes.concat(doc.citasPendientes);
            this.citasRetrasadas =  this.citasRetrasadas.concat(doc.citasRetrasadas);
            if(this.checkUserPermission([UserDataProvider.TIPO_CAJA,UserDataProvider.TIPO_CAJAYRECEPCION,UserDataProvider.TIPO_DOCTOR])){ //si puede cobrar carga las citas por cobrar
              this.citasCobrar = this.citasCobrar.concat(doc.citasCobrar);
            }
          }
        for( let cita of this.citas ){
          if(cita.CloserThanMs(this.ShowCitaUntilMs)){
            if(this.nextCitas.indexOf(cita) === -1 && this.citasActivas.indexOf(cita) === -1 && this.citasRetrasadas.indexOf(cita) === -1){
              this.citasCloser.push(cita);
            }
          }
        }
        for( let cita of this.citasRetrasadas){
          if((!cita.data.field_retrasda) || Number(cita.data.field_retrasda['und']['0']['value']) === 0){
            Debugger.log(['cita retrasadas desactualizada']);
          }
        }
        }
    }
  
    clearCitaLists(){
      this.citasActivas =  new Array();
      this.nextCitas = new Array();
      this.citasPendientes =  new Array();
      this.citasCloser = new Array();
      this.citasCobrar = new Array();
      this.citasRetrasadas = new Array();
    }
  */
    /*getCitasActivas(){
      this.citasActivas =  new Array();
      this.doctores.forEach(element => {
        if(element.citaActiva){
         this.citasActivas.push(element.citaActiva);
        }
      });
      //console.log("citas activas obtenidas de cada doctor",this.citasActivas);
    }
  
    getNextcitas(){
      this.nextCitas = new Array();
      this.doctores.forEach(doctor => {
        if(doctor.nextCita){
          this.nextCitas.push(doctor.nextCita);
        }
      });
    }
  
    getCitasPendientes(){
      this.citasPendientes =  new Array();
      this.citasCloser = new Array();
      this.doctores.forEach(doctor => {
        doctor.citasPendientes.forEach(cita => {
            this.citasPendientes.push(cita);
            if(cita.CloserThanMs(this.ShowCitaUntilMs)){
              if(this.nextCitas.indexOf(cita) === -1 && this.citasActivas.indexOf(cita) === -1){
                this.citasCloser.push(cita);
              }
            }
        });
      });
      //console.log("citas pendientes obtenidas de cada doctor",this.citasPendientes);
    }
  
    getCitasCobrar(){
      this.citasCobrar = new Array();
      this.doctores.forEach(doctor => {
        doctor.citasCobrar.forEach(cita => {
          this.citasCobrar.push(cita);
        });
      });
      //console.log("citas por cobrar obtenidas de cada doctor",this.citasCobrar);
    }
  
    getCitasRetrasadas(){
      this.citasRetrasadas = new Array();
      this.doctores.forEach(
    }*/
    UserDataProvider.prototype.getDoctoresSimpleArray = function () {
        var ret = new Array();
        this.doctores.doctores.forEach(function (element) {
            ret.push(Number(element.Uid));
        });
        return ret;
    };
    /*getCitasParaHoy(){
      let ret = 0;
      this.doctores.forEach(element => {
        ret += element.citasParaHoy;
     });
     this.citasParaHoy = ret;
     return ret;
    }*/
    /*getCitaIndexByNid( input_nid ){
      let ret = -1;
      let index = 0;
      this.citas.forEach(cita => {
        if( cita.Nid === input_nid){
          ret = index;
        }
        index++;
      });
      return ret;
    }*/
    /**
    * doctores:number[] son los uids de los doctores que atienden las citas
   **/
    UserDataProvider.prototype.getCitas = function (fechaFrom, fechaTo, doctores, cajas, recepciones) {
        //date filter inbetween: date[min][date]=10/10/2010&date[max][date]=10/10/2011
        //date format: MM/DD/AAAA
        //filter doctor: args[0]=all
        //filter caja: args[1]=all
        //filter recepcion: args[2]=all
        //http://vmi118470.contaboserver.net/~drapp/backend/appoint/rest_citas?
        var doctorfilter = "&args[0]=" + doctores.join();
        var cajafilter = "&args[1]=" + cajas.join();
        var recepcionfilter = "&args[2]=" + recepciones.join();
        if (doctores.length == 0) {
            doctorfilter = "&args[0]=all";
        }
        if (cajas.length == 0) {
            cajafilter = "&args[1]=all";
        }
        if (recepciones.length == 0) {
            recepcionfilter = "&args[2]=all";
        }
        var datefilter = "?date[min][date]=" + fechaFrom + "&date[max][date]=" + fechaTo;
        var url = this.bu.endpointUrl + 'rest_citas.json' + datefilter + doctorfilter + cajafilter + recepcionfilter;
        console.log("url", url);
        var observer = this.http.get(url);
        //observer.subscribe(); //suscribes to send the post regardless of what view does with the observer
        return observer;
    };
    UserDataProvider.prototype.getCitasUTms = function (rangeUTms, doctores, cajas, recepciones) {
        var doctorfilter = "args[0]=" + doctores.join();
        var cajafilter = "&args[1]=" + cajas.join();
        var recepcionfilter = "&args[2]=" + recepciones.join();
        var rangeFilter = "&args[3]=" + rangeUTms;
        if (doctores.length == 0) {
            doctorfilter = "args[0]=all";
        }
        if (cajas.length == 0) {
            cajafilter = "&args[1]=all";
        }
        if (recepciones.length == 0) {
            recepcionfilter = "&args[2]=all";
        }
        //let datefilter = "?date[min][date]="+fechaFrom+"&date[max][date]="+fechaTo;
        var url = this.bu.endpointUrl + 'rest_citas.json?' + doctorfilter + cajafilter + recepcionfilter + rangeFilter;
        console.log("url", url);
        var observer = this.http.get(url);
        //observer.subscribe(); //suscribes to send the post regardless of what view does with the observer
        return observer;
    };
    UserDataProvider.prototype.getCitasNidObservable = function (Nid) {
        var url = this.bu.endpointUrl + 'rest_citas.json?' + ("args[0]=all&args[1]=all&args[2]=all&args[3]=all&args[4]=" + Nid);
        __WEBPACK_IMPORTED_MODULE_3__debugger__["a" /* Debugger */].log(['loadinc single cita w nid', url]);
        var observer = this.http.get(url);
        //observer.subscribe(); //suscribes to send the post regardless of what view does with the observer
        return observer;
    };
    //General Node Management
    UserDataProvider.prototype.setcssplanselected = function (factplan) {
        this.planes.planes.forEach(function (plan) {
            plan.css_fact_selected = false;
        });
        factplan.css_fact_selected = true;
    };
    //user aux methods
    UserDataProvider.prototype.getTipoUsuarioString = function (tipo) {
        //Debugger.log(['obtener tipo de usuario para ',tipo]);
        tipo = Number(tipo);
        var ret = "subusuario";
        switch (tipo) {
            case UserDataProvider_1.TIPO_DOCTOR:
                ret = "doctor";
                break;
            case UserDataProvider_1.TIPO_RECEPCION:
                ret = "recepción";
                break;
            case UserDataProvider_1.TIPO_CAJA:
                ret = "caja";
                break;
            case UserDataProvider_1.TIPO_CAJAYRECEPCION:
                ret = "recepcion&caja";
                break;
        }
        return ret;
    };
    /**
     * CheckUserFeature resolves if a feature should appear for this user giving the user roles (permision) and the user plan suscriptions (suscriptions)
     * and has been created to simplify the check on features that requiere both.
    */
    UserDataProvider.prototype.checkUserFeature = function (permision, suscriptions, debug) {
        if (debug === void 0) { debug = false; }
        var ret = false;
        var permisioncheck = false;
        var suscriptionscheck = false;
        if (permision === null || permision === undefined || permision.length === 0) {
            permisioncheck = true;
        }
        else {
            permisioncheck = this.checkUserPermission(permision, debug);
        }
        if (suscriptions === null || suscriptions === undefined || suscriptions.length === 0) {
            suscriptionscheck = true;
        }
        else {
            suscriptionscheck = this.checkUserSuscription(suscriptions, debug);
        }
        if (permisioncheck && suscriptionscheck) {
            ret = true;
        }
        return ret;
    };
    UserDataProvider.prototype.checkSusSubaccountsFull = function () {
        return false;
    };
    UserDataProvider.prototype.checkUserPermission = function (permision, debug) {
        if (debug === void 0) { debug = false; }
        var ret = false;
        __WEBPACK_IMPORTED_MODULE_3__debugger__["a" /* Debugger */].log(["checking permissions " + permision + " vs " + this.userData.field_tipo_de_usuario], debug);
        //checking for ANY
        if (permision.indexOf(UserDataProvider_1.TIPO_ANY) > -1 && this.userData.field_tipo_de_usuario.und.length > 0) {
            return true;
        }
        //regular check
        for (var i = 0; i < this.userData.field_tipo_de_usuario.und.length; i++) {
            if (permision.indexOf(parseInt(this.userData.field_tipo_de_usuario.und[i].value)) > -1) {
                ret = true;
                break;
            }
        }
        return ret;
    };
    /**
     * la suscripcion debe resultar false si:
     * el usuario no tiene guardado un id de suscripcion en su data, o esta es 0
     * la suscripcion que carga el usuario esta inactiva.
    */
    UserDataProvider.prototype.checkUserSuscription = function (suscriptions, debug) {
        if (debug === void 0) { debug = false; }
        /*let ret = false;
        Debugger.log([`checking suscriptions ${suscriptions} vs ${this.subscription}`],debug);
        //si la subscripcion no esta activa (expiro, no ha sido pagada etc) retorna false
        //if(Number(this.userData.field_sub_id.und[0]) === Number(0) || this.subscription === null){return false;}
        if(this.subscription === null){return false;}
        if(Number(this.subscription.field_active) === Number(0)){return false;}
        // checking for ANY, automatically returns true since we checked for not 0 or null up here
        if(suscriptions.indexOf(UserDataProvider.PLAN_ANY) > -1){ return true;}
        //regular check
        if(suscriptions.indexOf(this.subscription.field_plan_sus) > -1){ret = true;}
        /*for(let i=0; i< this.userData.field_sub_id.und.length; i++){
          //if(suscriptions.indexOf(parseInt(this.userData.field_sub_id.und[i].value)) > -1) {ret = true; break;}
        }
        return ret;*/
        return true;
    };
    UserDataProvider.prototype.getDateFormat = function (datestring, timestring) {
        //the date is a mess so this methods transforms the method got from drupal into readable date 
        //readable date is this format 2018/06/17 01:10:10Z
        //drupal gives this format 14/5/2018
        var date_elements = datestring.split('/');
        var time_elements = timestring.split(':');
        for (var i = 0; i < time_elements.length; i++) {
            while (time_elements[i].length < 2) {
                time_elements[i] = '0' + time_elements[i];
            }
        }
        if (time_elements.length == 2) {
            time_elements[2] = "00";
        }
        console.log(time_elements);
        return date_elements[2] + "/" + date_elements[1] + "/" + date_elements[0] + " " + time_elements[0] + ":" + time_elements[1] + ":" + time_elements[2] + "Z";
    };
    UserDataProvider.prototype.getSavePlayerIDrequest = function (onseignalDid) {
        var aux_user_data = {
            uid: this.userData.uid,
            field_playerid: { und: [{ value: onseignalDid }] },
        };
        var request = this.druserMan.updateUserd(aux_user_data);
        return request;
    };
    UserDataProvider.prototype.requestRecover = function (name) {
        var body = "{\"name\":\"" + name + "\"}";
        console.log("requesting password reset body ", body);
        var url = this.bu.endpointUrl + 'user/request_new_password.json';
        var observer = this.http.post(url, body);
        return observer;
    };
    UserDataProvider.prototype.updateUser = function () {
        var aux_userData = JSON.parse(JSON.stringify(this.userData));
        aux_userData.field_tipo_de_usuario = UserDataProvider_1.cleanUserDataReferenceField(this.userData.field_tipo_de_usuario);
        __WEBPACK_IMPORTED_MODULE_3__debugger__["a" /* Debugger */].log(['this.userData.field_sub_id', this.userData.field_sub_id]);
        if (this.userData.field_sub_id['und']['0']) {
            __WEBPACK_IMPORTED_MODULE_3__debugger__["a" /* Debugger */].log(['subid setted']);
        }
        else {
            if (this.userData.field_sub_id['und']['0']['value']) {
                aux_userData.field_sub_id = UserDataProvider_1.cleanUserDataReferenceField(this.userData.field_sub_id);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3__debugger__["a" /* Debugger */].log(['subid not setted,remove']);
                delete aux_userData.field_sub_id;
            }
        }
        if (Number(this.userData.field_sub_id.und[0]) === Number(0)) {
            delete aux_userData.field_sub_id;
        }
        console.log("updateUser saving userdata clone", aux_userData);
        return this.druserMan.updateUserd(aux_userData);
    };
    /**
     * Drupal aveces te manda un formato bien raro que no sirve para actualizar los datos, hay que limpiar esos campos
    */
    UserDataProvider.cleanUserDataReferenceField = function (field) {
        var aux_field = { und: [] };
        aux_field.und = new Array();
        for (var i = 0; i < field.und.length; i++) {
            aux_field.und.push(field.und[i].value);
        }
        return aux_field;
    };
    UserDataProvider.getEmptyCita = function () {
        return { Nid: null,
            type: "citas",
            field_date: { und: [{ value: { date: "", time: "" } }] },
            field_hora_inicio: { und: [{ value: { date: "", time: "" } }] },
            field_hora_final: { und: [{ value: { date: "", time: "" } }] },
            field_costo_sobrescribir: { und: [{ value: 0 }] },
            field_paciente: { und: [{ value: "" }] },
            field_email: { und: [{ email: "" }] },
            field_telefono: { und: [{ value: 0 }] },
            field_estado: { und: [{ value: 0 }] },
            field_cita_doctor: { und: [0] },
            field_cita_caja: { und: [0] },
            field_cita_recepcion: { und: [0] },
            field_alias: 0,
            doctor_name: "",
            doctor_alias: "",
            field_servicios_cita: { und: [0] },
            field_cobro: { und: [{ value: 0 }] },
            field_cobro_efectivo: { und: [{ value: 0 }] },
            field_cobro_tarjeta: { und: [{ value: 0 }] },
            field_cobro_cheque: { und: [{ value: 0 }] },
            field_datemsb: { und: [{ value: 0 }] },
            field_hora_iniciomsb: { und: [{ value: null }] },
            field_hora_finalmsb: { und: [{ value: null }] },
            field_retrasda: { und: [{ value: 0 }] },
            aux_servicios_json: null
        };
    };
    UserDataProvider.getEmptyServicio = function () {
        return {
            Nid: null,
            Uid: 0,
            type: 'servicio',
            title: "",
            costo: 0,
            body: { und: [{ value: "" }] },
            field_costo_servicio: { und: [{ value: 0 }] },
            field_doctor_uid: { und: [{ value: 0 }] }
        };
    };
    UserDataProvider.prototype.getEmptyUserd = function () {
        return {
            uid: 0,
            name: "",
            pass: "",
            mail: "",
            status: "",
            roles: [0],
            field_tipo_de_usuario: { und: [0] },
            field_useremail: { und: [{ email: "" }] },
            field_nombre: { und: [{ value: "" }] },
            field_apellidos: { und: [{ value: "" }] },
            field_especialidad: { und: [{ value: "" }] },
            field_alias: { und: [{ value: "" }] },
            field_calle: { und: [{ value: "" }] },
            field_no_ext: { und: [{ value: "" }] },
            field_no_int: { und: [{ value: "" }] },
            field_codigo_postal: { und: [{ value: "" }] },
            field_ciudad: { und: [{ value: "" }] },
            field_colonia: { und: [{ value: "" }] },
            field_pais: { und: [{ value: "" }] },
            field_municipio: { und: [{ value: "" }] },
            field_estado_ubicacion: { und: [{ value: "" }] },
            field_plan_date: { und: [{ value: { date: "" } }] },
            field_forma_pago: { und: [{ value: "" }] },
            tutorial_state: { und: [{ value: 0 }] },
            field_codigo: { und: [{ value: "" }] },
            field_doctores: { und: [0] },
            field_sub_id: { und: [0] },
            field_planholder: { und: [{ value: true }] },
            field_stripe_customer_id: { und: [{ value: "" }] },
            field_src_json_info: { und: [{ value: "" }] }
        };
    };
    //VARIABLES STATICAS, y osea se necesitan getters porque los html no pueden acceder a las variables static que pedo
    //tipos de usuario:
    UserDataProvider.TIPO_DOCTOR = 1;
    UserDataProvider.TIPO_RECEPCION = 2;
    UserDataProvider.TIPO_CAJA = 3;
    UserDataProvider.TIPO_CAJAYRECEPCION = 4;
    UserDataProvider.TIPO_ANY = -1;
    //suscripciones planes cons
    UserDataProvider.PLAN_ANY = -1;
    UserDataProvider = UserDataProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__cordova_available_cordova_available__["a" /* CordovaAvailableProvider */],
            __WEBPACK_IMPORTED_MODULE_5__citas_data_citas_data__["a" /* CitasDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__planes_data_planes_data__["a" /* PlanesDataProvider */],
            __WEBPACK_IMPORTED_MODULE_8__subscription_data_subscription_data__["a" /* SubscriptionDataProvider */],
            __WEBPACK_IMPORTED_MODULE_9__base_url_base_url__["a" /* BaseUrlProvider */],
            __WEBPACK_IMPORTED_MODULE_10__drupal_user_manager_drupal_user_manager__["a" /* DrupalUserManagerProvider */]])
    ], UserDataProvider);
    return UserDataProvider;
    var UserDataProvider_1;
}());

{
}
//# sourceMappingURL=user-data.js.map

/***/ })

},[244]);
//# sourceMappingURL=main.js.map
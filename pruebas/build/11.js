webpackJsonp([11],{

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteModalPageModule", function() { return ReporteModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reporte_modal__ = __webpack_require__(647);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReporteModalPageModule = /** @class */ (function () {
    function ReporteModalPageModule() {
    }
    ReporteModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reporte_modal__["a" /* ReporteModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__reporte_modal__["a" /* ReporteModalPage */]),
            ],
        })
    ], ReporteModalPageModule);
    return ReporteModalPageModule;
}());

//# sourceMappingURL=reporte-modal.module.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loader_loader__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_reportes_manager_reportes_manager__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_report_presentator_report_presentator__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_permissions_permissions__ = __webpack_require__(39);
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
 * Generated class for the ReporteModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReporteModalPage = /** @class */ (function () {
    function ReporteModalPage(navCtrl, navParams, userData, viewCtrl, reportesManager, loader, reportPresentator, permissions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.viewCtrl = viewCtrl;
        this.reportesManager = reportesManager;
        this.loader = loader;
        this.reportPresentator = reportPresentator;
        this.permissions = permissions;
    }
    ReporteModalPage.prototype.ionViewDidLoad = function () {
    };
    /**
     * carga el reporte que se envio como parametro, si no existe este parametro carga el reporte de hoy
     * si no existe el reporte de hoy pide a reportesManager que carge la lista de reportes
     * que genera el reporte de hoy.
    */
    ReporteModalPage.prototype.setReport = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.reportPresentator.setReport(this.navParams.get('reporte'))];
                    case 1:
                        _a.sent();
                        console.log('reportset', this.reportPresentator.actualReport);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * carga las citas del reporte actual
    */
    ReporteModalPage.prototype.loadReport = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.reportPresentator.loadReporte()];
                    case 1:
                        _a.sent();
                        console.log('citas loaded', this.reportPresentator.actualReport.citas);
                        return [2 /*return*/];
                }
            });
        });
    };
    /*cargarServicios(){
      /*console.log("cargando servicios");
      this.actualrepot.servicios = new Array();
      let aux_arr = new Array();
      aux_arr[0]= this.userData.getDoctoresSimpleArray()
      this.userData.getServicios(aux_arr).subscribe(
        (val)=>{
           let aux_results = Object.keys(val).map(function (key) { return val[key]; });
           let dis  = this;
           aux_results.forEach(function(element) {
            dis.actualrepot.servicios.push(element);
          });
          dis.actualrepot.citas.forEach(cita => {
            cita.setAddedServices(dis.actualrepot.servicios);
          });
          this.reportloaded = true;
        },
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("citas w services added",this.actualrepot.citas);
            console.log("loadedServices",this.actualrepot.servicios);
        });
         */
    //}
    ReporteModalPage.prototype.generatePDF = function () {
        this.reportPresentator.generatePDF();
    };
    ReporteModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ReporteModalPage.prototype.setOpendetail = function (cita, as) {
        console.log('setOpendetail ', cita, as);
        cita.opendetail = as;
    };
    ReporteModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reporte-modal',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\reporte-modal\reporte-modal.html"*/'<!--\n\n  Generated template for the ReporteModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content id="reporte_identifier">\n\n    <div class="modal_closer"  (click)="this.dismiss();">Volver</div>\n\n  <div class="reporte_header">\n\n<div class="modalPage_header">\n\n  <div class="modalPage_logo"><img src="assets/imgs/reportes.svg"/></div>\n\n  <div class="modalPage_title">\n\n    <span class="spanBlock midFont"><b>Resumen Diaro</b></span>\n\n    <span class="spanBlock midSubFont">Resumen de tu actvidad durante el día de hoy</span>\n\n  </div>\n\n  </div>\n\n  <div class="modalPage_toolbar">\n\n      <div class="info_tool" *ngIf="!userData.checkUserPermission([userData.TIPO_DOCTOR])">\n\n          <span class="spanBlock midFont"><b>Alias</b></span>\n\n          <span class="spanBlock fonHigh midFont">Alias</span>\n\n        </div>\n\n        <div class="info_tool" *ngIf="!userData.checkUserPermission([userData.TIPO_DOCTOR])">\n\n            <!--<span class="spanBlock midFont"><b>No.</b></span>-->\n\n            <!--span class="spanBlock midFont"><b>01</b></span>-->\n\n          </div>\n\n          <div class="info_tool">\n\n              <span class="spanBlock midFont"><b>Fecha</b></span>\n\n              <span class="spanBlock fontSecondary midFont">{{this.reportPresentator.actualReport.dateString}}</span>\n\n            </div>\n\n    <button class="bgColorSecondary generalButton" (click)="generatePDF()" >Exportar</button>\n\n  </div>\n\n  </div>\n\n\n\n<div class="ReportGrid">\n\n<div class="ReporteRow" *ngFor="let cita of this.reportPresentator.actualReport.citas">\n\n    <div class="ReporteRow_head">\n\n        <span class="rbh_span midFont" *ngIf="cita.opendetail" (click)="setOpendetail(cita,false);"> <img src="assets/imgs/chevron-verde.svg"  class="icon_drapo_sm"> </span>\n\n        <span class="rbh_span midFont" *ngIf="!cita.opendetail" (click)="setOpendetail(cita,true);"> <img src="assets/imgs/chrevron-rojo.svg"  class="icon_drapo_sm"> </span>\n\n        <span class="rbh_span midFont"> <span class="bold">Paciente</span><span class="">{{ cita.paciente }}</span> </span>\n\n        <span class="rbh_span midFont" *ngIf="!userData.checkUserPermission([userData.TIPO_DOCTOR])"> <span class="bold">Doctor</span><span class="">{{ cita.doctor_name }}</span> </span>\n\n        <span class="rbh_span midFont"> <span class="bold">Caja</span><span class="">Nombre de caja </span> </span>\n\n        <span class="rbh_span midFont"> <span class="bold">Duracion</span><span class="fontHigh">{{ cita.duracionText }}</span> </span>\n\n    </div>\n\n    <div class="ReporteRow_TotalServicios">\n\n        <span class="rrt_span midFont"> <span class="bold">Total de Servicios</span><span class="midFont fontSecondary">${{cita.costo}}</span></span>\n\n        <span class="rrt_span midFont"> <span class="bold">Efectivo</span><span class="midFont fontSecondary">${{cita.cobroEfectivo}}</span> </span>\n\n        <span class="rrt_span midFont"> <span class="bold">Tarjeta</span><span class="midFont fontSecondary">${{cita.cobroTarjeta}}</span> </span>\n\n        <span class="rrt_span midFont"> <span class="bold">Cheque</span><span class="midFont fontSecondary">${{cita.cobroCheque}}</span> </span>\n\n        <span class="rrt_span midFont"> <span class="bold">Facturado</span><span class="midFont  fontHigh">${{cita.facturado}}</span> </span>\n\n        <span class="rrt_span midFont" *ngIf="cita.costo > cita.cobro"> <span class="bold">Adeudo</span><span class="fontPrimary">${{cita.costo - cita.cobro}}</span> </span>\n\n    </div>\n\n    <div class="ReporteRow_Desglose" *ngIf="cita.opendetail">\n\n      <div class="ReporteRow_Desglose_row midFont" *ngFor="let servicio of cita.reporteServicios">\n\n       <span class="servicio-item">\n\n         {{servicio.title}}: <span class="midFont fontSecondary">${{servicio.costo}}</span>\n\n        </span> \n\n      </div>\n\n    </div>\n\n</div>\n\n</div>\n\n<div class="ReportesTotales">\n\n    <div class="servicios_totales">\n\n        <span class="bold">No. de Servicios</span>\n\n        <div class="ticket_row midMainFont" *ngFor="let servres of reportPresentator.serviciosResume">{{servres.title}}<span class="midFont fontSecondary">{{servres.times}}</span></div>\n\n      </div>\n\n  <div class="resumen_totales">\n\n    <span class="totalespan midFont"><b>Citas Totales:</b> <span class="fontSecondary">{{reportPresentator.noCitas}}</span></span>\n\n    <span class="totalespan midFont"><b>Citas Canceladas:</b> <span class="fontPrimary">{{reportPresentator.noCancel}}</span></span>\n\n    <!--<span class="totalespan midFont"><b>No Show:</b> <span class="fontPrimary">{{reportPresentator.noShow}}</span></span>-->\n\n    <span class="totalespan midFont"><b>Duración Total:</b> <span class="fontHigh">{{reportPresentator.duracionTotalStr}}</span></span>\n\n  </div>\n\n  <!--div class="Totales_Ingreso">\n\n      \n\n  </div-->\n\n  \n\n  <div class="Totales_Caja">\n\n      <span class="toin_span midFont"><b>Total de Servicios<span class="fontPrimary">${{reportPresentator.costoTotal}}</span></b></span>\n\n      <span class="toin_span midFont"><b>Importe Total<span class="fontSecondary">${{reportPresentator.total}}</span></b></span>\n\n      <span class="toin_span midSubFont">Efectivo:<span class="fontSecondary">${{reportPresentator.totalefectivo}}</span></span>\n\n      <span class="toin_span midSubFont">Tarjeta:<span class="fontSecondary">${{reportPresentator.totalTarjeta}}</span></span>\n\n      <span class="toin_span midSubFont">Cheques:<span class="fontSecondary">${{reportPresentator.totalCheques}}</span></span>\n\n      <span class="toin_span midSubFont">Facturado:<span class="fontSecondary">${{reportPresentator.facturadoTotal}}</span></span>\n\n      <!--<span class="toin_span midSubFont">Cuentas por cobrar:<span class="fontPrimary">${{this.reportPresentator.cajacuentas}}</span></span>-->\n\n      <span class="toin_span midSubFont">Pendiente:<span class="fontPrimary">${{this.reportPresentator.cajaAdeudo+this.reportPresentator.cajacuentas}}</span></span>  \n\n  </div>\n\n  \n\n  \n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\reporte-modal\reporte-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_reportes_manager_reportes_manager__["a" /* ReportesManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_report_presentator_report_presentator__["a" /* ReportPresentatorProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_permissions_permissions__["a" /* PermissionsProvider */]])
    ], ReporteModalPage);
    return ReporteModalPage;
}());

//# sourceMappingURL=reporte-modal.js.map

/***/ })

});
//# sourceMappingURL=11.js.map
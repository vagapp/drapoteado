webpackJsonp([9],{

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportePageModule", function() { return ReportePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reporte__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReportePageModule = /** @class */ (function () {
    function ReportePageModule() {
    }
    ReportePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reporte__["a" /* ReportePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__reporte__["a" /* ReportePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ReportePageModule);
    return ReportePageModule;
}());

//# sourceMappingURL=reporte.module.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loader_loader__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_reportes_manager_reportes_manager__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_report_presentator_report_presentator__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_permissions_permissions__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_date_date__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_citas_data_citas_data__ = __webpack_require__(22);
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
 * Generated class for the ReportePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportePage = /** @class */ (function () {
    function ReportePage(navCtrl, navParams, userData, viewCtrl, reportesManager, loader, reportPresentator, permissions, plat) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.viewCtrl = viewCtrl;
        this.reportesManager = reportesManager;
        this.loader = loader;
        this.reportPresentator = reportPresentator;
        this.permissions = permissions;
        this.plat = plat;
        this.smallMode = false;
    }
    ReportePage.prototype.ionViewDidLoad = function () {
        this.setsmallMode();
    };
    ReportePage.prototype.verTotales = function () {
        this.reportPresentator.openTicket(this.reportPresentator.actualReport);
    };
    ReportePage.prototype.setsmallMode = function () {
        var _this = this;
        console.log('setsmallmode');
        this.plat.ready().then(function (readySource) {
            if (_this.plat.width() < 1024) {
                _this.smallMode = true;
            }
            //console.log('Width: ' + this.plat.width());
            //console.log('Height: ' + this.plat.height());
        });
    };
    /**
     * carga el reporte que se envio como parametro, si no existe este parametro carga el reporte de hoy
     * si no existe el reporte de hoy pide a reportesManager que carge la lista de reportes
     * que genera el reporte de hoy.
    */
    ReportePage.prototype.setReport = function () {
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
    ReportePage.prototype.loadReport = function () {
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
    ReportePage.prototype.generatePDF = function () {
        this.reportPresentator.generatePDF();
    };
    ReportePage.prototype.exportars = function () {
        console.log('exportars');
        this.reportPresentator.exportExcel();
    };
    ReportePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ReportePage.prototype.setOpendetail = function (cita, as) {
        console.log('setOpendetail ', cita, as);
        cita.opendetail = as;
    };
    ReportePage.prototype.getDateString = function (datenumber) {
        var aux_dates = __WEBPACK_IMPORTED_MODULE_7__providers_date_date__["a" /* DateProvider */].getDisplayableDates(new Date(Number(datenumber)));
        //console.log(aux_dates);
        return aux_dates.date + ' - ' + aux_dates.time;
    };
    ReportePage.prototype.moneyFormat = function (money) {
        return __WEBPACK_IMPORTED_MODULE_8__providers_citas_data_citas_data__["a" /* CitasDataProvider */].moneyFormat(money);
    };
    ReportePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reporte',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\reporte\reporte.html"*/'<header></header>\n\n<ion-content id="reporte_identifier">\n\n  <div class="modal_closer"  (click)="this.dismiss();">Volver</div>\n\n<div class="reporte_header">\n\n<div class="modalPage_header">\n\n<div class="modalPage_logo"><img src="assets/imgs/reportes.svg"/></div>\n\n<div class="modalPage_title">\n\n\n\n  <span class="spanBlock midFont" *ngIf="!this.reportPresentator.isAdeudo"><b>Resumen Diario</b></span>\n\n  <span class="spanBlock midSubFont" *ngIf="!this.reportPresentator.isAdeudo">Resumen de tu actividad  durante el día de hoy</span>\n\n  <span class="spanBlock midFont" *ngIf="this.reportPresentator.isAdeudo"><b>Resumen Adeudos</b></span>\n\n  <span class="spanBlock midSubFont" *ngIf="this.reportPresentator.isAdeudo">Resumen de todos los adeudos</span>\n\n</div>\n\n</div>\n\n<div class="modalPage_toolbar">\n\n    <div class="info_tool">\n\n    <span class="spanBlock midFont"><b>Usuario</b></span>\n\n        <span class="spanBlock fontHigh midFont">{{this.userData.showname}}</span>\n\n      </div>\n\n    <div class="info_tool" *ngIf="!userData.checkUserPermission([userData.TIPO_DOCTOR]) && this.reportPresentator.docLoaded">\n\n        <span class="spanBlock midFont"><b>Doctor</b></span>\n\n        <span class="spanBlock fontHigh midFont">{{this.reportPresentator.docAlias}}</span>\n\n      </div>\n\n        <div class="info_tool">\n\n            <span class="spanBlock midFont"><b>Fecha</b></span>\n\n            <span class="spanBlock fontHigh midFont">{{this.reportPresentator.actualReport.dateString}}</span>\n\n          </div>\n\n  <button class="bgColorSecondary generalButton export-big" (click)="exportars()" >Exportar</button>\n\n</div>\n\n</div>\n\n\n\n<div class="ReportGrid reporte-desk">\n\n<div class="ReporteRow" *ngFor="let cita of this.reportPresentator.actualReport.citas">\n\n  <div class="ReporteRow_head">\n\n      <span class="rbh_span midFont" *ngIf="cita.opendetail" (click)="setOpendetail(cita,false);"> <img src="assets/imgs/chevron-verde.svg"  class="icon_drapo_sm"> </span>\n\n      <span class="rbh_span midFont" *ngIf="!cita.opendetail" (click)="setOpendetail(cita,true);"> <img src="assets/imgs/chrevron-rojo.svg"  class="icon_drapo_sm"> </span>\n\n      <span class="rbh_span midFont fontHigh" *ngIf="!reportPresentator.isAdeudo && !this.reportPresentator.isdialy" >{{cita.ultimaFechaDisplayable.date}} - {{cita.ultimaFechaDisplayable.time}}</span>\n\n      <span class="rbh_span midFont fontHigh" *ngIf="!reportPresentator.isAdeudo && this.reportPresentator.isdialy" >{{cita.ultimaFechaDisplayable.time}}</span>\n\n      <span class="rbh_span midFont fontHigh" *ngIf="reportPresentator.isAdeudo" >{{cita.readableDate}}</span>\n\n      <span class="rbh_span midFont"> <span class="bold">Paciente</span><span class="">{{ cita.paciente }}</span> </span>\n\n      <span class="rbh_span midFont" > <span class="bold">Doctor</span><span class="">{{ cita.doctor_name }}</span> </span>\n\n      <span class="rbh_span midFont" *ngIf="cita.cajaSaved"> <span class="bold">Cobrado por</span><span class="">{{cita.caja_name}} </span> <span *ngIf="!reportPresentator.isAdeudo && cita.pagosTotalDoc > 0 && cita.bydoc" class="fontPrimary">{{moneyFormat(cita.pagosTotalDoc)}}</span></span>\n\n    \n\n      <span class="rbh_span midFont" *ngIf="!cita.originactivereport && !reportPresentator.isAdeudo"> <span class="fontPrimary">Anterior</span> </span>\n\n      <span class="rbh_span midFont" *ngIf="!cita.originactivereport && !reportPresentator.isAdeudo">  <span class="rbh_span midFont fontPrimary" >{{cita.getDisplayableDates().date}} - {{cita.getDisplayableDates().time}}</span> </span>\n\n      <span class="rbh_span midFont estado-cita-reporte"> <span class="fontHigh"  [ngStyle]="{\'color\':cita.fstateColor}">{{ cita.fstateLabel }}</span> </span>\n\n  </div>\n\n  <div class="ReporteRow_TotalServicios">\n\n      <span class="rrt_span midFont" *ngIf="cita.originactivereport || reportPresentator.isAdeudo"> <span class="bold">Total de Servicios</span><span class="midFont fontSecondary">{{moneyFormat(cita.costo)}}</span></span>\n\n      <span class="rrt_span midFont"  *ngIf="!reportPresentator.isAdeudo"> <span class="bold">Importe Total </span><span class="midFont fontSecondary">{{moneyFormat(cita.pagosTotal)}}</span></span>\n\n      <span class="rrt_span midFont" *ngIf="cita.costo > cita.cobro && (cita.originactivereport || reportPresentator.isAdeudo)"> <span class="bold">Adeudo</span><span class="fontPrimary">{{moneyFormat(cita.restantePagos)}}</span> </span>\n\n      \n\n      <!--<span class="rrt_span midFont" *ngIf="!userData.checkUserPermission([userData.TIPO_RECEPCION]) && cita.pagosTotalOut>0"> <span class="bold">Cobros por otros</span><span class="fontPrimary">${{cita.pagosTotalOut}}</span> </span>-->\n\n  </div>\n\n  <div class="ReporteRow_Desglose" *ngIf="cita.opendetail">\n\n      <div class="reportRow_desglose_label" *ngIf="!reportPresentator.isAdeudo">Desglose</div>\n\n      <div class="ReporteRow_TotalServicios" *ngIf="!reportPresentator.isAdeudo">\n\n      <span class="rrt_span midFont" *ngIf="!reportPresentator.isAdeudo"> <span class="rlabel">Efectivo</span><span class="midFont fontSecondary">{{moneyFormat(cita.pagosEfectivo)}}</span> </span>\n\n      <span class="rrt_span midFont" *ngIf="!reportPresentator.isAdeudo"> <span class="rlabel">Tarjeta</span><span class="midFont fontSecondary">{{moneyFormat(cita.pagosTarjeta)}}</span> </span>\n\n      <span class="rrt_span midFont" *ngIf="!reportPresentator.isAdeudo"> <span class="rlabel">Cheque</span><span class="midFont fontSecondary">{{moneyFormat(cita.pagosCheque)}}</span> </span>\n\n      <span class="rrt_span midFont" *ngIf="!reportPresentator.isAdeudo"> <span class="rlabel">Facturado</span><span class="midFont  fontHigh">{{moneyFormat(cita.pagosFacturado)}}</span> </span>\n\n      <span class="rrt_span midFont" *ngIf="!reportPresentator.isAdeudo && cita.originactivereport" > <span class="rlabel">Duración</span><span class="fontHigh">{{ cita.duracionText }}</span> </span>\n\n    </div>\n\n      <div class="reportRow_desglose_label" *ngIf="reportPresentator.isAdeudo || cita.originactivereport">Servicios</div>\n\n    <div class="ReporteRow_Servicio row_detail midFont" *ngFor="let servicio of cita.reporteServicios">\n\n     <span class="servicio-item" *ngIf="reportPresentator.isAdeudo || cita.originactivereport">\n\n       {{servicio.title}} <span class="midFont fontSecondary">{{moneyFormat(servicio.costo)}}</span>\n\n      </span> \n\n    </div>\n\n    <div class="reportRow_desglose_label" *ngIf="cita.PagosonFecha.length > 0" >Historial de cobros</div>\n\n    <div class="reportRow_edicion row_detail midFont" *ngFor="let pago of cita.PagosonFecha">\n\n        <span class="servicio-item" >\n\n          <span class="fontSecondary">{{moneyFormat(pago.total)}}</span><span class="midSubFont"> cobrado por</span><span class="midFont bold"> {{pago.name}}</span> <span  class="midFont fontHigh">{{this.getDateString(pago.fec)}}</span>\n\n         </span> \n\n       </div>\n\n       <div class="reportRow_desglose_label">Datos de contacto</div>\n\n       <div class="reportRow_edicion row_detail midFont">\n\n          <span class="servicio-item" >\n\n            <span >{{ cita.ShowCorreo }} </span>\n\n           </span> \n\n           <span class="servicio-item" >\n\n              <span >{{ cita.Showtelefono }} </span>\n\n             </span> \n\n         </div>\n\n    <!--<div class="reportRow_desglose_label">Ediciones</div>\n\n    <div class="reportRow_edicion row_detail midFont" *ngFor="let edicion of cita.edicionesFechas">\n\n      <span class="servicio-item" *ngIf="edicion.cos > 0">\n\n        {{edicion.title}} <span  class="midFont fontSecondary">${{edicion.cos}}</span> <span  class="midFont fontSecondary">{{edicion.dst}}</span>\n\n       </span> \n\n       <span class="servicio-item" *ngIf="edicion.state">\n\n        {{edicion.title}} <span  class="midFont fontSecondary">{{edicion.dst}}</span>\n\n       </span> \n\n     </div>-->\n\n  </div>\n\n</div>\n\n</div>\n\n<div class="ReportGrid reporte-movil">\n\n    <div class="ReporteRow" *ngFor="let cita of this.reportPresentator.actualReport.citas">\n\n      <div class="ReporteRow_head">\n\n        <div class="chevrons">\n\n          <span class="rbh_span midFont" *ngIf="cita.opendetail" (click)="setOpendetail(cita,false);"> <img src="assets/imgs/chevron-verde.svg"  class="icon_drapo_sm"> </span>\n\n          <span class="rbh_span midFont" *ngIf="!cita.opendetail" (click)="setOpendetail(cita,true);"> <img src="assets/imgs/chrevron-rojo.svg"  class="icon_drapo_sm"> </span>\n\n        </div>\n\n        <div class="nombres-reporte">\n\n            <span class="rbh_span midFont fontHigh" *ngIf="!reportPresentator.isAdeudo && !this.reportPresentator.isdialy" >{{cita.ultimaFechaDisplayable.date}} - {{cita.ultimaFechaDisplayable.time}}</span>\n\n            <span class="rbh_span midFont fontHigh" *ngIf="!reportPresentator.isAdeudo && this.reportPresentator.isdialy" >{{cita.ultimaFechaDisplayable.time}}</span>\n\n          <span class="rbh_span midFont"> <span class="bold">Paciente</span><span class="">{{ cita.paciente }}</span> </span>\n\n          <span class="rbh_span midFont" > <span class="bold">Doctor</span><span class="">{{ cita.doctor_name }}</span> </span>\n\n        </div>\n\n        <div class="totalycitas">\n\n          <span class="rrt_span midFont" *ngIf="!reportPresentator.isAdeudo && cita.originactivereport"> <span class="bold">Total de Servicios</span><span class="midFont fontSecondary">{{moneyFormat(cita.costo)}}</span></span>\n\n          <span class="rrt_span midFont" *ngIf="reportPresentator.isAdeudo" > <span class="bold">Adeudo</span><span class="midFont fontPrimary">{{moneyFormat(cita.restantePagos)}}</span></span>\n\n          <span class="rrt_span midFont"  *ngIf="!reportPresentator.isAdeudo"> <span class="bold">Importe Total </span><span class="midFont fontSecondary">{{moneyFormat(cita.pagosTotal)}}</span></span>\n\n          <span class="rbh_span midFont estado-cita-reporte" *ngIf="!reportPresentator.isAdeudo" > <span class="fontHigh"  [ngStyle]="{\'color\':cita.fstateColor}">{{ cita.fstateLabel }}</span> </span>\n\n        </div>\n\n      </div>\n\n      \n\n      <div class="ReporteRow_Desglose" *ngIf="cita.opendetail">\n\n          <div class="reportRow_desglose_label_sm" >Desglose</div>\n\n          <div class="ReporteRow_Desglose_row midFont" >\n\n              <span class="rbh_span midFont" *ngIf="cita.cajaSaved"> <span class="bold">Cobrado por</span><span class="">{{cita.caja_name}} </span> <span *ngIf="!reportPresentator.isAdeudo && cita.pagosTotalDoc > 0 && cita.bydoc" class="fontPrimary">{{moneyFormat(cita.pagosTotalDoc)}}</span></span>\n\n              <span class="rbh_span midFont"> <span class="bold" *ngIf="!reportPresentator.isAdeudo && cita.originactivereport">Duracion</span><span class="fontHigh">{{ cita.duracionText }}</span> </span>\n\n              <div class="ReporteRow_TotalServicios">\n\n                  <span class="rrt_span midFont" *ngIf="!reportPresentator.isAdeudo"> <span class="bold">Efectivo</span><span class="midFont fontSecondary">{{moneyFormat(cita.pagosEfectivo)}}</span> </span>\n\n                  <span class="rrt_span midFont" *ngIf="!reportPresentator.isAdeudo"> <span class="bold">Tarjeta</span><span class="midFont fontSecondary">{{moneyFormat(cita.pagosTarjeta )}}</span> </span>\n\n                  <span class="rrt_span midFont" *ngIf="!reportPresentator.isAdeudo"> <span class="bold">Cheque</span><span class="midFont fontSecondary">{{moneyFormat(cita.pagosCheque)}}</span> </span>\n\n                  <span class="rrt_span midFont" *ngIf="!reportPresentator.isAdeudo"> <span class="bold">Facturado</span><span class="midFont  fontHigh">{{moneyFormat(cita.pagosFacturado)}}</span> </span>\n\n                  <span class="rbh_span midFont" *ngIf="!cita.originactivereport && !reportPresentator.isAdeudo"> <span class="fontPrimary">Anterior</span> </span>\n\n                  <span class="rrt_span midFont" *ngIf="!reportPresentator.isAdeudo && cita.costo > cita.cobro"> <span class="bold">Adeudo</span><span class="fontPrimary">{{moneyFormat(cita.restantePagos)}}</span> </span>\n\n                  <span class="rrt_span midFont" *ngIf="reportPresentator.isAdeudo"> <span class="bold">Total de Servicios</span><span class="fontSecondary">{{moneyFormat(cita.costo)}}</span> </span>\n\n                  <span class="rrt_span midFont" *ngIf="reportPresentator.isAdeudo"> <span class="bold">Importe Total</span><span class="fontSecondary">{{moneyFormat(cita.pagosTotal)}}</span> </span>\n\n                  <!--<span class="totalespan midFont" *ngIf="reportPresentator.totalDoc>0 && !reportPresentator.isAdeudo"><b>Cobros por doctor:</b> <span class="fontPrimary">${{reportPresentator.totalDoc}}</span></span>-->\n\n                  <!--<span class="rrt_span midFont" *ngIf="!userData.checkUserPermission([userData.TIPO_RECEPCION]) && cita.pagosTotalOut>0"> <span class="bold">Cobros externos</span><span class="fontPrimary">${{cita.pagosTotalOut}}</span> </span>-->\n\n                </div>\n\n          </div>\n\n          <div class="reportRow_desglose_label_sm" *ngIf="cita.originactivereport || reportPresentator.isAdeudo">Servicios</div>\n\n          <div class="ReporteRow_Desglose_row midFont" *ngFor="let servicio of cita.reporteServicios">\n\n              \n\n              <span class="servicio-item" *ngIf="cita.originactivereport || reportPresentator.isAdeudo">\n\n                {{servicio.title}}: <span class="midFont fontSecondary">{{moneyFormat(servicio.costo)}}</span>\n\n               </span> \n\n             </div>\n\n             <div class="reportRow_desglose_label_sm" *ngIf="cita.PagosonFecha.length > 0" >Historial de cobros</div>\n\n             <div class="ReporteRow_Desglose_row midFont" *ngFor="let pago of cita.PagosonFecha">\n\n                 <span class="servicio-item" >\n\n                   <span class="fontSecondary">{{moneyFormat(pago.total)}}</span><span class="midSubFont"> cobrado por</span><span  class="midFont bold">{{pago.name}}</span> <span  class="midFont fontHigh">{{this.getDateString(pago.fec)}}</span>\n\n                  </span> \n\n                </div>\n\n                <div class="reportRow_desglose_label_sm">Datos de contacto</div>\n\n       <div class="ReporteRow_Desglose_row  midFont">\n\n          <span class="servicio-item" >\n\n            <span >{{ cita.ShowCorreo }} </span>\n\n           </span> \n\n           <span class="servicio-item" >\n\n              <span >{{ cita.Showtelefono }} </span>\n\n             </span> \n\n         </div>\n\n             <!--<div class="reportRow_desglose_label_sm">Ediciones</div>\n\n    <div class="ReporteRow_Desglose_row midFont" *ngFor="let edicion of cita.edicionesFechas">\n\n      <span class="servicio-item" *ngIf="edicion.cos > 0">\n\n        {{edicion.title}} <span  class="midFont fontSecondary">${{edicion.cos}}</span>\n\n       </span> \n\n       <span class="servicio-item" *ngIf="edicion.state">\n\n        {{edicion.title}}\n\n       </span> \n\n     </div>-->\n\n       \n\n       \n\n      </div>\n\n    </div>\n\n    </div>\n\n\n\n    <div class="ReportesTotales totalesAdeudo" *ngIf="reportPresentator.isAdeudo">\n\n        <!--<span class="totalespan midFont"><b>Total de Servicios:</b> <span class="fontSecondary">${{reportPresentator.costoTotal}}</span></span>-->\n\n        <!--<span class="totalespan midFont"><b>Importe Total:</b> <span class="fontSecondary">${{reportPresentator.total}}</span></span>-->\n\n        <span class="totalespan midFont"><b>Total de Adeudos:</b> <span class="fontPrimary">{{moneyFormat(reportPresentator.cajaAdeudo)}}</span></span>\n\n      <div class="resumen_totales">\n\n        </div>\n\n    </div>\n\n\n\n<div class="ReportesTotales" *ngIf="!smallMode && !reportPresentator.isAdeudo">\n\n  <div class="servicios_totales">\n\n      <span class="bold">Servicios:</span>\n\n      <div class="servicios_totales_service_wraps">\n\n      <div class="ticket_row midSubFont" *ngFor="let servres of reportPresentator.serviciosResume">{{servres.title}}<span class="midFont fontSecondary">{{servres.times}}</span></div>\n\n      </div>\n\n    </div>\n\n<div class="resumen_totales">\n\n  <span class="totalespan midFont"><b>Citas Totales:</b> <span class="fontSecondary">{{reportPresentator.noCitas}}</span></span>\n\n  <span class="totalespan midFont"><b>Adeudos cobrados:</b> <span class="fontSecondary">{{reportPresentator.noAdeudosR}} </span><span class="fontHigh">{{moneyFormat(reportPresentator.totalAdeudo)}}</span></span>\n\n  <span class="totalespan midFont"><b>Citas Canceladas:</b> <span class="fontPrimary">{{reportPresentator.noCancel}}</span></span>\n\n  <!--<span class="totalespan midFont"><b>No Show:</b> <span class="fontPrimary">{{reportPresentator.noShow}}</span></span>-->\n\n  <span class="totalespan midFont"><b>Duración Total:</b> <span class="fontHigh">{{reportPresentator.duracionTotalStr}}</span></span>\n\n  <span class="totalespan midFont" *ngIf="reportPresentator.totalDoc>0"><b>Cobros por doctor:</b> <span class="fontPrimary" >{{moneyFormat(reportPresentator.totalDoc)}}</span></span>\n\n  <!--<span class="totalespan midFont" *ngIf="!userData.checkUserPermission([userData.TIPO_RECEPCION]) && reportPresentator.totalOut>0"><b>Cobrado por otros usuarios:</b> <span class="fontPrimary">${{reportPresentator.totalOut}}</span></span>-->\n\n</div>\n\n\n\n\n\n\n\n<!--div class="Totales_Ingreso">\n\n    \n\n</div-->\n\n\n\n<div class="Totales_Caja_NGRID">\n\n  <div class="Totales_Caja_row">\n\n    <span class="toin_span midFont bold"><b>Total de Servicios: <span class="fontPrimary">{{moneyFormat(reportPresentator.costoTotal)}}</span></b></span>\n\n    <span class="toin_span midFont bold"><b>Importe Total: <span class="fontSecondary">{{moneyFormat(reportPresentator.total)}}</span></b></span>\n\n    <span class="toin_span midFont bold">Adeudo: <span class="fontPrimary">{{moneyFormat(this.reportPresentator.pendiente)}}</span></span>  \n\n  </div>\n\n  <div class="Totales_Caja_row">\n\n    <span class="toin_span midSubFont">Efectivo: <span class="fontSecondary">{{moneyFormat(reportPresentator.totalefectivo)}}</span></span>\n\n    <span class="toin_span midSubFont">Tarjeta: <span class="fontSecondary">{{moneyFormat(reportPresentator.totalTarjeta)}}</span></span>\n\n    <span class="toin_span midSubFont">Cheques: <span class="fontSecondary">{{moneyFormat(reportPresentator.totalCheques)}}</span></span>\n\n   <!-- <span class="toin_span midSubFont">Adeudos Cobrados: <span class="fontSecondary">{{moneyFormat(reportPresentator.totalAdeudo)}}</span></span>-->\n\n    <span class="toin_span midSubFont">Facturado: <span class="fontHigh">{{moneyFormat(reportPresentator.facturadoTotal)}}</span></span>\n\n   \n\n    <!--<span class="toin_span midSubFont">Cuentas por cobrar:<span class="fontPrimary">${{this.reportPresentator.cajacuentas}}</span></span>-->\n\n\n\n  </div>\n\n</div>\n\n</div>\n\n\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-row>\n\n      <ion-col>\n\n          <button ion-button (click)="verTotales()" full> Ver Totales </button>\n\n      </ion-col>\n\n      <ion-col>\n\n          <button class="bgColorSecondary" ion-button (click)="exportars()"  full> Exportar </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\reporte\reporte.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_reportes_manager_reportes_manager__["a" /* ReportesManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_report_presentator_report_presentator__["a" /* ReportPresentatorProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_permissions_permissions__["a" /* PermissionsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]])
    ], ReportePage);
    return ReportePage;
}());

//# sourceMappingURL=reporte.js.map

/***/ })

});
//# sourceMappingURL=9.js.map
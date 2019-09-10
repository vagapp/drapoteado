webpackJsonp([10],{

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteTicketPageModule", function() { return ReporteTicketPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reporte_ticket__ = __webpack_require__(651);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReporteTicketPageModule = /** @class */ (function () {
    function ReporteTicketPageModule() {
    }
    ReporteTicketPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reporte_ticket__["a" /* ReporteTicketPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__reporte_ticket__["a" /* ReporteTicketPage */]),
            ],
        })
    ], ReporteTicketPageModule);
    return ReporteTicketPageModule;
}());

//# sourceMappingURL=reporte-ticket.module.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteTicketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loader_loader__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_reportes_manager_reportes_manager__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_report_presentator_report_presentator__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_permissions_permissions__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_citas_data_citas_data__ = __webpack_require__(22);
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
 * Generated class for the ReporteTicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReporteTicketPage = /** @class */ (function () {
    function ReporteTicketPage(navCtrl, navParams, userData, viewCtrl, reportesManager, loader, reportPresentator, permissions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.viewCtrl = viewCtrl;
        this.reportesManager = reportesManager;
        this.loader = loader;
        this.reportPresentator = reportPresentator;
        this.permissions = permissions;
    }
    ReporteTicketPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReporteTicketPage');
    };
    ReporteTicketPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ReporteTicketPage.prototype.moneyFormat = function (money) {
        return __WEBPACK_IMPORTED_MODULE_7__providers_citas_data_citas_data__["a" /* CitasDataProvider */].moneyFormat(money);
    };
    ReporteTicketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reporte-ticket',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\reporte-ticket\reporte-ticket.html"*/'<!--\n\n  Generated template for the ReporteModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content id="reporte_identifier">\n\n    <div class="modal_closer"  (click)="this.dismiss();">Volver</div>\n\n  <div class="reporte_header">\n\n<div class="modalPage_header">\n\n  <div class="modalPage_logo drapo_icon_logo"><img src="assets/imgs/ticket.svg"/></div>\n\n  <div class="modalPage_title">\n\n    <span class="spanBlock midFont"><b>Resumen</b></span>\n\n    <span class="spanBlock midSubFont">{{this.reportPresentator.actualReport.dateString}}</span>\n\n  </div>\n\n  </div>\n\n  </div>\n\n  <div class="ticket_content">\n\n    <div class="ticket_row_block">\n\n    <div class="ticket_row midMainFont">Total de Servicios <span class="fontPrimary">{{moneyFormat(this.reportPresentator.costoTotal)}}</span></div>\n\n    <div class="ticket_row midMainFont">Importe Total <span class="fontSecondary">{{moneyFormat(this.reportPresentator.total)}}</span></div>\n\n    <div class="ticket_row midSubFont">Efectivo <span class="fontSecondary">{{moneyFormat(this.reportPresentator.totalefectivo)}}</span></div>\n\n    <div class="ticket_row midSubFont">Tarjeta <span class="fontSecondary">{{moneyFormat(this.reportPresentator.totalTarjeta)}}</span></div>\n\n    <div class="ticket_row midSubFont">Cheque  <span class="fontSecondary">{{moneyFormat(this.reportPresentator.totalCheques)}}</span></div>\n\n    <div class="ticket_row midSubFont">Facturado <span class="fontHigh">{{moneyFormat(this.reportPresentator.facturadoTotal)}}</span></div>\n\n    <div class="ticket_row midSubFont">Adeudos Cobrados <span class="fontHigh">{{moneyFormat(reportPresentator.totalAdeudo)}}</span></div>\n\n    <div class="ticket_row midSubFont">Pendiente <span class="fontPrimary">{{moneyFormat(this.reportPresentator.pendiente)}}</span></div>\n\n    <span class="ticket_row midSubFont" *ngIf="reportPresentator.totalDoc>0">Cobros por doctor: <span class="fontPrimary" >{{moneyFormat(reportPresentator.totalDoc)}}</span></span>\n\n   \n\n  </div>\n\n  <div class="ticket_row_block">\n\n    <div class="ticket_row midMainFont">Detalle de Servicios</div>\n\n    <div class="ticket_row midSubFont" *ngFor="let servicio of this.reportPresentator.serviciosResume">{{servicio.title}} <span class="fontHigh">{{servicio.times}}</span> <span class="fontPrimary">{{moneyFormat(servicio.costo)}}</span></div>\n\n  </div>\n\n  <div class="ticket_row_block">\n\n      <div class="ticket_row midMainFont">Citas Totales: <span class="fontSecondary">{{reportPresentator.noCitas}}</span></div>\n\n      <div class="ticket_row midSubFont">Citas Canceladas: <span class="fontPrimary">{{reportPresentator.noCancel}}</span></div>\n\n      <div class="ticket_row midMainFont">Duración total: <span class="fontHigh">{{reportPresentator.duracionTotalStr}}</span></div>\n\n    </div>\n\n    <!--<div class="ticket_row_block">\n\n        <div class="ticket_row midMainFont" *ngFor="let servres of reportPresentator.serviciosResume">{{servres.title}}:{{servres.times}}</div>\n\n    </div>-->\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\reporte-ticket\reporte-ticket.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_reportes_manager_reportes_manager__["a" /* ReportesManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_report_presentator_report_presentator__["a" /* ReportPresentatorProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_permissions_permissions__["a" /* PermissionsProvider */]])
    ], ReporteTicketPage);
    return ReporteTicketPage;
}());

//# sourceMappingURL=reporte-ticket.js.map

/***/ })

});
//# sourceMappingURL=10.js.map
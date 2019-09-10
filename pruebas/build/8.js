webpackJsonp([8],{

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportegrupalPageModule", function() { return ReportegrupalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportegrupal__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReportegrupalPageModule = /** @class */ (function () {
    function ReportegrupalPageModule() {
    }
    ReportegrupalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reportegrupal__["a" /* ReportegrupalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__reportegrupal__["a" /* ReportegrupalPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ReportegrupalPageModule);
    return ReportegrupalPageModule;
}());

//# sourceMappingURL=reportegrupal.module.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportegrupalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_report_presentator_report_presentator__ = __webpack_require__(69);
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
 * Generated class for the ReportegrupalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportegrupalPage = /** @class */ (function () {
    function ReportegrupalPage(navCtrl, navParams, reportPresentator) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reportPresentator = reportPresentator;
    }
    ReportegrupalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportegrupalPage');
    };
    ReportegrupalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reportegrupal',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\reportegrupal\reportegrupal.html"*/'\n\n\n\n<header></header>\n\n<ion-content padding>\n\n  <div class="reporte_header">\n\n    <div class="modalPage_header">\n\n    <div class="modalPage_logo"><img src="assets/imgs/reportes.svg"/></div>\n\n    <div class="modalPage_title">\n\n      <span class="spanBlock midFont"><b>Reporte Grupal</b></span>\n\n      <span class="spanBlock midSubFont">Te mostramos los servicios realizados a lo largo del día por el Grupo</span>\n\n    </div>\n\n    </div>\n\n    <div class="modalPage_toolbar">\n\n            <div class="info_tool">\n\n                <span class="spanBlock midFont"><b>Fecha</b></span>\n\n                <span class="spanBlock fontSecondary midFont">{{this.reportPresentator.actualReport.dateString}}</span>\n\n              </div>\n\n    </div>\n\n    </div>\n\n    \n\n    <table class="results_table">\n\n      <thead>\n\n          <tr>\n\n              <th>Servicio</th>\n\n              <th>Médico</th>\n\n              <th>No</th>\n\n              <!--<th>Cantidad</th>-->\n\n           </tr>\n\n      </thead>\n\n      <tbody>\n\n          <tr *ngFor="let servicio of this.reportPresentator.serviciosResume">\n\n              <td>{{servicio.title}}</td>\n\n              <td>{{servicio.doc}}</td>\n\n              <td>{{servicio.times}}</td>\n\n              <!--<td>{{servicio.costo}}</td>-->\n\n             \n\n           </tr>\n\n      </tbody>\n\n  </table>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\reportegrupal\reportegrupal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_report_presentator_report_presentator__["a" /* ReportPresentatorProvider */]])
    ], ReportegrupalPage);
    return ReportegrupalPage;
}());

//# sourceMappingURL=reportegrupal.js.map

/***/ })

});
//# sourceMappingURL=8.js.map
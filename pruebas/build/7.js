webpackJsonp([7],{

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesPageModule", function() { return ReportesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportes__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReportesPageModule = /** @class */ (function () {
    function ReportesPageModule() {
    }
    ReportesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reportes__["a" /* ReportesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__reportes__["a" /* ReportesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ReportesPageModule);
    return ReportesPageModule;
}());

//# sourceMappingURL=reportes.module.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_reportes_manager_reportes_manager__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_reportes_data_reportes_data__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_report_presentator_report_presentator__ = __webpack_require__(69);
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
 * Generated class for the ReportesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportesPage = /** @class */ (function () {
    function ReportesPage(navCtrl, navParams, modalCtrl, userData, reportesMan, reportesData, loader, alert, reportPresentator) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.userData = userData;
        this.reportesMan = reportesMan;
        this.reportesData = reportesData;
        this.loader = loader;
        this.alert = alert;
        this.reportPresentator = reportPresentator;
    }
    ReportesPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //console.log('ionViewDidLoad ReportesPage');
                        this.loader.presentLoader('cargando ...');
                        return [4 /*yield*/, this.reportesMan.cargarListaReportes()];
                    case 1:
                        _a.sent();
                        this.loader.dismissLoader();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportesPage.prototype.openNuevoreporte = function (report) {
        console.log('openingnuevoreporte');
        /* let Modal = this.modalCtrl.create("NuevoreporteModalPage", undefined, { cssClass: "smallModal nuevoreporteModal" });
         Modal.present({});*/
        //this.openNuevoreporteNoModal();
        this.reportPresentator.openReportGenerate(report);
    };
    ReportesPage.prototype.openReportModal = function (report) {
        this.reportPresentator.openReportModal(report);
        //this.openReportNoModal();
        /*let Modal = this.modalCtrl.create("ReporteModalPage", {reporte:report}, { cssClass: "bigModal reportModal" });
        Modal.present({});*/
    };
    ReportesPage.prototype.openNuevoreporteNoModal = function () {
        this.reportPresentator.loadReportNM().then(function () {
            console.log('report loaded');
        });
    };
    ReportesPage.prototype.openReportNoModal = function () {
        this.reportPresentator.loadReportNM().then(function () {
            console.log('report loaded');
        });
    };
    ReportesPage.prototype.openTicket = function (report) {
        this.reportPresentator.openTicket(report);
    };
    ReportesPage.prototype.elimiarReporte = function (report) {
        var _this = this;
        this.alert.chooseAlert('eliminar reporte', "\u00BFEst\u00E1 seguro que desea eliminar este reporte?", function () { return __awaiter(_this, void 0, void 0, function () {
            var val;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader.presentLoader('eliminando ...');
                        return [4 /*yield*/, this.reportesMan.deleteReport(report).toPromise()];
                    case 1:
                        val = _a.sent();
                        this.loader.dismissLoader();
                        return [2 /*return*/];
                }
            });
        }); }, function () { });
        /*
        let alert = this.alertCtrl.create({
          title: 'eliminar reporte',
          message: `¿Está seguro que desea eliminar este reporte?`,
          buttons: [
            {
              text: 'No',
              role: 'cancel',
              handler: () => {
              }
            },
            {
              text: 'Si',
              handler: () => {
                let loader = this.loadingCtrl.create({
                  content: "Eliminando..."
                });
                loader.present();
                this.reportesMan.deleteReport(report).subscribe(
                  (val) => {
                    this.reportesMan.cargarListaReportes();
                  },
                  (response)=>{
                  }
                );
              }
            }
          ]
        });
        alert.present();
       */
    };
    ReportesPage.prototype.openReporteAdeudos = function () {
        console.log('openReportNoModal', this.reportPresentator.docuid, this.reportPresentator.type);
        this.reportPresentator.setReport();
        this.reportPresentator.type = __WEBPACK_IMPORTED_MODULE_7__providers_report_presentator_report_presentator__["a" /* ReportPresentatorProvider */].REPORT_ADEUDO;
        this.reportPresentator.loadReportNM().then(function () {
        });
    };
    ReportesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reportes',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\reportes\reportes.html"*/'<header></header>\n\n<ion-content padding class="drap_content">\n\n  <div class="modalPage_header">\n\n    <div class="modalPage_logo"><img src="assets/imgs/reportes.svg"/></div>\n\n    <div class="modalPage_title">\n\n      <span class="spanBlock midFont"><b>Reportes</b></span>\n\n      <span class="spanBlock midSubFont">Genera y exporta reportes de tus actividades.</span>\n\n    </div>\n\n    <div class="modalPage_btn_wrapper">\n\n      <!--<button class="bgColorSecondary generalButton" (click)="openReporteAdeudos()">Adeudos</button>-->\n\n     \n\n    </div>\n\n      <!--<button class="bgColorSecondary generalButton floatRight" *ngIf="true" (click)="openNuevoreporte();">Generar Nuevo</button>-->\n\n  </div>\n\n  <div class="Citas_grid result_wrapper">\n\n    <table class="results_table">\n\n        <thead>\n\n            <tr>\n\n                <!--<th>ID</th>-->\n\n                <th>Fecha</th>\n\n                <th></th>\n\n             </tr>\n\n        </thead>\n\n        <tbody>\n\n            <tr *ngIf="this.reportesData.todayReport">\n\n                <!--<td>{{this.reportesData.todayReport.nid}}</td>-->\n\n                <td class="fontSecondary">{{this.reportesData.todayReport.dateString}} del Día</td>\n\n                <td class="toolCol">\n\n                    <div class="flex-toolcol">\n\n                    <!--<img (click)="openNuevoreporte(this.reportesData.todayReport);" src="assets/imgs/reporte.svg"  class="icon_drapo_big">-->\n\n                    <img (click)="openNuevoreporte(this.reportesData.todayReport);" src="assets/imgs/reporte.svg"  class="icon_drapo_big">\n\n                    <!--<img (click)="openTicket(this.reportesData.todayReport);" src="assets/imgs/ticket.svg"  class="icon_drapo_big">-->\n\n                  <!--<button class="bgColorSecondary generalButton tableButton">Exportar</button>-->\n\n                  </div>\n\n                </td>\n\n             </tr>\n\n            <tr *ngFor="let report of this.reportesData.reportes">\n\n                <!--<td>{{report.nid}}</td>-->\n\n                <td class="fontSecondary">{{report.dateString}} <span *ngIf="this.reportesData.todayReport.dialy"></span></td>\n\n                <td class="toolCol">\n\n                  <div class="flex-toolcol">\n\n                  <img (click)="openNuevoreporte(report);" src="assets/imgs/reporte.svg"  class="icon_drapo_big">\n\n                  <!--<img (click)="openTicket(report);" src="assets/imgs/ticket.svg"  class="icon_drapo_big">-->\n\n                  <!--<button class="bgColorSecondary generalButton tableButton">Exportar</button>-->\n\n                  <button class="bgColorPrimary generalButton tableButton" (click)="elimiarReporte(report);">Eliminar</button>\n\n                </div>\n\n                </td>\n\n             </tr>\n\n        </tbody>\n\n    </table>\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\reportes\reportes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_reportes_manager_reportes_manager__["a" /* ReportesManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_reportes_data_reportes_data__["a" /* ReportesDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_report_presentator_report_presentator__["a" /* ReportPresentatorProvider */]])
    ], ReportesPage);
    return ReportesPage;
}());

//# sourceMappingURL=reportes.js.map

/***/ })

});
//# sourceMappingURL=7.js.map
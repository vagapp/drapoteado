webpackJsonp([12],{

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteGeneratePageModule", function() { return ReporteGeneratePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reporte_generate__ = __webpack_require__(646);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReporteGeneratePageModule = /** @class */ (function () {
    function ReporteGeneratePageModule() {
    }
    ReporteGeneratePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reporte_generate__["a" /* ReporteGeneratePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__reporte_generate__["a" /* ReporteGeneratePage */]),
            ],
        })
    ], ReporteGeneratePageModule);
    return ReporteGeneratePageModule;
}());

//# sourceMappingURL=reporte-generate.module.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteGeneratePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loader_loader__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_reportes_manager_reportes_manager__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_report_presentator_report_presentator__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_permissions_permissions__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_doctores_data_doctores_data__ = __webpack_require__(23);
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
 * Generated class for the ReporteGeneratePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReporteGeneratePage = /** @class */ (function () {
    function ReporteGeneratePage(navCtrl, navParams, userData, viewCtrl, reportesManager, loader, reportPresentator, permissions, docData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.viewCtrl = viewCtrl;
        this.reportesManager = reportesManager;
        this.loader = loader;
        this.reportPresentator = reportPresentator;
        this.permissions = permissions;
        this.docData = docData;
    }
    ReporteGeneratePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReporteGeneratePage');
    };
    ReporteGeneratePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ReporteGeneratePage.prototype.openReportNoModal = function () {
        var _this = this;
        console.log('openReportNoModal', this.reportPresentator.docuid, this.reportPresentator.type);
        this.reportPresentator.loadReportNM().then(function () {
            _this.dismiss();
        });
        /*if(Number(this.reportPresentator.type) === Number(this.reportPresentator.REPORT_TICKET) ){
          this.reportPresentator.openTicket(this.reportPresentator.actualReport);
        }else{
        this.reportPresentator.loadReportNM().then(()=>{
          this.dismiss();
        });
      }*/
    };
    ReporteGeneratePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reporte-generate',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\reporte-generate\reporte-generate.html"*/'<ion-content padding>\n\n    <div class="modal_closer" (click)="this.dismiss();">Volver</div>\n\n    <div class="modalPage_header">\n\n      <div class="modalPage_logo"><img src="assets/imgs/reportes.svg"/></div>\n\n      <div class="modalPage_title">\n\n        <span class="spanBlock largeFont"><b>Generar Reporte</b></span>\n\n      </div>\n\n  </div>\n\n  <div class="nuevoreporte_content">\n\n    <div class="CitaDetail_header">\n\n      <table class="results_table">\n\n          <thead>\n\n              <tr>\n\n                  <!--<th>no</th>-->\n\n                  <th>Fecha</th>\n\n               </tr>\n\n          </thead>\n\n          <tbody>\n\n              <tr>\n\n                  <!--<td>{{this.reportPresentator.actualReport.nid}}</td>-->\n\n                  <td class="fontSecondary">{{this.reportPresentator.actualReport.dateString}} </td>\n\n               </tr>\n\n          </tbody>\n\n      </table>\n\n  </div>\n\n  <div class="nuevoreportecontent modalContent">\n\n    <!--<div class="two_cols">-->\n\n    <div class="two_cols_yano">\n\n      <div class="two_cols_section">\n\n        <div class="section_row"> \n\n            <div class="control-group">\n\n                <label class="control control-radio">\n\n                    <input type="radio" name="rtype" value="{{this.reportPresentator.REPORT_COMPLETE}}"  [(ngModel)]="this.reportPresentator.type" checked="true"/>\n\n                    <div class="control_indicator"></div>\n\n                    <img  src="assets/imgs/reporte.svg"  class="icon_drapo_big">\n\n                    Reporte\n\n                </label> \n\n                </div>\n\n        </div>\n\n        <div class="section_row">Incluye toda la información desglosada de las citas del día, su importe, formas de pago, pendiente de cobro y/o citas totales.</div>\n\n      </div>\n\n      <div class="two_cols_section">\n\n          <div class="section_row"> \n\n              <div class="control-group">\n\n                  <label class="control control-radio">\n\n                      <input type="radio" name="rtype" value="{{this.reportPresentator.REPORT_TICKET}}"  [(ngModel)]="this.reportPresentator.type" />\n\n                      <div class="control_indicator"></div>\n\n                      <img  src="assets/imgs/ticket.svg"  class="icon_drapo_big">\n\n                      Resumen\n\n                  </label> \n\n                  </div>\n\n          </div>\n\n          <div class="section_row">Incluye el total de servicios, total de citas, detalles de los servicios y la duración de las citas del día.</div>\n\n        </div>\n\n\n\n        <div class="two_cols_section" *ngIf="this.permissions.checkifgroup();">\n\n          <div class="section_row"> \n\n              <div class="control-group">\n\n                  <label class="control control-radio">\n\n                      <input type="radio" name="rtype" value="{{this.reportPresentator.REPORT_GRUPAL}}"  [(ngModel)]="this.reportPresentator.type" />\n\n                      <div class="control_indicator"></div>\n\n                      <img  src="assets/imgs/reporte.svg"  class="icon_drapo_big">\n\n                      Reporte Grupal\n\n                  </label> \n\n                  </div>\n\n          </div>\n\n          <div class="section_row">Genera un reporte grupal basado en servicios del Grupo Médico.</div>\n\n        </div>\n\n    </div>\n\n    <!--<div class="ModalInput_input">\n\n      <b>Tipo de Archivo:</b>\n\n    <select  class="input_select input">\n\n        <option selected disabled value="0">SELECT</option>\n\n      </select>\n\n    </div>-->\n\n    <!--<div class="ModalInput_input">\n\n        <span class="spanBlock radio_input"><input type="checkbox" class="input" name="copia" value="1" checked><b>Enviar una copia a mi correo</b></span>\n\n    </div>-->\n\n    <div class="buttonWrapper">\n\n        <div class="ModalInput_input" *ngIf="(!this.permissions.checkUserPermission([this.userData.TIPO_DOCTOR])) && (!this.reportPresentator.isgroup)" >\n\n            <b>Doctor:</b>\n\n            <select [(ngModel)]="this.reportPresentator.docuid"  name="field_cita_doctor" class="input_select input">\n\n                <option *ngIf="!this.permissions.checkUserPermission([this.userData.TIPO_DOCTOR]);"  value="0" >General</option>\n\n                <option *ngFor="let doc of this.docData.doctores"  value="{{doc.Uid}}" >{{doc.name}}</option>\n\n                <option *ngIf="this.permissions.checkUserPermission([this.userData.TIPO_DOCTOR]);" selected disabled value="{{this.userData.userData.uid}}">{{this.userData.showname}}</option>\n\n              </select>\n\n          </div>\n\n        \n\n    <button (click)="openReportNoModal(this.reportPresentator.actualReport)" class="bgColorSecondary generalButton" >Generar</button>\n\n    </div>\n\n  </div>\n\n  </div>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\reporte-generate\reporte-generate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_reportes_manager_reportes_manager__["a" /* ReportesManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_report_presentator_report_presentator__["a" /* ReportPresentatorProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_permissions_permissions__["a" /* PermissionsProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_doctores_data_doctores_data__["a" /* DoctoresDataProvider */]])
    ], ReporteGeneratePage);
    return ReporteGeneratePage;
}());

//# sourceMappingURL=reporte-generate.js.map

/***/ })

});
//# sourceMappingURL=12.js.map
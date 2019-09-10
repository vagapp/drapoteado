webpackJsonp([26],{

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitasPageModule", function() { return CitasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__citas__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CitasPageModule = /** @class */ (function () {
    function CitasPageModule() {
    }
    CitasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__citas__["a" /* CitasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__citas__["a" /* CitasPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], CitasPageModule);
    return CitasPageModule;
}());

//# sourceMappingURL=citas.module.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_citas_data_citas_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_citas_presentator_citas_presentator__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_date_date__ = __webpack_require__(41);
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
 * Generated class for the CitasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CitasPage = /** @class */ (function () {
    function CitasPage(citasPresentator, citasData, userData, date) {
        this.citasPresentator = citasPresentator;
        this.citasData = citasData;
        this.userData = userData;
        this.date = date;
        this.actualyear = 0;
        this.actualMonth = 0;
    }
    CitasPage.prototype.ionViewDidLoad = function () {
        this.citasData.defaultSort();
        this.actualyear = 0;
        this.actualMonth = 0;
    };
    CitasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-citas',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\citas\citas.html"*/'<!--\n\n  Generated template for the CitasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<header></header>\n\n<ion-content padding>\n\n  <div class="modalPage_header">\n\n    <div class="modalPage_logo"><img src="assets/imgs/citas.svg"/></div>\n\n    <div class="modalPage_title">\n\n      <span class="spanBlock midFont"><b>Citas Programadas</b></span>\n\n      <span class="spanBlock midSubFont">Revisa y administra tus citas</span>\n\n    </div>\n\n    <div class="modalPage_btn_wrapper">\n\n      <button *ngIf="this.userData.checkUserFeature([this.userData.TIPO_DOCTOR,this.userData.TIPO_RECEPCION,this.userData.TIPO_CAJAYRECEPCION],[this.userData.PLAN_ANY]);"  class="bgColorSecondary generalButton" (click)="citasPresentator.openNuevaCita()">Agregar Nueva</button>\n\n    </div>\n\n    </div>\n\n    \n\n    <div class="filters_wrapper">\n\n      <div class="filtro-nombre"><input [(ngModel)]="citasPresentator.pacienteFilter" (ngModelChange)="citasPresentator.filterChange();"  type="text" placeholder="Nombre del Paciente"> </div>\n\n       <div  class="filtro-fecha">\n\n         <span class="midFont"> <img src="assets/imgs/fecha.svg"  class="icon_drapo"></span> \n\n       <ion-datetime  placeholder="Filtrar por Fecha" [(ngModel)]="citasPresentator.dateFilterStart" (ngModelChange)="citasPresentator.filterChange();" ></ion-datetime>\n\n       <span class="midFont remover"  *ngIf="citasPresentator.filteredCitas" (click)="citasPresentator.removeFilter();" > <img src="assets/imgs/x.svg"  class="icon_drapo_sm"></span>\n\n      </div>\n\n</div>\n\n    <div class="Citas_grid result_wrapper">\n\n        <ng-container *ngFor="let day of this.citasData.daysCitas">\n\n            <div class="anio" *ngIf="day.yearlabel !== 0"> {{day.yearlabel}}</div>\n\n          <div class="mes"  *ngIf="day.monthlabel !== 0"> {{day.monthlabel}}</div>\n\n        <table class="results_table"  >\n\n            <thead  class="header_dayname">\n\n                <tr> \n\n                    <th>Paciente</th>\n\n                    <th *ngIf="!userData.checkUserPermission([userData.TIPO_DOCTOR]);">Doctor</th>\n\n                    <th *ngIf="!userData.checkUserPermission([userData.TIPO_DOCTOR]);">Tipo de Servicio</th>\n\n                    <th>{{day.DayName}}</th>\n\n                    <th>Estado</th>\n\n                    <th></th>\n\n                </tr>\n\n              </thead>\n\n          <tbody>\n\n              <tr *ngFor="let cita of day.citasShowPool">\n\n                  <!--<td>{{cita.data.Nid}}</td>-->\n\n                  <td class="tdmaxedwid">{{cita.data.field_paciente.und[0].value}}</td>\n\n                  <td class="tdmaxedwid" *ngIf=" !this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])">{{cita.doctor_name}}</td>\n\n                  <td class="tdmaxedwid" *ngIf="!this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])">General</td>\n\n                  <td class="tdmaxedwid" ><span class="fontSecondary">{{cita.readableDate}}</span> - <span class="fontHigh">{{cita.readableTime}}</span></td>\n\n                  <td class="tdmaxedwid"  [ngStyle]="{\'color\':cita.stateColor}" >{{cita.getStateString()}}</td>\n\n                  <td  class="toolCol">\n\n                    <!--<img src="assets/imgs/editar.svg" class="icon_drapo" (click)="citasPresentator.editCita(cita)" \n\n                    *ngIf="( \n\n                      ( cita.checkState(citasData.STATE_PENDIENTE) ||  (cita.checkState(citasData.STATE_COBRO) && (this.userData.checkUserPermission([this.userData.TIPO_DOCTOR) ) \n\n                      && this.userData.checkUserPermission([this.userData.TIPO_RECEPCION, this.userData.TIPO_CAJAYRECEPCION]) || this.userData.checkUserPermission([this.userData.TIPO_DOCTOR]) \n\n                      );"/>-->\n\n                    <img src="assets/imgs/editar.svg" class="icon_drapo" (click)="citasPresentator.editCita(cita)" *ngIf=" (cita.checkState(citasData.STATE_PENDIENTE)|| cita.checkState(citasData.STATE_CONFIRMADA)) && this.userData.checkUserPermission([this.userData.TIPO_RECEPCION, this.userData.TIPO_CAJAYRECEPCION, this.userData.TIPO_DOCTOR]) "/>\n\n                    <img src="assets/imgs/editar.svg" class="icon_drapo" (click)="citasPresentator.editCita(cita)" *ngIf=" (cita.checkState(citasData.STATE_COBRO)|| cita.checkState(citasData.STATE_ADEUDO) || cita.checkState(citasData.STATE_FINALIZADA)) && this.userData.checkUserPermission([this.userData.TIPO_DOCTOR]) "/>\n\n                    <button  *ngIf="cita.checkState(citasData.STATE_PENDIENTE) && this.userData.checkUserPermission([this.userData.TIPO_DOCTOR,this.userData.TIPO_RECEPCION, this.userData.TIPO_CAJAYRECEPCION])" (click)="citasPresentator.confirmarCita(cita)"  class="bgColorSecondary generalButton tableButton">Confirmar</button>\n\n                    <button  *ngIf="cita.checkState(citasData.STATE_CONFIRMADA) && this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])" (click)="citasPresentator.iniciarCita(cita);" class="bgColorSecondary generalButton tableButton">Activar</button>\n\n                   <!--<button  *ngIf="cita.checkState(citasData.STATE_CONFIRMADA) && this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])" (click)="citasPresentator.desConfirmarCita(cita);" class="bgColorSecondary generalButton tableButton">No confirmada</button>-->\n\n    \n\n                    <button  *ngIf="cita.checkState(citasData.STATE_ACTIVA) && this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])" (click)="citasPresentator.iniciarCita(cita);" class="bgColorSecondary generalButton tableButton">Ver Progreso</button>\n\n                    <!--<button  *ngIf="cita.checkState(citasData.STATE_ACTIVA) && this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])" (click)="citasPresentator.desactivarCita(cita);" class="bgColorSecondary generalButton tableButton">Desactivar</button>-->\n\n                    <button  *ngIf="(cita.checkState(citasData.STATE_COBRO) || cita.checkState(citasData.STATE_ADEUDO)) && this.userData.checkUserPermission([this.userData.TIPO_DOCTOR, this.userData.TIPO_CAJA, this.userData.TIPO_CAJAYRECEPCION])" (click)="citasPresentator.openProgreso(cita);" class="bgColorSecondary generalButton tableButton">Cobrar</button>\n\n                    <button  *ngIf="!cita.checkState(citasData.STATE_CANCELADA) && !cita.checkState(citasData.STATE_ADEUDO) && !cita.checkState(citasData.STATE_FINALIZADA) && !cita.checkState(citasData.STATE_COBRO) && !this.userData.checkUserPermission([this.userData.TIPO_CAJA])" (click)="citasPresentator.updateStatePop(cita, this.citasData.STATE_CANCELADA)" class="bgColorPrimary generalButton tableButton">Cancelar</button>\n\n                    <button  *ngIf="!cita.checkState(citasData.STATE_FINALIZADA) && !cita.checkState(citasData.STATE_ADEUDO) && !cita.checkState(citasData.STATE_COBRO) && !this.userData.checkUserPermission([this.userData.TIPO_CAJA])" (click)="citasPresentator.delecitaCitaPop(cita)" class="bgColorPrimary generalButton tableButton">Eliminar</button>\n\n                  </td>\n\n               </tr>\n\n          </tbody>\n\n        </table>\n\n        </ng-container>\n\n      \n\n     \n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\citas\citas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_citas_presentator_citas_presentator__["a" /* CitasPresentatorProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_citas_data_citas_data__["a" /* CitasDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_date_date__["a" /* DateProvider */]])
    ], CitasPage);
    return CitasPage;
}());

//# sourceMappingURL=citas.js.map

/***/ })

});
//# sourceMappingURL=26.js.map
webpackJsonp([17],{

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitasPageModule", function() { return CitasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__citas__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(239);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__citas__["a" /* CitasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__citas__["a" /* CitasPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], CitasPageModule);
    return CitasPageModule;
}());

//# sourceMappingURL=citas.module.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_data_user_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_citas_data_citas_data__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_citas_presentator_citas_presentator__ = __webpack_require__(240);
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
    function CitasPage(citasPresentator, citasData, userData) {
        this.citasPresentator = citasPresentator;
        this.citasData = citasData;
        this.userData = userData;
    }
    CitasPage.prototype.ionViewDidLoad = function () {
    };
    CitasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-citas',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\citas\citas.html"*/'<!--\n\n  Generated template for the CitasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<header></header>\n\n<ion-content padding>\n\n  <div class="modalPage_header">\n\n    <div class="modalPage_logo"><img src="assets/imgs/citas.svg"/></div>\n\n    <div class="modalPage_title">\n\n      <span class="spanBlock midFont"><b>Citas Programadas</b></span>\n\n      <span class="spanBlock midSubFont">Revisa y administra tus citas</span>\n\n    </div>\n\n      <button *ngIf="this.userData.checkUserFeature([this.userData.TIPO_DOCTOR,this.userData.TIPO_RECEPCION,this.userData.TIPO_CAJAYRECEPCION],[this.userData.PLAN_ANY]);"  class="bgColorSecondary generalButton floatRight" (click)="citasPresentator.openNuevaCita()">Agregar Nueva</button>\n\n  </div>\n\n  <div class="Citas_grid result_wrapper">\n\n    <table class="results_table">\n\n        <thead>\n\n            <tr>\n\n                <th>no</th>\n\n                <th>Paciente</th>\n\n                <th *ngIf="!userData.checkUserPermission([userData.TIPO_DOCTOR]);">Doctor</th>\n\n                <th *ngIf="!userData.checkUserPermission([userData.TIPO_DOCTOR]);">Tipo de Servicio</th>\n\n                <th>Fecha</th>\n\n                <th>Estado</th>\n\n                <th></th>\n\n             </tr>\n\n        </thead>\n\n        <tbody>\n\n            <tr *ngFor="let cita of this.citasData.citas">\n\n                <td>01</td>\n\n                <td>{{cita.data.field_paciente.und[0].value}}</td>\n\n                <td *ngIf="!this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])">{{cita.data.doctor_name}} / cita.doctor_alias</td>\n\n                <td *ngIf="!this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])">General</td>\n\n                <td><span class="fontSecondary">{{cita.getDisplayableDates().date}}</span> - <span class="fontHigh">{{cita.getDisplayableDates().time}}</span></td>\n\n                <td>{{cita.getStateString()}}</td>\n\n                <td class="toolCol">\n\n                  <img src="assets/imgs/editar.svg" class="icon_drapo" (click)="citasPresentator.editCita(cita)" *ngIf="this.userData.checkUserPermission([this.userData.TIPO_DOCTOR,this.userData.TIPO_RECEPCION, this.userData.TIPO_CAJAYRECEPCION]);"/>\n\n                  <button  *ngIf="cita.checkState(citasData.STATE_PENDIENTE) && this.userData.checkUserPermission([this.userData.TIPO_DOCTOR,this.userData.TIPO_RECEPCION, this.userData.TIPO_CAJAYRECEPCION])" (click)="citasPresentator.confirmarCita(cita)"  class="bgColorSecondary generalButton tableButton">Confirmar</button>\n\n                  <button  *ngIf="cita.checkState(citasData.STATE_CONFIRMADA) && this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])" (click)="citasPresentator.iniciarCita(cita);" class="bgColorSecondary generalButton tableButton">Activar</button>\n\n                  <button  *ngIf="cita.checkState(citasData.STATE_ACTIVA) && this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])" (click)="citasPresentator.iniciarCita(cita);" class="bgColorSecondary generalButton tableButton">Ver Progreso</button>\n\n                  <button  *ngIf="cita.checkState(citasData.STATE_COBRO) && this.userData.checkUserPermission([this.userData.TIPO_DOCTOR, this.userData.TIPO_CAJA, this.userData.TIPO_CAJAYRECEPCION])" (click)="citasPresentator.openProgreso(cita);" class="bgColorSecondary generalButton tableButton">Cobrar</button>\n\n                  <button  *ngIf="!cita.checkState(citasData.STATE_CANCELADA)" (click)="citasPresentator.updateStatePop(cita, this.citasData.STATE_CANCELADA)" class="bgColorPrimary generalButton tableButton">Cancelar</button>\n\n                  <button  (click)="citasPresentator.delecitaCitaPop(cita)" class="bgColorPrimary generalButton tableButton">Eliminar</button>\n\n                </td>\n\n             </tr>\n\n        </tbody>\n\n    </table>\n\n  </div>\n\n<footer></footer>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\citas\citas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_citas_presentator_citas_presentator__["a" /* CitasPresentatorProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_citas_data_citas_data__["a" /* CitasDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], CitasPage);
    return CitasPage;
}());

//# sourceMappingURL=citas.js.map

/***/ })

});
//# sourceMappingURL=17.js.map
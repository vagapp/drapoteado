webpackJsonp([23],{

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_drupal_user_manager_drupal_user_manager__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_citas_presentator_citas_presentator__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_report_presentator_report_presentator__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_reportes_data_reportes_data__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_permissions_permissions__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_doctores_data_doctores_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_citas_data_citas_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_tutorial_tutorial__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_date_date__ = __webpack_require__(41);
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
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, userData, userMan, citasPresentator, reportPresentator, reportesData, permissions, doctoresData, citasData, tutoralProvider, dates) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.userData = userData;
        this.userMan = userMan;
        this.citasPresentator = citasPresentator;
        this.reportPresentator = reportPresentator;
        this.reportesData = reportesData;
        this.permissions = permissions;
        this.doctoresData = doctoresData;
        this.citasData = citasData;
        this.tutoralProvider = tutoralProvider;
        this.dates = dates;
        this.rifa = 'nadien';
        this.todayDay = __WEBPACK_IMPORTED_MODULE_11__providers_date_date__["a" /* DateProvider */].getStringDate(new Date());
        //console.log('hello',permissions.subsData.subscription);
    }
    HomePage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.todayDay;
                if (this.userData.userData.uid !== 0) {
                    this.tutoralProvider.checkNStart();
                    /*if(this.permissions.checkUserSuscription([UserDataProvider.PLAN_ANY]) && this.userData.userData.tutorial_state.und && Number(this.userData.userData.tutorial_state.und[0].value) === 0){
                      let Modal = this.modalCtrl.create("WelcomeModalPage");
                      Modal.present({});
                      this.userData.userData.tutorial_state.und[0].value = "1";
                      let cloneData = {
                        uid:this.userData.userData.uid,
                        field_tutorial_state: {und: [{value: "1"}]},
                      }
                      await this.userMan.updateUserd(cloneData).toPromise();
                      console.log('update tutorial at dismiss');
                  }*/
                }
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.iniciarCita = function (cita) {
        this.citasPresentator.iniciarCita(cita);
    };
    HomePage.prototype.confirmarCita = function (cita) {
        this.citasPresentator.confirmarCita(cita);
    };
    HomePage.prototype.openReportModal = function () {
        //this.reportPresentator.openReportModal();
        //this.reportPresentator.openReportGenerate();
        this.reportPresentator.openTicket();
    };
    HomePage.prototype.openProgreso = function (cita) {
        var Modal = this.modalCtrl.create("ProgresocitaModalPage", { cita: cita }, { cssClass: "smallModal progressModal" });
        Modal.onDidDismiss(function (data) {
            //this.userData.cargarCitas();
        });
        Modal.present({});
    };
    HomePage.prototype.openFacturacion = function () {
        this.navCtrl.setRoot("FacturacionPage");
    };
    HomePage.prototype.openRegister = function () {
        var Modal = this.modalCtrl.create("RegisterModalPage", undefined, { cssClass: "bigModal" });
        Modal.present({});
    };
    HomePage.prototype.openCitas = function () {
        this.navCtrl.setRoot("CitasPage");
    };
    HomePage.prototype.openServicios = function () {
        this.navCtrl.setRoot("ServiciosPage");
    };
    HomePage.prototype.openUsuarios = function () {
        this.navCtrl.setRoot("UsuariosPage");
    };
    HomePage.prototype.openReportes = function () {
        this.navCtrl.setRoot("ReportesPage");
    };
    HomePage.prototype.openNuevaCita = function () {
        var Modal = this.modalCtrl.create("NuevacitaModalPage", undefined, { cssClass: "nuevaCitaModal smallModal" });
        Modal.present({});
    };
    HomePage.prototype.calcularRifa = function () {
        var random = Math.floor(Math.random() * 6) + 1;
        switch (random) {
            case 1:
                this.rifa = "ernesto";
                break;
            case 2:
                this.rifa = "andrea";
                break;
            case 3:
                this.rifa = "panchito";
                break;
            case 4:
                this.rifa = "lucia";
                break;
            case 5:
                this.rifa = "alberto";
                break;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\home\home.html"*/'\n\n<header></header>\n\n<ion-content class="contentdown">\n\n  <div class="section_grid homegrid">\n\n        <div class="section">\n\n                <span class="spanBlock bigFont"><span class="fontPrimary"><b>Bienvenido</b></span> <span class="spanBlock">{{this.userData.showname}} </span><!--<span class="rol_title" *ngIf="this.userData.checkUserFeature([this.userData.TIPO_CAJA,this.userData.TIPO_RECEPCION,this.userData.TIPO_CAJAYRECEPCION],[this.userData.PLAN_ANY],false);" >( {{this.userData.getTipoUsuarioString(this.userData.userData.field_tipo_de_usuario[\'und\'][0][\'value\'])}} )</span>--></span>\n\n                <span class="spanBlock bigSubFont">¿En qué podemos ayudarte hoy?</span>\n\n        </div>\n\n        <div class="section"  *ngIf="this.permissions.checkUserFeature([this.userData.TIPO_ANY],[this.userData.PLAN_ANY],false);">\n\n                        <div class="section_content">\n\n                             <!--<span class="spanBlock bigSubFont">Citas Programadas para Hoy: <span class="fontPrimary">{{0}}</span></span>-->\n\n                        </div>\n\n                       <div class="section_button_home section_button_vertical">\n\n                        <span class="home_halfbtn" *ngIf="this.permissions.checkUserFeature([this.userData.TIPO_DOCTOR, this.userData.TIPO_RECEPCION,this.userData.TIPO_CAJAYRECEPCION],[this.userData.PLAN_ANY],false);" (click)="openNuevaCita()"> <img src="assets/imgs/nueva-cita.svg"  class="icon_drapo"><span>Nueva Cita</span></span>\n\n                        <span class="home_halfbtn" (click)="openReportModal(this.reportesData.todayReport)">  <img src="assets/imgs/ver-resumen.svg"  class="icon_drapo"><span>Resumen</span></span>\n\n                        <!--<button class="generalButton bgColorSecondary" (click)="openReportModal(this.reportesData.todayReport)">Resumen</button>-->\n\n                        <!--<button  *ngIf="this.permissions.checkUserFeature([this.userData.TIPO_DOCTOR, this.userData.TIPO_RECEPCION,this.userData.TIPO_CAJAYRECEPCION],[this.userData.PLAN_ANY],false);"  class="bgColorSecondary generalButton" (click)="openNuevaCita()">Nueva Cita</button>-->\n\n                        </div>\n\n        </div>\n\n\n\n                <!-- Agregar nueva cita para recepciones -->\n\n        <!--<div class="section" *ngIf="this.permissions.checkUserFeature([this.userData.TIPO_DOCTOR, this.userData.TIPO_RECEPCION,this.userData.TIPO_CAJAYRECEPCION],[this.userData.PLAN_ANY],false);" >\n\n                <div class="section_button">       \n\n                <button class="bgColorSecondary generalButton" (click)="openNuevaCita()">Agregar Nueva Cita</button>\n\n        </div> \n\n                        </div>-->\n\n\n\n\n\n\n\n                        \n\n                        </div>\n\n     <!--\n\n                        <div class="section" *ngIf="permissions.checkUserFeature([userData.TIPO_ANY],[userData.PLAN_ANY])">\n\n                                <div class="section_content">\n\n                              <div class="section_icon">\n\n                                      <img src="assets/imgs/citas.svg"/>\n\n                              </div>\n\n                              <div class="section_text midFont">\n\n                                <span class="spanBlock midMainFont">Citas Programadas</span>\n\n                                <span class="spanBlock midSubFont">Revisa y administra tus citas programadas. </span>\n\n                                \n\n                              </div>\n\n                              </div>\n\n                              <div class="section_button">\n\n                              <button class="generalButton bgColorPrimary" (click)="openCitas()">Ir</button>\n\n                              </div>\n\n                            </div>\n\n                            </div>-->\n\n                            <div class="filters_wrapper">\n\n                                        <div class="filtro-nombre"><input [(ngModel)]="citasPresentator.pacienteFilter" (ngModelChange)="citasPresentator.filterChange();"  type="text" placeholder="Nombre del Paciente"> </div>\n\n                                         <div  class="filtro-fecha">\n\n                                           <span class="midFont"> <img src="assets/imgs/fecha.svg"  class="icon_drapo"></span> \n\n                                         <ion-datetime  placeholder="Filtrar por Fecha" [(ngModel)]="citasPresentator.dateFilterStart" (ngModelChange)="citasPresentator.filterChange();" ></ion-datetime>\n\n                                         <span class="midFont remover"  *ngIf="citasPresentator.filteredCitas" (click)="citasPresentator.removeFilter();" > <img src="assets/imgs/x.svg"  class="icon_drapo_sm"></span>\n\n                                        </div>\n\n                              </div>\n\n                              <div class="Citas_grid result_wrapper">\n\n                                <ng-container *ngFor="let day of this.citasData.daysCitas ">\n\n                                   \n\n                                    <ng-container *ngIf=" day.DayName === this.todayDay || citasPresentator.filteredCitas">\n\n                                  \n\n                                <table class="results_table"  >\n\n                                    <thead  class="header_dayname">\n\n                                        <tr> \n\n                                            <th>Paciente</th>\n\n                                            <th *ngIf="!userData.checkUserPermission([userData.TIPO_DOCTOR]);">Doctor</th>\n\n                                            <th *ngIf="!userData.checkUserPermission([userData.TIPO_DOCTOR]);">Tipo de Servicio</th>\n\n                                            <th>{{day.DayName}}</th>\n\n                                            <th>Estado</th>\n\n                                            <th></th>\n\n                                        </tr>\n\n                                      </thead>\n\n                                  <tbody>\n\n                                      <tr *ngFor="let cita of day.citasShowPool">\n\n                                          <!--<td>{{cita.data.Nid}}</td>-->\n\n                                          <td class="tdmaxedwid">{{cita.data.field_paciente.und[0].value}}</td>\n\n                                          <td class="tdmaxedwid" *ngIf=" !this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])">{{cita.doctor_name}}</td>\n\n                                          <td class="tdmaxedwid" *ngIf="!this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])">General</td>\n\n                                          <td class="tdmaxedwid" ><span class="fontSecondary">{{cita.readableDate}}</span> - <span class="fontHigh">{{cita.readableTime}}</span></td>\n\n                                          <td class="tdmaxedwid"  [ngStyle]="{\'color\':cita.stateColor}" >{{cita.getStateString()}}</td>\n\n                                          <td  class="toolCol">\n\n                                            <!--<img src="assets/imgs/editar.svg" class="icon_drapo" (click)="citasPresentator.editCita(cita)" \n\n                                            *ngIf="( \n\n                                              ( cita.checkState(citasData.STATE_PENDIENTE) ||  (cita.checkState(citasData.STATE_COBRO) && (this.userData.checkUserPermission([this.userData.TIPO_DOCTOR) ) \n\n                                              && this.userData.checkUserPermission([this.userData.TIPO_RECEPCION, this.userData.TIPO_CAJAYRECEPCION]) || this.userData.checkUserPermission([this.userData.TIPO_DOCTOR]) \n\n                                              );"/>-->\n\n                                            <img src="assets/imgs/editar.svg" class="icon_drapo" (click)="citasPresentator.editCita(cita)" *ngIf=" (cita.checkState(citasData.STATE_PENDIENTE)|| cita.checkState(citasData.STATE_CONFIRMADA)) && this.userData.checkUserPermission([this.userData.TIPO_RECEPCION, this.userData.TIPO_CAJAYRECEPCION, this.userData.TIPO_DOCTOR]) "/>\n\n                                            <img src="assets/imgs/editar.svg" class="icon_drapo" (click)="citasPresentator.editCita(cita)" *ngIf=" (cita.checkState(citasData.STATE_COBRO)|| cita.checkState(citasData.STATE_ADEUDO) || cita.checkState(citasData.STATE_FINALIZADA)) && this.userData.checkUserPermission([this.userData.TIPO_DOCTOR]) "/>\n\n                                            <button  *ngIf="cita.checkState(citasData.STATE_PENDIENTE) && this.userData.checkUserPermission([this.userData.TIPO_DOCTOR,this.userData.TIPO_RECEPCION, this.userData.TIPO_CAJAYRECEPCION])" (click)="citasPresentator.confirmarCita(cita)"  class="bgColorSecondary generalButton tableButton">Confirmar</button>\n\n                                            <button  *ngIf="cita.checkState(citasData.STATE_CONFIRMADA) && this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])" (click)="citasPresentator.iniciarCita(cita);" class="bgColorSecondary generalButton tableButton">Activar</button>\n\n                                           <!--<button  *ngIf="cita.checkState(citasData.STATE_CONFIRMADA) && this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])" (click)="citasPresentator.desConfirmarCita(cita);" class="bgColorSecondary generalButton tableButton">No confirmada</button>-->\n\n                            \n\n                                            <button  *ngIf="cita.checkState(citasData.STATE_ACTIVA) && this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])" (click)="citasPresentator.iniciarCita(cita);" class="bgColorSecondary generalButton tableButton">Ver Progreso</button>\n\n                                            <!--<button  *ngIf="cita.checkState(citasData.STATE_ACTIVA) && this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])" (click)="citasPresentator.desactivarCita(cita);" class="bgColorSecondary generalButton tableButton">Desactivar</button>-->\n\n                                            <button  *ngIf="(cita.checkState(citasData.STATE_COBRO) || cita.checkState(citasData.STATE_ADEUDO)) && this.userData.checkUserPermission([this.userData.TIPO_DOCTOR, this.userData.TIPO_CAJA, this.userData.TIPO_CAJAYRECEPCION])" (click)="citasPresentator.openProgreso(cita);" class="bgColorSecondary generalButton tableButton">Cobrar</button>\n\n                                            <button  *ngIf="!cita.checkState(citasData.STATE_CANCELADA) && !cita.checkState(citasData.STATE_ADEUDO) && !cita.checkState(citasData.STATE_FINALIZADA) && !cita.checkState(citasData.STATE_COBRO) && !this.userData.checkUserPermission([this.userData.TIPO_CAJA])" (click)="citasPresentator.updateStatePop(cita, this.citasData.STATE_CANCELADA)" class="bgColorPrimary generalButton tableButton">Cancelar</button>\n\n                                            <button  *ngIf="!cita.checkState(citasData.STATE_FINALIZADA) && !cita.checkState(citasData.STATE_ADEUDO) && !cita.checkState(citasData.STATE_COBRO) && !this.userData.checkUserPermission([this.userData.TIPO_CAJA])" (click)="citasPresentator.delecitaCitaPop(cita)" class="bgColorPrimary generalButton tableButton">Eliminar</button>\n\n                                          </td>\n\n                                       </tr>\n\n                                  </tbody>\n\n                                </table>\n\n                              </ng-container>\n\n                                </ng-container>\n\n                              \n\n                             \n\n                            </div>\n\n      <!--<div class="section doctor_section" *ngFor="let doctor of this.doctoresData.doctores" >\n\n              <span *ngIf="!this.permissions.checkUserPermission([this.userData.TIPO_DOCTOR])" class="spanBlock midMainFont">{{doctor.name}}</span>\n\n              <span class="spanBlock midSubFont">Citas pendientes <span class="midMainFont">{{doctor.citasPendientes.length}}</span></span>\n\n              <span *ngIf="doctor.citaActiva" class="spanBlock midSubFont">Se encuentra atendiendo a <span class="midMainFont">{{doctor.citaActiva.paciente}}</span></span>\n\n              <button  *ngIf="doctor.citaActiva && doctor.citaActiva.checkState(citasData.STATE_ACTIVA) && this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])" (click)="citasPresentator.iniciarCita(doctor.citaActiva);" class="bgColorSecondary generalButton tableButton">Ver Progreso</button>\n\n              <span *ngIf="doctor.nextCita" class="spanBlock midSubFont"> Próxima cita con <span class="midMainFont">{{doctor.nextCita.paciente}}</span> dentro de <span class="midMainFont">{{doctor.nextCita.getUntilTimeString()}}</span></span>\n\n              <button  *ngIf="doctor.nextCita && doctor.nextCita.checkState(this.citasData.STATE_PENDIENTE) && this.userData.checkUserPermission([this.userData.TIPO_DOCTOR,this.userData.TIPO_RECEPCION, this.userData.TIPO_CAJAYRECEPCION])" (click)="citasPresentator.confirmarCita(doctor.nextCita)"  class="bgColorSecondary generalButton tableButton">Confirmar</button>\n\n              <button  *ngIf="!doctor.citaActiva && doctor.nextCita && doctor.nextCita.checkState(citasData.STATE_CONFIRMADA) && this.userData.checkUserPermission([this.userData.TIPO_DOCTOR])" (click)="citasPresentator.iniciarCita(doctor.nextCita);" class="bgColorSecondary generalButton tableButton">Activar</button>\n\n              <span *ngIf="!doctor.nextCita && !doctor.citaActiva" class="spanBlock midSubFont">No tiene citas pendientes</span>\n\n             \n\n      </div>-->\n\n                <!--\n\n                <div class="section" *ngIf="userData.showReception">\n\n                                <div class="section_dates">\n\n                                      <span class="spanBlock midFont">Nombre del Doctor</span>\n\n                                      <span class="spanBlock midFont"><b>Nombre del Paciente</b></span>\n\n                                      <span class="spanBlock midFont description">Descripción</span>\n\n                                </div>\n\n                                <div class="section_button">\n\n                                <button class="generalButton bgColorSecondary" (click)="openReportModal()">Notificar</button>\n\n                                <button class="generalButton bgColorPrimary" (click)="openReportModal()">Cancelar</button>\n\n                                </div>\n\n                </div>\n\n\n\n                <div class="section" *ngIf="userData.showReception">\n\n                        <div class="section_dates">\n\n                                <span class="spanBlock midFont">Nombre del Doctor</span>\n\n                                <span class="spanBlock midFont"><b>Nombre del Paciente</b></span>\n\n                                <span class="spanBlock midFont description">Descripción</span>\n\n                        </div>\n\n                        <div class="section_button">\n\n                                <button class="generalButton bgColorHigh" (click)="openProgreso()">Cobrar</button>\n\n                        </div>\n\n                </div>\n\n                -->\n\n                <!--\n\n                <div class="section_grid">\n\n  <div class="section" *ngIf="this.permissions.checkUserFeature([this.userData.TIPO_DOCTOR],[this.userData.PLAN_ANY],false);">\n\n      <div class="section_content">\n\n    <div class="section_icon">\n\n            <img src="assets/imgs/servicios.svg"/>\n\n    </div>\n\n    <div class="section_text midFont">\n\n      <span class="spanBlock midMainFont">Alta de Servicios y Costos</span>\n\n      <span class="spanBlock midSubFont">Administra, agrega o elimina servicios para tus consultas. </span>\n\n    </div>\n\n    </div>\n\n    <div class="section_button">\n\n    <button class="generalButton bgColorPrimary" (click)="openServicios()">Ir</button>\n\n    </div>\n\n  </div>\n\n\n\n\n\n  <div class="section"  *ngIf="this.permissions.checkUserFeature([this.userData.TIPO_DOCTOR],[this.userData.PLAN_ANY],false);">\n\n        <div class="section_content">\n\n      <div class="section_icon">\n\n              <img src="assets/imgs/usuarios.svg"/>\n\n      </div>\n\n      <div class="section_text midFont">\n\n        <span class="spanBlock midMainFont">Alta de Usuarios</span>\n\n        <span class="spanBlock midSubFont">Da de alta a los usuarios que utilizarán esta aplicación. </span>\n\n      </div>\n\n      </div>\n\n      <div class="section_button">\n\n      <button class="generalButton bgColorPrimary" (click)="openUsuarios()">Ir</button>\n\n      </div>\n\n    </div>\n\n\n\n    \n\n\n\n    \n\n\n\n        \n\n\n\n\n\n        <div class="section" *ngIf="permissions.checkUserFeature([userData.TIPO_ANY],[userData.PLAN_ANY])">\n\n                <div class="section_content">\n\n              <div class="section_icon">\n\n                      <img src="assets/imgs/reportes.svg"/>\n\n              </div>\n\n              <div class="section_text midFont">\n\n                <span class="spanBlock midMainFont">Reportes</span>\n\n                <span class="spanBlock midSubFont">Genera y exporta el reporte de tus actividades. </span>\n\n              </div>\n\n              </div>\n\n              <div class="section_button">\n\n              <button class="generalButton bgColorPrimary" (click)="openReportes()">Ir</button>\n\n              </div>\n\n            </div>\n\n\n\n            \n\n\n\n            <div class="section"  *ngIf="permissions.checkUserFeature([userData.TIPO_DOCTOR],null)" >\n\n                    <div class="section_content">f\n\n                  <div class="section_icon">\n\n                          <img src="assets/imgs/datos.svg"/>\n\n                  </div>\n\n                  <div class="section_text midFont">\n\n                    <span class="spanBlock midMainFont">Mis Datos</span>\n\n                    <span class="spanBlock midSubFont">Configura tus datos personales y métodos\n\n                            de pago. </span>\n\n                    \n\n                  </div>\n\n                  </div>\n\n                  <div class="section_button">\n\n                  <button class="generalButton bgColorPrimary" (click)="openRegister()">Ir</button>\n\n                  </div>\n\n                </div>\n\n\n\n                <div class="section" *ngIf="permissions.checkUserPlanHolder() && permissions.checkUserFeature([userData.TIPO_ANY],[userData.PLAN_ANY])" >\n\n                        <div class="section_content">\n\n                      <div class="section_icon">\n\n                              <img src="assets/imgs/datos.svg"/>\n\n                      </div>\n\n                      <div class="section_text midFont">\n\n                        <span class="spanBlock midMainFont">Facturación</span>\n\n                        <span class="spanBlock midSubFont">Configura tus datos personales y métodos de pago.</span>\n\n                      </div>\n\n                      </div>\n\n                      <div class="section_button">\n\n                      <button class="generalButton bgColorPrimary">Ir</button>\n\n                      </div>\n\n                    </div>\n\n    </div>-->\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_drupal_user_manager_drupal_user_manager__["a" /* DrupalUserManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_citas_presentator_citas_presentator__["a" /* CitasPresentatorProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_report_presentator_report_presentator__["a" /* ReportPresentatorProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_reportes_data_reportes_data__["a" /* ReportesDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_permissions_permissions__["a" /* PermissionsProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_citas_data_citas_data__["a" /* CitasDataProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_tutorial_tutorial__["a" /* TutorialProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_date_date__["a" /* DateProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=23.js.map
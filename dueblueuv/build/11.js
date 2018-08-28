webpackJsonp([11],{

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoreporteModalPageModule", function() { return NuevoreporteModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuevoreporte_modal__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NuevoreporteModalPageModule = /** @class */ (function () {
    function NuevoreporteModalPageModule() {
    }
    NuevoreporteModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nuevoreporte_modal__["a" /* NuevoreporteModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nuevoreporte_modal__["a" /* NuevoreporteModalPage */]),
            ],
        })
    ], NuevoreporteModalPageModule);
    return NuevoreporteModalPageModule;
}());

//# sourceMappingURL=nuevoreporte-modal.module.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoreporteModalPage; });
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


/**
 * Generated class for the NuevoreporteModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NuevoreporteModalPage = /** @class */ (function () {
    function NuevoreporteModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    NuevoreporteModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NuevoreporteModalPage');
    };
    NuevoreporteModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NuevoreporteModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nuevoreporte-modal',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\nuevoreporte-modal\nuevoreporte-modal.html"*/'<!--\n\n  Generated template for the NuevoreporteModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n  <div class="modal_closer" (click)="this.dismiss();">Volver</div>\n\n  <div class="modalPage_header">\n\n    <div class="modalPage_logo"><img src="assets/imgs/reportes.svg"/></div>\n\n    <div class="modalPage_title">\n\n      <span class="spanBlock largeFont"><b>Generar Reporte</b></span>\n\n    </div>\n\n</div>\n\n<div class="nuevoreporte_content">\n\n  <div class="CitaDetail_header">\n\n    <table class="results_table">\n\n        <thead>\n\n            <tr>\n\n                <th>no</th>\n\n                <th>Fecha</th>\n\n             </tr>\n\n        </thead>\n\n        <tbody>\n\n            <tr>\n\n                <td>01</td>\n\n                <td class="fontSecondary">00/00/0000</td>\n\n             </tr>\n\n        </tbody>\n\n    </table>\n\n</div>\n\n<div class="nuevoreportecontent modalContent">\n\n  <div class="ModalInput_input">\n\n    <b>Tipo de Archivo:</b>\n\n  <select  class="input_select input">\n\n      <option selected disabled value="0">SELECT</option>\n\n    </select>\n\n  </div>\n\n  <div class="ModalInput_input">\n\n      <span class="spanBlock radio_input"><input type="checkbox" class="input" name="copia" value="1" checked><b>Enviar una copia a mi correo</b></span>\n\n  </div>\n\n  <button class="bgColorSecondary generalButton">Exportar</button>\n\n</div>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\nuevoreporte-modal\nuevoreporte-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], NuevoreporteModalPage);
    return NuevoreporteModalPage;
}());

//# sourceMappingURL=nuevoreporte-modal.js.map

/***/ })

});
//# sourceMappingURL=11.js.map
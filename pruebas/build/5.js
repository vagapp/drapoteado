webpackJsonp([5],{

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoonPageModule", function() { return SoonPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__soon__ = __webpack_require__(652);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SoonPageModule = /** @class */ (function () {
    function SoonPageModule() {
    }
    SoonPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__soon__["a" /* SoonPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__soon__["a" /* SoonPage */]),
            ],
        })
    ], SoonPageModule);
    return SoonPageModule;
}());

//# sourceMappingURL=soon.module.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
 * Generated class for the SoonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SoonPage = /** @class */ (function () {
    function SoonPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SoonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SoonPage');
    };
    SoonPage.prototype.openTerminos = function () {
        this.navCtrl.setRoot('TerminosycondicionesPage');
    };
    SoonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-soon',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\soon\soon.html"*/'<ion-content padding>\n\n  <div class="loginContent">\n\n    <span class="spanBlock titleFont titleFontSpan"><img class="main_logo" src="assets/imgs/logo-rojo-blanco.svg"/></span>\n\n    <span class="spanBlock spanLink midFont lightFont">Proximamente</span>\n\n    <span class="spanBlock spanLink midFont lightFont" (click)="openTerminos()">  TÉRMINOS Y CONDICIONES  </span>\n\n</div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\soon\soon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], SoonPage);
    return SoonPage;
}());

//# sourceMappingURL=soon.js.map

/***/ })

});
//# sourceMappingURL=5.js.map
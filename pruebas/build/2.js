webpackJsonp([2],{

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModalPageModule", function() { return WelcomeModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_modal__ = __webpack_require__(656);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomeModalPageModule = /** @class */ (function () {
    function WelcomeModalPageModule() {
    }
    WelcomeModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcome_modal__["a" /* WelcomeModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome_modal__["a" /* WelcomeModalPage */]),
            ],
        })
    ], WelcomeModalPageModule);
    return WelcomeModalPageModule;
}());

//# sourceMappingURL=welcome-modal.module.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tutorial_tutorial__ = __webpack_require__(166);
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
 * Generated class for the WelcomeModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomeModalPage = /** @class */ (function () {
    function WelcomeModalPage(navCtrl, navParams, viewCtrl, tutorial) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.tutorial = tutorial;
    }
    WelcomeModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomeModalPage');
    };
    WelcomeModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    WelcomeModalPage.prototype.finish = function () {
        this.tutorial.finishTutorial();
        this.close();
    };
    WelcomeModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-welcome-modal',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\welcome-modal\welcome-modal.html"*/'<!--\n\n  Generated template for the WelcomeModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content>\n\n  <div class="modal_header">\n\n    <span class="spanBlock header_title"><img class="modal_title_logo" src="assets/imgs/logo-rojo-gris.svg"/></span>\n\n    <span class="spanBlock header_subtitle">¡ Bienvenido !</span>\n\n  </div>\n\n  <div class="modal_body" *ngIf="this.tutorial.serviceCreated && this.tutorial.usuarioCreated">\n\n    <span class="spanBlock midMainFont">¡Estas listo para comenzar!</span>\n\n    <!--<p> ! Estas listo Para comenzar ! Hemos terminado de conﬁgurar los pasos básicos para que tu y tu equipo comiences ha consultar,  si tienes dudas sobre el funcionamiento de drap te invitamos a revisar nuestros tutoriales en <span class="fontPrimary">www.drap.com.mx</span> donde te explicamos a detalle como realizar y cobrar tus citas </p>\n\n    -->\n\n    <p> \n\n    <span>Has terminado, la cuenta está lista para que junto con tus usuarios comiencen a utilizar DRAP.\n\n      Conoce nuestro tutorial <span class="fontPrimary">www.drap.com.mx</span></span></p>\n\n    \n\n      <div class="modal_buttons">\n\n   \n\n      <button class="generalButton bgColorSecondary" (click)="this.finish()">Finalizar</button>\n\n      </div>\n\n    \n\n  </div>\n\n  <div class="modal_body" *ngIf="!this.tutorial.serviceCreated && !this.tutorial.usuarioCreated" >\n\n    <p>Estamos convencidos que <span class="fontPrimary">DRAP</span> te ayudará a optimizar las consultas y pagos en tu consultorio. ¡Será mucho más fácil y seguro!\n\n      A continuación te explicamos paso a paso su funcionamiento para que puedas maximizar\n\n      el uso de la aplicación.</p>\n\n    <div class="modal_buttons">\n\n      <button class="generalButton bgColorSecondary" (click)="this.tutorial.showServicioModal()">Siguiente</button>\n\n      </div>\n\n  </div>\n\n  \n\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\welcome-modal\welcome-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_tutorial_tutorial__["a" /* TutorialProvider */]])
    ], WelcomeModalPage);
    return WelcomeModalPage;
}());

//# sourceMappingURL=welcome-modal.js.map

/***/ })

});
//# sourceMappingURL=2.js.map
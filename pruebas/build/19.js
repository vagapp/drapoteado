webpackJsonp([19],{

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPopPageModule", function() { return NotificationPopPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_pop__ = __webpack_require__(642);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationPopPageModule = /** @class */ (function () {
    function NotificationPopPageModule() {
    }
    NotificationPopPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notification_pop__["a" /* NotificationPopPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__notification_pop__["a" /* NotificationPopPage */]),
            ],
        })
    ], NotificationPopPageModule);
    return NotificationPopPageModule;
}());

//# sourceMappingURL=notification-pop.module.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data_debugger__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notifications_manager_notifications_manager__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_notifications_data_notifications_data__ = __webpack_require__(97);
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
 * Generated class for the NotificationPopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPopPage = /** @class */ (function () {
    function NotificationPopPage(navCtrl, navParams, userData, viewCtrl, notiMan, notiData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.viewCtrl = viewCtrl;
        this.notiMan = notiMan;
        this.notiData = notiData;
    }
    NotificationPopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPopPage');
    };
    NotificationPopPage.prototype.notificationClick = function (notification) {
        __WEBPACK_IMPORTED_MODULE_3__providers_user_data_debugger__["a" /* Debugger */].log(['notification', notification]);
        this.notiMan.operateNotification(notification);
    };
    NotificationPopPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    NotificationPopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notification-pop',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\notification-pop\notification-pop.html"*/'<div class="pop_page">\n\n        <!--<div class="notification_item notification_load" *ngIf="this.userData.activeCargandoNotif"> <ion-spinner ></ion-spinner>  Cargando notificaciones... </div>-->\n\n<div *ngFor="let notification of this.notiData.notificaciones" class="notification_item"  (click)="notificationClick(notification)">\n\n        {{notification.text}}\n\n</div>\n\n</div>'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\notification-pop\notification-pop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_notifications_manager_notifications_manager__["a" /* NotificationsManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_notifications_data_notifications_data__["a" /* NotificationsDataProvider */]])
    ], NotificationPopPage);
    return NotificationPopPage;
}());

//# sourceMappingURL=notification-pop.js.map

/***/ })

});
//# sourceMappingURL=19.js.map
webpackJsonp([24],{

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupPageModule", function() { return GroupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GroupPageModule = /** @class */ (function () {
    function GroupPageModule() {
    }
    GroupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__group__["a" /* GroupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__group__["a" /* GroupPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], GroupPageModule);
    return GroupPageModule;
}());

//# sourceMappingURL=group.module.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_subscription_data_subscription_data__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_subscription_manager_subscription_manager__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ws_messenger_ws_messenger__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_permissions_permissions__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_base_url_base_url__ = __webpack_require__(27);
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









/**
 * Generated class for the GroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GroupPage = /** @class */ (function () {
    function GroupPage(subsData, userData, subsMan, loader, WS, perm, navCtrl, bu) {
        this.subsData = subsData;
        this.userData = userData;
        this.subsMan = subsMan;
        this.loader = loader;
        this.WS = WS;
        this.perm = perm;
        this.navCtrl = navCtrl;
        this.bu = bu;
        this.docs = new Array();
    }
    GroupPage.prototype.ionViewDidLoad = function () {
        /*if(!this.perm.checkUserFeature([UserDataProvider.PLAN_ANY],[PermissionsProvider.PLAN_GROUP])){
          this.navCtrl.setRoot("HomePage");
        }*/
        console.log('ionViewDidLoad GroupPage');
        console.log('susdata is', this.subsData.subscription);
        console.log('code is', this.subsData.invcode);
        if (this.subsData.subscription.field_doctores_json) {
            //this.docs = JSON.parse(this.subsData.subscription.field_doctores_json);
            this.subsData.setDoctores();
            console.log('this.docs', this.docs);
        }
    };
    GroupPage.prototype.removerSubsUser = function (uid) {
        return __awaiter(this, void 0, void 0, function () {
            var recievers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('toremove', uid);
                        this.loader.presentLoader("Removiendo...");
                        recievers = this.subsData.subscription.field_doctores.concat(this.subsData.subscription.field_subusuarios);
                        this.WS.generateDocoutgroup(recievers, uid);
                        return [4 /*yield*/, this.subsMan.removeUser(uid)];
                    case 1:
                        _a.sent();
                        this.WS.generateSubsRemoveMessage(uid);
                        this.loader.dismissLoader();
                        return [2 /*return*/];
                }
            });
        });
    };
    GroupPage.prototype.getOut = function (uid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.removerSubsUser(uid)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GroupPage.prototype.isThis = function (uid) {
        return Number(uid) === Number(this.userData.userData.uid);
    };
    GroupPage.prototype.isplanHolder = function () {
        return this.perm.checkUserPlanHolder();
    };
    GroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-group',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\group\group.html"*/'<!--\n\n  Generated template for the GroupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<header></header>\n\n<ion-content padding>\n\n    <div class="modalPage_header">\n\n        <div class="modalPage_logo"><img src="assets/imgs/usuarios.svg"/></div>\n\n        <div class="modalPage_title">\n\n          <span class="spanBlock midFont"><b>Grupo Médicos</b></span>\n\n          <span class="spanBlock midSubFont">Revisa y administra los doctores de tu grupo</span>\n\n          <span class="spanBlock midMainFont"><input class="codigo" type="text" value="{{this.subsData.invcode}}" readonly></span>\n\n        </div>\n\n        </div>\n\n    <table class="results_table">\n\n        <thead>\n\n            <tr> \n\n                <th>Nombre</th>\n\n                <th></th>\n\n            </tr>\n\n          </thead>\n\n      <tbody>\n\n        <tr *ngFor="let doc of this.subsData.docs">\n\n          <td> {{doc[\'name\']}} </td>\n\n          <td  class="toolCol">\n\n              <button *ngIf="!isThis(doc[\'uid\']) && isplanHolder()" (click)="removerSubsUser(doc[\'uid\'])"  class="bgColorPrimary generalButton tableButton">Remover</button>\n\n              <button *ngIf="isThis(doc[\'uid\']) && !isplanHolder()" (click)="getOut(doc[\'uid\'])"  class="bgColorPrimary generalButton tableButton">Salir</button>\n\n            </td>\n\n        </tr>\n\n      </tbody>\n\n    </table>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\group\group.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_subscription_data_subscription_data__["a" /* SubscriptionDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_subscription_manager_subscription_manager__["a" /* SubscriptionManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_ws_messenger_ws_messenger__["a" /* WsMessengerProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_permissions_permissions__["a" /* PermissionsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_8__providers_base_url_base_url__["a" /* BaseUrlProvider */]])
    ], GroupPage);
    return GroupPage;
}());

//# sourceMappingURL=group.js.map

/***/ })

});
//# sourceMappingURL=24.js.map
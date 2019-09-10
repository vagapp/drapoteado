webpackJsonp([25],{

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntergrupoPageModule", function() { return EntergrupoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entergrupo__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EntergrupoPageModule = /** @class */ (function () {
    function EntergrupoPageModule() {
    }
    EntergrupoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__entergrupo__["a" /* EntergrupoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__entergrupo__["a" /* EntergrupoPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], EntergrupoPageModule);
    return EntergrupoPageModule;
}());

//# sourceMappingURL=entergrupo.module.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntergrupoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_subscription_manager_subscription_manager__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loader_loader__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_subusers_manager_subusers_manager__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_subusers_data_subusers_data__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_planes_data_planes_data__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_base_url_base_url__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_ws_messenger_ws_messenger__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_permissions_permissions__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_subscription_data_subscription_data__ = __webpack_require__(33);
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
 * Generated class for the EntergrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EntergrupoPage = /** @class */ (function () {
    function EntergrupoPage(navCtrl, navParams, subsMan, subuserMan, userData, subuserData, planData, loader, alert, bu, wsMessenger, perm) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.subsMan = subsMan;
        this.subuserMan = subuserMan;
        this.userData = userData;
        this.subuserData = subuserData;
        this.planData = planData;
        this.loader = loader;
        this.alert = alert;
        this.bu = bu;
        this.wsMessenger = wsMessenger;
        this.perm = perm;
        this.groupName = "Nombre del Grupo";
        this.groupCode = null;
        this.groupLoaded = false;
        this.loaded_group_sus = null;
        this.accountsleft = 0;
        this.docsleft = 0;
        this.selectedUsers = new Array();
        this.canSave = false;
    }
    Object.defineProperty(EntergrupoPage.prototype, "AnyPlan", {
        get: function () { return this.perm.checkUserSuscription([__WEBPACK_IMPORTED_MODULE_7__providers_user_data_user_data__["a" /* UserDataProvider */].PLAN_ANY]); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntergrupoPage.prototype, "isbasico", {
        get: function () { return this.perm.checkUserSuscription([__WEBPACK_IMPORTED_MODULE_12__providers_subscription_data_subscription_data__["a" /* SubscriptionDataProvider */].PLAN_BASIC]); },
        enumerable: true,
        configurable: true
    });
    EntergrupoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EntergrupoPage');
        this.subuserMan.cargarSubusuarios();
    };
    EntergrupoPage.prototype.buscar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.groupCode !== null)) return [3 /*break*/, 2];
                        this.loader.presentLoader('Buscando grupos médicos');
                        console.log('sstart');
                        return [4 /*yield*/, this.subsMan.searchSus(this.groupCode + '')];
                    case 1:
                        sus = _a.sent();
                        console.log(sus);
                        if (sus) {
                            this.groupLoaded = true;
                            this.groupName = sus.field_group_name;
                            this.loaded_group_sus = sus;
                            //this.accountsleft = this.subsMan.getSubAccountsLeft(sus);
                            this.setSubacountsLeftDelta();
                            if (this.validateDocsLeft()) {
                                this.canSave = true;
                            }
                            else {
                                this.canSave = false;
                            }
                            this.loader.dismissLoader();
                        }
                        else {
                            this.loader.dismissLoader();
                            this.alert.presentAlert('Nada', 'No se encontro ningun grupo médico con este codigo');
                        }
                        console.log('send');
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    EntergrupoPage.prototype.guardar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var delsusres, selected_subusers_1, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.CancelarSuscripcionAtual()) return [3 /*break*/, 5];
                        this.loader.presentLoader('Entrando al grupo...');
                        if (!this.subsMan.checkForSubscription()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.subsMan.deletesSus(this.subsMan.subsData.subscription).toPromise()];
                    case 1:
                        delsusres = _a.sent();
                        console.log('NODE DELETION', delsusres);
                        if (!delsusres)
                            return [2 /*return*/, false]; //salir de aca si no sirve esto
                        _a.label = 2;
                    case 2:
                        this.loaded_group_sus.field_doctores.push(this.userData.userData.uid); //agregarse a si mismo a la suscripcion de grupo.
                        selected_subusers_1 = this.getSelectedSubusersArray();
                        return [4 /*yield*/, this.subsMan.group_enter_selectedSubusersClean(selected_subusers_1, this.loaded_group_sus, true)];
                    case 3:
                        _a.sent();
                        this.wsMessenger.generateSuboutofgroup(this.subsMan.aux_docstoReload, 1);
                        /*await selected_subusers.forEach(async (subuser)=>{  //por cada sub usuario
                          console.log('checking user',subuser);
                          this.loaded_group_sus.field_subusuarios.push(subuser.uid);//agregar sub usuarios a la suscripcion de grupo.
                          //eliminar sub usuario de otras suscripciones.
                          let aux_user_subs = await this.subsMan.requestGroupSubscriptionsFor(Number(subuser.uid)).toPromise();
                          console.log('LOADED SUBS',aux_user_subs);
                          await aux_user_subs.forEach(async (sub) => {
                            console.log('Cleaning subscriptions of this user ',sub);
                            sub.field_subusuarios = sub.field_subusuarios.filter((data)=>{ return Number(data.uid) !== Number(subuser.uid)});
                            let aux_sus = subscriptions.getEmptySuscription();
                            aux_sus.setData(sub);
                            aux_sus.field_active = sub.field_active.value;
                            aux_sus.plan = sub.field_plan_sus;
                            let res = await this.subsMan.updateSus( aux_sus ).toPromise();
                            console.log('CLEANED SUBSCRIPTION RES IS',res);
                            this.wsMessenger.generateSuboutofgroup(res.subscription.field_doctores,subuser.uid);
                          });
                        });*/
                        this.loader.dismissLoader();
                        return [4 /*yield*/, this.subsMan.updateSus(this.loaded_group_sus).subscribe(function (val) {
                                console.log('redysave val', val);
                                console.log('sending msg', selected_subusers_1.map(function (user) { return user.uid; }));
                                _this.wsMessenger.generateDoctogroupMessage(_this.loaded_group_sus.field_doctores.concat(_this.loaded_group_sus.field_subusuarios));
                                _this.wsMessenger.generateSubtogroupMessage(selected_subusers_1.map(function (user) { return user.uid; }), _this.loaded_group_sus.field_doctores);
                                var view = _this;
                                //this.navCtrl.setRoot('HomePage');
                                //this.loader.dismissLoader();
                                //view.loader.dismissLoader();
                                setTimeout(function () {
                                    view.bu.locationReload();
                                    //this.navCtrl.setRoot('MiplanPage');
                                    //view.loader.dismissLoader();
                                }, 1000);
                            }, function (error) {
                                console.log('redysave error', error);
                                _this.loader.dismissLoader();
                            })];
                    case 4:
                        res = _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    EntergrupoPage.prototype.validateDocsLeft = function () {
        var _this = this;
        console.log('validateDocsLeft');
        var ret = true;
        this.setDoctorsLeftDelta();
        if (this.docsleft <= 0) {
            ret = false;
            console.log('validateDocsLeft failed');
            this.alert.presentAlertHandler('LLeno', 'El grupo médico al que intenta ingresar se encuentra lleno.', function () { _this.cancelar(); });
        }
        return ret;
    };
    EntergrupoPage.prototype.CancelarSuscripcionAtual = function () {
        var ret = true;
        console.log('funcionalidad cancelar suscripcion de conekta mijo');
        return ret;
    };
    EntergrupoPage.prototype.cancelar = function () {
        this.navCtrl.setRoot('MiplanPage');
    };
    EntergrupoPage.prototype.onChangeUsers = function (element, subuser) {
        var setTo = !subuser.selectedForGroup;
        this.setSubacountsLeftDelta();
        if (setTo && this.accountsleft > 0) {
            element.checked = subuser.selectedForGroup = true;
        }
        else {
            element.checked = subuser.selectedForGroup = false;
        }
        this.setSubacountsLeftDelta();
    };
    EntergrupoPage.prototype.setSubacountsLeftDelta = function () {
        if (this.groupLoaded) {
            var leftonsus = this.subsMan.getSubAccountsLeft(this.loaded_group_sus);
            var selectedAccounts = this.getSelectedSubusersArray().length;
            this.accountsleft = leftonsus - selectedAccounts;
        }
    };
    EntergrupoPage.prototype.setDoctorsLeftDelta = function () {
        if (this.groupLoaded) {
            this.docsleft = this.subsMan.getDocAccountsLeft(this.loaded_group_sus);
            console.log('this.docsleft', this.docsleft);
            /*console.log('docs leftonsus', leftonsus);
            console.log('setDoctorsLeftDelta this.loaded_group_sus.field_doctores',this.loaded_group_sus.field_doctores.length);
            let selectedAccounts = this.loaded_group_sus.field_doctores.length;
            this.docsleft = leftonsus - selectedAccounts;*/
        }
    };
    EntergrupoPage.prototype.getSelectedSubusersArray = function () {
        return this.subuserData.subUsers.filter(function (subusers) { console.log(subusers.selectedForGroup); return subusers.selectedForGroup === true; });
    };
    EntergrupoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-entergrupo',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\entergrupo\entergrupo.html"*/'<header></header>\n\n<ion-content padding>\n\n<div class="base_form">\n\n  <div class="text_centered">\n\n    <div class="enter_title fontPrimary">Activación de grupo médico</div>\n\n    <div class="enter_description">\n\n     Drap se preocupa por hacer tu vida más fácil por eso nuestra función de grupos médicos te brinda funciones para compartir tus servicios y usuarios grupales con otros doctores, Si un doctor de tu grupo te ha compartido un código, ingrésalo aquí\n\n    </div>\n\n    \n\n    <div class="enter_field" *ngIf="!groupLoaded">\n\n      <ion-list>\n\n        <ion-item class="loginInput">\n\n          <ion-input [(ngModel)]="groupCode" placeholder="Codigo de Grupo Médico"></ion-input>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    </div>\n\n    <div class="groupName_shower" *ngIf="groupLoaded">\n\n        se encontro el grupo: <span class="fontPrimary">{{groupName}}</span>  con <span class="fontPrimary">{{this.docsleft}}</span> lugares disponibles\n\n    </div>\n\n  </div>\n\n  <div class="enter_subuser_selection"  *ngIf="groupLoaded && isbasico">\n\n    <div class="enter_title fontPrimary"> Selección de Usuarios </div>\n\n    <div class="enter_description"> Este plan te permite compartir usuarios entre los doctores del grupo si hay plazas disponibles puedes llevar contigo a tus usuarios actuales, seleccionandolos en la\n\n      lista a continuación, si no hay plazas activas habla con el administrador del grupo para activarlas. </div>\n\n      <div> <span class="enter_plazas_text">Plazas disponibles</span> <span class="enter_plazas_value fontPrimary">{{this.accountsleft}}</span></div>\n\n      <table class="results_table">\n\n          <thead>\n\n              <tr>\n\n                  <th>Agregar</th>\n\n                  <th>Usuario</th>\n\n                  <th>Tipo de Usuario</th>\n\n               </tr>\n\n          </thead>\n\n          <tbody >\n\n              <tr *ngFor="let usersub of this.subuserData.mySubUsers">\n\n                  <td>\n\n                      <ion-checkbox [checked]="usersub.selectedForGroup" (ionChange)="onChangeUsers($event,usersub)"></ion-checkbox>\n\n                      <!--<input type="checkbox" [checked]="usersub.selectedForGroup" (change)="onChangeUsers(this,usersub)"/>-->\n\n                    <!--\n\n                    <div class="control-group"> \n\n                      <label class="control control-radio">\n\n                        \n\n                        \n\n                          <div class="control_indicator"></div>\n\n                      </label> \n\n                      </div>  -->\n\n                  </td>\n\n                  <td class="midSubFont ">{{usersub.name}} </td>\n\n                  <td class="midSubFont fontHigh">{{this.userData.getTipoUsuarioString(usersub.field_tipo_de_usuario.und[0])}} </td>\n\n               </tr>\n\n          </tbody>\n\n        </table>\n\n  </div>\n\n  <div class="enter_toolbar">\n\n    <span class="fontPrimary left enter_comprar">¿Quieres comprar un plan médico?</span>\n\n    <div class="button_section">\n\n    <button class="generalButton bgColorSecondary right" (click)="buscar()" *ngIf="!this.groupLoaded" >Buscar</button>\n\n    <button class="generalButton bgColorSecondary right" (click)="guardar()" *ngIf="this.groupLoaded && this.canSave" >Entrar al grupo</button>\n\n    <button class="generalButton bgColorPrimary right" (click)="cancelar()" >Cancelar</button>\n\n    </div>\n\n  </div>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\pages\entergrupo\entergrupo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_subscription_manager_subscription_manager__["a" /* SubscriptionManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_subusers_manager_subusers_manager__["a" /* SubusersManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_subusers_data_subusers_data__["a" /* SubusersDataProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_planes_data_planes_data__["a" /* PlanesDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_base_url_base_url__["a" /* BaseUrlProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_ws_messenger_ws_messenger__["a" /* WsMessengerProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_permissions_permissions__["a" /* PermissionsProvider */]])
    ], EntergrupoPage);
    return EntergrupoPage;
}());

//# sourceMappingURL=entergrupo.js.map

/***/ })

});
//# sourceMappingURL=25.js.map
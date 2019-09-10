webpackJsonp([27],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__debugger__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cordova_available_cordova_available__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__citas_data_citas_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__doctores_data_doctores_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__planes_data_planes_data__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__subscription_data_subscription_data__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_url_base_url__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__drupal_user_manager_drupal_user_manager__ = __webpack_require__(54);
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











var UserDataProvider = /** @class */ (function () {
    function UserDataProvider(http, ica, citas, doctores, planes, subscription, bu, druserMan) {
        this.http = http;
        this.ica = ica;
        this.citas = citas;
        this.doctores = doctores;
        this.planes = planes;
        this.subscription = subscription;
        this.bu = bu;
        this.druserMan = druserMan;
        //AuthObservable
        this.AuthSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.susSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.sessionData = {
            sessid: false,
            session_name: false,
            token: false,
            uid: false
        };
        //urlbase:string = "http://vmi118470.contaboserver.net/~drapp/backend/";
        //urlbase:string = "https://servidor.nortecsoluciones.com/~drapp/backend/";
        //urlbase:string = 'http://localhost:8100/backend/';
        this.userData = {
            uid: 0,
            name: "",
            pass: "",
            mail: "",
            status: "",
            roles: [],
            field_tipo_de_usuario: { und: [] },
            field_useremail: { und: [{ email: "" }] },
            field_nombre: { und: [{ value: "" }] },
            field_apellidos: { und: [{ value: "" }] },
            field_especialidad: { und: [{ value: "" }] },
            field_alias: { und: [{ value: "" }] },
            field_calle: { und: [{ value: "" }] },
            field_no_ext: { und: [{ value: "" }] },
            field_no_int: { und: [{ value: "" }] },
            field_codigo_postal: { und: [{ value: "" }] },
            field_ciudad: { und: [{ value: "" }] },
            field_colonia: { und: [{ value: "" }] },
            field_pais: { und: [{ value: "" }] },
            field_municipio: { und: [{ value: "" }] },
            field_estado_ubicacion: { und: [{ value: "" }] },
            field_plan_date: { und: [{ value: { date: "" } }] },
            field_forma_pago: { und: [{ value: "" }] },
            tutorial_state: { und: [{ value: "0" }] },
            field_doctores: { und: [] },
            //valores de suscripcion
            field_sub_id: { und: [0] },
            field_planholder: { und: [{ value: true }] },
            field_stripe_customer_id: { und: [{ value: "" }] },
            field_src_json_info: { und: [{ value: "" }] },
            field_reference_user: { und: [0] },
            field_codigo: { und: [{ value: "" }] },
        };
    }
    UserDataProvider_1 = UserDataProvider;
    Object.defineProperty(UserDataProvider.prototype, "TIPO_DOCTOR", {
        get: function () { return UserDataProvider_1.TIPO_DOCTOR; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDataProvider.prototype, "TIPO_RECEPCION", {
        get: function () { return UserDataProvider_1.TIPO_RECEPCION; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDataProvider.prototype, "TIPO_CAJA", {
        get: function () { return UserDataProvider_1.TIPO_CAJA; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDataProvider.prototype, "TIPO_CAJAYRECEPCION", {
        get: function () { return UserDataProvider_1.TIPO_CAJAYRECEPCION; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDataProvider.prototype, "TIPO_ANY", {
        get: function () { return UserDataProvider_1.TIPO_ANY; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDataProvider.prototype, "showname", {
        get: function () {
            return this.userData.field_alias.und[0].value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDataProvider.prototype, "PLAN_ANY", {
        get: function () { return UserDataProvider_1.PLAN_ANY; },
        enumerable: true,
        configurable: true
    });
    UserDataProvider.prototype.requestToken = function () {
        var url = this.bu.endpointUrl + 'user/token.json';
        var observer = this.http.post(url, "", {});
        return observer.share();
    };
    UserDataProvider.prototype.initreset = function () {
        this.userData = {
            uid: 0,
            name: "",
            pass: "",
            mail: "",
            status: "",
            roles: [],
            field_tipo_de_usuario: { und: [] },
            field_useremail: { und: [{ email: "" }] },
            field_nombre: { und: [{ value: "" }] },
            field_apellidos: { und: [{ value: "" }] },
            field_especialidad: { und: [{ value: "" }] },
            field_alias: { und: [{ value: "" }] },
            field_calle: { und: [{ value: "" }] },
            field_no_ext: { und: [{ value: "" }] },
            field_no_int: { und: [{ value: "" }] },
            field_codigo_postal: { und: [{ value: "" }] },
            field_ciudad: { und: [{ value: "" }] },
            field_colonia: { und: [{ value: "" }] },
            field_pais: { und: [{ value: "" }] },
            field_municipio: { und: [{ value: "" }] },
            field_estado_ubicacion: { und: [{ value: "" }] },
            field_plan_date: { und: [{ value: { date: "" } }] },
            field_forma_pago: { und: [{ value: "" }] },
            tutorial_state: { und: [{ value: "0" }] },
            field_doctores: { und: [] },
            field_sub_id: { und: [] },
            field_planholder: { und: [{ value: true }] },
            field_stripe_customer_id: { und: [{ value: "" }] },
            field_src_json_info: { und: [{ value: "" }] },
            field_reference_user: { und: [] },
            field_codigo: { und: [{ value: "" }] },
        };
    };
    UserDataProvider.prototype.loginSetData = function (Uid) {
        return __awaiter(this, void 0, void 0, function () {
            var u_data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestUserData(Uid).toPromise()];
                    case 1:
                        u_data = _a.sent();
                        this.setUserData(u_data);
                        return [2 /*return*/];
                }
            });
        });
    };
    UserDataProvider.prototype.checkConnect = function () {
        var url = this.bu.endpointUrl + 'system/connect.json';
        var observer = this.http.post(url, "");
        return observer.share();
    };
    UserDataProvider.prototype.checkIsLoggedin = function () {
        return Number(this.userData.uid) !== 0;
    };
    UserDataProvider.prototype.requestUserData = function (uid) {
        var url = this.bu.endpointUrl + 'user/' + uid;
        var userData_observer = this.http.get(url);
        return userData_observer.share();
    };
    UserDataProvider.prototype.setSessionData = function (val) {
        console.log('setting sessionData', val);
        this.sessionData.sessid = val['sessid'];
        this.sessionData.session_name = val['session_name'];
        if (val['token']) {
            //console.log("updating token");
            this.sessionData.token = val['token'];
        }
    };
    UserDataProvider.prototype.setUserData = function (val) {
        console.log('setting user data', val);
        this.userData.uid = val['uid'];
        this.userData.name = val['name'];
        this.userData.pass = val['pass'];
        this.userData.mail = val['mail'];
        this.userData.status = val['status'];
        this.userData.roles = val['roles'];
        this.userData.field_tipo_de_usuario = val['field_tipo_de_usuario'];
        this.setCitasRoleFilter(Number(this.userData.field_tipo_de_usuario.und[0]['value']));
        this.userData.field_useremail = val['field_useremail'];
        if (val['field_nombre'].length !== 0)
            this.userData.field_nombre = val['field_nombre'];
        if (val['field_apellidos'].length !== 0)
            this.userData.field_apellidos = val['field_apellidos'];
        if (val['field_especialidad'].length !== 0) {
            this.userData.field_especialidad = val['field_especialidad'];
            __WEBPACK_IMPORTED_MODULE_3__debugger__["a" /* Debugger */].log(['setting especialidad']);
        }
        if (val['field_alias'].length !== 0)
            this.userData.field_alias = val['field_alias'];
        if (val['field_calle'].length !== 0)
            this.userData.field_calle = val['field_calle'];
        if (val['field_no_ext'].length !== 0)
            this.userData.field_no_ext = val['field_no_ext'];
        if (val['field_no_int'].length !== 0)
            this.userData.field_no_int = val['field_no_int'];
        if (val['field_codigo_postal'].length !== 0)
            this.userData.field_codigo_postal = val['field_codigo_postal'];
        if (val['field_ciudad'].length !== 0)
            this.userData.field_ciudad = val['field_ciudad'];
        if (val['field_colonia'].length !== 0)
            this.userData.field_colonia = val['field_colonia'];
        if (val['field_pais'].length !== 0)
            this.userData.field_pais = val['field_pais'];
        if (val['field_municipio'].length !== 0)
            this.userData.field_municipio = val['field_municipio'];
        if (val['field_estado_ubicacion'].length !== 0)
            this.userData.field_estado_ubicacion = val['field_estado_ubicacion'];
        if (val['field_codigo'].length !== 0)
            this.userData.field_codigo = val['field_codigo'];
        this.userData.field_plan_date = val['field_plan_date'];
        this.userData.field_forma_pago = val['field_forma_pago'];
        this.userData.tutorial_state = val['field_tutorial_state'];
        /*if(val['field_doctores'].length !== 0){
        this.userData.field_doctores = val['field_doctores'];
        }else{ this.userData.field_doctores.und = new Array();}*/
        __WEBPACK_IMPORTED_MODULE_3__debugger__["a" /* Debugger */].log(["checking this out subs id", val['field_sub_id']]);
        if (val['field_sub_id'].length != 0) {
            this.userData.field_sub_id.und[0] = val['field_sub_id']['und'][0]['nid'];
            __WEBPACK_IMPORTED_MODULE_3__debugger__["a" /* Debugger */].log(["set a", this.userData.field_sub_id]);
        }
        else {
            this.userData.field_sub_id.und[0] = 0;
            __WEBPACK_IMPORTED_MODULE_3__debugger__["a" /* Debugger */].log(["set b", this.userData.field_sub_id]);
        }
        this.userData.field_planholder = val['field_planholder'];
        this.userData.field_stripe_customer_id = val['field_stripe_customer_id'];
        if (val['field_src_json_info'].length != 0) {
            this.userData.field_src_json_info = val['field_src_json_info'];
        }
        else {
            this.userData.field_src_json_info.und = new Array();
        }
        console.log('filled userData', this.userData);
    };
    UserDataProvider.prototype.setCitasRoleFilter = function (tipo_usuario) {
        switch (tipo_usuario) {
            case UserDataProvider_1.TIPO_CAJA:
                this.citas.userStateFilter = [__WEBPACK_IMPORTED_MODULE_5__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_COBRO, __WEBPACK_IMPORTED_MODULE_5__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_ADEUDO, __WEBPACK_IMPORTED_MODULE_5__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_FINALIZADA];
                break;
            case UserDataProvider_1.TIPO_CAJAYRECEPCION: break;
            case UserDataProvider_1.TIPO_DOCTOR: break;
            case UserDataProvider_1.TIPO_RECEPCION: break;
        }
    };
    UserDataProvider.prototype.login = function (username, password) {
        var body = JSON.stringify({ "username": username, "password": password });
        var url = this.bu.endpointUrl + "user/login";
        return this.http.post(url, body).share();
    };
    UserDataProvider.prototype.logout = function () {
        var _this = this;
        var url = this.bu.endpointUrl + "user/logout";
        var logout_request = this.http.post(url, "").share();
        logout_request.subscribe(function (val) {
            _this.initreset();
            _this.AuthSubject.next(_this.userData.uid);
        });
        return logout_request;
    };
    UserDataProvider.prototype.register = function (data) {
        if (data === void 0) { data = this.userData; }
        /*let aux_registerdata = null;
        if(data){
          aux_registerdata = data;
        }else{
          aux_registerdata = this.userData;
        } */
        var body = JSON.stringify(data);
        //Debugger.log(['register data sending',body]);
        var url = this.bu.endpointUrl + 'user/register';
        var register_observer = this.http.post(url, body);
        return register_observer.share();
    };
    UserDataProvider.prototype.checkUserPlanHolder = function () {
        return this.checkUserPermission([UserDataProvider_1.TIPO_DOCTOR]);
    };
    /*removeCitaFromLists(cita:Citas){
      //todas las listas
      const ArrOfArrs = [
      this.citas,
      this.citasActivas,
      this.nextCitas,
      this.citasPendientes,
      this.citasCloser,
      this.citasCobrar
      ];
      ArrOfArrs.forEach(arr => {
        UserDataProvider.removeElementFromArray(cita,arr);
      });
      this.doctores.forEach(doc => {
        doc.removeCitaFromLists(cita);
      });
      Debugger.log(['checking citas list after removing',this.citas]);
    }*/
    UserDataProvider.removeElementFromArray = function (element, array) {
        var ret = -2;
        if (array) {
            ret = array.indexOf(element);
            if (ret >= 0)
                array.splice(ret, 1);
        }
        return ret;
    };
    //SUBSCRIPTION METHODS
    /*
    generateNewSus( suscription ){return this.generateNewNode(suscription.getData());}
    updateSus( suscription ){return this.updateNode(suscription.getData());}
    deletesSus( suscription ){return this.deleteNode(suscription.getData());}
    generateUserSuscription(){
      this.generateNewSus(this.subscription);
    }
    updateUserSuscription(){
      this.updateSus(this.subscription);
    }
  */
    /*static getTodayDateTimeStringsSaveFormat(){
      let date = new Date();
      let datestring = `${date.getDate()}/${(date.getMonth()+1)}/${date.getFullYear()}`;
      let timestring =  `${date.getHours()}:${date.getMinutes()}`;
      return {"datestring":datestring,"timestring":timestring};
    }*/
    /*
    static getTodayDateTimeStringsSearchFormat( where:string = null ){
      let date = new Date();
      let datestring = `${(date.getMonth()+1)}/${date.getDate()}/${date.getFullYear()}`;
      //let datestring = `${date.getFullYear()}/${(date.getMonth()+1)}/${date.getDate()}`;
      let timestring = `${date.getHours()}:${date.getMinutes()}`;
      Debugger.log(['where is ',where]);
      if( where && where.localeCompare('reportes') === 0){
        Debugger.log(['es en reportes']);
        datestring = `${date.getFullYear()}-${(date.getMonth()+1)}-${date.getDate()}`;
      }
     
      Debugger.log(['getting today date for search format: ', {"datestring":datestring,"timestring":timestring}]);
      return {"datestring":datestring,"timestring":timestring};
    }*/
    /*
      static getNowUTdates(){
        let start =  new Date().setHours(0,0,0,0);
        let end =  new Date().setHours(23,59,59,999);
        Debugger.log([`getting now ut dates ${start} to ${end} and are for ${new Date(start)} to ${new Date(end)}`]);
        return {"start":start,"end":end};
      }
    
      static formatDateBinaryNumber( num ){
        return (num < 10 ? '0' : '') + num;
      }*/
    /*
    cargarCitas( logoutonerror = true ):Observable<any>{
      console.log("cargando citas");
      const ret = this.getCargarCitasObservable();
      ret.subscribe(
        (val)=>{
          this.setCitasFO(val);
        },
         response => {
           Debugger.log(["POST call in error", response]);
           if(logoutonerror)
           this.logout();
         }
        );
        Debugger.log(['returning ret observable',ret]);
        return ret;
    }
  
    getCargarCitasObservable(){
      let UTdates = UserDataProvider.getNowUTdates();
      Debugger.log([` dates searching en cargar citas es ${UTdates.start}--${UTdates.end}`]);
      return this.getCitasUTms(`${UTdates.start}--${UTdates.end}`,this.getDoctoresSimpleArray(),new Array(),new Array());
    }
  
    setCitasFO( val ){
    //aquí creamos el pool de citas, este pool sirve para que los doctores tomen y administren las citas que tienen.
    Debugger.log(['citas Cargadas',val]);
    for( let cita of val ){
      let citaIndex = this.getCitaIndexByNid(cita.Nid);
      if(citaIndex > -1){
        this.citas[citaIndex].setData(cita);
      }else{
      let aux_cita = new Citas();
      aux_cita.setData(cita);
      this.citas.push(aux_cita);
      }
  }
  //si tiene algun permiso o plan se llenan las listas para mostrar las citas.
    this.organizarCitas();
  }
  
  
    organizarCitas(){
       //tenemos un pool de citas actualizadas en this.citas, los doctores deben tomar esas citas y organizarlas.
      
      if(this.checkUserFeature([UserDataProvider.TIPO_ANY],[UserDataProvider.PLAN_ANY])){ //revisar que el usuario tenga plan y permisos validos
         this.clearCitaLists();
         for( let doc of this.doctores){
            doc.setCitas(this.citas);
            if(doc.citaActiva) { this.citasActivas.push(doc.citaActiva); }
            if(doc.nextCita){ this.nextCitas.push(doc.nextCita); }
            this.citasPendientes =  this.citasPendientes.concat(doc.citasPendientes);
            this.citasRetrasadas =  this.citasRetrasadas.concat(doc.citasRetrasadas);
            if(this.checkUserPermission([UserDataProvider.TIPO_CAJA,UserDataProvider.TIPO_CAJAYRECEPCION,UserDataProvider.TIPO_DOCTOR])){ //si puede cobrar carga las citas por cobrar
              this.citasCobrar = this.citasCobrar.concat(doc.citasCobrar);
            }
          }
        for( let cita of this.citas ){
          if(cita.CloserThanMs(this.ShowCitaUntilMs)){
            if(this.nextCitas.indexOf(cita) === -1 && this.citasActivas.indexOf(cita) === -1 && this.citasRetrasadas.indexOf(cita) === -1){
              this.citasCloser.push(cita);
            }
          }
        }
        for( let cita of this.citasRetrasadas){
          if((!cita.data.field_retrasda) || Number(cita.data.field_retrasda['und']['0']['value']) === 0){
            Debugger.log(['cita retrasadas desactualizada']);
          }
        }
        }
    }
  
    clearCitaLists(){
      this.citasActivas =  new Array();
      this.nextCitas = new Array();
      this.citasPendientes =  new Array();
      this.citasCloser = new Array();
      this.citasCobrar = new Array();
      this.citasRetrasadas = new Array();
    }
  */
    /*getCitasActivas(){
      this.citasActivas =  new Array();
      this.doctores.forEach(element => {
        if(element.citaActiva){
         this.citasActivas.push(element.citaActiva);
        }
      });
      //console.log("citas activas obtenidas de cada doctor",this.citasActivas);
    }
  
    getNextcitas(){
      this.nextCitas = new Array();
      this.doctores.forEach(doctor => {
        if(doctor.nextCita){
          this.nextCitas.push(doctor.nextCita);
        }
      });
    }
  
    getCitasPendientes(){
      this.citasPendientes =  new Array();
      this.citasCloser = new Array();
      this.doctores.forEach(doctor => {
        doctor.citasPendientes.forEach(cita => {
            this.citasPendientes.push(cita);
            if(cita.CloserThanMs(this.ShowCitaUntilMs)){
              if(this.nextCitas.indexOf(cita) === -1 && this.citasActivas.indexOf(cita) === -1){
                this.citasCloser.push(cita);
              }
            }
        });
      });
      //console.log("citas pendientes obtenidas de cada doctor",this.citasPendientes);
    }
  
    getCitasCobrar(){
      this.citasCobrar = new Array();
      this.doctores.forEach(doctor => {
        doctor.citasCobrar.forEach(cita => {
          this.citasCobrar.push(cita);
        });
      });
      //console.log("citas por cobrar obtenidas de cada doctor",this.citasCobrar);
    }
  
    getCitasRetrasadas(){
      this.citasRetrasadas = new Array();
      this.doctores.forEach(
    }*/
    UserDataProvider.prototype.getDoctoresSimpleArray = function () {
        var ret = new Array();
        this.doctores.doctores.forEach(function (element) {
            ret.push(Number(element.Uid));
        });
        return ret;
    };
    /*getCitasParaHoy(){
      let ret = 0;
      this.doctores.forEach(element => {
        ret += element.citasParaHoy;
     });
     this.citasParaHoy = ret;
     return ret;
    }*/
    /*getCitaIndexByNid( input_nid ){
      let ret = -1;
      let index = 0;
      this.citas.forEach(cita => {
        if( cita.Nid === input_nid){
          ret = index;
        }
        index++;
      });
      return ret;
    }*/
    /**
    * doctores:number[] son los uids de los doctores que atienden las citas
   **/
    UserDataProvider.prototype.getCitas = function (fechaFrom, fechaTo, doctores, cajas, recepciones) {
        //date filter inbetween: date[min][date]=10/10/2010&date[max][date]=10/10/2011
        //date format: MM/DD/AAAA
        //filter doctor: args[0]=all
        //filter caja: args[1]=all
        //filter recepcion: args[2]=all
        //http://vmi118470.contaboserver.net/~drapp/backend/appoint/rest_citas?
        var doctorfilter = "&args[0]=" + doctores.join();
        var cajafilter = "&args[1]=" + cajas.join();
        var recepcionfilter = "&args[2]=" + recepciones.join();
        if (doctores.length == 0) {
            doctorfilter = "&args[0]=all";
        }
        if (cajas.length == 0) {
            cajafilter = "&args[1]=all";
        }
        if (recepciones.length == 0) {
            recepcionfilter = "&args[2]=all";
        }
        var datefilter = "?date[min][date]=" + fechaFrom + "&date[max][date]=" + fechaTo;
        var url = this.bu.endpointUrl + 'rest_citas.json' + datefilter + doctorfilter + cajafilter + recepcionfilter;
        console.log("url", url);
        var observer = this.http.get(url);
        //observer.subscribe(); //suscribes to send the post regardless of what view does with the observer
        return observer;
    };
    UserDataProvider.prototype.getCitasUTms = function (rangeUTms, doctores, cajas, recepciones) {
        var doctorfilter = "args[0]=" + doctores.join();
        var cajafilter = "&args[1]=" + cajas.join();
        var recepcionfilter = "&args[2]=" + recepciones.join();
        var rangeFilter = "&args[3]=" + rangeUTms;
        if (doctores.length == 0) {
            doctorfilter = "args[0]=all";
        }
        if (cajas.length == 0) {
            cajafilter = "&args[1]=all";
        }
        if (recepciones.length == 0) {
            recepcionfilter = "&args[2]=all";
        }
        //let datefilter = "?date[min][date]="+fechaFrom+"&date[max][date]="+fechaTo;
        var url = this.bu.endpointUrl + 'rest_citas.json?' + doctorfilter + cajafilter + recepcionfilter + rangeFilter;
        console.log("url", url);
        var observer = this.http.get(url);
        //observer.subscribe(); //suscribes to send the post regardless of what view does with the observer
        return observer;
    };
    UserDataProvider.prototype.getCitasNidObservable = function (Nid) {
        var url = this.bu.endpointUrl + 'rest_citas.json?' + ("args[0]=all&args[1]=all&args[2]=all&args[3]=all&args[4]=" + Nid);
        __WEBPACK_IMPORTED_MODULE_3__debugger__["a" /* Debugger */].log(['loadinc single cita w nid', url]);
        var observer = this.http.get(url);
        //observer.subscribe(); //suscribes to send the post regardless of what view does with the observer
        return observer;
    };
    //General Node Management
    UserDataProvider.prototype.setcssplanselected = function (factplan) {
        this.planes.planes.forEach(function (plan) {
            plan.css_fact_selected = false;
        });
        factplan.css_fact_selected = true;
    };
    //user aux methods
    UserDataProvider.prototype.getTipoUsuarioString = function (tipo) {
        //Debugger.log(['obtener tipo de usuario para ',tipo]);
        tipo = Number(tipo);
        var ret = "subusuario";
        switch (tipo) {
            case UserDataProvider_1.TIPO_DOCTOR:
                ret = "doctor";
                break;
            case UserDataProvider_1.TIPO_RECEPCION:
                ret = "recepción";
                break;
            case UserDataProvider_1.TIPO_CAJA:
                ret = "caja";
                break;
            case UserDataProvider_1.TIPO_CAJAYRECEPCION:
                ret = "recepción & caja";
                break;
        }
        return ret;
    };
    /**
     * CheckUserFeature resolves if a feature should appear for this user giving the user roles (permision) and the user plan suscriptions (suscriptions)
     * and has been created to simplify the check on features that requiere both.
    */
    UserDataProvider.prototype.checkUserFeature = function (permision, suscriptions, debug) {
        if (debug === void 0) { debug = false; }
        var ret = false;
        var permisioncheck = false;
        var suscriptionscheck = false;
        if (permision === null || permision === undefined || permision.length === 0) {
            permisioncheck = true;
        }
        else {
            permisioncheck = this.checkUserPermission(permision, debug);
        }
        if (suscriptions === null || suscriptions === undefined || suscriptions.length === 0) {
            suscriptionscheck = true;
        }
        else {
            suscriptionscheck = this.checkUserSuscription(suscriptions, debug);
        }
        if (permisioncheck && suscriptionscheck) {
            ret = true;
        }
        return ret;
    };
    UserDataProvider.prototype.checkSusSubaccountsFull = function () {
        return false;
    };
    UserDataProvider.prototype.checkUserPermission = function (permision, debug) {
        if (debug === void 0) { debug = false; }
        var ret = false;
        __WEBPACK_IMPORTED_MODULE_3__debugger__["a" /* Debugger */].log(["checking permissions " + permision + " vs " + this.userData.field_tipo_de_usuario], debug);
        //checking for ANY
        if (permision.indexOf(UserDataProvider_1.TIPO_ANY) > -1 && this.userData.field_tipo_de_usuario.und.length > 0) {
            return true;
        }
        //regular check
        for (var i = 0; i < this.userData.field_tipo_de_usuario.und.length; i++) {
            if (permision.indexOf(parseInt(this.userData.field_tipo_de_usuario.und[i].value)) > -1) {
                ret = true;
                break;
            }
        }
        return ret;
    };
    /**
     * la suscripcion debe resultar false si:
     * el usuario no tiene guardado un id de suscripcion en su data, o esta es 0
     * la suscripcion que carga el usuario esta inactiva.
    */
    UserDataProvider.prototype.checkUserSuscription = function (suscriptions, debug) {
        if (debug === void 0) { debug = false; }
        /*let ret = false;
        Debugger.log([`checking suscriptions ${suscriptions} vs ${this.subscription}`],debug);
        //si la subscripcion no esta activa (expiro, no ha sido pagada etc) retorna false
        //if(Number(this.userData.field_sub_id.und[0]) === Number(0) || this.subscription === null){return false;}
        if(this.subscription === null){return false;}
        if(Number(this.subscription.field_active) === Number(0)){return false;}
        // checking for ANY, automatically returns true since we checked for not 0 or null up here
        if(suscriptions.indexOf(UserDataProvider.PLAN_ANY) > -1){ return true;}
        //regular check
        if(suscriptions.indexOf(this.subscription.field_plan_sus) > -1){ret = true;}
        /*for(let i=0; i< this.userData.field_sub_id.und.length; i++){
          //if(suscriptions.indexOf(parseInt(this.userData.field_sub_id.und[i].value)) > -1) {ret = true; break;}
        }
        return ret;*/
        return true;
    };
    UserDataProvider.prototype.getDateFormat = function (datestring, timestring) {
        //the date is a mess so this methods transforms the method got from drupal into readable date 
        //readable date is this format 2018/06/17 01:10:10Z
        //drupal gives this format 14/5/2018
        var date_elements = datestring.split('/');
        var time_elements = timestring.split(':');
        for (var i = 0; i < time_elements.length; i++) {
            while (time_elements[i].length < 2) {
                time_elements[i] = '0' + time_elements[i];
            }
        }
        if (time_elements.length == 2) {
            time_elements[2] = "00";
        }
        console.log(time_elements);
        return date_elements[2] + "/" + date_elements[1] + "/" + date_elements[0] + " " + time_elements[0] + ":" + time_elements[1] + ":" + time_elements[2] + "Z";
    };
    UserDataProvider.prototype.getSavePlayerIDrequest = function (onseignalDid) {
        var aux_user_data = {
            uid: this.userData.uid,
            field_playerid: { und: [{ value: onseignalDid }] },
        };
        var request = this.druserMan.updateUserd(aux_user_data);
        return request;
    };
    UserDataProvider.prototype.requestRecover = function (name) {
        var info = {
            "data": {
                "mail": name
            }
        };
        //let body = `{"mail":"${name}"}`;
        console.log("requesting password reset body ", info);
        var url = this.bu.endpointUrl + 'pass_request';
        var observer = this.http.post(url, info);
        return observer;
    };
    UserDataProvider.prototype.updateUser = function () {
        var aux_userData = JSON.parse(JSON.stringify(this.userData));
        aux_userData.field_tipo_de_usuario = UserDataProvider_1.cleanUserDataReferenceField(this.userData.field_tipo_de_usuario);
        __WEBPACK_IMPORTED_MODULE_3__debugger__["a" /* Debugger */].log(['this.userData.field_sub_id', this.userData.field_sub_id]);
        if (Number(this.userData.field_reference_user['und']['0']) === 0) {
            delete aux_userData.field_reference_user;
        }
        if (this.userData.field_sub_id['und']['0']) {
            __WEBPACK_IMPORTED_MODULE_3__debugger__["a" /* Debugger */].log(['subid setted']);
        }
        else {
            if (this.userData.field_sub_id['und']['0']['value']) {
                aux_userData.field_sub_id = UserDataProvider_1.cleanUserDataReferenceField(this.userData.field_sub_id);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3__debugger__["a" /* Debugger */].log(['subid not setted,remove']);
                delete aux_userData.field_sub_id;
            }
        }
        if (Number(this.userData.field_sub_id.und[0]) === Number(0)) {
            delete aux_userData.field_sub_id;
        }
        console.log("updateUser saving userdata clone", aux_userData);
        return this.druserMan.updateUserd(aux_userData);
    };
    /**
     * Drupal aveces te manda un formato bien raro que no sirve para actualizar los datos, hay que limpiar esos campos
    */
    UserDataProvider.cleanUserDataReferenceField = function (field) {
        var aux_field = { und: [] };
        aux_field.und = new Array();
        for (var i = 0; i < field.und.length; i++) {
            aux_field.und.push(field.und[i].value);
        }
        return aux_field;
    };
    UserDataProvider.getEmptyCita = function () {
        return { Nid: null,
            type: "citas",
            field_date: { und: [{ value: { date: "", time: "" } }] },
            field_hora_inicio: { und: [{ value: { date: "", time: "" } }] },
            field_hora_final: { und: [{ value: { date: "", time: "" } }] },
            field_costo_sobrescribir: { und: [{ value: 0 }] },
            field_paciente: { und: [{ value: "" }] },
            field_email: { und: [{ email: "" }] },
            field_telefono: { und: [{ value: 0 }] },
            field_estado: { und: [{ value: 0 }] },
            field_cita_doctor: { und: [0] },
            field_cita_caja: { und: [0] },
            field_cita_recepcion: { und: [0] },
            field_alias: 0,
            doctor_name: "",
            doctor_alias: "",
            field_servicios_cita: { und: [0] },
            field_cobro: { und: [{ value: 0 }] },
            field_cobro_efectivo: { und: [{ value: 0 }] },
            field_cobro_tarjeta: { und: [{ value: 0 }] },
            field_cobro_cheque: { und: [{ value: 0 }] },
            field_datemsb: { und: [{ value: 0 }] },
            field_hora_iniciomsb: { und: [{ value: null }] },
            field_hora_finalmsb: { und: [{ value: null }] },
            field_retrasda: { und: [{ value: 0 }] },
            aux_servicios_json: null,
            field_hora_cobromsb: { und: [{ value: 0 }] },
            field_fecha_reporte: { und: [{ value: 0 }] },
            field_fechas_reporte: { und: [] },
            field_facturar: { und: [{ value: 0 }] },
            field_facturar_cantidad: { und: [{ value: 0 }] },
            field_caja_nombre: { und: [{ value: "" }] },
            field_cajas_filter: { und: [{ value: 0 }] },
        };
    };
    UserDataProvider.getEmptyServicio = function () {
        return {
            Nid: null,
            Uid: 0,
            type: 'servicio',
            title: "",
            costo: 0,
            body: { und: [{ value: "" }] },
            field_costo_servicio: { und: [{ value: 0 }] },
            field_doctor_uid: { und: [{ value: 0 }] }
        };
    };
    UserDataProvider.prototype.getEmptyUserd = function () {
        return {
            uid: 0,
            name: "",
            pass: "",
            mail: "",
            status: "",
            roles: [0],
            field_tipo_de_usuario: { und: [0] },
            field_useremail: { und: [{ email: "" }] },
            field_nombre: { und: [{ value: "" }] },
            field_apellidos: { und: [{ value: "" }] },
            field_especialidad: { und: [{ value: "" }] },
            field_alias: { und: [{ value: "" }] },
            field_calle: { und: [{ value: "" }] },
            field_no_ext: { und: [{ value: "" }] },
            field_no_int: { und: [{ value: "" }] },
            field_codigo_postal: { und: [{ value: "" }] },
            field_ciudad: { und: [{ value: "" }] },
            field_colonia: { und: [{ value: "" }] },
            field_pais: { und: [{ value: "" }] },
            field_municipio: { und: [{ value: "" }] },
            field_estado_ubicacion: { und: [{ value: "" }] },
            field_plan_date: { und: [{ value: { date: "" } }] },
            field_forma_pago: { und: [{ value: "" }] },
            tutorial_state: { und: [{ value: 0 }] },
            field_codigo: { und: [{ value: "" }] },
            field_doctores: { und: [0] },
            field_sub_id: { und: [0] },
            field_planholder: { und: [{ value: true }] },
            field_stripe_customer_id: { und: [{ value: "" }] },
            field_src_json_info: { und: [{ value: "" }] },
            field_reference_user: { und: [0] },
            selectedForGroup: false,
            field_owner: { und: [0] }
        };
    };
    //VARIABLES STATICAS, y osea se necesitan getters porque los html no pueden acceder a las variables static que pedo
    //tipos de usuario:
    UserDataProvider.TIPO_DOCTOR = 1;
    UserDataProvider.TIPO_RECEPCION = 2;
    UserDataProvider.TIPO_CAJA = 3;
    UserDataProvider.TIPO_CAJAYRECEPCION = 4;
    UserDataProvider.TIPO_ANY = -1;
    //suscripciones planes cons
    UserDataProvider.PLAN_ANY = -1;
    UserDataProvider = UserDataProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__cordova_available_cordova_available__["a" /* CordovaAvailableProvider */],
            __WEBPACK_IMPORTED_MODULE_5__citas_data_citas_data__["a" /* CitasDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__planes_data_planes_data__["a" /* PlanesDataProvider */],
            __WEBPACK_IMPORTED_MODULE_8__subscription_data_subscription_data__["a" /* SubscriptionDataProvider */],
            __WEBPACK_IMPORTED_MODULE_9__base_url_base_url__["a" /* BaseUrlProvider */],
            __WEBPACK_IMPORTED_MODULE_10__drupal_user_manager_drupal_user_manager__["a" /* DrupalUserManagerProvider */]])
    ], UserDataProvider);
    return UserDataProvider;
    var UserDataProvider_1;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketServiceProvider; });
/* unused harmony export Message */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_dom_WebSocketSubject__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_dom_WebSocketSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_dom_WebSocketSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_url_base_url__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__citas_manager_citas_manager__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__doctores_data_doctores_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__report_presentator_report_presentator__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__doctores_manager_doctores_manager__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__subscription_data_subscription_data__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_data_doctores__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__subusers_data_subusers_data__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__subusers_manager_subusers_manager__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__subscription_manager_subscription_manager__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__updater_updater__ = __webpack_require__(78);
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














var WebsocketServiceProvider = /** @class */ (function () {
    function WebsocketServiceProvider(bu, cmanager, userData, docData, reportPresentator, doctoresManager, subsData, subusersManager, subuserData, subscriptionManager, updater) {
        this.bu = bu;
        this.cmanager = cmanager;
        this.userData = userData;
        this.docData = docData;
        this.reportPresentator = reportPresentator;
        this.doctoresManager = doctoresManager;
        this.subsData = subsData;
        this.subusersManager = subusersManager;
        this.subuserData = subuserData;
        this.subscriptionManager = subscriptionManager;
        this.updater = updater;
        this.init();
    }
    WebsocketServiceProvider_1 = WebsocketServiceProvider;
    WebsocketServiceProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.websocketConnect();
                return [2 /*return*/];
            });
        });
    };
    WebsocketServiceProvider.prototype.websocketConnect = function () {
        var _this = this;
        this.websocket = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_dom_WebSocketSubject__["WebSocketSubject"].create(this.bu.websocketUrl);
        this.websocket.subscribe(function (message) { return _this.serverMessages(message); }, function (err) { console.error(err); _this.websocketConnect(); }, function () { console.log("websocket over"); });
        console.log("cosas feas terminadas que pedo");
    };
    WebsocketServiceProvider.prototype.serverMessages = function (message) {
        console.log('trail1 serverMessages st');
        console.log('message received', message);
        switch (message.action) {
            case 'addCita':
                this.addCita(message);
                break;
            case 'removeCita':
                this.removeCita(message);
                break;
            case 'loadedReport':
                this.loadedReport(message);
                break;
            case 'addSubUser':
                this.addSubsUser(message);
                break;
            case 'removeSubUser':
                this.removeSubsUser(message);
                break;
            case 'groupAddSubSubs':
                this.groupAddSubSubs(message);
                break;
            case 'groupAddSubDocs':
                this.groupAddSubDocs(message);
                break;
            /* MENSAJES DE GRUPO MEDICO*/
            case WebsocketServiceProvider_1.ACTION_DOC_TO_GROUP:
                this.RESPONSE_DOC_TO_GROUP(message);
                break;
            case WebsocketServiceProvider_1.ACTION_SUB_TO_GROUP_DOCS:
                this.RESPONSE_SUB_TO_GROUP_DOCS(message);
                break;
            case WebsocketServiceProvider_1.ACTION_SUB_TO_GROUP_SUBS:
                this.RESPONSE_SUB_TO_GROUP_SUBS(message);
                break;
            case WebsocketServiceProvider_1.ACTION_DOC_OUT_GROUP:
                this.RESPONSE_DOC_OUT_GROUP(message);
                break;
            case WebsocketServiceProvider_1.ACTION_SUB_OUT_GROUP:
                this.RESPONSE_SUB_OUT_GROUP(message);
                break;
            case WebsocketServiceProvider_1.ACTION_SUB_BYCODE:
                this.RESPONSE_SUB_BYCODE(message);
                break;
        }
        console.log('trail1 serverMessages end');
    };
    WebsocketServiceProvider.prototype.groupAddSubSubs = function (message) {
        console.log('groupAddSubSubs', message);
        if (this.filterMessageById(message)) {
            console.log(this.subuserData.subUsers);
            this.subusersManager.cargarSubusuarios();
            //add the subuser to your subscription.
        }
    };
    WebsocketServiceProvider.prototype.groupAddSubDocs = function (message) {
        console.log('groupAddSubDocs', message);
        if (this.filterMessageById(message)) {
            console.log(this.docData.doctores);
            var gropdocs = JSON.parse(message.content);
            for (var _i = 0, gropdocs_1 = gropdocs; _i < gropdocs_1.length; _i++) {
                var gdoc = gropdocs_1[_i];
                console.log(' adding ', gdoc);
                var auxDoc = new __WEBPACK_IMPORTED_MODULE_9__user_data_doctores__["a" /* Doctores */]();
                auxDoc.Uid = gdoc.uid;
                auxDoc.name = gdoc.name;
                this.docData.addDoctor(auxDoc);
            }
            console.log('finished docdata is', this.docData.doctores);
        }
    };
    WebsocketServiceProvider.prototype.addSubsUser = function (message) {
        console.log('addSubsUser', message);
    };
    WebsocketServiceProvider.prototype.removeSubsUser = function (message) {
        console.log('removeSubsUser', message);
        if (this.filterMessageById(message)) {
            console.log(this.subsData.docs);
            this.subsData.docs = this.subsData.docs.filter(function (docs) { return Number(docs.uid) !== Number(message.content); });
            console.log(this.subsData.docs);
        }
    };
    /**
     *
     * @param message  a message received from websocket about a new or updated cita
     * este metodo recive un mensaje y filtra segun si debe recivir la cita, y la procesa.
     */
    WebsocketServiceProvider.prototype.addCita = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var aux_cita;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('addCita recieved', message);
                        console.log('trail1 addCita st');
                        if (!this.FilterMessageCita(message)) return [3 /*break*/, 2];
                        console.log("cita2addfiltered");
                        aux_cita = this.cmanager.generateCitaFullData(message.content);
                        this.reportPresentator.updateCita(aux_cita);
                        this.updateGot(aux_cita.Nid);
                        return [4 /*yield*/, this.updater.updateServicios()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        console.log('trail1 addCita end');
                        return [2 /*return*/];
                }
            });
        });
    };
    WebsocketServiceProvider.prototype.removeCita = function (message) {
        if (this.FilterMessageCita(message)) {
            var aux_cita = this.cmanager.deleteCitaFullData(message.content);
            this.reportPresentator.deleteCita(aux_cita);
            this.updateGot(aux_cita.Nid);
        }
    };
    /**
     * Este metodo se dispara cuando se actualizan las citas, removiendo la cita del pool de citas que esperan actualziacion, de esta manera se puede identificar y bloquear citas que esten esperando actualizacion.
     * @param citanid
     */
    WebsocketServiceProvider.prototype.updateGot = function (citanid) {
        console.log('reciviendo actualizacion de ', citanid);
        console.log('waitingupdates', JSON.stringify(this.cmanager.waitingupdates));
        this.cmanager.waitingupdates = this.cmanager.waitingupdates.filter(function (citasnids) { return Number(citasnids) !== Number(citanid); });
        console.log('after removal', JSON.stringify(this.cmanager.waitingupdates));
    };
    // returns true if one of the doctors this user is listening is contained on the receivers of this message
    WebsocketServiceProvider.prototype.FilterMessageCita = function (message) {
        var ret = false;
        console.log('filtering msg', message);
        for (var _i = 0, _a = message.receivers; _i < _a.length; _i++) {
            var uid = _a[_i];
            if (this.docData.existsByUid(uid)) {
                console.log('uid found', uid);
                ret = true;
                break;
            }
        }
        return ret;
    };
    WebsocketServiceProvider.prototype.filterMessageById = function (message) {
        var _this = this;
        console.log('filtering message by ids');
        console.log('message.receivers', message.receivers);
        console.log('this.userData.userData.uid', this.userData.userData.uid);
        var ret = false;
        var exists = message.receivers.find(function (uids) { return Number(_this.userData.userData.uid) === Number(uids); });
        console.log('exists', exists);
        if (exists)
            ret = true;
        return ret;
    };
    WebsocketServiceProvider.prototype.loadedReport = function (message) {
        console.log('REPORTING APP LOADED ------------------------------------------------');
        console.log(message);
    };
    WebsocketServiceProvider.prototype.send = function (message) {
        this.websocket.next(JSON.stringify(message));
    };
    /**
     * Respuescta cuando un sub usuario es agregado por codigo. este lo reciven los doctores y el usuario agregado para actualizar sus datos
     * @param message
     */
    WebsocketServiceProvider.prototype.RESPONSE_SUB_BYCODE = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('RESPONSE_SUB_BYCODE');
                        if (!this.filterMessageById(message)) return [3 /*break*/, 6];
                        console.log('RESPONSE_SUB_BYCODE infilter');
                        return [4 /*yield*/, this.updater.updateSuscription()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updater.updateDocList()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.updater.updateSubusers()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.updater.updateServicios()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.updater.updateCitas(true)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**----------------------------------------------------------------------MENSAJES DE GRUPOS MEDICOS */
    /** este mensaje lo reciven todos los doctores de un grupo cuando un doctor entra a su grupo medico. debe refrescar los datos de los doctores en el grupo.*/
    WebsocketServiceProvider.prototype.RESPONSE_DOC_TO_GROUP = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('RESPONSE_DOC_TO_GROUP');
                        if (!this.filterMessageById(message)) return [3 /*break*/, 6];
                        console.log('RESPONSE_DOC_TO_GROUP infilter');
                        return [4 /*yield*/, this.updater.updateSuscription()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updater.updateDocList()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.updater.updateSubusers()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.updater.updateServicios()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.updater.updateCitas(true)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Este mensaje lo reciven todos los doctores de un grupo medico cunado un sub usuario entra a su grupo. debe refrescar la lista de sub usuarios.
     * pero ya no lo voy a manejar porque basta con avisar que un doctor entra para que actualicen todos sus datos.
     */
    WebsocketServiceProvider.prototype.RESPONSE_SUB_TO_GROUP_DOCS = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('RESPONSE_SUB_TO_GROUP_DOCS');
                return [2 /*return*/];
            });
        });
    };
    /**
    * Este mensaje lo reciven todos los sub usuarios que entran a un grupo medico. debe refrescar toda el app.
    */
    WebsocketServiceProvider.prototype.RESPONSE_SUB_TO_GROUP_SUBS = function (message) {
        console.log('RESPONSE_SUB_TO_GROUP_SUBS');
        if (this.filterMessageById(message)) {
            console.log('RESPONSE_SUB_TO_GROUP_SUBS infilter');
            this.bu.locationReload();
        }
    };
    /**
   * Este mensaje lo reciven todos los miembros de un grupo cuando un doctor sale del grupo. el cuerpo del mensaje contiene el id del doctor que sale.
   * si el doctor que sale es este usuario recarga la pagina. si no, recarga la suscripcion y las citas. hace falta mecanismo para validar solo ver citas dentro de tu suscripcion.
   * (si es grupo.)
   */
    WebsocketServiceProvider.prototype.RESPONSE_DOC_OUT_GROUP = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('ACTION_DOC_OUT_GROUP');
                        if (!this.filterMessageById(message)) return [3 /*break*/, 6];
                        console.log('ACTION_DOC_OUT_GROUP infilter');
                        return [4 /*yield*/, this.updater.updateSuscription()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updater.updateDocList()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.updater.updateSubusers()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.updater.updateServicios()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.updater.updateCitas(true)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    WebsocketServiceProvider.prototype.RESPONSE_SUB_OUT_GROUP = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('ACTION_SUB_OUT_GROUP');
                        if (!this.filterMessageById(message)) return [3 /*break*/, 6];
                        console.log('ACTION_SUB_OUT_GROUP infilter');
                        return [4 /*yield*/, this.updater.updateSuscription()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updater.updateDocList()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.updater.updateSubusers()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.updater.updateServicios()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.updater.updateCitas(true)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    WebsocketServiceProvider.ACTION_DOC_TO_GROUP = 'ACTION_DOC_TO_GROUP'; // mensaje cuando un doctor entra a un grupo
    WebsocketServiceProvider.ACTION_SUB_TO_GROUP_DOCS = 'ACTION_SUB_TO_GROUP_DOCS'; // mensaje cuando un sub entra a un grupo que se envia a los doctores del grupo
    WebsocketServiceProvider.ACTION_SUB_TO_GROUP_SUBS = 'ACTION_SUB_TO_GROUP_SUBS'; // mensaje cuando un sub entra a un grupo que se envia a los subs que estan entrando para refrescar datos.
    WebsocketServiceProvider.ACTION_DOC_OUT_GROUP = 'ACTION_DOC_OUT_GROUP'; // mensaje cuando un sub entra a un grupo que se envia a los subs que estan entrando para refrescar datos.
    WebsocketServiceProvider.ACTION_SUB_OUT_GROUP = 'ACTION_SUB_OUT_GROUP'; // mensaje cuando un sub y a los doctores cuando un sub usuario abandona una suscripcion.
    WebsocketServiceProvider.ACTION_SUB_BYCODE = 'ACTION_SUB_BYCODE'; //mensaje cuando un sub entra a una susciripcion por codigo de usuario.
    WebsocketServiceProvider = WebsocketServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__base_url_base_url__["a" /* BaseUrlProvider */],
            __WEBPACK_IMPORTED_MODULE_3__citas_manager_citas_manager__["a" /* CitasManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__report_presentator_report_presentator__["a" /* ReportPresentatorProvider */],
            __WEBPACK_IMPORTED_MODULE_7__doctores_manager_doctores_manager__["a" /* DoctoresManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_8__subscription_data_subscription_data__["a" /* SubscriptionDataProvider */],
            __WEBPACK_IMPORTED_MODULE_11__subusers_manager_subusers_manager__["a" /* SubusersManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_10__subusers_data_subusers_data__["a" /* SubusersDataProvider */],
            __WEBPACK_IMPORTED_MODULE_12__subscription_manager_subscription_manager__["a" /* SubscriptionManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_13__updater_updater__["a" /* UpdaterProvider */]])
    ], WebsocketServiceProvider);
    return WebsocketServiceProvider;
    var WebsocketServiceProvider_1;
}());

var Message = /** @class */ (function () {
    function Message(receivers, action, sender, content, isBroadcast) {
        if (isBroadcast === void 0) { isBroadcast = false; }
        this.receivers = receivers;
        this.action = action;
        this.sender = sender;
        this.content = content;
        this.isBroadcast = isBroadcast;
    }
    return Message;
}());

//# sourceMappingURL=websocket-service.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrupalNodeEditorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DrupalNodeEditorProvider = /** @class */ (function () {
    function DrupalNodeEditorProvider() {
    }
    DrupalNodeEditorProvider_1 = DrupalNodeEditorProvider;
    /*getCleanField( data , field:string, assign:boolean = true){
    
      let field_ret = null;
      if(data[field]){
        if(data[field]['und'] && Array.isArray(data[field]['und'])){
          if(data[field]['und'].length > 1){
          let aux_arr = new Array();
          console.log('isanarray');
          for(let value of data[field]['und']){
            console.log('value is',value);
            if(value['value']){ aux_arr.push(value['value']); }
            else  if(value['uid']){ aux_arr.push(value['uid']); }
            else  if(value['nid']){ aux_arr.push(value['nid']); }
            else{ aux_arr.push(value); }
          }
          field_ret = aux_arr;
        }else{
          let value = data[field]['und'][0];
          if(value['value']){ field_ret = value['value']; }
          else  if(value['uid']){ field_ret = value['uid']; }
          else  if(value['nid']){ field_ret = value['nid']; }
          else{ field_ret = field_ret; }
        }
          
          console.log('endarray strringified data',JSON.stringify(data[field]));
        }else{ // si notiene mas de un elemento no es un array
          if(data[field]['und']['value']){ field_ret = data[field]['und']['value']; }
          else  if(data[field]['und']['uid']){ field_ret =  data[field]['und']['uid']; }
          else  if(data[field]['und']['nid']){ field_ret =  data[field]['und']['nid']; }
          else{ field_ret = data[field]['und']; }
        }
        console.log('end no array strringified data',JSON.stringify(data[field]));
      }else{
      }
      console.log(assign);
      if(assign){data[field] = field_ret; }
      console.log('end strringified data',JSON.stringify(data[field]));
      return field_ret;
    }*/
    DrupalNodeEditorProvider.prototype.getCleanField = function (type, data, field, assign) {
        if (assign === void 0) { assign = true; }
        console.log('data is', data);
        console.log('field looking 4 is ', field);
        console.log('field is', data[field]);
        console.log('start strringified data', JSON.stringify(data[field]));
        var field_ret = null;
        switch (type) {
            case DrupalNodeEditorProvider_1.FIELD_RELATION:
                console.log("frelation");
                field_ret = this.getCleanFieldRArray(data, field, assign);
                break;
            case DrupalNodeEditorProvider_1.FIELD_NUMBER:
                console.log("number");
                field_ret = this.getCleanFieldSimple(data, field, assign);
                break;
        }
        return field_ret;
    };
    DrupalNodeEditorProvider.prototype.getCleanFieldRArray = function (data, field, assign) {
        if (assign === void 0) { assign = true; }
        var field_ret = null;
        if (data[field]) {
            if (Array.isArray(data[field]['und'])) {
                var aux_arr = new Array();
                console.log('isanarray');
                for (var _i = 0, _a = data[field]['und']; _i < _a.length; _i++) {
                    var value = _a[_i];
                    console.log('value is', value);
                    if (value['value']) {
                        aux_arr.push(value['value']);
                    }
                    else if (value['uid']) {
                        aux_arr.push(value['uid']);
                    }
                    else if (value['nid']) {
                        aux_arr.push(value['nid']);
                    }
                    else {
                        aux_arr.push(value);
                    }
                }
                field_ret = aux_arr;
            }
            else {
                if (data[field]['und']['value']) {
                    field_ret = data[field]['und']['value'];
                }
                else if (data[field]['und']['uid']) {
                    field_ret = data[field]['und']['uid'];
                }
                else if (data[field]['und']['nid']) {
                    field_ret = data[field]['und']['nid'];
                }
                else {
                    field_ret = data[field]['und'];
                }
            }
            console.log('end no array strringified data', JSON.stringify(data[field]));
        }
        else {
        }
        console.log(assign);
        if (assign) {
            data[field] = field_ret;
        }
        console.log('end strringified data', JSON.stringify(data[field]));
        return field_ret;
    };
    DrupalNodeEditorProvider.prototype.getCleanFieldSimple = function (data, field, assign) {
        if (assign === void 0) { assign = true; }
        var field_ret = null;
        if (data[field]['und']) {
            console.log(data[field]['und']);
            if (data[field]['und'][0]) {
                console.log(data[field]['und'][0]);
                if (data[field]['und'][0]['value']) {
                    field_ret = data[field]['und'][0]['value'];
                }
                else if (data[field]['und'][0]['uid']) {
                    field_ret = data[field]['und'][0]['uid'];
                }
                else if (data[field]['und'][0]['nid']) {
                    field_ret = data[field]['und'][0]['nid'];
                }
                else {
                    field_ret = data[field]['und'][0];
                }
                console.log('field_ret', field_ret);
            }
            else {
                field_ret = null;
            }
        }
        else {
            field_ret = data[field];
        }
        console.log('field_ret simple', field_ret);
        if (assign) {
            data[field] = field_ret;
        }
        return field_ret;
    };
    DrupalNodeEditorProvider.prototype.getFormatedField = function (data, field) {
    };
    DrupalNodeEditorProvider.FIELD_RELATION = 0;
    DrupalNodeEditorProvider.FIELD_NUMBER = 1;
    DrupalNodeEditorProvider = DrupalNodeEditorProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DrupalNodeEditorProvider);
    return DrupalNodeEditorProvider;
    var DrupalNodeEditorProvider_1;
}());

//# sourceMappingURL=drupal-node-editor.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
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


/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AlertProvider = /** @class */ (function () {
    function AlertProvider(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.yesString = 'Si';
        this.noString = 'No';
        console.log('Hello AlertProvider Provider');
    }
    AlertProvider.prototype.resetStrings = function () {
        this.yesString = 'Si';
        this.noString = 'No';
    };
    AlertProvider.prototype.setStrings = function (yes, no) {
        this.yesString = yes;
        this.noString = no;
    };
    AlertProvider.prototype.presentAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: ['Cerrar']
        });
        alert.present();
    };
    AlertProvider.prototype.presentAlertHandler = function (title, msg, handlerCallback) {
        console.log('presentAlertHandler');
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: [
                {
                    text: 'ok',
                    handler: handlerCallback
                }
            ]
        });
        alert.present();
    };
    AlertProvider.prototype.presentPrompt = function (title, msg, inputs, inputcallback, cancelCallback) {
        var alert = this.alertCtrl.create({
            title: title,
            inputs: inputs,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: cancelCallback
                },
                {
                    text: 'ok',
                    handler: inputcallback
                }
            ]
        });
        alert.present();
    };
    AlertProvider.prototype.chooseAlert = function (title, msg, yesCallback, noCallback) {
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: [
                {
                    text: this.noString,
                    role: 'cancel',
                    handler: function () {
                        noCallback();
                    }
                },
                {
                    text: this.yesString,
                    handler: function () {
                        yesCallback();
                    }
                }
            ]
        });
        alert.present();
    };
    AlertProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], AlertProvider);
    return AlertProvider;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permissions_permissions__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__drupal_user_manager_drupal_user_manager__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_manager_servicios_manager__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__subscription_data_subscription_data__ = __webpack_require__(33);
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







/*
  Generated class for the TutorialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TutorialProvider = /** @class */ (function () {
    function TutorialProvider(modalCtrl, permissions, userData, userMan, servMan, subsData) {
        this.modalCtrl = modalCtrl;
        this.permissions = permissions;
        this.userData = userData;
        this.userMan = userMan;
        this.servMan = servMan;
        this.subsData = subsData;
        this.isTutorial = false;
        this.serviceCreated = false;
        this.usuarioCreated = false;
        this.tutorialMainModal = null;
        this.serviciosModal = null;
        this.usuariosModal = null;
        this.canClose = false;
        this.usergroupexplain = true;
        this.subaccountsleft = 0;
        this.isplanholder = false;
        this.tutorial_users_selected_option = 0;
        this.tutorial_user_created_step = 0;
    }
    TutorialProvider_1 = TutorialProvider;
    Object.defineProperty(TutorialProvider.prototype, "isGroup", {
        get: function () { return this.subsData.isGroup; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(TutorialProvider.prototype, "TUTORIAL_ACTIVE", {
        get: function () { return TutorialProvider_1.TUTORIAL_ACTIVE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TutorialProvider.prototype, "TUTORIAL_FINISHED", {
        get: function () { return TutorialProvider_1.TUTORIAL_FINISHED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TutorialProvider.prototype, "TUTORIAL_USER_CNR", {
        get: function () { return TutorialProvider_1.TUTORIAL_USER_CNR; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TutorialProvider.prototype, "TUTORIAL_USER_BOTH", {
        get: function () { return TutorialProvider_1.TUTORIAL_USER_BOTH; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TutorialProvider.prototype, "TUTORIAL_USER_CODE", {
        get: function () { return TutorialProvider_1.TUTORIAL_USER_CODE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TutorialProvider.prototype, "TUTORIAL_USER_STEP_CAJA", {
        get: function () { return TutorialProvider_1.TUTORIAL_USER_STEP_CAJA; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TutorialProvider.prototype, "TUTORIAL_USER_STEP_RECEPCION", {
        get: function () { return TutorialProvider_1.TUTORIAL_USER_STEP_RECEPCION; },
        enumerable: true,
        configurable: true
    });
    TutorialProvider.prototype.checkNStart = function () {
        if (this.checkTutorialState()) {
            this.canClose = false;
            this.openTutorial();
        }
    };
    TutorialProvider.prototype.openTutorialCanClose = function () {
        this.canClose = true;
        this.openTutorial();
    };
    TutorialProvider.prototype.tutorialReplayAvailability = function () {
        if (this.permissions.checkUserPermission([__WEBPACK_IMPORTED_MODULE_3__user_data_user_data__["a" /* UserDataProvider */].TIPO_DOCTOR])
            && this.userData.userData.tutorial_state.und
            && Number(this.userData.userData.tutorial_state.und[0].value) !== 0) {
            return true;
        }
        return false;
    };
    TutorialProvider.prototype.checkTutorialState = function () {
        if (this.permissions.checkUserSuscription([__WEBPACK_IMPORTED_MODULE_3__user_data_user_data__["a" /* UserDataProvider */].PLAN_ANY])
            && this.permissions.checkUserPermission([__WEBPACK_IMPORTED_MODULE_3__user_data_user_data__["a" /* UserDataProvider */].TIPO_DOCTOR])
            && this.userData.userData.tutorial_state.und
            && Number(this.userData.userData.tutorial_state.und[0].value) === 0) {
            return TutorialProvider_1.TUTORIAL_ACTIVE;
        }
        else {
            return TutorialProvider_1.TUTORIAL_FINISHED;
        }
    };
    TutorialProvider.prototype.openTutorial = function () {
        //this.tutorialMainModal = this.modalCtrl.create("WelcomeModalPage");
        this.subaccountsleft = this.subsData.getSubAccountsLeft();
        this.isplanholder = this.permissions.checkUserPlanHolder();
        console.log('openTutorial', this.subaccountsleft, this.isGroup, this.isplanholder);
        this.tutorialMainModal = this.modalCtrl.create("WelcomeModalPage", undefined, { enableBackdropDismiss: this.canClose });
        this.tutorialMainModal.present({});
    };
    TutorialProvider.prototype.finishTutorial = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cloneData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.userData.userData.tutorial_state.und[0].value = "1";
                        cloneData = {
                            uid: this.userData.userData.uid,
                            field_tutorial_state: { und: [{ value: "1" }] },
                        };
                        return [4 /*yield*/, this.userMan.updateUserd(cloneData).toPromise()];
                    case 1:
                        _a.sent();
                        this.tutorialMainModal.dismiss();
                        console.log('update tutorial at dismiss');
                        return [2 /*return*/];
                }
            });
        });
    };
    TutorialProvider.prototype.showServicioModal = function () {
        this.servMan.isgroup = false;
        this.serviciosModal = this.modalCtrl.create("NuevoservicioModalPage", undefined, { enableBackdropDismiss: this.canClose, cssClass: "smallModal nuevoservicioModal" });
        this.serviciosModal.present({});
    };
    TutorialProvider.prototype.closeServicioModal = function () {
        //this.serviciosModal.dismiss();
    };
    TutorialProvider.prototype.showUsuarioModal = function () {
        this.usuariosModal = this.modalCtrl.create("NuevousuarioModalPage", undefined, { enableBackdropDismiss: this.canClose, cssClass: "smallModal nuevousuarioModal" });
        this.usuariosModal.present({});
    };
    TutorialProvider.prototype.closeUsuarioModal = function () {
        this.usuariosModal.dismiss();
    };
    TutorialProvider.TUTORIAL_ACTIVE = true;
    TutorialProvider.TUTORIAL_FINISHED = false;
    TutorialProvider.TUTORIAL_USER_CNR = 1; // opcion de caja y recepcion
    TutorialProvider.TUTORIAL_USER_BOTH = 2; //opcion de un usuario para caja y otro para recepcion
    TutorialProvider.TUTORIAL_USER_CODE = 3; //opcion de agregar usuarios por codigo
    TutorialProvider.TUTORIAL_USER_STEP_CAJA = 1;
    TutorialProvider.TUTORIAL_USER_STEP_RECEPCION = 2;
    TutorialProvider = TutorialProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_2__permissions_permissions__["a" /* PermissionsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__drupal_user_manager_drupal_user_manager__["a" /* DrupalUserManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__servicios_manager_servicios_manager__["a" /* ServiciosManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__subscription_data_subscription_data__["a" /* SubscriptionDataProvider */]])
    ], TutorialProvider);
    return TutorialProvider;
    var TutorialProvider_1;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConektaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the ConektaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 * Siempre se debe usar esta estructura en el elemento :D
 * <conekta (successToken)='successToken($event)' (errorToken)='errorToken($event)'></conekta>
 */
var ConektaComponent = /** @class */ (function () {
    function ConektaComponent() {
        this.successToken = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.errorToken = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.card = {
            name: null,
            number: null,
            exp_month: null,
            exp_year: null,
            cvc: null
        };
        /*card: CARD = {
          name:"Fulanito Pérez",
          number:"4242424242424242",
          exp_month:"12",
          exp_year:"2020",
          cvc:"123"
        };*/
        this.years = [];
        this.validCard = null;
        this.validCVC = null;
        this.cardBrand = null;
        var start = (new Date()).getFullYear();
        for (var i = 0; i < 10; i++) {
            this.years.push(start.toString());
            start++;
        }
    }
    ConektaComponent.prototype.init = function (url, publicKey) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            script.onload = function (c) {
                _this.setPublicKey(publicKey);
                resolve(c);
            };
            script.onerror = function (err) {
                reject(err);
            };
            document.head.appendChild(script);
        });
    };
    ConektaComponent.prototype.setPublicKey = function (PK) {
        Conekta.setPublicKey(PK);
    };
    ConektaComponent.prototype.getPublicKey = function () {
        return Conekta.getPublicKey();
    };
    ConektaComponent.prototype.setLanguage = function (lang) {
        Conekta.setLanguage(lang);
    };
    ConektaComponent.prototype.getLanguage = function () {
        return Conekta.getLanguage();
    };
    ConektaComponent.prototype.getToken = function () {
        var _this = this;
        var card = {
            card: this.card
        };
        Conekta.Token.create(card, function (token) {
            token.cardNumber = _this.card.number.replace(/\D/g, '').substr(_this.card.number.replace(/\D/g, '').length - 4);
            _this.getBrand();
            token.brand = _this.cardBrand;
            _this.successToken.emit(token);
        }, function (err) {
            _this.errorToken.emit(err);
        });
    };
    ConektaComponent.prototype.validateNumber = function () {
        this.validCard = Conekta.card.validateNumber(this.card.number.replace(/\D/g, ''));
        this.getBrand();
    };
    ConektaComponent.prototype.validateCVC = function () {
        this.validCVC = Conekta.card.validateCVC(this.card.cvc);
    };
    ConektaComponent.prototype.getBrand = function () {
        this.cardBrand = Conekta.card.getBrand(this.card.number.replace(/\D/g, ''));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ConektaComponent.prototype, "successToken", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ConektaComponent.prototype, "errorToken", void 0);
    ConektaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'conekta',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\components\conekta\conekta.html"*/'<form (ngSubmit)="getToken()">\n\n  <div>\n\n    <ion-row>\n\n      <ion-col class="card-name" col-12 col-sm-12>\n\n        <ion-row>\n\n          <ion-col col-10>\n\n            <ion-label stacked><ion-icon name="person"></ion-icon>&nbsp;&nbsp;&nbsp;Nombre</ion-label>\n\n            <ion-input type="text" [(ngModel)]="card.name" name="name"></ion-input>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            <div *ngIf="cardBrand === \'visa\'" class="card-icon visa"></div>\n\n            <div *ngIf="cardBrand === \'mastercard\'" class="card-icon mastercard"></div>\n\n            <div *ngIf="cardBrand === \'amex\'" class="card-icon amex"></div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n      <ion-col col-12 col-sm-6>\n\n        <ion-label stacked><ion-icon name="card"></ion-icon>&nbsp;&nbsp;&nbsp;Número de Tarjeta&nbsp;&nbsp;<ion-icon *ngIf="validCard===true" name="checkmark"></ion-icon><ion-icon *ngIf="validCard===false" name="close"></ion-icon></ion-label>\n\n        <ion-input type="text" [(ngModel)]="card.number" (keyup)="validateNumber()" name="number" maxlength="20"></ion-input>\n\n      </ion-col>\n\n      <ion-col col-4 col-sm-2 class="select">\n\n        <ion-label stacked>MM</ion-label>\n\n        <ion-select [(ngModel)]="card.exp_month" name="exp_month">\n\n          <ion-option value="01">01</ion-option>\n\n          <ion-option value="02">02</ion-option>\n\n          <ion-option value="03">03</ion-option>\n\n          <ion-option value="04">04</ion-option>\n\n          <ion-option value="05">05</ion-option>\n\n          <ion-option value="06">06</ion-option>\n\n          <ion-option value="07">07</ion-option>\n\n          <ion-option value="08">08</ion-option>\n\n          <ion-option value="09">09</ion-option>\n\n          <ion-option value="10">10</ion-option>\n\n          <ion-option value="11">11</ion-option>\n\n          <ion-option value="12">12</ion-option>\n\n        </ion-select>\n\n      </ion-col>\n\n      <ion-col col-4 col-sm-2 class="select">\n\n        <ion-label stacked>AA</ion-label>\n\n        <ion-select [(ngModel)]="card.exp_year" name="exp_year">\n\n          <ion-option *ngFor="let year of years" [value]="year">{{ year }}</ion-option>\n\n        </ion-select>\n\n      </ion-col>\n\n      <ion-col col-4 col-sm-2 class="select">\n\n        <ion-label stacked>CVC&nbsp;&nbsp;<ion-icon *ngIf="validCVC===true" name="checkmark"></ion-icon><ion-icon *ngIf="validCVC===false" name="close"></ion-icon></ion-label>\n\n        <ion-input [(ngModel)]="card.cvc"  (keyup)="validateCVC()" name="cvc" type="number" max="9999" min="0001" maxlength="4"></ion-input>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n  <button ion-button type="submit" block>Agregar Tarjeta</button>\n\n</form>'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\components\conekta\conekta.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConektaComponent);
    return ConektaComponent;
}());

//# sourceMappingURL=conekta.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitaProgressControllerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__citas_manager_citas_manager__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_data_user_data__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the CitaProgressControllerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CitaProgressControllerProvider = /** @class */ (function () {
    function CitaProgressControllerProvider(citasManager, userData, modalCtrl) {
        this.citasManager = citasManager;
        this.userData = userData;
        this.modalCtrl = modalCtrl;
        this.cobroEfectivo = null;
        this.cobroTarjeta = null;
        this.cobroCheque = null;
        this.showinterval = null;
        this.editfinish = false;
        this.factura_cantidad = null;
        this.factura = 0;
        this.activeCitaAnterior = 0;
        this.checkboxMode = true; //checkbox mode porque quisieron checkbox pero no es tan viable a ver que pasa.
    }
    Object.defineProperty(CitaProgressControllerProvider.prototype, "CantidadRestante", {
        get: function () {
            //console.log('this.activeCita.restantePagos',this.activeCita.restantePagos);
            //console.log('cobroEfectivo',this.cobroEfectivo);
            //console.log('cobroCheque',this.cobroCheque);
            //console.log('cobroTarjeta',this.cobroTarjeta);
            var ret = 0 +
                ((Number(this.activeCita.restantePagos)) -
                    (Number(this.cobroEfectivo) + Number(this.cobroCheque) + Number(this.cobroTarjeta)));
            ret = Number(ret.toFixed(2));
            return ret;
        },
        enumerable: true,
        configurable: true
    });
    CitaProgressControllerProvider.prototype.setInputs = function () {
        this.cobroEfectivo = null;
        this.cobroTarjeta = null;
        this.cobroCheque = null;
        this.factura = 0;
        this.factura_cantidad = null;
        this.servicesCompare = null;
    };
    CitaProgressControllerProvider.prototype.openProgress = function (cita) {
        if (!cita.checkState(__WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_FINALIZADA)) {
            this.setInputs();
        }
        if (!cita.checkState(__WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_FINALIZADA) || !cita.checkState(__WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_COBRO)) {
            this.editfinish = false;
        }
        console.log('opening progress');
        this.setActiveCita(cita);
        //this.evalServicios();
        //this.calcularCosto();
        this.evalServicios();
        this.servicesCompare = JSON.parse(JSON.stringify(this.activeCita.addedServices));
        console.log('evalServicios this.servicesCompare', JSON.stringify(this.servicesCompare));
        //this.setCortesia();
        this.calcularCosto();
        this.startInterval();
        var Modal = this.modalCtrl.create("ProgresocitaModalPage", { cita: cita }, { cssClass: "smallModal progressModal" });
        Modal.present({});
    };
    CitaProgressControllerProvider.prototype.setActiveCita = function (cita) {
        console.log('setActiveCita');
        this.activeCita = cita; //navParams.get('cita');
        console.log('trail3 estado data', cita.data.field_estado);
        this.activeCita.estado_anterior = cita.data.field_estado.und[0].value;
        console.log('trail3 setting estado anterior al setearcita', this.activeCita.estado_anterior);
        this.activeCitaDoc = this.citasManager.getDoctorOFCita(this.activeCita);
        console.log(this.activeCita.addedServices);
        this.activeCita.PagosonShow = this.activeCita.PagosonFecha;
    };
    CitaProgressControllerProvider.prototype.finalizarCitaActiva = function () {
        this.calcularCosto();
        this.activeCita.data.field_costo_sobrescribir.und[0].value = this.costoCita;
        this.activeCita.setServicesData();
        this.activeCitaDoc.citaActiva = null;
    };
    CitaProgressControllerProvider.prototype.pagarCitaActiva = function () {
        this.checkCobroStates('end pca');
        this.activeCita.setServicesData();
        this.activeCita.cobroEfectivo = this.cobroEfectivo == null ? 0 : this.cobroEfectivo;
        this.activeCita.cobroCheque = this.cobroCheque == null ? 0 : this.cobroCheque;
        this.activeCita.cobroTarjeta = this.cobroTarjeta == null ? 0 : this.cobroTarjeta;
        this.activeCita.data.field_facturar.und[0].value = this.factura;
        this.activeCita.data.field_facturar_cantidad.und[0].value = this.factura_cantidad == null ? 0 : this.factura_cantidad;
        this.citasManager.setCitaFechaReporte(this.activeCita, true);
        /*let aux_pago = new Array();
        aux_pago['efe'] = this.cobroEfectivo == null ? ''+0 : ''+this.cobroEfectivo;
        aux_pago['tar'] = this.cobroTarjeta == null ? ''+0 : ''+this.cobroTarjeta;
        aux_pago['che'] = this.cobroCheque == null ? ''+0 :''+this.cobroCheque;
        aux_pago['fac'] = this.factura_cantidad == null ? ''+0 : ''+this.factura_cantidad;
        aux_pago['fec'] = ''+new Date().getTime();
        this.activeCita.pagos.push(aux_pago);*/
        var aux_pago = {
            efe: this.cobroEfectivo == null ? '' + 0 : '' + this.cobroEfectivo,
            tar: this.cobroTarjeta == null ? '' + 0 : '' + this.cobroTarjeta,
            che: this.cobroCheque == null ? '' + 0 : '' + this.cobroCheque,
            fac: this.factura_cantidad == null ? '' + 0 : '' + this.factura_cantidad,
            fec: '' + new Date().getTime(),
            uid: Number(this.userData.userData.uid),
            name: this.userData.showname,
            isdoc: this.userData.checkUserPermission([this.userData.TIPO_DOCTOR]) ? 1 : 0
        };
        console.log('guardando pago', aux_pago);
        this.activeCita.compareServicios(this.servicesCompare);
        this.activeCita.pagos.push(aux_pago);
        console.log('pagos struct', this.activeCita.pagos);
        console.log('stringify', JSON.stringify(this.activeCita.pagos));
        this.activeCita.data.field_pagos_json = { und: [{ value: '' }] };
        this.activeCita.data.field_pagos_json.und[0].value = JSON.stringify(this.activeCita.pagos);
        console.log('pagos field', this.activeCita.data.field_pagos_json);
        console.log('this.cobroEfectivo', JSON.stringify(this.activeCita.cobroEfectivo));
        console.log('this.cobroCheque', JSON.stringify(this.activeCita.cobroCheque));
        console.log('this.cobroTarjeta', JSON.stringify(this.activeCita.cobroTarjeta));
        console.log('this.factura', JSON.stringify(this.activeCita.data.field_facturar.und[0].value));
        console.log('this.factura_cantidad', JSON.stringify(this.activeCita.data.field_facturar_cantidad.und[0].value));
    };
    CitaProgressControllerProvider.prototype.checkCobroStates = function (msg) {
        console.log('checkCobroStates', msg);
        console.log('this.cobroEfectivo', JSON.stringify(this.cobroEfectivo));
        console.log('this.cobroCheque', JSON.stringify(this.cobroCheque));
        console.log('this.cobroTarjeta', JSON.stringify(this.cobroTarjeta));
        console.log('this.factura', JSON.stringify(this.factura));
        console.log('this.factura_cantidad', JSON.stringify(this.factura_cantidad));
    };
    CitaProgressControllerProvider.prototype.updateCitaActiva = function () {
        this.calcularCosto();
        this.activeCita.data.field_costo_sobrescribir.und[0].value = this.costoCita;
        this.activeCita.setServicesData();
        this.activeCita.cobroEfectivo = this.cobroEfectivo;
        this.activeCita.cobroCheque = this.cobroCheque;
        this.activeCita.cobroTarjeta = this.cobroTarjeta;
        this.activeCita.data.field_facturar.und[0].value = this.factura;
        this.activeCita.data.field_facturar_cantidad.und[0].value = this.factura_cantidad;
        //actualizando informacion de ediciones
        console.log('actualizando datos de ediciones');
        this.activeCita.compareServicios(this.servicesCompare);
        this.activeCita.setEdicionesField();
        console.log('active cita data ediciones ended', JSON.stringify(this.activeCita.data.field_ediciones_json));
    };
    CitaProgressControllerProvider.prototype.addService = function () {
        var _this = this;
        console.log('addService start servicesCompare', JSON.stringify(this.servicesCompare));
        var aux_servicio = null;
        console.log(this.selectedService);
        if (Number(this.selectedService) !== Number(0)) {
            var service_to_add = this.available_services.find(function (services) { return Number(services.Nid) === Number(_this.selectedService); });
            console.log('service to add', service_to_add);
            if (this.activeCita.addServicio(service_to_add)) {
                console.log('servicio added');
                this.available_services = this.activeCita.getServiciosAvailable(this.activeCitaDoc.servicios);
                this.calcularCosto();
                this.selectedService = 0;
            }
        }
        console.log('addService end servicesCompare', JSON.stringify(this.servicesCompare));
    };
    /*setCortesia(){
      let found = this.available_services.find((services)=>{ return Number(services.Nid) === Number(CitasDataProvider.SERVICIO_CORTESIA_NID)});
      if(!found){
        const aux_serv = new servicios();
        aux_serv.Nid = Number(CitasDataProvider.SERVICIO_CORTESIA_NID);
        aux_serv.Uid = 1;
        aux_serv.title = 'Cortesía';
        aux_serv.costo = 0;
        this.available_services.push(aux_serv);
      }
      console.log('adding cortesia',this.available_services);
    }
  
    unsetCortesia(){
      this.available_services = this.available_services.filter((servicios)=>{ return Number(servicios.Nid) !== Number(CitasDataProvider.SERVICIO_CORTESIA_NID);  });
      console.log('removing cortesia',this.available_services);
    }*/
    CitaProgressControllerProvider.prototype.removeService = function (servicio) {
        this.activeCita.removeServicio(servicio);
        this.available_services = this.activeCita.getServiciosAvailable(this.activeCitaDoc.servicios);
        this.calcularCosto();
    };
    CitaProgressControllerProvider.prototype.removeServiceWnid = function (Nid) {
        this.activeCita.removeServicioNid(Nid);
        this.available_services = this.activeCita.getServiciosAvailable(this.activeCitaDoc.servicios);
        this.calcularCosto();
    };
    CitaProgressControllerProvider.prototype.calcularCosto = function () {
        var _this = this;
        console.log('calculando costo');
        this.costoCita = 0;
        console.log(this.activeCita.addedServices);
        this.activeCita.addedServices.forEach(function (element) {
            _this.costoCita += Number(element.costo);
            _this.activeCita.data.field_costo_sobrescribir.und[0].value = _this.costoCita;
        });
        console.log(this.costoCita);
    };
    CitaProgressControllerProvider.prototype.evalServicios = function () {
        this.activeCita.setAddedServices(this.activeCitaDoc.servicios);
        this.available_services = this.activeCita.getServiciosAvailable(this.activeCitaDoc.servicios);
        this.cortesiaCheck();
    };
    CitaProgressControllerProvider.prototype.startInterval = function () {
        var _this = this;
        if (!this.showinterval) {
            this.showinterval = setInterval(function () { _this.activeCita.setDuracionMs(); }, 1000);
        }
    };
    CitaProgressControllerProvider.prototype.stopInterval = function () {
        if (this.showinterval) {
            clearInterval(this.showinterval);
            this.showinterval = null;
        }
    };
    CitaProgressControllerProvider.prototype.updateCheckedOption = function (Nid, State) {
        console.log('progresscontroller updateCheckedOption', Nid, State);
        console.log('updateCheckedOption start servicesCompare', JSON.stringify(this.servicesCompare));
        console.log('activecita addedservices', this.activeCita.addedServices);
        if (State) {
            if (Number(Nid) === Number(__WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].SERVICIO_CORTESIA_NID)) {
                console.log('es cortesia');
                if (this.activeCita.addedServices.length === 0) {
                    console.log('es 0 ');
                    this.selectedService = Nid;
                    this.addService();
                }
            }
            else {
                this.selectedService = Nid;
                this.addService();
                this.removeServiceWnid(Number(__WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].SERVICIO_CORTESIA_NID));
            }
        }
        else {
            this.removeServiceWnid(Nid);
            this.cortesiaCheck();
        }
        console.log('added', this.activeCita.addedServices);
        console.log('updateCheckedOption end servicesCompare', JSON.stringify(this.servicesCompare));
    };
    CitaProgressControllerProvider.prototype.checkChecked = function (Nid) {
        return this.activeCita.addedServices.find(function (aux_serves) { return Number(aux_serves.Nid) === Number(Nid); }) !== undefined;
    };
    /* async guardarEdiciones(){
       console.log('guardarEdiciones');
       this.activeCita.compareServicios(this.servicesCompare);
       console.log('pcon guardarEdiciones',this.activeCita.todayEdiciones);
       await this.citasManager.guardarEdiciones(this.activeCita);
     }*/
    CitaProgressControllerProvider.prototype.cortesiaCheck = function () {
        console.log('cortesiaCheck', this.activeCita.addedServices);
        if (this.activeCita.addedServices.length <= 0) {
            this.selectedService = Number(__WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].SERVICIO_CORTESIA_NID);
            this.addService();
            this.selectedService = null;
        }
    };
    CitaProgressControllerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__citas_manager_citas_manager__["a" /* CitasManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"]])
    ], CitaProgressControllerProvider);
    return CitaProgressControllerProvider;
}());

//# sourceMappingURL=cita-progress-controller.js.map

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitasDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_data_citas__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date_date__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CitasDataProvider = /** @class */ (function () {
    function CitasDataProvider() {
        this.citas = new Array();
        this.citasShowPool = new Array(); //some citas to show based on filters.
        this.startDateFilter = 0;
        this.pacienteFilter = null;
        this.endDateFilter = new Date().getTime() + (1000 * 60 * 60 * 24 * 365 * 5);
        this.citasSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.customDateFilters = false;
        this.customFilters = false;
        this.ayer = 0;
        this.amon = 0;
        this.userStateFilter = [
            CitasDataProvider_1.STATE_PENDIENTE,
            CitasDataProvider_1.STATE_CONFIRMADA,
            CitasDataProvider_1.STATE_ACTIVA,
            CitasDataProvider_1.STATE_COBRO,
            CitasDataProvider_1.STATE_FINALIZADA,
            CitasDataProvider_1.STATE_CANCELADA,
            CitasDataProvider_1.STATE_ADEUDO
        ];
        this.daysCitas = new Array();
        this.yearCitas = new Array();
    }
    CitasDataProvider_1 = CitasDataProvider;
    Object.defineProperty(CitasDataProvider.prototype, "STATE_PENDIENTE", {
        get: function () { return CitasDataProvider_1.STATE_PENDIENTE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_CONFIRMADA", {
        get: function () { return CitasDataProvider_1.STATE_CONFIRMADA; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_ACTIVA", {
        get: function () { return CitasDataProvider_1.STATE_ACTIVA; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_COBRO", {
        get: function () { return CitasDataProvider_1.STATE_COBRO; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_FINALIZADA", {
        get: function () { return CitasDataProvider_1.STATE_FINALIZADA; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_CANCELADA", {
        get: function () { return CitasDataProvider_1.STATE_CANCELADA; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_ELIMINADA", {
        get: function () { return CitasDataProvider_1.STATE_CANCELADA; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_ADEUDO", {
        get: function () { return CitasDataProvider_1.STATE_ADEUDO; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_ORDER_PENDIENTE", {
        get: function () { return CitasDataProvider_1.STATE_ORDER_PENDIENTE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_ORDER_CONFIRMADA", {
        get: function () { return CitasDataProvider_1.STATE_ORDER_CONFIRMADA; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_ORDER_ACTIVA", {
        get: function () { return CitasDataProvider_1.STATE_ORDER_ACTIVA; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_ORDER_COBRO", {
        get: function () { return CitasDataProvider_1.STATE_ORDER_COBRO; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_ORDER_FINALIZADA", {
        get: function () { return CitasDataProvider_1.STATE_ORDER_FINALIZADA; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_ORDER_CANCELADA", {
        get: function () { return CitasDataProvider_1.STATE_ORDER_CANCELADA; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_ORDER_ELIMINADA", {
        get: function () { return CitasDataProvider_1.STATE_ORDER_CANCELADA; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_ORDER_ADEUDO", {
        get: function () { return CitasDataProvider_1.STATE_ORDER_ADEUDO; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_PENDIENTE_COLOR", {
        get: function () { return CitasDataProvider_1.STATE_PENDIENTE_COLOR; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_CONFIRMADA_COLOR", {
        get: function () { return CitasDataProvider_1.STATE_CONFIRMADA_COLOR; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_ACTIVA_COLOR", {
        get: function () { return CitasDataProvider_1.STATE_ACTIVA_COLOR; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_COBRO_COLOR", {
        get: function () { return CitasDataProvider_1.STATE_COBRO_COLOR; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_FINALIZADA_COLOR", {
        get: function () { return CitasDataProvider_1.STATE_FINALIZADA_COLOR; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_CANCELADA_COLOR", {
        get: function () { return CitasDataProvider_1.STATE_CANCELADA_COLOR; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_ELIMINADA_COLOR", {
        get: function () { return CitasDataProvider_1.STATE_ELIMINADA_COLOR; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "STATE_ELIMINADA_ADEUDO", {
        get: function () { return CitasDataProvider_1.STATE_ADEUDO_COLOR; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitasDataProvider.prototype, "subject", {
        get: function () { return this.citasSubject; },
        enumerable: true,
        configurable: true
    });
    CitasDataProvider.prototype.addCita = function (cita, call) {
        if (call === void 0) { call = true; }
        console.log('adding a cita', cita);
        console.log('already existing citas', this.citas);
        if (!this.exists(cita))
            this.citas.push(cita);
        else
            this.updateCita(cita.data);
        if (call)
            this.subject.next(this.citas);
        this.defaultSort();
        console.log('added cita', cita, this.citas);
    };
    CitasDataProvider.prototype.removeCita = function (cita, call) {
        if (call === void 0) { call = true; }
        //delete this.citas[cita.Nid];
        this.citas = this.citas.filter(function (citas) { return citas.Nid !== cita.Nid; });
        console.log('citas list after removed', this.citas);
        if (call)
            this.subject.next(this.citas);
        this.defaultSort();
        console.log('removed cita', cita, this.citas);
    };
    CitasDataProvider.prototype.updateCita = function (data, call) {
        if (call === void 0) { call = true; }
        for (var _i = 0, _a = this.citas; _i < _a.length; _i++) {
            var cita = _a[_i];
            if (cita.Nid === data.Nid) {
                cita.data = data;
                console.log('processDatay updateCita');
                cita.processData();
                /*cita.setData(data);*/
                if (call)
                    this.subject.next(this.citas);
                console.log('updated cita', cita);
            }
        }
        this.defaultSort();
    };
    CitasDataProvider.prototype.defaultSort = function () {
        console.log('defaultsorting citas');
        this.citas = CitasDataProvider_1.sortByStateDate(this.citas);
        this.applyFilters();
        this.getCitasDaysAndSort();
        this.citasShowPool = CitasDataProvider_1.sortByStateDate(this.citasShowPool);
        //this.citasShowPool =  CitasDataProvider.sortByStateDateDay(this.citasShowPool);
    };
    CitasDataProvider.prototype.getCitasDaysAndSort = function () {
        //get days of all citas and add their citas to them.
        //sort citas of everyday
        console.log('getting citas days');
        this.daysCitas = new Array();
        this.getCitasDays();
        this.sortCitasDays();
        this.sortDays();
        this.setdaysLabels();
        console.log('citas days loadded', this.daysCitas);
    };
    CitasDataProvider.prototype.sortCitasDays = function () {
        for (var _i = 0, _a = this.daysCitas; _i < _a.length; _i++) {
            var day = _a[_i];
            day.citasShowPool = CitasDataProvider_1.sortByStateDate(day.citasShowPool);
        }
    };
    CitasDataProvider.prototype.sortDays = function () {
        this.daysCitas = this.daysCitas.sort(function (a, b) {
            if (a.DayMs > b.DayMs) {
                return 1;
            }
            if (a.DayMs < b.DayMs) {
                return -1;
            }
            return 0;
        });
    };
    CitasDataProvider.prototype.setdaysLabels = function () {
        this.ayer = 0;
        this.amon = 0;
        for (var _i = 0, _a = this.daysCitas; _i < _a.length; _i++) {
            var day = _a[_i];
            if (this.checkyear(day.DayMs)) {
                day.yearlabel = this.ayer;
                this.amon = 0;
            }
            if (this.checkMonth(day.DayMs)) {
                day.monthlabel = __WEBPACK_IMPORTED_MODULE_3__date_date__["a" /* DateProvider */].getMonthLabel(this.amon);
            }
        }
    };
    CitasDataProvider.prototype.getCitasDays = function () {
        var _loop_1 = function (cita) {
            var dayMS = __WEBPACK_IMPORTED_MODULE_3__date_date__["a" /* DateProvider */].getStartEndOFDate(new Date(cita.dateMs)).start.getTime();
            var exist = this_1.daysCitas.find(function (daycitas) {
                return daycitas.DayMs === dayMS;
            });
            console.log('found this day', exist);
            if (exist) {
                exist.citasShowPool.push(cita);
            }
            else {
                console.log('creating day', dayMS, __WEBPACK_IMPORTED_MODULE_3__date_date__["a" /* DateProvider */].getStringDate(new Date(dayMS)));
                var auxday = {
                    DayMs: dayMS,
                    monthlabel: 0,
                    yearlabel: 0,
                    DayName: __WEBPACK_IMPORTED_MODULE_3__date_date__["a" /* DateProvider */].getStringDate(new Date(dayMS)),
                    citasShowPool: new Array()
                };
                auxday.citasShowPool.push(cita);
                this_1.daysCitas.push(auxday);
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.citasShowPool; _i < _a.length; _i++) {
            var cita = _a[_i];
            _loop_1(cita);
        }
    };
    CitasDataProvider.prototype.checkyear = function (DayMs) {
        var ret = false;
        var year = new Date(DayMs).getFullYear();
        if (this.ayer < year) {
            ret = true;
            this.ayer = year;
            console.log(' checkytrailcheckyear tru');
        }
        return ret;
    };
    CitasDataProvider.prototype.checkMonth = function (DayMs) {
        var ret = false;
        var month = new Date(DayMs).getMonth() + 1;
        var year = new Date(DayMs).getFullYear();
        console.log('checkytrail', month, year);
        if (this.amon <= month) {
            if (this.amon === month) {
                if (this.ayer < year) {
                    ret = true;
                    this.amon = month;
                    console.log(' checkytrailcheckmon tru');
                }
            }
            else {
                ret = true;
                this.amon = month;
                console.log(' checkytrailcheckmon tru');
            }
        }
        return ret;
    };
    CitasDataProvider.prototype.getCitasByStatus = function (status) {
        return this.citas.filter(function (citas) { citas.checkState(status); });
    };
    CitasDataProvider.prototype.exists = function (cita) {
        return this.citas.filter(function (citas) { console.log(citas.Nid, 'vs', cita.Nid); return Number(citas.Nid) === Number(cita.Nid); }).length > 0;
    };
    CitasDataProvider.prototype.triggerSubject = function () {
        this.subject.next(this.citas);
    };
    CitasDataProvider.prototype.resetDateFilters = function () {
        this.startDateFilter = 0;
        this.endDateFilter = new Date().getTime() + (1000 * 60 * 60 * 24 * 365 * 5);
        this.pacienteFilter = null;
    };
    CitasDataProvider.prototype.applyFilters = function () {
        console.log('yaweyakiwe', this.startDateFilter, this.endDateFilter);
        this.citasShowPool = CitasDataProvider_1.filterByDates(this.citas, this.startDateFilter, this.endDateFilter);
        this.citasShowPool = this.applyUserTypeFilters(this.citasShowPool);
        //console.log('oyeme wey',JSON.stringify(this.citasShowPool));
        this.printShowPoolDatesRn();
        if (this.pacienteFilter !== null) {
            console.log('this.pacienteFilter', this.pacienteFilter);
            this.citasShowPool = CitasDataProvider_1.filterByPaciente(this.citasShowPool, this.pacienteFilter);
        }
        console.log('endfiltered citas', this.citas);
        console.log('endfilter showpool', this.citasShowPool);
    };
    CitasDataProvider.prototype.applyUserTypeFilters = function (citas) {
        var _this = this;
        console.log('applyUserTypeFilters filters is ', this.userStateFilter);
        return citas.filter(function (cita) { console.log('applyUserTypeFilters state is', cita.data.field_estado.und[0]['value']); var ret = _this.userStateFilter.indexOf(Number(cita.data.field_estado.und[0]['value'])) !== -1; console.log('applyUserTypeFilters ret', ret); return ret; });
    };
    CitasDataProvider.getStateColor = function (state) {
        var ret = '';
        switch (state) {
            case CitasDataProvider_1.STATE_PENDIENTE:
                ret = CitasDataProvider_1.STATE_PENDIENTE_COLOR;
                break;
            case CitasDataProvider_1.STATE_CONFIRMADA:
                ret = CitasDataProvider_1.STATE_CONFIRMADA_COLOR;
                break;
            case CitasDataProvider_1.STATE_ACTIVA:
                ret = CitasDataProvider_1.STATE_ACTIVA_COLOR;
                break;
            case CitasDataProvider_1.STATE_COBRO:
                ret = CitasDataProvider_1.STATE_COBRO_COLOR;
                break;
            case CitasDataProvider_1.STATE_FINALIZADA:
                ret = CitasDataProvider_1.STATE_FINALIZADA_COLOR;
                break;
            case CitasDataProvider_1.STATE_CANCELADA:
                ret = CitasDataProvider_1.STATE_CANCELADA_COLOR;
                break;
            case CitasDataProvider_1.STATE_ELIMINADA:
                ret = CitasDataProvider_1.STATE_ELIMINADA_COLOR;
                break;
            case CitasDataProvider_1.STATE_ADEUDO:
                ret = CitasDataProvider_1.STATE_ADEUDO_COLOR;
                break;
            default: ret = CitasDataProvider_1.STATE_FINALIZADA_COLOR;
        }
        return ret;
    };
    CitasDataProvider.getStateLabel = function (state) {
        var ret = '';
        switch (state) {
            case CitasDataProvider_1.STATE_PENDIENTE:
                ret = 'Pendiente';
                break;
            case CitasDataProvider_1.STATE_CONFIRMADA:
                ret = 'Confirmada';
                break;
            case CitasDataProvider_1.STATE_ACTIVA:
                ret = 'Activa';
                break;
            case CitasDataProvider_1.STATE_COBRO:
                ret = 'Sin Cobro';
                break;
            case CitasDataProvider_1.STATE_FINALIZADA:
                ret = 'Finalizada';
                break;
            case CitasDataProvider_1.STATE_CANCELADA:
                ret = 'Cancelada';
                break;
            case CitasDataProvider_1.STATE_ELIMINADA:
                ret = 'Eliminada';
                break;
            case CitasDataProvider_1.STATE_ADEUDO:
                ret = 'Adeudo';
                break;
            default: ret = 'Error';
        }
        return ret;
    };
    CitasDataProvider.getReceivers = function (cita) {
        return [cita.data.field_cita_doctor.und[0]];
    };
    CitasDataProvider.sortByDate = function (citas) {
        console.log('sortingtrail', citas);
        var sorted = citas.sort(function (a, b) {
            console.log('sortingtrail', a.dateMs, b.dateMs);
            if (a.dateMs > b.dateMs)
                return -1;
            if (a.dateMs < b.dateMs)
                return 1;
            return 0;
        });
        console.log('sortingtrail end', citas);
        return sorted;
    };
    CitasDataProvider.prototype.printShowPoolDatesRn = function () {
        console.log('showpool datemss', JSON.stringify(this.citasShowPool.map(function (citas) { return { "NID": citas.Nid, "DATE": citas.dateMs }; })));
    };
    CitasDataProvider.filterByDates = function (citas, startDate, endDate) {
        return citas.filter(function (citas) {
            return (citas.data.field_datemsb.und[0].value >= startDate && citas.data.field_datemsb.und[0].value <= endDate);
        });
    };
    CitasDataProvider.filterByPaciente = function (citas, pacienteName) {
        console.log('estos men');
        return citas.filter(function (citas) {
            console.log('filtering by paciente', pacienteName);
            console.log('paciente es', citas.paciente);
            return (citas.paciente.toLowerCase().includes(pacienteName.toLowerCase()));
        });
    };
    CitasDataProvider.sortByStateDate = function (citas) {
        return citas.sort(function (a, b) {
            /*console.log('sorging citas');
            console.log(CitasDataProvider.getValueOfStateSort(a.data.field_estado.und[0]['value']));
            console.log(CitasDataProvider.getValueOfStateSort(b.data.field_estado.und[0]['value']));*/
            if (CitasDataProvider_1.getValueOfStateSort(a.data.field_estado.und[0]['value']) > CitasDataProvider_1.getValueOfStateSort(b.data.field_estado.und[0]['value'])) {
                return 1;
            }
            if (CitasDataProvider_1.getValueOfStateSort(a.data.field_estado.und[0]['value']) < CitasDataProvider_1.getValueOfStateSort(b.data.field_estado.und[0]['value'])) {
                return -1;
            }
            if (CitasDataProvider_1.getValueOfStateSort(a.data.field_estado.und[0]['value']) === CitasDataProvider_1.getValueOfStateSort(b.data.field_estado.und[0]['value'])) {
                if (a.dateMs < b.dateMs)
                    return -1;
                if (a.dateMs > b.dateMs)
                    return 1;
                return 0;
            }
        });
    };
    CitasDataProvider.sortByStateDateDay = function (citas) {
        return citas.sort(function (a, b) {
            /*console.log('sorging citas by stateday');
            console.log(CitasDataProvider.getValueOfStateSort(a.data.field_estado.und[0]['value']));
            console.log(CitasDataProvider.getValueOfStateSort(b.data.field_estado.und[0]['value']));*/
            if (__WEBPACK_IMPORTED_MODULE_3__date_date__["a" /* DateProvider */].getStartEndOFDate(new Date(a.dateMs)).start.getTime() > __WEBPACK_IMPORTED_MODULE_3__date_date__["a" /* DateProvider */].getStartEndOFDate(new Date(b.dateMs)).start.getTime()) {
                //console.log('oyeme que');
                var aux_cita = new __WEBPACK_IMPORTED_MODULE_1__user_data_citas__["a" /* Citas */]();
                aux_cita.data.field_estado.und[0]['value'] = -1;
                aux_cita.dateMs = __WEBPACK_IMPORTED_MODULE_3__date_date__["a" /* DateProvider */].getStartEndOFDate(new Date(b.dateMs)).start.getTime();
                aux_cita.data.field_paciente.und[0].value = __WEBPACK_IMPORTED_MODULE_3__date_date__["a" /* DateProvider */].getStringDate(new Date(__WEBPACK_IMPORTED_MODULE_3__date_date__["a" /* DateProvider */].getStartEndOFDate(new Date(b.dateMs)).start.getTime()));
                citas.push(aux_cita);
                return 1;
            }
            if (__WEBPACK_IMPORTED_MODULE_3__date_date__["a" /* DateProvider */].getStartEndOFDate(new Date(a.dateMs)).start.getTime() < __WEBPACK_IMPORTED_MODULE_3__date_date__["a" /* DateProvider */].getStartEndOFDate(new Date(b.dateMs)).start.getTime()) {
                //console.log('oyeme que');
                var aux_cita = new __WEBPACK_IMPORTED_MODULE_1__user_data_citas__["a" /* Citas */]();
                aux_cita.data.field_estado.und[0]['value'] = -1;
                aux_cita.dateMs = __WEBPACK_IMPORTED_MODULE_3__date_date__["a" /* DateProvider */].getStartEndOFDate(new Date(b.dateMs)).start.getTime();
                aux_cita.data.field_paciente.und[0].value = __WEBPACK_IMPORTED_MODULE_3__date_date__["a" /* DateProvider */].getStringDate(new Date(__WEBPACK_IMPORTED_MODULE_3__date_date__["a" /* DateProvider */].getStartEndOFDate(new Date(b.dateMs)).start.getTime()));
                citas.push(aux_cita);
                return -1;
            }
            if (__WEBPACK_IMPORTED_MODULE_3__date_date__["a" /* DateProvider */].getStartEndOFDate(new Date(a.dateMs)).start.getTime() === __WEBPACK_IMPORTED_MODULE_3__date_date__["a" /* DateProvider */].getStartEndOFDate(new Date(b.dateMs)).start.getTime()) {
                if (CitasDataProvider_1.getValueOfStateSort(a.data.field_estado.und[0]['value']) > CitasDataProvider_1.getValueOfStateSort(b.data.field_estado.und[0]['value'])) {
                    return 1;
                }
                if (CitasDataProvider_1.getValueOfStateSort(a.data.field_estado.und[0]['value']) < CitasDataProvider_1.getValueOfStateSort(b.data.field_estado.und[0]['value'])) {
                    return -1;
                }
                if (CitasDataProvider_1.getValueOfStateSort(a.data.field_estado.und[0]['value']) === CitasDataProvider_1.getValueOfStateSort(b.data.field_estado.und[0]['value'])) {
                    if (a.dateMs < b.dateMs)
                        return -1;
                    if (a.dateMs > b.dateMs)
                        return 1;
                    return 0;
                }
            }
        });
    };
    CitasDataProvider.getValueOfStateSort = function (state) {
        var ret = 99;
        switch (Number(state)) {
            case this.STATE_PENDIENTE:
                ret = this.STATE_ORDER_PENDIENTE;
                break;
            case this.STATE_CONFIRMADA:
                ret = this.STATE_ORDER_CONFIRMADA;
                break;
            case this.STATE_ACTIVA:
                ret = this.STATE_ORDER_ACTIVA;
                break;
            case this.STATE_COBRO:
                ret = this.STATE_ORDER_COBRO;
                break;
            case this.STATE_FINALIZADA:
                ret = this.STATE_ORDER_FINALIZADA;
                break;
            case this.STATE_CANCELADA:
                ret = this.STATE_ORDER_CANCELADA;
                break;
            case this.STATE_ELIMINADA:
                ret = this.STATE_ORDER_ELIMINADA;
                break;
            default: ret = 99;
        }
        return ret;
    };
    CitasDataProvider.sortFilterByCloserNow = function (citas) {
        console.log('citas to sortfilter', citas);
        citas = CitasDataProvider_1.filterPassedCitas(citas);
        return citas.sort(function (a, b) {
            if (a.dateMs < b.dateMs)
                return -1;
            if (a.dateMs > b.dateMs)
                return 1;
            return 0;
        });
    };
    CitasDataProvider.filterPassedCitas = function (citas) {
        var nowMs = new Date().getTime();
        return citas.filter(function (aux_citas) { console.log('filtering cita ', aux_citas.dateMs, nowMs); return aux_citas.dateMs > nowMs; }); //filter citas that are coming, not the ones that have passed already
    };
    CitasDataProvider.moneyFormat = function (money) {
        money = Number(money);
        //console.log('stringnumber money is',money);
        var ret = '';
        var stringnumber = money.toFixed(2).split("");
        //console.log('stringnumber a',stringnumber);
        stringnumber = stringnumber.reverse();
        //console.log('stringnumber b',stringnumber);
        var pointfound = 0;
        var counter = 0;
        var addition = '';
        for (var i = 0; i < stringnumber.length; i++) {
            if (stringnumber[i] === '.') {
                counter = 0;
                ret += stringnumber[i];
                pointfound = 1;
            }
            else {
                counter++;
                ret += addition + stringnumber[i];
                addition = '';
                if (counter === 3) {
                    //ret += ',';
                    addition = ',';
                    counter = 0;
                }
            }
        }
        //console.log('stringnumber ret',ret);
        stringnumber = ret.split("").reverse();
        //console.log('stringnumber c',stringnumber);
        ret = '$' + stringnumber.join('');
        //console.log('stringnumber ret b',ret);
        if (pointfound === 0) {
            ret += '.00';
        }
        //console.log('stringnumber end---------------');
        return ret;
    };
    //estados de cita:
    CitasDataProvider.STATE_PENDIENTE = 0;
    CitasDataProvider.STATE_CONFIRMADA = 1;
    CitasDataProvider.STATE_ACTIVA = 2;
    CitasDataProvider.STATE_COBRO = 3;
    CitasDataProvider.STATE_FINALIZADA = 4;
    CitasDataProvider.STATE_CANCELADA = 5;
    CitasDataProvider.STATE_ELIMINADA = 6;
    CitasDataProvider.STATE_ADEUDO = 7;
    CitasDataProvider.STATE_ORDER_ACTIVA = 1;
    CitasDataProvider.STATE_ORDER_CONFIRMADA = 2;
    CitasDataProvider.STATE_ORDER_COBRO = 3;
    CitasDataProvider.STATE_ORDER_ADEUDO = 4;
    CitasDataProvider.STATE_ORDER_PENDIENTE = 5;
    CitasDataProvider.STATE_ORDER_FINALIZADA = 6;
    CitasDataProvider.STATE_ORDER_CANCELADA = 7;
    CitasDataProvider.STATE_ORDER_ELIMINADA = 8;
    CitasDataProvider.STATE_PENDIENTE_COLOR = '#6ddeba';
    CitasDataProvider.STATE_CONFIRMADA_COLOR = '#50A3C7';
    CitasDataProvider.STATE_ACTIVA_COLOR = '#94BA3A';
    CitasDataProvider.STATE_COBRO_COLOR = '#C1272D';
    CitasDataProvider.STATE_FINALIZADA_COLOR = '#909090';
    CitasDataProvider.STATE_CANCELADA_COLOR = '#800005';
    CitasDataProvider.STATE_ELIMINADA_COLOR = '#800005';
    CitasDataProvider.STATE_ADEUDO_COLOR = '#C1272D';
    CitasDataProvider.SERVICIO_CORTESIA_NID = "1647";
    CitasDataProvider = CitasDataProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CitasDataProvider);
    return CitasDataProvider;
    var CitasDataProvider_1;
}());

//# sourceMappingURL=citas-data.js.map

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/citas/citas.module": [
		622,
		26
	],
	"../pages/entergrupo/entergrupo.module": [
		629,
		25
	],
	"../pages/facturacion/facturacion.module": [
		630,
		1
	],
	"../pages/group/group.module": [
		610,
		24
	],
	"../pages/home/home.module": [
		611,
		23
	],
	"../pages/list/list.module": [
		612,
		22
	],
	"../pages/login/login.module": [
		613,
		21
	],
	"../pages/miplan/miplan.module": [
		634,
		20
	],
	"../pages/notification-pop/notification-pop.module": [
		614,
		19
	],
	"../pages/nuevacita-modal/nuevacita-modal.module": [
		633,
		18
	],
	"../pages/nuevoreporte-modal/nuevoreporte-modal.module": [
		616,
		17
	],
	"../pages/nuevoservicio-modal/nuevoservicio-modal.module": [
		615,
		16
	],
	"../pages/nuevousuario-modal/nuevousuario-modal.module": [
		636,
		15
	],
	"../pages/progresocita-modal/progresocita-modal.module": [
		631,
		14
	],
	"../pages/recover-modal/recover-modal.module": [
		617,
		13
	],
	"../pages/register-modal/register-modal.module": [
		635,
		0
	],
	"../pages/reporte-generate/reporte-generate.module": [
		618,
		12
	],
	"../pages/reporte-modal/reporte-modal.module": [
		619,
		11
	],
	"../pages/reporte-ticket/reporte-ticket.module": [
		623,
		10
	],
	"../pages/reporte/reporte.module": [
		620,
		9
	],
	"../pages/reportegrupal/reportegrupal.module": [
		621,
		8
	],
	"../pages/reportes/reportes.module": [
		626,
		7
	],
	"../pages/servicios/servicios.module": [
		625,
		6
	],
	"../pages/soon/soon.module": [
		624,
		5
	],
	"../pages/terminosycondiciones/terminosycondiciones.module": [
		627,
		4
	],
	"../pages/usuarios/usuarios.module": [
		632,
		3
	],
	"../pages/welcome-modal/welcome-modal.module": [
		628,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 223;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reportes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__debugger__ = __webpack_require__(40);

var reportes = /** @class */ (function () {
    function reportes() {
        this.nid = 0;
        this.author_uid = 0;
        this.cajas = new Array();
        this.doctores = new Array();
        this.recepciones = new Array();
        this.dialy = true; //si es un reporte diario autogenerado
        this.citas = new Array();
        this.servicios = new Array();
        this.dateStartUTMS = 0;
        this.dateEndUTMS = 0;
        this.nocancel = 0;
    }
    Object.defineProperty(reportes.prototype, "doctoresFilter", {
        get: function () { return this.doctores; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(reportes.prototype, "cajaFilter", {
        get: function () { return this.cajas; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(reportes.prototype, "recepcionFilter", {
        get: function () { return this.recepciones; },
        enumerable: true,
        configurable: true
    });
    reportes.prototype.setData = function (input_data) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log(["input_data en reportes", input_data]);
        this.nid = input_data['nid'];
        if (!this.nid)
            this.nid = input_data['Nid'];
        this.doctores = new Array();
        input_data['field_doctores'].forEach(function (elm) {
            _this.doctores.push(elm['uid']);
        });
        input_data['field_cajas'].forEach(function (elm) {
            _this.cajas.push(elm['uid']);
        });
        input_data['field_recepciones'].forEach(function (elm) {
            _this.recepciones.push(elm['uid']);
        });
        this.dateStartUTMS = 0;
        this.dateEndUTMS = 0;
        if (input_data['field_datestartutmb']) {
            console.log('inputdata putting', input_data['field_datestartutmb']);
            this.dateStartUTMS = Number(input_data['field_datestartutmb'].value);
            __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log(['setted datestart', this.dateStartUTMS]);
            this.date = new Date(this.dateStartUTMS);
            __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log([this.date]);
            this.dateString = this.date.getDate() + "/" + (this.date.getMonth() + 1) + "/" + this.date.getFullYear();
        }
        this.nocancel = input_data['field_nocancel'] ? input_data['field_nocancel'] : 0;
        if (isNaN(this.nocancel)) {
            this.nocancel = 0;
        }
        console.log('setdatanocancel', this.nocancel, input_data['field_nocancel']);
        if (input_data['field_dateendutmb']) {
            this.dateEndUTMS = Number(input_data['field_dateendutmb'].value);
        }
        this.author_uid = input_data['uid'];
        this.dialy = input_data['field_dialy']['value'];
        // this.getNowDatesUT();
        //cargarCitas
        __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log(["gathered dataModel", this]);
    };
    reportes.prototype.getData = function () {
        var ret = null;
        if (this.nid !== null) {
            __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log(['getinf existing report data']);
            ret = {
                Nid: this.nid,
                type: "reportes",
                /*field_datefrom:{und:[{value:{date:this.datefrom_date,time:this.datefrom_time}}]},
                field_dateto:{und:[{value:{date:this.dateTo_date,time:this.dateTo_time}}]},*/
                field_doctores: { und: [] },
                field_cajas: { und: [] },
                field_recepciones: { und: [] },
                field_dialy: { und: [{ value: this.dialy === true ? 1 : 0 }] },
                field_datestartutmb: { und: [{ value: this.dateStartUTMS }] },
                field_dateendutmb: { und: [{ value: this.dateEndUTMS }] },
                field_nocancel: { und: [{ value: this.nocancel }] },
            };
            if (this.doctores.length > 0) {
                this.doctores.forEach(function (element) {
                    ret.field_doctores.und.push(element);
                });
            }
            if (this.recepciones.length > 0) {
                this.recepciones.forEach(function (element) {
                    ret.field_recepciones.und.push(element);
                });
            }
            if (this.cajas.length > 0) {
                this.cajas.forEach(function (element) {
                    ret.field_cajas.und.push(element);
                });
            }
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log(['geting non existing in db report data']);
            ret = {
                type: "reportes",
                /*field_datefrom:{und:[{value:[{date:this.datefrom_date},{time:this.datefrom_time}]}]},
                field_dateto:{und:[{value:[{date:this.datefrom_date},{time:this.datefrom_time}]}]}, */
                field_doctores: { und: [] },
                field_cajas: { und: [] },
                field_recepciones: { und: [] },
                field_dialy: { und: [{ value: this.dialy === true ? 1 : 0 }] },
                field_datestartutmb: { und: [{ value: this.dateStartUTMS }] },
                field_dateendutmb: { und: [{ value: this.dateEndUTMS }] },
                field_nocancel: { und: [{ value: this.nocancel }] },
            };
            if (this.doctores.length > 0) {
                this.doctores.forEach(function (element) {
                    ret.field_doctores.und.push(element);
                });
            }
            if (this.recepciones.length > 0) {
                this.recepciones.forEach(function (element) {
                    ret.field_recepciones.und.push(element);
                });
            }
            if (this.cajas.length > 0) {
                this.cajas.forEach(function (element) {
                    ret.field_cajas.und.push(element);
                });
            }
        }
        __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log(['reporte getData', ret]);
        return ret;
    };
    reportes.prototype.cargarCitas = function () {
        __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log(["cargar Citas not implemented"]);
    };
    return reportes;
}());

//# sourceMappingURL=reportes.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteCitasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_data_citas__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__citas_manager_citas_manager__ = __webpack_require__(47);
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



/*
  Generated class for the ReporteCitasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ReporteCitasProvider = /** @class */ (function () {
    function ReporteCitasProvider(citasManager) {
        this.citasManager = citasManager;
    }
    ReporteCitasProvider.prototype.reporteLoadCitas = function (report, doctorUid) {
        if (doctorUid === void 0) { doctorUid = null; }
        return __awaiter(this, void 0, void 0, function () {
            var aux_citas, obs, citas_data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        aux_citas = new Array();
                        obs = this.reporteGetCitasObservable(report, doctorUid);
                        return [4 /*yield*/, obs.toPromise()];
                    case 1:
                        citas_data = _a.sent();
                        console.log('reporteLoadCitas obtained data', citas_data);
                        report.citas = this.generateCitasFromdata(citas_data);
                        return [2 /*return*/];
                }
            });
        });
    };
    ReporteCitasProvider.prototype.reporteGetCitasObservable = function (report, doctorUid) {
        if (doctorUid === void 0) { doctorUid = null; }
        console.log('reporteGetCitasObservable', report, doctorUid);
        console.log(report.dateStartUTMS);
        console.log(report.dateEndUTMS);
        console.log(report.doctoresFilter);
        console.log('reportcajafilter', report.cajaFilter);
        console.log(report.recepcionFilter);
        if (doctorUid)
            return this.citasManager.getCitasObservableReport(report.dateStartUTMS, report.dateEndUTMS, [doctorUid], report.cajaFilter, report.recepcionFilter);
        else
            return this.citasManager.getCitasObservableReport(report.dateStartUTMS, report.dateEndUTMS, report.doctoresFilter, report.cajaFilter, report.recepcionFilter);
    };
    ReporteCitasProvider.prototype.generateCitasFromdata = function (citas_data) {
        console.log('trailstartnull generating cita from data', citas_data);
        var aux_citalit = new Array();
        var _loop_1 = function (cita) {
            var aux_cita = new __WEBPACK_IMPORTED_MODULE_1__user_data_citas__["a" /* Citas */]();
            aux_cita.setData(cita);
            var exists = aux_citalit.find(function (citax) { return Number(citax.Nid) === Number(cita.Nid); });
            if (!exists) {
                aux_citalit.push(aux_cita);
            }
            else {
                console.log('blocked report cita', cita);
            }
        };
        for (var _i = 0, citas_data_1 = citas_data; _i < citas_data_1.length; _i++) {
            var cita = citas_data_1[_i];
            _loop_1(cita);
        }
        return aux_citalit;
    };
    ReporteCitasProvider.prototype.checkForCitaUpdate = function (report, cita) {
        var exists = report.citas.filter(function (citas) { return Number(citas.Nid) === Number(cita.Nid); });
        if (exists.length > 0) {
            exists[0].data = cita.data;
            console.log('processDatay checkForCitaUpdate');
            exists[0].processData();
        }
    };
    ReporteCitasProvider.prototype.reporteLoadCitasGrupales = function (report, doctorUids) {
        if (doctorUids === void 0) { doctorUids = null; }
        return __awaiter(this, void 0, void 0, function () {
            var aux_citas, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        aux_citas = new Array();
                        console.log('docuids', doctorUids);
                        return [4 /*yield*/, this.citasManager.getCitasObservableReport(report.dateStartUTMS, report.dateEndUTMS, doctorUids, report.cajaFilter, report.recepcionFilter).toPromise()];
                    case 1:
                        res = _a.sent();
                        console.log('resgot is', res);
                        report.citas = this.generateCitasFromdata(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    ReporteCitasProvider.prototype.reporteLoadCitasAdeudo = function (report, doctorUids) {
        if (doctorUids === void 0) { doctorUids = null; }
        return __awaiter(this, void 0, void 0, function () {
            var aux_citas, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        aux_citas = new Array();
                        console.log('reportadeudotrail reporteLoadCitasAdeudo', report);
                        console.log('docuids', doctorUids);
                        return [4 /*yield*/, this.citasManager.getCitasObservableAdeudos(doctorUids, report.cajaFilter, report.recepcionFilter).toPromise()];
                    case 1:
                        res = _a.sent();
                        console.log('resgot adeudo is', res);
                        report.citas = this.generateCitasFromdata(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    ReporteCitasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__citas_manager_citas_manager__["a" /* CitasManagerProvider */]])
    ], ReporteCitasProvider);
    return ReporteCitasProvider;
}());

//# sourceMappingURL=reporte-citas.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctoresDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DoctoresDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DoctoresDataProvider = /** @class */ (function () {
    function DoctoresDataProvider() {
        this.docIdsToLoad = new Array();
        this.doctores = new Array;
        this.doctoresSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        console.log('doctoresdata');
        console.log(this.doctores);
    }
    Object.defineProperty(DoctoresDataProvider.prototype, "doctoresIDs", {
        get: function () {
            var ret = new Array();
            ret.push(0);
            console.log(this.doctores);
            if (this.doctores && this.doctores.length !== 0) {
                ret = new Array();
                for (var _i = 0, _a = this.doctores; _i < _a.length; _i++) {
                    var doc = _a[_i];
                    ret.push(doc.Uid);
                }
            }
            return ret;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctoresDataProvider.prototype, "subject", {
        get: function () { return this.doctoresSubject; },
        enumerable: true,
        configurable: true
    });
    DoctoresDataProvider.prototype.addDoctor = function (doc, call) {
        if (call === void 0) { call = true; }
        if (!this.exists(doc))
            this.doctores.push(doc);
        if (call)
            this.subject.next(this.doctores);
        console.log('added doctor', doc, this.doctores);
    };
    DoctoresDataProvider.prototype.removeDoctor = function (doc, call) {
        if (call === void 0) { call = true; }
        //delete this.citas[cita.Nid];
        this.doctores = this.doctores.filter(function (doctores) { return doctores.Uid !== doc.Uid; });
        if (call)
            this.subject.next(this.doctores);
        console.log('removed doctor', doc, this.doctores);
    };
    DoctoresDataProvider.prototype.cleanDoctor = function () {
        console.log("UNIDO Y DIFERENTE", JSON.stringify(this.doctores));
        this.doctores = new Array();
    };
    DoctoresDataProvider.prototype.exists = function (doc) {
        return this.doctores.filter(function (docs) { return Number(docs.Uid) === Number(doc.Uid); }).length > 0;
    };
    DoctoresDataProvider.prototype.existsByUid = function (uid) {
        return this.doctores.filter(function (docs) { return Number(docs.Uid) === Number(uid); }).length > 0;
    };
    DoctoresDataProvider.isDoctorBusy = function (doc) {
        return doc.citaActiva !== null;
    };
    DoctoresDataProvider.setDoctorBusy = function (doc, cita) {
        doc.citaActiva = cita;
    };
    DoctoresDataProvider.setDoctorUnbusy = function (doc) {
        doc.citaActiva = null;
    };
    DoctoresDataProvider.prototype.addDoctorToIdList = function (uid) {
        var exists = this.docIdsToLoad.find(function (docs) { return Number(docs) === Number(uid); });
        if (!exists) {
            console.log('new group doctor', uid);
            this.docIdsToLoad.push(uid);
        }
    };
    DoctoresDataProvider.prototype.getDoctorByUid = function (uid) {
        var ret = null;
        var exists = this.doctores.filter(function (docs) { return Number(docs.Uid) === Number(uid); });
        if (exists.length > 0)
            ret = exists[0];
        return ret;
        /*this.doctores.forEach(element => {
          console.log("comparing uid", Number(element.Uid)+"==="+Number(uid));
          if(Number(element.Uid) === Number(uid) ) {
            ret = element;
          }
        });
        console.log(ret);
        return ret;*/
    };
    DoctoresDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DoctoresDataProvider);
    return DoctoresDataProvider;
}());

//# sourceMappingURL=doctores-data.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteServiciosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_manager_servicios_manager__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReporteServiciosProvider = /** @class */ (function () {
    function ReporteServiciosProvider(servManager) {
        this.servManager = servManager;
    }
    ReporteServiciosProvider.prototype.reporteLoadServicios = function (report) {
    };
    ReporteServiciosProvider.prototype.getServiciosResume = function (report) {
        console.log('trailtime getServiciosResume');
        var ret = new Array();
        console.log('loading report');
        for (var _i = 0, _a = report.citas; _i < _a.length; _i++) {
            var cita = _a[_i];
            cita.testOriginactivereport(Number(report.dateStartUTMS), Number(report.dateEndUTMS));
            // console.log('added services',cita.reporteServicios);
            if (cita.originactivereport) {
                var _loop_1 = function (servicio) {
                    console.log('checking serv', servicio);
                    var found = ret.find(function (servicios) {
                        return Number(servicios.nid) === Number(servicio.Nid);
                    });
                    console.log('servicio found is', found);
                    if (found) {
                        found.times++;
                        found.costo += Number(servicio.costo);
                    }
                    else {
                        var aux_servresume = {
                            nid: Number(servicio.Nid),
                            title: servicio.title,
                            costo: Number(servicio.costo),
                            times: 1,
                            doc: cita.doctor_name,
                            order: servicio.order
                        };
                        ret.push(aux_servresume);
                    }
                };
                for (var _b = 0, _c = cita.reporteServicios; _b < _c.length; _b++) {
                    var servicio = _c[_b];
                    _loop_1(servicio);
                }
            }
        }
        console.log('returnting servresumen', ret);
        return __WEBPACK_IMPORTED_MODULE_1__servicios_manager_servicios_manager__["a" /* ServiciosManagerProvider */].staticDefaultSort(ret);
        //return ret;
        /*return ret.sort((a,b)=>{
          if(a.order < b.order){return 1;}
          if(a.order > b.order){return -1;}
          if(a.order === b.order){
            if (a.title < b.title)
            return -1;
          if (a.title > b.title)
            return 1;
         return 0;
          }
        });*/
    };
    ReporteServiciosProvider.prototype.reporteGetServiciosObservable = function (report) {
    };
    ReporteServiciosProvider.prototype.generateServiciosFromdata = function (servicio_data) {
    };
    ReporteServiciosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_manager_servicios_manager__["a" /* ServiciosManagerProvider */]])
    ], ReporteServiciosProvider);
    return ReporteServiciosProvider;
}());

//# sourceMappingURL=reporte-servicios.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Doctores; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debugger__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__citas_data_citas_data__ = __webpack_require__(22);



var Doctores = /** @class */ (function () {
    function Doctores() {
        this.Uid = null;
        this.citasPendientes = new Array();
        this.citaActiva = null; //cita activa
        this.nextCita = null; //cita activa
        this.servicios = new Array();
        this.name = '';
        this.field_alias = '';
        this.playerID = '';
        this.showDate = null;
        this.field_disponibilidad = new Array();
        this.citas = new Array();
    }
    Doctores.prototype.setCitaActiva = function (cita) {
        var ret = false;
        if (!this.citaActiva) {
            this.citaActiva = cita;
            ret = true;
        }
        return ret;
    };
    Doctores.prototype.setServicios = function (input_servicios) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(["setting servicios on doctor " + this.Uid]);
        var ret = true;
        //let aux_serv_arr = new Array();
        input_servicios.forEach(function (serv) {
            __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(["iterating service", serv]);
            if (_this.servicios.indexOf(serv) === -1 && Number(serv.Uid) === Number(_this.Uid)) {
                _this.servicios.push(serv);
                __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(["servicio nuevo agregado a doc " + _this.Uid, serv]);
            }
        });
        return ret;
    };
    Doctores.prototype.removeServicioFromLists = function (servicio) {
        var index = this.servicios.indexOf(servicio);
        if (index !== -1)
            this.servicios.splice(index, 1);
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(["removing servicio " + servicio.Nid + " from list", this.servicios]);
    };
    Doctores.prototype.removeCitaFromLists = function (cita) {
        var ArrOfArrs = [
            this.citas,
        ];
        ArrOfArrs.forEach(function (arr) {
            __WEBPACK_IMPORTED_MODULE_0__user_data__["a" /* UserDataProvider */].removeElementFromArray(cita, arr);
        });
        if (this.citaActiva && Number(this.citaActiva.Nid) === Number(cita.Nid)) {
            this.citaActiva = null;
        }
    };
    Doctores.prototype.setDisponibilidad = function (field_disp) {
        console.log("setting doc disp", field_disp);
    };
    //Actualizar citas desde afuera introduciendo los resultados de la busqueda de todas las citas.
    /**
     * Actualizar las citas para este doctor, citas_input es un listado del filtrado de todas las citas, este metodo filtra las citas que son
     * para este doctor asi que no es necesario preocuparse por filtrarlas para este doctor en especifico.
     *
     * este metodo obtiene:
     *     cita proxima
     *     cita activa
     *     citas pendientes
     *     citas por cobrar
     *     citas para hoy
     *     citas pendientes
     *     todas las citas
     * **/
    Doctores.prototype.setCitas = function (citas_input) {
        var _this = this;
        console.log("----------------------------------empezar cita " + citas_input);
        this.citas = new Array();
        var aux_citasparahoy = 0;
        var aux_nextCita = null;
        var smallestUntilMs = null;
        citas_input.forEach(function (cita) {
            if (Number(cita.data.field_cita_doctor.und[0]) === Number(_this.Uid)) {
                //console.log("encontro cita propia");
                _this.citas.push(cita);
                cita.getUntilMs();
                if (cita.checkState(__WEBPACK_IMPORTED_MODULE_2__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_PENDIENTE) || cita.checkState(__WEBPACK_IMPORTED_MODULE_2__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_CONFIRMADA)) {
                    aux_citasparahoy++;
                    if (cita.untilMs < 0) {
                        cita.retrasada = true;
                    } //si se paso la fecha ponerla como retrasada. es decir si el numero es negativo, menor a 0
                    else if (smallestUntilMs === null || cita.untilMs < smallestUntilMs) {
                        //si no hay mas pequeño    O  si la cita es mas pequeño
                        aux_nextCita = cita; //esta cita es la mas cercana
                        smallestUntilMs = cita.untilMs;
                    }
                }
                if (cita.checkState(__WEBPACK_IMPORTED_MODULE_2__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_ACTIVA)) {
                    console.log("cita activa.", _this.citaActiva);
                    if (!_this.citaActiva) {
                        console.log("agregando cita");
                        _this.citaActiva = cita;
                        console.log("cita activa agregada", _this.citaActiva);
                    }
                    else {
                        /* if(! ( Number(this.citaActiva.Nid) === Number(cita.Nid) ) ){
                         cita.data.field_estado.und[0].value = UserDataProvider.STATE_PENDIENTE;
                         }*/
                    }
                }
            }
            _this.nextCita = aux_nextCita;
        });
        console.log("doctor got itself:", this);
    };
    Doctores.prototype.checkUid = function (Uid) {
        var ret = false;
        if (Number(this.Uid) === Number(Uid)) {
            ret = true;
        }
        return ret;
    };
    return Doctores;
}());

//# sourceMappingURL=doctores.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redbg_redbg__ = __webpack_require__(476);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__redbg_redbg__["a" /* RedbgDirective */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__redbg_redbg__["a" /* RedbgDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseUrlProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the BaseUrlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BaseUrlProvider = /** @class */ (function () {
    function BaseUrlProvider() {
        this.protocol = 'https://';
        //hostname:string = 'vmi118470.contaboserver.net/~drapp/';
        //hostname:string = '18.191.210.253/';
        //hostname:string = 'ec2-18-191-210-253.us-east-2.compute.amazonaws.com/';
        this.hostname = 'www.drap.com.mx/';
        //websocketUrl:string = 'ws://vagapp.mx:8081/';
        //websocketUrl:string = 'ws://www.drap.com.mx:8081/';
        this.websocketUrl = 'wss://www.drap.com.mx:8443/';
    }
    Object.defineProperty(BaseUrlProvider.prototype, "baseUrl", {
        get: function () { return "" + this.protocol + this.hostname; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseUrlProvider.prototype, "backendUrl", {
        get: function () { return this.baseUrl + "backenddev/"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseUrlProvider.prototype, "endpointUrl", {
        get: function () { return this.backendUrl + "appoint/"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseUrlProvider.prototype, "HomeUrl", {
        get: function () { return window.location.href.replace(/[\?#].*|$/, "#/home"); },
        enumerable: true,
        configurable: true
    });
    BaseUrlProvider.prototype.locationReload = function () {
        window.location.href = this.HomeUrl;
        window.location.reload();
    };
    BaseUrlProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BaseUrlProvider);
    return BaseUrlProvider;
}());

//# sourceMappingURL=base-url.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the SubscriptionDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SubscriptionDataProvider = /** @class */ (function () {
    function SubscriptionDataProvider() {
        this.subscription = null;
        this.Groups = new Array();
        this.nid = null; //nid de la subscripcion
        this.uid = null; //uid del doctor
        this.plan = null; //objeto de plan completo
        this.field_plan_sus = null; //nid del plan
        this.field_subusuarios = null; //array of sub acound uids
        this.field_active = false;
        this.docs = new Array();
    }
    SubscriptionDataProvider_1 = SubscriptionDataProvider;
    Object.defineProperty(SubscriptionDataProvider.prototype, "isGroup", {
        get: function () {
            return this.isGroupPlan();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubscriptionDataProvider.prototype, "PLAN_GROUP", {
        get: function () { return SubscriptionDataProvider_1.PLAN_GROUP; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubscriptionDataProvider.prototype, "PLAN_ANY", {
        get: function () { return SubscriptionDataProvider_1.PLAN_ANY; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubscriptionDataProvider.prototype, "EXTRA_SUB", {
        get: function () { return SubscriptionDataProvider_1.EXTRA_SUB; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubscriptionDataProvider.prototype, "EXTRA_DOC", {
        get: function () { return SubscriptionDataProvider_1.EXTRA_DOC; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubscriptionDataProvider.prototype, "isactive", {
        get: function () { var ret = 0; if (this.checkForPlan()) {
            ret = this.subscription.field_active;
        } return ret; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubscriptionDataProvider.prototype, "invcode", {
        get: function () { var ret = ''; if (this.checkForSub()) {
            ret = this.subscription.field_invitation_code;
        } return ret; },
        enumerable: true,
        configurable: true
    });
    SubscriptionDataProvider.prototype.setDoctores = function () {
        this.docs = JSON.parse(this.subscription.field_doctores_json);
    };
    /**
     * ESTOS METODOS SON PARA OBTENER NUMEROS DE SUB DOCTORES EN LA SUSCRIPCION Y CALCULAR CUANTOS QUEDAN DISPONIBLES ETC.
     */
    SubscriptionDataProvider.prototype.getDocAccountsTotal = function () {
        var ret = Number(0);
        if (this.checkForPlan()) {
            ret += Number(this.subscription.plan.field_no_doctores);
            ret += Number(this.subscription.field_docsadicionales);
        }
        return ret;
    };
    SubscriptionDataProvider.prototype.getplanDocAccounts = function () {
        var ret = Number(0);
        if (this.checkForPlan()) {
            ret += Number(this.subscription.plan.field_no_doctores);
        }
        return ret;
    };
    SubscriptionDataProvider.prototype.getUsedDocAccounts = function () {
        var ret = Number(0);
        if (this.checkForSub()) {
            ret = Number(this.subscription.field_doctores.length);
        }
        return ret;
    };
    /**
     * ESTOS METODOS SON PARA OBTENER NUMEROS DE SUB USUARIOS EN LA SUSCRIPCION Y CALCULAR CUANTOS QUEDAN DISPONIBLES ETC.
     */
    SubscriptionDataProvider.prototype.getSubAccountsTotal = function () {
        var ret = Number(0);
        if (this.checkForPlan()) {
            ret += Number(this.subscription.plan.field_no_subcuentas);
            ret += Number(this.subscription.field_adicionales);
            //console.log('adicionales en la sus',this.subscription.field_adicionales,this.subscription.plan.field_no_subcuentas);
        }
        //console.log('total subacounts',ret);
        return ret;
    };
    SubscriptionDataProvider.prototype.getplanAccounts = function () {
        var ret = Number(0);
        if (this.checkForPlan()) {
            ret += Number(this.subscription.plan.field_no_subcuentas);
        }
        return ret;
    };
    SubscriptionDataProvider.prototype.getUsedSubAccounts = function () {
        var ret = Number(0);
        if (this.checkForSub()) {
            ret = Number(this.subscription.field_subusuarios.length);
            //console.log('field subusuarios en este sub', this.subscription.field_subusuarios);
        }
        //console.log('total used subacounts',ret);
        return ret;
    };
    SubscriptionDataProvider.prototype.getSubAccountsLeft = function () {
        //console.log('getSubAccountsLeft',this.getSubAccountsTotal(),this.getUsedSubAccounts());
        var ret = 0;
        if (this.checkForPlan()) {
            ret = this.getSubAccountsTotal() - this.getUsedSubAccounts();
        }
        return ret;
    };
    SubscriptionDataProvider.prototype.isGroupPlan = function () {
        //console.log('SubscriptionDataProvider isGroupPlan');
        /*console.log('check ig is fucking group plan so dis not a doctor so he no subscription damn?');
         console.log(this.subscription);
         console.log(this.subscription.field_plan_sus);*/
        if (this.subscription && this.subscription.field_plan_sus)
            return Number(this.subscription.field_plan_sus) === Number(SubscriptionDataProvider_1.PLAN_GROUP);
        return false;
    };
    SubscriptionDataProvider.prototype.getSubusersIDs = function () {
        var ret = new Array();
        if (this.subscription)
            ret = this.subscription.field_subusuarios;
        console.log('getting subusers ids', ret);
        return ret;
    };
    SubscriptionDataProvider.prototype.checkForSub = function () {
        var ret = false;
        if (this.subscription) {
            ret = true;
        }
        return ret;
    };
    SubscriptionDataProvider.prototype.checkForPlan = function () {
        var ret = false;
        if (this.checkForSub() && this.subscription.plan) {
            ret = true;
        }
        return ret;
    };
    SubscriptionDataProvider.PLAN_BASIC = 33;
    SubscriptionDataProvider.PLAN_GROUP = 1205;
    SubscriptionDataProvider.PLAN_ANY = -1;
    SubscriptionDataProvider.EXTRA_SUB = 40;
    SubscriptionDataProvider.EXTRA_DOC = 169;
    SubscriptionDataProvider = SubscriptionDataProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SubscriptionDataProvider);
    return SubscriptionDataProvider;
    var SubscriptionDataProvider_1;
}());

//# sourceMappingURL=subscription-data.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subscription_data_subscription_data__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data_debugger__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PermissionsProvider = /** @class */ (function () {
    function PermissionsProvider(userData, subsData) {
        this.userData = userData;
        this.subsData = subsData;
        this.checkPlan = false;
    }
    Object.defineProperty(PermissionsProvider.prototype, "PLAN_GROUP", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_2__subscription_data_subscription_data__["a" /* SubscriptionDataProvider */].PLAN_GROUP; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionsProvider.prototype, "PLAN_BASIC", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_2__subscription_data_subscription_data__["a" /* SubscriptionDataProvider */].PLAN_BASIC; },
        enumerable: true,
        configurable: true
    });
    /**
    * CheckUserFeature resolves if a feature should appear for this user giving the user roles (permision) and the user plan suscriptions (suscriptions)
    * and has been created to simplify the check on features that requiere both.
    */
    PermissionsProvider.prototype.checkUserFeature = function (permision, suscriptions, debug) {
        if (debug === void 0) { debug = false; }
        __WEBPACK_IMPORTED_MODULE_3__providers_user_data_debugger__["a" /* Debugger */].log(['permision', permision, 'suscriptions', suscriptions], debug);
        var ret = false;
        var permisioncheck = false;
        var suscriptionscheck = false;
        if (permision === null || permision === undefined || permision.length === 0) {
            permisioncheck = true;
        }
        else {
            permisioncheck = this.checkUserPermission(permision, debug);
        }
        if (suscriptions === null || suscriptions === undefined || suscriptions.length === 0) {
            suscriptionscheck = true;
        }
        else {
            suscriptionscheck = this.checkUserSuscription(suscriptions, debug);
        }
        if (permisioncheck && suscriptionscheck) {
            ret = true;
        }
        return ret;
    };
    PermissionsProvider.prototype.checkUserPermission = function (permision, debug) {
        if (debug === void 0) { debug = false; }
        var ret = false;
        //checking for ANY
        if (permision.indexOf(__WEBPACK_IMPORTED_MODULE_1__user_data_user_data__["a" /* UserDataProvider */].TIPO_ANY) > -1 && this.userData.userData.field_tipo_de_usuario.und.length > 0) {
            return true;
        }
        //regular check
        for (var i = 0; i < this.userData.userData.field_tipo_de_usuario.und.length; i++) {
            if (permision.indexOf(parseInt(this.userData.userData.field_tipo_de_usuario.und[i].value)) > -1) {
                ret = true;
                break;
            }
        }
        return ret;
    };
    /**
     * la suscripcion debe resultar false si:
     * el usuario no tiene guardado un id de suscripcion en su data, o esta es 0
     * la suscripcion que carga el usuario esta inactiva.
    */
    PermissionsProvider.prototype.checkUserSuscription2 = function (suscriptions, debug) {
        if (debug === void 0) { debug = false; }
        var ret = false;
        //si la subscripcion no esta activa (expiro, no ha sido pagada etc) retorna false
        //if(Number(this.userData.field_sub_id.und[0]) === Number(0) || this.subscription === null){return false;}
        if (!this.checkUserPermission([__WEBPACK_IMPORTED_MODULE_1__user_data_user_data__["a" /* UserDataProvider */].TIPO_DOCTOR])) {
            return true;
        } //now subusers dont get to check on subscription
        if (this.subsData.subscription === null) {
            return false;
        }
        if (Number(this.subsData.subscription.field_active) === Number(0)) {
            return false;
        } //if not active returns false also
        // checking for ANY, automatically returns true since we checked for not 0 or null up here
        if (suscriptions.indexOf(__WEBPACK_IMPORTED_MODULE_1__user_data_user_data__["a" /* UserDataProvider */].PLAN_ANY) > -1) {
            return true;
        }
        //regular check
        __WEBPACK_IMPORTED_MODULE_3__providers_user_data_debugger__["a" /* Debugger */].log(['suscriptions', suscriptions, 'this.subsData.subscription.field_plan_sus', this.subsData.subscription.field_plan_sus], debug);
        if (suscriptions.indexOf(Number(this.subsData.subscription.field_plan_sus)) > -1) {
            ret = true;
        }
        return ret;
    };
    PermissionsProvider.prototype.checkUserSuscription = function (suscriptions, debug) {
        if (debug === void 0) { debug = false; }
        var ret = false;
        var plan_sus = new Array();
        //si la subscripcion no esta activa (expiro, no ha sido pagada etc) retorna false
        //if(Number(this.userData.field_sub_id.und[0]) === Number(0) || this.subscription === null){return false;}
        if (!this.checkUserPermission([__WEBPACK_IMPORTED_MODULE_1__user_data_user_data__["a" /* UserDataProvider */].TIPO_DOCTOR])) {
            this.subsData.Groups.forEach(function (sub) {
                plan_sus.push(sub.field_plan_sus);
            });
        }
        else {
            if (this.subsData.subscription === null) {
                return false;
            }
            if (Number(this.subsData.subscription.field_active) === Number(0)) {
                return false;
            } //if not active returns false also
            // checking for ANY, automatically returns true since we checked for not 0 or null up here
            plan_sus.push(this.subsData.subscription.field_plan_sus);
        }
        if (suscriptions.indexOf(__WEBPACK_IMPORTED_MODULE_1__user_data_user_data__["a" /* UserDataProvider */].PLAN_ANY) > -1 && plan_sus.length > 0) {
            return true;
        }
        //regular check
        //Debugger.log(['suscriptions',suscriptions,'this.subsData.subscription.field_plan_sus',this.subsData.subscription.field_plan_sus],debug);
        var result = plan_sus.filter(function (having) { return suscriptions.some(function (wanting) { return Number(wanting) === Number(having); }); });
        //console.log('checkUserSuscription result',result);
        if (result.length > 0) {
            ret = true;
        }
        return ret;
    };
    PermissionsProvider.prototype.checkifgroup = function () {
        //if(this.checkPlan)
        console.log('CHECK IF GROUP NIGGA', this.checkUserSuscription([__WEBPACK_IMPORTED_MODULE_2__subscription_data_subscription_data__["a" /* SubscriptionDataProvider */].PLAN_GROUP]));
        return this.checkUserSuscription([__WEBPACK_IMPORTED_MODULE_2__subscription_data_subscription_data__["a" /* SubscriptionDataProvider */].PLAN_GROUP]);
        //return this.subsData.isGroup;
    };
    PermissionsProvider.prototype.checkUserPlanHolder = function () {
        var ret = false;
        if (this.subsData.checkForSub()) {
            ret = this.checkUserPermission([__WEBPACK_IMPORTED_MODULE_1__user_data_user_data__["a" /* UserDataProvider */].TIPO_DOCTOR]) && (Number(this.subsData.subscription.field_plan_holder) === Number(this.userData.userData.uid));
        }
        return ret;
    };
    PermissionsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__subscription_data_subscription_data__["a" /* SubscriptionDataProvider */]])
    ], PermissionsProvider);
    return PermissionsProvider;
}());

//# sourceMappingURL=permissions.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Debugger; });
var Debugger = /** @class */ (function () {
    function Debugger() {
    }
    Debugger.log = function (show, debuging_override) {
        if (debuging_override === void 0) { debuging_override = null; }
        if (Debugger.debugForce !== Debugger.DEBUT_FORCE_NOTHING) {
            if (Debugger.debugForce === Debugger.DEBUT_FORCE_YES) {
                console.log.apply(console, show);
            }
            if (Debugger.debugForce === Debugger.DEBUT_FORCE_NO) {
                return false;
            }
        }
        if (debuging_override === false) {
            return false;
        }
        if (debuging_override === true || Debugger.debug === true) {
            console.log.apply(console, show);
        }
    };
    Debugger.debug = true;
    Debugger.DEBUT_FORCE_YES = 1;
    Debugger.DEBUT_FORCE_NO = 0;
    Debugger.DEBUT_FORCE_NOTHING = -1;
    Debugger.debugForce = Debugger.DEBUT_FORCE_NOTHING;
    return Debugger;
}());

//# sourceMappingURL=debugger.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateProvider = /** @class */ (function () {
    function DateProvider() {
    }
    DateProvider_1 = DateProvider;
    Object.defineProperty(DateProvider.prototype, "now", {
        get: function () { return new Date(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateProvider.prototype, "nowStart", {
        get: function () { return this.now.setHours(0, 0, 0, 0); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateProvider.prototype, "nowEnd", {
        get: function () { return this.now.setHours(23, 59, 59, 999); },
        enumerable: true,
        configurable: true
    });
    DateProvider.getUntil = function (Since) {
        return Since.getTime() - (new Date().getTime());
    };
    DateProvider.formatDateBinaryNumber = function (num) {
        //console.log('formatDateBinaryNumber',num);
        return (num < 10 ? '0' : '') + num;
    };
    DateProvider.getDateDifText = function (numberdatedif) {
        var ret = "00";
        var aux_ms = Math.abs(numberdatedif);
        if (aux_ms < (60 * 1000)) {
            ret = DateProvider_1.formatDateBinaryNumber(Math.floor(aux_ms / 1000)) + " segundos";
        }
        else if (aux_ms < (60 * 60 * 1000)) {
            ret = DateProvider_1.formatDateBinaryNumber(Math.floor(aux_ms / (1000 * 60))) + " Minutos";
        }
        else {
            var aux_hours = Math.floor(aux_ms / (1000 * 60 * 60));
            aux_ms -= aux_hours * (1000 * 60 * 60);
            var aux_minutes = Math.floor(aux_ms / (1000 * 60));
            aux_ms -= aux_minutes * (1000 * 60);
            var aux_seconds = Math.floor(aux_ms / (1000));
            ret = DateProvider_1.formatDateBinaryNumber(aux_hours) + ":" + DateProvider_1.formatDateBinaryNumber(aux_minutes) + ":" + DateProvider_1.formatDateBinaryNumber(aux_seconds) + " Hrs";
        }
        if (numberdatedif < 0)
            ret = "hace " + ret;
        return ret;
    };
    DateProvider.getDisplayableDates = function (date) {
        console.log('traildater gettindisplayable ', date);
        var ret = { "date": '', "time": '' };
        var datestring = DateProvider_1.formatDateBinaryNumber(date.getDate()) + "/" + (DateProvider_1.formatDateBinaryNumber(date.getMonth() + 1)) + "/" + date.getFullYear();
        var timestring = DateProvider_1.formatDateBinaryNumber(date.getHours()) + ":" + DateProvider_1.formatDateBinaryNumber(date.getMinutes());
        ret = { "date": datestring, "time": timestring };
        return ret;
    };
    DateProvider.getStringDate = function (date) {
        console.log('getStringDate', date);
        var ret = "";
        var datestring = DateProvider_1.formatDateBinaryNumber(date.getDate()) + "/" + (DateProvider_1.formatDateBinaryNumber(date.getMonth() + 1)) + "/" + date.getFullYear();
        ret = DateProvider_1.getDayOWeekLabel(date.getDay()) + ', ' + datestring;
        return ret;
    };
    DateProvider.getDayOWeekLabel = function (day) {
        var ret = '';
        switch (day) {
            case 0:
                ret = 'Domingo';
                break;
            case 1:
                ret = 'Lunes';
                break;
            case 2:
                ret = 'Martes';
                break;
            case 3:
                ret = 'Miercoles';
                break;
            case 4:
                ret = 'Jueves';
                break;
            case 5:
                ret = 'Viernes';
                break;
            case 6:
                ret = 'Sabado';
                break;
        }
        return ret;
    };
    DateProvider.getDisplayableHourfMS = function (MS) {
        var date = new Date();
        date.setHours(0, 0, 0, 0);
        date = new Date(date.getTime() + MS);
        return DateProvider_1.formatDateBinaryNumber(date.getHours()) + ":" + DateProvider_1.formatDateBinaryNumber(date.getMinutes());
    };
    //returns true if date is between min and max dates
    DateProvider.isDateBetween = function (date, mindate, maxdate) {
        var ret = false;
        if (DateProvider_1.isDateBetweenNumber(date.getTime(), mindate.getTime(), maxdate.getTime())) {
            ret = true;
        }
        return ret;
    };
    DateProvider.isDateBetweenNumber = function (date, mindate, maxdate) {
        var ret = false;
        if (date >= mindate && date < maxdate) {
            ret = true;
        }
        return ret;
    };
    //returns  the hours only milliseconds of the date, ignoring year, month and date
    DateProvider.getDayHours = function (date) {
        var aux_date = new Date(date.getTime()); //cloning date
        aux_date.setHours(0, 0, 0, 0); // setting it to day start
        return date.getTime() - aux_date.getTime(); //returning rest
    };
    DateProvider.getStartEndOFDate = function (date) {
        var startDate = new Date(date.getTime());
        startDate.setHours(0, 0, 0, 0);
        var endDate = new Date(date.getTime());
        endDate.setHours(23, 59, 59, 999);
        return { start: startDate, end: endDate };
    };
    DateProvider.dateWOffset = function (date) {
        console.log(new Date());
        console.log(date);
        var offset = date.getTimezoneOffset();
        console.log(offset);
        return new Date(date.getTime() + (offset * 60 * 1000 * 2));
    };
    DateProvider.validateHhMm = function (input) {
        console.log('validateHhMm', input);
        var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(input);
        if (isValid) {
            var aux_str = input.split(':');
            if (Number(aux_str[0]) == 24) {
                if (Number(aux_str[1]) > 0) {
                    isValid = false;
                    console.log('mas minutos que 24 horas we? tas loco');
                }
            }
        }
        return isValid;
    };
    DateProvider.getMonthLabel = function (m) {
        console.log('getMonthLabel', m);
        var ret = '';
        switch (m) {
            case 1:
                ret = 'Enero';
                break;
            case 2:
                ret = 'Febrero';
                break;
            case 3:
                ret = 'Marzo';
                break;
            case 4:
                ret = 'Abril';
                break;
            case 5:
                ret = 'Mayo';
                break;
            case 6:
                ret = 'Junio';
                break;
            case 7:
                ret = 'Julio';
                break;
            case 8:
                ret = 'Agosto';
                break;
            case 9:
                ret = 'Septiembre';
                break;
            case 0:
                ret = 'Octubre';
                break;
            case 1:
                ret = 'Noviembre';
                break;
            case 2:
                ret = 'Diciembre';
                break;
        }
        return ret;
    };
    DateProvider = DateProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DateProvider);
    return DateProvider;
    var DateProvider_1;
}());

//# sourceMappingURL=date.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnesignalManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cordova_available_cordova_available__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_onesignal__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_manager_notifications_manager__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_data_user_data__ = __webpack_require__(12);
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





/*
  Generated class for the OnesignalManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var OnesignalManagerProvider = /** @class */ (function () {
    function OnesignalManagerProvider(oneSignal, isco, notiMan, userData) {
        this.oneSignal = oneSignal;
        this.isco = isco;
        this.notiMan = notiMan;
        this.userData = userData;
        this.onseignalDid = null;
        this.onesignalAPPid = '7902c2ba-310b-4eab-90c3-8cae53de891f';
        this.onesignalSenderid = '470345987173';
    }
    OnesignalManagerProvider.prototype.init = function () {
        var _this = this;
        if (this.isco.isCordovaAvailable) {
            var iosSettings = {};
            iosSettings["kOSSettingsKeyAutoPrompt"] = true;
            iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;
            // Initialise plugin with OneSignal service
            this.oneSignal.startInit(this.onesignalAPPid, this.onesignalSenderid).iOSSettings(iosSettings);
            this.oneSignal.getIds()
                .then(function (ids) {
                _this.onseignalDid = ids;
            });
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
            this.oneSignal.handleNotificationReceived().subscribe(function (data) { return _this.onPushReceived(data.payload); });
            this.oneSignal.handleNotificationOpened().subscribe(function (data) { return _this.onPushOpened(data.notification.payload); });
            this.oneSignal.endInit();
        }
    };
    OnesignalManagerProvider.prototype.onPushReceived = function (payload) {
        //alert('Push recevied:' + payload.body);
        this.notiMan.cargarNotificaciones();
    };
    OnesignalManagerProvider.prototype.onPushOpened = function (payload) {
        //Debugger.log(['onPushOpened',payload]);
        this.notiMan.operatePushNotification(payload.additionalData.action);
    };
    OnesignalManagerProvider.prototype.savePlayerID = function () {
        return __awaiter(this, void 0, void 0, function () {
            var saveres;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userData.getSavePlayerIDrequest(this.onseignalDid.userId).toPromise()];
                    case 1:
                        saveres = _a.sent();
                        console.log('resuñt of savind onesignal id', saveres);
                        return [2 /*return*/];
                }
            });
        });
    };
    OnesignalManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1__cordova_available_cordova_available__["a" /* CordovaAvailableProvider */],
            __WEBPACK_IMPORTED_MODULE_3__notifications_manager_notifications_manager__["a" /* NotificationsManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__user_data_user_data__["a" /* UserDataProvider */]])
    ], OnesignalManagerProvider);
    return OnesignalManagerProvider;
}());

//# sourceMappingURL=onesignal-manager.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nlist_nlist__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__conekta_conekta__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__footer_footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__nlist_nlist__["a" /* NlistComponent */],
                __WEBPACK_IMPORTED_MODULE_6__conekta_conekta__["a" /* ConektaComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__footer_footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__nlist_nlist__["a" /* NlistComponent */],
                __WEBPACK_IMPORTED_MODULE_6__conekta_conekta__["a" /* ConektaComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitasPresentatorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_alert__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loader_loader__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_manager_notifications_manager__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__citas_manager_citas_manager__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__doctores_data_doctores_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ws_messenger_ws_messenger__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cita_progress_controller_cita_progress_controller__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__date_date__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reportes_manager_reportes_manager__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__updater_updater__ = __webpack_require__(78);
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














/*
  Generated class for the CitasPresentatorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CitasPresentatorProvider = /** @class */ (function () {
    function CitasPresentatorProvider(userData, citasManager, notiMan, alert, loader, modalCtrl, wsMessenger, progresSController, reportesMan, updater) {
        this.userData = userData;
        this.citasManager = citasManager;
        this.notiMan = notiMan;
        this.alert = alert;
        this.loader = loader;
        this.modalCtrl = modalCtrl;
        this.wsMessenger = wsMessenger;
        this.progresSController = progresSController;
        this.reportesMan = reportesMan;
        this.updater = updater;
        this.dateFilterStart = 0;
        this.pacienteFilter = null;
        this.filteredCitas = false;
        this.filteredtimestamp = null;
        this.filterchangeBusy = false;
        this.editfinish = false;
    }
    CitasPresentatorProvider.prototype.openNuevaCita = function () {
        var Modal = this.modalCtrl.create("NuevacitaModalPage", undefined, { cssClass: "nuevaCitaModal smallModal" });
        Modal.present({});
    };
    CitasPresentatorProvider.prototype.updateStatePop = function (cita, state) {
        var _this = this;
        console.log('updateStatePop', cita, state);
        var aux_title = __WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].getStateLabel(state);
        this.alert.chooseAlert(aux_title, "\u00BFEst\u00E1 seguro que desea colocar esta cita como " + aux_title + "?", function () { _this.updateStateRequest(cita, state); }, function () { });
    };
    CitasPresentatorProvider.prototype.updateStateRequest = function (cita, state) {
        return __awaiter(this, void 0, void 0, function () {
            var saveDate, state_res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('updateStateRequest', cita, state);
                        this.loader.presentLoader("Actualizando...");
                        if (!!this.reportesMan.reportesData.isSetTodayReport) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.reportesMan.getTodayReport()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        saveDate = !this.progresSController.editfinish;
                        if (Number(state) === __WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_FINALIZADA) {
                            console.log('cambiando a finalizada, checando cantidad restante', this.progresSController.activeCita.restantePagos);
                            if (this.progresSController.activeCita.restantePagos > 0) {
                                console.log('cambiando a adeudo');
                                state = __WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_ADEUDO;
                            }
                        }
                        //cita.compareServicios(this.progresSController.servicesCompare);
                        //console.log('antes de guardar el state quedo ',state);
                        console.log('antes de guardar el state quedo', cita);
                        console.log('check cita before sending', JSON.stringify(cita.data.field_ediciones_json));
                        return [4 /*yield*/, this.citasManager.updateCitaState(cita, state, saveDate).toPromise()];
                    case 3:
                        state_res = _a.sent();
                        //let state_res = await this.citasManager.updateCitaState(cita,state, saveDate).subscribe((val)=>{console.log('wele a pedo',val),(error)=>{console.log('wele a pedo',error)}});
                        if (Number(state) === __WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_CONFIRMADA && cita.doctor_playerid) {
                            this.notiMan.generateNotification([cita.data.field_cita_doctor.und[0]], "Cita Confirmada con " + cita.paciente + " fecha: " + new Date(cita.data.field_datemsb['und'][0]['value']), "cita-" + cita.Nid);
                        }
                        if (Number(state) === __WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_COBRO && cita.caja_playerid) {
                            this.notiMan.generateNotification([cita.data.field_cita_caja.und[0]], "La cita de de " + cita.paciente + " esta en espera de cobro", "cita-" + cita.Nid);
                        }
                        return [4 /*yield*/, this.reportesMan.checkUpdateTodayDocs(cita.data.field_cita_doctor.und[0])];
                    case 4:
                        _a.sent();
                        this.wsMessenger.generateWSupdateMessage(cita);
                        this.setBlockNdismiss(cita.Nid);
                        return [2 /*return*/];
                }
            });
        });
    };
    CitasPresentatorProvider.prototype.saveCita = function (cita) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.citasManager.updateCita(cita).toPromise()];
                    case 1:
                        res = _a.sent();
                        console.log('updating cita', res);
                        return [2 /*return*/, res];
                }
            });
        });
    };
    CitasPresentatorProvider.prototype.editCita = function (cita) {
        console.log('state of cita', cita.checkState(__WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_COBRO));
        if (cita.checkState(__WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_FINALIZADA) || cita.checkState(__WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_COBRO) || cita.checkState(__WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_ADEUDO)) {
            this.progresSController.editfinish = true;
            this.openProgreso(cita);
        }
        else {
            var Modal = this.modalCtrl.create("NuevacitaModalPage", { cita: cita }, { cssClass: "nuevaCitaModal smallModal" });
            Modal.present({});
        }
    };
    CitasPresentatorProvider.prototype.openProgreso = function (cita) {
        /*let Modal = this.modalCtrl.create("ProgresocitaModalPage", {cita : cita}, { cssClass: "smallModal progressModal" });
        Modal.present({});*/
        console.log('opening progreso men');
        if (cita.checkState(__WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_FINALIZADA)) {
            console.log('tengo cositas aquí = ) ');
            this.progresSController.cobroEfectivo = cita.cobroEfectivo;
            this.progresSController.cobroCheque = cita.cobroCheque;
            this.progresSController.cobroTarjeta = cita.cobroTarjeta;
            this.progresSController.factura = cita.data.field_facturar.und[0].value;
            this.progresSController.factura_cantidad = cita.data.field_facturar_cantidad.und[0].value;
        }
        this.progresSController.openProgress(cita);
    };
    CitasPresentatorProvider.prototype.iniciarCita = function (cita) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var aux_doc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('iniciando cita', cita);
                        aux_doc = this.citasManager.getDoctorOFCita(cita);
                        console.log('doctor of cita is', aux_doc);
                        if (!(cita.checkState(__WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_ACTIVA) || cita.checkState(__WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_COBRO))) return [3 /*break*/, 1];
                        this.openProgreso(cita);
                        return [3 /*break*/, 4];
                    case 1:
                        if (!__WEBPACK_IMPORTED_MODULE_8__doctores_data_doctores_data__["a" /* DoctoresDataProvider */].isDoctorBusy(aux_doc)) return [3 /*break*/, 2];
                        this.alert.presentAlert("Ocupado", "Este doctor esta ocupado con una cita Activa");
                        return [3 /*break*/, 4];
                    case 2:
                        this.loader.presentLoader('Actualizando...');
                        __WEBPACK_IMPORTED_MODULE_8__doctores_data_doctores_data__["a" /* DoctoresDataProvider */].setDoctorBusy(aux_doc, cita);
                        return [4 /*yield*/, this.citasManager.updateCitaState(cita, __WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_ACTIVA).toPromise()];
                    case 3:
                        _a.sent();
                        this.wsMessenger.generateWSupdateMessage(cita);
                        this.citasManager.blockOnWaiting(cita.Nid, function () {
                            _this.openProgreso(cita);
                            _this.loader.dismissLoader();
                        }, function () {
                            _this.loader.dismissLoader();
                        });
                        //this.openProgreso(cita);
                        this.loader.dismissLoader();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CitasPresentatorProvider.prototype.desactivarCita = function (cita) {
        return __awaiter(this, void 0, void 0, function () {
            var aux_doc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        aux_doc = this.citasManager.getDoctorOFCita(cita);
                        console.log('doctor of cita is', aux_doc);
                        if (!cita.checkState(__WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_ACTIVA)) return [3 /*break*/, 2];
                        this.loader.presentLoader('Actualizando...');
                        __WEBPACK_IMPORTED_MODULE_8__doctores_data_doctores_data__["a" /* DoctoresDataProvider */].setDoctorUnbusy(aux_doc);
                        return [4 /*yield*/, this.citasManager.updateCitaState(cita, __WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_CONFIRMADA).toPromise()];
                    case 1:
                        _a.sent();
                        this.wsMessenger.generateWSupdateMessage(cita);
                        this.setBlockNdismiss(cita.Nid);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    CitasPresentatorProvider.prototype.desConfirmarCita = function (cita) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!cita.checkState(__WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_CONFIRMADA)) return [3 /*break*/, 2];
                        this.loader.presentLoader('Actualizando...');
                        return [4 /*yield*/, this.citasManager.updateCitaState(cita, __WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_PENDIENTE).toPromise()];
                    case 1:
                        _a.sent();
                        this.wsMessenger.generateWSupdateMessage(cita);
                        //this.loader.dismissLoader(); 
                        this.setBlockNdismiss(cita.Nid);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    CitasPresentatorProvider.prototype.confirmarCita = function (cita) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader.presentLoader('confirmando cita...');
                        return [4 /*yield*/, this.citasManager.updateCitaState(cita, __WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_CONFIRMADA).toPromise()];
                    case 1:
                        res = _a.sent();
                        console.log('confirmar cita res', res);
                        if (res) {
                            this.notiMan.generateNotification([cita.data.field_cita_doctor.und[0]], "Cita Confirmada con " + cita.paciente + " fecha: " + new Date(cita.data.field_datemsb['und'][0]['value']), "cita-" + cita.Nid);
                            this.wsMessenger.generateWSupdateMessage(cita);
                            this.setBlockNdismiss(cita.Nid);
                        }
                        else {
                            this.loader.dismissLoader();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CitasPresentatorProvider.prototype.setBlockNdismiss = function (citaNid) {
        var _this = this;
        this.citasManager.blockOnWaiting(citaNid, function () { _this.loader.dismissLoader(); }, function () { _this.loader.dismissLoader(); });
    };
    CitasPresentatorProvider.prototype.delecitaCitaPop = function (cita) {
        var _this = this;
        this.alert.chooseAlert("Eliminar Cita", '¿Está seguro que desea eliminar esta cita?', function () { _this.deleteCita(cita); }, function () { });
    };
    CitasPresentatorProvider.prototype.deleteCita = function (cita) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader.presentLoader('Eliminando...');
                        return [4 /*yield*/, this.citasManager.deleteCita(cita.data).toPromise()];
                    case 1:
                        _a.sent();
                        this.wsMessenger.generateWSremoveCitaMessage(cita);
                        this.loader.dismissLoader();
                        return [2 /*return*/];
                }
            });
        });
    };
    CitasPresentatorProvider.prototype.filterChange = function () {
        this.filteredtimestamp = new Date();
        console.log('filterChange', this.filteredtimestamp, this.filteredtimestamp.getTime());
        if (!this.filterchangeBusy) {
            this.filterchangeBusy = true;
            var view_1 = this;
            var Filterinterval_1 = setInterval(function () {
                var aux_now = new Date();
                console.log('filter checking times', (aux_now.getTime() - view_1.filteredtimestamp.getTime()));
                if ((aux_now.getTime() - view_1.filteredtimestamp.getTime()) > 500) {
                    view_1.filterChangeExecute();
                    view_1.filterchangeBusy = false;
                    clearInterval(Filterinterval_1);
                }
            }, 100);
        }
    };
    CitasPresentatorProvider.prototype.filterChangeExecute = function () {
        var _this = this;
        //si el timestamp es null, guardar, y esperar.
        console.log('this.dateFilterStart', this.dateFilterStart);
        //2019-01-08
        //esta fecha k prk la puse aki o _ o 2019-05-13
        if (Number(this.dateFilterStart) != null && Number(this.dateFilterStart) !== 0) {
            var date_Filter = __WEBPACK_IMPORTED_MODULE_11__date_date__["a" /* DateProvider */].dateWOffset(new Date(this.dateFilterStart));
            this.citasManager.citasData.customFilters = true;
            this.citasManager.citasData.startDateFilter = date_Filter.setHours(0, 0, 0, 0);
            this.citasManager.citasData.endDateFilter = date_Filter.setHours(23, 59, 59, 999);
            this.citasManager.citasData.defaultSort();
            this.filteredCitas = true;
        }
        if (this.pacienteFilter !== null) {
            if (this.pacienteFilter === '') {
                this.pacienteFilter = null;
            }
            this.citasManager.citasData.pacienteFilter = this.pacienteFilter;
            this.citasManager.citasData.defaultSort();
            this.filteredCitas = true;
        }
        console.log('this.dateFilterStart END', this.dateFilterStart);
        this.loader.presentLoader('cargando...');
        this.updater.updateCitas().then(function () {
            _this.loader.dismissLoader();
        });
        //tomar en cuenta el filter en la busqueda de citas. pero que no afecte el reporte de hoy? segun esto no lo afecta. veamos entonces.
        console.log('changing filter');
        /*this.loader.presentLoader('cargando...');
        console.log("changing filter",this.dateFilterStart);
        let aux_fdate = DateProvider.dateWOffset(new Date(this.dateFilterStart));
        console.log(DateProvider.getStartEndOFDate(new Date()));
        console.log(DateProvider.getStartEndOFDate(aux_fdate));
        this.filteredResults = true;
        let dateRange = DateProvider.getStartEndOFDate(aux_fdate);
        this.citasManager.citasData.citas = new Array();
        this.citasManager.requestCitas(dateRange.start.getTime(), dateRange.end.getTime()).subscribe(
          (val)=>{
            this.loader.dismissLoader();
          }
        );*/
    };
    CitasPresentatorProvider.prototype.removeFilter = function () {
        var _this = this;
        this.citasManager.citasData.resetDateFilters();
        this.dateFilterStart = null;
        this.filteredCitas = false;
        this.pacienteFilter = null;
        this.loader.presentLoader('cargando...');
        this.updater.updateCitas(true).then(function () {
            _this.loader.dismissLoader();
        });
        //this.citasManager.citasData.defaultSort();
    };
    CitasPresentatorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__citas_manager_citas_manager__["a" /* CitasManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__notifications_manager_notifications_manager__["a" /* NotificationsManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_2__alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_3__loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_9__ws_messenger_ws_messenger__["a" /* WsMessengerProvider */],
            __WEBPACK_IMPORTED_MODULE_10__cita_progress_controller_cita_progress_controller__["a" /* CitaProgressControllerProvider */],
            __WEBPACK_IMPORTED_MODULE_12__reportes_manager_reportes_manager__["a" /* ReportesManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_13__updater_updater__["a" /* UpdaterProvider */]])
    ], CitasPresentatorProvider);
    return CitasPresentatorProvider;
}());

//# sourceMappingURL=citas-presentator.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return subscriptions; });
//import { Debugger } from './debugger';
/**
 * @fileOverview
 * subscription describes an implementation of a plan
*/
var subscriptions = /** @class */ (function () {
    function subscriptions() {
        this.nid = null;
        this.plan = null; //objeto de plan completo
        this.field_plan_sus = null; //nid del plan
        this.field_plan_holder = null; //uid
        this.field_doctores = null; //array of doctor uids
        this.field_doctores_json = null; //a json with requiered info about doctors.
        this.field_doctores_info = null;
        this.field_subusuarios = null; //array of sub acound uids
        this.field_invitation_code = null; //String to enter this suscription
        this.field_group_name = null; // group name, just an accesory
        this.field_active = null; //wether is paid or not
        this.field_next_cobro = null; //when is time to pay again bby gime that mony.
        this.is_plan_set = false;
        this.field_stripe_sus_id = null;
        this.field_stripe_src_sus_id = null;
        this.field_stripe_cus_sub_id = null;
        this.noSubcuentas = 0;
        this.isDocfull = true;
        this.isSubFull = true;
        this.field_cantidad = 0;
        this.field_adicionales = 0;
        this.field_docsadicionales = 0;
    }
    subscriptions.prototype.setData = function (input_data) {
        var _this = this;
        console.log('setting this data men', input_data);
        var ret = false;
        if (!input_data)
            return ret;
        ret = true;
        console.log("tryna assign input data to subscription", input_data);
        this.nid = input_data['nid'];
        this.field_plan_sus = input_data['field_plan_sus'];
        this.field_plan_holder = input_data['field_plan_holder'];
        this.field_doctores = null;
        console.log('doctors error comming from this', input_data['field_doctores_json']);
        /* parece que los json se pueden joder inesperadamente,*/
        this.field_doctores_json = input_data['field_doctores_json'];
        this.field_subusuarios = null;
        this.field_invitation_code = input_data['field_invitation_code'];
        this.field_group_name = input_data['field_group_name'];
        this.field_active = input_data['field_active']['value'];
        this.field_next_cobro = input_data['field_next_cobro'];
        this.field_stripe_sus_id = input_data['field_stripe_sus_id'];
        this.field_stripe_src_sus_id = input_data['field_stripe_src_sus_id'];
        this.field_stripe_cus_sub_id = input_data['field_stripe_cus_sub_id'];
        this.field_cantidad = input_data['field_cantidad'];
        this.field_adicionales = input_data['field_adicionales'];
        this.field_docsadicionales = input_data['field_docsadicionales'];
        if (!input_data['field_cantidad']) {
            this.field_cantidad = 0;
        }
        if (!input_data['field_adicionales']) {
            this.field_adicionales = 0;
        }
        if (!input_data['field_docsadicionales']) {
            this.field_docsadicionales = 0;
        }
        this.field_doctores_info = new Array();
        if (input_data['field_doctores']) {
            this.field_doctores = new Array();
            input_data['field_doctores'].forEach(function (element) {
                _this.field_doctores.push(element['uid']);
            });
        }
        if (input_data['field_subusuarios']) {
            this.field_subusuarios = new Array();
            input_data['field_subusuarios'].forEach(function (element) {
                _this.field_subusuarios.push(element['uid']);
            });
        }
        //Debugger.log(['field_subusuarios at set data subscription',this.field_subusuarios]);
        try {
            this.field_doctores_info = JSON.parse(this.field_doctores_json);
        }
        catch (e) {
            console.log('subscriptions:setData error on json ', this.field_doctores_json);
            this.field_doctores_info = new Array();
        }
        if (this.field_subusuarios)
            this.noSubcuentas = this.field_subusuarios.length;
        this.validateSuscriptionActive();
        return ret;
    };
    subscriptions.prototype.validateSuscriptionActive = function () {
        if (!this.field_plan_sus) {
            this.field_active = 0;
        } //checking what kind of plan do you have before deciding if its active.
    };
    subscriptions.prototype.getData = function () {
        var ret = null;
        if (this.nid !== null) {
            ret = {
                Nid: this.nid,
                type: "suscripcion",
                field_plan_sus: { und: [this.field_plan_sus] },
                field_plan_holder: { und: [this.field_plan_holder] },
                field_doctores: { und: [] },
                field_subusuarios: { und: [] },
                field_invitation_code: { und: [{ value: this.field_invitation_code }] },
                field_group_name: { und: [{ value: this.field_group_name }] },
                field_active: { und: [{ value: this.field_active }] },
                //field_next_cobro:this.field_next_cobro,
                field_stripe_sus_id: { und: [{ value: this.field_stripe_sus_id }] },
                field_stripe_src_sus_id: { und: [{ value: this.field_stripe_src_sus_id }] },
                field_stripe_cus_sub_id: { und: [{ value: this.field_stripe_cus_sub_id }] },
                field_cantidad: { und: [{ value: this.field_cantidad }] },
                field_adicionales: { und: [{ value: this.field_adicionales }] },
                field_docsadicionales: { und: [{ value: this.field_docsadicionales }] },
            };
            if (this.field_doctores) {
                this.field_doctores.forEach(function (element) {
                    ret.field_doctores.und.push(Number(element));
                });
            }
            if (this.field_subusuarios) {
                this.field_subusuarios.forEach(function (element) {
                    ret.field_subusuarios.und.push(Number(element));
                });
            }
        }
        else {
            //Debugger.log(['is a new shit to save']);
            ret = {
                Nid: this.nid,
                type: "suscripcion",
                field_plan_sus: { und: [this.field_plan_sus] },
                field_plan_holder: { und: [this.field_plan_holder] },
                field_doctores: { und: [] },
                field_subusuarios: { und: [] },
                field_invitation_code: { und: [{ value: this.field_invitation_code }] },
                field_group_name: { und: [{ value: this.field_group_name }] },
                field_active: { und: [{ value: this.field_active }] },
                field_stripe_sus_id: { und: [{ value: this.field_stripe_sus_id }] },
                field_stripe_src_sus_id: { und: [{ value: this.field_stripe_src_sus_id }] },
                field_stripe_cus_sub_id: { und: [{ value: this.field_stripe_cus_sub_id }] },
                field_cantidad: { und: [{ value: this.field_cantidad }] },
                field_adicionales: { und: [{ value: this.field_adicionales }] },
                field_docsadicionales: { und: [{ value: this.field_docsadicionales }] },
            };
            if (this.field_doctores !== null) {
                this.field_doctores.forEach(function (element) {
                    ret.field_doctores.und.push(Number(element));
                });
            }
            if (this.field_subusuarios !== null) {
                this.field_subusuarios.forEach(function (element) {
                    ret.field_subusuarios.und.push(Number(element));
                });
            }
        }
        //Debugger.log(['source getData',ret]);
        return ret;
    };
    subscriptions.prototype.setPlanFromList = function (input_planes) {
        var _this = this;
        var ret = false;
        input_planes.forEach(function (plan) {
            if (plan.checkNid(_this.field_plan_sus)) {
                _this.plan = plan;
                _this.is_plan_set = true;
                ret = _this.is_plan_set;
                _this.checkfullness();
            }
        });
        //Debugger.log(['returning plan found and set', this.is_plan_set]);
        return ret;
    };
    subscriptions.prototype.checkfullness = function () {
        //Debugger.log(['checking fullness from plan',this.plan]);
        if (this.plan && this.plan.nid) {
            if (this.field_doctores) {
                if (this.field_doctores.length >= this.plan.field_no_doctores) {
                    this.isDocfull = true;
                }
                else {
                    this.isDocfull = false;
                }
            }
            else {
                this.isDocfull = false;
            }
            if (this.field_subusuarios) {
                if (this.field_subusuarios.length >= this.plan.field_no_subcuentas) {
                    this.isSubFull = true;
                }
                else {
                    this.isSubFull = false;
                }
            }
            else {
                this.isSubFull = false;
            }
        }
        else {
            this.isDocfull = true;
            this.isSubFull = true;
        }
    };
    subscriptions.getEmptySuscription = function () {
        var aux_sus = new subscriptions();
        aux_sus.field_active = 0;
        aux_sus.is_plan_set = false;
        aux_sus.plan = null;
        return aux_sus;
    };
    subscriptions.prototype.removeUserFromSubs = function (uid) {
        console.log('field doctores insubs', this.field_doctores);
        this.field_doctores = this.field_doctores.filter(function (docs) { return Number(docs) !== Number(uid); });
        console.log('remvoed', uid, this.field_doctores);
        //this.field_doctores = this.field_doctores.filter();
    };
    subscriptions.prototype.removeSubUserFromSubs = function (userd) {
        this.field_subusuarios = this.field_subusuarios.filter(function (s_uid) { return Number(s_uid) !== Number(userd['uid']); });
        /*if(this.field_subusuarios){
            let aux_index = this.field_subusuarios.indexOf(userd['uid']);
            if(aux_index !== -1)this.field_subusuarios.splice(aux_index,1);
           
        }*/
    };
    return subscriptions;
}());

//# sourceMappingURL=subscriptions.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_clipboard__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_conekta_conekta__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_components_module__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_directives_module__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_interceptor_auth_interceptor__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_timeout_interceptor_timeout_interceptor__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_citas_data_citas_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_date_date__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_base_url_base_url__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_citas_manager_citas_manager__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_cordova_available_cordova_available__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_websocket_service_websocket_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_doctores_data_doctores_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_planes_data_planes_data__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_subscription_data_subscription_data__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_subscription_manager_subscription_manager__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_onesignal_manager_onesignal_manager__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_notifications_data_notifications_data__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_notifications_manager_notifications_manager__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_drupal_node_manager_drupal_node_manager__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_doctores_manager_doctores_manager__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_servicios_manager_servicios_manager__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_drupal_user_manager_drupal_user_manager__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_reportes_data_reportes_data__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_reportes_manager_reportes_manager__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_loader_loader__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_alert_alert__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_citas_presentator_citas_presentator__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_ws_messenger_ws_messenger__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_subusers_data_subusers_data__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_subusers_manager_subusers_manager__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_reporte_citas_reporte_citas__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_report_presentator_report_presentator__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_reporte_servicios_reporte_servicios__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_drupal_node_editor_drupal_node_editor__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_cita_progress_controller_cita_progress_controller__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_permissions_permissions__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_ion2_calendar__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_47_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_calendar__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_angular_bootstrap_datetimepicker__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_tutorial_tutorial__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_json_util_json_util__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_ionic_tooltips__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__angular_platform_browser_animations__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_updater_updater__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//import { HTTP } from '@ionic-native/http';











































//import { HttpBackend, HttpXhrBackend } from '@angular/common/http';
//import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';
//import { Platform } from 'ionic-angular';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_49_angular_bootstrap_datetimepicker__["a" /* DlDateTimePickerDateModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    preloadModules: true,
                    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                    monthShortNames: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Cct', 'Nov', 'Dec'],
                    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
                    dayShortNames: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
                }, {
                    links: [
                        { loadChildren: '../pages/group/group.module#GroupPageModule', name: 'GroupPage', segment: 'group', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification-pop/notification-pop.module#NotificationPopPageModule', name: 'NotificationPopPage', segment: 'notification-pop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevoservicio-modal/nuevoservicio-modal.module#NuevoservicioModalPageModule', name: 'NuevoservicioModalPage', segment: 'nuevoservicio-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevoreporte-modal/nuevoreporte-modal.module#NuevoreporteModalPageModule', name: 'NuevoreporteModalPage', segment: 'nuevoreporte-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recover-modal/recover-modal.module#RecoverModalPageModule', name: 'RecoverModalPage', segment: 'recover-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reporte-generate/reporte-generate.module#ReporteGeneratePageModule', name: 'ReporteGeneratePage', segment: 'reporte-generate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reporte-modal/reporte-modal.module#ReporteModalPageModule', name: 'ReporteModalPage', segment: 'reporte-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reporte/reporte.module#ReportePageModule', name: 'ReportePage', segment: 'reporte', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reportegrupal/reportegrupal.module#ReportegrupalPageModule', name: 'ReportegrupalPage', segment: 'reportegrupal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/citas/citas.module#CitasPageModule', name: 'CitasPage', segment: 'citas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reporte-ticket/reporte-ticket.module#ReporteTicketPageModule', name: 'ReporteTicketPage', segment: 'reporte-ticket', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/soon/soon.module#SoonPageModule', name: 'SoonPage', segment: 'soon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/servicios/servicios.module#ServiciosPageModule', name: 'ServiciosPage', segment: 'servicios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reportes/reportes.module#ReportesPageModule', name: 'ReportesPage', segment: 'reportes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terminosycondiciones/terminosycondiciones.module#TerminosycondicionesPageModule', name: 'TerminosycondicionesPage', segment: 'terminosycondiciones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome-modal/welcome-modal.module#WelcomeModalPageModule', name: 'WelcomeModalPage', segment: 'welcome-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/entergrupo/entergrupo.module#EntergrupoPageModule', name: 'EntergrupoPage', segment: 'entergrupo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/facturacion/facturacion.module#FacturacionPageModule', name: 'FacturacionPage', segment: 'facturacion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/progresocita-modal/progresocita-modal.module#ProgresocitaModalPageModule', name: 'ProgresocitaModalPage', segment: 'progresocita-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuarios/usuarios.module#UsuariosPageModule', name: 'UsuariosPage', segment: 'usuarios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevacita-modal/nuevacita-modal.module#NuevacitaModalPageModule', name: 'NuevacitaModalPage', segment: 'nuevacita-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miplan/miplan.module#MiplanPageModule', name: 'MiplanPage', segment: 'miplan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register-modal/register-modal.module#RegisterModalPageModule', name: 'RegisterModalPage', segment: 'register-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevousuario-modal/nuevousuario-modal.module#NuevousuarioModalPageModule', name: 'NuevousuarioModalPage', segment: 'nuevousuario-modal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_52_ionic_tooltips__["a" /* TooltipsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_53__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["c" /* HttpClientModule */],
                //NativeHttpModule, 
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */],
                //IonicStorageModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_10__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_47_ion2_calendar__["CalendarModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_14__providers_auth_interceptor_auth_interceptor__["a" /* AuthInterceptor */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_15__providers_timeout_interceptor_timeout_interceptor__["a" /* TimeoutInterceptor */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_calendar__["a" /* Calendar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_clipboard__["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_11__providers_user_data_user_data__["a" /* UserDataProvider */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_16__providers_citas_data_citas_data__["a" /* CitasDataProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_date_date__["a" /* DateProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_base_url_base_url__["a" /* BaseUrlProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_citas_manager_citas_manager__["a" /* CitasManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_cordova_available_cordova_available__["a" /* CordovaAvailableProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_planes_data_planes_data__["a" /* PlanesDataProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_subscription_data_subscription_data__["a" /* SubscriptionDataProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_subscription_manager_subscription_manager__["a" /* SubscriptionManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_onesignal_manager_onesignal_manager__["a" /* OnesignalManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_notifications_data_notifications_data__["a" /* NotificationsDataProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_notifications_manager_notifications_manager__["a" /* NotificationsManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_drupal_node_manager_drupal_node_manager__["a" /* DrupalNodeManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_doctores_manager_doctores_manager__["a" /* DoctoresManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_servicios_manager_servicios_manager__["a" /* ServiciosManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_drupal_user_manager_drupal_user_manager__["a" /* DrupalUserManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_reportes_data_reportes_data__["a" /* ReportesDataProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_reportes_manager_reportes_manager__["a" /* ReportesManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_loader_loader__["a" /* LoaderProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_alert_alert__["a" /* AlertProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_citas_presentator_citas_presentator__["a" /* CitasPresentatorProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_websocket_service_websocket_service__["a" /* WebsocketServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_ws_messenger_ws_messenger__["a" /* WsMessengerProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_subusers_data_subusers_data__["a" /* SubusersDataProvider */],
                __WEBPACK_IMPORTED_MODULE_40__providers_subusers_manager_subusers_manager__["a" /* SubusersManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_41__providers_reporte_citas_reporte_citas__["a" /* ReporteCitasProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_report_presentator_report_presentator__["a" /* ReportPresentatorProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_reporte_servicios_reporte_servicios__["a" /* ReporteServiciosProvider */],
                __WEBPACK_IMPORTED_MODULE_44__providers_drupal_node_editor_drupal_node_editor__["a" /* DrupalNodeEditorProvider */],
                __WEBPACK_IMPORTED_MODULE_45__providers_cita_progress_controller_cita_progress_controller__["a" /* CitaProgressControllerProvider */],
                __WEBPACK_IMPORTED_MODULE_46__providers_permissions_permissions__["a" /* PermissionsProvider */],
                __WEBPACK_IMPORTED_MODULE_50__providers_tutorial_tutorial__["a" /* TutorialProvider */],
                __WEBPACK_IMPORTED_MODULE_51__providers_json_util_json_util__["a" /* JsonUtilProvider */],
                __WEBPACK_IMPORTED_MODULE_8__components_conekta_conekta__["a" /* ConektaComponent */],
                __WEBPACK_IMPORTED_MODULE_54__providers_updater_updater__["a" /* UpdaterProvider */]
                //{provide: HttpBackend, useClass: NativeHttpFallback, deps: [Platform, NativeHttpBackend, HttpXhrBackend]},
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return planes; });
var planes = /** @class */ (function () {
    function planes() {
        this.title = null;
        this.field_costo = null;
        this.nid = null;
        this.field_no_doctores = null;
        this.field_no_subcuentas = null;
        this.field_stripe_id = null;
        this.field_descripcion = null;
        this.field_description_points = new Array();
        this.field_orden = 0;
        this.css_fact_selected = false;
    }
    planes.prototype.setData = function (input_data) {
        console.log("plan input data", input_data);
        this.title = input_data['title'];
        this.field_costo = Number(input_data['field_costo']) / 100;
        this.nid = input_data['nid'];
        this.field_no_doctores = input_data['field_no_doctores'];
        this.field_no_subcuentas = input_data['field_no_subcuentas'];
        this.field_stripe_id = input_data['field_stripe_id'];
        this.field_descripcion = input_data['field_descripcion'];
        this.field_description_points = input_data['field_description_points'];
        this.field_orden = input_data['field_orden'];
        console.log('loadedOrden', this.field_orden);
        //console.log('plan setdata descriptionpoints',this.field_description_points);
    };
    planes.prototype.checkNid = function (nid) {
        var ret = false;
        if (Number(this.nid) === Number(nid)) {
            ret = true;
        }
        return ret;
    };
    return planes;
}());

//# sourceMappingURL=planes.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitasManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date_date__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_url_base_url__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__citas_data_citas_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_data_citas__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__doctores_data_doctores_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__drupal_node_manager_drupal_node_manager__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__drupal_user_manager_drupal_user_manager__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reportes_data_reportes_data__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__subscription_data_subscription_data__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var CitasManagerProvider = /** @class */ (function () {
    function CitasManagerProvider(http, datep, baseurl, citasData, doctores, nodeMan, userMan, userData, reportesData, subsData) {
        this.http = http;
        this.datep = datep;
        this.baseurl = baseurl;
        this.citasData = citasData;
        this.doctores = doctores;
        this.nodeMan = nodeMan;
        this.userMan = userMan;
        this.userData = userData;
        this.reportesData = reportesData;
        this.subsData = subsData;
        this.waitingupdates = new Array();
        this.timesout = 20;
        console.log('Hello CitasManagerProvider Provider');
    }
    /**
     * Este metodo retorna cuando la cita con el uid especificado se actualiza por medio de un mensaje.
     */
    CitasManagerProvider.prototype.blockOnWaiting = function (citanid, callback, failcallback) {
        var _this = this;
        this.waitingupdates.push(citanid);
        var timeson = 0;
        var cic = setInterval(function () {
            timeson++;
            if (!_this.waitingupdates.find(function (nids) { return Number(nids) === Number(citanid); })) {
                callback();
                clearInterval(cic);
            }
            if (Number(timeson) === Number(_this.timesout)) {
                failcallback();
                clearInterval(cic);
            }
        }, 250);
    };
    CitasManagerProvider.prototype.requestCitas = function (from, to, paciente) {
        var _this = this;
        if (from === void 0) { from = this.datep.nowStart; }
        if (to === void 0) { to = this.datep.nowEnd + (1000 * 60 * 60 * 24 * 365 * 5); }
        if (paciente === void 0) { paciente = null; }
        var observable = this.getCitasObservable(from, to, this.doctores.doctoresIDs, null, null, paciente).share();
        observable.subscribe(function (val) {
            console.log('obtained citas', val);
            _this.setCitas(val);
        }, function (response) { console.log('error requestCitas', response); });
        return observable;
    };
    CitasManagerProvider.prototype.getCitasObservable = function (from, to, doctores, cajas, recepciones, paciente, state) {
        if (from === void 0) { from = this.datep.nowStart; }
        if (to === void 0) { to = this.datep.nowEnd + (1000 * 60 * 60 * 24 * 365 * 5); }
        if (doctores === void 0) { doctores = this.doctores.doctoresIDs; }
        if (cajas === void 0) { cajas = null; }
        if (recepciones === void 0) { recepciones = null; }
        if (paciente === void 0) { paciente = null; }
        if (state === void 0) { state = null; }
        console.log('from', new Date(from));
        console.log('to', new Date(to));
        console.log('is', new Date(1534605765000));
        console.log('1534605765000');
        console.log('from', from);
        console.log('to', to);
        console.log('doctores', doctores);
        console.log('cajas', cajas);
        console.log('recepciones', recepciones);
        var fillstring = "&args[4]=all&args[5]=all&args[6]=all";
        var stateFilter = "" + (state !== null ? '&args[8]=all&args[9]=' + state : '');
        var pacientefilter = "" + (paciente !== null ? '&args[7]=' + paciente : '');
        var endfilter = '';
        if (pacientefilter !== '' || stateFilter !== '') {
            endfilter = "" + (pacientefilter !== null ? fillstring + '&args[7]=' + paciente : fillstring + '&args[7]=all') + stateFilter;
        }
        var filterString = "?args[0]=" + (doctores && doctores.length > 0 ? doctores.join() : '0') + "&args[1]=" + (cajas && cajas.length > 0 ? cajas.join() : 'all') + "&args[2]=" + (recepciones && recepciones.length > 0 ? recepciones.join() : 'all') + "&args[3]=" + ((from !== null && to !== null) ? from + '--' + to : 'all') + endfilter;
        //let filterString = `?args[0]=${doctores ? doctores.join() : 'all'}&args[1]=${cajas ? cajas.join() : 'all'}&args[2]=${recepciones ? recepciones.join() : 'all'}`;
        var url = this.baseurl.endpointUrl + "rest_citas.json" + filterString;
        console.log('url getting citas', url);
        return this.http.get(url);
    };
    CitasManagerProvider.prototype.getCitasObservableReport = function (from, to, doctores, cajas, recepciones) {
        if (from === void 0) { from = this.datep.nowStart; }
        if (to === void 0) { to = this.datep.nowEnd + (1000 * 60 * 60 * 24 * 365 * 5); }
        if (doctores === void 0) { doctores = this.doctores.doctoresIDs; }
        if (cajas === void 0) { cajas = null; }
        if (recepciones === void 0) { recepciones = null; }
        console.log('from', from, new Date(from));
        console.log('to', to, new Date(to));
        console.log('is', '1554421919995', new Date(1554421919995));
        console.log('1534605765000');
        console.log('from', from);
        console.log('to', to);
        console.log('doctores', doctores);
        console.log('cajas', cajas);
        console.log('recepciones', recepciones);
        cajas = null; //no limitamos las cajas = ( )
        var filterString = "?args[0]=" + (doctores && doctores.length > 0 ? doctores.join() : '0') + "&args[1]=" + (cajas && cajas.length > 0 ? cajas.join() : 'all') + "&args[2]=" + (recepciones && recepciones.length > 0 ? recepciones.join() : 'all') + "&args[3]=all&args[4]=all&args[5]=all&args[6]=all&args[7]=all&args[8]=" + from + "--" + to;
        //let filterString = `?args[0]=${doctores ? doctores.join() : 'all'}&args[1]=${cajas ? cajas.join() : 'all'}&args[2]=${recepciones ? recepciones.join() : 'all'}`;
        var url = this.baseurl.endpointUrl + "rest_citas.json" + filterString;
        console.log('url getting citas', url);
        return this.http.get(url);
    };
    CitasManagerProvider.prototype.getCitasObservableAdeudos = function (doctores, cajas, recepciones) {
        if (doctores === void 0) { doctores = this.doctores.doctoresIDs; }
        if (cajas === void 0) { cajas = null; }
        if (recepciones === void 0) { recepciones = null; }
        console.log('doctores', doctores);
        console.log('cajas', cajas);
        console.log('recepciones', recepciones);
        var filterString = "?args[0]=" + (doctores && doctores.length > 0 ? doctores.join() : '0') + "&args[1]=" + (cajas && cajas.length > 0 ? /*cajas.join()*/ 'all' : 'all') + "&args[2]=" + (recepciones && recepciones.length > 0 ? /*recepciones.join()*/ 'all' : 'all') + "&args[3]=all&args[4]=all&args[5]=all&args[6]=all&args[7]=all&args[8]=all&args[9]=3,7";
        //let filterString = `?args[0]=${doctores ? doctores.join() : 'all'}&args[1]=${cajas ? cajas.join() : 'all'}&args[2]=${recepciones ? recepciones.join() : 'all'}`;
        var url = this.baseurl.endpointUrl + "rest_citas.json" + filterString;
        console.log('url getting citas adeudos', url);
        return this.http.get(url);
    };
    CitasManagerProvider.prototype.getCitaObservable = function (Nid) {
        var url = this.baseurl.endpointUrl + "rest_citas.json?args[0]=all&args[1]=all&args[2]=all&args[3]=all&args[4]=all&args[5]=" + Nid;
        return this.http.get(url);
    };
    CitasManagerProvider.prototype.setCitas = function (val) {
        console.log('citas response raw value', val);
        for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
            var cita = val_1[_i];
            if (this.checkUserCitaDataFilter(cita) && this.checkDoctorListDataFilter(cita)) {
                this.generateCita(cita);
            }
        }
        this.citasData.triggerSubject();
    };
    /*setEdicionesData(cita:Citas){
      cita.setEdicionesField();
      this.setCitaFechaReporte(cita,true);
    }*/
    /*async guardarEdiciones(cita:Citas){
      this.setEdicionesData(cita);
      let ret =  await this.updateCita(cita.data).toPromise();
    }*/
    CitasManagerProvider.prototype.checkUserCitaDataFilter = function (citaData) {
        /*let ret = true;
        //console.log('data to check()',citaData);
        if(this.userData.checkUserPermission([UserDataProvider.TIPO_CAJA]) && ! (Number(citaData.field_estado) === Number(CitasDataProvider.STATE_COBRO) || Number(citaData.field_estado) === Number(CitasDataProvider.STATE_ADEUDO)) ){
          ret = false;
          console.log('cita blocked from caja couase doesnt need cobro', citaData);
        }
        return ret;*/
        return true;
    };
    //este metodo revisa que el doctor este activo y en la suscripcion cargada para este usuario.
    CitasManagerProvider.prototype.checkDoctorListDataFilter = function (citaData) {
        console.log('checkDoctorListDataFilter');
        var ret = true;
        var docsuids = this.doctores.doctores.map(function (docs) { return Number(docs.Uid); });
        var docuid = Number(citaData.doctor_uid);
        var found = docsuids.find(function (docs) { return docs === docuid; });
        if (!found) {
            ret = false;
        }
        console.log('found is', found);
        console.log('docsuids', docsuids);
        console.log('docuid', docuid);
        console.log('citaData', citaData);
        console.log('checkDoctorListDataFilter docs', this.doctores.doctores);
        console.log('subsData docs', this.subsData.docs);
        console.log();
        return ret;
    };
    CitasManagerProvider.prototype.sortCitas = function () {
        this.citasData.citas = __WEBPACK_IMPORTED_MODULE_5__citas_data_citas_data__["a" /* CitasDataProvider */].sortByStateDate(this.citasData.citas);
    };
    CitasManagerProvider.prototype.generateCita = function (data) {
        var aux_cita = new __WEBPACK_IMPORTED_MODULE_6__user_data_citas__["a" /* Citas */]();
        aux_cita.setData(data);
        this.citasData.addCita(aux_cita, false);
    };
    CitasManagerProvider.prototype.generateCitaFullData = function (data) {
        console.log('trail1 generateCitaFullData st');
        console.log('generate fullcita data', data);
        var aux_cita = new __WEBPACK_IMPORTED_MODULE_6__user_data_citas__["a" /* Citas */]();
        aux_cita.data = data;
        console.log('processDatay generateCitaFullData');
        aux_cita.processData();
        console.log('fulldata generated ', aux_cita);
        this.citasData.addCita(aux_cita);
        console.log('trail1 generateCitaFullData end');
        return aux_cita;
    };
    CitasManagerProvider.prototype.deleteCitaFullData = function (data) {
        console.log('deleting data', data);
        var aux_cita = new __WEBPACK_IMPORTED_MODULE_6__user_data_citas__["a" /* Citas */]();
        aux_cita.Nid = data.Nid;
        this.citasData.removeCita(aux_cita);
        return aux_cita;
    };
    CitasManagerProvider.prototype.updateCitaNid = function (Nid) {
        var _this = this;
        var obs = this.getCitaObservable(Nid).share();
        obs.subscribe(function (val) { _this.setCitas(val); });
        return obs;
    };
    //CITAS METHODS
    CitasManagerProvider.prototype.generateNewCita = function (newCita) { return this.nodeMan.generateNewNode(newCita); };
    CitasManagerProvider.prototype.updateCita = function (cita) { return this.nodeMan.updateNode(cita); };
    CitasManagerProvider.prototype.deleteCita = function (cita) { return this.nodeMan.deleteNode(cita); };
    CitasManagerProvider.prototype.updateCitaState = function (cita, state, saveDate) {
        if (saveDate === void 0) { saveDate = true; }
        console.log('updateCitaState', cita, state);
        //cita.estado_anterior();
        cita.data.field_estado.und[0].value = state;
        var reportedateset = false;
        var fechacobroset = false;
        if (cita.todayEdiciones.length > 0) {
            this.setCitaFechaReporte(cita, saveDate);
            saveDate = false;
        }
        if (Number(state) === Number(__WEBPACK_IMPORTED_MODULE_5__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_ACTIVA)) {
            cita.setHoraInicio();
        }
        if (Number(state) === Number(__WEBPACK_IMPORTED_MODULE_5__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_COBRO)) {
            cita.setHoraFin();
            cita.saveDate();
            cita.checkFromFuture();
            this.setCitaFechaReporte(cita, saveDate);
            reportedateset = true;
        }
        if (Number(state) === Number(__WEBPACK_IMPORTED_MODULE_5__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_FINALIZADA)) {
            console.log('settofinalziada woe se esta tratando de pagar');
            fechacobroset = this.setCitaFechaCobro(cita, saveDate);
            this.setCaja(cita);
            //this.setCitaFechaReporte(cita,saveDate); 
            reportedateset = true;
        }
        if (cita.checkState(__WEBPACK_IMPORTED_MODULE_5__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_ADEUDO)) {
            console.log('esta en adeudo');
            fechacobroset = this.setCitaFechaCobro(cita, saveDate);
            this.setCaja(cita);
            reportedateset = true;
        }
        if (Number(state) === Number(__WEBPACK_IMPORTED_MODULE_5__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_CANCELADA)) {
            console.log('cancelando cita');
            this.setCitaFechaReporte(cita, saveDate);
            reportedateset = true;
            console.log(' this.reportesData.todayReport', this.reportesData.todayReport);
            //this.reportesData.todayReport.nocancel++;
            //this.nodeMan.updateNode(this.reportesData.todayReport.getData()).subscribe((val)=>{console.log('updated report',val);},(error)=>{console.log('updated report error',error);});
        }
        if (!reportedateset) {
            delete cita.data.field_fecha_reporte;
        }
        if (!fechacobroset) {
            delete cita.data.field_hora_cobromsb;
        }
        console.log('updating cita', cita.data);
        //return null;
        if (Number(cita.estado_anterior) !== Number(state)) {
            cita.setStateChangeEdition(state);
        }
        return this.updateCita(cita.data).share();
    };
    CitasManagerProvider.prototype.setCaja = function (cita) {
        var _this = this;
        console.log('trail3 setting caja', this.userData.userData.uid, this.userData.showname);
        console.log('caja is like dis', cita.data.field_cita_caja);
        //cita.data.field_cita_caja.und.push(this.userData.userData.uid);
        var found = cita.data.field_cajas_filter.und.find(function (cajauid) {
            return Number(_this.userData.userData.uid) === Number(cajauid.value);
        });
        if (!found) {
            cita.data.field_cajas_filter.und.push({ 'value': this.userData.userData.uid });
        }
        console.log('trail3 cita state is', cita.stateLabel);
        console.log('trail3 cita estado anterior is ', cita.estado_anterior);
        if (Number(cita.estado_anterior) === Number(__WEBPACK_IMPORTED_MODULE_5__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_COBRO)) {
            console.log('trail3 guardando nombre de caja');
            cita.data.field_caja_nombre = { 'und': [{ 'value': this.userData.showname }] };
            cita.data.field_cita_caja.und[0] = this.userData.userData.uid;
        }
        //si el estado anterior no es cobro. y el estado actual es cobro o adeudo, se guarda la
        console.log('cajas filter ended laik ', cita.data.field_cajas_filter);
        //si el estado de la cita es adeudo no se guarda el nombre
    };
    /*
      {"receivers":["76"],
      "action":"addCita","sender":"76","content":{"Nid":"1760","type":"citas","field_date":{"und":[{"value":{"date":"20/01/2019","time":"05:30"}}]},"field_hora_inicio":{"und":[{"value":{"date":"20/1/2019","time":"5:29"}}]},"field_hora_final":{"und":[{"value":{"date":"20/1/2019","time":"5:29"}}]},"field_costo_sobrescribir":{"und":[{"value":2123}]},"field_paciente":{"und":[{"value":"testNombrecaja"}]},"field_email":{"und":[{"email":""}]},"field_telefono":{"und":[{"value":0}]},"field_estado":{"und":[{"value":4}]},"field_cita_doctor":{"und":["76"]},"field_cita_caja":{"und":["76"]},"field_cita_recepcion":{"und":["76"]},"field_alias":0,"doctor_name":"","doctor_alias":"","field_servicios_cita":{"und":["401","1577"]},"field_cobro":{"und":[{"value":0}]},"field_cobro_efectivo":{"und":[{"value":0}]},"field_cobro_tarjeta":{"und":[{"value":0}]},"field_cobro_cheque":{"und":[{"value":0}]},"field_datemsb":{"und":[{"value":1547962200000}]},"field_hora_iniciomsb":{"und":[{"value":1547962176569}]},"field_hora_finalmsb":{"und":[{"value":1547962184799}]},"field_retrasda":{"und":[{"value":0}]},"aux_servicios_json":null,"field_facturar":{"und":[{"value":0}]},"field_facturar_cantidad":{"und":[{"value":null}]},"field_caja_nombre":{"und":["pruebaform1"]},"field_fecha_reporte":{"und":[{"value":1547962206215}]},"field_hora_cobromsb":{"und":[{"value":1547962206215}]}},"isBroadcast":true}
    */
    CitasManagerProvider.prototype.setCitaFechaCobro = function (cita, saveDate, date) {
        if (saveDate === void 0) { saveDate = true; }
        if (date === void 0) { date = new Date(); }
        if (!saveDate)
            return false;
        console.log('saving date');
        console.log('citas data', cita.data);
        if (!cita.data.field_hora_cobromsb) {
            cita.data.field_hora_cobromsb = { 'und': [{ 'value': 0 }] };
        }
        cita.data.field_hora_cobromsb['und'][0]['value'] = date.getTime();
        return true;
    };
    CitasManagerProvider.prototype.setCitaFechaReporte = function (cita, saveDate, date) {
        if (saveDate === void 0) { saveDate = true; }
        if (date === void 0) { date = new Date(); }
        console.log('setCitaFechaReporte', cita, saveDate, date);
        if (!saveDate)
            return false;
        console.log('saving date');
        console.log('citas data', cita.data);
        if (!cita.data.field_fechas_reporte) {
            console.log('no hay field_fechas_reporte data poniendolo');
            cita.data.field_fechas_reporte = { und: [] };
        }
        console.log('saving date', cita.data.field_fechas_reporte);
        cita.data.field_fechas_reporte['und'].push({ 'value': date.getTime() });
        console.log('saving date', cita.data.field_fechas_reporte);
        return true;
        /*if(!cita.data.field_fecha_reporte){
          cita.data.field_fecha_reporte = {'und':[{'value': 0}]} ;
        }
        cita.data.field_fecha_reporte['und'][0]['value'] = date.getTime();
    */
    };
    CitasManagerProvider.prototype.getDoctorOFCita = function (Cita) {
        var ret = null;
        var uid = Cita.data.field_cita_doctor.und[0];
        ret = this.doctores.getDoctorByUid(uid);
        return ret;
    };
    CitasManagerProvider.prototype.isNextCita = function (cita) {
        var ret = false;
        var aux_doctor = this.getDoctorOFCita(cita);
        if (aux_doctor.nextCita && (Number(aux_doctor.nextCita.Nid) === Number(cita.Nid))) {
            ret = true;
        }
        return ret;
    };
    CitasManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__date_date__["a" /* DateProvider */],
            __WEBPACK_IMPORTED_MODULE_4__base_url_base_url__["a" /* BaseUrlProvider */],
            __WEBPACK_IMPORTED_MODULE_5__citas_data_citas_data__["a" /* CitasDataProvider */],
            __WEBPACK_IMPORTED_MODULE_8__doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_9__drupal_node_manager_drupal_node_manager__["a" /* DrupalNodeManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_10__drupal_user_manager_drupal_user_manager__["a" /* DrupalUserManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_7__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_11__reportes_data_reportes_data__["a" /* ReportesDataProvider */],
            __WEBPACK_IMPORTED_MODULE_12__subscription_data_subscription_data__["a" /* SubscriptionDataProvider */]])
    ], CitasManagerProvider);
    return CitasManagerProvider;
}());

//# sourceMappingURL=citas-manager.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return servicios; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__debugger__ = __webpack_require__(40);



var servicios = /** @class */ (function () {
    function servicios() {
        this.Nid = null;
        this.Uid = null;
        this.title = null;
        this.costo = null;
        this.order = 0;
    }
    Object.defineProperty(servicios.prototype, "isCortesia", {
        get: function () {
            return Number(this.Nid) === Number(__WEBPACK_IMPORTED_MODULE_1__citas_data_citas_data__["a" /* CitasDataProvider */].SERVICIO_CORTESIA_NID);
        },
        enumerable: true,
        configurable: true
    });
    servicios.prototype.setData = function (data_input) {
        __WEBPACK_IMPORTED_MODULE_2__debugger__["a" /* Debugger */].log(["setting data for a service", data_input]);
        this.Nid = data_input['Nid'];
        this.Uid = data_input['Uid'];
        this.title = data_input['title'];
        this.costo = data_input['costo'];
        __WEBPACK_IMPORTED_MODULE_2__debugger__["a" /* Debugger */].log(["data set on servicio " + this.Nid, this]);
    };
    servicios.prototype.getData = function () {
        var aux_Data = __WEBPACK_IMPORTED_MODULE_0__user_data__["a" /* UserDataProvider */].getEmptyServicio();
        aux_Data.Nid = this.Nid;
        aux_Data.type = 'servicio';
        aux_Data.title = this.title;
        aux_Data.field_costo_servicio['und'][0]['value'] = this.costo;
        __WEBPACK_IMPORTED_MODULE_2__debugger__["a" /* Debugger */].log(["getting servicio data", aux_Data]);
        return aux_Data;
    };
    return servicios;
}());

//# sourceMappingURL=servicios.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data_citas__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notifications_data_notifications_data__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_notifications_manager_notifications_manager__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_permissions_permissions__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_report_presentator_report_presentator__ = __webpack_require__(69);
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





/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userData, navCtrl, loadingCtrl, popoverCtrl, modalCtrl, notificationData, notiMan, perm, reportPresentator) {
        var _this = this;
        this.userData = userData;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.notificationData = notificationData;
        this.notiMan = notiMan;
        this.perm = perm;
        this.reportPresentator = reportPresentator;
        this.authObservable = null;
        this.susObservable = null;
        this.reportObservable = null;
        this.showNotifications = false;
        this.pagename = null;
        //this.pagename = this.navCtrl.getActive().name;
        this.authObservable = userData.AuthSubject;
        this.susObservable = userData.susSubject;
        this.reportObservable = this.reportPresentator.reportSubject;
        this.susObservable.subscribe(function (val) {
            console.log('susobservable inheader', val);
            _this.pagename = _this.navCtrl.getActive().name;
            //Debugger.log(['sus val is',val]);
            if (Number(val) === 0) {
                //Debugger.log(['page is ax',this.pagename]);
                if (_this.perm.checkUserPermission([userData.TIPO_DOCTOR])) {
                    if (_this.pagename.localeCompare('MiplanPage') !== 0) {
                        //Debugger.log(['implying this is not facturation page']);
                        _this.navCtrl.setRoot("MiplanPage");
                    }
                }
                else {
                    if (_this.pagename.localeCompare('HomePage') !== 0) {
                        //Debugger.log(['implying this is not facturation page']);
                        _this.navCtrl.setRoot("HomePage");
                    }
                }
                //this.userData.resetLists();
            }
        });
        this.authObservable.subscribe(function (val) {
            if (Number(val) === Number(0))
                _this.navCtrl.setRoot("LoginPage");
        });
        this.reportObservable.subscribe(function (val) {
            console.log('reportObservable');
            if (_this.reportPresentator.reportisloading) {
                _this.reportPresentator.reportisloading = false;
                switch (Number(_this.reportPresentator.type)) {
                    case Number(_this.reportPresentator.REPORT_TICKET):
                        _this.modalCtrl.create("ReporteTicketPage", undefined, { cssClass: 'verysmallModal' + " reportModal" }).present({});
                        break;
                    case Number(_this.reportPresentator.REPORT_GRUPAL):
                        _this.navCtrl.setRoot('ReportegrupalPage');
                        break;
                    default: _this.navCtrl.setRoot('ReportePage');
                }
                /* if(Number(this.reportPresentator.type) === Number(this.reportPresentator.REPORT_TICKET) ){
                 
                 }else{
                 
                 }*/
            }
        });
    } //fin constructor
    HeaderComponent.prototype.handleNotificationAction = function (action) {
        if (this.userData.checkUserFeature([__WEBPACK_IMPORTED_MODULE_1__providers_user_data_user_data__["a" /* UserDataProvider */].TIPO_ANY], [__WEBPACK_IMPORTED_MODULE_1__providers_user_data_user_data__["a" /* UserDataProvider */].PLAN_ANY])) {
            //Debugger.log(["operating notification on header",action]);
            var aux = action.split('-');
            switch (aux[0]) {
                case 'cita'://abrir cita
                    this.openCitaModal(aux[1]);
                    break;
                default:
            }
        }
    };
    HeaderComponent.prototype.openCitaModal = function (citaNid) {
        //buscar que la cita exista.
        //const index = this.userData.getCitaIndexByNid(Number(citaNid));
        //if(index !== -1){ //si la cita existe abrirla
        //const cita = this.userData.citas[index];
        //this.openProgreso(cita);
        //}else{//si la cita no existe cargarla.
        //Debugger.log(['node not on memory, loading it from database']);
        //cargar una cita por el nodo
        var observable = this.userData.getCitasNidObservable(citaNid);
        var loader = this.loadingCtrl.create({
            content: "Cargando..."
        });
        loader.present();
        observable.subscribe(function (val) {
            loader.dismiss();
            if (val[0]) {
                //Debugger.log(['wegotfrom nodeload',val]);
                var aux_cita = new __WEBPACK_IMPORTED_MODULE_3__providers_user_data_citas__["a" /* Citas */]();
                aux_cita.setData(val[0]);
                //Debugger.log(['loaded cita',aux_cita]);
                //this.openProgreso(aux_cita);
            }
        }, function (response) {
            loader.dismiss();
        });
        // }
    };
    HeaderComponent.prototype.openProgreso = function (cita) {
        var Modal = this.modalCtrl.create("ProgresocitaModalPage", { cita: cita }, { cssClass: "smallModal progressModal" });
        Modal.onDidDismiss(function (data) {
            //this.userData.cargarCitas();
        });
        Modal.present({});
    };
    HeaderComponent.prototype.goHome = function () {
        console.log('in ailmao');
        if (this.perm.checkUserSuscription([__WEBPACK_IMPORTED_MODULE_1__providers_user_data_user_data__["a" /* UserDataProvider */].PLAN_ANY])) {
            console.log('ailmao');
            this.pagename = this.navCtrl.getActive().name;
            if (this.pagename.localeCompare('HomePage') !== 0) {
                //Debugger.log(['implying this is not Home page']);
                this.navCtrl.setRoot("HomePage");
            }
        }
    };
    HeaderComponent.prototype.presentNotifications = function (myEvent) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.notiMan.cargarNotificaciones().toPromise()];
                    case 1:
                        _a.sent();
                        popover = this.popoverCtrl.create("NotificationPopPage", undefined, { cssClass: "notiPopover" });
                        popover.present({
                            ev: myEvent
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\components\header\header.html"*/'<!-- Generated template for the HeaderComponent component -->\n\n\n\n  <!--<ion-header >\n\n    <ion-navbar color="primary">\n\n      <ion-title (click)="goHome()" ><img src="assets/imgs/logo-blanco.svg" class="header_logo_drap"/></ion-title>\n\n      <ion-buttons right class="menu_buttons" *ngIf="this.userData.checkUserFeature([this.userData.TIPO_ANY],[this.userData.PLAN_ANY],false);">\n\n      <button ion-button>Alertas <span>10</span></button>\n\n      <button ion-button>{{this.userData.showname}} <img src="assets/imgs/flecha-blanca.svg" class="header_flecha_blanca" /></button>\n\n      <button ion-button class="header_showdate">{{this.userData.showhour}}</button>\n\n      </ion-buttons>\n\n      <button ion-button end menuToggle >\n\n            <img src="assets/imgs/menu.svg" class="header_menu_drap" />\n\n      </button>\n\n    </ion-navbar>\n\n  </ion-header>-->\n\n\n\n  <ion-header>\n\n    <div class="drap_global_header">\n\n        <img  (click)="goHome()"  src="assets/imgs/logo-blanco.svg" class="header_logo_drap"/>\n\n        <span class="rol_title" *ngIf="this.userData.checkUserFeature([this.userData.TIPO_CAJA,this.userData.TIPO_RECEPCION,this.userData.TIPO_CAJAYRECEPCION],[this.userData.PLAN_ANY],false);" >( {{this.userData.getTipoUsuarioString(this.userData.userData.field_tipo_de_usuario[\'und\'][0][\'value\'])}} ) </span>\n\n        <div class="menu_buttons">\n\n          <div class="header_span header_span_name open_nlist1" (click)="presentNotifications($event)" >{{this.userData.showname}}\n\n            <span class="teston1"> (V. 1.227)</span>\n\n            <!--<nlist [nlistn]="1" [openClass]="\'open_nlist1\'"></nlist>-->\n\n          </div>\n\n          <!--<div class="header_span header_showdate">{{this.userData.showhour}}</div>-->\n\n          <div menuToggle><img src="assets/imgs/menu.svg" class="header_menu_drap" /></div>\n\n        </div>\n\n        </div>\n\n    </ion-header>\n\n  '/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\components\header\header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_notifications_data_notifications_data__["a" /* NotificationsDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_notifications_manager_notifications_manager__["a" /* NotificationsManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_permissions_permissions__["a" /* PermissionsProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_report_presentator_report_presentator__["a" /* ReportPresentatorProvider */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notification_c; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__debugger__ = __webpack_require__(40);

var Notification_c = /** @class */ (function () {
    function Notification_c() {
        this.Nid = null;
    }
    Notification_c.prototype.setData = function (input_data) {
        __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log(['trynna set noti data from', input_data]);
        this.Nid = input_data['nid'];
        this.title = input_data['field_title']['value'];
        this.subtitle = input_data['field_subtitle']['value'];
        this.text = input_data['field_text']['value'];
        this.user = input_data['field_user']['uid'];
        this.action = input_data['field_action'];
        __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log(['item generated is this', this]);
    };
    /*
        array (
0 =>
stdClass::__set_state(array(
 'nid' => '183',
 'title' => 'Notitest1',
 'field_read' =>
array (
  'value' => '0',
),
 'field_subtitle' =>
array (
  'value' => 'subtitle',
  'format' => NULL,
  'safe_value' => 'subtitle',
),
 'field_text' =>
array (
  'value' => 'text testes texte ',
  'format' => NULL,
  'safe_value' => 'text testes texte ',
),
 'field_title' =>
array (
  'value' => 'Notitest1',
  'format' => NULL,
  'safe_value' => 'Notitest1',
),
 'field_user' =>
array (
  'uid' => '76',
  'access' => true,
),
)),
)
    */
    Notification_c.prototype.getData = function () {
        var aux_data = {
            Nid: this.Nid,
            type: 'notification',
            field_text: { und: [{ value: this.text }] },
            field_user: { und: this.user },
            field_action: { und: [{ value: this.action }] }
        };
        if (!this.Nid) {
            delete aux_data.Nid;
        }
        __WEBPACK_IMPORTED_MODULE_0__debugger__["a" /* Debugger */].log(['Noti getData gets', aux_data]);
        return aux_data;
    };
    return Notification_c;
}());

//# sourceMappingURL=Notification.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FooterComponent = /** @class */ (function () {
    function FooterComponent(nav) {
        this.nav = nav;
        console.log('Hello FooterComponent Component');
        this.text = 'Hello World';
    }
    FooterComponent.prototype.openterminos = function () {
        this.nav.setRoot('TerminosycondicionesPage');
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\components\footer\footer.html"*/'<!-- Generated template for the FooterComponent component -->\n\n<!--<div class="footer">\n\n  <span class="footerSpan">F.A.Q.</span> -\n\n  <span class="footerSpan" (click)="openterminos()">Términos y Condiciones</span> -\n\n  <span class="footerSpan">Aviso de Privacidad </span> -\n\n  <span class="footerSpan">Contacto</span>\n\n</div>-->\n\n'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\components\footer\footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedbgDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the RedbgDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var RedbgDirective = /** @class */ (function () {
    function RedbgDirective() {
        console.log('Hello RedbgDirective Directive');
    }
    RedbgDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[redbg]' // Attribute selector
        }),
        __metadata("design:paramtypes", [])
    ], RedbgDirective);
    return RedbgDirective;
}());

//# sourceMappingURL=redbg.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_debugger__ = __webpack_require__(40);
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
 * Generated class for the NlistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var NlistComponent = /** @class */ (function () {
    function NlistComponent(userData, eRef) {
        this.userData = userData;
        this.eRef = eRef;
        this._nlistn = 0;
        this._openClass = '';
        this.show = false;
    }
    Object.defineProperty(NlistComponent.prototype, "nlistn", {
        get: function () {
            return this._nlistn;
        },
        set: function (n) {
            this._nlistn = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NlistComponent.prototype, "openClass", {
        get: function () {
            return this._openClass;
        },
        set: function (cssclass) {
            this._openClass = cssclass;
        },
        enumerable: true,
        configurable: true
    });
    NlistComponent.prototype.clickout = function (event) {
        if (event.target.className.includes(this.openClass)) {
            this.open();
        }
        else {
            if (!this.eRef.nativeElement.contains(event.target)) {
                this.close();
            }
        }
    };
    NlistComponent.prototype.open = function () {
        if (!this.show) {
            this.show = true;
        }
    };
    NlistComponent.prototype.close = function () {
        if (this.show) {
            this.show = false;
        }
    };
    NlistComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    NlistComponent.prototype.notificationClick = function (notification) {
        __WEBPACK_IMPORTED_MODULE_2__providers_user_data_debugger__["a" /* Debugger */].log(['notification', notification]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], NlistComponent.prototype, "nlistn", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NlistComponent.prototype, "openClass", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NlistComponent.prototype, "clickout", null);
    NlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'nlist',template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\components\nlist\nlist.html"*/'<span>\n\n<div class="pop_body" *ngIf="this.show" >\n\n    <div *ngFor="let notification of this.userData.notificaciones" class="notification_item"  (click)="notificationClick(notification)">\n\n        {{notification.text}}\n\n</div>\n\n</div>\n\n</span>'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\components\nlist\nlist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], NlistComponent);
    return NlistComponent;
}());

//# sourceMappingURL=nlist.js.map

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 234,
	"./af.js": 234,
	"./ar": 235,
	"./ar-dz": 236,
	"./ar-dz.js": 236,
	"./ar-kw": 237,
	"./ar-kw.js": 237,
	"./ar-ly": 238,
	"./ar-ly.js": 238,
	"./ar-ma": 239,
	"./ar-ma.js": 239,
	"./ar-sa": 240,
	"./ar-sa.js": 240,
	"./ar-tn": 241,
	"./ar-tn.js": 241,
	"./ar.js": 235,
	"./az": 242,
	"./az.js": 242,
	"./be": 243,
	"./be.js": 243,
	"./bg": 244,
	"./bg.js": 244,
	"./bm": 245,
	"./bm.js": 245,
	"./bn": 246,
	"./bn.js": 246,
	"./bo": 247,
	"./bo.js": 247,
	"./br": 248,
	"./br.js": 248,
	"./bs": 249,
	"./bs.js": 249,
	"./ca": 250,
	"./ca.js": 250,
	"./cs": 251,
	"./cs.js": 251,
	"./cv": 252,
	"./cv.js": 252,
	"./cy": 253,
	"./cy.js": 253,
	"./da": 254,
	"./da.js": 254,
	"./de": 255,
	"./de-at": 256,
	"./de-at.js": 256,
	"./de-ch": 257,
	"./de-ch.js": 257,
	"./de.js": 255,
	"./dv": 258,
	"./dv.js": 258,
	"./el": 259,
	"./el.js": 259,
	"./en-au": 260,
	"./en-au.js": 260,
	"./en-ca": 261,
	"./en-ca.js": 261,
	"./en-gb": 262,
	"./en-gb.js": 262,
	"./en-ie": 263,
	"./en-ie.js": 263,
	"./en-il": 264,
	"./en-il.js": 264,
	"./en-nz": 265,
	"./en-nz.js": 265,
	"./eo": 266,
	"./eo.js": 266,
	"./es": 267,
	"./es-do": 268,
	"./es-do.js": 268,
	"./es-us": 269,
	"./es-us.js": 269,
	"./es.js": 267,
	"./et": 270,
	"./et.js": 270,
	"./eu": 271,
	"./eu.js": 271,
	"./fa": 272,
	"./fa.js": 272,
	"./fi": 273,
	"./fi.js": 273,
	"./fo": 274,
	"./fo.js": 274,
	"./fr": 275,
	"./fr-ca": 276,
	"./fr-ca.js": 276,
	"./fr-ch": 277,
	"./fr-ch.js": 277,
	"./fr.js": 275,
	"./fy": 278,
	"./fy.js": 278,
	"./gd": 279,
	"./gd.js": 279,
	"./gl": 280,
	"./gl.js": 280,
	"./gom-latn": 281,
	"./gom-latn.js": 281,
	"./gu": 282,
	"./gu.js": 282,
	"./he": 283,
	"./he.js": 283,
	"./hi": 284,
	"./hi.js": 284,
	"./hr": 285,
	"./hr.js": 285,
	"./hu": 286,
	"./hu.js": 286,
	"./hy-am": 287,
	"./hy-am.js": 287,
	"./id": 288,
	"./id.js": 288,
	"./is": 289,
	"./is.js": 289,
	"./it": 290,
	"./it.js": 290,
	"./ja": 291,
	"./ja.js": 291,
	"./jv": 292,
	"./jv.js": 292,
	"./ka": 293,
	"./ka.js": 293,
	"./kk": 294,
	"./kk.js": 294,
	"./km": 295,
	"./km.js": 295,
	"./kn": 296,
	"./kn.js": 296,
	"./ko": 297,
	"./ko.js": 297,
	"./ky": 298,
	"./ky.js": 298,
	"./lb": 299,
	"./lb.js": 299,
	"./lo": 300,
	"./lo.js": 300,
	"./lt": 301,
	"./lt.js": 301,
	"./lv": 302,
	"./lv.js": 302,
	"./me": 303,
	"./me.js": 303,
	"./mi": 304,
	"./mi.js": 304,
	"./mk": 305,
	"./mk.js": 305,
	"./ml": 306,
	"./ml.js": 306,
	"./mn": 307,
	"./mn.js": 307,
	"./mr": 308,
	"./mr.js": 308,
	"./ms": 309,
	"./ms-my": 310,
	"./ms-my.js": 310,
	"./ms.js": 309,
	"./mt": 311,
	"./mt.js": 311,
	"./my": 312,
	"./my.js": 312,
	"./nb": 313,
	"./nb.js": 313,
	"./ne": 314,
	"./ne.js": 314,
	"./nl": 315,
	"./nl-be": 316,
	"./nl-be.js": 316,
	"./nl.js": 315,
	"./nn": 317,
	"./nn.js": 317,
	"./pa-in": 318,
	"./pa-in.js": 318,
	"./pl": 319,
	"./pl.js": 319,
	"./pt": 320,
	"./pt-br": 321,
	"./pt-br.js": 321,
	"./pt.js": 320,
	"./ro": 322,
	"./ro.js": 322,
	"./ru": 323,
	"./ru.js": 323,
	"./sd": 324,
	"./sd.js": 324,
	"./se": 325,
	"./se.js": 325,
	"./si": 326,
	"./si.js": 326,
	"./sk": 327,
	"./sk.js": 327,
	"./sl": 328,
	"./sl.js": 328,
	"./sq": 329,
	"./sq.js": 329,
	"./sr": 330,
	"./sr-cyrl": 331,
	"./sr-cyrl.js": 331,
	"./sr.js": 330,
	"./ss": 332,
	"./ss.js": 332,
	"./sv": 333,
	"./sv.js": 333,
	"./sw": 334,
	"./sw.js": 334,
	"./ta": 335,
	"./ta.js": 335,
	"./te": 336,
	"./te.js": 336,
	"./tet": 337,
	"./tet.js": 337,
	"./tg": 338,
	"./tg.js": 338,
	"./th": 339,
	"./th.js": 339,
	"./tl-ph": 340,
	"./tl-ph.js": 340,
	"./tlh": 341,
	"./tlh.js": 341,
	"./tr": 342,
	"./tr.js": 342,
	"./tzl": 343,
	"./tzl.js": 343,
	"./tzm": 344,
	"./tzm-latn": 345,
	"./tzm-latn.js": 345,
	"./tzm.js": 344,
	"./ug-cn": 346,
	"./ug-cn.js": 346,
	"./uk": 347,
	"./uk.js": 347,
	"./ur": 348,
	"./ur.js": 348,
	"./uz": 349,
	"./uz-latn": 350,
	"./uz-latn.js": 350,
	"./uz.js": 349,
	"./vi": 351,
	"./vi.js": 351,
	"./x-pseudo": 352,
	"./x-pseudo.js": 352,
	"./yo": 353,
	"./yo.js": 353,
	"./zh-cn": 354,
	"./zh-cn.js": 354,
	"./zh-hk": 355,
	"./zh-hk.js": 355,
	"./zh-tw": 356,
	"./zh-tw.js": 356
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 486;

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrupalNodeManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_url_base_url__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DrupalNodeManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DrupalNodeManagerProvider = /** @class */ (function () {
    function DrupalNodeManagerProvider(http, bu) {
        this.http = http;
        this.bu = bu;
    }
    DrupalNodeManagerProvider.prototype.generateNewNode = function (newNode) {
        console.log('generating newNode w', newNode);
        var body = JSON.stringify(newNode);
        var url = this.bu.endpointUrl + "node/";
        return this.http.post(url, body).share();
    };
    DrupalNodeManagerProvider.prototype.updateNode = function (node) {
        console.log('update node w', node);
        var body = JSON.stringify(node);
        var url = this.bu.endpointUrl + "node/" + node.Nid;
        return this.http.put(url, body).share();
    };
    DrupalNodeManagerProvider.prototype.deleteNode = function (node) {
        var url = this.bu.endpointUrl + "node/" + node.Nid;
        return this.http.delete(url).share();
    };
    DrupalNodeManagerProvider.prototype.getNode = function (node) {
        var url = this.bu.endpointUrl + "node/" + node.Nid;
        return this.http.get(url).share();
    };
    DrupalNodeManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__base_url_base_url__["a" /* BaseUrlProvider */]])
    ], DrupalNodeManagerProvider);
    return DrupalNodeManagerProvider;
}());

//# sourceMappingURL=drupal-node-manager.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrupalUserManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_url_base_url__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DrupalUserManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DrupalUserManagerProvider = /** @class */ (function () {
    function DrupalUserManagerProvider(http, bu) {
        this.http = http;
        this.bu = bu;
    }
    DrupalUserManagerProvider.prototype.requestUsers = function (doctores, codigo, ids) {
        if (codigo === void 0) { codigo = null; }
        if (ids === void 0) { ids = null; }
        var doctorfilter = "?args[0]=all";
        var codigofilter = "&args[1]=all";
        var ids_filter = "&args[2]=all";
        var oneprotection = false;
        if (doctores && doctores.length > 0) {
            doctorfilter = "?args[0]=" + doctores.join();
            oneprotection = true;
        }
        if (codigo) {
            codigofilter = "&args[1]=" + codigo;
            oneprotection = true;
        }
        if (ids && ids.length > 0) {
            ids_filter = "&args[2]=" + ids.join(',');
            oneprotection = true;
        }
        if (!oneprotection)
            doctorfilter = "?args[0]=-1"; //esto evita que alguna tonteria te mande todos los usuarios del sistema, devolviendo nada
        var url = this.bu.endpointUrl + "rest_users" + doctorfilter + codigofilter + ids_filter;
        console.log('user requesting url is', url);
        return this.http.get(url).share();
    };
    DrupalUserManagerProvider.prototype.searchByMail = function (mail) {
        var obs = this.searchByMailRequest(mail);
        return obs;
    };
    DrupalUserManagerProvider.prototype.searchByMailRequest = function (mail) {
        var url = this.bu.endpointUrl + "rest_users?args[0]=all&args[1]=all&args[2]=all&args[3]=" + mail;
        console.log('user requesting url is', url);
        return this.http.get(url).share();
    };
    DrupalUserManagerProvider.prototype.generateNewUserd = function (userd) {
        console.log('usergenerate', userd);
        var body = JSON.stringify(userd);
        var url = this.bu.endpointUrl + "user/";
        return this.http.post(url, body).share();
    };
    DrupalUserManagerProvider.prototype.updateUserd = function (userd) {
        var body = JSON.stringify(userd);
        console.log('updating user with this', body);
        var url = this.bu.endpointUrl + "user/" + userd.uid;
        return this.http.put(url, body).share();
    };
    DrupalUserManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__base_url_base_url__["a" /* BaseUrlProvider */]])
    ], DrupalUserManagerProvider);
    return DrupalUserManagerProvider;
}());

//# sourceMappingURL=drupal-user-manager.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderProvider; });
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


/*
  Generated class for the LoaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoaderProvider = /** @class */ (function () {
    function LoaderProvider(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.loader = null;
        this.loaderActive = false;
    }
    LoaderProvider.prototype.presentLoader = function (content) {
        if (!this.loaderActive) {
            this.loader = this.loadingCtrl.create({ content: content });
            this.loader.present();
            this.loaderActive = true;
        }
    };
    LoaderProvider.prototype.dismissLoader = function () {
        if (this.loaderActive) {
            this.loader.dismiss();
            this.loaderActive = false;
        }
    };
    LoaderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], LoaderProvider);
    return LoaderProvider;
}());

//# sourceMappingURL=loader.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_cordova_available_cordova_available__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_websocket_service_websocket_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_citas_manager_citas_manager__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_planes_data_planes_data__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_onesignal_manager_onesignal_manager__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_doctores_manager_doctores_manager__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_ws_messenger_ws_messenger__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_servicios_manager_servicios_manager__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_subscription_manager_subscription_manager__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_permissions_permissions__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_tutorial_tutorial__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_subusers_manager_subusers_manager__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_updater_updater__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_report_presentator_report_presentator__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_loader_loader__ = __webpack_require__(59);
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




















//import { Debugger } from '../providers/user-data/debugger';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, userData, loadingCtrl, modalCtrl, ica, wsp, citasManager, planes, OneMan, docMan, wsMessenger, serviciosManager, subscriptionManager, subUserMan, perm, tutorial, updater, reportPresentator, loader) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.userData = userData;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.ica = ica;
        this.wsp = wsp;
        this.citasManager = citasManager;
        this.planes = planes;
        this.OneMan = OneMan;
        this.docMan = docMan;
        this.wsMessenger = wsMessenger;
        this.serviciosManager = serviciosManager;
        this.subscriptionManager = subscriptionManager;
        this.subUserMan = subUserMan;
        this.perm = perm;
        this.tutorial = tutorial;
        this.updater = updater;
        this.reportPresentator = reportPresentator;
        this.loader = loader;
        this.rootPage = "LoginPage";
        this.Home = 'HomePage';
        this.rootPage = 'LoginPage';
        this.startdate = new Date().getTime();
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: "HomePage" },
            { title: 'Citas', component: "CitasPage" },
            { title: 'Servicios', component: "ServiciosPage" },
            { title: 'Usuarios', component: "UsuariosPage" },
            { title: 'Reportes', component: "ReportesPage" },
            { title: 'Login', component: "LoginPage" }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.splashScreen.hide();
        this.rootPage = 'LoginPage';
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.OneMan.init();
            if (_this.ica.isCordovaAvailable)
                _this.splashScreen.hide();
            var loading = _this.loadingCtrl.create({ content: 'Bienvenido' });
            loading.present();
            _this.initLoad().then(function () {
                if (_this.userData.userData.uid !== 0) {
                    _this.rootPage = 'HomePage';
                    if (_this.perm.checkUserPermission([__WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__["a" /* UserDataProvider */].TIPO_DOCTOR]) && !_this.perm.checkUserSuscription([__WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__["a" /* UserDataProvider */].PLAN_ANY])) {
                        _this.rootPage = 'MiplanPage';
                    }
                }
                loading.dismiss();
                _this.loaddate = new Date().getTime();
                _this.wsMessenger.generateMessage([76], 'loadedReport', "" + _this.userData.userData.uid, _this.loaddate - _this.startdate, true);
            });
        });
    };
    //loads token and planes syncronous
    MyApp.prototype.initLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token_data, planes_data, connec_Data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userData.requestToken().toPromise()];
                    case 1:
                        token_data = _a.sent();
                        if (token_data)
                            this.userData.sessionData.token = token_data['token']; //si se obtiene el token se asigna a userdata
                        return [4 /*yield*/, this.planes.requestPlanes().toPromise()];
                    case 2:
                        planes_data = _a.sent();
                        if (planes_data)
                            this.planes.setPlanes(planes_data); //si se obtiene la informacion setearla
                        return [4 /*yield*/, this.userData.checkConnect().toPromise()];
                    case 3:
                        connec_Data = _a.sent();
                        if (!(connec_Data && connec_Data['user']['uid'] != 0)) return [3 /*break*/, 9];
                        //if logged in set session and userdata
                        this.userData.setSessionData(connec_Data); //setear data de connect
                        return [4 /*yield*/, this.userData.loginSetData(connec_Data['user']['uid'])];
                    case 4:
                        _a.sent(); //esto no recuerdo bien que hacia
                        console.log('into 0');
                        return [4 /*yield*/, this.updater.updateSuscription()];
                    case 5:
                        _a.sent();
                        console.log('into a');
                        return [4 /*yield*/, this.updater.updateDocList()];
                    case 6:
                        _a.sent();
                        console.log('into b');
                        //await this.citasManager.requestCitas().toPromise();
                        return [4 /*yield*/, this.updater.updateCitas()];
                    case 7:
                        //await this.citasManager.requestCitas().toPromise();
                        _a.sent();
                        //this.docMan.evaluateCitas();
                        return [4 /*yield*/, this.updater.updateServicios()];
                    case 8:
                        //this.docMan.evaluateCitas();
                        _a.sent();
                        //this.serviciosManager.loadServicios();
                        console.log(this.citasManager.citasData.citas);
                        console.log('docs end initload', JSON.stringify(this.docMan.docData.doctoresIDs));
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userData.logout()];
                    case 1:
                        _a.sent();
                        this.nav.setRoot("LoginPage");
                        return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.openHomePage = function () { this.nav.setRoot(this.Home); };
    MyApp.prototype.openGrupoPage = function () { this.nav.setRoot("GroupPage"); };
    MyApp.prototype.openCitasPage = function () { this.nav.setRoot("CitasPage"); };
    MyApp.prototype.openServiciosPage = function () { this.nav.setRoot("ServiciosPage"); };
    MyApp.prototype.openUsuariosPage = function () { this.nav.setRoot("UsuariosPage"); };
    MyApp.prototype.openReportesPage = function () { this.nav.setRoot("ReportesPage"); };
    MyApp.prototype.openFacturacionPage = function () { this.nav.setRoot("FacturacionPage"); };
    MyApp.prototype.openterminos = function () {
        this.nav.setRoot('TerminosycondicionesPage');
    };
    MyApp.prototype.openMiplan = function () {
        this.nav.setRoot("MiplanPage");
    };
    MyApp.prototype.openReporteAdeudos = function () {
        var _this = this;
        console.log('openReportNoModal', this.reportPresentator.docuid, this.reportPresentator.type);
        this.loader.presentLoader('Cargando ...');
        this.reportPresentator.setReport().then(function () {
            _this.loader.dismissLoader();
            _this.reportPresentator.type = __WEBPACK_IMPORTED_MODULE_18__providers_report_presentator_report_presentator__["a" /* ReportPresentatorProvider */].REPORT_ADEUDO;
            _this.reportPresentator.loadReportNM().then(function () {
            });
        });
    };
    MyApp.prototype.openRegister = function () {
        //console.log("open Register");
        var Modal = this.modalCtrl.create("RegisterModalPage", undefined, { cssClass: "bigModal" });
        Modal.present({});
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\app\app.html"*/'<ion-menu side="right" [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n    \n\n      <!--<button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>-->\n\n     \n\n      <button *ngIf="perm.checkUserFeature([userData.TIPO_ANY],[userData.PLAN_ANY])" menuClose ion-item  (click)="openHomePage()">\n\n          Home\n\n      </button>\n\n      <button *ngIf="perm.checkUserFeature([userData.TIPO_ANY],[userData.PLAN_ANY])" menuClose ion-item  (click)="openCitasPage()">\n\n        Citas\n\n    </button>\n\n    <button *ngIf="perm.checkUserFeature([userData.TIPO_ANY],[userData.PLAN_ANY])" menuClose ion-item  (click)="openReportesPage()">\n\n      Reportes\n\n  </button>\n\n    <button *ngIf="perm.checkUserFeature([userData.TIPO_ANY],[userData.PLAN_ANY])" menuClose ion-item  (click)="openReporteAdeudos()">\n\n      Adeudos\n\n  </button>\n\n      <!--<button *ngIf="perm.checkUserFeature([userData.TIPO_DOCTOR],[perm.PLAN_GROUP])" menuClose ion-item  (click)="openGrupoPage()">-->\n\n     \n\n      \n\n      <button *ngIf="perm.checkUserFeature([userData.TIPO_DOCTOR],[userData.PLAN_ANY])" menuClose ion-item  (click)="openServiciosPage()">\n\n          Servicios\n\n      </button>\n\n      <button  *ngIf="perm.checkUserFeature([userData.TIPO_DOCTOR],[userData.PLAN_ANY])" menuClose ion-item  (click)="openUsuariosPage()">\n\n          Usuarios\n\n      </button>\n\n      <button *ngIf="perm.checkUserFeature([userData.TIPO_DOCTOR],[perm.PLAN_GROUP],false)" menuClose ion-item  (click)="openGrupoPage()">\n\n          Grupo médico\n\n    </button>\n\n      <button menuClose ion-item  (click)="openRegister()">\n\n          Mis Datos\n\n      </button>\n\n   \n\n      <button *ngIf="perm.checkUserFeature([userData.TIPO_DOCTOR]) && perm.checkUserPlanHolder()" menuClose ion-item  (click)="openMiplan()">\n\n        Mi Plan\n\n    </button>\n\n      <!--<button *ngIf="tutorial.tutorialReplayAvailability()"  (click)="tutorial.openTutorialCanClose()" menuClose ion-item>\n\n          Tutorial\n\n        </button>-->\n\n           \n\n      <button menuClose ion-item  (click)="openterminos()">\n\n        Términos y Condiciones\n\n    </button>\n\n      <button menuClose ion-item  (click)="logout()">\n\n        <span class="fontPrimary">Salir</span>\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Usuario\Documents\ionic3\drap\drapoteado\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_cordova_available_cordova_available__["a" /* CordovaAvailableProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_websocket_service_websocket_service__["a" /* WebsocketServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_citas_manager_citas_manager__["a" /* CitasManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_planes_data_planes_data__["a" /* PlanesDataProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_onesignal_manager_onesignal_manager__["a" /* OnesignalManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_doctores_manager_doctores_manager__["a" /* DoctoresManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_ws_messenger_ws_messenger__["a" /* WsMessengerProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_servicios_manager_servicios_manager__["a" /* ServiciosManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_subscription_manager_subscription_manager__["a" /* SubscriptionManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_subusers_manager_subusers_manager__["a" /* SubusersManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_permissions_permissions__["a" /* PermissionsProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_tutorial_tutorial__["a" /* TutorialProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_updater_updater__["a" /* UpdaterProvider */],
            __WEBPACK_IMPORTED_MODULE_18__providers_report_presentator_report_presentator__["a" /* ReportPresentatorProvider */],
            __WEBPACK_IMPORTED_MODULE_19__providers_loader_loader__["a" /* LoaderProvider */]])
    ], MyApp);
    return MyApp;
}());

//if(this.perm.checkUserPermission([UserDataProvider.TIPO_DOCTOR])){ //si es doctor se carga la suscripcion
/**
 * ACLARACION DE LOS SUBUSUARIOS:
 *  los subusuarios no se "cargan" hasta que se abre la pagina de usuarios, sin embargo estos subusuarios estan listados en la suscripcion, asi que se tiene el numero de agregados en ese lugar para administrar el plan sin tener que cargar los subusuarios.
 */
/*let sus = await this.subscriptionManager.searchSus('kCsR0Z1ZrSCidi7s4m2jeV064');
this.subscriptionManager.susAssign(sus);*/
//await this.subscriptionManager.loadSubscription();
//await this.subUserMan.requestGroupUsers();
//this.subscriptionManager.subsData.subscription.removeUserFromSubs(189);
/*}else{
  //si son subusuarios buscar suscripciones a las que esten agregados
  console.log('looking for subscriptions where this sub user is added');
  await this.subscriptionManager.loadGroupSubuserSubs(); //se cargan subscripciones a las que estan agregados.
  this.docMan.loadGroupDoctors(); //se cargan los doctores de las suscripciones a las que estan agregados.
}*/
/*let subusuerArray = new Array();
subusuerArray.push(119);*/
/*let docsArray = new Array();
docsArray.push({uid:76,name:'do1'});
docsArray.push({uid:189,name:'do2do'});
//docsArray.push({uid:1202,name:'do3dx'});
*/
/*
await this.docMan.initDoctoresUids();
await this.subscriptionManager.loadDoctorsSubscriptions();
console.log('subscription initload is', this.subscriptionManager.subsData.subscription);
console.log('kewe');
console.log('docs before filter active',JSON.stringify(this.docMan.docData.doctoresIDs));
this.docMan.filterActiveDoctors();
console.log('docs after filter active',JSON.stringify(this.docMan.docData.doctoresIDs));*/ 
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subscription_data_subscription_data__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_url_base_url__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_data_subscriptions__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__doctores_data_doctores_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__planes_data_planes_data__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__drupal_node_manager_drupal_node_manager__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__permissions_permissions__ = __webpack_require__(39);
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










/*
  Generated class for the SubscriptionManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SubscriptionManagerProvider = /** @class */ (function () {
    function SubscriptionManagerProvider(http, userData, subsData, docData, planesData, bu, nodeManager, permissions) {
        this.http = http;
        this.userData = userData;
        this.subsData = subsData;
        this.docData = docData;
        this.planesData = planesData;
        this.bu = bu;
        this.nodeManager = nodeManager;
        this.permissions = permissions;
        this.doc_subscriptions = new Array();
        this.aux_docstoReload = new Array();
    }
    /** Obtiene la subscripcion del usuario actual */
    SubscriptionManagerProvider.prototype.loadSubscription = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sus_data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('loadSubscription');
                        return [4 /*yield*/, this.requestSubscription().toPromise()];
                    case 1:
                        sus_data = _a.sent();
                        console.log('loadSubscription loaded_data is ', sus_data);
                        if (sus_data && sus_data[0]) {
                            console.log('sus_data', sus_data);
                            this.subsData.subscription = new __WEBPACK_IMPORTED_MODULE_5__user_data_subscriptions__["a" /* subscriptions */]();
                            this.subsData.subscription.setData(sus_data[0]);
                            this.subsData.subscription.setPlanFromList(this.planesData.planes);
                            console.log('subscription is ', this.subsData.subscription);
                            console.log('isgroup', this.subsData.isGroup);
                        }
                        else {
                            console.log('sus not loaded = ( ');
                            this.subsData.subscription = null;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /** Obtiene las suscripciones de la lista de doctores, la lista de doctores se maneja mas cuando se trata de un subusuario y este metodo valida que el usuario actual no sea un doctor */
    SubscriptionManagerProvider.prototype.loadDoctorsSubscriptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var docs_subs_data, _i, docs_subs_data_1, doc_sus, aux_sus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('loadDoctorsSubscriptions');
                        if (!!this.userData.checkUserPermission([__WEBPACK_IMPORTED_MODULE_2__user_data_user_data__["a" /* UserDataProvider */].TIPO_DOCTOR])) return [3 /*break*/, 2];
                        console.log('loadDoctorsSubscriptions not a doc');
                        return [4 /*yield*/, this.requestDocsSubscription().toPromise()];
                    case 1:
                        docs_subs_data = _a.sent();
                        console.log('requestDocsSubscription res', docs_subs_data);
                        if (docs_subs_data)
                            for (_i = 0, docs_subs_data_1 = docs_subs_data; _i < docs_subs_data_1.length; _i++) {
                                doc_sus = docs_subs_data_1[_i];
                                aux_sus = new __WEBPACK_IMPORTED_MODULE_5__user_data_subscriptions__["a" /* subscriptions */]();
                                aux_sus.setData(doc_sus);
                                this.doc_subscriptions.push(aux_sus);
                            }
                        console.log('loaded doctor subs', this.doc_subscriptions);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * este metodo carga las subscripciones en las que este subusuario esta asignado.
     * **/
    SubscriptionManagerProvider.prototype.loadGroupSubuserSubs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var groups_subs_data, _i, groups_subs_data_1, group_sus, aux_sus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('loadGroupSubuserSubs');
                        this.subsData.Groups = new Array();
                        if (!!this.userData.checkUserPermission([__WEBPACK_IMPORTED_MODULE_2__user_data_user_data__["a" /* UserDataProvider */].TIPO_DOCTOR])) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.requestGroupSubscriptions().toPromise()];
                    case 1:
                        groups_subs_data = _a.sent();
                        console.log('loadGroupSubuserSubs groups_subs_data', groups_subs_data);
                        if (groups_subs_data)
                            for (_i = 0, groups_subs_data_1 = groups_subs_data; _i < groups_subs_data_1.length; _i++) {
                                group_sus = groups_subs_data_1[_i];
                                console.log('loadGroupSubuserSubs sus found is', group_sus);
                                aux_sus = new __WEBPACK_IMPORTED_MODULE_5__user_data_subscriptions__["a" /* subscriptions */]();
                                aux_sus.setData(group_sus);
                                this.subsData.Groups.push(aux_sus);
                            }
                        _a.label = 2;
                    case 2:
                        console.log('loaded final groups are', this.subsData.Groups);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * hace un request a la suscripcion del usuario actual
     * */
    SubscriptionManagerProvider.prototype.requestSubscription = function () {
        var filter = "?args[0]=all&" + (this.userData.checkUserPermission([__WEBPACK_IMPORTED_MODULE_2__user_data_user_data__["a" /* UserDataProvider */].TIPO_DOCTOR], false) ? "args[1]=" + this.userData.userData.uid : 'args[1]=all') + "&" + ((!this.userData.checkUserPermission([__WEBPACK_IMPORTED_MODULE_2__user_data_user_data__["a" /* UserDataProvider */].TIPO_DOCTOR], false)) ? "args[2]=" + this.userData.userData.uid : 'args[2]=all') + "&args[3]=all";
        var url = this.bu.endpointUrl + "rest_suscripciones.json" + filter;
        console.log('requesting sus', url);
        var observer = this.http.get(url).share();
        return observer;
    };
    /**
     * Hace un request de las suscripciones de los doctores guardados en docData, estos doctores se cargan al iniciar el app. en doctoresManager
    */
    SubscriptionManagerProvider.prototype.requestDocsSubscription = function () {
        //const filter=`?args[0]=all&${this.userData.checkUserPermission([UserDataProvider.TIPO_DOCTOR],false)?`args[1]=${this.userData.userData.uid}`:'args[1]=all'}&${(!this.userData.checkUserPermission([UserDataProvider.TIPO_DOCTOR],false))?`args[2]=${this.userData.userData.uid}`:'args[2]=all'}&args[3]=all`;
        //const filter = `?args[0]=all&args[1]=all&args[2]=all&args[3]=${this.docData.doctoresIDs}`;
        var filter = "?args[0]=all&args[1]=" + this.docData.doctoresIDs;
        var url = this.bu.endpointUrl + "rest_suscripciones.json" + filter;
        console.log('requesting docs subs url', url);
        var observer = this.http.get(url).share();
        return observer;
    };
    /**
     * este metodo obtiene las subscripciones donde este sub usuario esta agregado
     * **/
    SubscriptionManagerProvider.prototype.requestGroupSubscriptions = function () {
        var filter = "?args[0]=all&args[1]=all&args[2]=" + this.userData.userData.uid;
        var url = this.bu.endpointUrl + "rest_suscripciones.json" + filter;
        console.log('requesting subuser subs url', url);
        var observer = this.http.get(url).share();
        return observer;
    };
    /*
    Este metodo obtiene la subscripcion en las que el sub usuario uid est aagregado
    */
    SubscriptionManagerProvider.prototype.requestGroupSubscriptionsFor = function (uid) {
        var filter = "?args[0]=all&args[1]=all&args[2]=" + uid;
        var url = this.bu.endpointUrl + "rest_suscripciones.json" + filter;
        console.log('requesting subuser subs url', url);
        var observer = this.http.get(url).share();
        return observer;
    };
    /**
     * Revisa que el doctor especificado se encuentre en alguna de las suscripciones que se maneja, no recuerdo para que se usa = (
     */
    SubscriptionManagerProvider.prototype.checkSusOfDoctor = function (nid) {
        /* No necesitamos que sea el plan holder pero que este en los doctores.*/
        var ret = false;
        console.log('in subs:', this.doc_subscriptions);
        var found = this.doc_subscriptions.find(
        /*(subs)=>{
        console.log(subs.field_plan_holder,nid);
        console.log(subs.field_active);
        return (Number(subs.field_plan_holder) === Number(nid))
        && Number(subs.field_active) === 1
      }*/
        //el metodo de arriba es para encontrar planholders, el de abajo para encontrar docs listados en el field doctors.
        function (subs) {
            console.log(subs.field_doctores, nid, subs.field_doctores.indexOf(nid));
            console.log(subs.field_active);
            return (subs.field_doctores.indexOf(nid) >= 0)
                && Number(subs.field_active) === 1;
        });
        console.log('subs result', found);
        if (found)
            ret = true;
        return ret;
    };
    /**
     * Este metodo subscribe el usuario actual al plan especificado pagando con el source especificado
     * @param plan
     * @param source
     */
    SubscriptionManagerProvider.prototype.subscribe = function (plan, suscription) {
        return __awaiter(this, void 0, void 0, function () {
            var ns_res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('subscribing');
                        return [4 /*yield*/, this.getSubscribeObs(plan, suscription).toPromise()];
                    case 1:
                        ns_res = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Este metodo se encarga de obtener el request para suscribir el usuario actual al plan especificado pagando con el source especificado, el proceso de conekta se maneja en un hook de drupal
     * @param plan
     * @param source
     */
    SubscriptionManagerProvider.prototype.getSubscribeObs = function (plan, suscription) {
        if (suscription === void 0) { suscription = null; }
        console.log('getSubscribeObs');
        console.log(plan);
        var ret = null;
        //cant check if plan holder cuz its not. why was i checking if its plan holder men. dont get it. but its supposed to return false
        //if(!this.permissions.checkUserPlanHolder()) return ret;
        var aux_sus = suscription;
        if (this.checkForSubscription()) {
            var aux_sus_1 = __WEBPACK_IMPORTED_MODULE_5__user_data_subscriptions__["a" /* subscriptions */].getEmptySuscription();
            aux_sus_1.field_doctores = this.subsData.subscription.field_doctores;
            aux_sus_1.field_subusuarios = this.subsData.subscription.field_subusuarios;
            aux_sus_1.plan = plan;
            aux_sus_1.field_plan_sus = plan.nid;
            aux_sus_1.field_plan_holder = this.userData.userData.uid;
            aux_sus_1.field_stripe_src_sus_id = '0';
            aux_sus_1.field_stripe_cus_sub_id = this.userData.userData.field_stripe_customer_id.und[0].value;
        }
        else {
            aux_sus.plan = plan;
            aux_sus.field_plan_sus = plan.nid;
            aux_sus.field_plan_holder = this.userData.userData.uid;
            aux_sus.field_doctores = new Array();
            aux_sus.field_doctores.push(this.userData.userData.uid);
            aux_sus.field_stripe_src_sus_id = '0';
            aux_sus.field_stripe_cus_sub_id = this.userData.userData.field_stripe_customer_id.und[0].value;
            console.log('wakaheheee', aux_sus);
        }
        ret = this.generateNewSus(aux_sus);
        return ret;
    };
    /**
     * revisa que de plano este el dato de la suscripcion, si esto es falzo normalmente significa que no tiene suscripcion, aveces podria ser un error de plano.
     */
    SubscriptionManagerProvider.prototype.checkForSubscription = function () {
        return this.subsData.subscription !== null ? true : false;
    };
    SubscriptionManagerProvider.prototype.removeUser = function (uid) {
        return __awaiter(this, void 0, void 0, function () {
            var obs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.subsData.subscription.removeUserFromSubs(uid);
                        obs = this.nodeManager.updateNode(this.subsData.subscription.getData());
                        return [4 /*yield*/, obs.toPromise()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /*async removeSubuser( user: userd){
      this.subsData.subscription.removeSubUserFromSubs(user);
      let obs = this.nodeManager.updateNode(this.subsData.subscription.getData());
      await obs.toPromise();
      console.log('sub removed and saved');
    }
  
    async removeUser( uid:number ){
      this.subsData.subscription.removeUserFromSubs(uid);
      let obs = this.nodeManager.updateNode(this.subsData.subscription.getData());
      //await obs.toPromise();
      //this.wsMessenger.generateSubsRemoveMessage(this.subsData.subscription);
      console.log('sub removed and saved');
    }*/
    SubscriptionManagerProvider.prototype.generateNewSus = function (suscription) { return this.nodeManager.generateNewNode(suscription.getData()); };
    SubscriptionManagerProvider.prototype.updateSus = function (suscription) { return this.nodeManager.updateNode(suscription.getData()); };
    SubscriptionManagerProvider.prototype.deletesSus = function (suscription) { return this.nodeManager.deleteNode(suscription.getData()); };
    SubscriptionManagerProvider.prototype.generateUserSuscription = function () {
        this.generateNewSus(this.subsData.subscription);
    };
    SubscriptionManagerProvider.prototype.updateUserSuscription = function () {
        return this.updateSus(this.subsData.subscription);
    };
    /**
     * Este metodo busca en drupal una suscripcion en base a un codigo. es una forma de entrar a grupos médicos.
     * @param code
     */
    SubscriptionManagerProvider.prototype.searchSus = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var filter, url, observer, okai, aux_sus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filter = "?args[0]=all&args[1]=all&args[2]=all&args[3]=all&args[4]=" + code;
                        url = this.bu.endpointUrl + "rest_suscripciones.json" + filter;
                        console.log('searchsus url', url);
                        observer = this.http.get(url).share();
                        return [4 /*yield*/, observer.toPromise()];
                    case 1:
                        okai = _a.sent();
                        console.log('searchingsus', okai);
                        if (okai[0]) {
                            aux_sus = __WEBPACK_IMPORTED_MODULE_5__user_data_subscriptions__["a" /* subscriptions */].getEmptySuscription();
                            aux_sus.setData(okai[0]);
                            aux_sus.field_active = okai[0].field_active.value;
                            aux_sus.plan = okai[0].field_plan_sus;
                            /*aux_sus.nid = okai[0].nid;
                            aux_sus.field_active = okai[0].field_active.value;
                            aux_sus.field_doctores = okai[0].field_doctores;
                            aux_sus.plan = okai[0].field_plan_sus;*/
                            return [2 /*return*/, aux_sus];
                        }
                        else
                            return [2 /*return*/, false];
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Este metodo asigna el usuario actual a la suscripcion especificada.
     * @param sus
     */
    SubscriptionManagerProvider.prototype.susAssign = function (sus) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var plan, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('sus got is', sus);
                        plan = this.planesData.planes.find(function (planes) { return Number(planes.nid) === Number(sus.plan); });
                        console.log('assign plan is', plan);
                        if (!(Number(sus.field_active) === 1
                            &&
                                (plan && __WEBPACK_IMPORTED_MODULE_7__planes_data_planes_data__["a" /* PlanesDataProvider */].checkForPlanAvailability(sus, plan)))) return [3 /*break*/, 2];
                        console.log('ready to save');
                        sus.field_doctores.push(this.userData.userData.uid);
                        console.log('docs b', sus);
                        return [4 /*yield*/, this.updateSus(sus).subscribe(function (val) {
                                console.log('redysave val', val);
                                //window.location.reload();
                                _this.bu.locationReload();
                            }, function (error) {
                                console.log('redysave error', error);
                            })];
                    case 1:
                        res = _a.sent();
                        console.log('updating sus', res);
                        return [3 /*break*/, 3];
                    case 2:
                        console.log('dont save');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /*
    cargarSubscription( code:string = null){
      let observer = this.getCargarSubscriptionObservable(code);
      observer = observer.share();
      observer.subscribe(
        (val)=>{
            this.setSubscriptionFO(val, code);
        });
      return observer;
    }
  
    getCargarSubscriptionObservable( code:string = null ){
      //let nidFilter = "?args[0]=all";
      let filter = "";
      if(code){
        filter=`?args[0]=all&args[1]=all&args[2]=all&args[3]=${code}`;
      }else{
        filter=`?args[0]=all&${this.checkUserPermission([UserDataProvider.TIPO_DOCTOR],false)?`args[1]=${this.userData.uid}`:'args[1]=all'}&${(!this.checkUserPermission([UserDataProvider.TIPO_DOCTOR],false))?`args[2]=${this.userData.uid}`:'args[2]=all'}&args[3]=all`;
      }
      let url = this.urlbase+'appoint/rest_suscripciones.json'+filter;
      Debugger.log(["suscription filtered url",url]);
      let observer = this.http.get(url);
      return observer
    }
  
    setSubscriptionFO(val, code:string = null){
      Debugger.log(['subscription raw cal',val]);
          let aux_results = Object.keys(val).map(function(key) { return val[key]; });
          let aux_subs = new subscriptions();
          if(!aux_subs.setData(aux_results[0])){
            Debugger.log(['no subscription found']);
            aux_subs.is_plan_set = true; //no sub no plan
            this.subscription = aux_subs;
            this.susSubject.next(0);
          }else{
            Debugger.log(["subscription found",aux_subs]);
          if(!(aux_subs.field_plan_sus === null)){
          let setPlan_interval = setInterval(()=>{
            Debugger.log(["waiting for planes"]);
            aux_subs.is_plan_set = aux_subs.setPlanFromList(this.planes.planes);
            Debugger.log(['subs is plan set',aux_subs.is_plan_set]);
            if(aux_subs.is_plan_set){
              Debugger.log(["planes are set"]);
              Debugger.log(["added plan is",aux_subs.plan]);
              let toadd = true;
              Debugger.log(['checking is sub is full before adding to this user',aux_subs.isDocfull]);
              if(code && aux_subs.isDocfull){ toadd = false; this.error_sub_is_full = true; this.susSubject.next(0);}
              if(toadd){this.subscription = aux_subs;  this.susSubject.next(this.subscription.field_active);}
              clearInterval(setPlan_interval);
            }
          },500);
        }
        }
    }
  
    setcssplanselected( factplan:planes ){
      this.planes.planes.forEach(plan => {
        plan.css_fact_selected = false;
      });
      factplan.css_fact_selected = true;
    }
  */
    SubscriptionManagerProvider.prototype.getTotalSubAccounts = function (subscription) {
        var ret = 0;
        console.log('getting users left from this subscription', subscription);
        //obtener plan, y ver cuantos usuarios tiene gratis en el plan.
        var plan = this.planesData.planes.find(function (planes) {
            return planes.checkNid(subscription.field_plan_sus);
        });
        console.log('plan found', plan);
        if (plan) {
            ret += Number(plan.field_no_subcuentas);
            console.log('ret f', ret);
            console.log('subcuentas', plan.field_no_subcuentas);
        }
        //obtener adicionales de la suscripcion
        ret += Number(subscription.field_adicionales);
        console.log('ret f', ret);
        console.log('subscription.field_adicionales', subscription.field_adicionales);
        return ret;
    };
    SubscriptionManagerProvider.prototype.getSubAccountsLeft = function (subscription) {
        var ret = 0;
        ret = this.getTotalSubAccounts(subscription);
        //obtener numero de subusuarios activos actualmente en la suscripcion.
        console.log('subusuarios en la sus', subscription.field_subusuarios.length);
        ret -= Number(subscription.field_subusuarios.length);
        console.log('ret f', ret);
        console.log('subactounts left on this suscription', ret);
        return ret;
    };
    SubscriptionManagerProvider.prototype.getTotalDocAccounts = function (subscription) {
        var ret = 0;
        //obtener plan, y ver cuantos usuarios tiene gratis en el plan.
        var plan = this.planesData.planes.find(function (planes) {
            return planes.checkNid(subscription.field_plan_sus);
        });
        console.log('plan found', plan);
        if (plan) {
            ret += Number(plan.field_no_doctores);
        }
        //obtener adicionales de la suscripcion
        ret += Number(subscription.field_docsadicionales);
        return ret;
    };
    SubscriptionManagerProvider.prototype.getDocAccountsLeft = function (subscription) {
        var ret = 0;
        ret = this.getTotalDocAccounts(subscription);
        //obtener numero de subusuarios activos actualmente en la suscripcion.
        ret -= Number(subscription.field_doctores.length);
        return ret;
    };
    /**
     * Este metodo le quita a este sub usuariod de todas las suscripciones que no sean el gripo al que va a etrar.
    */
    SubscriptionManagerProvider.prototype.group_enter_selectedSubusersClean = function (selected_subusers, loaded_group_sus, filterThis) {
        if (filterThis === void 0) { filterThis = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            function asyncForEach(array, callback) {
                return __awaiter(this, void 0, void 0, function () {
                    var index;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                index = 0;
                                _a.label = 1;
                            case 1:
                                if (!(index < array.length)) return [3 /*break*/, 4];
                                return [4 /*yield*/, callback(array[index], index, array)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3:
                                index++;
                                return [3 /*break*/, 1];
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.aux_docstoReload = new Array();
                        return [4 /*yield*/, asyncForEach(selected_subusers, function (subuser) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                var aux_user_subs;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log('trail2 checking user', subuser);
                                            loaded_group_sus.field_subusuarios.push(subuser.uid); //agregar sub usuarios a la suscripcion de grupo.
                                            return [4 /*yield*/, this.requestGroupSubscriptionsFor(Number(subuser.uid)).toPromise()];
                                        case 1:
                                            aux_user_subs = _a.sent();
                                            console.log('trail2 LOADED SUBS', aux_user_subs);
                                            return [4 /*yield*/, asyncForEach(aux_user_subs, function (sub) { return __awaiter(_this, void 0, void 0, function () {
                                                    var aux_sus, res;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                console.log('trail2 Cleaning subscriptions of this user ', sub);
                                                                if (!(filterThis || Number(sub.nid) !== Number(loaded_group_sus.nid))) return [3 /*break*/, 2];
                                                                console.log('trail2 cleaning sub of dis user');
                                                                sub.field_subusuarios = sub.field_subusuarios.filter(function (data) { return Number(data.uid) !== Number(subuser.uid); });
                                                                aux_sus = __WEBPACK_IMPORTED_MODULE_5__user_data_subscriptions__["a" /* subscriptions */].getEmptySuscription();
                                                                aux_sus.setData(sub);
                                                                aux_sus.field_active = sub.field_active.value;
                                                                aux_sus.plan = sub.field_plan_sus;
                                                                return [4 /*yield*/, this.updateSus(aux_sus).toPromise()];
                                                            case 1:
                                                                res = _a.sent();
                                                                console.log('trail2 CLEANED SUBSCRIPTION RES IS', res);
                                                                this.aux_docstoReload = this.aux_docstoReload.concat(sub.field_doctores.map(function (doc) { return Number(doc.uid); }));
                                                                return [3 /*break*/, 3];
                                                            case 2:
                                                                console.log('trail2 NOT cleaning sub of dis user');
                                                                _a.label = 3;
                                                            case 3: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SubscriptionManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__subscription_data_subscription_data__["a" /* SubscriptionDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__planes_data_planes_data__["a" /* PlanesDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__base_url_base_url__["a" /* BaseUrlProvider */],
            __WEBPACK_IMPORTED_MODULE_8__drupal_node_manager_drupal_node_manager__["a" /* DrupalNodeManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_9__permissions_permissions__["a" /* PermissionsProvider */]])
    ], SubscriptionManagerProvider);
    return SubscriptionManagerProvider;
}());

//# sourceMappingURL=subscription-manager.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data_user_data__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(userData) {
        this.userData = userData;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        req = req.clone({ setHeaders: this.getAuthHeaders() });
        return next.handle(req).do(function (evt) {
            //console.log('AuthInterceptor handling event',evt);
        });
    };
    AuthInterceptor.prototype.getAuthHeaders = function () {
        var ret = { 'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'no-cache, no-store'
        };
        if (this.userData.sessionData.token)
            ret['X-CSRF-Token'] = "" + this.userData.sessionData.token;
        if (this.userData.sessionData.sessid && this.userData.sessionData.session_name)
            ret['Authentication'] = this.userData.sessionData.session_name + "=" + this.userData.sessionData.sessid;
        return ret;
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_data_user_data__["a" /* UserDataProvider */]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

//# sourceMappingURL=auth-interceptor.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeoutInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_timeout__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TimeoutInterceptor = /** @class */ (function () {
    function TimeoutInterceptor() {
        this.defaultTimeout = 500000;
    }
    TimeoutInterceptor.prototype.intercept = function (req, next) {
        //console.log('TimeoutInterceptor intercepts');
        var timeout = Number(req.headers.get('timeout')) || this.defaultTimeout;
        return next.handle(req).timeout(timeout);
    };
    TimeoutInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], TimeoutInterceptor);
    return TimeoutInterceptor;
}());

//# sourceMappingURL=timeout-interceptor.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonUtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the JsonUtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var JsonUtilProvider = /** @class */ (function () {
    function JsonUtilProvider(http) {
        this.http = http;
        console.log('Hello JsonUtilProvider Provider');
    }
    // parses into try catch, returns empty if error
    JsonUtilProvider.prototype.SafeParser = function (str) {
        var ret = new Array();
        try {
            ret = JSON.parse(str);
        }
        catch (e) {
            console.log('JsonUtilProvider:SafeParser error on json ', str);
            ret = new Array();
        }
        return ret;
    };
    JsonUtilProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], JsonUtilProvider);
    return JsonUtilProvider;
}());

//# sourceMappingURL=json-util.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiciosManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drupal_node_manager_drupal_node_manager__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctores_data_doctores_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_data_servicios__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_url_base_url__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__citas_data_citas_data__ = __webpack_require__(22);
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







/*
  Generated class for the ServiciosManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiciosManagerProvider = /** @class */ (function () {
    function ServiciosManagerProvider(http, nodeMan, docData, bu) {
        this.http = http;
        this.nodeMan = nodeMan;
        this.docData = docData;
        this.bu = bu;
        this.servicios = new Array();
        this.isgroup = false;
        console.log('Hello ServiciosManagerProvider Provider');
    }
    ServiciosManagerProvider_1 = ServiciosManagerProvider;
    ServiciosManagerProvider.prototype.loadServicios = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var servicios_data, _i, servicios_data_1, servicio_data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.docData.doctoresIDs);
                        return [4 /*yield*/, this.requestServiciosDoctors(this.docData.doctoresIDs).toPromise()];
                    case 1:
                        servicios_data = _a.sent();
                        for (_i = 0, servicios_data_1 = servicios_data; _i < servicios_data_1.length; _i++) {
                            servicio_data = servicios_data_1[_i];
                            this.addServicio(servicio_data);
                        }
                        this.docData.doctores.forEach(function (doc) {
                            doc.setServicios(_this.servicios);
                            //hecho por raul
                            var existe = false;
                            doc.servicios.forEach(function (element) {
                                if (Number(element.Nid) === Number(__WEBPACK_IMPORTED_MODULE_6__citas_data_citas_data__["a" /* CitasDataProvider */].SERVICIO_CORTESIA_NID)) {
                                    existe = true;
                                }
                            });
                            if (!existe) {
                                doc.servicios.push(_this.getCortesia());
                            }
                            //fin hecho por raul
                            doc.servicios = _this.defaultSort(doc.servicios);
                        });
                        this.servicios = this.defaultSort(this.servicios);
                        return [2 /*return*/];
                }
            });
        });
    };
    ServiciosManagerProvider.prototype.defaultSort = function (servicios) {
        return ServiciosManagerProvider_1.staticDefaultSort(servicios);
    };
    ServiciosManagerProvider.staticDefaultSort = function (servicios) {
        console.log('ordenando servicios', servicios);
        return servicios.sort(function (a, b) {
            if (a.order < b.order) {
                return 1;
            }
            if (a.order > b.order) {
                return -1;
            }
            if (a.order === b.order) {
                if (a.title < b.title)
                    return -1;
                if (a.title > b.title)
                    return 1;
                return 0;
            }
        });
    };
    ServiciosManagerProvider.prototype.getCortesia = function () {
        var aux_serv = new __WEBPACK_IMPORTED_MODULE_4__user_data_servicios__["a" /* servicios */]();
        aux_serv.Nid = Number(__WEBPACK_IMPORTED_MODULE_6__citas_data_citas_data__["a" /* CitasDataProvider */].SERVICIO_CORTESIA_NID);
        aux_serv.Uid = 1;
        aux_serv.title = 'Cortesía';
        aux_serv.costo = 0;
        aux_serv.order = 5;
        return aux_serv;
    };
    /**
     * uids:number[] son los uids de los usuarios autores de los servicios que se desea filtrar
    **/
    ServiciosManagerProvider.prototype.requestServiciosDoctors = function (uids) {
        console.log('requesting servicios', uids);
        var url = this.bu.endpointUrl + "rest_servicios?args[0]=" + (uids.length > 0 ? uids.join() : "all");
        var observer = this.http.get(url).share();
        return observer;
    };
    ServiciosManagerProvider.prototype.checkForUpdate = function (servicio_data) {
        var ret = false;
        var exists = this.servicios.filter(function (servicios) { return (Number(servicios.Nid) === Number(servicio_data['Nid'])); });
        console.log('servicio to update', servicio_data);
        if (exists.length > 0) {
            exists[0].setData(servicio_data);
            ret = true;
        }
        console.log('servicios after', this.servicios);
        return ret;
    };
    ServiciosManagerProvider.prototype.addServicio = function (servicio_data) {
        console.log('adding servicio', servicio_data);
        console.log('order is', servicio_data.order);
        if (!this.checkForUpdate(servicio_data)) {
            var aux_serv = new __WEBPACK_IMPORTED_MODULE_4__user_data_servicios__["a" /* servicios */]();
            aux_serv.setData(servicio_data);
            this.servicios.push(aux_serv);
        }
    };
    ServiciosManagerProvider.prototype.removeServicio = function (Nid) {
    };
    ServiciosManagerProvider.prototype.removeServicioFromLists = function (servicio) {
        var index = this.servicios.indexOf(servicio);
        if (index !== -1)
            this.servicios.splice(index, 1);
        this.docData.doctores.forEach(function (doc) {
            doc.removeServicioFromLists(servicio);
        });
    };
    //Service Methods
    ServiciosManagerProvider.prototype.generateNewService = function (newService) { return this.nodeMan.generateNewNode(newService); };
    ServiciosManagerProvider.prototype.updateService = function (service) { return this.nodeMan.updateNode(service); };
    ServiciosManagerProvider.prototype.deleteService = function (service) { return this.nodeMan.deleteNode(service); };
    /*---------------------------------------------------------------------METODOS SERVICIOS GRUPALES*/
    ServiciosManagerProvider.prototype.requestServiciosGrupales = function (serviciosids) {
    };
    ServiciosManagerProvider.prototype.generateServicioGrupal = function () {
    };
    ServiciosManagerProvider = ServiciosManagerProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__drupal_node_manager_drupal_node_manager__["a" /* DrupalNodeManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__base_url_base_url__["a" /* BaseUrlProvider */]])
    ], ServiciosManagerProvider);
    return ServiciosManagerProvider;
    var ServiciosManagerProvider_1;
}());

//# sourceMappingURL=servicios-manager.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPresentatorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reporte_citas_reporte_citas__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader_loader__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__date_date__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jspdf__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jspdf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jspdf_autotable__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jspdf_autotable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jspdf_autotable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reporte_servicios_reporte_servicios__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reportes_data_reportes_data__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reportes_manager_reportes_manager__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__doctores_data_doctores_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__subusers_data_subusers_data__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__permissions_permissions__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__subscription_data_subscription_data__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__base_url_base_url__ = __webpack_require__(27);
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


















/*
  Generated class for the ReportPresentatorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ReportPresentatorProvider = /** @class */ (function () {
    function ReportPresentatorProvider(reporteCitas, reporteServicios, loader, userData, docData, subUserData, reportesData, reportesManager, modalCtrl, permissions, subsData, bu) {
        this.reporteCitas = reporteCitas;
        this.reporteServicios = reporteServicios;
        this.loader = loader;
        this.userData = userData;
        this.docData = docData;
        this.subUserData = subUserData;
        this.reportesData = reportesData;
        this.reportesManager = reportesManager;
        this.modalCtrl = modalCtrl;
        this.permissions = permissions;
        this.subsData = subsData;
        this.bu = bu;
        this.reportisloading = false;
        this.reportSubject = new __WEBPACK_IMPORTED_MODULE_14_rxjs_Subject__["Subject"]();
        this.actualReport = null;
        this.type = 1;
        this.docLoaded = false;
        this.docuid = null;
        this.docName = null;
        this.docAlias = null;
        this.facturadoTotal = 0;
        this.facturadoTotalOut = 0;
        //totales de Doctor
        this.totalDoc = 0;
        this.facturadoTotalDoc = 0;
        this.onconsulta = 0;
    }
    ReportPresentatorProvider_1 = ReportPresentatorProvider;
    Object.defineProperty(ReportPresentatorProvider.prototype, "REPORT_TICKET", {
        get: function () { return ReportPresentatorProvider_1.REPORT_TICKET; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportPresentatorProvider.prototype, "REPORT_COMPLETE", {
        get: function () { return ReportPresentatorProvider_1.REPORT_COMPLETE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportPresentatorProvider.prototype, "REPORT_GRUPAL", {
        get: function () { return ReportPresentatorProvider_1.REPORT_GRUPAL; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportPresentatorProvider.prototype, "REPORT_ADEUDO", {
        get: function () { return ReportPresentatorProvider_1.REPORT_ADEUDO; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportPresentatorProvider.prototype, "pendiente", {
        get: function () {
            return Number(this.cajaAdeudo ? this.cajaAdeudo : 0) + Number(this.cajacuentas ? this.cajacuentas : 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportPresentatorProvider.prototype, "isgroup", {
        get: function () { return Number(this.type) === Number(ReportPresentatorProvider_1.REPORT_GRUPAL); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportPresentatorProvider.prototype, "isAdeudo", {
        get: function () {
            //console.log('isAdeudo',this.type,ReportPresentatorProvider.REPORT_ADEUDO); 
            return Number(this.type) === Number(ReportPresentatorProvider_1.REPORT_ADEUDO);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportPresentatorProvider.prototype, "isdialy", {
        get: function () {
            var ret = false;
            console.log('checking if dialy', this.reportesData.todayReport, this.actualReport);
            if (this.reportesData.todayReport && Number(this.reportesData.todayReport.nid) === Number(this.actualReport.nid)) {
                ret = true;
                console.log('checking if dialy isdialy');
            }
            return ret;
        },
        enumerable: true,
        configurable: true
    });
    ReportPresentatorProvider.prototype.openReportModal = function (report) {
        if (report === void 0) { report = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                /*this.loader.presentLoader('Cargando Reporte ...');
                await this.setReport(report);
                await this.loadReporte();
                let Modal = this.modalCtrl.create("ReporteModalPage", undefined, { cssClass: "bigModal reportModal" });
                this.loader.dismissLoader();
                Modal.present({});*/
                this.openReporte(report);
                return [2 /*return*/];
            });
        });
    };
    ReportPresentatorProvider.prototype.openTicket = function (report) {
        if (report === void 0) { report = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                /*this.loader.presentLoader('Cargando Reporte ...');
                await this.setReport(report);
                await this.loadReporte();
                let Modal = this.modalCtrl.create("ReporteTicketPage", undefined, { cssClass: "verysmallModal reportModal" });
                this.loader.dismissLoader();
                Modal.present({});*/
                this.type = ReportPresentatorProvider_1.REPORT_TICKET;
                this.openReporte(report);
                return [2 /*return*/];
            });
        });
    };
    ReportPresentatorProvider.prototype.openReporte = function (report) {
        if (report === void 0) { report = null; }
        return __awaiter(this, void 0, void 0, function () {
            var load, modalClass, Modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('opening reporte', this.type);
                        this.loader.presentLoader('Cargando ...');
                        return [4 /*yield*/, this.setReport(report)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadReporte()];
                    case 2:
                        _a.sent();
                        load = "ReporteModalPage";
                        modalClass = 'bigModal';
                        if (Number(this.type) === ReportPresentatorProvider_1.REPORT_TICKET) {
                            load = "ReporteTicketPage";
                            modalClass = 'verysmallModal';
                        }
                        Modal = this.modalCtrl.create(load, undefined, { cssClass: modalClass + " reportModal" });
                        this.loader.dismissLoader();
                        Modal.present({});
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportPresentatorProvider.prototype.loadReportNM = function (loadReport) {
        if (loadReport === void 0) { loadReport = true; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('loadReportNM', JSON.stringify(this.docuid), this.type);
                        this.loader.presentLoader('Cargando ...');
                        //await this.setReport(report);
                        if (this.isgroup) {
                            this.docuid = 0;
                        }
                        if (!loadReport) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadReporte()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        console.log('loadReportNM b', JSON.stringify(this.docuid), this.type); //docuid = null
                        this.loader.dismissLoader();
                        console.log('1beforenext');
                        this.reportisloading = true;
                        this.reportSubject.next(1);
                        console.log('loadReportNM c', JSON.stringify(this.docuid), this.type); //docuid = null
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportPresentatorProvider.prototype.exportExcel = function () {
        //this.actualReport.nid
        //this.docLoaded
        //console.log('exportExcel docloaded is ',this.docLoaded,this.docuid);
        //console.log(this.userData.userData.field_tipo_de_usuario['und'][0]['value']);
        var report_excel = this.bu.backendUrl + ("endpoint_Reporteexcel.php?r=" + this.actualReport.nid + (this.docLoaded && this.docuid !== null ? '&doc=' + this.docuid : '') + ('&ur=' + this.userData.userData.field_tipo_de_usuario['und'][0]['value']) + (this.isAdeudo ? '&adeudo=1' : '&adeudo=0'));
        //console.log(report_excel);
        console.log('report_excel url is', report_excel);
        window.location.href = report_excel;
        //console.log('report_excel',report_excel);
    };
    /*openReporteAdeudo(){
      this.type = ReportPresentatorProvider.REPORT_ADEUDO;
      this.openReporte();
    }*/
    ReportPresentatorProvider.prototype.openReportGenerate = function (report) {
        if (report === void 0) { report = null; }
        return __awaiter(this, void 0, void 0, function () {
            var Modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader.presentLoader('Cargando ...');
                        return [4 /*yield*/, this.setReport(report)];
                    case 1:
                        _a.sent();
                        if (this.permissions.checkUserPermission([this.userData.TIPO_DOCTOR])) {
                            this.docuid = this.userData.userData.uid;
                            console.log('permisos doctor, obtener uid del doctor', this.docuid);
                        }
                        else {
                            this.docuid = 0;
                            console.log('permisos no doctor, no obtener uid del doctor', this.docuid);
                        }
                        Modal = this.modalCtrl.create("ReporteGeneratePage", undefined, { cssClass: "smallModal nuevoreporteModal" });
                        this.loader.dismissLoader();
                        Modal.present({});
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportPresentatorProvider.prototype.setReport = function (report) {
        if (report === void 0) { report = null; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('setReport');
                        if (!report) return [3 /*break*/, 1];
                        this.actualReport = report;
                        return [3 /*break*/, 4];
                    case 1:
                        console.log('setReporttrail a');
                        if (!!this.reportesData.todayReport) return [3 /*break*/, 3];
                        console.log('setReporttrail b');
                        return [4 /*yield*/, this.reportesManager.cargarListaReportes()];
                    case 2:
                        _a.sent();
                        console.log('setReporttrail c');
                        _a.label = 3;
                    case 3:
                        this.actualReport = this.reportesData.todayReport;
                        console.log('setReporttrail d', this.actualReport);
                        _a.label = 4;
                    case 4:
                        if (!(Number(this.actualReport.nid) === Number(this.reportesData.todayReport.nid))) return [3 /*break*/, 6];
                        this.actualReport.doctores = new Array();
                        this.docData.doctores.forEach(function (doc) {
                            _this.actualReport.doctores.push(Number(doc.Uid));
                        });
                        return [4 /*yield*/, this.reportesManager.updateReporte(this.actualReport)];
                    case 5:
                        _a.sent();
                        console.log('trailupdatetodaydocs update');
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ReportPresentatorProvider.prototype.loadReporte = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('loadReporte unk', this.type);
                        _a = Number(this.type);
                        switch (_a) {
                            case Number(this.REPORT_GRUPAL): return [3 /*break*/, 1];
                            case Number(this.REPORT_ADEUDO): return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 7];
                    case 1:
                        console.log('cargando reporte grgupal');
                        return [4 /*yield*/, this.loadReportCitasGrupal()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.loadReportServiciosGrupal()];
                    case 3:
                        _b.sent();
                        this.evaluateCitas();
                        return [3 /*break*/, 10];
                    case 4:
                        console.log('setReporttrail cargando reporte adeudo', this.actualReport);
                        return [4 /*yield*/, this.loadReportCitasAdeudo()];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, this.loadReportServiciosAdeudo()];
                    case 6:
                        _b.sent();
                        this.evaluateCitas();
                        return [3 /*break*/, 10];
                    case 7:
                        console.log('carguando rueporte nuormalu');
                        return [4 /*yield*/, this.loadReportCitas()];
                    case 8:
                        _b.sent();
                        return [4 /*yield*/, this.loadReportServicios()];
                    case 9:
                        _b.sent();
                        this.evaluateCitas();
                        _b.label = 10;
                    case 10:
                        console.log('loadReporte end');
                        console.log('cajaAdeudo', this.cajaAdeudo);
                        console.log('cajacuentas', this.cajacuentas);
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportPresentatorProvider.prototype.loadReportCitas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var aux_doc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('loadReportCitas');
                        if (Number(this.docuid) === 0) {
                            this.docuid = null;
                        }
                        if (this.docuid !== null) {
                            aux_doc = this.docData.getDoctorByUid(this.docuid);
                            this.docLoaded = true;
                            this.docName = aux_doc.field_alias; //aux_doc.name;
                            this.docAlias = aux_doc.field_alias;
                            console.log('docfound in report is', aux_doc, this.docName, this.docAlias);
                        }
                        console.log('this.docuid af', this.docuid);
                        return [4 /*yield*/, this.reporteCitas.reporteLoadCitas(this.actualReport, this.docuid)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportPresentatorProvider.prototype.loadReportCitasGrupal = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('loadReportCitasGrupal.', this.docData.doctoresIDs);
                        this.docuid = null;
                        //await this.reporteCitas.reporteLoadCitasGrupales(this.actualReport, this.docData.doctoresIDs);
                        return [4 /*yield*/, this.reporteCitas.reporteLoadCitasGrupales(this.actualReport, this.subsData.subscription.field_doctores)];
                    case 1:
                        //await this.reporteCitas.reporteLoadCitasGrupales(this.actualReport, this.docData.doctoresIDs);
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportPresentatorProvider.prototype.loadReportCitasAdeudo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('loadReporteAdeudos.', this.docData.doctoresIDs);
                        this.docuid = null;
                        return [4 /*yield*/, this.reporteCitas.reporteLoadCitasAdeudo(this.actualReport, this.docData.doctoresIDs)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportPresentatorProvider.prototype.loadReportServicios = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.serviciosResume = this.reporteServicios.getServiciosResume(this.actualReport);
                return [2 /*return*/];
            });
        });
    };
    ReportPresentatorProvider.prototype.loadReportServiciosGrupal = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.serviciosResume = this.reporteServicios.getServiciosResume(this.actualReport);
                this.serviciosResume = this.serviciosResume.sort(function (a, b) {
                    return a.title.localeCompare(b.title);
                });
                return [2 /*return*/];
            });
        });
    };
    ReportPresentatorProvider.prototype.loadReportServiciosAdeudo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.serviciosResume = this.reporteServicios.getServiciosResume(this.actualReport);
                this.serviciosResume = this.serviciosResume.sort(function (a, b) {
                    return a.title.localeCompare(b.title);
                });
                return [2 /*return*/];
            });
        });
    };
    ReportPresentatorProvider.prototype.updateCita = function (cita) {
        console.log('here we update a cita when it is updated w a socket call');
        if (this.actualReport) {
            this.reporteCitas.checkForCitaUpdate(this.actualReport, cita);
            this.evaluateCitas();
        }
    };
    ReportPresentatorProvider.prototype.deleteCita = function (cita) {
        console.log('delete citas from socket');
        if (this.actualReport) {
            this.actualReport.citas.filter(function (citas) { return citas.Nid !== cita.Nid; });
            this.evaluateCitas();
        }
    };
    /**
     * this method evaluates all of the citas of the report and generates the presented data.
    */
    ReportPresentatorProvider.prototype.evaluateCitas = function () {
        console.log('evaluateCitas evaluating citas of actual report');
        this.resetVars();
        console.log('citas en evaluate citas report', this.actualReport.citas);
        this.noCitas = 0;
        this.noAdeudosR = 0;
        //this.noCitas = this.actualReport.citas.length;
        this.noCancel = this.actualReport.citas.filter(function (citas) { return citas.checkState(__WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_CANCELADA); }).length;
        console.log('noCancel', this.noCancel);
        if (isNaN(this.noCancel))
            this.noCancel = 0;
        console.log('noCancel ', this.noCancel);
        this.calcularCitasPorCobrar();
        var filteredCitas = __WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].sortByDate(this.getFilteredCitasShow());
        console.log('filteredCitas', filteredCitas);
        for (var _i = 0, filteredCitas_1 = filteredCitas; _i < filteredCitas_1.length; _i++) {
            var cita = filteredCitas_1[_i];
            console.log('evaluateCitas citra', cita);
            if (!cita.checkState(__WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_CANCELADA)) {
                var aux_costo = Number(cita.costo ? cita.costo : 0);
                var aux_duracion = Number(cita.duracionMs ? cita.duracionMs : 0);
                console.log('this.userData.userData.uid', this.userData.userData.uid);
                if (this.isAdeudo) {
                    console.log('trailr1 isadeudo');
                    cita.setPagosFecha(0, 0, this.userData.userData.uid);
                    cita.setEdicionesFechas(0, 0);
                    this.cajaAdeudo += aux_costo - cita.pagosTotal;
                    this.costoTotal += aux_costo;
                    this.total += cita.pagosTotal;
                }
                else {
                    console.log('trailr1 not adeudo');
                    cita.setPagosFecha(this.actualReport.dateStartUTMS, this.actualReport.dateEndUTMS, this.userData.userData.uid); //este metodo pone algunas cosas del reporte en la cita. porque si we
                    cita.setEdicionesFechas(this.actualReport.dateStartUTMS, this.actualReport.dateEndUTMS);
                    if (cita.originactivereport) {
                        console.log('trailr1 originactivereport');
                        this.noCitas++;
                        this.duracionTotalMs += aux_duracion;
                        this.costoTotal += aux_costo;
                        this.total += cita.pagosTotal;
                        this.totalefectivo += cita.pagosEfectivo;
                        this.totalTarjeta += cita.pagosTarjeta;
                        this.totalCheques += cita.pagosCheque;
                        this.facturadoTotal += cita.pagosFacturado;
                        this.totalOut += cita.pagosTotalOut;
                        this.totalefectivoOut += cita.pagosEfectivoOut;
                        this.totalTarjetaOut += cita.pagosTarjetaOut;
                        this.totalChequesOut += cita.pagosChequeOut;
                        this.facturadoTotalOut += cita.pagosFacturadoOut;
                        this.totalDoc += cita.pagosTotalDoc;
                        this.totalefectivoDoc += cita.pagosEfectivoDoc;
                        this.totalTarjetaDoc += cita.pagosTarjetaDoc;
                        this.totalChequesDoc += cita.pagosChequeDoc;
                        this.facturadoTotalDoc += cita.pagosFacturadoDoc;
                        if (aux_costo > cita.pagosTotal && !cita.checkState(__WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_COBRO)) {
                            this.cajaAdeudo += aux_costo - cita.pagosTotal;
                        }
                        //if(cita.data.field_facturar.und && cita.data.field_facturar.und[0].value) this.facturadoTotal += Number(cita.data.field_facturar_cantidad.und[0].value);
                    }
                    else {
                        //this.costoTotal += cita.pagosTotal;
                        this.noAdeudosR++;
                        this.total += cita.pagosTotal;
                        this.totalefectivo += cita.pagosEfectivo;
                        this.totalTarjeta += cita.pagosTarjeta;
                        this.totalCheques += cita.pagosCheque;
                        this.facturadoTotal += cita.pagosFacturado;
                        this.totalAdeudo += cita.pagosTotal;
                        this.totalOut += cita.pagosTotalOut;
                        this.totalefectivoOut += cita.pagosEfectivoOut;
                        this.totalTarjetaOut += cita.pagosTarjetaOut;
                        this.totalChequesOut += cita.pagosChequeOut;
                        this.facturadoTotalOut += cita.pagosFacturadoOut;
                        this.totalDoc += cita.pagosTotalDoc;
                        this.totalefectivoDoc += cita.pagosEfectivoDoc;
                        this.totalTarjetaDoc += cita.pagosTarjetaDoc;
                        this.totalChequesDoc += cita.pagosChequeDoc;
                        this.facturadoTotalDoc += cita.pagosFacturadoDoc;
                    }
                }
                console.log('totaldoccc', this.totalDoc);
                console.log('cita evaluada', cita);
            }
            else {
                console.log('trailstartnull2 checking canceñed cita', cita);
                //cita.setPagosFecha(this.actualReport.dateStartUTMS,this.actualReport.dateEndUTMS,this.userData.userData.uid);
                cita.setEdicionesFechas(this.actualReport.dateStartUTMS, this.actualReport.dateEndUTMS);
            }
        }
        console.log('tota facturar es ', this.facturadoTotal);
        this.duracionTotalStr = __WEBPACK_IMPORTED_MODULE_4__date_date__["a" /* DateProvider */].getDateDifText(this.duracionTotalMs);
        console.log('trailsortingcitas', JSON.stringify(this.actualReport.citas.map(function (citas) { return new Date(citas.ultimaFechaPago); })));
        this.actualReport.citas = this.actualReport.citas.sort(function (a, b) {
            console.log('trailsortingcitas sorting returns', b.ultimaFechaPago - a.ultimaFechaPago);
            return b.ultimaFechaPago - a.ultimaFechaPago;
        });
        console.log('trailsortingcitas', JSON.stringify(this.actualReport.citas.map(function (citas) { return new Date(citas.ultimaFechaPago); })));
    };
    ReportPresentatorProvider.prototype.calcularCitasPorCobrar = function () {
        console.log('calcularCitasPorCobrar');
        var citasPorCobrar = this.actualReport.citas.filter(function (citas) {
            return citas.checkState(__WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_COBRO);
        });
        console.log('calcularCitasPorCobrar val', citasPorCobrar);
        this.cajacuentas = 0;
        for (var _i = 0, citasPorCobrar_1 = citasPorCobrar; _i < citasPorCobrar_1.length; _i++) {
            var cita = citasPorCobrar_1[_i];
            console.log('evaluando', cita);
            if (cita.costo)
                this.cajacuentas += cita.costo;
        }
        console.log('calcularCitasPorCobrar fin', this.cajacuentas);
    };
    /**
     * this methos filter the report citas to get only the citas states that we want on the report.
    */
    ReportPresentatorProvider.prototype.getFilteredCitasShow = function () {
        return this.actualReport.citas.filter(function (citas) {
            return (true);
        });
    };
    ReportPresentatorProvider.prototype.resetVars = function () {
        this.duracionTotalMs = 0;
        this.duracionTotalStr = "00:00";
        this.noCitas = 0;
        this.noShow = 0;
        this.noCancel = 0;
        this.total = 0;
        this.totalefectivo = 0;
        this.totalTarjeta = 0;
        this.totalCheques = 0;
        this.totalcuentas = 0;
        this.totalAdeudo = 0;
        this.costoTotal = 0;
        this.caja = 0;
        this.cajaefectivo = 0;
        this.cajaTarjeta = 0;
        this.cajaCheques = 0;
        this.cajacuentas = 0;
        this.cajaAdeudo = 0;
        this.facturadoTotal = 0;
        this.AdeudosCobrados = 0;
        this.totalOut = 0;
        this.totalefectivoOut = 0;
        this.totalTarjetaOut = 0;
        this.totalChequesOut = 0;
        this.totalcuentasOut = 0;
        this.totalAdeudoOut = 0;
        this.costoTotalOut = 0;
        this.facturadoTotalOut = 0;
        this.totalDoc = 0;
        this.totalefectivoDoc = 0;
        this.totalTarjetaDoc = 0;
        this.totalChequesDoc = 0;
        this.totalcuentasDoc = 0;
        this.totalAdeudoDoc = 0;
        this.costoTotalDoc = 0;
        this.facturadoTotalDoc = 0;
    };
    ReportPresentatorProvider.prototype.generatePDF = function () {
        var _this = this;
        var logodataurl = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCACGAYYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACmXNzHZ27zTOkUUSl3d22qijkkk8AAVj/Ef4jaJ8I/Amq+JvEeo2+k6Hotu11eXc5wkKL+pJOAFGSxIABJAr8Kv+CkP/BVnxb+234nutH0ie98OfDW2lK2mkpJsl1EDpNdlT87HqI8lE4+8wLnzcxzOnhIXlrJ7I+84G4Ax/E2IcKHuUo/FNrReSXWXldebWh+lf7SH/BcT4IfAHWbjSrG/wBS8eatb5V08Pxxy2kb/wB1rh3WM/WPfj618veJv+DlXWpdTb+xvhTpkFmG+X7brbyysvvsiUAn8ce9fmDRXyFbiDGTfuvlXkv8z+ncq8FOGMJTUa9J1pd5Sa/CLivz9T9avhb/AMHJ2g6jqaw+NPhlquk2pwDd6PqiXzA/9cZEiwP+2h+lfcX7M/7b/wAMP2u9J8/wL4rsNTukTfPpspNvqFsO++B8PgHjcAVPZjX82daXhHxfqvgDxNZa1oeo3uk6vpsontLy0maGe3kHRldSCDW2G4jxMH+995fczy8/8CsixdNvLXKhPpq5R+ak2/ukrdmf1JUV8Rf8Ek/+CqkX7ZuhjwV4yaG0+JWj2plMyqI4dfgTAMyKOFmXI3xjg/fXjcqfWXxv+NPh79nj4Va14z8VXosNC0G3M9zJjc7chVjRf4ndiqqO7MBX2VDF0q1L20H7v5ep/LGccNZjlmZPKsTTftbpJLXmvs490+n3b6G54l8Uab4L0K51TWNRsdJ0yyTzLi7vJ1gggX+87sQqj3Jr4n/aF/4L9fBv4SXt1p/he31r4hajbkqJLBVtdOZh1H2iT5jz/Ekbqex9fzK/4KBf8FGfGP7eHxBkmvpp9I8G2ExOkaBHL+5twMgSy4wJJyCcsfu5IXAzn53r5fHcSTcnHDKy7v8AyP6I4R8B8LGjHEZ/Jym9fZxdkvJyWrfflaXm9z9ONU/4OVvEU14DZfCjRbe3zyk+tyzOR/vCFB/47Xd/CP8A4OSPDGs6vDbeNvhxq+g2rfK97pOpJqO0+pidIiF9cMx9AelfkZRXmRz3Gp357/Jf5H6BiPB3hKrT9msLy+anO6++TX3pn9L37O37Wvw7/av8Oyal4B8U6d4gjtwpuYIy0V1aZ6ebC4WRM4OCVwcHBOK9Gr+X/wCE3xe8S/Arx7YeJ/COs3ug65pr74Lq1faw9VYdHQ9GRgVYcEEV+5v/AAS5/wCCnWlft3+CZNK1dLXSPiNoUCvqVjGdsV/Fwv2q3BOduSAyclCw5IZSfpsrzuOJfsqitL8Gfz94ieEmIyCm8fgJOrh+t/ih/ito1/eSXmlu/rOiiivePxoKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD8kv+Dhr9sW41jxtpPwX0e6KafpEcWr+IQhx51y67reBvZIyJSOhMsZ6pX5kV6T+2L8UZfjT+1X8Q/FEsxnXV9fvJYGPaASssK/RYlRR7CvNq/MMwxLr4iVR99PTof6EcD5BTybJMPgYKzUU5ec2ryf36LySQUUUVxH1gUUUUAdJ8IPivrfwM+J+h+L/Dl21lrfh+7S8tZRnG5TyrDujDKsvQqxB4NfYn/BYj/gpTbftiWvgbw14TuXj8L2ul2+uarAr53alPHu8h+zfZ0Yrx/HJJ/dFfC9FdNPF1IUpUYvSW54GO4bwOLzLD5rXherQUlF/wCLv3trbs22FFFFcx74UUUUAFdn+z38dNd/Zq+M/h7xx4cn8nVfD12txGpJCXCfdkhfH8EiFkb2Y1xlFVGTi1KO6McRQp16UqFaPNGSaaezT0aP6gPg/wDFLS/jd8K/D3i/RJDLpPiTT4dQtS33lSRA21h2Zc4I7EEV0lfEf/BAP4ozePf2CY9KuJS7+DtdvNLjDHkROI7pfw3XDgf7uO1fblfqWEr+2oRq90f53cT5R/ZebYjL1tTnJL0vo/mrEGpahFpWnz3Ux2w20bSyEDOFUZPH0FfH3/D+r9mf/ocdW/8ACfvf/jdfWPj7/kRNa/68J/8A0W1fgv8A8EQP2VPAX7X/AO1d4g8NfEXQf+Eh0Sx8J3OpwW3224tNlwl5ZRq++CRGOElkGCcfN0yBjoPCP03/AOH9X7M//Q46t/4T97/8bo/4f1fsz/8AQ46t/wCE/e//AButb/hxv+y3/wBEv/8ALk1f/wCSqP8Ahxv+y3/0S/8A8uTV/wD5KoAPDv8AwXB/Zj8QjH/CyPsUnJ2XeiahFwP9ryCv4Zz7V7n8HP2qfht+0JH/AMUT458L+JpACWgsNRjkuIwOu6LO9fxUV89eIP8Agg3+zJrUO238EajpJxjfaeIL9j16/vZXHt0r5x/aG/4NrbK3t59U+EXj/ULLUbdvOttN8QqHQsOQFuoVVo8H7uYmPTLd6AP1Sor8avgp/wAFT/j7/wAE1fi/afDr9ofS9W8Q6BCq5kvSs2qQwHIWe2uw226jyDkOzE4K70KkV+t/wf8AjF4Z+Pnw60zxZ4P1i013w/q8Xm213bk4YdCrKQGR1OQyMAykEEAigDpqKKKAPnP9pD/gqx8Ff2TvilceDfG/iK/07X7WCK4kgi0m5uFCSLuQ70QryPeuC/4f2fsz/wDQ46t/4T97/wDG6/Pb/gtPolr4m/4K7W+m30XnWWoLodtcR7ivmRuEVlyCCMgnkHNfpB/w43/Zb/6Jf/5cmr//ACVQBlwf8F5/2ZZpMN411OIf3m8P32B+URNdx8N/+CuP7OPxUuxBpnxX8O20rNtC6ss2kjP+9dJGv61y9z/wQx/ZdniKr8NJIT/fTxHqpI/O5I/SvMfi3/wbkfBTxlaSt4X1fxh4NvSP3Wy7W/tEP+1HKvmN+EooA+/NK1a113TobyyuYLy0uUEkM8EgkjlU9GVhkEe4qxX4V/EH4dftF/8ABCP4nWOqaPr51jwHqtztSaIPJo2qkHJhubdv9ROVBIKndjdskbDY/X/9i/8Aa18P/tsfs+6N498PA28d8GgvrF5A8umXaYEsDkdcZBU4G5HRsDdigD1WiiigAryT9uP9q2w/Ys/Zl8R/EG9tU1GTSUjisrBpvK+33MrrHHHuwSBltxIBwqsccV63X5A/8HKf7Tv9s+NfBnwk0+4zb6PEfEOrorZBuJA0Vsh9GSPzW+k60AP/AOInnXf+iQaT/wCFDJ/8Yo/4iedd/wCiQaT/AOFDJ/8AGK/LKigD+pb9nr40ab+0V8DvCvjnSOLDxRpkOoJHu3G3Z1BeJj/eR9yH3U12Vfmd/wAG2/7Tn/CX/BTxT8K7+43Xng+6/tbS0ZuTZXLHzUUeiTgsfe5FfpjQAVg/FPxk3w6+GPiPxAkAun0LS7nUVgZ9gmMMTSBScHGduM471vVw/wC03/ybb8Qv+xa1L/0lkoA/Lz/iJ513/okGk/8AhQyf/GKP+InnXf8AokGk/wDhQyf/ABivyyooA/U3/iJ513/okGk/+FDJ/wDGK0NE/wCDn64STGpfBmGRSfvW3igoVH0a1OfzFflFRQB+4Xwj/wCDjr4LeNJ4LfxPovjHwZNKwEk8ltHf2cOe5eJvNOPaKvtr4QfHXwb8f/Cya14K8TaL4n0xsZn0+6WbyiedrgHcjf7LAEelfyx13v7OH7THjT9k/wCJ9n4u8DazPpGrWp2yAfNBexZBaGaPpJG2OQehAIIYAgA/qLorxH9gH9tzQv29P2fbLxlpMJ0/UIJPsOs6Yzbm068VVZlB/ijYMGRu6tzhgwBQB/OlrMMtvrF1Hcf69JnWTj+IMc/rVavpH/gqx+yvqP7LX7ZXiq2ks5ovD/ie9l1vQ7nZ+6ngncyPGp6ZidmjI6gKp6MCfm6vymvSlSqSpy3TP9IsnzKjmGBpY3Du8KkVJfNbfLZ9mFFfSH7Cv/BMH4i/t0aol3pVuNA8GxS+XdeIr+M/Zxg4ZIE4M8g54UhQRhmXIr9dv2Vv+CW3wX/Yj0ZdYXTbXWtdskEs/iPxEY5HtyOS0YYCK3AOcFQGwcF2r0cDk1fErn+GPd/ofC8YeKeT5DJ4Zt1q/wDJDo/7z2j6ay8j8fP2ev8Aglt8cf2loLe70HwPf2Oj3IDLqmsEafash6Opkw8i+8atX158L/8Ag2v1i5iWTxp8TtNsn/ittE0x7oH6TStHj/v2a+tP2hP+CwXwy+ERms/DjT+PNXjyu3T3Edijf7VwwII941ce4r5K+KX/AAWg+LPjXzItCj0HwjbtwrWtr9puAPd5ty/iEFer9SyzD6VG5v8Art/mfnL4q8QM69/BU4YSm9nJK9vPmUn81BHsegf8G5XwbsrZf7R8V/Ee+nH3mivLOCM/8B+zMR/31Whe/wDBu38C7tMJrPxJtvePVLUn/wAetTXxpq//AAUD+NOt5874keJkz/z73At//RYWs3Tv22vi/pcpeP4meN2JOf32sTzD8nYin9Yy5aKiR/YPHUvelmuvle3/AKSvyPp3x3/wbX+FryGQ+Gfidr+nSdY11TTIb0H2JjaH88fhXzL8ev8Aggv8cfhFaS3uhQaL4/sIwWI0e5Md2ijuYJghY+0bOa7DwZ/wVJ+OHgy+SX/hNJdUiX71vqNnDOkg9zsDj8GBr6K+DP8AwXRka8htvH/g6IQtxJf6FKcp7+RKTkeuJfwNS6WVVtLOD/r1NY4/xFyp8/tIYqC6NK/5Ql9zZ+QPi7wbq/w/8QXGk67pWo6Lqto22ezv7Z7eeE+jI4DD8RWZX9E98fgH/wAFLPApsbtPDPjeIRHEEy+TqmnZ6lc7Z4ef4lwD6kV+d/7df/BA3xH8KLS78SfCG5vvGOiRBpZtDuAp1W1Xr+6KgLcAc/KAsnQAOcmuHF5FVpx9pQfPHy3/AK9D6/hrxhy7G1lgc3pvC19rT+Fv/E0uX/t5JebPzooqS6tZbG5khmjeGaFikkbqVZGBwQQeQQe1R14R+wb6o/YP/g2187/hn/4i7gfs/wDwkMOw/wC39mXd+myv0hr5b/4I8fswX/7Lf7Eeh2OtWz2XiDxPcSeIdRt3GHtmmVFijbuGEEcO5T91iw7V9SV+m5XSlTwkIS3sf5/+ImYUcdxJjMTh3eLnZPo+VKN15O1zI8ff8iJrX/XhP/6LavxZ/wCDav8A5Pp8V/8AYiXn/pw06v2m8ff8iJrX/XhP/wCi2r8Wf+Dav/k+nxX/ANiJef8Apw06u8+MP29ooooAKKKKAPIf21f2L/CH7cfwWvfCfii1iW4CPJpOqrEGudHuSMLNGeDjIG5MgOowexH5R/8ABMT9prxf/wAEwP24dS+B3xC/ceHNd1lNL1CFpP3Gn30m1Le/iYgfupVMW4nGY2Rj/qwK/bqvyM/4OWf2c7TR9f8AAfxWsIfJudU3+HtVdRgSPGpmtnP+3t89SepCIP4aAP1zorwz/gmr8fZv2mP2G/h14tvbr7ZqtxpYstSmZsyS3VszW8rv6M7RF/8AgYI4Ir3OgD8OP+CxP/KZLS/+uugfzjr9x6/Dj/gsT/ymS0v/AK66B/OOv3HoAKKKKAPKP25PgfY/tGfsjfEDwhfQpL/aei3DWpZc+TdRIZbeQf7sqIffBHevzc/4Nk/ireQeOfid4IeTfYXVjba5DGT/AKqWOQwSED/aWWPP/XNa/UH9pv4o2nwU/Z28ceLb5wlv4f0O7vTyMuyQsUQZ/iZtqj1LCvyx/wCDZP4bXN58XPib4vKEWenaRbaOrkffkuJvOIHrgWwz6bl9aAP2HooooAp+IfEFn4T8P32q6lcR2en6bbyXd1PIcJBFGpZ3PsFBJ+lfzD/tZfH28/ai/aR8ZePr3zFfxLqclzDHIctb24+SCL/gEKxp/wABr9p/+C9/7T3/AAof9h+78OWVx5Wt/Eq4/sWEK2HWzAEl2+O6lNsR/wCvgV+ClAHoX7KHwIuP2nf2kvBfgG3klg/4SjVYbOeaJdz21vndPKAeCUiV3wf7tct8RPAuofC/x/rnhrVovI1Tw9qE+m3kf9yaGRo3H/fSmv0O/wCDbf8AZx/4TP8AaC8U/Eu8hzaeCtPGn2DMvW8u9wZlPqkCSKR/03WvPP8Ag4B/Z2/4U3+3RP4ktIPK0r4i2EeroVGEW6T9zcKPclElPvPQB5B/wS1/ae/4ZM/be8F+Jbm4+z6Je3P9jayS2E+x3OI2dv8AZjfy5f8AtkK/pDr+Tev6Of8Agk/+07/w1b+wz4N125uPtGt6RB/YOsMWy5urYKm9j/ekiMUp/wCutAH0fXD/ALTf/JtvxC/7FrUv/SWSu4rh/wBpv/k234hf9i1qX/pLJQB/LfRRRQB/UF8O/gP4Hm+H+hu/gzwoztp9uzM2kW5JJjXk/JVX4gfsUfCD4p6XLZ6/8MvA2oxSqULtotukyAjGUlVQ6H3Vgfeu2+G//JO9B/7B1v8A+ilraoA/BX/gsl/wS6sv2EfF2k+JvBjXcvw88UzPbRQ3Mhll0e8AL/Zy55eNkDNGSS37twxOAzfENfuv/wAHFVxZw/8ABPqFbrZ58vimxWzz1Mvl3BOPfyxJ+Ga/CigD7A/4I9/8FA7P9hH4seKptfknk8MeI9JVJLVCcNeRTIYZOh6RvcD/AIF7UV8f0UAf0/ftTfsmeCf2xvhlL4W8b6Ybyz3eba3UDCO806XGBLBJg7W9QQVYcMGHFfHfwh/4N1/hx4H+JI1bxL4t1zxhodvL5tvoz2yWSyYxhZ5UYtIvXOwR547ZB/Q6iuStgMPWmqlWCbX9fP5n0+U8Z53leFng8BiZQpy3S8+qvrF+cbM8K/ah/bD8A/sF+AdO057KL7Z9l8vRvDumRpD+6T5V4A2wwgjGcdjtVsEV+Wn7VP7b/jr9rbWi2v3/ANk0SKTfaaNZkpZ2/oSOsj/7b5PJxtBxXqH/AAWV8N6xpf7Y9zqF/Hc/2ZqmmWp0yVwfLMccYWREPTiTeSOo3g9xn5Pr5nNMbVlUlR2itLH794d8J5dh8BRzS3tK1Rczk9bX6Ls1s3ve+vQKK3vhx8L/ABF8XvE8WjeGNG1DXNTmG5be0hMjBR1ZuyqO7EgDua+x/gv/AMEPfFviexhu/G3iXT/C4fDNY2cX2+5Uf3Wfcsan/dLiuGhhK1b+HG59lnHE2V5Ur4+soPtvL/wFXfztY+GqK/WXw1/wRW+EGj2ka3s/izV5gPnebUEjDn2Eca4H4/jWtqH/AAR0+CN7Ftj0vXbQ4xui1aUk/wDfe4V6CyPE2vp958TLxfyFS5Uqj8+VfrK/4H5CUV+mHxM/4IWeGNSR5PCPjTWdJkxlYdUt472Mn03J5bKPfDV8gftHf8E7/if+zPDcXuraL/aug2+S2r6UxuLZF/vSDAeMdOXUDngmuSvl2Ioq8o6eWp9Jk/HeSZnJU8PXSm/sy91/K+jfo2eN+HPEmoeENctdT0q9utN1GykEtvdW0rRSwOOjKykEH6V+hn7Fv/BY+PUGtPDfxa2QTEiKDxHDHtjc9B9pjUYX/rogxyMqAC1fnNSgZNZ4bF1aEuam/l0O7iHhjL86o+yxsLtbSWko+j/R6eR+sH7eH/BID4e/txXg8T6Zer4L8ZXIV5NYsLZbi31RTjBnhDIJGx0kVlbBGS4CgcX+xL/wQi8G/sz/ABEtvFvi/X/+Fg6xpkizabbPp4tLCylByJWjMkhldeCuSFU87SQpH1D+xL4c1nwj+yX4A07xAk0Wq2ujQpLFNnzIFxmONgeQVjKKR2247V6lX1scvw1SaxEoe9v/AEtj+Zq3HGf4LDVMjo4yToRbj0u4p20lbmUWuila2mwUUUV6J8KZHj7/AJETWv8Arwn/APRbV+LP/BtX/wAn0+K/+xEvP/Thp1ftN4+/5ETWv+vCf/0W1fiz/wAG1f8AyfT4r/7ES8/9OGnUAft7RRRQAUUUUAFfGH/BfXwhD4l/4Jq+KLySBZX8P6npuoRMT/qWa6S23D/gNwy/8CNfZ9fIn/BdfU1sP+CYHxDiZWJvZtLhQj+EjU7WTJ/BD+YoA8t/4NsfEsmp/sS+KNOleVzpfjG48oN92OOS0tGCr/wMSE/71fobX5w/8G0Ghm3/AGSPHWpdrvxe9t98/wDLKytm6dB/ruo5PfoK/R6gD8OP+CxP/KZLS/8ArroH846/cevwi/4Li6NdeI/+CrUun2Nx9kvr+10e3t59xXyJHRFV8jkYJByOeK94/wCHK/7V3/Rxf/ly6x/8TQB+stcr8Wfjj4O+BHhx9W8Z+J9D8MacgJ87UrxLcSH0QMQXb0VQSewr8WP23/2C/wBqj9jf4Vv4u1z4pa54t8MQSrFfTaT4l1KVtP3EKrzRyhMRliF3KWwSM4yM9P8A8ExP+CXXwl/4KEeD28W698TvF+r67pcqp4h0BYYrW6tpGyUJndpWkhfB2yAKTtYfKwIABqf8FAv+CgHiv/grL8QLL4H/AAG0PV9Q8Ky3Kz3ty0RhfWDG42yy54gs4ztfMmCW2FgpCrX6T/8ABPn9izSv2EP2bdM8FWM0d/qbu1/rWoqm37feyAB2A6hFCqiA87UGeSa6z9nP9lP4ffsm+Df7C+H/AIY07w9ZPgzyRKXubxh0aaZiZJDycbmOM4GBxXodABRRXnH7Xf7QFp+y1+zR408fXnlkeG9MkuLeOQ4W4uWwlvEf9+Z41/4FQB+K3/Bej9p3/hff7cl/oFlcebonw2g/sKEK2Ua7zvu3x2YSERH/AK9xXxPVvX9dvPFGu3up6hcSXd/qM73VzPIcvNK7Fncn1LEk/WvQP2OPgJN+1B+1J4G8BRK5j8R6tFBdlD80dqv7y5ce6wpI3/AaAP3R/wCCLv7O3/DO3/BP7wfHcQeTq3i9W8TahkYJa5CmEEdQRbrACD0INebf8HDP7O//AAtj9imDxfaweZqfw41JL0sFy32O4KwTqP8AgZt3PoIjX3hYWMOl2MNtbxJBb26LFFGi7VjRRgKB2AArD+LXw20/4y/C3xH4S1Zd+meJtNuNLuhjJEc0bRsR7gNkehAoA/lYr9Jv+Db/APad/wCEG+P/AIk+F9/cbbHxvZ/2hpqM3S+tVLOqj1e3MhJ/6d1r89PiT4B1D4VfETXfDGrR+Tqnh3UJ9MvE/uzQyNG4/wC+lNaPwI+L+pfAD4z+F/GukE/2j4X1ODUYV3bRN5bhmjY/3XXKn1DGgD+pyuH/AGm/+TbfiF/2LWpf+kslb3w58e6b8VPh/ofibRpvtGk+IbCDUrKX+/DNGsiH67WFYP7Tf/JtvxC/7FrUv/SWSgD+W+iiigD+oL4d/HjwPD8P9DR/GfhRXXT7dWVtXtwQRGvB+el8cfte/Cv4baDJqeu/EbwTptlH/HLrNvlz12qoYszeygn2r+XyigD7l/4LU/8ABTPS/wBt/wAfaP4X8ESzy+APCMjzpdyRNEdYvGG0zhGAZY0TKpuAY75CRyAPhqivRv2Yv2UPHf7YHxIh8MeBNDuNWvWKtcz42WunRE482eU/LGg568tjChiQCAfQv/BGz/gnvZft0fFHxY3iSCdfCfh3SlD3KD/l+llTykHIz+6Scn0wueoor9mP2Ef2MtA/YU/Z707wRokhvbgOb3VtRdNr6neOqiSXH8K4VVVecKigknJJQB7LRRRQBwP7Rv7NfhX9qT4eS+HfFVmZoN3mW11CQtzYS9pInIOD6gggjggivi3R/wDghB5fjQG/+IXm+HVk3FbfTPLvZE/u5Lsin/aw3rt7V+iFFclfA0K0uapG7Ppcn4wzfK6MsPgazjB9LJ2fdXTs/Q8l8OeEfhf+wR8Kdtnb2PhvSgQskxUy3mpS4ONzcvK/XjoozgKo4+cfjL/wVJ1vWpprXwTpsOj2mSqX16gnumH94JzGn0O+q3/BVy51Jvi74dil83+yV0nfaj/ln5xmcS4/2toiz7ba+WK8nGYycJOjS91I/SOFuF8Li8PHNMwbrVKmvvO636933vf0O88SftRfEXxZKWvfGniI7uqQ3r28Z/4BGVX9KydO+NPjHSJd9r4s8S2zk5LRanOhJ/Bq5mivMdSbd22foEcBhYR5I04pdrI9s+Hn/BQT4m+A7yMzayuv2i8NbanEJdw/66DEmf8AgWPY19Y/s9/t9+EfjnPBo+pRnw9r10fKS1uW3292x42xyYAJP91gCc4G6vzip0EjxTI0ZZZFYFSpwQe2Peuqhj61N73XmfO5vwZlmOg7QVOfSUdPvWz/AD8z7V/an/4I+eC/jTqcmseD7pPAusTNunhhtvN064J6nygV8pv9w7f9nJzVX9kL/gkFoXwG8c23ijxbrMXi7VdOcS2Folp5VlayjpIwYsZGBwVztCnnBOCPrP4fS383gHRH1UMNUbT4DeBhgiYxrvz77s1sV7iy/DufteXX+uh+Rz42z2GEllrxLcNujdu3Nbmt89tNgoooruPkAooooAyPH3/Iia1/14T/APotq/Fn/g2r/wCT6fFf/YiXn/pw06v2m8ff8iJrX/XhP/6LavxZ/wCDav8A5Pp8V/8AYiXn/pw06gD9vaKKKACiiigAr81P+Dlj40R+Hf2d/A/gSGdRd+JtafU541b5vs9pEVww/umS4QjPUxHHQ1+jfirxTp3gfwzqGs6xe2+naVpVvJd3l1cOEitokUs7sT0AAJP0r8KfG+raz/wW4/4Km20elW1+ng5JYrVGYENpehW75lmfsryF3YD/AJ6Tque9AH6Y/wDBET4Kj4Mf8E6fBZki8q+8WtN4juuMb/tDYhb8beOCvrWqmgaDZ+FtCstM062is9P06CO1tbeJdscESKFRFHYBQAPpVugD8OP+CxP/ACmS0v8A666B/OOv3Hr8OP8AgsT/AMpktL/666B/OOv3HoAo+JfDWn+MvDt9pGrWdvqOl6nbva3drcRiSK5idSro6ngqQSCPevxE/aQ+Dnjf/ghf+3LpnjrwP9ovvh/rkr/YBK7eVe2jMGn0u5bn50GCjnOdqSDLKyr+5NeeftTfsy+F/wBrz4Jax4F8W2vnabqkeYp0A8/T7hc+XcRE/dkQnI7EEqcqxBALP7Nn7RXhj9qv4M6L458I3n2vR9Zh3hWwJrSUcSQSrk7ZEbII6cZBIIJ7qvw4/ZI/aA8af8ERf22dX+G/xD+0TeA9XuUGo+WjNDJCxKwatajqflGHUZJVWQgvGu39vNC12z8T6JZ6lp11b32n6hAlza3NvIJIriJ1DI6MOGUgggjqDQBbr8sP+DlT9p3+y/Cfgv4R6fcYm1SQ+ItYRWwRDGWitkPqGk85iPWFDX6mTzpbQvJIyxxxqWZmOAoHJJPpX80X/BQj9pd/2t/2wfG/jZZWk0y+v2ttJBzhLGACKDA/hLIgcj+87etAHi9afhHxrrPw/wBcj1PQdW1PRNShVlju7C6e2nQMMMA6EMAQSDzyDWZX6Q/Aj/g3P8UfGP4L+FvFl78RtO8PT+JdMg1M6bLosk0lmsyCREZvOXLbWXIwMHI7UAfEP/DXPxX/AOinfEL/AMKO8/8AjlH/AA1z8V/+infEL/wo7z/45X6Ff8Qw2u/9Ff0n/wAJ6T/4/R/xDDa7/wBFf0n/AMJ6T/4/QB+X2v8AiC/8V6zc6jql7d6lqF45luLq6maaadz1Z3YlmPuTVOvv39sv/ggp4k/ZJ/Zz8QfEKLx5YeKovDixTXNhBpD20hhaVI2kDGVh8m/cRj7oY54r4CoA/cf/AIN4f2nf+Ftfsi33gS+uPM1b4bXxhhVmyzWFyWlhOTydsgnT2VYx6Cvsn9pv/k234hf9i1qX/pLJX4Sf8EU/2nP+Ga/28vDS3dx5Oh+N8+GtQ3NhFM7L9nc9htuFiyx6Kz+pr92/2m/+TbfiF/2LWpf+kslAH8t9FFFAH6g+Hf8Ag2d1zxB4fsb8fFzSohe28dwEPh+Q7N6hsZ8/3rd0P/g2BuGkzqXxmhRQfu23hcuW/wCBNdDH5Gv1Q+G//JO9B/7B1v8A+ilraoA/Pv4Sf8G4/wAFPBU8Fx4n1jxj4zmjIMkEt0ljZy+2yFRKPwlr7X+DHwG8G/s7+D10DwP4a0nwxpKt5jW9hAI/NfAG+RvvSPgAbmJPA5rraKACiiigAooooAKKKKAOJ+PPwF0L9oXwRJo2tRFWUmS0u4wPOspMfeU+nqp4I/Aj41n/AOCWnjxPFJtY9S8Pvpm/i/Mzqdme8e0ndjtkj/a71+gFUvEeuQ+GfD99qNx/qLCB7iTHdVUsf5VyYjB0qr5po+kyXijMsug6GFl7r6NXs/L+rHzl4S/4J5fC/wCFGhLc+Mb19ZmyA097dmytw3oiIwP4Fmq8/wCz3+z149lFlbWukQXJ/dxtBfz2zk9BjLhWP1BzXjHxE+ImpfE3xNPqepSlnkJ8uIE+Xbp2RB2H8+p5rCrz/aUl7sIKx9tHAZlVXtcRjKnO/wCV2S+S0+6x2Pxd/wCCV2qadLJc+CtZh1G3ySLLUj5U6j0EijY5+oSux/ZI/wCCd/8AwrvXIfEfjj7Je6naOHsdOibzIbdhyJZG6MwPRRwMZyTjHon7HfxdufGWg3Gg6hI011pCK8EzNlpIScbT/unAz6Eele1V1UcFh21Vij53NuKs6pQnltep5cyVm16+a+fmFFFFeifDhRRRQAUUUUAZHj7/AJETWv8Arwn/APRbV+LP/BtX/wAn0+K/+xEvP/Thp1ftf4l0x9b8OX9nGyq93bSQqzdFLKQCfzr8dvDX/Bub8bfBd+11o/xQ8G6TcyRmJprO7v4JGQkEqWWIHGQDj2HpQB+y9FfkJ/w4a/aS/wCi46T/AODnVP8A43R/w4a/aS/6LjpP/g51T/43QB+vdeDftF/8FM/gj+y/p123iTx7otxqVqCP7I0qdb/UXf8AueVGTsJx1kKr6kV+fw/4N2/i/wCOF2eLPjVpU0Z+Uj/TdQ+UfMvEhT+Lt261658Df+DbP4YeDXiuPHXi3xL42uIyC1vaouk2UnqGVTJKfqsq/wCAB8yftNft0fGL/gtB8TYPhf8ACfw5qejeCndXubIS/wDHwobIuNRnUbI4VwCI8ldwHMj7Mfpd/wAE3f8Agnh4f/4J7/B6TSLSeLWPFOtMtxrus+T5ZunUfJFGOSsMeW2gnJLMxwWwPYvg98EfCX7P3gm38OeC/D2l+G9FtfuW1jCIwzdC7n7zue7sSx7k11NABRRRQB+HH/BYn/lMlpf/AF10D+cdfuPX54/t1f8ABHrxx+1R+3fZ/FbR/E/hXTtHt301mtLw3H2k/Ztm/G2MrztOOfrX6HUAFFFFAHy//wAFTf8Agnbpv7fnwLe3tFt7Px74dR7nw9qD/KGcjLWsrf8APKXAGf4GCtyAyt8Tf8ETv+Ciup/AP4gv+zr8VmuNMiS/ksdBmv8AKSaPfbyH0+XPRHfOz+7ISvIcbf15r4R/4Kk/8EZbb9t7xrY+N/BWq6V4U8bhVt9Ue7jcWurRqAI5GMYLLMgAXdtO5doONgoA9A/4LQftO/8ADM37Bvih7S48jXfGQHhrTdrYdTcK3nuO4226zEMOjFPUV/PLX7JftZ/8EnP2kP2yvh98OtC8X/ET4d3J+H2ny2gu/OvTJqssjj/SJv3HMnlRwoTzkq7Zy5FeHf8AEM/8V/8AofPh5/31ef8AxmgD4z/Yg/Z+f9qX9rPwH4ECO9truqxrfbeq2ceZblh7iGOQj3xX9OFvbpaW6RRIkcUahERFwqKOAAOwr4i/4JZ/8Ec7P9gjxTqHjHxHr1r4p8a3lq1jata27R2mlwsQZNm/5nkfao3kLhcqB8xJ+4KACiiigDD+Jvw/0/4s/DjX/C+rR+bpfiPTrjTLtB1aKaNo3x74Y1/Ln8V/hvqPwd+J/iLwnqybNT8NalcaZdDGB5kMjRsR7ErkexFf1UV+d/8AwUo/4IWj9r3403fxC8DeJ9O8M65rKp/a1hqNu7Wl1KihBOjx5ZGKqoZdjBiN2QScgH4lW1zJZ3CTQu8UsTB0dGKsjDkEEdCDX9Ffwe/aUj/a2/4JY3XjgyI+oal4K1CHVFXjZfQ20sVwMdgZEZgP7rL61+eX/EM/8V/+h8+Hn/fV5/8AGa+y/wDgnf8A8E4/iT+yH+zT8Ufht4k8T+FtY07xjbzPo7WL3GLC5mtngmMgeNfkYCA/LnGxuDmgD8E6K/SH/iGf+K//AEPnw8/76vP/AIzR/wAQz/xX/wCh8+Hn/fV5/wDGaAP2N+G//JO9B/7B1v8A+ilrarP8KaS+geF9NsZGV5LK1igZl6MVQKSPbitCgAooooAKKKKACiiigAooooAKxPiVoEvir4fa1p0BxNe2UsUfuxU4H54rbopNXVmXTm4TU47rU/PGaF7eVkdWR0JVlYYKkdQRTa+svjT+ydp/xI1OXVdMuRpWqTndMGTdBcH1IHKse5Gc+mTmuN8P/sJXbXanVddt0gB+ZbSIs7D2LYA/I140sHUUrJH6nQ4owE6SqTlyvqrP+mQfsLeGJ5fE2s6yVxbQ2osgx/id2Vzj6BBn/eFfS9Zng/wfp/gPw9b6XpkAgtLZcKO7nuzHux7mtOvVoU/ZwUT88zfH/XMVKulZdPRBRRRWp5gUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//2Q==";
        var doc = new __WEBPACK_IMPORTED_MODULE_5_jspdf__('p', 'pt');
        doc.addImage(logodataurl, 'JPEG', 50, 20, 80, 30);
        doc.setFontSize(12);
        doc.text(50, 80, "Reporte a la fecha de " + this.actualReport.dateString);
        doc.text(50, 100, "Generado por Usuario " + this.userData.showname);
        var columns = new Array();
        var rows = new Array();
        var first_margin = 120;
        this.actualReport.citas.forEach(function (cita) {
            columns = new Array();
            rows = new Array();
            /**IMPRIMIENDO CITA**/
            columns.push({ title: "Paciente", dataKey: "Paciente" });
            columns.push({ title: "Doctor", dataKey: "Doctor" });
            columns.push({ title: "Servicio", dataKey: "Servicio" });
            columns.push({ title: "Costo", dataKey: "Costo" });
            rows.push({
                "Paciente": "" + cita.paciente,
                "Doctor": cita.doctor_name + "/ " + cita.doctor_alias,
                "Servicio": "",
                "Costo": ""
            });
            cita.reporteServicios.forEach(function (servicio) {
                rows.push({
                    "Paciente": "",
                    "Doctor": "",
                    "Servicio": "" + servicio.title,
                    "Costo": "" + servicio.costo
                });
            });
            rows.push({
                "Paciente": "",
                "Doctor": "",
                "Servicio": "Total",
                "Costo": "" + cita.costo
            });
            var margin = 2 + first_margin;
            _this.printtable(doc, columns, rows, margin);
            first_margin = 0;
            /**IMPRIMIENDO  TOTALES DE CITA**/
            columns = new Array();
            rows = new Array();
            columns.push({ title: "Total Servicios", dataKey: "TotalS" });
            columns.push({ title: "Efectivo", dataKey: "Efectivo" });
            columns.push({ title: "Tarjeta", dataKey: "Tarjeta" });
            columns.push({ title: "Cheque", dataKey: "Cheque" });
            columns.push({ title: "Facturado", dataKey: "Facturado" });
            columns.push({ title: "Adeudo", dataKey: "Adeudo" });
            rows.push({
                "TotalS": "" + cita.costo,
                "Efectivo": "" + cita.cobroTarjeta,
                "Tarjeta": "" + cita.cobroEfectivo,
                "Cheque": "" + cita.cobroCheque,
                "Facturado": "" + cita.facturado,
                "Adeudo": "" + (cita.costo - cita.cobro)
            });
            _this.printtable(doc, columns, rows, 2);
        });
        /**IMPRIMIENDO  ESTADISTICAS**/
        columns = new Array();
        rows = new Array();
        columns.push({ title: "Citas Totales", dataKey: "noCitas" });
        columns.push({ title: "Citas Canceladas", dataKey: "noCancel" });
        columns.push({ title: "Duracion Total", dataKey: "Duracion" });
        rows.push({
            "noCitas": "" + this.noCitas,
            "noCancel": "" + this.noCancel,
            "Duracion": "" + this.duracionTotalStr
        });
        this.printtable(doc, columns, rows, 2);
        /**IMPRIMIENDO  GRANDTOTALES**/
        columns = new Array();
        rows = new Array();
        columns.push({ title: "", dataKey: "titulo" });
        columns.push({ title: "Facturado", dataKey: "Facturado" });
        columns.push({ title: "Pendiente", dataKey: "Pendiente" });
        columns.push({ title: "Efectivo", dataKey: "Efectivo" });
        columns.push({ title: "Tarjeta", dataKey: "Tarjeta" });
        columns.push({ title: "Cheques", dataKey: "Cheques" });
        columns.push({ title: "Total", dataKey: "Total" });
        rows.push({
            "titulo": "Cuentas",
            "Efectivo": "",
            "Tarjeta": "",
            "Cheques": "",
            "Total": "" + this.costoTotal,
            "Facturado": "",
            "Pendiente": ""
        });
        rows.push({
            "titulo": "Caja",
            "Efectivo": "" + this.totalefectivo,
            "Tarjeta": "" + this.totalTarjeta,
            "Cheques": "" + this.totalCheques,
            "Total": "" + this.total,
            "Facturado": "" + this.facturadoTotal,
            "Pendiente": "" + this.pendiente
        });
        this.printtable(doc, columns, rows, 20);
        doc.save("Reporte" + this.actualReport.dateString + ".pdf");
        doc.autoTable.previous = 0;
    };
    ReportPresentatorProvider.prototype.printtable = function (doc, columns, rows, margintop) {
        doc.autoTable(columns, rows, {
            startY: doc.autoTableEndPosY() + margintop,
            pageBreak: 'auto',
            styles: { fillColor: [200, 200, 200] },
        });
    };
    ReportPresentatorProvider.REPORT_TICKET = 2;
    ReportPresentatorProvider.REPORT_COMPLETE = 1;
    ReportPresentatorProvider.REPORT_GRUPAL = 3;
    ReportPresentatorProvider.REPORT_ADEUDO = 4;
    ReportPresentatorProvider = ReportPresentatorProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__reporte_citas_reporte_citas__["a" /* ReporteCitasProvider */],
            __WEBPACK_IMPORTED_MODULE_8__reporte_servicios_reporte_servicios__["a" /* ReporteServiciosProvider */],
            __WEBPACK_IMPORTED_MODULE_2__loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_7__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_12__doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_13__subusers_data_subusers_data__["a" /* SubusersDataProvider */],
            __WEBPACK_IMPORTED_MODULE_9__reportes_data_reportes_data__["a" /* ReportesDataProvider */],
            __WEBPACK_IMPORTED_MODULE_10__reportes_manager_reportes_manager__["a" /* ReportesManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_15__permissions_permissions__["a" /* PermissionsProvider */],
            __WEBPACK_IMPORTED_MODULE_16__subscription_data_subscription_data__["a" /* SubscriptionDataProvider */],
            __WEBPACK_IMPORTED_MODULE_17__base_url_base_url__["a" /* BaseUrlProvider */]])
    ], ReportPresentatorProvider);
    return ReportPresentatorProvider;
    var ReportPresentatorProvider_1;
}());

//# sourceMappingURL=report-presentator.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubusersManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drupal_user_manager_drupal_user_manager__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctores_data_doctores_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subusers_data_subusers_data__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__subscription_data_subscription_data__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__drupal_node_manager_drupal_node_manager__ = __webpack_require__(53);
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







/*
  Generated class for the SubusersManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SubusersManagerProvider = /** @class */ (function () {
    function SubusersManagerProvider(subusersData, userData, userMan, docData, subsData, nodeManager) {
        this.subusersData = subusersData;
        this.userData = userData;
        this.userMan = userMan;
        this.docData = docData;
        this.subsData = subsData;
        this.nodeManager = nodeManager;
        console.log('Hello SubusersManagerProvider Provider');
    }
    SubusersManagerProvider_1 = SubusersManagerProvider;
    /*async fullUserLoad(){
  
      await this.cargarSubusuarios();
      await this.cargarSubusuariosSubs();
    }*/
    /**
     * Cargamos sub usuarios. dejamos de usar el loadsubusers normal porque no se aplica la carga de usuarios por los usuarios que tengan agregado al doctor.
     * ahora se cargan solo los usuarios en la suscripcion.
    */
    SubusersManagerProvider.prototype.cargarSubusuarios = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //this.subusersData.subscriptionSubUsers = new Array();
                    //this.subusersData.subUsers = new Array();
                    //await this.loadSubusers();
                    return [4 /*yield*/, this.loadSubusersSubs()];
                    case 1:
                        //this.subusersData.subscriptionSubUsers = new Array();
                        //this.subusersData.subUsers = new Array();
                        //await this.loadSubusers();
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SubusersManagerProvider.prototype.loadSubusers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, _i, res_1, us;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestSubusuarios().toPromise()];
                    case 1:
                        res = _a.sent();
                        console.log('loading subusers res', res);
                        for (_i = 0, res_1 = res; _i < res_1.length; _i++) {
                            us = res_1[_i];
                            this.setSubusuariosResult(us);
                        }
                        console.log('loaded subusers', this.subusersData.subUsers);
                        return [2 /*return*/];
                }
            });
        });
    };
    SubusersManagerProvider.prototype.loadSubusersSubs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var res, _i, res_2, us;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestSubusuariosSubs().toPromise()];
                    case 1:
                        res = _a.sent();
                        console.log('loading subusers for subscription res', res);
                        //this.healSubscription(res,this.subsData.getSubusersIDs());
                        this.subusersData.subUsers = new Array();
                        for (_i = 0, res_2 = res; _i < res_2.length; _i++) {
                            us = res_2[_i];
                            this.setSubusuariosResult(us, __WEBPACK_IMPORTED_MODULE_4__subusers_data_subusers_data__["a" /* SubusersDataProvider */].SUBUSERS_SUBSCRIPTION);
                        }
                        this.subusersData.mySubUsers = this.subusersData.subUsers.filter(function (userd) {
                            return Number(userd.field_owner.und[0]) === Number(_this.userData.userData.uid);
                        });
                        console.log('loaded subusers', this.subusersData.subUsers);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * este es un metodo magico que cura la suscripcion si borras los usuarios con otros metodos macabros.
     * @param res  el resultadod e la busqueda de sub usuarios reales que existen que se encontraron wey
     * @param subsids  //los subids que piensa que tiene este wey
     */
    SubusersManagerProvider.prototype.healSubscription = function (res, subsids) {
        //vamos a ver si es cierto lo que dices wey
        subsids.forEach(function (subid) {
            //aquí no tengo como saber que hay en el puto res asi que necesito un usuario legal men.
        });
    };
    SubusersManagerProvider.prototype.loadGroupUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, _i, res_3, us;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestGroupUsers().toPromise()];
                    case 1:
                        res = _a.sent();
                        for (_i = 0, res_3 = res; _i < res_3.length; _i++) {
                            us = res_3[_i];
                            //this.setGroupUserResult(us,SubusersDataProvider.SUBUSERS_SUBSCRIPTION);
                        }
                        console.log('loaded GroupUsers', this.subusersData.subUsers);
                        return [2 /*return*/];
                }
            });
        });
    };
    SubusersManagerProvider.prototype.requestGroupUsers = function () {
        console.log('subdoctores', this.subsData.subscription.field_doctores);
        return this.userMan.requestUsers([this.subsData.subscription.field_doctores], null, null).share();
    };
    SubusersManagerProvider.prototype.requestSubusuarios = function () {
        return this.userMan.requestUsers([this.userData.userData.uid], null, null).share();
    };
    SubusersManagerProvider.prototype.requestSubusuariosSubs = function () {
        return this.userMan.requestUsers(null, null, this.subsData.getSubusersIDs()).share();
    };
    /**
     * Setea los resultados de la carga de usuarios.
     *
     * se diferenciaba de usuarios de la suscripcion y usuarios administradores de citas. pero ahora no se hace asi y ambos tipos se cargan a al misma pila
     * y no se cargan los usuarios que tengan al doctor actual en su lista.
     * @param user_data
     * @param subuser_type
     */
    SubusersManagerProvider.prototype.setSubusuariosResult = function (user_data, subuser_type) {
        if (subuser_type === void 0) { subuser_type = __WEBPACK_IMPORTED_MODULE_4__subusers_data_subusers_data__["a" /* SubusersDataProvider */].SUBUSER_CONSUMERS; }
        console.log('setSubusuariosResult data', user_data, subuser_type);
        var aux_user = this.generateUserdFromData(user_data);
        switch (subuser_type) {
            case __WEBPACK_IMPORTED_MODULE_4__subusers_data_subusers_data__["a" /* SubusersDataProvider */].SUBUSER_CONSUMERS:
                this.subusersData.addUser(aux_user);
                break;
            case __WEBPACK_IMPORTED_MODULE_4__subusers_data_subusers_data__["a" /* SubusersDataProvider */].SUBUSERS_SUBSCRIPTION:
                this.subusersData.addUser(aux_user); /*this.subusersData.addUserSubs(aux_user);*/
                break;
        }
    };
    SubusersManagerProvider.prototype.generateUserdFromData = function (user_data) {
        console.log('generating sub user from data', user_data);
        var aux_user = SubusersManagerProvider_1.getEmptyUserd();
        aux_user.uid = user_data.uid;
        aux_user.name = user_data.name;
        aux_user.field_owner.und[0] = user_data.field_owner.uid;
        aux_user.field_alias.und[0].value = user_data.field_alias;
        aux_user.field_nombre.und[0].value = user_data.field_nombre;
        aux_user.field_apellidos.und[0].value = user_data.field_apellidos;
        aux_user.field_useremail.und[0].email = user_data.field_useremail.email;
        aux_user.mail = user_data.mail;
        aux_user.status = "1";
        aux_user.field_codigo = user_data.field_codigo;
        aux_user.field_doctores['und'] = new Array();
        aux_user.selectedForGroup = false;
        for (var _i = 0, _a = user_data.field_doctores; _i < _a.length; _i++) {
            var doc = _a[_i];
            aux_user.field_doctores['und'].push(Number(doc.uid));
        }
        aux_user.field_tipo_de_usuario.und = new Array();
        if (user_data.field_tipo_de_usuario.value)
            aux_user.field_tipo_de_usuario.und.push(user_data.field_tipo_de_usuario.value);
        //console.log('GENERATED sub user', aux_user);
        return aux_user;
    };
    /**
     *
     * @param user user to check if it has been created by this user
     * checks if this user is registered on this subscription. meaning it has been created by this user.
     */
    SubusersManagerProvider.prototype.checkIsOwnSubuser = function (user) {
        return this.subsData.subscription.field_subusuarios.find(function (uid) { return Number(uid) === Number(user.uid); }) ? true : false;
    };
    /**
     * this removes the user from subscription rendering the user useless.
    */
    SubusersManagerProvider.prototype.removeUserFromSubscription = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var obs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.checkIsOwnSubuser(user)) return [3 /*break*/, 2];
                        this.subsData.subscription.removeSubUserFromSubs(user);
                        obs = this.nodeManager.updateNode(this.subsData.subscription.getData());
                        return [4 /*yield*/, obs.toPromise()];
                    case 1:
                        _a.sent();
                        this.subusersData.removeUserSubs(user);
                        //await this.removeSubuser(user);
                        console.log('sub removed and saved');
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /*
    * remove subuser takes this doctor out of the list of the subuser,
    * saves the subuser changes
    * and removes this subuser from the actual list
    *
    * */
    SubusersManagerProvider.prototype.removeSubuser = function (userd) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        SubusersManagerProvider_1.removeDoctorFromSubUser(userd, this.userData.userData.uid);
                        console.log('actualizando usuario sin doc id ', userd);
                        delete userd.field_sub_id;
                        console.log('field doctores is', userd.field_doctores);
                        return [4 /*yield*/, this.userMan.updateUserd(userd).subscribe(function (val) { console.log('removeSubuser updateuserd res', val); }, function (error) { console.log('removeSubuser updateuserd error', error); })];
                    case 1:
                        _a.sent();
                        this.subusersData.removeUser(userd);
                        return [2 /*return*/];
                }
            });
        });
    };
    SubusersManagerProvider.prototype.addSubuser = function (userd) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        SubusersManagerProvider_1.addDoctorToSubUser(userd, this.userData.userData.uid);
                        console.log('actualizando usuario con doc id ', userd);
                        delete userd.field_sub_id;
                        return [4 /*yield*/, this.userMan.updateUserd(userd).toPromise()];
                    case 1:
                        _a.sent();
                        this.subusersData.addUser(userd);
                        return [2 /*return*/];
                }
            });
        });
    };
    SubusersManagerProvider.removeDoctorFromSubUser = function (user, uid) {
        if (user.field_doctores && user.field_doctores.und)
            user.field_doctores.und = user.field_doctores.und.filter(function (docuid) { return Number(docuid) !== Number(uid); });
    };
    SubusersManagerProvider.addDoctorToSubUser = function (user, uid) {
        if (!user.field_doctores.und) {
            user.field_doctores.und = new Array();
        }
        user.field_doctores.und.push(uid);
    };
    SubusersManagerProvider.getEmptyUserd = function () {
        return {
            uid: 0,
            name: "",
            pass: "",
            mail: "",
            status: "",
            roles: [0],
            field_tipo_de_usuario: { und: [0] },
            field_useremail: { und: [{ email: "" }] },
            field_nombre: { und: [{ value: "" }] },
            field_apellidos: { und: [{ value: "" }] },
            field_especialidad: { und: [{ value: "" }] },
            field_alias: { und: [{ value: "" }] },
            field_calle: { und: [{ value: "" }] },
            field_no_ext: { und: [{ value: "" }] },
            field_no_int: { und: [{ value: "" }] },
            field_codigo_postal: { und: [{ value: "" }] },
            field_ciudad: { und: [{ value: "" }] },
            field_colonia: { und: [{ value: "" }] },
            field_pais: { und: [{ value: "" }] },
            field_municipio: { und: [{ value: "" }] },
            field_estado_ubicacion: { und: [{ value: "" }] },
            field_plan_date: { und: [{ value: { date: "" } }] },
            field_forma_pago: { und: [{ value: "" }] },
            tutorial_state: { und: [{ value: 0 }] },
            field_codigo: { und: [{ value: "" }] },
            field_doctores: { und: [0] },
            field_sub_id: { und: [0] },
            field_planholder: { und: [{ value: true }] },
            field_stripe_customer_id: { und: [{ value: "" }] },
            field_src_json_info: { und: [{ value: "" }] },
            selectedForGroup: false,
            field_owner: { und: [0] }
        };
    };
    SubusersManagerProvider = SubusersManagerProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__subusers_data_subusers_data__["a" /* SubusersDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__drupal_user_manager_drupal_user_manager__["a" /* DrupalUserManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__subscription_data_subscription_data__["a" /* SubscriptionDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__drupal_node_manager_drupal_node_manager__["a" /* DrupalNodeManagerProvider */]])
    ], SubusersManagerProvider);
    return SubusersManagerProvider;
    var SubusersManagerProvider_1;
}());

//# sourceMappingURL=subusers-manager.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanesDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data_planes__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_url_base_url__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the PlanesDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PlanesDataProvider = /** @class */ (function () {
    function PlanesDataProvider(http, bu) {
        this.http = http;
        this.bu = bu;
        this.planes = new Array(); //planes que ofrece drap.
        this.Setted = false; //true if planes have been loaded already
    }
    PlanesDataProvider.prototype.loadPlanes = function () {
        var _this = this;
        this.requestPlanes().subscribe(function (val) {
            _this.setPlanes(val);
        });
    };
    PlanesDataProvider.prototype.setPlanes = function (input_data) {
        for (var _i = 0, input_data_1 = input_data; _i < input_data_1.length; _i++) {
            var plan_data = input_data_1[_i];
            if (!this.checkForPlanUpdate(plan_data)) {
                var aux_plan = new __WEBPACK_IMPORTED_MODULE_2__user_data_planes__["a" /* planes */]();
                aux_plan.setData(plan_data);
                this.planes.push(aux_plan);
            }
        }
        this.planes = this.planes.sort(function (a, b) {
            var ret = 0;
            if (a.field_orden > b.field_orden) {
                ret = 1;
            }
            if (b.field_orden > a.field_orden) {
                ret = -1;
            }
            return ret;
        });
    };
    PlanesDataProvider.prototype.requestPlanes = function () {
        var url = this.bu.endpointUrl + 'rest_planes.json';
        var observable = this.http.get(url);
        return observable.share();
    };
    PlanesDataProvider.checkForPlanAvailability = function (sus, plan) {
        return !(sus.field_doctores.length >= plan.field_no_doctores);
    };
    /**
     * returns true if it updates a plan,
     * returns false if no plan found for this input data nid
     * **/
    PlanesDataProvider.prototype.checkForPlanUpdate = function (input_data) {
        var ret = false;
        this.planes.forEach(function (plan) {
            if (plan.checkNid(input_data.nid)) {
                plan.setData(input_data);
                ret = true;
                return ret;
            }
        });
        return ret;
    };
    PlanesDataProvider.prototype.getPlanById = function (plan_nid) {
        return this.planes.find(function (planes) { return Number(planes.nid) === Number(plan_nid); });
    };
    PlanesDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__base_url_base_url__["a" /* BaseUrlProvider */]])
    ], PlanesDataProvider);
    return PlanesDataProvider;
}());

//# sourceMappingURL=planes-data.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubusersDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the SubusersDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SubusersDataProvider = /** @class */ (function () {
    function SubusersDataProvider() {
        this.subUsers = new Array();
        this.mySubUsers = new Array(); //usuarios que fueron creados por este usuario.
        this.subscriptionSubUsers = new Array();
    }
    SubusersDataProvider_1 = SubusersDataProvider;
    Object.defineProperty(SubusersDataProvider.prototype, "selectedForGroup", {
        /**
         * esta cosa esta listando los sub users.
         * pero usa subscriptionsubusers para calcular los restantes en el plan.
         * asi que vamos a cambiar a subscriptionsubusers. ?
        */
        get: function () {
            return this.mySubUsers.filter(function (userd) {
                return userd.selectedForGroup;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubusersDataProvider.prototype, "selectedForGroupNum", {
        get: function () {
            return this.selectedForGroup.length;
        },
        enumerable: true,
        configurable: true
    });
    SubusersDataProvider.prototype.addUser = function (user) { this.add(user); };
    SubusersDataProvider.prototype.removeUser = function (user) { this.remove(user); };
    SubusersDataProvider.prototype.checkUpdate = function (user) { return this.check(user); };
    SubusersDataProvider.prototype.addUserSubs = function (user) { console.log('add subusersSUBS'); this.add(user, this.subscriptionSubUsers); };
    SubusersDataProvider.prototype.removeUserSubs = function (user) { this.remove(user, SubusersDataProvider_1.SUBUSERS_SUBSCRIPTION); };
    SubusersDataProvider.prototype.checkUpdateSubs = function (user) { return this.check(user, this.subscriptionSubUsers); };
    SubusersDataProvider.prototype.add = function (user, list) {
        if (list === void 0) { list = this.subUsers; }
        console.log('add subusersSUBS LIST IS', list);
        console.log('user', user);
        if (!this.check(user, list))
            list.push(user);
    };
    SubusersDataProvider.prototype.remove = function (user, list) {
        if (list === void 0) { list = SubusersDataProvider_1.SUBUSER_CONSUMERS; }
        switch (list) {
            case SubusersDataProvider_1.SUBUSER_CONSUMERS:
                this.subUsers = this.subUsers.filter(function (users) { return Number(users.uid) !== Number(user.uid); });
                break;
            case SubusersDataProvider_1.SUBUSERS_SUBSCRIPTION:
                this.subscriptionSubUsers = this.subscriptionSubUsers.filter(function (users) { return Number(users.uid) !== Number(user.uid); });
                break;
        }
    };
    SubusersDataProvider.prototype.check = function (user, list) {
        if (list === void 0) { list = this.subUsers; }
        var ret = false;
        var found = list.find(function (users) { return Number(users.uid) === Number(user.uid); });
        if (found) {
            list[list.indexOf(found)] = user;
            ret = true;
        }
        return ret;
    };
    SubusersDataProvider.SUBUSER_CONSUMERS = 0;
    SubusersDataProvider.SUBUSERS_SUBSCRIPTION = 1;
    SubusersDataProvider = SubusersDataProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SubusersDataProvider);
    return SubusersDataProvider;
    var SubusersDataProvider_1;
}());

//# sourceMappingURL=subusers-data.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data_Notification__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_data_notifications_data__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_url_base_url__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__drupal_node_manager_drupal_node_manager__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the NotificationsManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NotificationsManagerProvider = /** @class */ (function () {
    function NotificationsManagerProvider(http, notificationData, userData, bu, nodeMan) {
        this.http = http;
        this.notificationData = notificationData;
        this.userData = userData;
        this.bu = bu;
        this.nodeMan = nodeMan;
    }
    /**
    * NOTIFICACIONES
    * **/
    NotificationsManagerProvider.prototype.cargarNotificaciones = function () {
        var _this = this;
        var observer = this.getNotificationObservable().share();
        observer.subscribe(function (val) { _this.setNotifications(val); });
        return observer;
    };
    NotificationsManagerProvider.prototype.getNotificationObservable = function () {
        var uidFilter = "?args[0]=" + this.userData.userData.uid;
        var url = this.bu.endpointUrl + "rest_notifications.json" + uidFilter;
        var observer = this.http.get(url);
        return observer;
    };
    NotificationsManagerProvider.prototype.setNotifications = function (input_val) {
        var _loop_1 = function (noti) {
            var found = false;
            this_1.notificationData.notificaciones.forEach(function (snoti) {
                if (Number(snoti.Nid) === Number(noti.nid)) {
                    found = true;
                    snoti.setData(noti);
                }
            });
            if (!found) {
                var aux_notification = new __WEBPACK_IMPORTED_MODULE_2__user_data_Notification__["a" /* Notification_c */]();
                aux_notification.setData(noti);
                this_1.notificationData.notificaciones.push(aux_notification);
            }
        };
        var this_1 = this;
        for (var _i = 0, input_val_1 = input_val; _i < input_val_1.length; _i++) {
            var noti = input_val_1[_i];
            _loop_1(noti);
        }
    };
    NotificationsManagerProvider.prototype.operateNotification = function (noti) {
        this.notificationData.Subject.next(noti.action);
    };
    NotificationsManagerProvider.prototype.operatePushNotification = function (action) {
        this.notificationData.Subject.next(action);
    };
    NotificationsManagerProvider.prototype.generateNotification = function (forUid, text, action) {
        var newNotification = new __WEBPACK_IMPORTED_MODULE_2__user_data_Notification__["a" /* Notification_c */]();
        newNotification.user = forUid;
        newNotification.text = text;
        newNotification.action = action;
        var auxdata = newNotification.getData();
        this.nodeMan.generateNewNode(auxdata).toPromise();
    };
    NotificationsManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__notifications_data_notifications_data__["a" /* NotificationsDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__base_url_base_url__["a" /* BaseUrlProvider */],
            __WEBPACK_IMPORTED_MODULE_6__drupal_node_manager_drupal_node_manager__["a" /* DrupalNodeManagerProvider */]])
    ], NotificationsManagerProvider);
    return NotificationsManagerProvider;
}());

//# sourceMappingURL=notifications-manager.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportesDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_data_reportes__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ReportesDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ReportesDataProvider = /** @class */ (function () {
    function ReportesDataProvider() {
        this.reportes = new Array();
        this.todayReport = null;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        console.log('Hello ReportesDataProvider Provider');
    }
    Object.defineProperty(ReportesDataProvider.prototype, "isSetTodayReport", {
        get: function () {
            return (this.todayReport !== null && this.todayReport.nid !== null);
        },
        enumerable: true,
        configurable: true
    });
    ReportesDataProvider.prototype.addReporte = function (input_data, today, call) {
        if (today === void 0) { today = false; }
        if (call === void 0) { call = false; }
        console.log('adding reporte', input_data, new Date(input_data['field_datestartutmb']['value']));
        if (!this.checkForUpdate(input_data)) {
            this.addNewReporte(input_data, today);
        }
        if (call)
            this.subject.next(this.reportes);
        console.log('generatedReport', input_data, this.reportes);
    };
    ReportesDataProvider.prototype.removeReporte = function (reporte, call) {
        if (call === void 0) { call = true; }
        this.reportes = this.reportes.filter(function (reportes) { return reportes.nid !== reporte.nid; });
        if (call)
            this.subject.next(this.reportes);
        console.log('removed cita', reporte, this.reportes);
    };
    ReportesDataProvider.prototype.addNewReporte = function (input_data, today) {
        if (today === void 0) { today = false; }
        var aux_rep = new __WEBPACK_IMPORTED_MODULE_1__user_data_reportes__["a" /* reportes */]();
        aux_rep.setData(input_data);
        if (today) {
            this.todayReport = aux_rep;
            console.log('setting todayreport HERE', this.todayReport);
        }
        else {
            this.reportes.push(aux_rep);
        }
    };
    ReportesDataProvider.prototype.checkForUpdate = function (input_data) {
        var ret = false;
        var aux_reportes = this.reportes.filter(function (reportes) { return Number(input_data.nid) === Number(reportes.nid); });
        if (aux_reportes.length > 0) {
            aux_reportes[0].setData(input_data);
            ret = true;
        }
        return ret;
    };
    ReportesDataProvider.prototype.checkTodayReportNid = function (Nid) {
        console.log('this.todayReport.nid', this.todayReport.nid);
        console.log('Nid', Nid);
        return Number(this.todayReport.nid) === Number(Nid);
    };
    ReportesDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ReportesDataProvider);
    return ReportesDataProvider;
}());

//# sourceMappingURL=reportes-data.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctoresManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctores_data_doctores_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_data_doctores__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__drupal_user_manager_drupal_user_manager__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__drupal_node_editor_drupal_node_editor__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subscription_manager_subscription_manager__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__citas_data_citas_data__ = __webpack_require__(22);
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









/*
  Generated class for the DoctoresManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DoctoresManagerProvider = /** @class */ (function () {
    function DoctoresManagerProvider(http, docData, userData, userMan, subsMan, nodeEditor, citasData) {
        var _this = this;
        this.http = http;
        this.docData = docData;
        this.userData = userData;
        this.userMan = userMan;
        this.subsMan = subsMan;
        this.nodeEditor = nodeEditor;
        this.citasData = citasData;
        this.citasSubject = this.citasData.citasSubject;
        this.citasSubject.subscribe(function (val) {
            //whem there is a change on citas, doctor manager evaluates citas to get nextCitas for these doctors.
            console.log('citas change on doctor manager', val);
            _this.evaluateCitas();
        });
        var intervalUntil = setInterval(function () {
            for (var _i = 0, _a = _this.docData.doctores; _i < _a.length; _i++) {
                var doctor = _a[_i];
                if (doctor.nextCita) {
                    doctor.nextCita.untilMs = doctor.nextCita.getUntilMs();
                }
            }
        }, 1000);
    }
    /**
     * Este metodo carga los uids de los doctores del usuario:
     * si es un doctor carga su propio uid
     * si es una subcuenta carga los uids de todos los doctores que esta manejando.
    */
    DoctoresManagerProvider.prototype.initDoctoresUids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var auxDoc, docs_data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('initDoctoresUids');
                        this.docData.docIdsToLoad = new Array();
                        if (!this.userData.checkUserPermission([__WEBPACK_IMPORTED_MODULE_4__user_data_user_data__["a" /* UserDataProvider */].TIPO_DOCTOR])) return [3 /*break*/, 1];
                        auxDoc = new __WEBPACK_IMPORTED_MODULE_3__user_data_doctores__["a" /* Doctores */]();
                        auxDoc.Uid = Number(this.userData.userData.uid);
                        auxDoc.name = this.userData.showname;
                        auxDoc.field_alias = this.userData.userData.field_alias['und'][0]['value'];
                        this.docData.addDoctor(auxDoc);
                        return [3 /*break*/, 3];
                    case 1:
                        console.log('not a doctor setting docs uids');
                        this.loadGroupDoctors(); //aquí cargamos los doctores de la suscripcion
                        //despues de el metodo de aquí arriba, los ids de los doctores estarian en docdata.docIdsToLoad
                        console.log('docIdsToLoad lleno?', this.docData.docIdsToLoad.length, this.docData.docIdsToLoad);
                        console.log('field_doctores vacio?', this.userData.userData.field_doctores);
                        if (!(this.docData.docIdsToLoad.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.userMan.requestUsers(null, null, this.docData.docIdsToLoad).toPromise()];
                    case 2:
                        docs_data = _a.sent();
                        console.log('docs_data is', docs_data);
                        this.setDoctoresData(docs_data);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DoctoresManagerProvider.prototype.loadGroupDoctors = function () {
        console.log('loadGroupDoctors');
        if (this.subsMan.subsData.Groups.length > 0) {
            console.log('loadGroupDoctors this.subsMan.subsData.Groups', this.subsMan.subsData.Groups);
            for (var _i = 0, _a = this.subsMan.subsData.Groups; _i < _a.length; _i++) {
                var group = _a[_i];
                console.log('groups group', group); //DESDE AQUI?
                for (var _b = 0, _c = group.field_doctores; _b < _c.length; _b++) {
                    var doc = _c[_b];
                    this.docData.addDoctorToIdList(doc);
                }
            }
        }
    };
    DoctoresManagerProvider.prototype.setDoctores = function (Uids) {
        for (var _i = 0, Uids_1 = Uids; _i < Uids_1.length; _i++) {
            var uid = Uids_1[_i];
            var auxDoc = new __WEBPACK_IMPORTED_MODULE_3__user_data_doctores__["a" /* Doctores */]();
            auxDoc.Uid = uid;
            this.docData.addDoctor(auxDoc);
        }
    };
    DoctoresManagerProvider.prototype.setDoctoresData = function (docs_data) {
        console.log('setting docs based on data', docs_data);
        for (var _i = 0, docs_data_1 = docs_data; _i < docs_data_1.length; _i++) {
            var doc = docs_data_1[_i];
            var auxDoc = new __WEBPACK_IMPORTED_MODULE_3__user_data_doctores__["a" /* Doctores */]();
            auxDoc.Uid = doc.uid;
            auxDoc.name = doc.field_alias; //doc.name;
            auxDoc.field_alias = doc.field_alias;
            auxDoc.setDisponibilidad(doc.field_disponibilidad);
            this.docData.addDoctor(auxDoc);
            console.log('setDoctoresData', this.docData.doctores);
        }
    };
    DoctoresManagerProvider.prototype.filterActiveDoctors = function () {
        var _this = this;
        console.log('filterActiveDoctors');
        if (!this.userData.checkUserPermission([__WEBPACK_IMPORTED_MODULE_4__user_data_user_data__["a" /* UserDataProvider */].TIPO_DOCTOR])) {
            console.log('this is not a doc');
            this.docData.doctores = this.docData.doctores.filter(function (docs) {
                console.log('checking doc subs', docs);
                return _this.subsMan.checkSusOfDoctor(docs.Uid);
            });
        }
    };
    DoctoresManagerProvider.prototype.evaluateCitas = function () {
        console.log('total citas on eval doctores', this.citasData.citas);
        var _loop_1 = function (doctor) {
            doctor.nextCita = null;
            doctor.citaActiva = null;
            var aux_activa = this_1.citasData.citas.find(function (citas) {
                return (Number(citas.data.field_cita_doctor.und[0]) === Number(doctor.Uid))
                    && citas.checkState(__WEBPACK_IMPORTED_MODULE_8__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_ACTIVA);
            });
            if (aux_activa)
                doctor.citaActiva = aux_activa;
            var doc_citas = this_1.citasData.citas.filter(function (citas) { return Number(citas.data.field_cita_doctor.und[0]) === Number(doctor.Uid); });
            doctor.citasPendientes = this_1.getCitasPendientesOfDoc(doctor);
            var curated_citas = __WEBPACK_IMPORTED_MODULE_8__citas_data_citas_data__["a" /* CitasDataProvider */].sortFilterByCloserNow(doctor.citasPendientes);
            if (curated_citas.length > 0) {
                doctor.nextCita = curated_citas[0];
            }
            //cuando tenemos las citas podemos evaluarlas ordenando por datems lo que nos dara la cita mas proxima.
            //u obtener las cita activa.
        };
        var this_1 = this;
        for (var _i = 0, _a = this.docData.doctores; _i < _a.length; _i++) {
            var doctor = _a[_i];
            _loop_1(doctor);
        }
    };
    DoctoresManagerProvider.prototype.requestDoctores = function () {
    };
    /*
    cargarDoctores(){
      if(this.checkUserPermission([UserDataProvider.TIPO_DOCTOR])){
        //si es un doctor agregarse a si mismo a la lista de doctores.
        let aux_doc = new Doctores();
        aux_doc.Uid = this.userData.uid;
        this.doctores.addDoctor(aux_doc);
        }else{ //si no es un doctor cargar todos los doctores que esta manejando
          let doctoruids = new Array();
          for(let i = 0; i<this.userData.field_doctores.und.length; i++){
            let aux_doc = new Doctores();
            aux_doc.Uid = this.userData.field_doctores.und[i].uid;
            doctoruids.push(aux_doc.Uid);
            this.doctores.addDoctor(aux_doc);
          }
          Debugger.log(['doctores to search',doctoruids]);
          this.getUsers(null,null,doctoruids).subscribe(
            (val)=>{
              Debugger.log(['getData result Array',val]);
              let aux_results = Object.keys(val).map(function (key) { return val[key]; });
              aux_results.forEach(element => {
                Debugger.log(['setting  this element doc',element]);
                this.doctores.doctores.forEach(doc => {
                  if( Number(doc.Uid) === Number(element['uid']) ){
                    doc.name = element['name'];
                    doc.field_alias = element['field_alias'];
                  }
                });
              });
              Debugger.log(['doctores at the end of getting users',this.doctores.doctores]);
             
            },
            (response)=>{},
          );
        }
    }
    */
    DoctoresManagerProvider.prototype.getCitasPendientesOfDoc = function (doctor) {
        var ret = this.citasData.citas.filter(function (citas) {
            console.log(citas.Nid, citas.data.field_cita_doctor.und[0], doctor.Uid, citas.untilMs, citas.data.field_estado.und[0]['value']);
            return ((Number(citas.data.field_cita_doctor.und[0]) === Number(doctor.Uid))
                && citas.untilMs > 0
                && (citas.checkState(__WEBPACK_IMPORTED_MODULE_8__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_CONFIRMADA) || citas.checkState(__WEBPACK_IMPORTED_MODULE_8__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_PENDIENTE)));
        });
        console.log('filtering citas pendientes', ret);
        return ret;
    };
    DoctoresManagerProvider.prototype.pushDisponivilidad = function (uid, disponibilidad) {
        return __awaiter(this, void 0, void 0, function () {
            var doc, cloneData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        doc = this.docData.getDoctorByUid(uid);
                        doc.field_disponibilidad.push(disponibilidad);
                        cloneData = {
                            uid: doc.Uid,
                            field_disponibilidad: { und: doc.field_disponibilidad },
                        };
                        return [4 /*yield*/, this.userMan.updateUserd(cloneData).toPromise()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DoctoresManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__drupal_user_manager_drupal_user_manager__["a" /* DrupalUserManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_7__subscription_manager_subscription_manager__["a" /* SubscriptionManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__drupal_node_editor_drupal_node_editor__["a" /* DrupalNodeEditorProvider */],
            __WEBPACK_IMPORTED_MODULE_8__citas_data_citas_data__["a" /* CitasDataProvider */]])
    ], DoctoresManagerProvider);
    return DoctoresManagerProvider;
}());

//# sourceMappingURL=doctores-manager.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CordovaAvailableProvider; });
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


var CordovaAvailableProvider = /** @class */ (function () {
    function CordovaAvailableProvider(plt) {
        this.plt = plt;
    }
    Object.defineProperty(CordovaAvailableProvider.prototype, "isCordovaAvailable", {
        get: function () {
            var ret = true;
            if (!window.cordova) {
                //alert('This is a native feature. Please use a device');
                ret = false;
            }
            if (this.plt.is('core') || this.plt.is('mobileweb'))
                ret = false;
            return ret;
        },
        enumerable: true,
        configurable: true
    });
    CordovaAvailableProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]])
    ], CordovaAvailableProvider);
    return CordovaAvailableProvider;
}());

//# sourceMappingURL=cordova-available.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Citas; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debugger__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_date__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__ = __webpack_require__(22);




var Citas = /** @class */ (function () {
    function Citas() {
        this.startDate = null;
        this.endDate = null;
        this.retrasada = false;
        this.facturado = 0;
        this.serviceDataSet = false; //describe si los servicios de la cita han sido seteados cuando esta activa, evitando que se actualicen externamente.
        this.cobroDataSet = false; //describe si los cobros de la cita han sido seteados cuando esta en cobro, evitando que se actualicen externamente.
        this.reporteServicios = new Array();
        this.pagos = new Array();
        this.PagosonShow = new Array();
        this.doctor_playerid = null;
        this.caja_playerid = null;
        this.recepcion_playerid = null;
        this.opendetail = false;
        this.docuid = 0;
        this.bydoc = false;
        this.ediciones = new Array();
        this.todayEdiciones = new Array();
        //variables para reportes con pagos incluidos
        this.pagosfrom = 0;
        this.pagosto = 0;
        this.pagosEfectivo = 0;
        this.pagosCheque = 0;
        this.pagosTarjeta = 0;
        this.pagosFacturado = 0;
        this.pagosTotal = 0;
        this.originactivereport = false;
        this.ultimaFechaPago = 0;
        this.ultimaFechaText = '';
        this.ultimaFechaDisplayable = null;
        //variables con pagos de terceros
        this.pagosEfectivoOut = 0;
        this.pagosChequeOut = 0;
        this.pagosTarjetaOut = 0;
        this.pagosFacturadoOut = 0;
        this.pagosTotalOut = 0;
        //variables con pagos de doctor
        this.pagosEfectivoDoc = 0;
        this.pagosChequeDoc = 0;
        this.pagosTarjetaDoc = 0;
        this.pagosFacturadoDoc = 0;
        this.pagosTotalDoc = 0;
        //variables para reportes con ediciones incluidas.
        this.festado = 0;
        this.estado_anterior = null;
        this.init();
    }
    Object.defineProperty(Citas.prototype, "cajaSaved", {
        get: function () { console.log('cajasaved', this.data.field_cita_caja); return this.data.field_cita_caja.und[0].localeCompare('_none') !== 0 ? true : false; },
        enumerable: true,
        configurable: true
    });
    ;
    Citas.prototype.init = function () {
        this.addedServices = new Array();
        this.data = __WEBPACK_IMPORTED_MODULE_0__providers_user_data_user_data__["a" /* UserDataProvider */].getEmptyCita();
    };
    Object.defineProperty(Citas.prototype, "doctor_name", {
        get: function () { /*return this.data.doctor_name;*/ console.log('doctor alias is', this.data.doctor_alias); return this.data.doctor_alias; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "doctor_alias", {
        get: function () { return this.data.doctor_alias; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "caja_name", {
        get: function () { return this.data.field_caja_nombre.und[0].value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "paciente", {
        get: function () { return this.data.field_paciente.und[0].value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "costo", {
        get: function () { return Number(this.data.field_costo_sobrescribir.und[0].value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "cobro", {
        get: function () { return Number(this.data.field_cobro.und[0].value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "CantidadRestante", {
        //get cobroCheque(){return Number(this.data.field_cobro_cheque.und[0].value);}
        //get cobroEfectivo(){return Number(this.data.field_cobro_efectivo.und[0].value);}
        //get cobroTarjeta(){return Number(this.data.field_cobro_tarjeta.und[0].value);}
        get: function () { return (Number(this.costo) - Number(this.cobro)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "stateNumber", {
        get: function () { return Number(this.data.field_estado.und[0].value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "stateLabel", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].getStateLabel(Number(this.data.field_estado.und[0].value)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "fstateLabel", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].getStateLabel(Number(this.festado)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "stateColor", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].getStateColor(Number(this.data.field_estado.und[0].value)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "fstateColor", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].getStateColor(Number(this.festado)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "cobroCheque", {
        set: function (val) { this.data.field_cobro_cheque.und[0].value = Number(val); this.calcularCobroTotal(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "cobroEfectivo", {
        set: function (val) { this.data.field_cobro_efectivo.und[0].value = Number(val); this.calcularCobroTotal(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "cobroTarjeta", {
        set: function (val) { this.data.field_cobro_tarjeta.und[0].value = Number(val); this.calcularCobroTotal(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "ShowCorreo", {
        get: function () { return this.data.field_email.und[0].email ? this.data.field_email.und[0].email : 'Sin Correo'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "Showtelefono", {
        get: function () { return this.data.field_telefono.und[0].value && Number(this.data.field_telefono.und[0].value) !== 0 ? this.data.field_telefono.und[0].value : 'Sin Tel.'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "isAdeudoAnterior", {
        get: function () { return this.originactivereport && this.checkState(__WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_ADEUDO); },
        enumerable: true,
        configurable: true
    });
    Citas.prototype.calcularCobroTotal = function () { this.data.field_cobro.und[0].value = this.cobroTarjeta + this.cobroCheque + this.cobroEfectivo; };
    Object.defineProperty(Citas.prototype, "cantidadPagada", {
        get: function () {
            var cantidad_pagada = 0;
            //console.log(this.pagos);
            this.pagos.forEach(function (pago) {
                //console.log(pago['efe']);
                pago['efe'] = Number(pago['efe']).toFixed(2);
                pago['che'] = Number(pago['che']).toFixed(2);
                pago['tar'] = Number(pago['tar']).toFixed(2);
                cantidad_pagada += (Number(pago['efe']) + Number(pago['tar']) + Number(pago['che']));
            });
            //console.log('calculando cantidad pagada',cantidad_pagada);
            return cantidad_pagada;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "restantePagos", {
        get: function () {
            return this.costo - this.cantidadPagada;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Citas.prototype, "PagosonFecha", {
        get: function () {
            var _this = this;
            var ret;
            ret = this.pagos.filter(function (pago) {
                pago.efe = Number(Number(pago.efe).toFixed(2));
                pago.tar = Number(Number(pago.tar).toFixed(2));
                pago.che = Number(Number(pago.che).toFixed(2));
                pago.total = Number(pago.efe) + Number(pago.tar) + Number(pago.che);
                pago.total = Number(Number(pago.total).toFixed(2));
                return (_this.pagosfrom === 0 || (Number(pago.fec) >= Number(_this.pagosfrom) && Number(pago.fec) < Number(_this.pagosto)));
            });
            return ret.sort(function (a, b) {
                if (a.fec > b.fec)
                    return 1;
                if (a.fec < b.fec)
                    return -1;
                return 0;
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Este metodo compara los addedServices de esta cita con una lista de servicios introducida serviciosArray, retorna los servicios que se agregaron o se quitaron.
     * **/
    Citas.prototype.compareServicios = function (serviciosArray) {
        var _this = this;
        console.log('compareServicios', JSON.stringify(serviciosArray));
        console.log('addedServices', JSON.stringify(this.addedServices));
        this.todayEdiciones = new Array();
        var newRemovedServices = serviciosArray.filter(function (aux_serv_original) {
            var found = _this.addedServices.find(function (aux_serv_actual) {
                return (Number(aux_serv_actual.Nid) === Number(aux_serv_original.Nid));
            });
            return !found;
        });
        var newAddedServices = this.addedServices.filter(function (aux_serv_original) {
            console.log('aux_serv_original', aux_serv_original);
            var found = serviciosArray.find(function (aux_serv_actual) {
                return (Number(aux_serv_actual.Nid) === Number(aux_serv_original.Nid));
            });
            console.log('found', found);
            return !found;
        });
        console.log('added Services', newAddedServices);
        console.log('removed Services', newRemovedServices);
        newAddedServices.forEach(function (servicio) {
            var aux_edicion = {
                act: true,
                cos: Number(servicio.costo),
                title: 'se agrego servicio: ' + servicio.title,
                Nid: servicio.Nid,
                fec: '' + new Date().getTime()
            };
            _this.todayEdiciones.push(aux_edicion);
        });
        newRemovedServices.forEach(function (servicio) {
            var aux_edicion = {
                act: false,
                cos: 0 - servicio.costo,
                title: 'se removio servicio: ' + servicio.title,
                Nid: servicio.Nid,
                fec: '' + new Date().getTime()
            };
            _this.todayEdiciones.push(aux_edicion);
        });
        console.log('ediciones encontradas', this.todayEdiciones);
    };
    //obtiene los pagos que se hicieron a esta cita de fecha from a fecha to.
    //uid es el uid del usuario que esta consultado. para saber que pagos realizo el. y cuales no 
    Citas.prototype.setPagosFecha = function (from, to, uid) {
        var _this = this;
        console.log('traildater  setPagosFecha', from, to, uid);
        this.pagosfrom = from;
        this.pagosto = to;
        this.ultimaFechaPago = to;
        this.ultimaFechaText = '';
        this.pagosEfectivo = 0;
        this.pagosCheque = 0;
        this.pagosTarjeta = 0;
        this.pagosFacturado = 0;
        this.pagosEfectivoOut = 0;
        this.pagosChequeOut = 0;
        this.pagosTarjetaOut = 0;
        this.pagosFacturadoOut = 0;
        this.pagosEfectivoDoc = 0;
        this.pagosChequeDoc = 0;
        this.pagosTarjetaDoc = 0;
        this.pagosFacturadoDoc = 0;
        console.log('traildater newcita ');
        console.log('citadoctor es', this.data.field_cita_doctor);
        this.docuid = Number(this.data.field_cita_doctor.und[0]);
        if (!this.originactivereport) {
            var aux_lastcita = this.PagosonFecha.pop();
            if (aux_lastcita) {
                this.ultimaFechaPago = Number(aux_lastcita.fec);
            }
            this.ultimaFechaText = __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].getDisplayableDates(new Date(this.ultimaFechaPago)).date + ' - ' + __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].getDisplayableDates(new Date(this.ultimaFechaPago)).time;
            this.ultimaFechaDisplayable = __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].getDisplayableDates(new Date(this.ultimaFechaPago));
        }
        else {
            this.ultimaFechaPago = this.dateMs;
            this.ultimaFechaText = this.getDisplayableDates().date + ' - ' + this.getDisplayableDates().time;
            this.ultimaFechaDisplayable = this.getDisplayableDates();
        }
        this.PagosonFecha.forEach(function (pago) {
            console.log('traildater comparing date ', _this.ultimaFechaPago, pago.fec);
            console.log('trailpago', pago);
            _this.pagosEfectivo += Number(pago.efe);
            _this.pagosCheque += Number(pago.che);
            _this.pagosTarjeta += Number(pago.tar);
            _this.pagosFacturado += Number(pago.fac);
            console.log('checking pago', pago.uid, uid);
            console.log('trailpago efectivo', _this.pagosEfectivo);
            if (pago.uid && Number(pago.uid) === _this.docuid) {
                console.log('este pago  fue realizado por el doctor', pago);
                _this.pagosEfectivoDoc += Number(pago.efe);
                _this.pagosChequeDoc += Number(pago.che);
                _this.pagosTarjetaDoc += Number(pago.tar);
                _this.pagosFacturadoDoc += Number(pago.fac);
            }
            if (pago.uid && Number(pago.uid) !== Number(uid)) {
                console.log('este pago no fue realizado por este usuario', pago);
                _this.pagosEfectivoOut += Number(pago.efe);
                _this.pagosChequeOut += Number(pago.che);
                _this.pagosTarjetaOut += Number(pago.tar);
                _this.pagosFacturadoOut += Number(pago.fac);
            }
        });
        console.log('setPagosFecha cita is', this);
        //originactivereport
        //field_datemsb  
        this.testOriginactivereport(this.pagosfrom, this.pagosto);
        console.log(this.pagosEfectivo);
        this.pagosTotal = this.pagosEfectivo + this.pagosCheque + this.pagosTarjeta;
        this.pagosTotalOut = this.pagosEfectivoOut + this.pagosChequeOut + this.pagosTarjetaOut;
        this.pagosTotalDoc = this.pagosEfectivoDoc + this.pagosChequeDoc + this.pagosTarjetaDoc;
        //this.ultimaFechaText = DateProvider.getDisplayableDates(new Date(this.ultimaFechaPago)).date + DateProvider.getDisplayableDates(new Date(this.ultimaFechaPago)).time;
    };
    Citas.prototype.setEdicionesFechas = function (from, to) {
        console.log('setEdicionesFechas', this.ediciones);
        if (Number(to) === 0) {
            console.log('to is 0');
            to = new Date().getTime();
            console.log('to is now', to);
        }
        this.festado = 0;
        this.addedServicesFechas = new Array();
        this.edicionesFechas = new Array();
        console.log('ediciones', this.ediciones);
        //filtrar ediciones hasta este dia y ordenarlas por fecha
        this.edicionesFechas = this.ediciones.filter(function (edicion) {
            console.log('filtrando ediciones fechas edicion', edicion);
            console.log('edicion fecha', edicion.fec);
            console.log('filtro to', to);
            console.log('fec < to', Number(edicion.fec) <= Number(to));
            var ret = false;
            if (Number(edicion.fec) <= Number(to)) {
                ret = true;
            }
            if (ret) {
                edicion.dst = __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].getStringDate(new Date(Number(edicion.fec)));
                console.log('edicion.dst', edicion.dst);
            }
            return ret;
        }).sort(function (a, b) {
            var ret = 0;
            if (a.fec > b.fec)
                ret = 1;
            if (a.fec < b.fec)
                ret = -1;
            return ret;
        });
        //filtrar ediciones que sean estado y ordenarlos por fecha
        var states = this.edicionesFechas.filter(function (edicion) {
            var ret = false;
            if (edicion.state)
                ret = true;
            return ret;
        }).sort(function (a, b) {
            var ret = 0;
            if (a.fec > b.fec)
                ret = 1;
            if (a.fec < b.fec)
                ret = -1;
            return ret;
        });
        //obtener el ultimo estado (el mas actual)
        console.log('trailadeudo obtaining state');
        var latestState = { state: 0, fec: 0 };
        if (states.length > 0)
            latestState = states[states.length - 1];
        console.log('trailadeudo obtaining statelatestState', latestState);
        this.festado = latestState.state;
        if (this.festado === __WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].STATE_CANCELADA) {
            this.ultimaFechaDisplayable = __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].getDisplayableDates(new Date(Number(latestState.fec)));
        }
    };
    Citas.prototype.setEdicionesField = function () {
        console.log('setEdicionesField');
        console.log('todayEdiciones', this.todayEdiciones);
        console.log('ediciones', this.ediciones);
        var aux_edicion = this.ediciones;
        if (this.todayEdiciones) {
            aux_edicion = this.ediciones.concat(this.todayEdiciones);
        }
        this.data.field_ediciones_json = { und: [{ value: '' }] };
        this.data.field_ediciones_json.und[0].value = JSON.stringify(aux_edicion);
        console.log('ediciones field final ', this.data.field_ediciones_json);
    };
    Citas.prototype.setStateChangeEdition = function (state) {
        console.log('trail3 setStateChangeEdition', state);
        if (Number(state) !== Number(this.estado_anterior)) {
            var aux_edicion = {
                act: true,
                cos: 0,
                title: 'Cambio de estado a ' + __WEBPACK_IMPORTED_MODULE_3__citas_data_citas_data__["a" /* CitasDataProvider */].getStateLabel(state),
                Nid: 0,
                state: state,
                fec: '' + new Date().getTime()
            };
            this.todayEdiciones.push(aux_edicion);
            this.setEdicionesField();
            this.estado_anterior = state;
        }
    };
    Citas.prototype.testOriginactivereport = function (from, to) {
        console.log('testOriginactivereport', this.dateMs, from, to);
        if (Number(this.dateMs) >= from && Number(this.dateMs) < to) {
            console.log('es del reporte');
            this.originactivereport = true;
            console.log('isorigin');
        }
        else {
            console.log('no es del reporte');
            this.originactivereport = false;
            console.log('notorigin');
        }
    };
    /**
     * Sets Data from a result of the citas view on drupal.
     **/
    Citas.prototype.setData = function (data_input) {
        console.log("setData on cita", data_input);
        console.log("trailstartnul setData on cita", data_input);
        /* console.log('field_fechas_reporte',data_input.field_fechas_reporte);
         console.log('field_ediciones_json',data_input['field_ediciones_json']);
         console.log('field_ediciones_json', data_input['field_ediciones_json'][0]['value'] );*/
        console.log('field_ediciones_json', data_input['field_ediciones_json']);
        this.data = __WEBPACK_IMPORTED_MODULE_0__providers_user_data_user_data__["a" /* UserDataProvider */].getEmptyCita();
        this.data.Nid = data_input.Nid;
        this.data.doctor_name = data_input.doctor_name;
        this.data.doctor_alias = data_input.doctor_alias;
        this.data.field_paciente.und[0].value = data_input.field_paciente;
        this.data.field_email.und[0].email = data_input.field_email;
        this.data.field_telefono.und[0].value = data_input.field_telefono;
        this.data.field_cita_doctor.und[0] = data_input.doctor_uid;
        //let aux_caja_array = new Array();
        /*  this.data.field_cita_caja.und= new Array();
          if(data_input.caja_uid){
              console.log('datainput si tiene cajai',data_input.caja_uid);
              if((data_input.caja_uid+"").localeCompare("_none") !== 0){
                  this.data.field_cita_caja.und.push(data_input.caja_uid);
              }
          }
       
        console.log((data_input.caja_uid+"").localeCompare("_none"));
        console.log(data_input.caja_uid);
        console.log('setting caja ',this.data.field_cita_caja );*/
        this.data.field_cita_caja.und[0] = data_input.caja_uid;
        if (Number(this.data.field_cita_caja.und[0]) === Number(this.data.field_cita_doctor.und[0])) {
            this.bydoc = true;
            console.log('espordoctor woe');
        }
        this.data.field_cita_recepcion.und[0] = data_input.recepcion_uid;
        this.data.field_estado.und[0].value = data_input.field_estado;
        this.data.field_servicios_cita.und = data_input.field_servicios_cita;
        this.data.field_cobro.und[0].value = data_input.field_cobro;
        this.data.field_cobro_cheque.und[0].value = data_input.field_cobro_cheque;
        this.data.field_cobro_efectivo.und[0].value = data_input.field_cobro_efectivo;
        this.data.field_cobro_tarjeta.und[0].value = data_input.field_cobro_tarjeta;
        this.data.field_costo_sobrescribir.und[0].value = data_input.field_costo_sobrescribir;
        this.data.field_datemsb.und[0].value = Number(data_input.field_datemsb.value);
        this.dateMs = this.data.field_datemsb.und[0].value;
        this.data.field_retrasda.und[0].value = data_input.field_retrasda;
        this.data.field_hora_cobromsb.und[0].value = 0;
        this.data.field_fecha_reporte.und[0].value = 0;
        this.data.field_pagos_json = null;
        this.data.field_ediciones_json = null;
        this.data.field_fechas_reporte = { und: [] };
        this.data.field_caja_nombre.und[0].value = data_input.field_caja_nombre ? data_input.field_caja_nombre : "sin nombre";
        if (data_input.field_fecha_reporte)
            this.data.field_fecha_reporte.und[0].value = data_input.field_fecha_reporte;
        if (data_input.field_hora_cobromsb)
            this.data.field_hora_cobromsb.und[0].value = data_input.field_hora_cobromsb;
        if (data_input.field_hora_iniciomsb)
            this.data.field_hora_iniciomsb.und[0].value = Number(data_input.field_hora_iniciomsb.value);
        if (data_input.field_hora_finalmsb)
            this.data.field_hora_finalmsb.und[0].value = Number(data_input.field_hora_finalmsb.value);
        if (data_input['field_servicios_json'] && data_input['field_servicios_json']['value'])
            this.data.aux_servicios_json = data_input['field_servicios_json']['value']; //this.setServiciosReport(data_input['field_servicios_json']['value']);
        if (data_input['field_pagos_json'] && data_input['field_pagos_json']['value'])
            this.data.field_pagos_json = data_input['field_pagos_json']['value']; //this.setServiciosReport(data_input['field_servicios_json']['value']);
        if (data_input['field_ediciones_json'] && data_input['field_ediciones_json'][0])
            this.data.field_ediciones_json = data_input['field_ediciones_json'][0]['value']; //this.setServiciosReport(data_input['field_servicios_json']['value']);
        if (data_input.field_fechas_reporte)
            this.data.field_fechas_reporte.und = data_input.field_fechas_reporte;
        if (data_input.doctor_playerid)
            this.doctor_playerid = data_input.doctor_playerid;
        if (data_input.recepcion_playerid)
            this.recepcion_playerid = data_input.recepcion_playerid;
        if (data_input.caja_playerid)
            this.caja_playerid = data_input.caja_playerid;
        if (data_input.field_facturar)
            this.data.field_facturar.und[0] = data_input.field_facturar;
        if (data_input.field_facturar_cantidad) {
            this.data.field_facturar_cantidad.und[0] = data_input.field_facturar_cantidad;
            this.facturado = Number(data_input.field_facturar_cantidad.value);
        }
        console.log('cajas filter is ', data_input.field_cajas_filter);
        if (data_input.field_cajas_filter) {
            this.data.field_cajas_filter.und = data_input.field_cajas_filter.map(function (cajauid) { return { value: cajauid }; });
        }
        console.log('cajas filter data set as  ', this.data.field_cajas_filter);
        //this.setDate(data_input.field_date.value);
        console.log('processDatay setData');
        this.processData();
        console.log("savedData", this.data);
        console.log('cita ended laik', this);
    };
    Citas.prototype.processData = function () {
        console.log('trail1 processdata ', this.data.Nid);
        console.log('cita processing data');
        this.Nid = this.data.Nid;
        this.dateMs = this.data.field_datemsb.und[0].value;
        console.log('setting processData dateMs', this.dateMs);
        console.log('processData ediciones json ', this.data.field_ediciones_json);
        console.log('aux servicios json ', this.data.aux_servicios_json);
        if (this.data.aux_servicios_json)
            this.setServiciosReport(this.data.aux_servicios_json);
        if (this.data.field_pagos_json)
            this.setPagosJson(this.data.field_pagos_json);
        if (this.data.field_ediciones_json)
            this.setEdicionesJson(this.data.field_ediciones_json);
        this.facturado = Number(this.data.field_facturar_cantidad.und[0].value);
        this.setDateUT(this.data.field_datemsb.und[0].value);
        console.log('processdata hora cobro check', this.data.field_hora_cobromsb);
        this.setDurationDates(this.data.field_hora_iniciomsb.und[0].value, this.data.field_hora_finalmsb.und[0].value);
    };
    /**
     * estos dos metodos se encargan de guardar la hora de inicio y fin def la cita cuando cambia de estados pendiente a activa o activa a cobro.
    */
    Citas.prototype.setHoraInicio = function () {
        var now = new Date();
        this.data.field_hora_iniciomsb.und[0].value = now.getTime();
        this.data.field_hora_inicio.und[0].value.date = now.getUTCDate() + '/' + (now.getUTCMonth() + 1) + '/' + now.getUTCFullYear();
        this.data.field_hora_inicio.und[0].value.time = now.getUTCHours() + ":" + now.getUTCMinutes();
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(['data af hinicio', this.data]);
        //console.log("hora inicio on data",this.data.field_hora_inicio);
        //and this is saved later
    };
    Citas.prototype.setHoraFin = function () {
        var now = new Date();
        this.data.field_hora_finalmsb.und[0].value = now.getTime();
        this.data.field_hora_final.und[0].value.date = now.getUTCDate() + '/' + (now.getUTCMonth() + 1) + '/' + now.getUTCFullYear();
        this.data.field_hora_final.und[0].value.time = now.getUTCHours() + ":" + now.getUTCMinutes();
        console.log("hora final on data", this.data.field_hora_final);
        //and this is saved later
    };
    /**
     * Este metodo revisa si esta cita esta siendo cobrada en dias anteriores a la fecha en que se planifico.
     * en otras palabras revisa si la cita es del futuro. y si es del futuro y esta siendo cobrada hoy, se transforma en una cita de hoy.
     * cambiando la "fecha" de la cita al momento en que se cobra.
     */
    Citas.prototype.checkFromFuture = function () {
        var now = new Date();
        //let nowstart = new Date().setHours(0,0,0,0);
        var nowend = new Date().setHours(23, 59, 59, 999);
        var datestart = new Date(this.dateMs).setHours(0, 0, 0, 0);
        //let dateend = new Date(this.dateMs).setHours(23,59,59,999);  
        if (now.getTime() < datestart) {
            console.log('el dia de la cita aun no ha empezado.');
            /*this.data.field_datemsb.und[0].value = now.getTime();
            this.dateMs = now.getTime();*/
            //borrar las fechas del reporte que sobrepasan esta fecha porque ya no tendran valides.
            this.data.field_fechas_reporte.und = this.data.field_fechas_reporte.und.filter(function (fecha) {
                //console.log('fecha es',fecha, new Date(fecha.value));
                return fecha.value <= nowend;
            });
        }
    };
    Citas.prototype.saveDate = function () {
        var now = new Date();
        this.data.field_datemsb.und[0].value = now.getTime();
        this.dateMs = now.getTime();
    };
    Citas.prototype.setServiciosReport = function (input_data) {
        console.log('setServiciosReport', input_data);
        this.reporteServicios = JSON.parse(input_data);
        this.reporteServicios = this.reporteServicios.sort(function (a, b) {
            if (a.title > b.title)
                return 1;
            if (a.title < b.title)
                return -1;
            return 0;
        });
        console.log('reporteServicios', this.reporteServicios);
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(['added reportservicios', this.reporteServicios]);
    };
    Citas.prototype.setPagosJson = function (input_data) {
        console.log('input_data is', input_data);
        if (input_data['und']) {
            console.log('isarray');
            this.pagos = JSON.parse(input_data['und'][0]['value']);
        }
        else {
            console.log('is not array');
            this.pagos = JSON.parse(input_data);
        }
    };
    Citas.prototype.setEdicionesJson = function (input_data) {
        console.log('setEdicionesJson input_data is', input_data);
        if (input_data['und']) {
            console.log('isarray');
            this.ediciones = JSON.parse(input_data['und'][0]['value']);
        }
        else {
            console.log('is not array');
            this.ediciones = JSON.parse(input_data);
        }
        console.log(this.ediciones);
    };
    /**
     *  date needs some procesing:
     *   date comes in a non usable format for input.
     *   a date object is requiered to process it.
     **/
    Citas.prototype.setDate = function (date_input, onutc) {
        if (onutc === void 0) { onutc = false; }
        //Got date on utc so adding a Z to set it on utc and use getUTCDate to bypass any timezone
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(["cita setdate input: " + date_input]);
        if (onutc) {
            this.date = new Date(date_input);
        }
        else {
            this.date = new Date(date_input + 'Z');
        }
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(["cita UTC date is: " + this.date]);
        //set data date fields on the format requiered by inputs:
        this.data.field_date.und[0].value.date = this.date.getUTCDate() + '/' + (this.date.getUTCMonth() + 1) + '/' + this.date.getUTCFullYear();
        this.data.field_date.und[0].value.time = this.date.getUTCHours() + ":" + this.date.getUTCMinutes();
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(['set date is', this.data.field_date]);
        //set time until this date:
        this.getUntilMs();
        this.getUntilTimeString();
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(['set date is after', this.data.field_date]);
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(["Ms until this date: ", this.untilMs]);
        if (this.untilMs < 0) {
            this.retrasada = true;
            __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(['esta cita esta retrasada']);
        }
    };
    Citas.prototype.setDateUT = function (dateUTms) {
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log([dateUTms]);
        //Got date on utc so adding a Z to set it on utc and use getUTCDate to bypass any timezone
        this.date = new Date(dateUTms);
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(["cita UTms date is: " + this.date]);
        //set data date fields on the format requiered by inputs:
        this.data.field_date.und[0].value.date = __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].formatDateBinaryNumber(this.date.getUTCDate()) + "/" + __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].formatDateBinaryNumber((this.date.getUTCMonth() + 1)) + "/" + __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].formatDateBinaryNumber(this.date.getUTCFullYear());
        this.data.field_date.und[0].value.time = __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].formatDateBinaryNumber(this.date.getUTCHours()) + ":" + __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].formatDateBinaryNumber(this.date.getUTCMinutes());
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(['set date is', this.data.field_date]);
        //set time until this date:
        this.getUntilMs();
        this.getUntilTimeString();
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(['set date is after', this.data.field_date]);
        __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(["Ms until this date: ", this.untilMs]);
        if (this.untilMs < 0) {
            this.retrasada = true;
            __WEBPACK_IMPORTED_MODULE_1__debugger__["a" /* Debugger */].log(['esta cita esta retrasada']);
        }
        this.readableDate = this.getDisplayableDates().date;
        this.readableTime = this.getDisplayableDates().time;
        console.log('this.readableDate', this.readableDate);
        console.log('this.readableTime', this.readableTime);
    };
    Citas.prototype.setDurationDates = function (inicio_input, final_input) {
        console.log("inicio_input", inicio_input);
        console.log("final_input", final_input);
        //set dates to null to start
        this.startDate = null;
        this.endDate = null;
        this.data.field_hora_inicio.und[0].value.date = null;
        this.data.field_hora_inicio.und[0].value.time = null;
        this.data.field_hora_final.und[0].value.date = null;
        this.data.field_hora_final.und[0].value.time = null;
        //Got date on utc so adding a Z to set it on utc and use getUTCDate to bypass any timezone
        //if(inicio_input.value){
        if (inicio_input) {
            this.startDate = new Date(inicio_input);
            if (this.isValidDate(this.startDate)) {
                this.data.field_hora_inicio.und[0].value.date = this.startDate.getUTCDate() + '/' + (this.startDate.getUTCMonth() + 1) + '/' + this.startDate.getUTCFullYear();
                this.data.field_hora_inicio.und[0].value.time = this.startDate.getUTCHours() + ":" + this.startDate.getUTCMinutes();
            }
        }
        //if(final_input.value){
        if (final_input) {
            this.endDate = new Date(final_input);
            if (this.isValidDate(this.endDate)) {
                this.data.field_hora_final.und[0].value.date = this.endDate.getUTCDate() + '/' + (this.endDate.getUTCMonth() + 1) + '/' + this.endDate.getUTCFullYear();
                this.data.field_hora_final.und[0].value.time = this.endDate.getUTCHours() + ":" + this.endDate.getUTCMinutes();
            }
        }
        this.setDuracionMs();
        //console.log("obtained duracionMs",this.duracionMs);
    };
    Citas.prototype.isValidDate = function (d) {
        return d instanceof Date && !isNaN(d.getUTCDate());
    };
    Citas.prototype.setDuracionMs = function () {
        if (this.data.field_hora_iniciomsb['und'][0]['value'] && this.data.field_hora_finalmsb['und'][0]['value']) {
            this.duracionMs = (new Date(this.data.field_hora_finalmsb['und'][0]['value']).getTime() - new Date(this.data.field_hora_iniciomsb['und'][0]['value']).getTime());
        }
        else if (this.data.field_hora_iniciomsb['und'][0]['value']) {
            this.duracionMs = (new Date().getTime() - new Date(this.data.field_hora_iniciomsb['und'][0]['value']).getTime());
        }
        else {
            this.duracionMs = 0;
        }
        //Debugger.log(['this.duracionMs',this.duracionMs]);
        this.duracionText = __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].getDateDifText(this.duracionMs);
        //Debugger.log(['this.duracionText', this.duracionText]);
    };
    /**
     * this methods gives the Milliseconds until this date, can be negative.
     * will be used to get nextDate timer
     **/
    Citas.prototype.getUntilMs = function () {
        //let now = new Date('2018/5/14 01:35:00Z');
        var now = new Date();
        //Debugger.log(['comparing dates to get MS']);
        //Debugger.log([this.date]);
        //Debugger.log([now]);
        this.untilMs = (this.date.getTime() - now.getTime());
        //Debugger.log(['calculated untilMs',this.untilMs]);
        return this.untilMs;
    };
    Citas.prototype.getUntilTimeString = function () {
        var ret = "00";
        ret = __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].getDateDifText(this.untilMs);
        this.untilText = ret;
        return ret;
        /*let ret = null;
        let negative = false;
        let aux_untilMs = this.untilMs;
        //Debugger.log(['entering get until time string with ',aux_untilMs]);
        if(this.untilMs < 0){
            //Debugger.log(['untilMs es negativo']);
            negative = true;
            aux_untilMs = aux_untilMs*-1;
        }
        //Debugger.log(['untilMs af neg check',aux_untilMs]);
        let minutes = aux_untilMs/(60*1000);
        let hours = Math.floor(minutes/(60));
        minutes = Math.floor(( minutes - (hours * 60)));
        let stringHours = ""+hours;
        let stringMinutes = ""+minutes;
        while(stringHours.length < 2){stringHours = "0"+stringHours;}
        while(stringMinutes.length < 2){stringMinutes = "0"+stringMinutes;}
        ret = stringHours+":"+stringMinutes;
        if(negative){
            ret = `hace ${ret}`;
        }
        this.untilText = ret;
        return ret;*/
    };
    Citas.prototype.CloserThanMs = function (compareMS) {
        var ret = false;
        if (Number(this.untilMs) < compareMS)
            ret = true;
        return ret;
    };
    Citas.prototype.checkState = function (state) {
        return Number(this.data.field_estado.und[0].value) === Number(state);
    };
    Citas.prototype.setAddedServices = function (servicios) {
        var _this = this;
        console.log("populating addedServices with", servicios);
        this.addedServices = new Array();
        var _loop_1 = function (i) {
            console.log("searching for ", this_1.data.field_servicios_cita.und[i]);
            servicios.forEach(function (element) {
                if (Number(element.Nid) === Number(_this.data.field_servicios_cita.und[i])) {
                    _this.addedServices.push(element);
                    console.log("found");
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.data.field_servicios_cita.und.length; i++) {
            _loop_1(i);
        }
        console.log("addedServices", this.addedServices);
        console.log("vs data" + this.data.field_servicios_cita);
    };
    Citas.prototype.setServicesData = function () {
        var _this = this;
        console.log("populating data services_cita");
        this.data.field_servicios_cita.und = new Array();
        this.addedServices.forEach(function (element) {
            console.log("added service", element);
            _this.data.field_servicios_cita.und.push(element.Nid);
        });
        this.data.aux_servicios_json = JSON.stringify(this.addedServices);
        console.log('populated services json', this.data.aux_servicios_json);
        console.log("populated services_cita data", this.data.field_servicios_cita);
    };
    Citas.prototype.addServicio = function (servicio) {
        console.log('adding servicio', servicio);
        var ret = false;
        if (!servicio)
            return false;
        if (!this.checkServicio(servicio)) {
            this.addedServices.push(servicio);
            console.log('addServicio added services ', this.addedServices);
            ret = true;
        }
        return ret;
    };
    Citas.prototype.removeServicio = function (servicio) {
        return this.removeServicioNid(Number(servicio.Nid));
    };
    Citas.prototype.removeServicioNid = function (Nid) {
        var ret = false;
        this.addedServices = this.addedServices.filter(function (servicios) { return Number(servicios.Nid) !== Number(Nid); });
        return ret = true;
    };
    /**
     * returns a list of services that havent been added to this cita from a list of available services
     **/
    Citas.prototype.getServiciosAvailable = function (servicios) {
        var ret = new Array();
        console.log("trynna get servicios available from", servicios);
        for (var _i = 0, servicios_1 = servicios; _i < servicios_1.length; _i++) {
            var servicio = servicios_1[_i];
            console.log('checking servicio', servicio);
            if (servicio && !this.checkServicio(servicio)) {
                ret.push(servicio);
            }
        }
        /*servicios.forEach(element => {
            if(!this.checkServicio(element)){
                ret.push(element);
            }
       });*/
        return ret;
    };
    /**
     *  Tells you if a given service has been added to this cita
     **/
    Citas.prototype.checkServicio = function (servicio) {
        var ret = false;
        console.log("checking if cita contains servicio ", servicio);
        /*this.addedServices.forEach(element => {
            if(Number(element.Nid) === Number(servicio.Nid)  ){
                ret = true;
                console.log("added service");
            }
        });*/
        if (this.addedServices.find(function (servicios) { return Number(servicios.Nid) === Number(servicio.Nid); }))
            ret = true;
        console.log('found ? ', ret);
        return ret;
    };
    /* Esta mamada que xD**/
    Citas.prototype.getStateString = function () {
        return this.stateLabel;
        /*
        let state = parseInt(""+this.data.field_estado.und[0].value);
        let ret = "";
        switch(state){
          case UserDataProvider.STATE_PENDIENTE: ret="Pendiente"; break;
          case UserDataProvider.STATE_CONFIRMADA: ret="Confirmada"; break;
          case UserDataProvider.STATE_ACTIVA: ret="Activa"; break;
          case UserDataProvider.STATE_COBRO: ret="en Cobro"; break;
          case UserDataProvider.STATE_FINALIZADA: ret="Finalizada"; break;
          case UserDataProvider.STATE_CANCELADA: ret="Cancelada"; break;
        }
        return ret;*/
    };
    Citas.prototype.save = function () {
        console.log("saving this cita");
    };
    Citas.prototype.getDatetimeFormat = function () {
        var ret = "";
        var datestring = __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].formatDateBinaryNumber(this.date.getDate()) + "/" + (__WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].formatDateBinaryNumber(this.date.getMonth() + 1)) + "/" + this.date.getFullYear();
        var timestring = __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].formatDateBinaryNumber(this.date.getHours()) + ":" + __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].formatDateBinaryNumber(this.date.getMinutes());
        ret = datestring + "T" + timestring;
        return ret;
    };
    Citas.prototype.getDisplayableDates = function () {
        var ret = { "date": '', "time": '' };
        var datestring = __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].formatDateBinaryNumber(this.date.getDate()) + "/" + (__WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].formatDateBinaryNumber(this.date.getMonth() + 1)) + "/" + this.date.getFullYear();
        var timestring = __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].formatDateBinaryNumber(this.date.getHours()) + ":" + __WEBPACK_IMPORTED_MODULE_2__date_date__["a" /* DateProvider */].formatDateBinaryNumber(this.date.getMinutes());
        ret = { "date": datestring, "time": timestring };
        return ret;
    };
    Citas.prototype.isDateOnly = function () {
        var ret = false;
        if ((Number(this.data.field_estado.und[0]['value']) === -1)) {
            ret = true;
        }
        return ret;
    };
    Citas.dateTOTiers = function () {
    };
    Citas.getLocalDateIso = function (date) {
        var tzo = date.getTimezoneOffset(), dif = tzo >= 0 ? '+' : '-', pad = function (num) {
            var norm = Math.floor(Math.abs(num));
            return (norm < 10 ? '0' : '') + norm;
        };
        return date.getFullYear() +
            '-' + pad(date.getMonth() + 1) +
            '-' + pad(date.getDate()) +
            'T' + pad(date.getHours()) +
            ':' + pad(date.getMinutes()) +
            ':' + pad(date.getSeconds()) +
            dif + pad(tzo / 60) +
            ':' + pad(tzo % 60);
    };
    Citas.formatDateBinaryNumber = function (num) {
        return (num < 10 ? '0' : '') + num;
    };
    Citas.prototype.cortesiaAvailable = function () {
        console.log('cortesiaAvailable');
        console.log(this.addedServices);
        var addedWithoutCortesia = this.addedServices.filter(function (added) {
            return Number(added.order) !== 5;
        });
        var ret = true;
        if (addedWithoutCortesia.length > 0) {
            ret = false;
        }
        return ret;
    };
    return Citas;
}());

//# sourceMappingURL=citas.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdaterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctores_data_doctores_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subscription_manager_subscription_manager__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__doctores_manager_doctores_manager__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__permissions_permissions__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__subscription_data_subscription_data__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subusers_manager_subusers_manager__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__citas_data_citas_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__citas_manager_citas_manager__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__loader_loader__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__servicios_manager_servicios_manager__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__date_date__ = __webpack_require__(41);
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













/*
  Generated class for the UpdaterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UpdaterProvider = /** @class */ (function () {
    function UpdaterProvider(userData, docData, docMan, subscriptionManager, perm, subsData, subusersManager, citasData, citasManager, loader, serviciosManager, datep) {
        this.userData = userData;
        this.docData = docData;
        this.docMan = docMan;
        this.subscriptionManager = subscriptionManager;
        this.perm = perm;
        this.subsData = subsData;
        this.subusersManager = subusersManager;
        this.citasData = citasData;
        this.citasManager = citasManager;
        this.loader = loader;
        this.serviciosManager = serviciosManager;
        this.datep = datep;
    }
    UpdaterProvider.prototype.updateSuscription = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('updater updateSuscription');
                        if (!this.perm.checkUserPermission([__WEBPACK_IMPORTED_MODULE_1__user_data_user_data__["a" /* UserDataProvider */].TIPO_DOCTOR])) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.subscriptionManager.loadSubscription()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.subscriptionManager.loadGroupSubuserSubs()];
                    case 3:
                        _a.sent(); //se cargan subscripciones a las que estan agregados.
                        this.docMan.loadGroupDoctors(); //se cargan los doctores de las suscripciones a las que estan agregados.
                        _a.label = 4;
                    case 4:
                        this.userData.susSubject.next(this.subsData.isactive);
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdaterProvider.prototype.updateDocList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('updater updateDocList');
                        this.docData.doctores = new Array();
                        return [4 /*yield*/, this.docMan.initDoctoresUids()];
                    case 1:
                        _a.sent();
                        console.log('doc1', JSON.stringify(this.docData.doctores));
                        return [4 /*yield*/, this.subscriptionManager.loadDoctorsSubscriptions()];
                    case 2:
                        _a.sent();
                        console.log('doc2', JSON.stringify(this.docData.doctores));
                        this.docMan.filterActiveDoctors();
                        console.log('doc3', JSON.stringify(this.docData.doctores));
                        if (this.subsData.subscription && this.subsData.subscription.field_doctores_json) {
                            //this.docs = JSON.parse(this.subsData.subscription.field_doctores_json);
                            this.subsData.setDoctores();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdaterProvider.prototype.updateServicios = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.serviciosManager.loadServicios();
                return [2 /*return*/];
            });
        });
    };
    UpdaterProvider.prototype.updateSubusers = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('updateSubusers');
                        return [4 /*yield*/, this.subusersManager.cargarSubusuarios()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //las citas no se actualizan bien. no se filtran doctores que ya no se tienen agregados.
    //tengo dos listas de doctores, una en docdata y otra en subsdata. no se cual se usa para que. porque hay dos? que me pasa?
    UpdaterProvider.prototype.updateCitas = function (clear) {
        if (clear === void 0) { clear = false; }
        return __awaiter(this, void 0, void 0, function () {
            var def_from, def_to, def_paciente;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('trail1 updateCitas start');
                        //this.citasData.citas = new Array();
                        //this.citasData.daysCitas = new Array();
                        //this.citasManager.citasData.startDateFilter; 
                        //this.citasManager.citasData.endDateFilter;
                        console.log('updateCitas', clear, 'from', this.citasData.startDateFilter, 'to', this.citasManager.citasData.endDateFilter);
                        def_from = this.datep.nowStart;
                        def_to = this.datep.nowEnd + (1000 * 60 * 60 * 24 * 365 * 5);
                        def_paciente = null;
                        //Checking filters
                        if (this.citasData.pacienteFilter != null) {
                            clear = true;
                            def_paciente = this.citasData.pacienteFilter;
                        }
                        if (this.citasData.startDateFilter !== null && Number(this.citasData.startDateFilter) !== Number(0)) {
                            clear = true;
                            def_from = this.citasData.startDateFilter;
                            def_to = this.citasData.endDateFilter;
                        }
                        else {
                            if (this.citasData.pacienteFilter != null) {
                                def_from = null;
                                def_to = null;
                            }
                        }
                        //clearing if needed or filtered.
                        if (clear) {
                            console.log('entering clear');
                            this.citasData.citas = new Array();
                            this.citasData.daysCitas = new Array();
                        }
                        //reloading.
                        return [4 /*yield*/, this.citasManager.requestCitas(def_from, def_to, def_paciente).toPromise()];
                    case 1:
                        //reloading.
                        _a.sent();
                        this.docMan.evaluateCitas();
                        console.log('trail1 updateCitas end');
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdaterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__doctores_manager_doctores_manager__["a" /* DoctoresManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__subscription_manager_subscription_manager__["a" /* SubscriptionManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__permissions_permissions__["a" /* PermissionsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__subscription_data_subscription_data__["a" /* SubscriptionDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__subusers_manager_subusers_manager__["a" /* SubusersManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_8__citas_data_citas_data__["a" /* CitasDataProvider */],
            __WEBPACK_IMPORTED_MODULE_9__citas_manager_citas_manager__["a" /* CitasManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_10__loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_11__servicios_manager_servicios_manager__["a" /* ServiciosManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_12__date_date__["a" /* DateProvider */]])
    ], UpdaterProvider);
    return UpdaterProvider;
}());

//# sourceMappingURL=updater.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WsMessengerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__websocket_service_websocket_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctores_data_doctores_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__citas_data_citas_data__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
This class is a message generator for  the websocketService
websocket service contains the socket and managers to create elements using socket responses, but managers cant have a websocket service to generate messages
this providers generates messages to the socket.

this provider cant have managers on it, only data
*/
var WsMessengerProvider = /** @class */ (function () {
    function WsMessengerProvider(ws, userData, docData, citasData) {
        this.ws = ws;
        this.userData = userData;
        this.docData = docData;
        this.citasData = citasData;
    }
    WsMessengerProvider.prototype.testCitaSend = function () {
        for (var _i = 0, _a = this.citasData.citas; _i < _a.length; _i++) {
            var cita = _a[_i];
            this.generateWSupdateMessage(cita);
        }
    };
    WsMessengerProvider.prototype.generateMessage = function (receivers, action, sender, content, isBroadcast) {
        if (isBroadcast === void 0) { isBroadcast = false; }
        console.log('generateMessage', receivers, action, sender, content, isBroadcast);
        var message2send = {
            receivers: receivers,
            action: action,
            sender: sender,
            content: content,
            isBroadcast: isBroadcast,
        };
        var jsonsend = JSON.stringify(message2send);
        //console.log(jsonsend);
        var message = JSON.parse(jsonsend);
        //console.log(message);
        console.log('sending this msg', message);
        this.ws.send(message);
    };
    WsMessengerProvider.prototype.generateWSupdateMessage = function (cita) {
        console.log('generating update message', cita);
        console.log('msg ediciones filed', JSON.stringify(cita.data.field_ediciones_json));
        var uid = cita.data.field_cita_doctor.und[0];
        var doctor = this.docData.getDoctorByUid(uid); //los sub usuarios "atrapan" las citas que tienen el uid de los doctores que administran.
        console.log('obtained doctor', doctor, uid);
        cita.data.doctor_name = doctor.field_alias; //doctor.name;
        cita.data.doctor_alias = doctor.field_alias;
        this.generateMessage([doctor.Uid], 'addCita', "" + this.userData.userData.uid, cita.data, true);
    };
    WsMessengerProvider.prototype.generateWSremoveCitaMessage = function (cita) {
        this.generateMessage(this.docData.doctoresIDs, 'removeCita', "" + this.userData.userData.uid, cita.data, true);
    };
    WsMessengerProvider.prototype.generateSubsRemoveMessage = function (uid) {
        this.generateMessage(this.docData.doctoresIDs, 'removeSubUser', "" + this.userData.userData.uid, uid, true);
    };
    WsMessengerProvider.prototype.generateSubsAddedMessage = function (uid, name) {
        this.generateMessage(this.docData.doctoresIDs, 'addSubUser', "" + this.userData.userData.uid, { "uid": uid, "name": name }, true);
    };
    WsMessengerProvider.prototype.generateSubUserAddedMessage = function (uid, name, docs) {
    };
    WsMessengerProvider.prototype.generateSubUserRemovedMessage = function (uid) {
    };
    /*
      Cuando se agrega un sub usuario por codigo. este mensaje se envia a todos los doctores de la suscripcion y al sub usuario que esta entrando.
    */
    WsMessengerProvider.prototype.generateUserByCode = function (recievers) {
        console.log('generateUserByCode', recievers);
        this.generateMessage(recievers, __WEBPACK_IMPORTED_MODULE_1__websocket_service_websocket_service__["a" /* WebsocketServiceProvider */].ACTION_SUB_BYCODE, "" + this.userData.userData.uid, '', true);
    };
    /**
     * Cuando un doctor entra a un grupo.
     *
     * este mensaje se tiene que enviar a los doctores que pertenecen a la suscripcion a la que esta entrando para que se actualice su lista de doctores.
     */
    WsMessengerProvider.prototype.generateDoctogroupMessage = function (docs) {
        console.log('generateDoctogroupMessage', docs);
        this.generateMessage(docs, __WEBPACK_IMPORTED_MODULE_1__websocket_service_websocket_service__["a" /* WebsocketServiceProvider */].ACTION_DOC_TO_GROUP, "" + this.userData.userData.uid, '', true);
    };
    /**
    * Cuando un Subusuario entra a un grupo.
    *
    * Este mensaje se envia a los sub usuarios que entran a un grupo para que se refresque su app.
    * ademas se envia a los doctores de la suscripcion para que refresque su lista de sub usuarios.
    */
    WsMessengerProvider.prototype.generateSubtogroupMessage = function (subusers, docs) {
        console.log('generateSubtogroupMessage', subusers, docs);
        this.generateMessage(docs, __WEBPACK_IMPORTED_MODULE_1__websocket_service_websocket_service__["a" /* WebsocketServiceProvider */].ACTION_SUB_TO_GROUP_DOCS, "" + this.userData.userData.uid, '', true);
        this.generateMessage(subusers, __WEBPACK_IMPORTED_MODULE_1__websocket_service_websocket_service__["a" /* WebsocketServiceProvider */].ACTION_SUB_TO_GROUP_SUBS, "" + this.userData.userData.uid, '', true);
    };
    /**
    * Cuando un doctor sale de un grupo.
    *
    *  receivers son todos los integrantes del grupo antes de removerlo.
    *  out es el usuario que esta saliendo, por si se necesita.
    *  hace que los usuarios recarguen su suscripcion, refrescando quienes estan en el grupo ( y quien no )
    */
    WsMessengerProvider.prototype.generateDocoutgroup = function (receivers, out) {
        console.log('generateDoctogroupMessage', receivers);
        this.generateMessage(receivers, __WEBPACK_IMPORTED_MODULE_1__websocket_service_websocket_service__["a" /* WebsocketServiceProvider */].ACTION_DOC_OUT_GROUP, "" + this.userData.userData.uid, "" + out, true);
    };
    /**
     * Cuando un subusuario sale de un grupo (o suscripcion meh).
     *
     * este mensaje se tiene que enviar a los doctores que pertenecen a la suscripcion a la que esta entrando para que se actualice su lista.
     * receivers son los doctores del grupo
     */
    WsMessengerProvider.prototype.generateSuboutofgroup = function (docs, out) {
        docs.push(out);
        console.log('generateSuboutofgroup', docs);
        this.generateMessage(docs, __WEBPACK_IMPORTED_MODULE_1__websocket_service_websocket_service__["a" /* WebsocketServiceProvider */].ACTION_SUB_OUT_GROUP, "" + this.userData.userData.uid, "" + out, true);
    };
    WsMessengerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__websocket_service_websocket_service__["a" /* WebsocketServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__citas_data_citas_data__["a" /* CitasDataProvider */]])
    ], WsMessengerProvider);
    return WsMessengerProvider;
}());

//# sourceMappingURL=ws-messenger.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportesManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportes_data_reportes_data__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_data_user_data__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__date_date__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_url_base_url__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_data_reportes__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__doctores_data_doctores_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__drupal_node_manager_drupal_node_manager__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__drupal_node_editor_drupal_node_editor__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__permissions_permissions__ = __webpack_require__(39);
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











/*
  Generated class for the ReportesManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ReportesManagerProvider = /** @class */ (function () {
    function ReportesManagerProvider(http, reportesData, doctoresData, userData, dp, bu, nodeMan, nodeEditor, perm) {
        this.http = http;
        this.reportesData = reportesData;
        this.doctoresData = doctoresData;
        this.userData = userData;
        this.dp = dp;
        this.bu = bu;
        this.nodeMan = nodeMan;
        this.nodeEditor = nodeEditor;
        this.perm = perm;
        console.log('Hello ReportesManagerProvider Provider');
    }
    //REPORTES METHODS
    ReportesManagerProvider.prototype.cargarListaReportes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var reportes_data, _i, reportes_data_1, reporte_data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('cargarListaReportes');
                        if (!!this.reportesData.isSetTodayReport) return [3 /*break*/, 2];
                        console.log('loading today report');
                        return [4 /*yield*/, this.getTodayReport()];
                    case 1:
                        _a.sent();
                        console.log('end loading today report');
                        _a.label = 2;
                    case 2:
                        console.log('today report is', this.reportesData.todayReport);
                        return [4 /*yield*/, this.requestReportes(-1, 'all').toPromise()];
                    case 3:
                        reportes_data = _a.sent();
                        console.log('obtained reportes data ', reportes_data);
                        for (_i = 0, reportes_data_1 = reportes_data; _i < reportes_data_1.length; _i++) {
                            reporte_data = reportes_data_1[_i];
                            if (this.reportesData.checkTodayReportNid(reporte_data['nid'])) {
                                console.log('Nid reporte de hoy', reporte_data);
                                this.reportesData.todayReport.setData(reporte_data);
                            }
                            else {
                                console.log('else nid reporte de hoy', reporte_data);
                                this.reportesData.addReporte(reporte_data);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportesManagerProvider.prototype.requestReportes = function (dialy, date, uid) {
        if (dialy === void 0) { dialy = -1; }
        if (date === void 0) { date = (this.dp.nowStart - 30 * 1000) + "--" + (this.dp.nowEnd - 30 * 1000); }
        if (uid === void 0) { uid = this.userData.userData.uid; }
        var filter = "?args[0]=" + uid;
        var extrafilters = "&args[1]=" + date + (dialy === -1 ? '' : "&args[2]=" + dialy);
        var url = this.bu.endpointUrl + 'rest_reportes.json' + filter + extrafilters;
        return this.http.get(url).share();
    };
    //METE AL DOCTOR A LA LISTA DE DOCTORES DE HOY SI ES QUE NO ESTA AHI
    ReportesManagerProvider.prototype.checkUpdateTodayDocs = function (docuid) {
        return __awaiter(this, void 0, void 0, function () {
            var exists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('checking for doc on report ', docuid);
                        exists = this.reportesData.todayReport.doctores.find(function (docs) { return Number(docs) === Number(docuid); });
                        console.log('updateTodayDocs exists', exists);
                        if (!!exists) return [3 /*break*/, 2];
                        console.log('HAY QUE AGREGAR EL DOC AL REPORTE MAMA');
                        this.reportesData.todayReport.doctores.push(Number(docuid));
                        return [4 /*yield*/, this.nodeMan.updateNode(this.reportesData.todayReport.getData()).toPromise()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    //este metodo te da el reporte de hoy, si no lo existe lo genera.
    ReportesManagerProvider.prototype.getTodayReport = function () {
        return __awaiter(this, void 0, void 0, function () {
            var todayReport_Data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestReportes(1).toPromise()];
                    case 1:
                        todayReport_Data = _a.sent();
                        console.log('getting todayreport', todayReport_Data);
                        if (!(todayReport_Data.length > 0)) return [3 /*break*/, 2];
                        this.reportesData.addReporte(todayReport_Data[0], true);
                        return [3 /*break*/, 4];
                    case 2:
                        console.log('generating today report');
                        return [4 /*yield*/, this.generateTodayReport()];
                    case 3:
                        _a.sent();
                        console.log('after generating today report');
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //este metodo genera el reporte de hoy! y lo guarda en drupalito
    ReportesManagerProvider.prototype.generateTodayReport = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uax_treport, nid, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uax_treport = new __WEBPACK_IMPORTED_MODULE_6__user_data_reportes__["a" /* reportes */]();
                        uax_treport.author_uid = this.userData.userData.uid;
                        uax_treport.doctores = this.doctoresData.doctoresIDs;
                        uax_treport.dateStartUTMS = this.dp.nowStart;
                        uax_treport.dateEndUTMS = this.dp.nowEnd;
                        uax_treport.dialy = true;
                        if (this.perm.checkUserPermission([__WEBPACK_IMPORTED_MODULE_3__user_data_user_data__["a" /* UserDataProvider */].TIPO_CAJA])) {
                            uax_treport.cajas = [this.userData.userData.uid];
                        }
                        console.log('dateStartUTMS', uax_treport.dateStartUTMS);
                        console.log('dateEndUTMS', uax_treport.dateEndUTMS);
                        return [4 /*yield*/, this.nodeMan.generateNewNode(uax_treport.getData()).toPromise()];
                    case 1:
                        nid = _a.sent();
                        console.log(nid);
                        uax_treport.nid = nid['nid'];
                        console.log('generated nid', nid['nid']);
                        console.log('obtained stringified', JSON.stringify(uax_treport));
                        console.log('obtained data stringified', JSON.stringify(uax_treport.getData()));
                        data = uax_treport.getData();
                        this.nodeEditor.getCleanField(__WEBPACK_IMPORTED_MODULE_9__drupal_node_editor_drupal_node_editor__["a" /* DrupalNodeEditorProvider */].FIELD_RELATION, data, 'field_doctores');
                        this.nodeEditor.getCleanField(__WEBPACK_IMPORTED_MODULE_9__drupal_node_editor_drupal_node_editor__["a" /* DrupalNodeEditorProvider */].FIELD_RELATION, data, 'field_cajas');
                        this.nodeEditor.getCleanField(__WEBPACK_IMPORTED_MODULE_9__drupal_node_editor_drupal_node_editor__["a" /* DrupalNodeEditorProvider */].FIELD_RELATION, data, 'field_recepciones');
                        this.nodeEditor.getCleanField(__WEBPACK_IMPORTED_MODULE_9__drupal_node_editor_drupal_node_editor__["a" /* DrupalNodeEditorProvider */].FIELD_NUMBER, data, 'field_datestartutmb');
                        this.nodeEditor.getCleanField(__WEBPACK_IMPORTED_MODULE_9__drupal_node_editor_drupal_node_editor__["a" /* DrupalNodeEditorProvider */].FIELD_NUMBER, data, 'field_dateendutmb');
                        console.log('docs', data['field_doctores']);
                        data['field_doctores'] = data['field_doctores'].map(function (val) { return { uid: val }; });
                        data['field_cajas'] = data['field_cajas'].map(function (val) { return { uid: val }; });
                        data['field_recepciones'] = data['field_recepciones'].map(function (val) { return { uid: val }; });
                        data['field_datestartutmb'] = { 'value': data['field_datestartutmb'] };
                        data['field_dateendutmb'] = { 'value': data['field_dateendutmb'] };
                        console.log('data ends as', data);
                        console.log('reporte data', data);
                        this.reportesData.addReporte(data, true);
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportesManagerProvider.prototype.updateReporte = function (reporte) {
        return __awaiter(this, void 0, void 0, function () {
            var val;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nodeMan.updateNode(reporte.getData()).toPromise()];
                    case 1:
                        val = _a.sent();
                        +console.log('reporte actualizado ', val);
                        return [2 /*return*/, val];
                }
            });
        });
    };
    ReportesManagerProvider.prototype.deleteReport = function (report) {
        this.reportesData.removeReporte(report);
        return this.nodeMan.deleteNode(report.getData()).share();
    };
    ReportesManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__reportes_data_reportes_data__["a" /* ReportesDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__doctores_data_doctores_data__["a" /* DoctoresDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__date_date__["a" /* DateProvider */],
            __WEBPACK_IMPORTED_MODULE_5__base_url_base_url__["a" /* BaseUrlProvider */],
            __WEBPACK_IMPORTED_MODULE_8__drupal_node_manager_drupal_node_manager__["a" /* DrupalNodeManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_9__drupal_node_editor_drupal_node_editor__["a" /* DrupalNodeEditorProvider */],
            __WEBPACK_IMPORTED_MODULE_10__permissions_permissions__["a" /* PermissionsProvider */]])
    ], ReportesManagerProvider);
    return ReportesManagerProvider;
}());

//# sourceMappingURL=reportes-manager.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the NotificationsDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NotificationsDataProvider = /** @class */ (function () {
    function NotificationsDataProvider() {
        this.notificaciones = new Array();
        this.Subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    NotificationsDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NotificationsDataProvider);
    return NotificationsDataProvider;
}());

//# sourceMappingURL=notifications-data.js.map

/***/ })

},[428]);
//# sourceMappingURL=main.js.map
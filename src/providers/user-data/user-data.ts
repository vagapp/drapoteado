import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { HTTP } from '@ionic-native/http';
import { Http } from '@angular/http';

//import { Storage } from '@ionic/storage';
import { Citas } from './citas';
import { Doctores } from './doctores';
import { servicios } from './servicios';
import { Subject } from 'rxjs/Subject';
import { planes } from './planes';
import { subscriptions } from './subscriptions';
import { Debugger } from './debugger';
import { reportes } from './reportes';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {
  rol:string;
  subAccount:boolean;
  showMain:boolean;
  showCaja:boolean;
  showReception:boolean;

  showhour:string = '00:00';

  onseignalDid = null;

  //datos de citas. los necesito globales para usarlos en la pagina de home. ademas las voy a ligar con algun servicio servidor cosa para comunicacion bilineal
  citas:Citas[]; //listado de todas las citas
  nextCitas:Citas[]; //proxima cita pendiente
  citasPendientes:Citas[]; //citas pendientes
  citasCloser:Citas[];
  citasCobrar:Citas[]; // citas por cobrar
  citasActivas:Citas[];  //cita activa
  citasParaHoy:number = 0; //numero de citas pendientes para hoy.

  error_sub_is_full:boolean = false;

  //datos para reportes
  reportes:reportes[] = new Array();
  todayReport:reportes = null;

  /**
   * datos de planes y suscripciones
  */
  subscription:subscriptions = null;
  planes:planes[]; //planes que ofrece drap.
  are_planes_set:boolean = false;
  docs_loaded:boolean = false;
  loading_reports = false; //esta bandera indica que se estan cargando los reportes en la pagina de reportes, despues de borrar uno, porque luego aparece denuevo si se quieren cargar
  sus_to_reports = false; //esta bandera undica que se esta esperando cargar una suscripcion activa para poder cargar reportes. en header

  doctores:Doctores[] = new Array();
  servicios:servicios[] = new Array();
 

  //loop and options:
  loopMs:number = 10000; //Milisegundos que tarde en actualizar las citas.
  loopSusMs:number = 60000; //millisegundos que tarda en actualizar la suscripcion.
  loopUntiCitas:number = 1000; //milisegundos para actualizar el ultiMS de las citas.
  ShowCitaUntilMs:Number = (60*60*1000); //Milisegundos para que deben quedarle a una cita para que se muestre en la pantalla de inicio, (si va a empezar en tantos ms o menos aparece)

  //VARIABLES STATICAS, y osea se necesitan getters porque los html no pueden acceder a las variables static que pedo
  //tipos de usuario:
  public static TIPO_DOCTOR = 1;
  public static TIPO_RECEPCION = 2;
  public static TIPO_CAJA = 3;
  public static TIPO_CAJAYRECEPCION = 4;
  public static TIPO_ANY = -1;

  get TIPO_DOCTOR(){return UserDataProvider.TIPO_DOCTOR;}
  get TIPO_RECEPCION(){return UserDataProvider.TIPO_RECEPCION;}
  get TIPO_CAJA(){return UserDataProvider.TIPO_CAJA;}
  get TIPO_CAJAYRECEPCION(){return UserDataProvider.TIPO_CAJAYRECEPCION;}
  get TIPO_ANY(){return UserDataProvider.TIPO_ANY;}
  
  //estados de cita:
  public static STATE_PENDIENTE = 0;
  public static STATE_CONFIRMADA = 1;
  public static STATE_ACTIVA = 2;
  public static STATE_COBRO = 3;
  public static STATE_FINALIZADA = 4;
  public static STATE_CANCELADA = 5;
  public static STATE_ELIMINADA = 6;

  get STATE_PENDIENTE(){return UserDataProvider.STATE_PENDIENTE;}
  get STATE_CONFIRMADA(){return UserDataProvider.STATE_CONFIRMADA;}
  get STATE_ACTIVA(){return UserDataProvider.STATE_ACTIVA;}
  get STATE_COBRO(){return UserDataProvider.STATE_COBRO;}
  get STATE_FINALIZADA(){return UserDataProvider.STATE_FINALIZADA;}
  get STATE_CANCELADA(){return UserDataProvider.STATE_CANCELADA;}
  get STATE_ELIMINADA(){return UserDataProvider.STATE_CANCELADA;}

  //suscripciones planes cons
  public static PLAN_ANY = -1;

  get PLAN_ANY(){return UserDataProvider.PLAN_ANY;}

  //AuthObservable
  AuthSubject:Subject<any> = new Subject();
  susSubject:Subject<any> = new Subject();
  
  sessionData = {
    sessid:false,
    session_name:false,
    token:false,
    uid:false
  }

  urlbase:string = "http://vmi118470.contaboserver.net/~drapp/backend/";
  //urlbase:string = "https://servidor.nortecsoluciones.com/~drapp/backend/";
  //urlbase:string = 'http://localhost:8100/backend/';
    userData = {
    uid:0,
    name:"",
    pass:"",
    mail:"",
    status:"",
    roles:[],
    field_tipo_de_usuario:{und:[]},
    field_useremail:{und:[{email:""}]},
    field_nombre:{und:[{value:""}]},
    field_apellidos:{und: [{value:""}]},
    field_especialidad:{und: [{value:""}]},
    field_alias:{und:[{value: ""}]},
    field_calle:{und:[{value: ""}]},
    field_no_ext:{und: [{value: ""}]},
    field_no_int: {und: [{value: ""}]},
    field_codigo_postal: {und: [{value: ""}]},
    field_ciudad: {und: [{value:""}]},
    field_colonia: {und:[{value: ""}]},
    field_pais:{und: [{value:""}]},
    field_municipio:{und:[{value:""}]},
    field_estado_ubicacion:{und:[{value: ""}]},
    field_plan_date: {und: [{value: {date:""}}]},
    field_forma_pago: {und: [{value: ""}]},
    tutorial_state: {und: [{value: "0"}]},
    field_doctores: {und:[]},
    //valores de suscripcion
    field_sub_id:{und:[0]},
    field_planholder:{und:[{value: true}]},
    field_stripe_customer_id:{und:[{value: ""}]},
    field_src_json_info:{und:[{value: ""}]}
}

  constructor(
    private http: HttpClient,
    //private storage: Storage,
    private httpn: HTTP,
    private Http: Http,
  ) {
    Debugger.log(['Hello UserDataProvider Provider',false]);
    this.doctores = new Array();
    this.setup();
    this.subAccount = false;
    this.showMain = true;
    this.showCaja = false;
    this.showReception = false;
    this.citas = new Array();
    //this.nextCitas = new Array();;
    this.doctores = new Array();
    this.threadloop();
  }

  requestToken(){
    let url = this.urlbase+'appoint/user/token.json';
    let headers = new HttpHeaders(
    {
      'Content-Type':'application/json; charset=utf-8'
    });
    let observer = this.http.post(url,"",{headers});
    /*observer.subscribe((val)=>{
     this.sessionData.token = val['token'];
     console.log("token updated",this.sessionData.token);
    });*/
    return observer;
  
  }

  initreset(){
    this.userData= {
      uid:0,
      name:"",
      pass:"",
      mail:"",
      status:"",
      roles:[],
      field_tipo_de_usuario:{und:[]},
      field_useremail:{und:[{email:""}]},
      field_nombre:{und:[{value:""}]},
      field_apellidos:{und: [{value:""}]},
      field_especialidad:{und: [{value:""}]},
      field_alias:{und:[{value: ""}]},
      field_calle:{und:[{value: ""}]},
      field_no_ext:{und: [{value: ""}]},
      field_no_int: {und: [{value: ""}]},
      field_codigo_postal: {und: [{value: ""}]},
      field_ciudad: {und: [{value:""}]},
      field_colonia: {und:[{value: ""}]},
      field_pais:{und: [{value:""}]},
      field_municipio:{und:[{value:""}]},
      field_estado_ubicacion:{und:[{value: ""}]},
      field_plan_date: {und: [{value: {date:""}}]},
      field_forma_pago: {und: [{value: ""}]},
      tutorial_state: {und: [{value: "0"}]},
      field_doctores:{und:[]},
      field_sub_id:{und:[]},
      field_planholder:{und:[{value: true}]},
      field_stripe_customer_id: {und:[{value: ""}]},
      field_src_json_info: {und:[{value: ""}]}
  }
    this.resetLists();
    
  }
  
   resetLists(){
    this.citas = new Array();
    this.nextCitas = new Array();
    this.citasPendientes= new Array();
    this.citasCloser= new Array();
    this.citasCobrar= new Array();
    this.citasActivas= new Array();
    this.citasParaHoy= 0;
    this.subscription = null;
    //this.planes:planes[]; //planes que ofrece drap.
    this.doctores = new Array();
    this.servicios = new Array();
  }

  checkConnect(){
    Debugger.log(['checkConnect',false]);
    let url = this.urlbase+'appoint/system/connect.json';
    let headers = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8',
      'X-CSRF-Token': ""+this.sessionData.token,
    });
    let observer = this.http.post(url,"",{headers});
    /*observer.subscribe((val)=>{
     console.log('connect ret',val);
    },(error)=>{
      Debugger.log(['ERROR WHILE CONNECT',false]);
      this.logout();
    });*/
    return observer;
  }

    checkIsLoggedin():boolean{
      return Number(this.userData.uid) !== 0;
    }


  requestUserData(uid){
    //console.log("tryna fetch userdata",uid );
    //recovers user data from the user uid
      let url = this.urlbase+'appoint/user/'+uid;
      let headers = new HttpHeaders(
        {'Content-Type':'application/json; charset=utf-8',
        'X-CSRF-Token': ""+this.sessionData.token,
        'Authentication':this.sessionData.session_name+'='+this.sessionData.sessid
      });
      let userData_observer = this.http.get(url,{headers});
      return userData_observer;
  }


  setSessionData(val){
    console.log('setting sessionData',val);
    this.sessionData.sessid = val['sessid'];
    this.sessionData.session_name = val['session_name'];
    if(val['token']){
      //console.log("updating token");
    this.sessionData.token = val['token'];
  }
  }

  setUserData(val){
    console.log('setting user data',val);
    this.userData.uid = val['uid'];
    this.userData.name = val['name'];
    this.userData.pass = val['pass'];
    this.userData.mail = val['mail'];
    this.userData.status = val['status'];
    this.userData.roles = val['roles'];
    this.userData.field_tipo_de_usuario = val['field_tipo_de_usuario'];
    this.userData.field_useremail = val['field_useremail'];
    if(val['field_nombre'].length !== 0)this.userData.field_nombre = val['field_nombre'];
    if(val['field_apellidos'].length !== 0)this.userData.field_apellidos = val['field_apellidos'];
    if(val['field_especialidad'].length !== 0){this.userData.field_especialidad = val['field_especialidad']; Debugger.log(['setting especialidad']);}
    if(val['field_alias'].length !== 0)this.userData.field_alias = val['field_alias'];
    if(val['field_calle'].length !== 0)this.userData.field_calle = val['field_calle'];
    if(val['field_no_ext'].length !== 0)this.userData.field_no_ext = val['field_no_ext'];
    if(val['field_no_int'].length !== 0)this.userData.field_no_int = val['field_no_int'];
    if(val['field_codigo_postal'].length !== 0)this.userData.field_codigo_postal = val['field_codigo_postal'];
    if(val['field_ciudad'].length !== 0)this.userData.field_ciudad = val['field_ciudad'];
    if(val['field_colonia'].length !== 0)this.userData.field_colonia = val['field_colonia'];
    if(val['field_pais'].length !== 0)this.userData.field_pais = val['field_pais'];
    if(val['field_municipio'].length !== 0)this.userData.field_municipio = val['field_municipio'];
    if(val['field_estado_ubicacion'].length !== 0)this.userData.field_estado_ubicacion = val['field_estado_ubicacion'];
    this.userData.field_plan_date = val['field_plan_date'];
    this.userData.field_forma_pago = val['field_forma_pago'];
    this.userData.tutorial_state = val['field_tutorial_state'];
    if(val['field_doctores'].length !== 0){
    this.userData.field_doctores = val['field_doctores'];
    }else{ this.userData.field_doctores.und = new Array();}
    Debugger.log(["checking this out subs id",val['field_sub_id']]);
    if(val['field_sub_id'].length != 0){
    this.userData.field_sub_id.und[0] = val['field_sub_id']['und'][0]['nid'];
    Debugger.log(["set a",this.userData.field_sub_id]);
    }else{
      this.userData.field_sub_id.und[0] = 0;
      Debugger.log(["set b",this.userData.field_sub_id]);
    }
    this.userData.field_planholder = val['field_planholder'];
    this.userData.field_stripe_customer_id = val['field_stripe_customer_id'];
    if(val['field_src_json_info'].length != 0){
      this.userData.field_src_json_info = val['field_src_json_info'];
    }else{
      this.userData.field_src_json_info.und = new Array();
    }
    
    if(this.checkUserPermission([UserDataProvider.TIPO_DOCTOR])){
      //si es un doctor agregarse a si mismo a la lista de doctores.
      let aux_doc = new Doctores(this);
      aux_doc.Uid = this.userData.uid;
      this.doctores.push(aux_doc);
      }else{ //si no es un doctor cargar todos los doctores que esta manejando
        let doctoruids = new Array();
        for(let i = 0; i<this.userData.field_doctores.und.length; i++){
          let aux_doc = new Doctores(this);
          aux_doc.Uid = this.userData.field_doctores.und[i].uid;
          doctoruids.push(aux_doc.Uid);
          this.doctores.push(aux_doc);
        }
        Debugger.log(['doctores to search',doctoruids]);
        this.getUsers(null,null,doctoruids).subscribe(
          (val)=>{ 
            Debugger.log(['getData result Array',val]);
            let aux_results = Object.keys(val).map(function (key) { return val[key]; });
            aux_results.forEach(element => {
              Debugger.log(['setting  this element doc',element]);
              this.doctores.forEach(doc => {
                if( Number(doc.Uid) === Number(element['uid']) ){
                  doc.name = element['name'];
                  doc.field_alias = element['field_alias'];
                }
              });
            });
            Debugger.log(['doctores at the end of getting users',this.doctores]);
            this.docs_loaded = true;
          },
          (response)=>{this.docs_loaded = true;},
        );
      }
    Debugger.log(["doctores encontrados",this.doctores]);
    Debugger.log(["cargar servicios y recargar servicios en un loop"]);
    this.cargarServicios();
    console.log('filled userData',this.userData);
  }

  setup(){
    this.rol = "doctor";
  }


  threadloop(){
    console.log("loopMs",this.loopMs);
    setInterval(() => {
      if(this.userData.uid && this.userData.uid != 0){
      this.cargarCitas();
      let now = new Date();
      this.showhour = `${UserDataProvider.formatDateBinaryNumber( now.getHours() )}:${UserDataProvider.formatDateBinaryNumber( now.getMinutes() )}`;
    }
   }, this.loopMs);
   setInterval(() => {
    if(this.userData.uid && this.userData.uid != 0){
      Debugger.log(['Auto updatingSuscription']);
    this.cargarSubscription();
  }
 }, this.loopSusMs);
 /*setInterval(() => {
  if(this.citas && this.citas.length > 0){
    this.nextCitas.forEach(aux_cita => {
      aux_cita.getUntilMs();
    });
  }
}, this.loopUntiCitas);*/
  }



  login(username:string, password:string){
    let body = JSON.stringify({"username":username,"password":password});
    console.log(body);
    //let url = this.urlbase+'appoint/user/login';
    let url = this.urlbase+'appoint/user/login';
    let headers = new HttpHeaders({
      'Content-Type':'application/json;charset=utf-8',
      'X-CSRF-Token': ""+this.sessionData.token,});
    let login_observer = this.http.post(url,body,{headers});
    /*login_observer.subscribe(
      (val) => {
        Debugger.log(['data obtained on login',val]);
        //will implement custom data for login since it is very sensible that it is done in less connections and fastest as posible. login gives much more information than a simple user/uid request.
        this.sessionData.sessid = val['sessid'];
        this.sessionData.session_name = val['session_name'];
        this.sessionData.token = val['token'];
        this.userData.uid = val['user']['uid'];
        this.userData.name = val['user']['name'];
        this.userData.pass = val['user']['pass'];
        this.userData.mail = val['user']['mail'];   
        this.userData.status = val['user']['status'];
        this.userData.roles = val['user']['roles'];
        this.userData.field_tipo_de_usuario = val['user']['field_tipo_de_usuario'];
        this.userData.field_useremail = val['user']['field_useremail'];
        this.userData.field_nombre = val['user']['field_nombre'];
        this.userData.field_apellidos = val['user']['field_apellidos'];
        this.userData.field_especialidad = val['user']['field_especialidad'];
        this.userData.field_alias = val['user']['field_alias'];
        this.userData.field_calle = val['user']['field_calle'];
        this.userData.field_no_ext = val['user']['field_no_ext'];
        this.userData.field_no_int = val['user']['field_no_int'];
        this.userData.field_codigo_postal = val['user']['field_codigo_postal'];
        this.userData.field_ciudad = val['user']['field_ciudad'];
        this.userData.field_colonia = val['user']['field_colonia'];
        this.userData.field_pais = val['user']['field_pais'];
        this.userData.field_municipio = val['user']['field_municipio'];
        this.userData.field_estado_ubicacion = val['user']['field_estado_ubicacion'];
        this.userData.field_plan_date = val['user']['field_plan_date'];
        this.userData.field_forma_pago = val['user']['field_forma_pago'];
        this.userData.tutorial_state = val['user']['field_tutorial_state'];
        this.userData.field_doctores = val['user']['field_doctores'];
        this.AuthSubject.next(this.userData.uid);
      });*/
      return login_observer;
  }

  logout(){
    let body="";
    let url = this.urlbase+'appoint/user/logout';
    let headers = new HttpHeaders(
      {'Content-Type':'application/json',
      'X-CSRF-Token': ""+this.sessionData.token,
      'Authentication':this.sessionData.session_name+'='+this.sessionData.sessid
    });
    let login_observer = this.http.post(url,body,{headers});
    login_observer.subscribe(
      (val) => {
        Debugger.log(["logout complete", val]);
        this.initreset();
        Debugger.log([this.userData]);
        this.AuthSubject.next(this.userData.uid);
      },
      response => {
        Debugger.log(["POST call in error", response]);
      },
      () => {
        Debugger.log(["The POST observable is now completed."]);
      });
      return login_observer;
  }


  register( data = null){
    let aux_registerdata = null;
    if(data){
      aux_registerdata = data;
    }else{
      aux_registerdata = this.userData;
    } 
    let body = JSON.stringify(aux_registerdata);
    Debugger.log(['register data sending',body]);
    let url = this.urlbase+'appoint/user/register';
    let headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    let register_observer = this.http.post(url,body,{headers});
    /*register_observer.subscribe(
      (val) => {
          console.log("POST call successful value returned in body", val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });*/
      return register_observer;
  
  }



  //Service Methods
  generateNewService( newService ){return this.generateNewNode(newService);}
  updateService( service ){return this.updateNode(service);}
  deleteService( service ){return this.deleteNode(service);}

  /**
   * uids:number[] son los uids de los usuarios autores de los servicios que se desea filtrar
  **/
  getServicios( uids:number[] ){
    //filter by author (doctor): args[0]=70,76,1,all
    let doctorfilter = "?args[0]="+uids.join();
    if(uids.length == 0){doctorfilter = "?args[0]=all";}
    let url = this.urlbase+'appoint/rest_servicios'+doctorfilter;
    let headers = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8',
      'X-CSRF-Token': ""+this.sessionData.token,
      'Authentication':this.sessionData.session_name+'='+this.sessionData.sessid
    });
    let observer = this.http.get(url,{headers});
    observer.subscribe(); //suscribes to send the post regardless of what view does with the observer
    return observer;
  }

  cargarServicios(){
    Debugger.log(['cargando servicios']);
    this.getServicios(this.getDoctoresSimpleArray()).subscribe(
      (val)=>{
        let aux_results = Object.keys(val).map(function (key) { return val[key]; });
         aux_results.forEach((result_servicio) => {
           Debugger.log(['cargando servicio',result_servicio]);
          let found = false;
          this.servicios.forEach(servicio => {
            if(Number(servicio.Nid) === Number(result_servicio['Nid'])){
              servicio.setData(result_servicio);
              found = true;
            }
          });
          if( !found ){
            let aux_serv = new servicios();
            aux_serv.setData(result_servicio);
            this.servicios.push(aux_serv);
          }
        }
      );
      Debugger.log(['user data servicios',this.servicios]);
      this.doctores.forEach(doc => {
        doc.setServicios(this.servicios);
      });
      Debugger.log(['doctores at end of cargarservicios',this.doctores]);
        console.log(this.servicios);
      });
  }

  removeServicioFromLists(servicio:servicios){
    var index = this.servicios.indexOf(servicio);
    if(index !== -1)this.servicios.splice(index, 1);
    this.doctores.forEach(doc => {
      doc.removeServicioFromLists(servicio);
    }); 
  }


  
  removeCitaFromLists(cita:Citas){
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
  }

  static removeElementFromArray(element:any ,array:Array<any>):number{
    let ret = -2;
    if(array){
    ret = array.indexOf(element);
    if(ret >= 0) array.splice(ret, 1);
    }
    return ret;
  }



  //SUBSCRIPTION METHODS
  
  generateNewSus( suscription ){return this.generateNewNode(suscription.getData());}
  updateSus( suscription ){return this.updateNode(suscription.getData());}
  deletesSus( suscription ){return this.deleteNode(suscription.getData());}
  generateUserSuscription(){
    this.generateNewSus(this.subscription);
  }
  updateUserSuscription(){
    this.updateSus(this.subscription);
  }


  //REPORTES METHODS
  cargarListaReportes(){
    if(this.todayReport === null || this.todayReport.nid ===null){
      this.getTodayReport();
    }
    let moveinterval = setInterval(() =>{
      if(this.todayReport === null || this.todayReport.nid === null){
        Debugger.log(['waiting for today report']);
      }else{
        Debugger.log([`today report found, getting reportes`]);
        this.getReportes( -1, 'all' ).subscribe(
          (val) => {
            Debugger.log([`get reportes got`,val]);
            let aux_results = Object.keys(val).map(function (key) { return val[key]; });
            aux_results.forEach(result => {
              Debugger.log([`buscando generar reporte `,result]);
              //buscar el elemento comparando nids en los resultados, si no existe crearlo
              let found = 0;
              if( Number(this.todayReport.nid) ===  Number(result['nid']) ){
                found = 1;
                this.todayReport.setData(result);
              }else{
              this.reportes.forEach(element => {
                if( Number(result['nid']) === Number(element.nid) ){
                  Debugger.log(['se encontro reporte para actualziar',element.nid]);
                  element.setData(result);
                  found = 1;
                }
              });
            }
            Debugger.log(['is report found?',found]);
            if(found === 0){
              let aux_rep = new reportes();
              aux_rep.setData(result);
              this.reportes.push(aux_rep);
            }
            });
            this.loading_reports = false;
          }
        );
        clearInterval(moveinterval);
      }
    },500);
   
    
  }

  getTodayReport(){
    Debugger.log(['gettint today report mami']);
    let observer = this.getReportes(1).subscribe(
      (val) => {
        Debugger.log(['reporte de hoy resultado',val]);
        let aux_results = Object.keys(val).map(function (key) { return val[key]; });
        if(aux_results.length > 0){
          Debugger.log(['se obtuvo dialyreport',aux_results]);
          if(this.todayReport === null){
            this.todayReport = new reportes();
            this.todayReport.setData(aux_results[0]);
          }else{
            this.todayReport.setData(aux_results[0]);
          }
        }else{
          this.generateTodayReport();
        }
       Debugger.log(['al final el reporte de hoy es:',this.todayReport]); 
      },response => {
        console.log(response.error.text);
        console.log("POST call in error", response);
        //this.logout();
      }
    );
    return observer;
  }

  getReportes( dialy:number = -1, date:string = `${reportes.getTodayReportRangeNumbers().start-30*1000}--${reportes.getTodayReportRangeNumbers().end-30*1000}` , uid:number = this.userData.uid){
    this.userData.uid;
    let filter = `?args[0]=${uid}`;
    let extrafilters = `&args[1]=${date}${dialy === -1?'':`&args[2]=${dialy}`}`;
    let url = this.urlbase+'appoint/rest_reportes.json'+filter+extrafilters;
    if(dialy !== -1){
      Debugger.log(['get reportes dialy is set to',dialy]);
    }
    Debugger.log(["get reportes url url",url]);
    let headers = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8',
      'X-CSRF-Token': ""+this.sessionData.token,
      'Authentication':this.sessionData.session_name+'='+this.sessionData.sessid
    });
    let observer = this.http.get(url,{headers});
    observer.subscribe(); //suscribes to send the post regardless of what view does with the observer
    return observer;
  }

  generateTodayReport(){
    Debugger.log(['creating today rerport']);
    const uax_treport = new reportes();
    uax_treport.author_uid = this.userData.uid;
    uax_treport.doctores = this.getDoctoresSimpleArray();
    uax_treport.setNowDatesUT();
    /*const todaydatestrings = UserDataProvider.getTodayDateTimeStringsSaveFormat();
    uax_treport.datefrom_date = todaydatestrings.datestring;
    uax_treport.datefrom_time = todaydatestrings.timestring;
    uax_treport.dateTo_date = todaydatestrings.datestring;
    uax_treport.dateTo_time = todaydatestrings.timestring;*/
    uax_treport.dialy = true;
    this.generateNewNode(uax_treport.getData()).subscribe(
      (val)=>{
        let aux_results = Object.keys(val).map(function (key) { return val[key]; });
        Debugger.log(['returned created node report',aux_results]);
        uax_treport.nid = aux_results[0];
        this.todayReport = uax_treport;
        Debugger.log(['today report generated final',this.todayReport]);
        this.cargarListaReportes();
      }
    );
  }

  deleteReport(report){
    if( Number(this.todayReport.nid) === Number(report.nid)){
      this.todayReport = null;
    }
    var index = this.reportes.indexOf(report);
    if(index >= -1) this.reportes.splice(index, 1);    
    Debugger.log(['reportes filtered',this.reportes]);
    Debugger.log(['NOW DELETE REPORT FROM DATABASE MF']);
    let observable = this.deleteNode(report.getData());
    return observable
  }



  static getTodayDateTimeStringsSaveFormat(){
    let date = new Date();
    let datestring = `${date.getDate()}/${(date.getMonth()+1)}/${date.getFullYear()}`;
    let timestring =  `${date.getHours()}:${date.getMinutes()}`;
    //datestring = "14/05/2018"; //testing*/
    //timestring = "08:00"; //testing*/
    return {"datestring":datestring,"timestring":timestring};
  }

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
    //datestring = "05/14/2018"; //testing*/
    //timestring = "08:00"; //testing*/
    Debugger.log(['getting today date for search format: ', {"datestring":datestring,"timestring":timestring}]);
    return {"datestring":datestring,"timestring":timestring};
  }

 


  //CITAS METHODS
  generateNewCita( newCita ){return this.generateNewNode(newCita);}
  updateCita( cita ){return this.updateNode(cita);}
  deleteCita( cita ){return this.deleteNode(cita);}
  updateCitaState( cita:Citas , state){
    cita.data.field_estado.und[0].value = state;
    if(Number(state) === Number(UserDataProvider.STATE_ACTIVA)){ cita.setHoraInicio();}
    if(Number(state) === Number(UserDataProvider.STATE_COBRO)){ cita.setHoraFin();  }
    console.log("tryna update cita:",cita.data);
    return this.updateCita( cita.data );
  }

  static getNowUTdates(){
    let start =  new Date().setHours(0,0,0,0);
    let end =  new Date().setHours(23,59,59,999); 
    Debugger.log([`getting now ut dates ${start} to ${end} and are for ${new Date(start)} to ${new Date(end)}`]);
    return {"start":start,"end":end};
  }

  static formatDateBinaryNumber( num ){
    return (num < 10 ? '0' : '') + num;
  }
  
  cargarCitas( logoutonerror = true ):Observable<any>{
    let ret = null;
    console.log("cargando citas");
    /*let date = new Date();
    let datestrings = UserDataProvider.getTodayDateTimeStringsSearchFormat();
    let datestring = datestrings.datestring;
    let timestring = datestrings.timestring;
    console.log("simple array got",this.getDoctoresSimpleArray());
    let dis = this;*/
    //ret = this.getCitas(datestring,datestring,this.getDoctoresSimpleArray(),new Array(),new Array());
    let UTdates = UserDataProvider.getNowUTdates();
    Debugger.log([` dates searching en cargar citas es ${UTdates.start}--${UTdates.end}`]);
    ret = this.getCitasUTms(`${UTdates.start}--${UTdates.end}`,this.getDoctoresSimpleArray(),new Array(),new Array());
    ret.subscribe(
      (val)=>{
        Debugger.log(['cargarcitas responce got']);
        let aux_results = Object.keys(val).map(function (key) { return val[key]; });
        aux_results.forEach(element => {
          let citaIndex = this.getCitaIndexByNid(element.Nid);
          if(citaIndex > -1){
            this.citas[citaIndex].setData(element);
          }else{
          let aux_cita = new Citas();
          aux_cita.setData(element);
          this.citas.push(aux_cita);
        }
        //aux_citasparahoy++;
       });
       //this.citasParaHoy = aux_citasparahoy;
       console.log(this.citas);
       //this.nextCitas = new Array();
       this.doctores.forEach(doctor => {
         doctor.setCitas(this.citas);
         Debugger.log(['citas seteadas para este doctor',doctor.citas]);
       });
       this.getCitasActivas();
       this.getNextcitas();
       this.getCitasPendientes();
       this.getCitasParaHoy();
       if(this.checkUserPermission([UserDataProvider.TIPO_CAJA,UserDataProvider.TIPO_CAJAYRECEPCION,UserDataProvider.TIPO_DOCTOR])){this.getCitasCobrar();}
       //this.setCitas();
       //this.getNextCita();
       //console.log("doctores resultado",this.doctores);
      },
       response => {
         //console.log(response.error.text);
         Debugger.log(["POST call in error", response]);
         if(logoutonerror)
         this.logout();
       }
      );
      Debugger.log(['returning ret observable',ret]);
      return ret;
  }
//este metodo ya no se usa fue reemplazado cuando se incluyo una clase para manejar docotores para simplificar manejar varios doctores
//se usa el metodo setCitas de la clase doctores por cada doctor en la lista de doctores y se le manda como parametro la lista de citas.
  /*setCitas(  ){
    this.citasPendientes = new Array();
    this.citasCobrar = new Array();
    let aux_citasparahoy = 0;
    let aux_nextCita = null;
    let smallestUntilMs = null;
    this.citas.forEach(cita => {
      cita.getUntilMs();
      if(cita.checkState(UserDataProvider.STATE_PENDIENTE) || cita.checkState(UserDataProvider.STATE_CONFIRMADA)){
        aux_citasparahoy++;
        this.citasPendientes.push(cita);
      if(cita.untilMs > 0){ cita.retrasada = true; } //si se paso la fecha ponerla como retrasada.
        if(smallestUntilMs === null || cita.untilMs < smallestUntilMs){
          //si no hay mas pequeño    O  si la cita es mas pequeño
          aux_nextCita = cita; //esta cita es la mas cercana
          smallestUntilMs = cita.untilMs;
        }
      }
      if(cita.checkState(UserDataProvider.STATE_COBRO)){
        this.citasCobrar.push(cita);
      }
      if(cita.checkState(UserDataProvider.STATE_ACTIVA)){
        console.log("cita activa.",this.citaActiva);
        if(!this.citaActiva){
          console.log("agregando cita");
          this.citaActiva = cita;
        }else{
          this.updateCitaState(cita.data,UserDataProvider.STATE_PENDIENTE).subscribe();
          cita.data.field_estado.und[0].value = this.STATE_PENDIENTE;
          
        }
      }
     // }
    });
    this.citasParaHoy = aux_citasparahoy;
    //this.nextCita = aux_nextCita;
    console.log("citas seteadas:");
    console.log("nextCitas", this.nextCitas);
    console.log("citasParaHoy", this.citasParaHoy);
    console.log("citasPendientes", this.citasPendientes);
    console.log("citasCobrar", this.citasCobrar);
    console.log("cita activa", this.citasActivas);
  }*/

  getCitasActivas(){
    this.citasActivas =  new Array();
    this.doctores.forEach(element => {
      if(element.citaActiva){
       this.citasActivas.push(element.citaActiva);
      }
    });
    console.log("citas activas obtenidas de cada doctor",this.citasActivas);
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
    console.log("citas pendientes obtenidas de cada doctor",this.citasPendientes);
  }

  getCitasCobrar(){
    this.citasCobrar = new Array();
    this.doctores.forEach(doctor => {
      doctor.citasCobrar.forEach(cita => {
        this.citasCobrar.push(cita);
      });
    });
    console.log("citas por cobrar obtenidas de cada doctor",this.citasCobrar);
  }

  getDoctorOFCita( Cita:Citas ):Doctores{
    let ret = null;
    let uid = Cita.data.field_cita_doctor.und[0];
    ret = this.getDoctorByUid(uid);
    return ret;
  }

  getDoctorByUid( uid ):Doctores{
    let ret = null;
    this.doctores.forEach(element => {
      console.log("comparing uid", Number(element.Uid)+"==="+Number(uid));
      if(Number(element.Uid) === Number(uid) ) {
        ret = element;
      }
    });
    console.log(ret);
    return ret;
  }

  isNextCita(cita:Citas):boolean{
    let ret = false;
    let aux_doctor = this.getDoctorOFCita(cita);
    if(aux_doctor.nextCita && ( Number(aux_doctor.nextCita.Nid) === Number(cita.Nid)) ){
      ret = true;
    }
    return ret;
  }

  getDoctoresSimpleArray():number[]{
    let ret = new Array();
    this.doctores.forEach(element => {
       ret.push(Number(element.Uid));
    });
    return ret;
  }

  getCitasParaHoy(){
    let ret = 0;
    this.doctores.forEach(element => {
      ret += element.citasParaHoy;
   });
   this.citasParaHoy = ret;
   return ret;
  }

 



  getCitaIndexByNid( input_nid ){
    let ret = -1;
    let index = 0;
    this.citas.forEach(cita => {
      if( cita.Nid === input_nid){
        ret = index;
      }
      index++;
    });
    return ret;
  }


   /**
   * doctores:number[] son los uids de los doctores que atienden las citas 
  **/

  getCitas(fechaFrom:string, fechaTo:string, doctores:number[] ,  cajas:number[] ,  recepciones:number[],  ){
    //date filter inbetween: date[min][date]=10/10/2010&date[max][date]=10/10/2011
    //date format: MM/DD/AAAA
    //filter doctor: args[0]=all
    //filter caja: args[1]=all
    //filter recepcion: args[2]=all
    //http://vmi118470.contaboserver.net/~drapp/backend/appoint/rest_citas?
    let doctorfilter = "&args[0]="+doctores.join();
    let cajafilter = "&args[1]="+cajas.join();
    let recepcionfilter = "&args[2]="+recepciones.join();
    if(doctores.length == 0){doctorfilter = "&args[0]=all";}
    if(cajas.length == 0){cajafilter = "&args[1]=all";}
    if(recepciones.length == 0){recepcionfilter = "&args[2]=all";}
    let datefilter = "?date[min][date]="+fechaFrom+"&date[max][date]="+fechaTo;
    let url = this.urlbase+'appoint/rest_citas.json'+datefilter+doctorfilter+cajafilter+recepcionfilter;
    console.log("url",url);
    let headers = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8',
      'X-CSRF-Token': ""+this.sessionData.token,
      'Authentication':this.sessionData.session_name+'='+this.sessionData.sessid
    });
    let observer = this.http.get(url,{headers});
    //observer.subscribe(); //suscribes to send the post regardless of what view does with the observer
    return observer;
  }


  getCitasUTms(rangeUTms, doctores:number[] ,  cajas:number[] ,  recepciones:number[]){
    let doctorfilter = "args[0]="+doctores.join();
    let cajafilter = "&args[1]="+cajas.join();
    let recepcionfilter = "&args[2]="+recepciones.join();
    let rangeFilter = "&args[3]="+rangeUTms;
    if(doctores.length == 0){doctorfilter = "args[0]=all";}
    if(cajas.length == 0){cajafilter = "&args[1]=all";}
    if(recepciones.length == 0){recepcionfilter = "&args[2]=all";}
    //let datefilter = "?date[min][date]="+fechaFrom+"&date[max][date]="+fechaTo;
    let url = this.urlbase+'appoint/rest_citas.json?'+doctorfilter+cajafilter+recepcionfilter+rangeFilter;
    console.log("url",url);
    let headers = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8',
      'X-CSRF-Token': ""+this.sessionData.token,
      'Authentication':this.sessionData.session_name+'='+this.sessionData.sessid
    });
    let observer = this.http.get(url,{headers});
    //observer.subscribe(); //suscribes to send the post regardless of what view does with the observer
    return observer;
  }

    //General Node Management
  generateNewNode( newNode ){
    Debugger.log(['saving node ',newNode]);
    let body = JSON.stringify(newNode);
    Debugger.log(['saving node json',body]);
    let url = this.urlbase+'appoint/node/';
    let headers = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8',
      'X-CSRF-Token': ""+this.sessionData.token,
      'Authentication':this.sessionData.session_name+'='+this.sessionData.sessid
    });
    let observer = this.http.post(url,body,{headers});
    //observer.subscribe(); //suscribes to send the post regardless of what view does with the observer
    return observer;
  }

  updateNode( node ){
    let body = JSON.stringify(node);
    let url = this.urlbase+'appoint/node/'+node.Nid;
    let headers = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8',
      'X-CSRF-Token': ""+this.sessionData.token,
      'Authentication':this.sessionData.session_name+'='+this.sessionData.sessid
    });
    let observer = this.http.put(url,body,{headers});
    //observer.subscribe(); //suscribes to send the post regardless of what view does with the observer
    return observer;
  } 

  deleteNode( node ){
    let url = this.urlbase+'appoint/node/'+node.Nid;
    Debugger.log(['deleting node url',url]);
    let headers = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8',
      'X-CSRF-Token': ""+this.sessionData.token,
      'Authentication':this.sessionData.session_name+'='+this.sessionData.sessid
    });
    let observer = this.http.delete(url,{headers});
    //observer.subscribe(); //suscribes to send the post regardless of what view does with the observer
    return observer;
  }



  /**
   * PLAN LOADING METHODS
   * **/
  cargarPlanes(){
    this.planes = new Array();
    let url = this.urlbase+'appoint/rest_planes.json';
    console.log("url",url);
    let headers = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8',
      'X-CSRF-Token': ""+this.sessionData.token,
      'Authentication':this.sessionData.session_name+'='+this.sessionData.sessid
    });
    let observer = this.http.get(url,{headers});
    observer.subscribe(
      (val)=>{
        let aux_results = Object.keys(val).map(function (key) { return val[key]; });
        let dis = this;
        aux_results.forEach(function(element){
          if(!dis.checkForPlanUpdate(element)){
          let aux_plan = new planes();
          aux_plan.setData(element);
          dis.planes.push(aux_plan);
          }
        });
        Debugger.log(['planes are',this.planes]);
        this.are_planes_set = true;
      });
    return observer;
  }

  cargarSubscription( code:string = null){
    let nidFilter = "?args[0]=all";
    //Debugger.log(["userdata sub id",this.userData.field_sub_id]);
    //if(Number(this.userData.field_sub_id.und[0]) !== Number(0)){
    //nidFilter="?args[0]="+this.userData.field_sub_id.und[0];
    let filter = "";
    if(code){
      filter=`?args[0]=all&args[1]=all&args[2]=all&args[3]=${code}`;
    }else{
      filter=`?args[0]=all&${this.checkUserPermission([UserDataProvider.TIPO_DOCTOR],false)?`args[1]=${this.userData.uid}`:'args[1]=all'}&${(!this.checkUserPermission([UserDataProvider.TIPO_DOCTOR],false))?`args[2]=${this.userData.uid}`:'args[2]=all'}&args[3]=all`;
    }
    let url = this.urlbase+'appoint/rest_suscripciones.json'+filter;
    Debugger.log(["suscription filtered url",url]);
    let headers = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8',
      'X-CSRF-Token': ""+this.sessionData.token,
      'Authentication':this.sessionData.session_name+'='+this.sessionData.sessid
    });
    let observer = this.http.get(url,{headers});
    observer.subscribe(
      (val)=>{
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
          aux_subs.is_plan_set = aux_subs.setPlanFromList(this.planes);
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
      });
    return observer;
  /*}else{
    console.log("no subscription loaded");
    this.subscription = subscriptions.getEmptySuscription();
    this.subscription.is_plan_set = true;
    this.susSubject.next(0);
    return null;
  }*/
  }


  setcssplanselected( factplan:planes ){
    this.planes.forEach(plan => {
      plan.css_fact_selected = false;
    });
    factplan.css_fact_selected = true;
  }


  /**
   * returns true if it updates a plan,
   * returns false if no plan found for this input data nid
   * **/

  checkForPlanUpdate(input_data):boolean{
    let ret = false;
    this.planes.forEach(plan => {
      if(plan.checkNid(input_data.nid)){
        plan.setData(input_data);
        ret = true;
        return ret;
      }
    });
    return ret;
  }


  //user aux methods

  getTipoUsuarioString( tipo ){
    //Debugger.log(['obtener tipo de usuario para ',tipo]);
    tipo = Number(tipo);
    let ret = "subusuario";
    switch( tipo ){
      case UserDataProvider.TIPO_DOCTOR: ret = "doctor"; break;
      case UserDataProvider.TIPO_RECEPCION: ret = "recepcion"; break;
      case UserDataProvider.TIPO_CAJA: ret = "caja"; break;
      case UserDataProvider.TIPO_CAJAYRECEPCION: ret = "recepcion&caja"; break;
    }
    return ret;
  }

  /**
   * CheckUserFeature resolves if a feature should appear for this user giving the user roles (permision) and the user plan suscriptions (suscriptions)
   * and has been created to simplify the check on features that requiere both.
  */
  checkUserFeature( permision:Array<number>,suscriptions:Array<number>, debug:boolean = false):boolean{
    Debugger.log(["check for feature"],debug);
    Debugger.log(["permissions",permision],debug);
    Debugger.log(["vs",this.userData.field_tipo_de_usuario],debug);
    Debugger.log(["suscriptions",suscriptions],debug);
    Debugger.log(["vs",this.subscription,],debug);
    let ret = false;
    let permisioncheck = false;
    let suscriptionscheck = false;
    if(permision === null || permision === undefined || permision.length === 0){ permisioncheck = true;}
    else{permisioncheck = this.checkUserPermission(permision,debug);}
    if(suscriptions === null || suscriptions === undefined || suscriptions.length === 0){ suscriptionscheck = true;}
    else{suscriptionscheck = this.checkUserSuscription(suscriptions,debug);}
    if(permisioncheck && suscriptionscheck){ ret = true; }
    return ret;
  }


  checkUserPlanHolder():boolean{
    let ret = false;
    if(!this.subscription) return false;
    Debugger.log(['checking plan holder',this.subscription.field_plan_holder],false);
    if(this.subscription && this.subscription.field_plan_holder){
      Debugger.log([`Comparing ${this.userData.uid} to ${this.subscription.field_plan_holder} = ${this.userData.uid === this.subscription.field_plan_holder}`],false);
    ret = this.userData.uid === this.subscription.field_plan_holder;
    //ret = Number(this.userData.uid) === Number(this.subscription.field_plan_holder);
  }
    return ret;
  }

  checkSusSubaccountsFull(){
    let ret = false;
    if(this.subscription && this.subscription.nid !== null){
      ret = this.subscription.isSubFull;
    }
    return ret;
  }
  

  checkUserPermission( permision:Array<number> , debug:boolean = false):boolean{
    let ret = false;
    Debugger.log([`checking permissions ${permision} vs ${this.userData.field_tipo_de_usuario}`],debug);
    //checking for ANY
    if(permision.indexOf(UserDataProvider.TIPO_ANY) > -1 && this.userData.field_tipo_de_usuario.und.length > 0){ return true;}
    //regular check
    for(let i=0; i< this.userData.field_tipo_de_usuario.und.length; i++){
      if (permision.indexOf(parseInt(this.userData.field_tipo_de_usuario.und[i].value)) > -1) {ret = true; break;}
    }
    return ret;
  }

    /**
     * la suscripcion debe resultar false si:
     * el usuario no tiene guardado un id de suscripcion en su data, o esta es 0
     * la suscripcion que carga el usuario esta inactiva.
    */
  checkUserSuscription( suscriptions:Array<number>, debug:boolean = false):boolean{
    let ret = false;
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
    }*/
    return ret;
  }

  /*getNextCita():Citas{
    let aux_nextCita = null;
    let smallestUntilMs = null;
    this.citas.forEach(cita => {
      cita.getUntilMs();
      if(cita.untilMs > 0){ //si no se ha pasado la fecha de esta cita
        if(smallestUntilMs === null || cita.untilMs < smallestUntilMs){
          //si no hay mas pequeño    O  si la cita es mas pequeño
          aux_nextCita = cita; //esta cita es la mas cercana
          smallestUntilMs = cita.untilMs;
        }
      }
    });
    //this.nextCita = aux_nextCita;
    //this.citas
    /*
    //obtener las fechas en date
    //sacar los milisegundos
    //comparar los milisegundos mayores.
    let now = new Date('2018/5/14 01:35:00Z');
    let nextCita = null;
    let smallesDif = null;
    citas_check.forEach((cita)=>{
      console.log("comparando fechas");
      console.log(cita.field_date.und[0].value.date);
      console.log(this.getDateFormat(cita.field_date.und[0].value.date,cita.field_date.und[0].value.time));
      let dateCompare = new Date(this.getDateFormat(cita.field_date.und[0].value.date,cita.field_date.und[0].value.time));
      console.log( "datecompare num value", dateCompare.getTime() );
      let time_dif = dateCompare.getTime() - now.getTime();
      //compare se supone esta en el futuro, es la fecha de la cita.
      //now es hoy, y como debe ser antes que compare now se le resta a compare
      console.log(now);
      console.log(dateCompare);
      console.log(time_dif);

      if(time_dif > 0){
        if(smallesDif === null || smallesDif > time_dif){
          console.log("found a nextier date");
          smallesDif = time_dif;
          nextCita = cita;
        }
      }
    });
    */
    //return this.nextCita;
  //}

  getDateFormat( datestring:string, timestring:string ){
    //the date is a mess so this methods transforms the method got from drupal into readable date 
    //readable date is this format 2018/06/17 01:10:10Z
    //drupal gives this format 14/5/2018
    let date_elements = datestring.split('/');
    let time_elements = timestring.split(':');
   for(let i = 0; i< time_elements.length; i++){
      while(time_elements[i].length < 2){
        time_elements[i]='0'+time_elements[i];
      }
    }
    if(time_elements.length == 2){
      time_elements[2]="00";
    }
    console.log(time_elements);
    return date_elements[2]+"/"+date_elements[1]+"/"+date_elements[0]+" "+time_elements[0]+":"+time_elements[1]+":"+time_elements[2]+"Z";
  }


 


  /**
   * 
   * doctores: array con los ids de los doctores por los que hay que filtrar
   * codigo:string en el que se busca el codigo, dejar cadena vacia para no filtrar por codigo, o poner all no se yo que hagas tu
   * 
   * **/
  getUsers( doctores, codigo:string = null , ids:Array<number> = null){
    Debugger.log(["buscando usuarios"]);
    Debugger.log([doctores]);
    Debugger.log([codigo]);
    Debugger.log([ids]);
    //filter doctor: args[0]=all
    let doctorfilter = "?args[0]=all";
    let codigofilter = "&args[1]=all";
    let ids_filter = `&args[2]=all`;
    let oneprotection = false;
    if(doctores && doctores.length > 0){doctorfilter = "?args[0]="+doctores.join(); oneprotection=true;}
    if( codigo ){ codigofilter = "&args[1]="+codigo; oneprotection=true;}
    if(ids && ids.length > 0){ ids_filter = `&args[2]=${ids.join(',')}`; oneprotection=true;}
    if(!oneprotection) doctorfilter = "?args[0]=-1" //esto evita que alguna tonteria te mande todos los usuarios del sistema, devolviendo nada
    let url = this.urlbase+'appoint/rest_users'+doctorfilter+codigofilter+ids_filter;
    Debugger.log([url]);
    let headers = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8',
      'X-CSRF-Token': ""+this.sessionData.token,
      'Authentication':this.sessionData.session_name+'='+this.sessionData.sessid
    });
    let observer = this.http.get(url,{headers});
    observer.subscribe(); //suscribes to send the post regardless of what view does with the observer
    return observer;
  }

  generateNewUserd( userd ){
    let body = JSON.stringify(userd);
    console.log("body",body);
    let url = this.urlbase+'appoint/user/';
    let headers = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8',
      'X-CSRF-Token': ""+this.sessionData.token,
      'Authentication':this.sessionData.session_name+'='+this.sessionData.sessid
    });
    let observer = this.http.post(url,body,{headers});
    return observer;
  }

  updateUserd( userd ){
    let body = JSON.stringify(userd);
    console.log("updating userd body ",body);
    let url = this.urlbase+'appoint/user/'+userd.uid;
    let headers = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8',
      'X-CSRF-Token': ""+this.sessionData.token,
      'Authentication':this.sessionData.session_name+'='+this.sessionData.sessid
    });
    let observer = this.http.put(url,body,{headers});
    //observer.subscribe(); //suscribes to send the post regardless of what view does with the observer
    return observer;
  }

  
  updateUser(){
    //cloning userData to modify it safely.
    let aux_userData = JSON.parse(JSON.stringify(this.userData));
    
    //aux_userData.field_tipo_de_usuario.und = new Array();
    /*for(let i = 0;i<this.userData.field_tipo_de_usuario.und.length;i++){
      aux_userData.field_tipo_de_usuario.und.push(this.userData.field_tipo_de_usuario.und[i].value);
    }
    for(let i = 0;i<this.userData.field_tipo_de_usuario.und.length;i++){
      aux_userData.field_tipo_de_usuario.und.push(this.userData.field_tipo_de_usuario.und[i].value);
    }*/
    aux_userData.field_tipo_de_usuario = UserDataProvider.cleanUserDataReferenceField(this.userData.field_tipo_de_usuario);
    Debugger.log(['this.userData.field_sub_id',this.userData.field_sub_id])
    if(this.userData.field_sub_id['und']['0']){
      Debugger.log(['subid setted']);
    }else{
      if(this.userData.field_sub_id['und']['0']['value']){
        aux_userData.field_sub_id = UserDataProvider.cleanUserDataReferenceField(this.userData.field_sub_id);
      }else{
      Debugger.log(['subid not setted,remove']);
      delete aux_userData.field_sub_id;
      }
    }
    //aux_userData.field_sub_id = UserDataProvider.cleanUserDataReferenceField(this.userData.field_sub_id);
    if( Number(this.userData.field_sub_id.und[0]) === Number(0) ){
      delete aux_userData.field_sub_id;
    }
    console.log("updateUser saving userdata clone",aux_userData);
    return this.updateUserd(aux_userData);
    /*if(this.userData.name != null){
      let body = JSON.stringify(this.userData);
      console.log("updating user",body);
      let url = this.urlbase+'appoint/user/'+this.userData.uid;
      let headers = new HttpHeaders(
        {'Content-Type':'application/json; charset=utf-8',
        'X-CSRF-Token': ""+this.sessionData.token,
        'Authentication':this.sessionData.session_name+'='+this.sessionData.sessid
      });
      let register_observer = this.http.put(url,body,{headers});
      register_observer.subscribe(
        (val) => {
            console.log("POST call successful value returned in body", val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
        return register_observer;
    }else{
      return false;
    }*/
  }

  requestRecover( name:string ){
    let body = `{"name":"${name}"}`;
    console.log("requesting password reset body ",body);
    let url = this.urlbase+'appoint/user/request_new_password.json';
    let headers = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8',
      'X-CSRF-Token': ""+this.sessionData.token
    });
    let observer = this.http.post(url,body,{headers});
    return observer;
  }


/**
 * Drupal aveces te manda un formato bien raro que no sirve para actualizar los datos, hay que limpiar esos campos
*/
  static cleanUserDataReferenceField( field ){
    let aux_field:{und:any[]} = {und:[]};
    aux_field.und = new Array();
    for(let i = 0;i<field.und.length;i++){
      aux_field.und.push(field.und[i].value);
    }
    return aux_field;
  }

  

  static getEmptyCita(){
    return <citasData>{ Nid:null,
      type:"citas",
      field_date:{und:[{value:{date:"",time:""}}]},
      field_hora_inicio:{und:[{value:{date:"",time:""}}]},
      field_hora_final:{und:[{value:{date:"",time:""}}]},
      field_costo_sobrescribir:{und:[{value:0}]},
      field_paciente:{und:[{value:""}]},
      field_email:{und:[{email:""}]},
      field_telefono:{und:[{value:0}]},
      field_estado:{und:[{value:0}]},
      field_cita_doctor:{und:[0]},
      field_cita_caja:{und:[0]},
      field_cita_recepcion:{und:[0]},
      field_alias:0,
      doctor_name:"",
      doctor_alias:"",
      field_servicios_cita:{und:[0]},
      field_cobro:{und:[{value:0}]},
      field_cobro_efectivo:{und:[{value:0}]},
      field_cobro_tarjeta:{und:[{value:0}]},
      field_cobro_cheque:{und:[{value:0}]},
      field_datemsb:{und:[{value:0}]},
      field_hora_iniciomsb:{und:[{value:null}]},
      field_hora_finalmsb:{und:[{value:null}]}
    }
  }

  static getEmptyServicio(){
    return <serviciosd>{ 
      Nid:null,
      Uid:0,
      type:'servicio',
      title:"",
      costo:0,
      body:{und:[{value:""}]},
      field_costo_servicio:{und:[{value:0}]},
      field_doctor_uid:{und:[{value:0}]}
    }
  }

  getEmptyUserd(){
    return <userd>{
      uid:0,
      name:"",
      pass:"",
      mail:"",
      status:"",
      roles:[0],
      field_tipo_de_usuario:{und:[0]},
      field_useremail:{und:[{email:""}]},
        field_nombre:{und:[{value:""}]},
        field_apellidos:{und: [{value:""}]},
        field_especialidad:{und: [{value:""}]},
        field_alias:{und:[{value: ""}]},
        field_calle:{und:[{value: ""}]},
        field_no_ext:{und: [{value: ""}]},
        field_no_int: {und: [{value: ""}]},
        field_codigo_postal: {und: [{value: ""}]},
        field_ciudad: {und: [{value:""}]},
        field_colonia: {und:[{value: ""}]},
        field_pais:{und: [{value:""}]},
        field_municipio:{und:[{value:""}]},
        field_estado_ubicacion:{und:[{value: ""}]},
        field_plan_date: {und: [{value: {date:""}}]},
        field_forma_pago: {und: [{value: ""}]},
        tutorial_state:{und:[{ value:0}]},
        field_codigo:{und:[{ value:""}]},
        field_doctores:{und:[0]},
        field_sub_id:{und:[0]},
        field_planholder:{und:[{value: true}]},
        field_stripe_customer_id:{und:[{value: ""}]},
        field_src_json_info:{und:[{value: ""}]}
    }
  }
}

export interface serviciosd{
  Nid:number;
  Uid:number;
  type:string,
  title:string,
  costo:number,
  body:{und:[{value:string}]},
  field_costo_servicio:{und:[{value:number}]},
  field_doctor_uid:{und:[{value:number}]}
}


export interface citasData{
    Nid:number;
    type:string,
    field_date:{und:[{value:{date:string,time:string}}]},
    field_hora_inicio:{und:[{value:{date:string,time:string}}]},
    field_hora_final:{und:[{value:{date:string,time:string}}]},
    field_costo_sobrescribir:{und:[{value:number}]},
    field_paciente:{und:[{value:string}]},
    field_email:{und:[{email:string}]},
    field_telefono:{und:[{value:number}]},
    field_estado:{und:[{value:number}]},
    field_cita_doctor:{und:any[]},
    field_cita_caja:{und:any[]},
    field_cita_recepcion:{und:any[]},
    field_alias:any,
    doctor_name:string,
    doctor_alias:string,
    field_servicios_cita:{und:any[]},
    field_cobro:{und:[{value:number}]},
    field_cobro_efectivo:{und:[{value:number}]},
    field_cobro_tarjeta:{und:[{value:number}]},
    field_cobro_cheque:{und:[{value:number}]},
    field_datemsb:{und:[{value:number}]},
    field_hora_iniciomsb:{und:[{value:number}]},
    field_hora_finalmsb:{und:[{value:number}]},
}


export interface userd{
    uid:number;
    name:string,
    pass:string,
    mail:string,
    roles:number[],
    status:string,
    field_tipo_de_usuario:{und:number[]},
    field_useremail:{und:[{email:string}]},
    field_nombre:{und:[{value:string}]},
    field_apellidos:{und: [{value:string}]},
    field_especialidad:{und: [{value:string}]},
    field_alias:{und:[{value: string}]},
    field_calle:{und:[{value: string}]},
    field_no_ext:{und: [{value: string}]},
    field_no_int: {und: [{value:string}]},
    field_codigo_postal: {und: [{value:string}]},
    field_ciudad: {und: [{value:string}]},
    field_colonia: {und:[{value:string}]},
    field_pais:{und: [{value:string}]},
    field_municipio:{und:[{value:string}]},
    field_estado_ubicacion:{und:[{value:string}]},
    field_plan_date: {und: [{value: {date:string}}]},
    field_forma_pago: {und: [{value:string}]},
    tutorial_state: {und: [{value:number}]},
    field_codigo:{und:[{ value:string}]},
    field_doctores:{und:number[]},
    field_sub_id:{und:number[]},
    field_planholder:{und:[{ value:boolean}]},
    field_stripe_customer_id:{und:[{ value:string}]},
    field_src_json_info:{und:[{ value:string}]},
}


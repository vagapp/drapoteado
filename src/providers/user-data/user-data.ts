import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Citas } from './citas';
import { Doctores } from './doctores';
import {Subject} from 'rxjs/Subject';
import { planes } from './planes';
import { subscriptions } from './subscriptions';
import { Debugger } from './debugger';


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

  //datos de citas. los necesito globales para usarlos en la pagina de home. ademas las voy a ligar con algun servicio servidor cosa para comunicacion bilineal
  citas:Citas[]; //listado de todas las citas
  nextCitas:Citas[]; //proxima cita pendiente
  citasPendientes:Citas[]; //citas pendientes
  citasCloser:Citas[];
  citasCobrar:Citas[]; // citas por cobrar
  citasActivas:Citas[];  //cita activa
  citasParaHoy:number = 0; //numero de citas pendientes para hoy.

  /**
   * datos de planes y suscripciones
  */
  subscription:subscriptions = subscriptions.getEmptySuscription();
  planes:planes[]; //planes que ofrece drap.
  are_planes_set:boolean = false;

  doctores:Doctores[];
 

  //loop and options:
  loopMs:number = 60000; //Milisegundos que tarde en actualizar las citas.
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

  get STATE_PENDIENTE(){return UserDataProvider.STATE_PENDIENTE;}
  get STATE_CONFIRMADA(){return UserDataProvider.STATE_CONFIRMADA;}
  get STATE_ACTIVA(){return UserDataProvider.STATE_ACTIVA;}
  get STATE_COBRO(){return UserDataProvider.STATE_COBRO;}
  get STATE_FINALIZADA(){return UserDataProvider.STATE_FINALIZADA;}
  get STATE_CANCELADA(){return UserDataProvider.STATE_CANCELADA;}

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
    field_sub_id:{und:[{value: "0"}]}
}

  constructor(
    private http: HttpClient,
    private storage: Storage,
  ) {

    Debugger.log(['Hello UserDataProvider Provider']);
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
    let url = this.urlbase+'appoint/user/token';
    let headers = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8'});
    let observer = this.http.post(url,"",{headers})
    observer.subscribe((val)=>{
     this.sessionData.token = val['token'];
     console.log("token updated",this.sessionData.token);
    });
   return observer;
  }

  checkConnect(){
    console.log('checkConnect');
    let url = this.urlbase+'appoint/system/connect.json';
    let headers = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8',
      'X-CSRF-Token': ""+this.sessionData.token,
    });
    let observer = this.http.post(url,"",{headers})
    observer.subscribe((val)=>{
     console.log(val);
    });
    return observer;
  }



  requestUserData(uid){
    console.log("tryna fetch userdata",uid );
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
      console.log("updating token");
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
    this.userData.field_nombre = val['field_nombre'];
    this.userData.field_apellidos = val['field_apellidos'];
    this.userData.field_especialidad = val['field_especialidad'];
    this.userData.field_alias = val['field_alias'];
    this.userData.field_calle = val['field_calle'];
    this.userData.field_no_ext = val['field_no_ext'];
    this.userData.field_no_int = val['field_no_int'];
    this.userData.field_codigo_postal = val['field_codigo_postal'];
    this.userData.field_ciudad = val['field_ciudad'];
    this.userData.field_colonia = val['field_colonia'];
    this.userData.field_pais = val['field_pais'];
    this.userData.field_municipio = val['field_municipio'];
    this.userData.field_estado_ubicacion = val['field_estado_ubicacion'];
    this.userData.field_plan_date = val['field_plan_date'];
    this.userData.field_forma_pago = val['field_forma_pago'];
    this.userData.tutorial_state = val['field_tutorial_state'];
    this.userData.field_doctores = val['field_doctores'];
    if(val['field_sub_id'].length != 0){
    this.userData.field_sub_id = val['field_sub_id'];
    }else{
      this.userData.field_sub_id.und[0].value = "0";
    }
    if(this.checkUserPermission([UserDataProvider.TIPO_DOCTOR])){
      //si es un doctor agregarse a si mismo a la lista de doctores.
      let aux_doc = new Doctores(this);
      aux_doc.Uid = this.userData.uid;
      this.doctores.push(aux_doc);
      }else{ //si no es un doctor cargar todos los doctores que esta manejando
        for(let i = 0; i<this.userData.field_doctores.und.length; i++){
          let aux_doc = new Doctores(this);
          aux_doc.Uid = this.userData.field_doctores.und[i];
          this.doctores.push(aux_doc);
        }
      }
    console.log("doctores encontrados",this.doctores);
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
    }
   }, this.loopMs);
  }
  login(username:string, password:string){
    let body = JSON.stringify({"username":username,"password":password});
    console.log(body);
    let url = this.urlbase+'appoint/user/login';
    let headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8',
    'X-CSRF-Token': ""+this.sessionData.token,});
    let login_observer = this.http.post(url,body,{headers});
    login_observer.subscribe(
      (val) => {
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
      });
      this.AuthSubject.next(this.userData.uid);
      return login_observer;
  }

  logout(){
    let body="";
    let url = this.urlbase+'appoint/user/logout';
    let headers = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8',
      'X-CSRF-Token': ""+this.sessionData.token,
      'Authentication':this.sessionData.session_name+'='+this.sessionData.sessid
    });
    let login_observer = this.http.post(url,body,{headers});
    login_observer.subscribe(
      (val) => {
        console.log("logout complete", val);
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
          field_sub_id:{und:[]}
      }
        console.log(this.userData);
        this.AuthSubject.next(this.userData.uid);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
      return login_observer;
  }


  register(){
    let body = JSON.stringify(this.userData);
    console.log(body);
    let url = this.urlbase+'appoint/user/register';
    let headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    let register_observer = this.http.post(url,body,{headers});
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
  
  }


  updateUser(){
    if(this.userData.name != null){
      let body = JSON.stringify(this.userData);
      console.log(body);
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
    }
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

  //CITAS METHODS
  generateNewCita( newCita ){return this.generateNewNode(newCita);}
  updateCita( cita ){return this.updateNode(cita);}
  deleteCita( cita ){return this.deleteNode(cita);}
  updateCitaState( cita , state){
    cita.data.field_estado.und[0].value = state;
    if(state == UserDataProvider.STATE_ACTIVA){cita.setHoraInicio();}
    if(state == UserDataProvider.STATE_COBRO){cita.setHoraFin();}
    //if( cita instanceof Citas ){ cita = cita.data; }
    console.log("tryna update cita:",cita.data);
    return this.updateCita( cita.data );
  }
  
  cargarCitas(){
    console.log("cargando citas");
    let date = new Date();
    let datestring = (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear();
    let timestring =  date.getHours()+":"+date.getMinutes();
    datestring = "5/14/2018"; //testing
    timestring = "08:00"; //testing
    console.log("datestring ",datestring);
    //this.citas = new Array();
    /*let aux_arr = new Array();
    aux_arr[0]= this.userData.uid;*/
    //let aux_citasparahoy = 0;
    console.log("simple array got",this.getDoctoresSimpleArray());
    let dis = this;
    this.getCitas(datestring,datestring,this.getDoctoresSimpleArray(),new Array(),new Array()).subscribe(
      (val)=>{
        let aux_results = Object.keys(val).map(function (key) { return val[key]; });
        aux_results.forEach(function(element){
          let citaIndex = dis.getCitaIndexByNid(element.Nid);
          if(citaIndex > -1){
            dis.citas[citaIndex].setData(element);
          }else{
          let aux_cita = new Citas();
          aux_cita.setData(element);
          dis.citas.push(aux_cita);
        }
        //aux_citasparahoy++;
       });
       //this.citasParaHoy = aux_citasparahoy;
       
       console.log(dis.citas);
       //this.nextCitas = new Array();
       this.doctores.forEach(doctor => {
         doctor.setCitas(dis.citas);
       });
       this.getNextcitas();
       this.getCitasActivas();
       this.getCitasPendientes();
       this.getCitasParaHoy();
       
       //this.setCitas();
       //this.getNextCita();
       //console.log("doctores resultado",this.doctores);
      },
       response => {
         console.log(response.error.text);
         console.log("POST call in error", response);
         this.logout();
       }
      );
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
            this.citasCloser.push(cita);
          }
      });
    });
    console.log("citas pendientes obtenidas de cada doctor",this.citasPendientes);
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
    observer.subscribe(); //suscribes to send the post regardless of what view does with the observer
    return observer;
  }

    //General Node Management
  generateNewNode( newNode ){
    let body = JSON.stringify(newNode);
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
    observer.subscribe(); //suscribes to send the post regardless of what view does with the observer
    return observer;
  } 

  deleteNode( node ){
    let url = this.urlbase+'appoint/node/'+node.Nid;
    let headers = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8',
      'X-CSRF-Token': ""+this.sessionData.token,
      'Authentication':this.sessionData.session_name+'='+this.sessionData.sessid
    });
    let observer = this.http.delete(url,{headers});
    observer.subscribe(); //suscribes to send the post regardless of what view does with the observer
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
        console.log(this.planes);
        this.are_planes_set = true;
      });
    return observer;
  }

  cargarSubscription(){
    let nidFilter = "?args[0]=all";
    if(Number(this.userData.field_sub_id.und[0].value) === Number(0)){
    nidFilter="?args[0]="+this.userData.field_sub_id.und[0].value;
    let url = this.urlbase+'appoint/rest_suscripciones.json'+nidFilter;
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
          //create a suscription object. and fill it.
          dis.subscription = new subscriptions();
          dis.subscription.setData(element);
          //dis.subscription.setPlanFromList(dis.planes);
        });
        console.log(this.subscription);
        let setPlan_interval = setInterval(()=>{
          console.log("waiting for planes");
          
          if(this.subscription.is_plan_set){
            console.log("planes are set");
            console.log("added plan is",this.subscription.plan);
            clearInterval(setPlan_interval)
          }
        },500);
      });
    return observer;
  }else{
    this.subscription = subscriptions.getEmptySuscription();
    this.subscription.is_plan_set = true;
    this.susSubject.next(0);
    return false;
  }
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
    tipo = parseInt(tipo);
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
    if(Number(this.userData.field_sub_id) === Number(0) || this.subscription === null){return false;}
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
  getUsers( doctores, codigo:string ){
    console.log("buscando usuarios");
    console.log(doctores);
    console.log(codigo);
    //filter doctor: args[0]=all
    let doctorfilter = "?args[0]="+doctores.join();
    let codigofilter = "&args[1]=all";
    if(doctores.length == 0){doctorfilter = "?args[0]=all";}
    if( codigo ){
      codigofilter = "&args[1]="+codigo;
    }
    let url = this.urlbase+'appoint/rest_users'+doctorfilter+codigofilter;
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
    let url = this.urlbase+'appoint/user/'+userd.uid;
    let headers = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8',
      'X-CSRF-Token': ""+this.sessionData.token,
      'Authentication':this.sessionData.session_name+'='+this.sessionData.sessid
    });
    let observer = this.http.put(url,body,{headers});
    observer.subscribe(); //suscribes to send the post regardless of what view does with the observer
    return observer;
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
      field_cobro_cheque:{und:[{value:0}]}
    }
  }

  static getEmptyServicio(){
    return <servicios>{ 
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
        field_sub_id:{und:[0]}
    }
  }
}

export interface servicios{
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
    field_cobro_cheque:{und:[{value:number}]}
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
}


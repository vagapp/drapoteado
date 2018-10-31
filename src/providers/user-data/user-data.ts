import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Storage } from '@ionic/storage';
import { Citas } from './citas';
import { Notification_c } from './Notification';
import { Doctores } from './doctores';
import { servicios } from './servicios';
import { Subject } from 'rxjs/Subject';
import { planes } from './planes';
import { subscriptions } from './subscriptions';
import { Debugger } from './debugger';
import { reportes } from './reportes';
import { Observable } from 'rxjs/Observable';
import { CordovaAvailableProvider } from '../cordova-available/cordova-available';
import { CitasDataProvider } from '../citas-data/citas-data';
import { DoctoresDataProvider } from '../doctores-data/doctores-data';
import { PlanesDataProvider } from '../planes-data/planes-data';
import { SubscriptionDataProvider } from '../subscription-data/subscription-data';
import { BaseUrlProvider } from '../base-url/base-url';
import { DrupalUserManagerProvider } from '../drupal-user-manager/drupal-user-manager';


@Injectable()
export class UserDataProvider {
 

  
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

  //urlbase:string = "http://vmi118470.contaboserver.net/~drapp/backend/";
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
    private ica: CordovaAvailableProvider,
    public citas: CitasDataProvider,
    public doctores: DoctoresDataProvider,
    public planes: PlanesDataProvider,
    public subscription: SubscriptionDataProvider,
    public bu: BaseUrlProvider,
    public druserMan: DrupalUserManagerProvider
  ) {
  }

  requestToken():Observable<any>{
    let url = this.bu.endpointUrl+'user/token.json';
    let observer = this.http.post(url,"",{});
    return observer.share();
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
  }


 async loginSetData(Uid){
  let u_data = await this.requestUserData(Uid).toPromise();
  this.setUserData(u_data);
 }


  checkConnect():Observable<any>{
    let url = this.bu.endpointUrl+'system/connect.json';
    let observer = this.http.post(url,"");
    return observer.share();
  }

    checkIsLoggedin():boolean{
      return Number(this.userData.uid) !== 0;
    }


  requestUserData(uid):Observable<any>{
      let url = this.bu.endpointUrl+'user/'+uid;
      let userData_observer = this.http.get(url);
      return userData_observer.share();
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
    console.log('filled userData',this.userData);
  }




  login(username:string, password:string):Observable<any>{
    const body = JSON.stringify({"username":username,"password":password});
    const url = `${this.bu.endpointUrl}user/login`;
    return this.http.post(url,body).share();
  }

  logout():Observable<any>{
    const url = `${this.bu.endpointUrl}user/logout`;
    let logout_request = this.http.post(url,``).share();
    logout_request.subscribe(
      (val) => {
        this.initreset();
        this.AuthSubject.next(this.userData.uid);
      });
    return logout_request;
  }


  register( data = this.userData){
    /*let aux_registerdata = null;
    if(data){
      aux_registerdata = data;
    }else{
      aux_registerdata = this.userData;
    } */
    let body = JSON.stringify(data);
    //Debugger.log(['register data sending',body]);
    let url = this.bu.endpointUrl+'user/register';
    let register_observer = this.http.post(url,body);
    return register_observer.share();
  
  }


  checkUserPlanHolder(){
    return this.checkUserPermission([UserDataProvider.TIPO_DOCTOR]);
  }
  



  


  
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

  static removeElementFromArray(element:any ,array:Array<any>):number{
    let ret = -2;
    if(array){
    ret = array.indexOf(element);
    if(ret >= 0) array.splice(ret, 1);
    }
    return ret;
  }



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
  //aqui creamos el pool de citas, este pool sirve para que los doctores tomen y administren las citas que tienen.
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

 
  

  

  getDoctoresSimpleArray():number[]{
    let ret = new Array();
    this.doctores.doctores.forEach(element => {
       ret.push(Number(element.Uid));
    });
    return ret;
  }

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
    let url = this.bu.endpointUrl+'rest_citas.json'+datefilter+doctorfilter+cajafilter+recepcionfilter;
    console.log("url",url);
    let observer = this.http.get(url);
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
    let url = this.bu.endpointUrl+'rest_citas.json?'+doctorfilter+cajafilter+recepcionfilter+rangeFilter;
    console.log("url",url);
    let observer = this.http.get(url);
    //observer.subscribe(); //suscribes to send the post regardless of what view does with the observer
    return observer;
  }

  getCitasNidObservable(Nid){
    let url = this.bu.endpointUrl+'rest_citas.json?'+`args[0]=all&args[1]=all&args[2]=all&args[3]=all&args[4]=${Nid}`;
    Debugger.log(['loadinc single cita w nid',url]);
    let observer = this.http.get(url);
    //observer.subscribe(); //suscribes to send the post regardless of what view does with the observer
    return observer;
  }

    //General Node Management
 

  setcssplanselected( factplan:planes ){
    this.planes.planes.forEach(plan => {
      plan.css_fact_selected = false;
    });
    factplan.css_fact_selected = true;
  }




  //user aux methods
  getTipoUsuarioString( tipo ){
    //Debugger.log(['obtener tipo de usuario para ',tipo]);
    tipo = Number(tipo);
    let ret = "subusuario";
    switch( tipo ){
      case UserDataProvider.TIPO_DOCTOR: ret = "doctor"; break;
      case UserDataProvider.TIPO_RECEPCION: ret = "recepción"; break;
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


  checkSusSubaccountsFull(){
    return false;
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
  }



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


 

  getSavePlayerIDrequest(onseignalDid):Observable<any>{
      let aux_user_data = {
        uid: this.userData.uid,
        field_playerid:{und:[{value:onseignalDid}]},
      }
      let request = this.druserMan.updateUserd(aux_user_data);
      return request;
  }
  

 

  
 


  

  requestRecover( name:string ){
    let body = `{"name":"${name}"}`;
    console.log("requesting password reset body ",body);
    let url = this.bu.endpointUrl+'user/request_new_password.json';
    let observer = this.http.post(url,body);
    return observer;
  }

  
  updateUser(){
    
    let aux_userData = JSON.parse(JSON.stringify(this.userData));
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
  
    if( Number(this.userData.field_sub_id.und[0]) === Number(0) ){
      delete aux_userData.field_sub_id;
    }
    console.log("updateUser saving userdata clone",aux_userData);
    return this.druserMan.updateUserd(aux_userData);
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
      field_hora_finalmsb:{und:[{value:null}]},
      field_retrasda:{und:[{value:0}]},
      aux_servicios_json:null,
      field_hora_cobromsb:{und:[{value:0}]},
      field_facturar:{und:[{value:0}]},
      field_facturar_cantidad:{und:[{value:0}]},
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
    field_retrasda:{und:[{value:number}]},
    aux_servicios_json:string,
    field_hora_cobromsb:{und:[{value:number}]},
    field_facturar:{und:[{value:number}]},
    field_facturar_cantidad:{und:[{value:number}]},
    
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
    field_reference_user:{und:number[]}
}




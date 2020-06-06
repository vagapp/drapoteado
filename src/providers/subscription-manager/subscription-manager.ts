import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDataProvider } from '../user-data/user-data';
import { SubscriptionDataProvider } from '../subscription-data/subscription-data';
import { Observable } from 'rxjs/Observable';
import { BaseUrlProvider } from '../base-url/base-url';
import { subscriptions } from '../user-data/subscriptions';
import { DoctoresDataProvider } from '../doctores-data/doctores-data';
import { PlanesDataProvider } from '../planes-data/planes-data';
import { DrupalNodeManagerProvider } from '../drupal-node-manager/drupal-node-manager';
import { planes } from '../user-data/planes';
import { PermissionsProvider } from '../permissions/permissions';
import { WsMessengerProvider } from '../ws-messenger/ws-messenger';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


/*
  Generated class for the SubscriptionManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SubscriptionManagerProvider {
  doc_subscriptions: subscriptions[] = new Array();
  aux_docstoReload:number[] = new Array();

  constructor(
    public http: HttpClient,
    public userData: UserDataProvider,
    public subsData: SubscriptionDataProvider,
    public docData: DoctoresDataProvider,
    public planesData: PlanesDataProvider,
    public bu: BaseUrlProvider,
    public nodeManager: DrupalNodeManagerProvider,
    public permissions: PermissionsProvider,
    //public wsMessenger: WsMessengerProvider
  ) {
    
  }



  /** Obtiene la subscripcion del usuario actual */
  async loadSubscription(){
    console.log('loadSubscription');
    let sus_data = await this.requestSubscription().toPromise();
    console.log('loadSubscription loaded_data is ',sus_data);
    if(sus_data && sus_data[0]){
    console.log('sus_data', sus_data);
    this.subsData.subscription = new subscriptions();
    this.subsData.subscription.setData(sus_data[0]);
    this.subsData.subscription.setPlanFromList(this.planesData.planes);
    console.log('subscription is ',this.subsData.subscription);
    console.log('isgroup',this.subsData.isGroup);
   }else{
    console.log('sus not loaded = ( ');
    this.subsData.subscription = null;
   }
  }
 /** Obtiene las suscripciones de la lista de doctores, la lista de doctores se maneja mas cuando se trata de un subusuario y este metodo valida que el usuario actual no sea un doctor */
  async loadDoctorsSubscriptions(){
    console.log('loadDoctorsSubscriptions');
    if(!this.userData.checkUserPermission([UserDataProvider.TIPO_DOCTOR])){
      console.log('loadDoctorsSubscriptions not a doc');
      let docs_subs_data = await this.requestDocsSubscription().toPromise();
      console.log('requestDocsSubscription res',docs_subs_data);
      if(docs_subs_data) 
       for(let doc_sus of docs_subs_data){
        let aux_sus = new subscriptions();
        aux_sus.setData(doc_sus);
        this.doc_subscriptions.push(aux_sus);
       }
       console.log('loaded doctor subs',this.doc_subscriptions);
    }
  }

  /**
   * este metodo carga las subscripciones en las que este subusuario esta asignado.
   * **/
  async loadGroupSubuserSubs(){
    console.log('loadGroupSubuserSubs');
    this.subsData.Groups = new Array();
    if(!this.userData.checkUserPermission([UserDataProvider.TIPO_DOCTOR])){
      let groups_subs_data = await this.requestGroupSubscriptions().toPromise();
      console.log('loadGroupSubuserSubs groups_subs_data',groups_subs_data);
      if(groups_subs_data) 
       for(let group_sus of groups_subs_data){
         console.log('loadGroupSubuserSubs sus found is',group_sus);
        let aux_sus = new subscriptions();
        aux_sus.setData(group_sus);
        this.subsData.Groups.push(aux_sus);
       }
    }
    console.log('loaded final groups are',  this.subsData.Groups);
  }

  /** 
   * hace un request a la suscripcion del usuario actual 
   * */
  requestSubscription():Observable<any>{
    const filter=`?args[0]=all&${this.userData.checkUserPermission([UserDataProvider.TIPO_DOCTOR],false)?`args[1]=${this.userData.userData.uid}`:'args[1]=all'}&${(!this.userData.checkUserPermission([UserDataProvider.TIPO_DOCTOR],false))?`args[2]=${this.userData.userData.uid}`:'args[2]=all'}&args[3]=all`;
    const  url = `${this.bu.endpointUrl}rest_suscripciones.json${filter}`;
    console.log('requesting sus',url);
    const observer = this.http.get(url).share();
    return observer;
  }

  /** 
   * Hace un request de las suscripciones de los doctores guardados en docData, estos doctores se cargan al iniciar el app. en doctoresManager
  */
  requestDocsSubscription():Observable<any>{
    //const filter=`?args[0]=all&${this.userData.checkUserPermission([UserDataProvider.TIPO_DOCTOR],false)?`args[1]=${this.userData.userData.uid}`:'args[1]=all'}&${(!this.userData.checkUserPermission([UserDataProvider.TIPO_DOCTOR],false))?`args[2]=${this.userData.userData.uid}`:'args[2]=all'}&args[3]=all`;
    //const filter = `?args[0]=all&args[1]=all&args[2]=all&args[3]=${this.docData.doctoresIDs}`;
    const filter = `?args[0]=all&args[1]=${this.docData.doctoresIDs}`;
    const url = `${this.bu.endpointUrl}rest_suscripciones.json${filter}`;
    console.log('requesting docs subs url',url);
    const observer = this.http.get(url).share();
    return observer;
  }

  /**
   * este metodo obtiene las subscripciones donde este sub usuario esta agregado
   * **/
  requestGroupSubscriptions():Observable<any>{
    const filter = `?args[0]=all&args[1]=all&args[2]=${this.userData.userData.uid}`;
    const url = `${this.bu.endpointUrl}rest_suscripciones.json${filter}`;
    console.log('requesting subuser subs url',url);
    const observer = this.http.get(url).share();
    return observer;
  }

  /*
  Este metodo obtiene la subscripcion en las que el sub usuario uid est aagregado
  */

  requestGroupSubscriptionsFor(uid:number):Observable<any>{
    const filter = `?args[0]=all&args[1]=all&args[2]=${uid}`;
    const url = `${this.bu.endpointUrl}rest_suscripciones.json${filter}`;
    console.log('requesting subuser subs url',url);
    const observer = this.http.get(url).share();
    return observer;
  }



  /**
   * Revisa que el doctor especificado se encuentre en alguna de las suscripciones que se maneja, no recuerdo para que se usa = ( 
   */
  checkSusOfDoctor(nid:number):boolean{
    /* No necesitamos que sea el plan holder pero que este en los doctores.*/
    let ret = false;
    console.log('in subs:',this.doc_subscriptions);
    let found = this.doc_subscriptions.find(
      /*(subs)=>{ 
      console.log(subs.field_plan_holder,nid);
      console.log(subs.field_active);
      return (Number(subs.field_plan_holder) === Number(nid)) 
      && Number(subs.field_active) === 1
    }*/
    //el metodo de arriba es para encontrar planholders, el de abajo para encontrar docs listados en el field doctors.
    (subs)=>{ 
      console.log(subs.field_doctores,nid,subs.field_doctores.indexOf(nid));
      console.log(subs.field_active);
      return (subs.field_doctores.indexOf(nid) >= 0) 
      && Number(subs.field_active) === 1
    }
  );
    console.log('subs result',found);
    if(found) ret = true;
    return ret;
  }
  
  /**
   * Este metodo subscribe el usuario actual al plan especificado pagando con el source especificado
   * este metodo dejara de usarse en favor de metodos de suscripcion especificos de cada plataforma subscribe_conekta y subcribe_ios
   * @param plan 
   * @param source 
   */
  async subscribe(plan:planes, suscription:subscriptions){
    console.log('subscribing');
    let ns_res = await this.getSubscribeObs(plan,suscription).toPromise();
    return ns_res;
    /*if(ns_res && this.checkForSubscription()) 
    await this.deletesSus(this.subsData.subscription).toPromise();*/
  }

/**
   * Este metodo subscribe el usuario actual al plan especificado pagando con el source especificado en conekta
   * @param plan 
   * @param source 
   */
  async subscribe_conekta(plan:planes, suscription:subscriptions){
    console.log('subscribe_conekta');
    let ns_res = await this.getSubscribeObs(plan,suscription).toPromise();
    console.log('trailcn1',ns_res['nid']);
    let body = JSON.stringify({'susnid':9393/*Number(ns_res['nid'])*/,'costo':suscription.field_cantidad});
    console.log('trailcn1',body);
    let url = `${this.bu.endpointUrl}conektasus/`;
    let ns_res_2 = await this.http.post(url,body).toPromise();
    console.log(ns_res_2);
    return ns_res_2
    //return ns_res;
  }

  /**
   * Este metodo se encarga de obtener el request para suscribir el usuario actual al plan especificado pagando con el source especificado, el proceso de conekta se maneja en un hook de drupal
   * @param plan 
   * @param source 
   */
  getSubscribeObs(plan:planes, suscription:subscriptions = null):Observable<any>{
    console.log('getSubscribeObs');
    console.log(plan);

    let ret = null;
    //cant check if plan holder cuz its not. why was i checking if its plan holder men. dont get it. but its supposed to return false
    //if(!this.permissions.checkUserPlanHolder()) return ret;
    let aux_sus = suscription;
    if(this.checkForSubscription()){
      let aux_sus = subscriptions.getEmptySuscription();
      aux_sus.field_doctores = this.subsData.subscription.field_doctores;
      aux_sus.field_subusuarios = this.subsData.subscription.field_subusuarios;
      aux_sus.plan = plan;
      aux_sus.field_plan_sus = plan.nid;
      aux_sus.field_plan_holder = this.userData.userData.uid;
      aux_sus.field_stripe_src_sus_id = '0';
      aux_sus.field_stripe_cus_sub_id = this.userData.userData.field_stripe_customer_id.und[0].value;
      console.log('wekohehee',aux_sus);
    }else{
      aux_sus.plan = plan;
      aux_sus.field_plan_sus = plan.nid;
      aux_sus.field_plan_holder = this.userData.userData.uid;
      aux_sus.field_doctores = new Array();
      aux_sus.field_doctores.push(this.userData.userData.uid);
      aux_sus.field_stripe_src_sus_id = '0';
      aux_sus.field_stripe_cus_sub_id = this.userData.userData.field_stripe_customer_id.und[0].value;
      //delete aux_sus.field_active;
      console.log('wakaheheee',aux_sus);
    }
    ret = this.generateNewSus(aux_sus);
    return ret;
  }


  /**
   * revisa que de plano este el dato de la suscripcion, si esto es falzo normalmente significa que no tiene suscripcion, aveces podria ser un error de plano.
   */
  checkForSubscription(){
    return this.subsData.subscription !== null ? true: false;
  }

  async removeUser( uid:number ){
    this.subsData.subscription.removeUserFromSubs(uid);
    let obs = this.nodeManager.updateNode(this.subsData.subscription.getData());
    await obs.toPromise();
  }

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

  generateNewSus( suscription ){ console.log('generating sus data',suscription.getData()); return this.nodeManager.generateNewNode(suscription.getData());}
  updateSus( suscription ){return this.nodeManager.updateNode(suscription.getData());}
  deletesSus( suscription ){return this.nodeManager.deleteNode(suscription.getData());}
  generateUserSuscription(){
    this.generateNewSus(this.subsData.subscription);
  }
  updateUserSuscription():Observable<any>{
    return this.updateSus(this.subsData.subscription);
  }

  /**
   * Este metodo busca en drupal una suscripcion en base a un codigo. es una forma de entrar a grupos médicos.
   * @param code 
   */
  async searchSus( code:string ){
    let filter=`?args[0]=all&args[1]=all&args[2]=all&args[3]=all&args[4]=${code}`;
    const url = `${this.bu.endpointUrl}rest_suscripciones.json${filter}`;
    console.log('searchsus url',url);
    let observer = this.http.get(url).share();
    let okai = await observer.toPromise();
    console.log('searchingsus',okai);
    if(okai[0]){
    let aux_sus = subscriptions.getEmptySuscription();
    aux_sus.setData(okai[0]);
    aux_sus.field_active = okai[0].field_active.value;
    aux_sus.plan = okai[0].field_plan_sus;
    /*aux_sus.nid = okai[0].nid;
    aux_sus.field_active = okai[0].field_active.value;
    aux_sus.field_doctores = okai[0].field_doctores;
    aux_sus.plan = okai[0].field_plan_sus;*/
    return aux_sus;
   }
   else return false;
    
  }

  /**
   * Este metodo asigna el usuario actual a la suscripcion especificada.
   * @param sus 
   */
  async susAssign( sus ){
    console.log('sus got is',sus);
    let plan = this.planesData.planes.find((planes)=>{return Number(planes.nid) === Number(sus.plan)});
    console.log('assign plan is',plan);
    if(
      Number(sus.field_active) === 1
      &&
      (plan && PlanesDataProvider.checkForPlanAvailability(sus,plan))
    ){
      console.log('ready to save');
      sus.field_doctores.push(this.userData.userData.uid);
      console.log('docs b',sus);
      //delete sus.field_plan_holder;
      //delete sus.field_plan_sus;
      //console.log('docs a',sus);
      let res = await this.updateSus( sus ).subscribe(
        (val)=>{
          console.log('redysave val',val);
          //window.location.reload();
          this.bu.locationReload();
        },(error)=>{
          console.log('redysave error',error);
        }
      );
      console.log('updating sus', res);
      //window.location.reload();
    }else{
      console.log('dont save');
    }
  }

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

getTotalSubAccounts(subscription:subscriptions){
  let ret:number = 0; 
  console.log('getting users left from this subscription',subscription);
  //obtener plan, y ver cuantos usuarios tiene gratis en el plan.
  let plan = this.planesData.planes.find((planes)=>{
    return planes.checkNid(subscription.field_plan_sus);
  });
  console.log('plan found',plan);
  if(plan){
    ret += Number(plan.field_no_subcuentas);
    console.log('ret f',ret);
    console.log('subcuentas',plan.field_no_subcuentas);
  }
  //obtener adicionales de la suscripcion
  ret += Number(subscription.field_adicionales);
  console.log('ret f',ret);
  console.log('subscription.field_adicionales',subscription.field_adicionales);
  return ret;
}

getSubAccountsLeft(subscription:subscriptions){
 let ret:number = 0;
 ret = this.getTotalSubAccounts(subscription);
 //obtener numero de subusuarios activos actualmente en la suscripcion.
 console.log('subusuarios en la sus',subscription.field_subusuarios.length);
 ret -= Number(subscription.field_subusuarios.length);
 console.log('ret f',ret);
 console.log('subactounts left on this suscription',ret );
 return ret;
}


getTotalDocAccounts(subscription:subscriptions){
  let ret:number = 0; 
  //obtener plan, y ver cuantos usuarios tiene gratis en el plan.
  let plan = this.planesData.planes.find((planes)=>{
    return planes.checkNid(subscription.field_plan_sus);
  });
  console.log('plan found',plan);
  if(plan){
    ret += Number(plan.field_no_doctores);
  }
  //obtener adicionales de la suscripcion
  ret += Number(subscription.field_docsadicionales);
  return ret;
}

getDocAccountsLeft(subscription:subscriptions){
 let ret:number = 0;
 ret = this.getTotalDocAccounts(subscription);
 //obtener numero de subusuarios activos actualmente en la suscripcion.
 ret -= Number(subscription.field_doctores.length);
 return ret;
}


    /**
     * Removes sub-users on selected_subuser from every subscription that is not loaded_group_sus. 
    */
   async group_enter_selectedSubusersClean(selected_subusers,loaded_group_sus,filterThis:boolean = false){
     
    this.aux_docstoReload = new Array();
    async function asyncForEach(array, callback) {
      for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
      }
    }
    await asyncForEach(selected_subusers, async (subuser)=>{  //por cada sub-usuario en selected_subusers
      console.log('BTG1 checking user',subuser);
      loaded_group_sus.field_subusuarios.push(subuser.uid);//agregar sub usuarios a la suscripcion de grupo.
      //eliminar sub usuario de otras suscripciones.
      let aux_user_subs = await this.requestGroupSubscriptionsFor(Number(subuser.uid)).toPromise();
      console.log('BTG1 LOADED SUBS',aux_user_subs);
      await asyncForEach(aux_user_subs, async (sub) => {
        console.log('BTG1 Cleaning subscriptions of this user ',sub);
        if(filterThis || Number(sub.nid) !== Number(loaded_group_sus.nid)){
        console.log('BTG1 cleaning sub of dis user');
        sub.field_subusuarios = sub.field_subusuarios.filter((data)=>{ return Number(data.uid) !== Number(subuser.uid)});
        let aux_sus = subscriptions.getEmptySuscription();
        aux_sus.setData(sub);
        aux_sus.field_active = sub.field_active.value;
        aux_sus.plan = sub.field_plan_sus;
        let res = await this.updateSus( aux_sus ).toPromise();
        console.log('BTG1 CLEANED SUBSCRIPTION RES IS',res);
        this.aux_docstoReload = this.aux_docstoReload.concat(sub.field_doctores.map((doc)=>{ return Number(doc.uid)}));
      }else{
        console.log('BTG1 NOT cleaning sub of dis user');
      }
        //this.wsMessenger.generateSuboutofgroup(res.subscription.field_doctores,subuser.uid);
      });
    });
    
  }

  /**
   * remueve de esta suscripcion todos los usuarios no seleccionados.
  */
  async group_enter_notselectedSubusers_remove(selected_subusers,loaded_group_sus,filterThis:boolean = false){
    let selected_ids = selected_subusers.map((subuser)=>{return subuser.uid});
    let subusuerstotal = loaded_group_sus.field_subusuarios;
    let toremove = loaded_group_sus.field_subusuarios.filter((uid)=>{
      return !selected_ids.includes(uid);
    })
    let sub = this.subsData.subscription;
    sub.field_subusuarios = sub.field_subusuarios.filter((data)=>{ return !toremove.includes(data)});
    this.aux_docstoReload = this.aux_docstoReload.concat(toremove);
    //console.log('group_enter_notselectedSubusers_remove',selected_ids,subusuerstotal,toremove,sub.field_subusuarios);
  }

  

}



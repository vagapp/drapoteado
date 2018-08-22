import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDataProvider } from '../user-data/user-data';
import { SubscriptionDataProvider } from '../subscription-data/subscription-data';
import { Observable } from 'rxjs/Observable';
import { BaseUrlProvider } from '../base-url/base-url';
import { subscriptions } from '../user-data/subscriptions';
import { DoctoresDataProvider } from '../doctores-data/doctores-data';

/*
  Generated class for the SubscriptionManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SubscriptionManagerProvider {
  doc_subscriptions: subscriptions[] = new Array();

  constructor(
    public http: HttpClient,
    public userData: UserDataProvider,
    public subsData: SubscriptionDataProvider,
    public docData: DoctoresDataProvider,
    public bu: BaseUrlProvider
  ) {
    
  }


  async loadSubscription(nid = null){
    let sus_data = await this.requestSubscription().toPromise();
    if(sus_data && sus_data[0]){
    console.log('sus_data', sus_data);
    this.subsData.subscription = new subscriptions();
    this.subsData.subscription.setData(sus_data[0]);
    console.log(this.subsData.subscription);
   }
  }

  async loadDoctorsSubscriptions(){
    if(!this.userData.checkUserPermission([UserDataProvider.TIPO_DOCTOR])){
      let docs_subs_data = await this.requestDocsSubscription().toPromise();
      if(docs_subs_data) 
       for(let doc_sus of docs_subs_data){
         let aux_sus = new subscriptions();
         aux_sus.setData(doc_sus);
        this.doc_subscriptions.push(aux_sus);
       }
    }
  }

  requestSubscription():Observable<any>{
    const filter=`?args[0]=all&${this.userData.checkUserPermission([UserDataProvider.TIPO_DOCTOR],false)?`args[1]=${this.userData.userData.uid}`:'args[1]=all'}&${(!this.userData.checkUserPermission([UserDataProvider.TIPO_DOCTOR],false))?`args[2]=${this.userData.userData.uid}`:'args[2]=all'}&args[3]=all`;
    const  url = `${this.bu.endpointUrl}rest_suscripciones.json${filter}`;
    const observer = this.http.get(url).share();
    return observer;
  }

  requestDocsSubscription():Observable<any>{
    //const filter=`?args[0]=all&${this.userData.checkUserPermission([UserDataProvider.TIPO_DOCTOR],false)?`args[1]=${this.userData.userData.uid}`:'args[1]=all'}&${(!this.userData.checkUserPermission([UserDataProvider.TIPO_DOCTOR],false))?`args[2]=${this.userData.userData.uid}`:'args[2]=all'}&args[3]=all`;
    const filter = `?args[0]=all&args[1]=all&args[2]=all&args[3]=${this.docData.doctoresIDs}`;
    const url = `${this.bu.endpointUrl}rest_suscripciones.json${filter}`;
    const observer = this.http.get(url).share();
    return observer;
  }

  checkSusOfDoctor(nid:number){
    let ret = false;
    let subs = this.doc_subscriptions.find((subs)=>{ 
      return (Number(subs.field_plan_holder) === nid) 
      && subs.field_active === 1
    });
    if(subs) ret = true;
    return ret;
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

}

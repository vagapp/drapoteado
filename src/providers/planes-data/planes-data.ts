import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { planes } from '../user-data/planes';
import { BaseUrlProvider } from '../base-url/base-url';
import { Observable } from 'rxjs/Observable';
import { Platform } from 'ionic-angular';
import { InAppPurchase } from '@ionic-native/in-app-purchase';
import { CordovaAvailableProvider } from '../cordova-available/cordova-available';
import { SubscriptionDataProvider } from '../subscription-data/subscription-data';

/**
 * Interfaz utilizada para representar un producto que se ofrece a la venta utilizando in-app-purchase en ios appstore
 */
export interface iosProduct {
  iosid:string,
  iosObject?:any,
  plannid:number,
  subusers:number,
  docs: number
} 
/*
  Generated class for the PlanesDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlanesDataProvider {
  planes:planes[] = new Array(); //planes que ofrece drap.
  iosLoad:boolean = false; //bandera que especifica si ya se cargaron los productos de ios
  iosProducts:iosProduct[] = [ //lista que representa los productos que se venden en ios por medio de in-app-purchases.
    {iosid:'com.tual.mx.pb1',plannid:SubscriptionDataProvider.PLAN_BASIC,subusers:0,docs:0}
  ]
  static IOS_EXTRA_SUBUSERS_UPPERLIMIT = 5;
  static IOS_EXTRA_DOCS_UPPERLIOMIT = 5;
  constructor(
    public http: HttpClient,
    public bu: BaseUrlProvider,
    public plt: Platform,
    public iap: InAppPurchase,
    public cap: CordovaAvailableProvider
  ) {
  }
  get EXTRA_SUBUSERS_UPPERLIMIT():number{
    let ret = 9999;
    if(this.cap.isIos) ret = PlanesDataProvider.IOS_EXTRA_SUBUSERS_UPPERLIMIT;
    return ret;
  }
  get EXTRA_DOCS_UPPERLIOMIT():number{
    let ret = 9999;
    if(this.cap.isIos) ret = PlanesDataProvider.IOS_EXTRA_DOCS_UPPERLIOMIT
    return ret;
  }
    /**
     * Retorna el producto que coincida con las caracteristicas de los parametros introducidos, retorna null si no se encuentra ninguno.
     * @param plannid nid del plan
     * @param subusers numero de sub usuarios extra
     * @param docs  numero de doctores extra
     */
    triangulate_Iosproduct( plannid:number, subusers:number, docs:number):iosProduct{
      return this.iosProducts.find((p)=>{ return Number(p.plannid) === Number(plannid) && Number(p.subusers) === Number(subusers) && Number(docs) === Number(docs);  });
    }
    /**
     * Retorna un producto (iosProduct) de la lista de productos (iosProducts) que corresponda al product id del parametro introducido.
     * @param iosid product id del appstore de ios que representa el producto que estas buscando
     */
    get_productByiosid(iosid:string):iosProduct{ return this.iosProducts.find((p)=>{ return p.iosid.localeCompare(iosid) === 0; }); }
    /**
     * retorna un arreglo que contiene solo los product id de la lista de productos
     */
    get iosProducts_iosids():string[] { return this.iosProducts.map( ( p ) => { return p.iosid } ); }

    /**
     * Este metodo toma la lista de productos retornada por getProducts del plugin de in-app-purchase y agrega estos productos a la lista de productos de este provider
     * @param products lista de productos retornada por el metodo getProducts del plugin de in-app-purchases
     */
    populate_iosProducts(products){
      products.forEach((p)=>{
        this.get_productByiosid(p.productId).iosObject = p;
      });
    }


    /**
     * Carga los productos del appstore utilizando getProducts del plugin de in-app-purchase
     */
    load_inapppurchaseProducts(){
      this.iosLoad = false;
      this.plt.ready().then(()=>{
        if(this.cap.isIos){
          console.log('trying to load products');
          this.iap.getProducts(this.iosProducts_iosids).then((products)=>{ this.populate_iosProducts(products)  }).catch((error)=>{ console.log('error in getProducts',error) });
          this.iosLoad = true;
          }
      });
    }

    loadPlanes(){
    this.load_inapppurchaseProducts();
    this.requestPlanes().subscribe(
      (val)=>{
        this.setPlanes(val);
      });
    }

  
  setPlanes( input_data ){
    for(let plan_data of input_data){
      if(!this.checkForPlanUpdate(plan_data)){
        let aux_plan = new planes();
        aux_plan.setData(plan_data);
        this.planes.push(aux_plan);
      }
    }
    this.planes =  this.planes.sort((a,b)=>{  
      let ret = 0;
      if(a.field_orden > b.field_orden){ ret = 1; }
      if(b.field_orden > a.field_orden){ ret = -1; }
      return ret;
    });
  }

  requestPlanes():Observable<any>{
    let url = this.bu.endpointUrl+'rest_planes.json';
    let observable = this.http.get(url);
    return observable.share();
  }

  static checkForPlanAvailability( sus, plan ){
    return !(sus.field_doctores.length >= plan.field_no_doctores);
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

  getPlanById(plan_nid:number):planes{
    return this.planes.find((planes)=>{ return Number(planes.nid) === Number(plan_nid) });
  }


}



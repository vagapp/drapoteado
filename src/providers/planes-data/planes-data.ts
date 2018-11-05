import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { planes } from '../user-data/planes';
import { BaseUrlProvider } from '../base-url/base-url';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the PlanesDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlanesDataProvider {
  planes:planes[] = new Array(); //planes que ofrece drap.
  Setted:boolean = false; //true if planes have been loaded already
  
  constructor(
    public http: HttpClient,
    public bu: BaseUrlProvider
  ) {
  }

    loadPlanes(){
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


}

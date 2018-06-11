import {UserDataProvider } from '../../providers/user-data/user-data';
import { planes } from './planes';

/**
 * @fileOverview
 * subscription describes an implementation of a plan
*/
export class subscriptions{
    plan: planes = null;//objeto de plan completo
    field_plan_sus:number=null //nid del plan
    field_plan_holder:number=null; //uid
    field_doctores:number[]=null; //array of doctor uids
    field_subusuarios:number[]=null; //array of sub acound uids
    field_invitation_code:string = null;//String to enter this suscription
    field_group_name:string = null; // group name, just an accesory
    field_active:number = null; //wether is paid or not
    field_next_cobro:string = null; //when is time to pay again bby gime that mony.
    is_plan_set:boolean = false;

    constructor(){

    }

    setData(input_data){
        console.log("tryna assign input data to subscription",input_data);
        this.field_plan_sus = input_data['field_plan_sus'];
        this.field_plan_holder = input_data['field_plan_holder'];
        this.field_doctores = input_data['field_doctores'];
        this.field_subusuarios = input_data['field_subusuarios'];
        this.field_invitation_code = input_data['field_invitation_code'];
        this.field_group_name = input_data['field_group_name'];
        this.field_active = input_data['field_active'];
        this.field_next_cobro = input_data['field_next_cobro'];
    }

    setPlanFromList(input_planes:planes[]):boolean{
       let ret = false;
       input_planes.forEach(plan => {
           if(plan.checkNid(this.field_plan_sus)){
               this.plan = plan;
               return true;
           }
       });
       return ret; 
    }
}
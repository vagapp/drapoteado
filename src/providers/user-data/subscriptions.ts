import {UserDataProvider } from '../../providers/user-data/user-data';
import { planes } from './planes';
import { Debugger } from './debugger';


/**
 * @fileOverview
 * subscription describes an implementation of a plan
*/
export class subscriptions{
    nid:number = null;
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
    field_stripe_sus_id:string = null;
    field_stripe_src_sus_id:string = null;
    field_stripe_cus_sub_id:string = null;

    constructor(){
    }

    setData(input_data){
        console.log("tryna assign input data to subscription",input_data);
        this.nid = input_data['Nid'];
        this.field_plan_sus = input_data['field_plan_sus'];
        this.field_plan_holder = input_data['field_plan_holder'];
        this.field_doctores = input_data['field_doctores'];
        this.field_subusuarios = input_data['field_subusuarios'];
        this.field_invitation_code = input_data['field_invitation_code'];
        this.field_group_name = input_data['field_group_name'];
        this.field_active = input_data['field_active']['value'];
        this.field_next_cobro = input_data['field_next_cobro'];
        this.field_stripe_sus_id = input_data['field_stripe_sus_id'];
        this.field_stripe_src_sus_id = input_data['field_stripe_src_sus_id'];
        this.field_stripe_cus_sub_id = input_data['field_stripe_cus_sub_id'];
    }

    getData():any{
        let ret = null;
        if(this.nid !== null){
        ret =  {
            /*Nid:this.nid,
            type:"suscripcion",
            field_plan_sus:{und:[{value:this.field_plan_sus}]}, 
            field_plan_holder:this.field_plan_holder,
            field_doctores:this.field_doctores,
            field_subusuarios:this.field_subusuarios,
            field_invitation_code:this.field_invitation_code,
            field_group_name:this.field_group_name,
            field_active:this.field_active,
            //field_next_cobro:this.field_next_cobro,
            field_stripe_sus_id:this.field_stripe_sus_id,
            field_stripe_src_sus_id:this.field_stripe_src_sus_id,
            field_stripe_cus_sub_id:this.field_stripe_cus_sub_id,*/
            Nid:this.nid,
            type:"suscripcion",
            field_plan_sus:{und:[this.field_plan_sus]}, 
            field_plan_holder:{und:[this.field_plan_holder]}, 
            field_doctores:{und:[]}, 
            field_subusuarios:{und:[]}, 
            field_invitation_code:{und:[{value:this.field_invitation_code}]}, 
            field_group_name:{und:[{value:this.field_group_name}]}, 
            field_active:{und:[{value:this.field_active}]}, 
            //field_next_cobro:this.field_next_cobro,
            field_stripe_sus_id:{und:[{value:this.field_stripe_sus_id}]}, 
            field_stripe_src_sus_id:{und:[{value:this.field_stripe_src_sus_id}]}, 
            field_stripe_cus_sub_id:{und:[{value:this.field_stripe_cus_sub_id}]}, 
        }
        if(this.field_doctores !== null){
            this.field_doctores.forEach(element => {
            ret.field_doctores.und.push(element);
        });
        }
        if(this.field_subusuarios !== null){
        this.field_subusuarios.forEach(element => {
            ret.field_subusuarios.und.push(element);
        });
        }
    }else{
        Debugger.log(['is a new shit to save']);
        ret =  {
            Nid:this.nid,
            type:"suscripcion",
            field_plan_sus:{und:[this.field_plan_sus]}, 
            field_plan_holder:{und:[this.field_plan_holder]}, 
            field_doctores:{und:[]}, 
            field_subusuarios:{und:[]}, 
            field_invitation_code:{und:[{value:this.field_invitation_code}]}, 
            field_group_name:{und:[{value:this.field_group_name}]}, 
            field_active:{und:[{value:this.field_active}]}, 
            field_stripe_sus_id:{und:[{value:this.field_stripe_sus_id}]}, 
            field_stripe_src_sus_id:{und:[{value:this.field_stripe_src_sus_id}]}, 
            field_stripe_cus_sub_id:{und:[{value:this.field_stripe_cus_sub_id}]}, 
        }
        if(this.field_doctores !== null){
            this.field_doctores.forEach(element => {
            ret.field_doctores.und.push(element);
        });
        }
        if(this.field_subusuarios !== null){
        this.field_subusuarios.forEach(element => {
            ret.field_subusuarios.und.push(element);
        });
        }
    }
        Debugger.log(['source getData',ret]);
        return ret;
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

    static getEmptySuscription(){
        let aux_sus = new subscriptions();
        aux_sus.field_active = 0;
        aux_sus.is_plan_set = false;
        aux_sus.plan = null;
        return aux_sus;
    }
}
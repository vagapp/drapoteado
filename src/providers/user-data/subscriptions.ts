import { planes } from './planes';
//import { Debugger } from './debugger';


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
    field_doctores_json:string = null; //a json with requiered info about doctors.
    field_doctores_info:any[] = null;
    field_subusuarios:number[]=null; //array of sub acound uids
    field_invitation_code:string = null;//String to enter this suscription
    field_group_name:string = null; // group name, just an accesory
    field_active:number = null; //wether is paid or not
    field_next_cobro:string = null; //when is time to pay again bby gime that mony.
    is_plan_set:boolean = false;
    field_stripe_sus_id:string = null;
    field_stripe_src_sus_id:string = null;
    field_stripe_cus_sub_id:string = null;
    noSubcuentas:number = 0;
    isDocfull:boolean = true;
    isSubFull:boolean = true;
    field_cantidad:number = 0;
    field_adicionales:number = 0;
    field_docsadicionales:number = 0;


    constructor(){
    }

    setData(input_data):boolean{
        console.log('setting this data men', input_data);
        let ret = false;
        if(!input_data) return ret;
        ret = true;
        console.log("tryna assign input data to subscription",input_data);
        this.nid = input_data['nid'];
        this.field_plan_sus = input_data['field_plan_sus'];
        this.field_plan_holder = input_data['field_plan_holder'];
        this.field_doctores = null;
        console.log('doctors error comming from this',input_data['field_doctores_json']);
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
        if(!input_data['field_cantidad']){this.field_cantidad = 0;}
        if(!input_data['field_adicionales']){this.field_adicionales = 0;}
        if(!input_data['field_docsadicionales']){this.field_docsadicionales = 0;}
        this.field_doctores_info = new Array();
       
        if(input_data['field_doctores']){
            this.field_doctores = new Array();
            input_data['field_doctores'].forEach(element => {
                this.field_doctores.push(element['uid']);
            });
        }
        if(input_data['field_subusuarios']){
            this.field_subusuarios = new Array();
            input_data['field_subusuarios'].forEach(element => {
                this.field_subusuarios.push(element['uid']);
            });
        }
       
        //Debugger.log(['field_subusuarios at set data subscription',this.field_subusuarios]);
        try {
            this.field_doctores_info = JSON.parse(this.field_doctores_json);
        } catch (e) {
          console.log('subscriptions:setData error on json ',this.field_doctores_json);
          this.field_doctores_info = new Array();
        }
       
        if(this.field_subusuarios)
        this.noSubcuentas = this.field_subusuarios.length;
        this.validateSuscriptionActive();
        return ret;
    }

    validateSuscriptionActive(){ //this methods validates everything that needs to be in order to really be an active suscription. and sets field active acordingly
        if(!this.field_plan_sus){this.field_active = 0;} //checking what kind of plan do you have before deciding if its active.
    }

    getData():any{
       
        let ret = null;
        if(this.nid !== null){
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
            //field_next_cobro:this.field_next_cobro,
            field_stripe_sus_id:{und:[{value:this.field_stripe_sus_id}]}, 
            field_stripe_src_sus_id:{und:[{value:this.field_stripe_src_sus_id}]}, 
            field_stripe_cus_sub_id:{und:[{value:this.field_stripe_cus_sub_id}]}, 
            field_cantidad:{und:[{value:this.field_cantidad}]},
            field_adicionales:{und:[{value:this.field_adicionales}]},
            field_docsadicionales:{und:[{value:this.field_docsadicionales}]},
        }
        if(this.field_doctores){
            this.field_doctores.forEach(element => {
            ret.field_doctores.und.push(element);
        });
        }
        if(this.field_subusuarios){
        this.field_subusuarios.forEach(element => {
            ret.field_subusuarios.und.push(element);
        });
        }
    }else{
        //Debugger.log(['is a new shit to save']);
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
            field_cantidad:{und:[{value:this.field_cantidad}]},
            field_adicionales:{und:[{value:this.field_adicionales}]},
            field_docsadicionales:{und:[{value:this.field_docsadicionales}]},
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
        //Debugger.log(['source getData',ret]);
        return ret;
    }

    setPlanFromList(input_planes:planes[]):boolean{
       let ret = false;
       input_planes.forEach(plan => {
           if(plan.checkNid(this.field_plan_sus)){
               this.plan = plan;
               this.is_plan_set = true;
               ret = this.is_plan_set;
               this.checkfullness();
           }
       });
       //Debugger.log(['returning plan found and set', this.is_plan_set]);
       return ret; 
    }
    
    
    checkfullness(){
        //Debugger.log(['checking fullness from plan',this.plan]);
        if(this.plan && this.plan.nid){
            if(this.field_doctores){
                if(this.field_doctores.length >= this.plan.field_no_doctores){ this.isDocfull = true;}else{this.isDocfull=false;}
                }else{this.isDocfull=false;}
            if(this.field_subusuarios){
                if(this.field_subusuarios.length >= this.plan.field_no_subcuentas){ this.isSubFull = true;}else{this.isSubFull=false;}
            }else{this.isSubFull=false;}
        }else{
            this.isDocfull = true;
            this.isSubFull = true;
        }
    }

    static getEmptySuscription(){
        let aux_sus = new subscriptions();
        aux_sus.field_active = 0;
        aux_sus.is_plan_set = false;
        aux_sus.plan = null;
        return aux_sus;
    }

    removeUserFromSubs( uid ){
        console.log('field doctores insubs',this.field_doctores);
        this.field_doctores = this.field_doctores.filter((docs)=>{ return Number(docs) !== Number(uid)});
        console.log('remvoed',uid,this.field_doctores);
        //this.field_doctores = this.field_doctores.filter();
    }


    removeSubUserFromSubs( userd ){
        this.field_subusuarios = this.field_subusuarios.filter((s_uid)=>{ return Number(s_uid) !== Number(userd['uid']) });
        /*if(this.field_subusuarios){
            let aux_index = this.field_subusuarios.indexOf(userd['uid']);
            if(aux_index !== -1)this.field_subusuarios.splice(aux_index,1);
           
        }*/
    }
}
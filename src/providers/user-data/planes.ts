import {UserDataProvider } from '../../providers/user-data/user-data';
   

export class planes{
    title:string = null;
    field_costo:number = null;
    nid:number = null;
    field_no_doctores:number = null;
    field_no_subcuentas:number = null;
    field_stripe_id:string = null;

    css_fact_selected:boolean = false;

    constructor(){

    }

    setData(input_data){
        console.log("plan input data", input_data);
        this.title = input_data['title'];
        this.field_costo = input_data['field_costo'];
        this.nid = input_data['nid'];
        this.field_no_doctores = input_data['field_no_doctores'];
        this.field_no_subcuentas = input_data['field_no_subcuentas'];
        this.field_stripe_id = input_data['field_stripe_id'];
    }

    checkNid( nid:number ):boolean{
        let ret = false;
        if(Number(this.nid) === Number(nid) ){
            ret = true;
        }
        return ret;
    }
    
}
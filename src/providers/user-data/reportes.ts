import { Citas } from "./citas";
import { citasData, UserDataProvider } from '../../providers/user-data/user-data';
import { Debugger } from "./debugger";
import { servicios } from "./servicios";

export class reportes{
    nid:number = 0;
    author_uid:number = 0;
    cajas:number[]  = new Array();
    doctores:number[]  = new Array();
    recepciones:number[]  = new Array();
    datefrom:Date = null;
    datefrom_date:string = null;
    datefrom_time:string = null;
    dateTo:Date = null;
    dateTo_date:string = null;
    dateTo_time:string = null;
    dialy:boolean = true; //si es un reporte diario autogenerado
    citas:Citas[] = new Array();
    servicios: servicios[] = new Array();
    
    constructor(){
    }


    get reportDateFrom():string{ 
        Debugger.log(['reportDateFrom',this.datefrom]);
        return `${(this.datefrom.getMonth()+1)}/${this.datefrom.getDate()}/${this.datefrom.getFullYear()}`;
    }
    get reportDateTo():string{ return `${(this.dateTo.getMonth()+1)}/${this.dateTo.getDate()}/${this.dateTo.getFullYear()}`;}
    get doctoresFilter():number[]{ return this.doctores; }
    get cajaFilter():number[]{ return this.cajas; }
    get recepcionFilter():number[]{ return this.recepciones; }

    setData(input_data){
        Debugger.log(["input_data en reportes",input_data]);
        this.nid = input_data['nid'];
        this.doctores = new Array();
        input_data['field_doctores'].forEach(elm => {
            this.doctores.push(elm['uid']);
        });
        input_data['field_cajas'].forEach(elm => {
            this.cajas.push(elm['uid']);
        });
        input_data['field_recepciones'].forEach(elm => {
            this.recepciones.push(elm['uid']);
        });

        this.datefrom= new Date(input_data['field_datefrom']['value']+'Z');
        this.datefrom_date = `${this.datefrom.getDate()}/${(this.datefrom.getMonth()+1)}/${this.datefrom.getFullYear()}`; 
        this.datefrom_time = `${this.datefrom.getUTCHours()}:${this.datefrom.getUTCMinutes()}:00`;

        this.dateTo= new Date(input_data['field_dateto']['value']+'Z');
        this.dateTo_date = `${this.dateTo.getDate()}/${(this.dateTo.getMonth()+1)}/${this.dateTo.getFullYear()}`; 
        this.dateTo_time = `${this.dateTo.getUTCHours()}:${this.dateTo.getUTCMinutes()}:00`;
        
        this.author_uid = input_data['uid'];
        this.dialy =  input_data['field_dialy']['value'];
       //cargarCitas
       Debugger.log(["gathered dataModel",this]);
    }


    getData():any{
        let ret = null;
        if(this.nid !== null){
            Debugger.log(['getinf existing report data']);
        ret =  {
            Nid:this.nid,
            type:"reportes",
            field_datefrom:{und:[{value:{date:this.datefrom_date,time:this.datefrom_time}}]},
            field_dateto:{und:[{value:{date:this.dateTo_date,time:this.dateTo_time}}]},
            field_doctores:{und:[]},
            field_cajas:{und:[]},
            field_recepciones:{und:[]},
            field_dialy:{und:[{value:this.dialy===true?1:0}]},
        }
        if(this.doctores.length > 0){
            this.doctores.forEach(element => {
            ret.field_doctores.und.push(element);
        });
        }
        if(this.recepciones.length > 0){
            this.recepciones.forEach(element => {
            ret.field_recepciones.und.push(element);
        });
        }
        if(this.cajas.length > 0){
            this.cajas.forEach(element => {
            ret.field_cajas.und.push(element);
        });
        }
        
        }else{
        Debugger.log(['geting non existing in db report data']);
        ret =  {
            type:"reportes",
            field_datefrom:{und:[{value:[{date:this.datefrom_date},{time:this.datefrom_time}]}]},
            field_dateto:{und:[{value:[{date:this.datefrom_date},{time:this.datefrom_time}]}]}, 
            field_doctores:{und:[]},
            field_cajas:{und:[]},
            field_recepciones:{und:[]},
            field_dialy:{und:[{value:this.dialy===true?1:0}]},
        }
        if(this.doctores.length > 0){
            this.doctores.forEach(element => {
            ret.field_doctores.und.push(element);
        });
    }
        if(this.recepciones.length > 0){
            this.recepciones.forEach(element => {
            ret.field_recepciones.und.push(element);
        });
    }
        if(this.cajas.length > 0){
            this.cajas.forEach(element => {
            ret.field_cajas.und.push(element);
        });
    } 
    }
        Debugger.log(['reporte getData',ret]);
        return ret;
    }

    cargarCitas(){
        Debugger.log(["cargar Citas not implemented"]);    
    }


    

}
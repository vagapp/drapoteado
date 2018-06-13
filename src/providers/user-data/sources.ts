import { Debugger } from "./debugger";

export class sources{
    src_id:string = null;
    client_secret:string = null;
    last4:string = null;
    brand:string = null;
    default:boolean = null;
    selected:boolean = false;
    facturacion_list_class:string = '';

    public static FACTURACION_LIST_CLASS_SELECTED = 'list_source_selected';

    constructor(){

    }

    setData( input_data ){
        Debugger.log(['input_data source setup json',input_data]);
        let aux_cu_src = JSON.parse(input_data.value);
        Debugger.log(['input_data source setup obj',aux_cu_src]);
        this.src_id = aux_cu_src.id;
        this.last4 = aux_cu_src.last4;
        this.client_secret = aux_cu_src.client_secret;
        this.brand = aux_cu_src.brand;
        this.default = false;
    }

    set_selected(){
        this.facturacion_list_class = sources.FACTURACION_LIST_CLASS_SELECTED;
        this.selected = true;
    }

    deselect(){
        this.facturacion_list_class = '';
        this.selected = false;
    }
}
import { Injectable } from '@angular/core';

@Injectable()
export class DateProvider {

  constructor() {
  }

  get now():Date{return new Date();}
  get nowStart():number{ return this.now.setHours(0,0,0,0); }
  get nowEnd():number{ return this.now.setHours(23,59,59,999); }

  static  getUntil( Since:Date ):number{
    return Since.getTime() - (new Date().getTime());
  }

  static formatDateBinaryNumber( num ){
    return (num < 10 ? '0' : '') + num;
  }

  static getDateDifText( numberdatedif ):string{ //regresa la diferencia en texto ej. "hace 05 minutos"
        let ret = "00";
        let aux_ms = Math.abs(numberdatedif);
        if(aux_ms < (60 * 1000)){ //menos de un minuto
            ret =  `${DateProvider.formatDateBinaryNumber( Math.floor(aux_ms / 1000))} segundos`
        }else if(aux_ms < ( 60 * 60 * 1000)){ //menos de una hora
            ret =  `${DateProvider.formatDateBinaryNumber( Math.floor(aux_ms / (1000 * 60) ))} Minutos`
        }else{
           
            let aux_hours = Math.floor(aux_ms / (1000 * 60 * 60));
            aux_ms -= aux_hours * ( 1000 * 60 * 60 );
           
            let aux_minutes = Math.floor(aux_ms / (1000 * 60));
            aux_ms -= aux_minutes * ( 1000 * 60 );
           
            let aux_seconds = Math.floor(aux_ms / (1000) );
            ret =  `${DateProvider.formatDateBinaryNumber(aux_hours)}:${DateProvider.formatDateBinaryNumber(aux_minutes)}:${DateProvider.formatDateBinaryNumber(aux_seconds)} Hrs`
        }
        if(numberdatedif < 0) ret = `hace ${ret}`;
        return ret;
    }

    static getDisplayableDates(date:Date){
        let ret = {"date":'',"time":''};
        let datestring = `${DateProvider.formatDateBinaryNumber(date.getDate())}/${(DateProvider.formatDateBinaryNumber(date.getMonth()+1))}/${date.getFullYear()}`;
        let timestring =  `${DateProvider.formatDateBinaryNumber(date.getHours())}:${DateProvider.formatDateBinaryNumber(date.getMinutes())}`;
        ret = { "date":datestring ,"time":timestring};
        return ret;
    }

    static getDisplayableHourfMS(MS:number){
        let date = new Date();
        date.setHours(0,0,0,0);
        date = new Date(date.getTime() + MS);
        return `${DateProvider.formatDateBinaryNumber(date.getHours())}:${DateProvider.formatDateBinaryNumber(date.getMinutes())}`;
    }
  
}

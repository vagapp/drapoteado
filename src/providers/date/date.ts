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
      //console.log('formatDateBinaryNumber',num);
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
        //console.log('traildater gettindisplayable ',date);
        let ret = {"date":'',"time":''};
        let datestring = `${DateProvider.formatDateBinaryNumber(date.getDate())}/${(DateProvider.formatDateBinaryNumber(date.getMonth()+1))}/${date.getFullYear()}`;
        let timestring =  `${DateProvider.formatDateBinaryNumber(date.getHours())}:${DateProvider.formatDateBinaryNumber(date.getMinutes())}`;
        ret = { "date":datestring ,"time":timestring};
        return ret;
    }

    

    static getStringDate(date:Date):string{
        console.log('getStringDate',date);
        let ret = ""
        let datestring = `${DateProvider.formatDateBinaryNumber(date.getDate())}/${(DateProvider.formatDateBinaryNumber(date.getMonth()+1))}/${date.getFullYear()}`;
        ret = DateProvider.getDayOWeekLabel( date.getDay() ) + ', ' + datestring;
        return ret;
    }



    static getDayOWeekLabel(day:number):string{
        let ret = '';
        switch( day ){
            case 0: ret = 'Domingo'; break;
            case 1: ret = 'Lunes'; break;
            case 2: ret = 'Martes'; break;
            case 3: ret = 'Miercoles'; break;
            case 4: ret = 'Jueves'; break;
            case 5: ret = 'Viernes'; break;
            case 6: ret = 'Sabado'; break;
        }
        return ret;
    }

    static getDisplayableHourfMS(MS:number){
        let date = new Date();
        date.setHours(0,0,0,0);
        date = new Date(date.getTime() + MS);
        return `${DateProvider.formatDateBinaryNumber(date.getHours())}:${DateProvider.formatDateBinaryNumber(date.getMinutes())}`;
    }

    //returns true if date is between min and max dates
    static isDateBetween(date:Date, mindate:Date, maxdate:Date):boolean{
        let ret = false;
        if(DateProvider.isDateBetweenNumber(date.getTime(), mindate.getTime(), maxdate.getTime())){ ret = true;}
        return ret;
    }

    static isDateBetweenNumber(date:number, mindate:number, maxdate:number):boolean{
        let ret = false;
        if(date >= mindate && date < maxdate ){ ret = true;}
        return ret;
    }

    //returns  the hours only milliseconds of the date, ignoring year, month and date
    static getDayHours( date:Date ):number{
        let aux_date = new Date(date.getTime()); //cloning date
        aux_date.setHours(0,0,0,0); // setting it to day start
        return date.getTime() - aux_date.getTime(); //returning rest
    }

    static getStartEndOFDate( date:Date ){
      let startDate = new Date(date.getTime());
      startDate.setHours(0,0,0,0);
      let endDate = new Date(date.getTime());
      endDate.setHours(23,59,59,999);
      return { start: startDate, end: endDate};
    }

   

    static dateWOffset(date:Date):Date{
        console.log(new Date());
        console.log(date);
        let offset = date.getTimezoneOffset();
        console.log(offset);
        return new Date(date.getTime()+(offset * 60 * 1000 * 2));
    }


    static validateHhMm(input) {
        console.log('validateHhMm',input);
        var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(input);
        if(isValid){
            let aux_str = input.split(':');
            if(Number(aux_str[0]) == 24 ){
                if(Number(aux_str[1])>0){
                    isValid = false;
                    console.log('mas minutos que 24 horas we? tas loco');
                }
            }
        }
        return isValid;
    }

    static getMonthLabel(m:number){
        console.log('getMonthLabel',m);
        let ret = '';
        switch(m){
            case 1: ret = 'Enero'; break;
            case 2: ret = 'Febrero'; break;
            case 3: ret = 'Marzo'; break;
            case 4: ret = 'Abril'; break;
            case 5: ret = 'Mayo'; break;
            case 6: ret = 'Junio'; break;
            case 7: ret = 'Julio'; break;
            case 8: ret = 'Agosto'; break;
            case 9: ret = 'Septiembre'; break;
            case 0: ret = 'Octubre'; break;
            case 1: ret = 'Noviembre'; break;
            case 2: ret = 'Diciembre'; break;
          
        }
        return ret;
    }
  
}

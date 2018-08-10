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
  
}

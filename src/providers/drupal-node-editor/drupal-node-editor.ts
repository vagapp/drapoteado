import { Injectable } from '@angular/core';

@Injectable()
export class DrupalNodeEditorProvider {
  static FIELD_RELATION = 0;
  static FIELD_NUMBER = 1;


  constructor() {
  }

  /*getCleanField( data , field:string, assign:boolean = true){
  
    let field_ret = null;
    if(data[field]){
      if(data[field]['und'] && Array.isArray(data[field]['und'])){
        if(data[field]['und'].length > 1){ 
        let aux_arr = new Array();
        console.log('isanarray');
        for(let value of data[field]['und']){
          console.log('value is',value);
          if(value['value']){ aux_arr.push(value['value']); }
          else  if(value['uid']){ aux_arr.push(value['uid']); }
          else  if(value['nid']){ aux_arr.push(value['nid']); }
          else{ aux_arr.push(value); }
        }
        field_ret = aux_arr;
      }else{
        let value = data[field]['und'][0];
        if(value['value']){ field_ret = value['value']; }
        else  if(value['uid']){ field_ret = value['uid']; }
        else  if(value['nid']){ field_ret = value['nid']; }
        else{ field_ret = field_ret; }
      }
        
        console.log('endarray strringified data',JSON.stringify(data[field]));
      }else{ // si notiene mas de un elemento no es un array
        if(data[field]['und']['value']){ field_ret = data[field]['und']['value']; }
        else  if(data[field]['und']['uid']){ field_ret =  data[field]['und']['uid']; }
        else  if(data[field]['und']['nid']){ field_ret =  data[field]['und']['nid']; }
        else{ field_ret = data[field]['und']; }
      }
      console.log('end no array strringified data',JSON.stringify(data[field]));
    }else{
    }
    console.log(assign);
    if(assign){data[field] = field_ret; }
    console.log('end strringified data',JSON.stringify(data[field]));
    return field_ret;
  }*/

  getCleanField(type:number,data:any,field:string, assign:boolean = true){
    console.log('data is', data);
    console.log('field looking 4 is ', field);
    console.log('field is', data[field]);
    console.log('start strringified data',JSON.stringify(data[field]));
    let field_ret = null;
    switch(type){
      case DrupalNodeEditorProvider.FIELD_RELATION: console.log("frelation");  field_ret = this.getCleanFieldRArray(data,field,assign); break;
      case DrupalNodeEditorProvider.FIELD_NUMBER: console.log("number");  field_ret = this.getCleanFieldSimple(data,field,assign); break;
    }
    return field_ret;
  }

  getCleanFieldRArray(data:any,field:string, assign:boolean = true){
    let field_ret = null;
    if(data[field]){
      if(Array.isArray(data[field]['und'])){ 
        let aux_arr = new Array();
        console.log('isanarray');
        for(let value of data[field]['und']){
          console.log('value is',value);
          if(value['value']){ aux_arr.push(value['value']); }
          else  if(value['uid']){ aux_arr.push(value['uid']); }
          else  if(value['nid']){ aux_arr.push(value['nid']); }
          else{ aux_arr.push(value); }
        }
        field_ret = aux_arr;
       
      }else{ // si notiene mas de un elemento no es un array
        if(data[field]['und']['value']){ field_ret = data[field]['und']['value']; }
        else  if(data[field]['und']['uid']){ field_ret =  data[field]['und']['uid']; }
        else  if(data[field]['und']['nid']){ field_ret =  data[field]['und']['nid']; }
        else{ field_ret = data[field]['und']; }
      }
      console.log('end no array strringified data',JSON.stringify(data[field]));
    }else{
    }
    console.log(assign);
    if(assign){data[field] = field_ret; }
    console.log('end strringified data',JSON.stringify(data[field]));
    return field_ret;
  }

  getCleanFieldSimple(data:any,field:string, assign:boolean = true){
    let field_ret = null;
    if(data[field]['und']){
      console.log(data[field]['und']);
      if(data[field]['und'][0]){
        console.log(data[field]['und'][0]);
      if(data[field]['und'][0]['value']){ field_ret = data[field]['und'][0]['value']; }
      else  if(data[field]['und'][0]['uid']){ field_ret =  data[field]['und'][0]['uid']; }
      else  if(data[field]['und'][0]['nid']){ field_ret =  data[field]['und'][0]['nid']; }
      else{ field_ret = data[field]['und'][0]; }
      console.log('field_ret',field_ret);
    }else{
      field_ret = null;
    }
    }else{
      field_ret = data[field];
    }
    console.log('field_ret simple',field_ret);
    if(assign){data[field] = field_ret; }
    return field_ret;
  }

  getFormatedField(data, field:string){

  }

  

}

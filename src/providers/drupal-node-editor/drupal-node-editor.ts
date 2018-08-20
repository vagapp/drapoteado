import { Injectable } from '@angular/core';

@Injectable()
export class DrupalNodeEditorProvider {

  constructor() {
  }

  getCleanField( data , field:string, assign:boolean = true){
    console.log('data is', data);
    console.log('field looking 4 is ', field);
    console.log('field is', data[field]);
    console.log('start strringified data',JSON.stringify(data[field]));
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
        console.log('endarray strringified data',JSON.stringify(data['field']));
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


  getFormatedField(data, field:string){

  }

  

}

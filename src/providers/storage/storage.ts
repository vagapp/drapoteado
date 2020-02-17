import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(
    public storage: Storage
  ) { console.log('storage online');
   //let one= this.get('one');
   //console.log('storage',one);
}

  async set(key: string, value: any): Promise<any>{
    try {
      const result = await this.storage.set(key,value);
      return true;
    } catch (error) {
      return false;
    }
  }

  async get(key:string): Promise<any>{
    try {
      const result = await this.storage.get(key);
      if(result != null){
        return result;
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  async setObject(key: string, object: Object): Promise<any>{
    try {
      const result = await this.storage.set(key,JSON.stringify(object));
      return true;
    } catch (error) {
      return false;
    }
  }

  async getObject(key:string): Promise<any>{
    try {
      const result = await this.storage.get(key);
      if(result != null){
        return JSON.parse(result);
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  remove(key:string){
    this.storage.remove(key);
  }

  clear(){
    this.storage.clear();
  }
}

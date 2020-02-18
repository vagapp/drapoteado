import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

/*
  Generated class for the LoaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoaderProvider {
  loader:Loading = null;
  loaderActive:boolean = false;

  constructor(public loadingCtrl: LoadingController) {}

  presentLoader( content:string ){
    if(!this.loaderActive){
    this.loader = this.loadingCtrl.create({content:content});
    this.loader.present();
    this.loaderActive = true;
    }
  }

  dismissLoader(){
    if(this.loaderActive){
      this.loader.dismiss();
      this.loaderActive = false;
    }
  }

}

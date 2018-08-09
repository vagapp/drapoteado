import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrlProvider } from '../base-url/base-url';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DrupalNodeManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DrupalNodeManagerProvider {

  constructor(
    public http: HttpClient,
    public bu:BaseUrlProvider
  ) {
  }

  generateNewNode( newNode ):Observable<any>{
    let body = JSON.stringify(newNode);
    let url = `${this.bu.endpointUrl}node/`;
    return this.http.post(url,body).share();
  }

  updateNode( node ):Observable<any>{
    let body = JSON.stringify(node);
    let url = `${this.bu.endpointUrl}node/${node.Nid}`;
    return this.http.put(url,body).share();
  } 

  deleteNode( node ):Observable<any>{
    let url = `${this.bu.endpointUrl}node/${node.Nid}`;
    return this.http.delete(url).share();
  }

  getNode( node ):Observable<any>{
    let url = `${this.bu.endpointUrl}node/${node.Nid}`;
    return this.http.get(url).share();
  }

}

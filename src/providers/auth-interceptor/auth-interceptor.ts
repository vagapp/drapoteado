import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import { UserDataProvider } from '../user-data/user-data';

@Injectable()
export class AuthInterceptor implements HttpInterceptor  {
  constructor(private userData:UserDataProvider){

  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({headers: this.setAuthHeaders(req.headers)});
    console.log('AuthInterceptor intercepting request',req);
    return next.handle(req).do(evt => {
      console.log('AuthInterceptor handling event',evt);
    });
}

setAuthHeaders( headers:HttpHeaders):HttpHeaders{
 let ret = headers;
 ret.append('Content-Type','application/json; charset=utf-8');
 if(this.userData.sessionData.token) ret.append('X-CSRF-Token',`${this.userData.sessionData.token}`);
 if(this.userData.sessionData.sessid && this.userData.sessionData.session_name) ret.append('Authentication',`${this.userData.sessionData.session_name}=${this.userData.sessionData.sessid}`);
 return ret;
}
}

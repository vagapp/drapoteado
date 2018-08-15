import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/timeout';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {
  defaultTimeout = 500000;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //console.log('TimeoutInterceptor intercepts');
    const timeout = Number(req.headers.get('timeout')) || this.defaultTimeout;
    return next.handle(req).timeout(timeout);
  }
}

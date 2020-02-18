
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { _throw as throwError } from 'rxjs/observable/throw';
import { map, catchError } from 'rxjs/operators';

/*
  Generated class for the ErrorInterceptorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(){
    console.log('ErrorInterceptor online');
  }

  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('ErrorInterceptor intercepted request ',req);
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
  }








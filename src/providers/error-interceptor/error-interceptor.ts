
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { _throw as throwError } from 'rxjs/observable/throw';
import { map, catchError } from 'rxjs/operators';
import { UserDataProvider } from '../user-data/user-data';
import { AlertProvider } from '../alert/alert';

/*
  Generated class for the ErrorInterceptorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  autherror_already=false;

  constructor(public userData:UserDataProvider, public alert:AlertProvider){
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
        if(!this.autherror_already && Number(error.status) === 401 && Number(this.userData.userData.uid) != 0){
          this.autherror_already = true;
          this.userData.initreset();
          this.userData.AuthSubject.next(this.userData.userData.uid);
          this.alert.presentAlert('','ocurrió un problema al autenticar su sesión, por favor vuelva a ingresar.');
         
          //this.userData.logout();
          //window.location.reload();
        }
        return throwError(error);
      })
    );
  }
  }








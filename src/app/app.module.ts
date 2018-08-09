import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Clipboard } from '@ionic-native/clipboard';
import { OneSignal } from '@ionic-native/onesignal';

import { ComponentsModule } from '../components/components.module';
import { DirectivesModule } from '../directives/directives.module';
import { UserDataProvider } from '../providers/user-data/user-data';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
//import { HTTP } from '@ionic-native/http';
import { HttpModule } from '@angular/http';
import { AuthInterceptor } from '../providers/auth-interceptor/auth-interceptor';
import { TimeoutInterceptor } from '../providers/timeout-interceptor/timeout-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CitasDataProvider } from '../providers/citas-data/citas-data';
import { DateProvider } from '../providers/date/date';
import { BaseUrlProvider } from '../providers/base-url/base-url';
import { CitasManagerProvider } from '../providers/citas-manager/citas-manager';
import { CordovaAvailableProvider } from '../providers/cordova-available/cordova-available';
import { WebsocketServiceProvider } from '../providers/websocket-service/websocket-service';
import { DoctoresDataProvider } from '../providers/doctores-data/doctores-data';
import { PlanesDataProvider } from '../providers/planes-data/planes-data';
import { SubscriptionDataProvider } from '../providers/subscription-data/subscription-data';
import { SubscriptionManagerProvider } from '../providers/subscription-manager/subscription-manager';
import { OnesignalManagerProvider } from '../providers/onesignal-manager/onesignal-manager';
import { NotificationsDataProvider } from '../providers/notifications-data/notifications-data';
import { NotificationsManagerProvider } from '../providers/notifications-manager/notifications-manager';
import { DrupalNodeManagerProvider } from '../providers/drupal-node-manager/drupal-node-manager';
import { DoctoresManagerProvider } from '../providers/doctores-manager/doctores-manager';
import { ServiciosManagerProvider } from '../providers/servicios-manager/servicios-manager';
import { DrupalUserManagerProvider } from '../providers/drupal-user-manager/drupal-user-manager';
import { ReportesDataProvider } from '../providers/reportes-data/reportes-data';
import { ReportesManagerProvider } from '../providers/reportes-manager/reportes-manager';

//import { HttpBackend, HttpXhrBackend } from '@angular/common/http';
//import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';
//import { Platform } from 'ionic-angular';




@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: true,
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
      monthShortNames: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Cct', 'Nov', 'Dec' ],
      dayNames:['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
      dayShortNames: ['Dom', 'Lun', 'Mar', 'Mie','Jue','Vie','Sab' ],
     }),
    HttpClientModule,
    //NativeHttpModule,
    HttpModule,
    //IonicStorageModule.forRoot(),
    ComponentsModule,
    DirectivesModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimeoutInterceptor,
      multi: true
    },
    StatusBar,
    Clipboard,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserDataProvider,
    HttpClient,
    OneSignal,
    CitasDataProvider,
    DateProvider,
    BaseUrlProvider,
    CitasManagerProvider,
    CordovaAvailableProvider,
    WebsocketServiceProvider,
    DoctoresDataProvider,
    PlanesDataProvider,
    SubscriptionDataProvider,
    SubscriptionManagerProvider,
    OnesignalManagerProvider,
    NotificationsDataProvider,
    NotificationsManagerProvider,
    DrupalNodeManagerProvider,
    DoctoresManagerProvider,
    ServiciosManagerProvider,
    DrupalUserManagerProvider,
    ReportesDataProvider,
    ReportesManagerProvider,
    //{provide: HttpBackend, useClass: NativeHttpFallback, deps: [Platform, NativeHttpBackend, HttpXhrBackend]},
  ]
})
export class AppModule {}

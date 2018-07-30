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

//import { HttpBackend, HttpXhrBackend } from '@angular/common/http';
//import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';
//import { Platform } from 'ionic-angular';




@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
      monthShortNames: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Cct', 'Nov', 'Dec' ],
      dayNames:['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
      dayShortNames: ['Dom', 'Lun', 'Mar', 'Mie','Jue','Vie','Sab' ],
     }),
    BrowserModule,
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
    StatusBar,
    Clipboard,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserDataProvider,
    HttpClient,
    OneSignal,
    //{provide: HttpBackend, useClass: NativeHttpFallback, deps: [Platform, NativeHttpBackend, HttpXhrBackend]},
  ]
})
export class AppModule {}

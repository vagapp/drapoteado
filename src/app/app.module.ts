import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { WelcomeModalPage } from '../pages/welcome-modal/welcome-modal';
import { RegisterModalPage } from '../pages/register-modal/register-modal';
import { ReporteModalPage } from '../pages/reporte-modal/reporte-modal';
import { NuevacitaModalPage} from '../pages/nuevacita-modal/nuevacita-modal';
import { ProgresocitaModalPage } from '../pages/progresocita-modal/progresocita-modal';
import { NuevoservicioModalPage } from '../pages/nuevoservicio-modal/nuevoservicio-modal';
import { NuevousuarioModalPage } from '../pages/nuevousuario-modal/nuevousuario-modal';
import { NuevoreporteModalPage } from '../pages/nuevoreporte-modal/nuevoreporte-modal';
import { LoginPage } from '../pages/login/login';
import { CitasPage } from '../pages/citas/citas';
import { ServiciosPage } from '../pages/servicios/servicios';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { ReportesPage } from '../pages/reportes/reportes';
import { FacturacionPage } from '../pages/facturacion/facturacion';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HeaderComponent } from '../components/header/header';
import { FooterComponent } from '../components/footer/footer';
import { ComponentsModule } from '../components/components.module';
import { UserDataProvider } from '../providers/user-data/user-data';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';

import { IonicStorageModule } from '@ionic/storage';


import { HttpModule } from '@angular/http';

import { HttpBackend, HttpXhrBackend } from '@angular/common/http';
import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';
import { Platform } from 'ionic-angular';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WelcomeModalPage,
    RegisterModalPage,
    ReporteModalPage,
    NuevacitaModalPage,
    ProgresocitaModalPage,
    NuevoservicioModalPage,
    NuevousuarioModalPage,
    NuevoreporteModalPage,
    ServiciosPage,
    UsuariosPage,
    ReportesPage,
    FacturacionPage,
    LoginPage,
    CitasPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NativeHttpModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomeModalPage,
    RegisterModalPage,
    ReporteModalPage,
    NuevacitaModalPage,
    ProgresocitaModalPage,
    NuevoservicioModalPage,
    NuevousuarioModalPage,
    NuevoreporteModalPage,
    ServiciosPage,
    UsuariosPage,
    ReportesPage,
    FacturacionPage,
    CitasPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserDataProvider,
    HttpClient,
    //{provide: HttpBackend, useClass: NativeHttpFallback, deps: [Platform, NativeHttpBackend, HttpXhrBackend]},
  ]
})
export class AppModule {}

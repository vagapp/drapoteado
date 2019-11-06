import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { Citas } from '../../providers/user-data/citas';
import { CitasDataProvider } from '../../providers/citas-data/citas-data';
import { CitasManagerProvider } from '../../providers/citas-manager/citas-manager';
import { NotificationsManagerProvider } from '../../providers/notifications-manager/notifications-manager';
import { LoaderProvider } from '../../providers/loader/loader';
import { AlertProvider } from '../../providers/alert/alert';
import { DoctoresDataProvider } from '../../providers/doctores-data/doctores-data';
import { CitasPresentatorProvider } from '../../providers/citas-presentator/citas-presentator';
import { DateProvider } from '../../providers/date/date';
import { UpdaterProvider } from '../../providers/updater/updater';
/**
 * Generated class for the CitasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-citas',
  templateUrl: 'citas.html',
})
export class CitasPage {
  actualyear:number=0;
  actualMonth:number=0;

  //permisos
  canConfirm:boolean;
  canActivate:boolean;
  

  constructor(
   public citasPresentator: CitasPresentatorProvider,
   public citasData: CitasDataProvider,
   public userData: UserDataProvider,
   public date: DateProvider,
   public updater:UpdaterProvider
  ) {}

  ionViewDidLoad() {
    this.updater.updateCitas();
    //this.citasData.defaultSort();
    this.actualyear=0;
    this.actualMonth=0;
  }







 


}

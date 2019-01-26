import { Component } from '@angular/core';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { NavController, LoadingController, ModalController, PopoverController } from 'ionic-angular';
//import { Debugger } from '../../providers/user-data/debugger';
import { Citas } from '../../providers/user-data/citas';
import { NotificationsDataProvider } from '../../providers/notifications-data/notifications-data';
import { NotificationsManagerProvider } from '../../providers/notifications-manager/notifications-manager';
import { PermissionsProvider } from '../../providers/permissions/permissions';
import { ReportPresentatorProvider } from '../../providers/report-presentator/report-presentator';


/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})

export class HeaderComponent{
  bgColor:"C1272D";
  fntColor:"FFFFFF";
  authObservable = null;
  susObservable = null;
  reportObservable = null;
  showNotifications:boolean = false;
  pagename = null;
 
  constructor(
    public userData: UserDataProvider,
    public navCtrl:NavController,
    public loadingCtrl:LoadingController,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController,
    public notificationData: NotificationsDataProvider,
    public notiMan: NotificationsManagerProvider,
    public perm:PermissionsProvider,
    public reportPresentator: ReportPresentatorProvider
  ) {
    //this.pagename = this.navCtrl.getActive().name;
    this.authObservable = userData.AuthSubject;
    this.susObservable = userData.susSubject;
    this.reportObservable = this.reportPresentator.reportSubject;
   
    this.susObservable.subscribe(
      (val)=>{
        this.pagename = this.navCtrl.getActive().name;
        //Debugger.log(['sus val is',val]);
        if(Number(val) === 0){
        //Debugger.log(['page is ax',this.pagename]);
        if(this.pagename.localeCompare('HomePage') !== 0){
          //Debugger.log(['implying this is not facturation page']);
          this.navCtrl.setRoot("HomePage");
        }
        //this.userData.resetLists();
        }
        }
    );
    this.authObservable.subscribe( 
      (val)=>{
      if(Number(val) === Number(0) ) 
        this.navCtrl.setRoot("LoginPage");
    });

    this.reportObservable.subscribe(
      (val)=>{
        console.log('reportObservable');
        if(this.reportPresentator.reportisloading){
          this.reportPresentator.reportisloading = false;
        if(Number(this.reportPresentator.type) === Number(this.reportPresentator.REPORT_TICKET) ){ 
          let load = "ReporteTicketPage"; let modalClass = 'verysmallModal';
          let Modal = this.modalCtrl.create(load, undefined, { cssClass: `${modalClass} reportModal` });
           Modal.present({});
        }else{
          this.navCtrl.setRoot('ReportePage');
        }
      }
      
      
        }
    );
    
    } //fin constructor


  handleNotificationAction( action:string){
    if(this.userData.checkUserFeature([UserDataProvider.TIPO_ANY],[UserDataProvider.PLAN_ANY])){
      //Debugger.log(["operating notification on header",action]);
      const aux = action.split('-');
      switch(aux[0]){
        case 'cita':  //abrir cita
          this.openCitaModal(aux[1]);
        break;
        default: 
          //Debugger.log(['operating unknown action on notification']);
      }
    }
  }

  openCitaModal( citaNid ){
    //buscar que la cita exista.
    //const index = this.userData.getCitaIndexByNid(Number(citaNid));
    //if(index !== -1){ //si la cita existe abrirla
      //const cita = this.userData.citas[index];
      //this.openProgreso(cita);
    //}else{//si la cita no existe cargarla.
      //Debugger.log(['node not on memory, loading it from database']);
      //cargar una cita por el nodo
      const observable = this.userData.getCitasNidObservable(citaNid);
      let loader = this.loadingCtrl.create({
        content: "Cargando..."
      });
      loader.present();
      observable.subscribe((val)=>{
        loader.dismiss()
        if(val[0]){
        //Debugger.log(['wegotfrom nodeload',val]);
        let aux_cita = new Citas();
        aux_cita.setData(val[0]);
        //Debugger.log(['loaded cita',aux_cita]);
        //this.openProgreso(aux_cita);
      }
      },(response)=>{
        loader.dismiss();
      }
    )
   // }
  }

  openProgreso( cita: Citas){
    let Modal = this.modalCtrl.create("ProgresocitaModalPage", {cita : cita}, { cssClass: "smallModal progressModal" });
    Modal.onDidDismiss(data => {
      //this.userData.cargarCitas();
    });
    Modal.present({});
  }
 
  goHome(){
    this.pagename = this.navCtrl.getActive().name;
    if(this.pagename.localeCompare('HomePage') !== 0){
      //Debugger.log(['implying this is not Home page']);
      this.navCtrl.setRoot("HomePage");
    }
  }


  async presentNotifications(myEvent) {
      await this.notiMan.cargarNotificaciones().toPromise();
      let popover = this.popoverCtrl.create("NotificationPopPage", undefined, { cssClass: "notiPopover" });
      popover.present({
        ev: myEvent
      });
      /*this.notiMan.getNotificationObservable().subscribe(
          (val)=>{
            this.userData.setNotifications(val);
            this.userData.cargandoNotif =  this.userData.activeCargandoNotif = false;
          },(response)=>{this.userData.cargandoNotif = this.userData.activeCargandoNotif = false;}
      );
    }
    let popover = this.popoverCtrl.create("NotificationPopPage", undefined, { cssClass: "notiPopover" });
    popover.present({
      ev: myEvent
    });*/
  }



  

  



}
 
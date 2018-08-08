import { Component } from '@angular/core';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { NavController, LoadingController, ModalController, PopoverController } from 'ionic-angular';
//import { Debugger } from '../../providers/user-data/debugger';
import { Citas } from '../../providers/user-data/citas';


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

export class HeaderComponent {
  bgColor:"C1272D";
  fntColor:"FFFFFF";
  authObservable = null;
  susObservable = null;
  notiSubject = null;
  showNotifications:boolean = false;
  pagename = null;
 
  constructor(
    public userData: UserDataProvider,
    public navCtrl:NavController,
    public loadingCtrl:LoadingController,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController
    
  ) {
    //this.pagename = this.navCtrl.getActive().name;
    this.authObservable = userData.AuthSubject;
    this.susObservable = userData.susSubject;
    this.notiSubject = userData.notiSubject;
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
        }else{
          if(this.userData.sus_to_reports){
            let loader = this.loadingCtrl.create({
              content: "Cargando..."
            });
            loader.present();
            this.userData.loading_reports = true;
            let loadrepointerval = setInterval(
              ()=>{
                if(!this.userData.loading_reports){ loader.dismiss();clearInterval(loadrepointerval);}
              },500
            );
            this.userData.cargarListaReportes();
          }
        }
      }
    );
    this.authObservable.subscribe( 
      (val)=>{
      if(Number(val) === Number(0) ) 
        this.navCtrl.setRoot("LoginPage");
    });

    this.notiSubject.subscribe((action:string)=>{
       this.handleNotificationAction(action);
      });
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


  presentNotifications(myEvent) {
    if(this.userData.notificaciones.length === 0){
      this.userData.activeCargandoNotif = true;
      let notinterval = setInterval(()=>{
        if(!this.userData.activeCargandoNotif || this.userData.notificaciones.length !== 0){
          this.userData.activeCargandoNotif = false;
          clearInterval(notinterval);
        }
      },500);
      this.userData.getNotificationObservable().subscribe(
          (val)=>{
            this.userData.setNotifications(val);
            this.userData.cargandoNotif =  this.userData.activeCargandoNotif = false;
          },(response)=>{this.userData.cargandoNotif = this.userData.activeCargandoNotif = false;}
      );
    }
    let popover = this.popoverCtrl.create("NotificationPopPage", undefined, { cssClass: "notiPopover" });
    popover.present({
      ev: myEvent
    });
  }



  

  



}
 
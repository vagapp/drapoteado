import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { Citas } from '../../providers/user-data/citas';
import { CitasDataProvider } from '../../providers/citas-data/citas-data';
import { CitasManagerProvider } from '../../providers/citas-manager/citas-manager';
import { NotificationsManagerProvider } from '../../providers/notifications-manager/notifications-manager';
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
  

  //permisos
  canConfirm:boolean;
  canActivate:boolean;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    public userData:UserDataProvider,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    public citasData: CitasDataProvider,
    public citasMan: CitasManagerProvider,
    public notiMan: NotificationsManagerProvider
  ) {
    //this.citas = new Array();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CitasPage');
    this.cargarCitas();
  }

  openNuevaCita(){
      let Modal = this.modalCtrl.create("NuevacitaModalPage", undefined, { cssClass: "nuevaCitaModal smallModal" });
      Modal.onDidDismiss(data => {
        this.cargarCitas();
      });
      Modal.present({});
    }

    cargarCitas(){
      let loader = this.loadingCtrl.create({
        content: "cargando..."
      });
      //loader.present();
      /*this.userData.cargarCitas().subscribe(
      (val) => {},
      response => {},
      () => {loader.dismiss();}
      );*/
    }

    updateStatePop( cita ,state ){
      let aux_title = "";
      switch(state){
        case 0: aux_title = "pendiente";break;
        case 1: aux_title = "confirmada";break;
        case 2: aux_title = "Activa";break;
        case 3: aux_title = "a cobrar";break;
        case 4: aux_title = "finalizada";break;
      }
        let alert = this.alertCtrl.create({
          title: aux_title,
          message: '¿Está seguro que desea colocar esta cita como '+aux_title+'?',
          buttons: [
            {
              text: 'No',
              role: 'cancel',
              handler: () => {
               
              }
            },
            {
              text: 'Si',
              handler: () => { 
                this.updateStateRequest(cita,state);
              }
            }
          ]
        });
        alert.present();
      }
   

    updateStateRequest ( cita, state ) {
      let loader = this.loadingCtrl.create({
        content: "Actualizando..."
      });
      loader.present();
      this.citasMan.updateCitaState(cita,state).subscribe(
        (val)=>{
          //Debugger.log(['updating cita',cita]);
          if(Number(state) === 1){ //cambiando a cita confirmada
            //crear notificacion para doctor a quien le confirmaron la cita
            if(cita.doctor_playerid)
            this.notiMan.generateNotification([cita.data.field_cita_doctor.und[0]],`Cita Confirmada con ${cita.paciente} fecha: ${new Date(cita.data.field_datemsb['und'][0]['value'])}`,`cita-${cita.Nid}`);
          }
          if(Number(state) === 3){ //cambiando a cita por cobrar
            //crear notificacion para cajas que esten ligadas al doctor.
            if(cita.caja_playerid){
            this.notiMan.generateNotification([cita.data.field_cita_caja.und[0]],`La cita de de ${cita.paciente} esta en espera de cobro`,`cita-${cita.Nid}`);
          }
          }
          loader.dismiss();
          this.cargarCitas();
        },
        response => {
          //console.log("POST call in error", response);
          this.presentAlert("Error","Ubo un problema al presentar ");
        }
      );
    } 

    editCita( cita ){
      let Modal = this.modalCtrl.create("NuevacitaModalPage", { cita: cita }, { cssClass: "nuevaCitaModal smallModal" });
      Modal.onDidDismiss(data => {
        this.cargarCitas();/*.subscribe((val)=>{loader.dismiss();}
        );*/
      });
      Modal.present({});
    }


    openProgreso( cita: Citas){
      //console.log("sending progreso", cita);
      let Modal = this.modalCtrl.create("ProgresocitaModalPage", {cita : cita}, { cssClass: "smallModal progressModal" });
      Modal.onDidDismiss(data => {
       this.cargarCitas();/*.subscribe((val)=>{loader.dismiss();}
        );*/
      });
      Modal.present({});
    }


    iniciarCita( cita:Citas ){
      let loader = this.loadingCtrl.create({
        content: "Actualizando"
      });
      
      let aux_doc = this.userData.getDoctorOFCita(cita);
      //console.log("tryin to open cita progreso",cita);
      if(cita.checkState(UserDataProvider.STATE_ACTIVA)){
        this.openProgreso(cita);
      }else{
        if(aux_doc.citaActiva){
          this.presentAlert("Ocupado","Este doctor esta ocupado con una cita Activa");
          loader.dismiss();
          return 0;
        }
      let alert = this.alertCtrl.create({
        title: "Iniciar Consulta",
        message: '¿Está seguro que desea colocar esta cita como Activa?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
            }
          },
          {
            text: 'Si',
            handler: () => { 
              //loader.present();
              this.citasMan.updateCitaState( cita , UserDataProvider.STATE_ACTIVA ).subscribe(
                (val)=>{
                  /*this.userData.cargarCitas().subscribe(
                    (val)=>{
                      loader.dismiss();
                      this.openProgreso(cita);
                    }
                  );*/
                });
            }
          }
        ]
      });
      alert.present();
    }
    }

    delecitaCitaPop(cita:Citas){
      let alert = this.alertCtrl.create({
        title: "Eliminar Citas",
        message: '¿Está seguro que desea eliminar esta cita?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
            }
          },
          {
            text: 'Si',
            handler: () => { 
              this.deleteCita(cita);
            }
          }
        ]
      });
      alert.present();
    }

    deleteCita( cita:Citas ){
      //Debugger.log(['delete citas']);
      let loader = this.loadingCtrl.create({
        content: "eliminando..."
      });
      loader.present();
      this.citasMan.deleteCita( cita.data ).subscribe(
        (val)=>{
          loader.dismiss();
          //Debugger.log(['val returned from deletecita',val]);
          //this.userData.removeCitaFromLists(cita);
          this.cargarCitas();
        }
      );
    }

    presentToast(msg) {
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 6000,
        position: 'top'
      });
      toast.present();
    }
presentAlert(key,Msg) {
  let alert = this.alertCtrl.create({
    title: key,
    subTitle: Msg,
    buttons: ['Dismiss']
  });
  alert.present();
}

}

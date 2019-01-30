import { Injectable } from '@angular/core';
import { ModalController, Modal } from 'ionic-angular';
import { PermissionsProvider } from '../permissions/permissions';
import { UserDataProvider } from '../user-data/user-data';
import { DrupalUserManagerProvider } from '../drupal-user-manager/drupal-user-manager';

/*
  Generated class for the TutorialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TutorialProvider {
  isTutorial:boolean = false;
  serviceCreated:boolean = false;
  usuarioCreated:boolean = false;
  tutorialMainModal: Modal = null;
  serviciosModal: Modal = null;
  usuariosModal: Modal = null;
  canClose:boolean =false;

  tutorial_users_selected_option:number = 0;
  tutorial_user_created_step:number = 0;

  static TUTORIAL_ACTIVE = true;
  static TUTORIAL_FINISHED = false;

  static TUTORIAL_USER_CNR = 1; // opcion de caja y recepcion
  static TUTORIAL_USER_BOTH = 2; //opcion de un usuario para caja y otro para recepcion

 static TUTORIAL_USER_STEP_CAJA  = 2;
 static TUTORIAL_USER_STEP_RECEPCION = 1;

  get TUTORIAL_ACTIVE(){ return TutorialProvider.TUTORIAL_ACTIVE; }
  get TUTORIAL_FINISHED(){ return TutorialProvider.TUTORIAL_FINISHED; }
  get TUTORIAL_USER_CNR(){ return TutorialProvider.TUTORIAL_USER_CNR; }
  get TUTORIAL_USER_BOTH(){ return TutorialProvider.TUTORIAL_USER_BOTH; }

  get TUTORIAL_USER_STEP_CAJA(){ return TutorialProvider.TUTORIAL_USER_STEP_CAJA; }
  get TUTORIAL_USER_STEP_RECEPCION(){ return TutorialProvider.TUTORIAL_USER_STEP_RECEPCION; }

  


  constructor(
    public modalCtrl: ModalController,
    public permissions: PermissionsProvider,
    public userData: UserDataProvider,
    public userMan: DrupalUserManagerProvider,

  ) {
  }

  checkNStart(){
    if(this.checkTutorialState()){
      this.canClose = false;
      this.openTutorial();
    }
  }

  openTutorialCanClose(){
    this.canClose = true;
    this.openTutorial();
  }

  tutorialReplayAvailability(){
    if(this.permissions.checkUserPermission([UserDataProvider.TIPO_DOCTOR])
      && this.userData.userData.tutorial_state.und 
      && Number(this.userData.userData.tutorial_state.und[0].value) !== 0
    ){ return true } 
    return false;
  }

  checkTutorialState(){
    if(
      this.permissions.checkUserSuscription([UserDataProvider.PLAN_ANY])
      && this.permissions.checkUserPermission([UserDataProvider.TIPO_DOCTOR])
      && this.userData.userData.tutorial_state.und 
      && Number(this.userData.userData.tutorial_state.und[0].value) === 0
    ){
      return TutorialProvider.TUTORIAL_ACTIVE;
    }else{
      return TutorialProvider.TUTORIAL_FINISHED;
    }
  }

  openTutorial(){
      //this.tutorialMainModal = this.modalCtrl.create("WelcomeModalPage");
      this.tutorialMainModal = this.modalCtrl.create("WelcomeModalPage", undefined, {enableBackdropDismiss: this.canClose});
      this.tutorialMainModal.present({});
  }

  async finishTutorial(){
    this.userData.userData.tutorial_state.und[0].value = "1";
    let cloneData = {
      uid:this.userData.userData.uid,
      field_tutorial_state: {und: [{value: "1"}]},
    }
    await this.userMan.updateUserd(cloneData).toPromise();
    this.tutorialMainModal.dismiss();
    console.log('update tutorial at dismiss');
  }

  showServicioModal(){
    this.serviciosModal = this.modalCtrl.create("NuevoservicioModalPage", undefined, { enableBackdropDismiss: this.canClose , cssClass: "smallModal nuevoservicioModal" });
    this.serviciosModal.present({});
  }

  closeServicioModal(){
    //this.serviciosModal.dismiss();
  }

  showUsuarioModal(){
    this.usuariosModal = this.modalCtrl.create("NuevousuarioModalPage", undefined, {enableBackdropDismiss: this.canClose , cssClass: "smallModal nuevousuarioModal" });
    this.usuariosModal.present({});
  }

  closeUsuarioModal(){
    this.usuariosModal.dismiss();
  }

  


}

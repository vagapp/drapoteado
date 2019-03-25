
import { Injectable } from '@angular/core';
import { UserDataProvider } from '../user-data/user-data';
import { DoctoresDataProvider } from '../doctores-data/doctores-data';
import { SubscriptionManagerProvider } from '../subscription-manager/subscription-manager';
import { DoctoresManagerProvider } from '../doctores-manager/doctores-manager';
import { PermissionsProvider } from '../permissions/permissions';
import { SubscriptionDataProvider } from '../subscription-data/subscription-data';
import { SubusersManagerProvider } from '../subusers-manager/subusers-manager';
import { CitasDataProvider } from '../citas-data/citas-data';
import { CitasManagerProvider } from '../citas-manager/citas-manager';
import { LoaderProvider } from '../loader/loader';

/*
  Generated class for the UpdaterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UpdaterProvider {

  constructor(
    public userData: UserDataProvider,
    public docData: DoctoresDataProvider,
    public docMan: DoctoresManagerProvider,
    public subscriptionManager: SubscriptionManagerProvider,
    public perm: PermissionsProvider,
    public subsData: SubscriptionDataProvider,
    public subusersManager: SubusersManagerProvider,
    public citasData: CitasDataProvider,
    public citasManager: CitasManagerProvider,
    public loader:LoaderProvider
   
    ) {
   
  }
  async updateSuscription(){
    console.log('updater updateSuscription');
    if(this.perm.checkUserPermission([UserDataProvider.TIPO_DOCTOR])){ //si es doctor se carga la suscripcion
      await this.subscriptionManager.loadSubscription();
    }else{ 
      await this.subscriptionManager.loadGroupSubuserSubs(); //se cargan subscripciones a las que estan agregados.
      this.docMan.loadGroupDoctors(); //se cargan los doctores de las suscripciones a las que estan agregados.
    }
    this.userData.susSubject.next(this.subsData.isactive);
  }

 async updateDocList(){
  console.log('updater updateDocList');
  this.docData.doctores = new Array();
  await this.docMan.initDoctoresUids();
  await this.subscriptionManager.loadDoctorsSubscriptions();
  this.docMan.filterActiveDoctors();
  if(this.subsData.subscription && this.subsData.subscription.field_doctores_json){
    //this.docs = JSON.parse(this.subsData.subscription.field_doctores_json);
    this.subsData.setDoctores();
    }
  }


  async updateSubusers(){
    console.log();
    await this.subusersManager.cargarSubusuarios();
  }

  //las citas no se actualizan bien. no se filtran doctores que ya no se tienen agregados.
  //tengo dos listas de doctores, una en docdata y otra en subsdata. no se cual se usa para que. porque hay dos? que me pasa?
  async updateCitas(){
    this.citasData.citas = new Array();
    this.citasData.daysCitas = new Array();
    await this.citasManager.requestCitas().toPromise();
    this.docMan.evaluateCitas();
  }

}

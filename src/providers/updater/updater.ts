
import { Injectable } from '@angular/core';
import { UserDataProvider } from '../user-data/user-data';
import { DoctoresDataProvider } from '../doctores-data/doctores-data';
import { SubscriptionManagerProvider } from '../subscription-manager/subscription-manager';
import { DoctoresManagerProvider } from '../doctores-manager/doctores-manager';
import { PermissionsProvider } from '../permissions/permissions';
import { SubusersDataProvider } from '../subusers-data/subusers-data';
import { SubscriptionDataProvider } from '../subscription-data/subscription-data';

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
    public subsData: SubscriptionDataProvider
   
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
  }

 async updateDocList(){
  console.log('updater updateDocList');
  await this.docMan.initDoctoresUids();
  await this.subscriptionManager.loadDoctorsSubscriptions();
  this.docMan.filterActiveDoctors();
  if(this.subsData.subscription && this.subsData.subscription.field_doctores_json){
    //this.docs = JSON.parse(this.subsData.subscription.field_doctores_json);
    this.subsData.setDoctores();
    }
  }

}

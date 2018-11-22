import { Injectable } from '@angular/core';
import { UserDataProvider } from '../user-data/user-data';
import { SubscriptionDataProvider } from '../subscription-data/subscription-data';

@Injectable()
export class PermissionsProvider {

  static PLAN_GROUP:number = 1205 ; 

  get PLAN_GROUP(){ return PermissionsProvider.PLAN_GROUP }
  checkPlan = false;

  constructor(
    public userData: UserDataProvider,
    public subsData: SubscriptionDataProvider
  ) {
    console.log('pmp online');
  }

   /**
   * CheckUserFeature resolves if a feature should appear for this user giving the user roles (permision) and the user plan suscriptions (suscriptions)
   * and has been created to simplify the check on features that requiere both.
  */
 checkUserFeature( permision:Array<number>,suscriptions:Array<number>, debug:boolean = false):boolean{
  let ret = false;
  let permisioncheck = false;
  let suscriptionscheck = false;
  if(permision === null || permision === undefined || permision.length === 0){ permisioncheck = true;}
  else{permisioncheck = this.checkUserPermission(permision,debug);}
  if(suscriptions === null || suscriptions === undefined || suscriptions.length === 0){ suscriptionscheck = true;}
  else{suscriptionscheck = this.checkUserSuscription(suscriptions,debug);}
  if(permisioncheck && suscriptionscheck){ ret = true; }
  return ret;
}

checkUserPermission( permision:Array<number> , debug:boolean = false):boolean{
  let ret = false;
  //checking for ANY
  if(permision.indexOf(UserDataProvider.TIPO_ANY) > -1 && this.userData.userData.field_tipo_de_usuario.und.length > 0){ return true;}
  //regular check
  for(let i=0; i< this.userData.userData.field_tipo_de_usuario.und.length; i++){
    if (permision.indexOf(parseInt(this.userData.userData.field_tipo_de_usuario.und[i].value)) > -1) {ret = true; break;}
  }
  return ret;
}

  /**
   * la suscripcion debe resultar false si:
   * el usuario no tiene guardado un id de suscripcion en su data, o esta es 0
   * la suscripcion que carga el usuario esta inactiva.
  */
checkUserSuscription( suscriptions:Array<number>, debug:boolean = false):boolean{
  let ret = false;
  //si la subscripcion no esta activa (expiro, no ha sido pagada etc) retorna false
  //if(Number(this.userData.field_sub_id.und[0]) === Number(0) || this.subscription === null){return false;}
  if(!this.checkUserPermission([UserDataProvider.TIPO_DOCTOR])){return true;} //now subusers dont get to check on subscription
  if(this.subsData.subscription === null){return false;}
  if(Number(this.subsData.subscription.field_active) === Number(0)){return false;} //if not active returns false also
  // checking for ANY, automatically returns true since we checked for not 0 or null up here
  if(suscriptions.indexOf(UserDataProvider.PLAN_ANY) > -1){ return true;}
  //regular check
  if(suscriptions.indexOf(this.subsData.subscription.field_plan_sus) > -1){ret = true;}
  return ret;
}


checkUserPlanHolder(){
  console.log('checkUserPlanHolder');
  console.log(this.subsData.subscription.field_plan_holder );
  console.log(this.userData.userData.uid);
  return this.checkUserPermission([UserDataProvider.TIPO_DOCTOR]) && (Number(this.subsData.subscription.field_plan_holder) === Number(this.userData.userData.uid));
}


}

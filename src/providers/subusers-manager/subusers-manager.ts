
import { Injectable } from '@angular/core';
import { UserDataProvider, userd } from '../user-data/user-data';
import { DrupalUserManagerProvider } from '../drupal-user-manager/drupal-user-manager';
import { Observable } from 'rxjs/Observable';
import { DoctoresDataProvider } from '../doctores-data/doctores-data';
import { SubusersDataProvider } from '../subusers-data/subusers-data';
import { SubscriptionDataProvider } from '../subscription-data/subscription-data';
import { DrupalNodeManagerProvider } from '../drupal-node-manager/drupal-node-manager';

/*
  Generated class for the SubusersManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SubusersManagerProvider {

  constructor(
    public subusersData: SubusersDataProvider,
    public userData: UserDataProvider,
    public userMan: DrupalUserManagerProvider,
    public docData: DoctoresDataProvider,
    public subsData: SubscriptionDataProvider,
    public nodeManager: DrupalNodeManagerProvider
  ) {
    console.log('Hello SubusersManagerProvider Provider');
  }

  async cargarSubusuarios(){
    let res = await this.requestSubusuarios().toPromise();
    for(let us of res){
    this.setSubusuariosResult(us);
    }
  }

  requestSubusuarios():Observable<any>{
    return this.userMan.requestUsers([this.userData.userData.uid], null, null).share();
  }

  setSubusuariosResult( user_data ){
      let aux_user = this.userData.getEmptyUserd();
      aux_user.uid = user_data.uid;
      aux_user.name = user_data.name;
      aux_user.field_alias.und[0].value = user_data.field_alias;
      aux_user.field_nombre.und[0].value = user_data.field_nombre;
      aux_user.field_apellidos.und[0].value = user_data.field_apellidos;
      aux_user.field_useremail.und[0].email = user_data.field_useremail.email;
      aux_user.mail = user_data.mail;
      aux_user.status = "1";
      aux_user.field_doctores.und = new Array();
      for( let doc of user_data.field_doctores){
        aux_user.field_doctores.und.push(doc.uid);
      }
      aux_user.field_tipo_de_usuario.und = new Array();
      for( let tipo of user_data.field_tipo_de_usuario){
        aux_user.field_tipo_de_usuario.und.push(tipo);
      }
      this.subusersData.addUser(aux_user);
    }

      /**
       * 
       * @param user user to check if it has been created by this user
       * checks if this user is registered on this subscription. meaning it has been created by this user.
       */
    checkIsOwnSubuser(user:userd){
      return this.subsData.subscription.field_subusuarios.find((uid)=>{ return Number(uid) === Number(user.uid)}) ? true : false;
    }

    /**
     * this removes the user from subscription rendering the user useless.
    */
    async removeUserFromSubscription( user: userd){
      if(this.checkIsOwnSubuser(user)){
        this.subsData.subscription.removeSubUserFromSubs(user);
        let obs = this.nodeManager.updateNode(this.subsData.subscription.getData());
        await obs.toPromise();
        //await this.removeSubuser(user);
        console.log('sub removed and saved');
      }
    }


    /*
    * remove subuser takes this doctor out of the list of the subuser, 
    * saves the subuser changes
    * and removes this subuser from the actual list 
    * 
    * */
    async removeSubuser( userd ){
      SubusersManagerProvider.removeDoctorFromSubUser(userd,this.userData.userData.uid);
      console.log('actualizando usuario sin doc id ',userd);
      delete userd.field_sub_id;
      await this.userMan.updateUserd(userd).toPromise();
      this.subusersData.removeUser(userd);
    }

    async addSubuser( userd ){
      SubusersManagerProvider.addDoctorToSubUser(userd , this.userData.userData.uid);
      console.log('actualizando usuario con doc id ',userd);
      delete userd.field_sub_id;
      await this.userMan.updateUserd(userd).toPromise();
      this.subusersData.addUser(userd);
    }

    static removeDoctorFromSubUser( user: userd , uid:number ){
      if(user.field_doctores && user.field_doctores.und)
      user.field_doctores.und = user.field_doctores.und.filter((docuid)=>{ return Number(docuid) !== Number(uid)});
    }

    static addDoctorToSubUser( user: userd , uid: number){
      if(!user.field_doctores.und){ user.field_doctores.und = new Array();}
      user.field_doctores.und.push(uid);
    }

  }

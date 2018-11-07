
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

  /*async fullUserLoad(){

    await this.cargarSubusuarios();
    await this.cargarSubusuariosSubs();
  }*/

  async cargarSubusuarios(){
    //this.subusersData.subscriptionSubUsers = new Array();
    //this.subusersData.subUsers = new Array();
    await this.loadSubusers();
    await this.loadSubusersSubs();
  }

  async loadSubusers(){
    let res = await this.requestSubusuarios().toPromise();
    console.log('loading subusers res',res);
    for(let us of res){
    this.setSubusuariosResult(us);
    }
    console.log('loaded subusers', this.subusersData.subUsers);
  }

  async loadSubusersSubs(){
    //need to use ids filter with the subscription users ids. get ids from subsData.
    let res = await this.requestSubusuariosSubs().toPromise();
    console.log('loading subusers for subscription res',res);
    for(let us of res){
    this.setSubusuariosResult(us,SubusersDataProvider.SUBUSERS_SUBSCRIPTION);
    }
    console.log('loaded subusers', this.subusersData.subUsers);
  }

  async loadGroupUsers(){
   let res = await this.requestGroupUsers().toPromise();
   for(let us of res){
    //this.setGroupUserResult(us,SubusersDataProvider.SUBUSERS_SUBSCRIPTION);
    }
    console.log('loaded GroupUsers', this.subusersData.subUsers);
  }

  requestGroupUsers():Observable<any>{
    console.log('subdoctores',this.subsData.subscription.field_doctores);
    return this.userMan.requestUsers([this.subsData.subscription.field_doctores], null, null).share();
  }

  requestSubusuarios():Observable<any>{
    return this.userMan.requestUsers([this.userData.userData.uid], null, null).share();
  }

  requestSubusuariosSubs():Observable<any>{
    return this.userMan.requestUsers(null, null,this.subsData.getSubusersIDs()).share();
  }

  setSubusuariosResult( user_data, subuser_type:number = SubusersDataProvider.SUBUSER_CONSUMERS ){
    console.log('setSubusuariosResult data',user_data,subuser_type);
    let aux_user = this.generateUserdFromData(user_data);
    switch(subuser_type){
      case SubusersDataProvider.SUBUSER_CONSUMERS: this.subusersData.addUser(aux_user); break;
      case SubusersDataProvider.SUBUSERS_SUBSCRIPTION: this.subusersData.addUserSubs(aux_user); break;
    }
    }

    generateUserdFromData( user_data):userd{
      console.log('generating sub user from data', user_data);
      let aux_user = SubusersManagerProvider.getEmptyUserd();
      aux_user.uid = user_data.uid;
      aux_user.name = user_data.name;
      aux_user.field_alias.und[0].value = user_data.field_alias;
      aux_user.field_nombre.und[0].value = user_data.field_nombre;
      aux_user.field_apellidos.und[0].value = user_data.field_apellidos;
      aux_user.field_useremail.und[0].email = user_data.field_useremail.email;
      aux_user.mail = user_data.mail;
      aux_user.status = "1";
      aux_user.field_codigo = user_data.field_codigo;
      aux_user.field_doctores.und = new Array();
      for( let doc of user_data.field_doctores){
        aux_user.field_doctores.und.push(doc.uid);
      }
      aux_user.field_tipo_de_usuario.und = new Array();
      if(user_data.field_tipo_de_usuario.value) aux_user.field_tipo_de_usuario.und.push(user_data.field_tipo_de_usuario.value);
      //console.log('GENERATED sub user', aux_user);
      return aux_user;
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
        this.subusersData.removeUserSubs(user);
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



    static getEmptyUserd(){
      return <userd>{
        uid:0,
        name:"",
        pass:"",
        mail:"",
        status:"",
        roles:[0],
        field_tipo_de_usuario:{und:[0]},
        field_useremail:{und:[{email:""}]},
          field_nombre:{und:[{value:""}]},
          field_apellidos:{und: [{value:""}]},
          field_especialidad:{und: [{value:""}]},
          field_alias:{und:[{value: ""}]},
          field_calle:{und:[{value: ""}]},
          field_no_ext:{und: [{value: ""}]},
          field_no_int: {und: [{value: ""}]},
          field_codigo_postal: {und: [{value: ""}]},
          field_ciudad: {und: [{value:""}]},
          field_colonia: {und:[{value: ""}]},
          field_pais:{und: [{value:""}]},
          field_municipio:{und:[{value:""}]},
          field_estado_ubicacion:{und:[{value: ""}]},
          field_plan_date: {und: [{value: {date:""}}]},
          field_forma_pago: {und: [{value: ""}]},
          tutorial_state:{und:[{ value:0}]},
          field_codigo:{und:[{ value:""}]},
          field_doctores:{und:[0]},
          field_sub_id:{und:[0]},
          field_planholder:{und:[{value: true}]},
          field_stripe_customer_id:{und:[{value: ""}]},
          field_src_json_info:{und:[{value: ""}]}
      }
    }
  

  }

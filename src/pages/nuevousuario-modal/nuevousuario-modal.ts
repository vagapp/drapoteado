import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { userd, UserDataProvider } from '../../providers/user-data/user-data';
import { Debugger } from '../../providers/user-data/debugger';
import { DrupalUserManagerProvider } from '../../providers/drupal-user-manager/drupal-user-manager';
import { SubusersManagerProvider } from '../../providers/subusers-manager/subusers-manager';
import { LoaderProvider } from '../../providers/loader/loader';
import { AlertProvider } from '../../providers/alert/alert';
import { SubscriptionDataProvider } from '../../providers/subscription-data/subscription-data';
import { SubscriptionManagerProvider } from '../../providers/subscription-manager/subscription-manager';
import { TutorialProvider } from '../../providers/tutorial/tutorial';
import { WsMessengerProvider } from '../../providers/ws-messenger/ws-messenger';
import { PermissionsProvider } from '../../providers/permissions/permissions';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


/**
 * Generated class for the NuevousuarioModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevousuario-modal',
  templateUrl: 'nuevousuario-modal.html',
})
export class NuevousuarioModalPage {
  initialpage = true;
  newuser = false;
  newUser:userd;
  isnew:boolean;
  checkpass:string;
  newUserCode:string;
  nextCode = false;
  codeuser=false;
  showerrors:boolean = false;
  codeuserNP=false; //if tutorial user is gotten by code this disables password show

  get subsLeft(){
    return this.subsData.getSubAccountsLeft();
  }

  selectedUsersOptions: number = 0;

  /*BANDERA, USUARIO AGREGADO*/
  added_user:boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userData: UserDataProvider,
    public subsData: SubscriptionDataProvider,
    public subsManager: SubscriptionManagerProvider,
    public viewCtrl: ViewController,
    public userMan: DrupalUserManagerProvider,
    public subusersManager: SubusersManagerProvider,
    public loader: LoaderProvider,
    public alert: AlertProvider,
    public tutorial: TutorialProvider,
    public wsMessenger: WsMessengerProvider,
    public perm: PermissionsProvider

  ) {
 
    let aux_node = navParams.get('userd');
    if(aux_node){
      this.isnew = false;
      this.newUser = SubusersManagerProvider.getEmptyUserd();
      this.newUser = aux_node;
      this.initialpage = false;
      this.newuser = true;
    }else{
      this.isnew = true;
      this.resetNewUser();
    }
  }

  dismiss() {
    this.viewCtrl.dismiss(this.added_user);
  }

  resetNewUser(){
    this.newUser = SubusersManagerProvider.getEmptyUserd();
  }

  ionViewDidLoad() {
  
  }

  selectOption( selected:number ){
    this.selectedUsersOptions = Number(selected);
    
  }

  checkSelectedOption(selected:number ){
    return Number(this.selectedUsersOptions) === Number(selected);
  }

  isSelectedOption(){
    return this.selectedUsersOptions !== 0;
  }

  userTutorialStart(){
    
    this.newuser= true; 
    this.initialpage=false;
    this.tutorial.tutorial_users_selected_option = this.selectedUsersOptions;
    
    if(this.tutorial.tutorial_users_selected_option === TutorialProvider.TUTORIAL_USER_BOTH){
      console.log();
      this.newUser.field_tipo_de_usuario.und = [this.userData.TIPO_CAJA];
      this.tutorial.tutorial_user_created_step = TutorialProvider.TUTORIAL_USER_STEP_CAJA ; 
    }else if(this.tutorial.tutorial_users_selected_option === TutorialProvider.TUTORIAL_USER_CODE){
     
      this.codeuser = true;
      this.newuser= false; 
      
    }else{
      this.newUser.field_tipo_de_usuario.und = [this.userData.TIPO_CAJAYRECEPCION];
    }
  }

  nextUser(){ //despues de crear caja se crea recepcion, se reinician las variables para manipular el template.
    if(this.tutorial.tutorial_users_selected_option === TutorialProvider.TUTORIAL_USER_CODE){
      this.newuser = false;
      this.codeuser = true;
      this.nextCode = true;
      this.initialpage=false;
      this.tutorial.usuarioCreated = false;
      this.restart();
      this.newUser.field_tipo_de_usuario.und = [this.userData.TIPO_RECEPCION];
    }else{
      this.newuser = true;
      this.initialpage=false;
      this.tutorial.usuarioCreated = false;
      this.tutorial.tutorial_user_created_step = TutorialProvider.TUTORIAL_USER_STEP_RECEPCION;
      this.restart();
      this.newUser.field_tipo_de_usuario.und = [this.userData.TIPO_RECEPCION];
    }
  }

  checkIfgoback(){
    let ret = true;
    if( Number(this.tutorial.tutorial_user_created_step) === Number(TutorialProvider.TUTORIAL_USER_STEP_RECEPCION) ) ret = false;
    if( this.nextCode  ) ret = false;
    //console.log('checkIfgoback',ret, 'nextcode',this.nextCode);
    return ret;
  }

  endUsers(){
    this.tutorial.usuarioCreated = true;
    this.dismiss();
  }


  





  createUserd(){
    this.showerrors = false;
   if(this.createrNotEmptyValidation() && this.createUserValidation()){
    this.loader.presentLoader('Generando Usuario ... ');
    //agregar este doctor.
    this.newUser.field_doctores.und = new Array(); 
    this.newUser.field_owner.und = new Array();
    this.newUser.field_doctores.und[this.userData.userData.uid] = this.userData.userData.uid;
    this.newUser.field_owner.und[0] = this.userData.userData.uid;   //crear codigo, verificar que sea unique = S
    this.newUser.field_codigo.und[0].value = "add"+this.userData.userData.uid;
    this.newUser.field_nombre.und[0].value = "Subusuario";
    this.newUser.field_apellidos.und[0].value = "Subusuario";
    this.newUser.field_nombre.und[0].value = this.checkpass;
    this.newUser.status = ""+1;
    delete this.newUser.field_sub_id;
    this.userMan.generateNewUserd( this.newUser ).subscribe(
    async (val)=>{
      if(!this.subsData.subscription.field_subusuarios) this.subsData.subscription.field_subusuarios = new Array();
      this.subsData.subscription.field_subusuarios.push(val['uid']);
      let obs = this.subsManager.updateUserSuscription().subscribe( (val)=>{console.log('updating subs',val);});
    
      if(this.subsData.isGroup) this.wsMessenger.generateSubUserAddedMessage( val['uid'], this.newUser.field_nombre.und[0].value, this.subsData.subscription.field_doctores);
      else await this.subusersManager.cargarSubusuarios();
      this.loader.dismissLoader();
      this.added_user = true;
      if(this.tutorial.checkTutorialState())
      {
        this.tutorial.usuarioCreated = true;
        this.newuser=false;
      }else{
        this.close();
      }
    },
    response => {
        this.processDrupalUserErrors(response.error.form_errors);
        this.loader.dismissLoader();
      }
  );
}
}
/*
*

*/

processDrupalUserErrors(e){
  for (var key in e) {
    console.log('responsetrail', key);
    switch (key){
      case 'name': 
      if(e[key].includes('ya se encuentra en uso')){
        this.alert.presentAlert('','El nombre de usuario que intentas utilizar ya existe, intenta con otro o recupera tu contraseña.');
      }
      break;
      case 'mail':

        if(e[key].includes('ya está registrada')){
          this.alert.presentAlert('','El correo que intentas utilizar ya existe, intenta con otro o recupera tu contraseña.');
        }else 
          if(e[key].includes('ya se encuentra en uso')){
            this.alert.presentAlert('','El correo que intentas utilizar ya existe, intenta con otro o recupera tu contraseña.');
          }else 
          if(e[key].includes('no es válida')){
            this.alert.presentAlert('','El formato de tu correo electrónico no es correcto.');
          }else{
            this.alert.presentAlert('','Se ha detectado un error inesperado en el campo '+  AlertProvider.cleanDrupalFieldString(key));
          }
       break;
       default: 
       if(!(key === 'field_useremail][und][0')){
        this.alert.presentAlert('','Se ha detectado un error inesperado en el campo '+  AlertProvider.cleanDrupalFieldString(key));
      }
    }

  }
}

restart(){
  this.resetNewUser();
  this.checkpass = "";
  this.newUserCode = "";
  this.tutorial.usuarioCreated = false;
}

createUserValidation():boolean{
  let ret = true;
  if( !this.userData.checkUserPlanHolder() ){
    this.alert.presentAlert('','Solo el administrador de plan puede crear subusuarios');
    ret = false;
  }
  if( this.userData.checkSusSubaccountsFull() ){
    this.alert.presentAlert('','Se llegó al límite de subusuarios');
    ret = false;
  }
  if(!(this.newUser.pass.localeCompare(this.checkpass) === 0)){
    this.alert.presentAlert("", "las contraseñas no coinciden");
    ret = false;
  }
  if(!(this.newUser.mail.localeCompare(this.newUser.field_useremail.und[0].email) === 0)){
    this.alert.presentAlert("", "Los correos no coinciden");
    ret = false;
  }
  if(this.newUser.field_tipo_de_usuario.und[0] === 0 ){
    this.alert.presentAlert("", "Selecciona un tipo de usuario");
    ret = false;
  }
  return ret;
}


createrNotEmptyValidation():boolean{
  let ret = true;
  if(!this.newUser.name){
    ret = false;
  }
  if(!this.newUser.field_alias.und[0].value){
    ret = false;
  }
  if(!ret){
    this.alert.presentAlert("", "Los campos marcados en rojo son obligatorios");
    this.showerrors = true;
  }
  return ret;
}


async getUserByCode(){
  if(this.getUserCodeValidation()){
  this.loader.presentLoader('Buscando usuario ...');
  let res = await this.userMan.requestUsers(new Array(),this.newUserCode).toPromise();
  if(res && res.length > 0){
   
    //revisar si este usuario esta en una suscripcion de grupo
    let subsdata = await this.subsManager.requestGroupSubscriptionsFor(res[0].uid).toPromise();
    if(subsdata){
      subsdata = subsdata.filter((subs)=>{
        return (Number(subs.field_plan_sus) === Number(SubscriptionDataProvider.PLAN_GROUP) )
      });
   
      if(subsdata && subsdata.length > 0){
        this.alert.presentAlert("", "No se encontró ningún usuario usando este código");
        this.loader.dismissLoader();
        return false;
      }
    }
    await this.addUserFromCode(res[0]);
    await this.subusersManager.cargarSubusuarios();
    // aqui el usuario ya ha sido agregado a la suscripcion y requiere enviarse un mensaje que relleno los datos del subusuario.
    this.wsMessenger.generateUserByCode( this.subsData.subscription.field_doctores.concat( [res[0].uid] ) ) ;
    this.loader.dismissLoader();
    if(this.tutorial.checkTutorialState())
    {
      this.newUser = res[0];
      this.codeuserNP=true;
      this.codeuser=false;
      this.tutorial.usuarioCreated = true;
    }else{
      this.alert.presentAlert('',`Se le ha asignado el usuario ${res[0]['name']}`);
      this.added_user = true;    
      this.close();
    }
  }else{
    this.alert.presentAlert("", "No se encontró ningún usuario usando este código");
    this.loader.dismissLoader();
  }
  }
}

gobackuser(){
  
  if(this.isnew){
    this.newuser=false; this.codeuser=false; this.initialpage=true;
    if(this.tutorial.checkTutorialState()){
      
      this.tutorial.tutorial_user_created_step = 0;
    }
  }else{
  
    this.dismiss();
  }
}

getUserCodeValidation():boolean{
  let ret = true;
  if((!this.newUserCode) || (this.newUserCode === "all") ){
    ret = false;
  }
  return ret;
}

async addUserFromCode( user_data ){
  let aux_user = SubusersManagerProvider.getEmptyUserd();
        aux_user.uid = user_data.uid;
        aux_user.name = user_data.name;
        aux_user.field_codigo = user_data.field_codigo;
        aux_user.field_alias.und[0].value = user_data.field_alias;
        aux_user.field_nombre.und[0].value = user_data.field_nombre;
        aux_user.field_apellidos.und[0].value = user_data.field_apellidos;
        aux_user.field_useremail.und[0].email = user_data.field_useremail.email;
        aux_user.mail = user_data.mail;
        aux_user.field_owner.und[0] = user_data.field_owner.uid;
        aux_user.status = "1";
        aux_user.field_doctores.und = new Array();
        aux_user.field_tipo_de_usuario.und = new Array();
        for(let element of user_data.field_doctores){ aux_user.field_doctores.und.push(element.uid); }
        delete aux_user.field_tipo_de_usuario;
        delete aux_user.field_sub_id;
        //elete aux_user.field_owner;
        //for(let element of user_data.field_tipo_de_usuario){ aux_user.field_tipo_de_usuario.und.push(element.uid); }for(let element of user_data.field_tipo_de_usuario){ aux_user.field_tipo_de_usuario.und.push(element.uid); }
        aux_user.field_doctores.und.push(Number(this.userData.userData.uid));
        console.log('user2save',aux_user);
        console.log('user2save fdocs',aux_user.field_doctores.und);
        //let res = await this.userMan.updateUserd(aux_user).toPromise(); 
        this.userMan.updateUserd( aux_user).subscribe(
          (val)=>{
            console.log("usuarioUpdated");
            if(!this.subsData.subscription.field_subusuarios) this.subsData.subscription.field_subusuarios = new Array();
            this.subsData.subscription.field_subusuarios.push(val['uid']);
            let obs = this.subsManager.updateUserSuscription().subscribe( (val)=>{console.log('updating subs',val);});
          },
          response => {
            console.log("POST call in error", response);
           
          }
        );
          
}

/*
updating user with this {"uid":"155","name":"cinthyaR","pass":"","mail":"adsd@www.com","status":"1","roles":[0],"field_tipo_de_usuario":{"und":["2"]},"field_useremail":{"und":[{"email":"adsd@www.com"}]},"field_nombre":{"und":[{"value":"Subusuario"}]},"field_apellidos":{"und":[{"value":"Subusuario"}]},"field_especialidad":{"und":[{"value":""}]},"field_alias":{"und":[{"value":null}]},"field_calle":{"und":[{"value":""}]},"field_no_ext":{"und":[{"value":""}]},"field_no_int":{"und":[{"value":""}]},"field_codigo_postal":{"und":[{"value":""}]},"field_ciudad":{"und":[{"value":""}]},"field_colonia":{"und":[{"value":""}]},"field_pais":{"und":[{"value":""}]},"field_municipio":{"und":[{"value":""}]},"field_estado_ubicacion":{"und":[{"value":""}]},"field_plan_date":{"und":[{"value":{"date":""}}]},"field_forma_pago":{"und":[{"value":""}]},"tutorial_state":{"und":[{"value":0}]},"field_codigo":"kQUiKJ1sXviGYzRi8oNxHp94o","field_doctores":{"und":["150","76"]},"field_planholder":{"und":[{"value":true}]},"field_stripe_customer_id":{"und":[{"value":""}]},"field_src_json_info":{"und":[{"value":""}]}}*/

updateUserd(){
  if(this.updateUserValidation()){
  this.loader.presentLoader('Guardando usuario ...');
  this.newUser.mail = this.newUser.field_useremail.und[0].email;
  this.newUser.status = ""+1;
  delete this.newUser.field_sub_id;
  //this.newUser.field_doctores = {'und':[76]};
  console.log('doctores',this.newUser.field_doctores);
  
  console.log('guardando usuario', this.newUser);
  this.userMan.updateUserd( this.newUser ).subscribe(
    async (val)=>{
      await this.subusersManager.cargarSubusuarios();
      this.loader.dismissLoader();
      this.close();
    },
    response => {
    
      this.processDrupalUserErrors(response.error.form_errors);
      this.loader.dismissLoader();
    }
  );
}
}

updateUserValidation():boolean{
  let ret = true;
  if(this.newUser.pass || this.checkpass){
    if(!(this.newUser.pass === this.checkpass)){
      this.alert.presentAlert("", "las contraseñas no coinciden");
      ret = false;
    }
    
  }
 
  return ret;
}



close( iscreated:boolean = false){
  this.viewCtrl.dismiss({"changed":this.added_user});
}






randomCode(){
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

}

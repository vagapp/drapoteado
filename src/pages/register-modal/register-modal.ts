import { Component, ɵConsole } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { UserDataProvider, userd  } from '../../providers/user-data/user-data';
//import { Debugger } from '../../providers/user-data/debugger';
import { sources } from '../../providers/user-data/sources';
import { planes } from '../../providers/user-data/planes';
import { Clipboard } from '@ionic-native/clipboard';
import { CordovaAvailableProvider } from '../../providers/cordova-available/cordova-available';
import { DrupalUserManagerProvider } from '../../providers/drupal-user-manager/drupal-user-manager';
import { PermissionsProvider } from '../../providers/permissions/permissions';
import { SubscriptionDataProvider } from '../../providers/subscription-data/subscription-data';
import { AlertProvider } from '../../providers/alert/alert';
import { LoaderProvider } from '../../providers/loader/loader';
import { SubscriptionManagerProvider } from '../../providers/subscription-manager/subscription-manager';
import { PlanesDataProvider } from '../../providers/planes-data/planes-data';
import { BaseUrlProvider } from '../../providers/base-url/base-url';
import { WsMessengerProvider } from '../../providers/ws-messenger/ws-messenger';


declare var Stripe;

/**
 * Generated class for the RegisterModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-modal',
  templateUrl: 'register-modal.html',
})
export class RegisterModalPage {
  showerrors:boolean = false;
  emailconfirm:string = null;
  passconfirm:string = null;
  onGroup:boolean = null;
  grupoOtro:string = null;
  hospitalOotro:string = null; 
  onHospital:boolean = null;
  mailsrefer:string = null;
  refuser:number = null;
  refuserName:string = null;
  check_terminos:boolean = false;

  actualUser;

  searchCode:string = null;
  currentpasswordNeeded: boolean = false; //especifica si es necesario incluir el pass actual, esto se requiere al cambiar pass o email.

  get enabledButton():boolean{
    //return this.selected_source !== null && this.selected_plan !== null;
    return this.selected_plan !== null;
  }
  
  get onCordova(){
    return this.ica.isCordovaAvailable;
  }

  stripe = Stripe('pk_test_4CJTbKZki9tC21cGTx4rLPLO');
  card: any;
  sources:sources[] = new Array();
  selected_source:sources = null;
  selected_plan:planes = null;

  invitationCode:string = null;
  invitationshow:boolean = false;
  isnew = true;
  newSus:boolean = false;

  currentPass:string = null;
  currentMail:string = null;
  
  constructor(
    public navCtrl: NavController, 
    public viewCtrl:ViewController, 
    public navParams: NavParams, 
    public userData: UserDataProvider,
    public loadingCtrl: LoadingController,
    public clipboard: Clipboard,
    public ica: CordovaAvailableProvider,
    public userMan: DrupalUserManagerProvider,
    public permissions: PermissionsProvider,
    public subsData: SubscriptionDataProvider,
    public subsManager: SubscriptionManagerProvider,
    public alert: AlertProvider,
    public loader: LoaderProvider,
    public planesData: PlanesDataProvider,
    public bu: BaseUrlProvider,
    public WS: WsMessengerProvider
  ) {
    this.newSus = this.navParams.get('newSus');
    console.log('trailnewSus', this.newSus);
    if(!this.newSus){
    this.actualUser = this.userData.userData;
    console.log('trailnewSus !newsus actualuser',this.actualUser);
    this.isnew = !this.userData.checkIsLoggedin();
    console.log('isnew',this.isnew);
    console.log('openingregister modal isnew? ',this.isnew);
    console.log('pass',this.userData.userData.pass);
    if(!this.isnew){
      this.currentpasswordNeeded = false;
      this.currentMail = this.userData.userData.mail;
    }
    }else{
     
      this.actualUser = this.userData.getEmptyUserd();
      console.log('trailnewSus getempty',this.actualUser);
    }
  }

  ionViewDidLoad() {
  
  }

  ionViewDidEnter(){
   // this.setupStripe();
  //this.loadSources();
  }


  async actionUpdate(){
    if(!this.basicValidation()){return 0;}
   console.log('basic validation ret ??? ');
    if(this.passwordNeededValidation() ){
    }else{
      await this.update();
  }
  
  }

  async update(){
    this.loader.presentLoader('Actualizando...');
    console.log('actualuser',this.actualUser);
    let aux_userData = JSON.parse(JSON.stringify(this.actualUser));
    delete aux_userData.field_sub_id;
    delete aux_userData.field_tipo_de_usuario;
    
    if(this.refuser){
      aux_userData.field_reference_user.und[0] = this.refuser;
    }else{
      delete aux_userData.field_reference_user;
    }

    if(this.currentpasswordNeeded){
      /*aux_userData.pass = new Array();
      aux_userData.pass.push({'existing': this.currentPass});*/
      aux_userData['current_pass'] = this.currentPass;
      if(this.checkForPasswordChange()){
        console.log('checkforpassword change is on');
        //aux_userData.pass.push({"value": this.userData.userData.pass});
        aux_userData.pass = this.actualUser.pass;
      }
    }

    console.log('userdata to update',aux_userData);
    //let res = await this.userMan.updateUserd(aux_userData).toPromise();
    this.userMan.updateUserd(aux_userData).subscribe(
      (val)=>{
        console.log('actionUpdate change done, result',val);
        this.loader.dismissLoader();
      },
      (error)=>{ console.log('actionUpdate error is',error); 
      this.loader.dismissLoader();
      },
    );
  }

  passwordNeededValidation(){
    let ret = true;
    this.checkforEmailChange();
    this.checkForPasswordChange();
    if(this.currentpasswordNeeded){
     
      this.alert.presentPrompt(
        'contraseña','Se requiere contraseña actual',
        [
          {
            name: 'password',
            placeholder: 'contraseña',
            type: 'password'
          }
        ], async (data)=>{ console.log('passwod to set',data.passwod); this.currentPass = data.password; await this.update()},
        ()=>{ ret = false; console.log('this was canceled'); }
      );
      return true;
    }else{
      return false;
    }
  }



  checkemailSame(){
   
    let ret = false;
    if(this.actualUser.mail !== null && this.emailconfirm !== null && Number(this.emailconfirm.localeCompare(this.actualUser.mail)) === Number(0) ){
      ret = true;
    }else{
      this.alert.presentAlert('','El correo electrónico no coincide con la confirmación.');
    }
    return ret;
  }
  

  checkforEmailChange(){
    if(this.actualUser.mail !== this.currentMail){
      this.currentpasswordNeeded = true;
    }
  }

  checkForPasswordChange(){
    let ret = false;
   
    if(this.actualUser.pass !== null || this.passconfirm !== null){
      this.currentpasswordNeeded = true;
      ret = true;
    }
    return ret;
  }


  async actionBuscarRef(){
   
    this.loader.presentLoader('Buscando...');
    this.userMan.searchByMail(this.mailsrefer).subscribe(
      (val:Array<any>)=>{
      
        if(Number(val.length) === 0){  this.alert.presentAlert('','No se encontró nada con este correo electrónico.'); }
        else{
          if(Number(val[0]['field_tipo_de_usuario']['value']) !== 1){
            this.alert.presentAlert('','No se encontró nada con este correo electrónico.');
          }else{
          this.refuser = val[0].uid;
          this.refuserName = val[0].field_nombre;
        }
        }
        this.loader.dismissLoader();
      },(error)=>{
       
        this.alert.presentAlert('','No se encontró nada con este correo electrónico.');
        this.loader.dismissLoader();
      }
    );
  }

  removeReference(){
    this.refuser = null;
    this.refuserName = null;
  }

  actionRegister(){
    if(!this.basicValidation()){return 0;}
    this.loader.presentLoader('Registrando ...');
    console.log('actualuser',this.actualUser);
  let cloneData = JSON.parse(JSON.stringify(this.actualUser));
  delete cloneData.field_sub_id;
  cloneData.field_useremail.und[0].email = this.actualUser.mail;
  cloneData.field_tipo_de_usuario.und[0]="1";
  delete cloneData.field_plan_date;
  delete cloneData.field_src_json_info;
  delete cloneData.field_stripe_customer_id;
  delete cloneData.field_sub_id;
  delete cloneData.field_doctores;
  delete cloneData.field_forma_pago;
  delete cloneData.field_plan_date;
    console.log('registering',cloneData);
  if(this.refuser){
    cloneData.field_reference_user.und[0] = this.refuser;
    /*aux_userData.field_reference_user = new Array();
    aux_userData.field_reference_user['und'] = new Array;
    aux_userData.field_reference_user['und'][0] = this.refuser;*/
  }else{
    delete cloneData.field_reference_user;
  }
  
  
  //Debugger.log(['register',this.userData.userData]);
    let register_observer = this.userData.register(cloneData);
    register_observer.subscribe(
      (val) => {
        window.location.reload();
      },
      response => {
        console.log('responsetrail',response);
          for (var key in response.error.form_errors) {
            console.log('responsetrail', key);
            switch (key){
              case 'name': 
              if(response.error.form_errors[key].includes('ya se encuentra en uso')){
                this.alert.presentAlert('','El nombre de usuario que intentas utilizar ya existe, intenta con otro o recupera tu contraseña.');
              }
              break;
              case 'mail':

                if(response.error.form_errors[key].includes('ya está registrada')){
                  this.alert.presentAlert('','El correo que intentas utilizar ya existe, intenta con otro o recupera tu contraseña.');
                }else 
                  if(response.error.form_errors[key].includes('ya se encuentra en uso')){
                    this.alert.presentAlert('','El correo que intentas utilizar ya existe, intenta con otro o recupera tu contraseña.');
                  }else 
                  if(response.error.form_errors[key].includes('no es válida')){
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
            /*
            if(key === 'name'){
            
            }
             else if(key === 'mail'){
           
            }else{
            
          }*/
          }
          this.loader.dismissLoader();
        },
      () => {
       
      });
  }


  actionCreate(){
    if(!this.basicValidation()){return 0;}
    this.loader.presentLoader('Registrando ...');
  let cloneData = JSON.parse(JSON.stringify(this.actualUser));
  delete cloneData.field_sub_id;
  cloneData.field_useremail.und[0].email = this.actualUser.mail;
  cloneData.field_tipo_de_usuario.und[0]="1";
  delete cloneData.field_plan_date;
  delete cloneData.field_src_json_info;
  delete cloneData.field_stripe_customer_id;
  delete cloneData.field_sub_id;
  delete cloneData.field_doctores;
  delete cloneData.field_forma_pago;
  delete cloneData.field_plan_date;
  delete cloneData.field_reference_user;
  cloneData.status = "1";
  delete cloneData.field_owner;
  this.userMan.generateNewUserd( cloneData ).subscribe(
    async (val)=>{
      if(!this.subsData.subscription.field_doctores) this.subsData.subscription.field_doctores = new Array();
      this.subsData.subscription.field_doctores.push(val['uid']);
      let obs = this.subsManager.updateUserSuscription().subscribe( (val)=>{console.log('updating subs',val);});
      let recievers = this.subsData.subscription.field_doctores.concat(this.subsData.subscription.field_subusuarios);
      this.WS.generateDocoutgroup(recievers,val['uid']);
      this.loader.dismissLoader();
      this.dismiss();
      },response => {
        this.loader.dismissLoader(); 
      });

  }

  async searchsub(){
    if(this.searchsubValidation()){
      this.loader.presentLoader('buscando...');
      let sus = await this.subsManager.searchSus(this.searchCode);
      if(sus){
        await this.subsManager.susAssign(sus);
      }else{
        this.alert.presentAlert('','No se encontro ningun grupo médico');
      }
      this.loader.dismissLoader();
    }
  }

  searchsubValidation():boolean{
    let ret = true;
    if(this.searchCode === null ) ret = false;
    return ret;
  }

  basicValidation():boolean{
    let ret = true;
    if(this.isnew){
      console.log('checking obligatorios----------------------------');
      if(!this.checkIfInputfilledNPromtp(this.actualUser.mail,ret)) ret = false;
      if(!this.checkIfInputfilledNPromtp(this.emailconfirm,ret)) ret = false;
      if(!this.checkIfInputfilledNPromtp(this.actualUser.name,ret)) ret = false;
      if(!this.checkIfInputfilledNPromtp(this.actualUser.pass,ret)) ret = false;
      if(!this.checkIfInputfilledNPromtp(this.passconfirm,ret)) ret = false;
      if(!this.checkIfInputfilledNPromtp(this.actualUser.field_nombre.und[0].value,ret)) ret = false;
      if(!this.checkIfInputfilledNPromtp(this.actualUser.field_apellidos.und[0].value,ret)) ret = false;
      if(!this.checkIfInputfilledNPromtp(this.actualUser.field_especialidad.und[0].value,ret)) ret = false;
      if(!this.checkIfInputfilledNPromtp(this.actualUser.field_alias.und[0].value,ret)) ret = false;
      //if(!this.checkIfInputfilledNPromtp(this.userData.userData.field_no_ext.und[0].value,ret)) ret = false;
      if(!this.checkIfInputfilledNPromtp(this.actualUser.field_codigo_postal.und[0].value,ret)) ret = false;
      //if(!this.checkIfInputfilledNPromtp(this.userData.userData.field_ciudad.und[0].value,ret)) ret = false;
      //if(!this.checkIfInputfilledNPromtp(this.userData.userData.field_pais.und[0].value,ret)) ret = false;
      if(!this.newSus){
    
      if(!this.checkIfInputfilledNPromtp(this.actualUser.field_rfc.und[0].value,ret)) ret = false;
      if(!this.checkIfInputfilledNPromtp(this.actualUser.field_razon.und[0].value,ret)) ret = false;

      
    }
      console.log('end checking obligatorios----------------------------');
    }
 
    console.log('ret a1 ', ret);
    if(this.actualUser.pass && !this.passconfirm || !this.actualUser.pass && this.passconfirm){
      ret = false;
      this.alert.presentAlert('','Confirmar contraseña.');
    }
    console.log('ret a2 ', ret);
    if(this.actualUser.pass && this.passconfirm && this.passconfirm.localeCompare(this.actualUser.pass) !== 0){
      ret = false;
      this.alert.presentAlert('','Las contraseñas no coinciden.');
    }
    console.log('ret a3 ', ret);
    if(this.isnew){ // si es nuevo valida todo lo que se valida en registro.
      if(!this.checkemailSame()) ret = false;
    }
    console.log('ret a4 ', ret);
    return ret;
  }

  checkIfInputfilledNPromtp( input , actualret){
    let ret = true;
    console.log('enter');
    if(!actualret){ return false;} ;
    console.log('checkIfInputfilledNPromtp',input,input === null , input ? false : true );
    if( input ? false : true ){
      console.log('this input is not filled mf',input);
      ret = false;
      this.alert.presentAlert('','Revisar los campos marcados en rojo.');
      this.showerrors = true;
    }
    return ret;
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  
  selectCard( input_src:sources ){
    //Debugger.log(['selecting source',input_src]);
    this.selected_source = input_src;
    this.selected_source.set_selected()
  }

  selectPlan( input_plan:planes ){
    this.selected_plan = input_plan;
    this.userData.setcssplanselected(input_plan);
  }
  
  async suscribirse(){
    if(!this.enabledButton) return false;
    this.loader.presentLoader('Suscribiendo ...');
    console.log(this.selected_source);
    console.log(this.selected_plan);
    //await this.subsManager.subscribe( this.selected_plan,this.selected_source);
    /*console.log('subscribing');
    let ns_res = await this.subsManager.getSubscribeObs( this.selected_plan,this.selected_source).toPromise();
    if(ns_res && this.subsManager.checkForSubscription()) 
    await this.subsManager.deletesSus(this.subsData.subscription).toPromise();*/
    console.log('before this');
    window.location.reload();
    /*if(this.subsData.subscription.nid === null){
      let aux_sus = subscriptions.getEmptySuscription();
      aux_sus.plan = this.selected_plan;
      aux_sus.field_plan_sus = this.selected_plan.nid;
      aux_sus.field_plan_holder = this.userData.userData.uid;
      aux_sus.field_doctores = new Array();
      aux_sus.field_doctores.push(this.userData.userData.uid);
      aux_sus.field_stripe_src_sus_id = this.selected_source.src_id;
      aux_sus.field_stripe_cus_sub_id = this.userData.userData.field_stripe_customer_id.und[0].value;
      let res = this.subsManager.generateNewSus(aux_sus).toPromise();
      if(res) window.location.reload(); else  this.loader.dismissLoader();
    }*/
  }


  invitationSub(){
    console.log('not implemented');
    return false;
    /*if(this.invitationCode.localeCompare('all') === 0){
      return false;
    }*/
    //Debugger.log(['joining with',this.invitationCode]);
    
    /*this.userData.cargarSubscription(this.invitationCode).subscribe(
      (val)=>{
        if(this.userData.error_sub_is_full){
          this.userData.error_sub_is_full = false;
          loading.dismiss();
          let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'No es posible unirse a esta subscripción, se ha alcanzado el limite de doctores',
          buttons: ['Ok']
          });
          alert.present();
          
          }else{
        if(this.userData.subscription.nid !== null){
          this.userData.subscription.field_doctores.push(this.userData.userData.uid);
          //Debugger.log(['loeaded subscription',this.userData.subscription]);
          this.userData.updateSus(this.userData.subscription).subscribe((val=>{
            //Debugger.log(['updated subscription received',val]);
            loading.dismiss();
            this.navCtrl.setRoot("HomePage");
          }));
        
      }else{
        loading.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Nada',
          subTitle: 'Código no encontrado',
          buttons: ['Ok']
        });
        alert.present();
      }
    }
    }
    );*/
  }

  showInvitation(){
    this.invitationshow = !this.invitationshow;
  }

  popRemoveDoctorSus( uid ){
    
    return false;
   
  }

  removeDoctorSus( uid ){
    
    return false;
   
  }
  /*

  loadSources(){
    if(!this.isnew){
    //Debugger.log(['loading srcs']);
    let old_selected = this.selected_source;
    this.sources = new Array();
    for(let i = 0; i < this.userData.userData.field_src_json_info.und.length; i++){
      let new_source = new sources();
      new_source.setData(this.userData.userData.field_src_json_info.und[i]);
      this.sources.push(new_source);
      if(old_selected !== null && new_source.src_id === old_selected.src_id){ this.selected_source = new_source; this.selected_source.set_selected()}
      else  if(old_selected === null ){ this.selected_source = new_source; this.selected_source.set_selected()}
    }
  }
  }*/






copyCode(){
  /*this.clipboard.copy(this.userData.subscription.field_invitation_code);*/
}




}
/*function stripeTokenHandler(token) {
  // Insert the token ID into the form so it gets submitted to the server
  var form = document.getElementById('payment-form');
  var hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);

  // Submit the form
  form.submit();
}*/
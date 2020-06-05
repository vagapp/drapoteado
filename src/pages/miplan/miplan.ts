import { Component, ɵConsole } from '@angular/core';
import { IonicPage, NavController, NavParams, Checkbox, Platform } from 'ionic-angular';
import { UserDataProvider, userd } from '../../providers/user-data/user-data';
import { PlanesDataProvider } from '../../providers/planes-data/planes-data';
import { PermissionsProvider } from '../../providers/permissions/permissions';
import { SubscriptionDataProvider } from '../../providers/subscription-data/subscription-data';
import { AlertProvider } from '../../providers/alert/alert';
import { planes } from '../../providers/user-data/planes';
import { LoaderProvider } from '../../providers/loader/loader';
import { SubscriptionManagerProvider } from '../../providers/subscription-manager/subscription-manager';
import { sources } from '../../providers/user-data/sources';
import { ConektaComponent } from '../../components/conekta/conekta'
import { BaseUrlProvider } from '../../providers/base-url/base-url';


import { HttpClient } from '@angular/common/http';
import { subscriptions } from '../../providers/user-data/subscriptions';
import { SubusersDataProvider } from '../../providers/subusers-data/subusers-data';
import { SubusersManagerProvider } from '../../providers/subusers-manager/subusers-manager';
import { WsMessengerProvider } from '../../providers/ws-messenger/ws-messenger';
import { DateProvider } from '../../providers/date/date';
import { UpdaterProvider } from '../../providers/updater/updater';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { ThrowStmt } from '@angular/compiler';
import { TutorialProvider } from '../../providers/tutorial/tutorial';
import { DrupalUserManagerProvider } from '../../providers/drupal-user-manager/drupal-user-manager';
import { CordovaAvailableProvider } from '../../providers/cordova-available/cordova-available';
import { InAppPurchase } from '@ionic-native/in-app-purchase';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

declare var Stripe;


/**
 * Generated class for the MiplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-miplan',
  templateUrl: 'miplan.html',
})
export class MiplanPage {
  /** Things from stripe from register-modal **/
  //stripe = Stripe('pk_test_4CJTbKZki9tC21cGTx4rLPLO');
  card: any;

  sources:sources[] = new Array();
  selected_source:sources = null;

  onplanchange:boolean = false;
  selectedPlan= null; //cargar selected plan
  selectedPlanObject:planes = null; //objeto del plan seleccionado para suscripcion.

  selectedAditionals = 0;
  selectedAditionalsDocs = 0;
  selectedMethod = null;

  cantcancel = false;

  btgLayout:boolean = false;
  wrongmsng='';

  transactionID:string = null;
  
  //isgroup:boolean = false;

  get isgroup(){
    return this.onplanchange ? ( Number(this.selectedPlan) === Number(SubscriptionDataProvider.PLAN_GROUP) ) ? true : false 
                              : this.subsData.isGroup;
  }
  get EXTRA_DOC()
{
  return SubscriptionDataProvider.EXTRA_DOC
}

get usersOnNew(){
  let selected_plan = this.planesData.getPlanById(this.selectedPlan);
  console.log('TRAILSSU usersOnNew',selected_plan.field_no_subcuentas,this.selectedAditionals );
  return Number(selected_plan.field_no_subcuentas) + Number(this.selectedAditionals);
}


get selected4g(){
  return this.subuserData.mySubUsers.filter((element)=>{ return element.selectedForGroup }).length;
}

get subsLeftOnNew(){
  console.log('TRAILSSU data',this.usersOnNew,this.selected4g);
  return this.usersOnNew - this.selected4g
}



  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userData: UserDataProvider,
    public permissions: PermissionsProvider,
    public planesData: PlanesDataProvider,
    public subsData: SubscriptionDataProvider,
    public alert:AlertProvider,
    public loader:LoaderProvider,
    public subsManager: SubscriptionManagerProvider,
    public conekta: ConektaComponent,
    public bu: BaseUrlProvider,
    public http: HttpClient,
    public subuserData: SubusersDataProvider,
    public subuserMan: SubusersManagerProvider,
    public wsMessenger: WsMessengerProvider,
    public updater: UpdaterProvider,
    public subuserManager: SubusersManagerProvider,
    public userMan: DrupalUserManagerProvider,
    public ica: CordovaAvailableProvider,
    public ptl: Platform,
    public iap: InAppPurchase
  ) {
    console.log('miplanactualpage');
    this.planesData.load_inapppurchaseProducts();
      this.subuserManager.cargarSubusuarios();
      //conekta.init('https://cdn.conekta.io/js/latest/conekta.js','key_FSKYyuv2qSAEryHAMM7K1dA').then((c) => {
      let public_test ='key_GtbbRJpEKq8zTrtq3EPCTqQ';
      let public_prod ='key_Wwir4csBhZwvzCny3TkeNUA';
      let public_bardo_test = 'key_NG1gDM4rychaJSjqha7KuHg';
      conekta.init('https://cdn.conekta.io/js/latest/conekta.js', public_test).then((c) => {    
      //Este success se ejecuta con el javascript se cargó correctamente
      console.log('conekta successs',c);

    }).catch((err) => {
      //Este error se ejecuta cuando el javascript no cargó, Ej. Error de conexión
      console.log(err);
    });
  }
  


  
  /**Especifica si esta tienda es la equivocada para la suscripcion que maneja este usuario */
  get wrong_store_mode():boolean{ 
    let ret = false; 
    console.log(this.ica.ActivePlatform, this.subsData.platform);
    if(this.subsData.platform.localeCompare(CordovaAvailableProvider.PLATFORM_NONE)!== 0 && !(this.ica.ActivePlatform.localeCompare(this.subsData.platform) === 0)){
      ret =true;       
    }
    return ret;
  }
  get wrong_store_msg():string{
    let ret = 'default';
    //console.log('wrongstoremsg plat',this.subsData.platform);
    switch(this.subsData.platform){
      case CordovaAvailableProvider.PLATFORM_IOS: ret = 'Adquiriste tu suscripcion utilizando la aplicacion de iOs, porfavor utiliza esta version de la aplicacion para editar tu plan'; break;
      default: ret = 'Tu suscripcion ha sido adquirida utilizando otra plataforma, por favor edita tu plan utilizando la version de TUAL de dicha plataforma';
    }
    //console.log('wrong_store_msg',ret);
    return ret;
  }
  get isIos(){ return this.ica.isIos; }
  get docsleft(){ return this.subsData.checkForSub() ? this.subsManager.getDocAccountsLeft(this.subsData.subscription) : 0 ; }
  get cantidad(){ return this.subsData.checkForSub() ? Number(this.subsData.subscription.field_cantidad) : 0; }
  get nextCobro(){ 
  let ret = '';
  if(this.subsData.checkForSub() && this.subsData.subscription.field_next_cobro){
    let auxdate = new Date(Number(this.subsData.subscription.field_next_cobro)*1000);
    let aux_dispdates = DateProvider.getDisplayableDates(auxdate);
    ret = aux_dispdates.date;
  }
  return ret;
   }
  get subAdicionales(){  return this.subsData.checkForSub() ? Number(this.subsData.subscription.field_adicionales) : 0;  }
  get docAdicionales(){  return this.subsData.checkForSub() ? Number(this.subsData.subscription.field_docsadicionales) : 0;  }
  get subPlan(){ return this.subsData.checkForSub() ? Number(this.subsData.subscription.field_plan_sus) : 0;  }


  get accountsLeft(){
    return (12 + this.selectedAditionals) - this.subuserData.selectedForGroupNum;
  }

  get PLAN_GROUP():number{ return this.subsData.PLAN_GROUP; }
  get PLAN_ANY():number{ return this.subsData.PLAN_ANY; }
  

  checkIs( nid, plan ){
    return Number(nid) === Number(plan);
  }

  get selectedTotal():number{
    let ret = 0;
    if(this.onplanchange){ 
      ret = this.getTotal_onChangePlan(); 
  } else{
      ret = this.getTotal_noChangePlan();
  }
  return ret;
  }

  getTotal_onChangePlan(){
    let ret:number = 0;
    if(this.onplanchange){
      let plan_costo:number = 0;
      if(this.selectedPlan){
        let selected_plan = this.planesData.getPlanById(this.selectedPlan);
        if(selected_plan){
        plan_costo = Number(selected_plan.field_costo);
        //this.isgroup = ( Number(selected_plan.nid) === Number(SubscriptionDataProvider.PLAN_GROUP) ) ? true : false;
          
        }
      }
      ret = plan_costo;
      if(this.selectedAditionals > 0 ){
        ret += Number(this.selectedAditionals*SubscriptionDataProvider.EXTRA_SUB);
      }
      if(this.selectedAditionalsDocs > 0 && this.isgroup){
        ret += Number(this.selectedAditionalsDocs*SubscriptionDataProvider.EXTRA_DOC);
      }
    }
    return ret;
    }

    getTotal_noChangePlan(){
      let ret:number = 0;
      if(!this.onplanchange && this.subsData.subscription && this.subsData.subscription.field_cantidad){
        ret += Number((this.subsData.subscription.field_cantidad));
      }
      return ret;
    }
  
  
    onChangeUsers(element: Checkbox, subuser:userd){
      let setTo = !subuser.selectedForGroup;
     
      if(setTo && this.accountsLeft > 0){ 
       element.checked = subuser.selectedForGroup = true;
      }else{
        element.checked = subuser.selectedForGroup = false;
      }
    }

    checkIfisgroupPlan(plan:planes){
     return Number(plan.nid) === Number(SubscriptionDataProvider.PLAN_GROUP);;
    }


    /***/
    async baja(){
      this.alert.chooseAlert(
        '',
        '¿Estás seguro que deseas cancelar tu suscripción?, Si cancelas tu suscripción no podrás acceder a tus citas, servicios y reportes.',
        async ()=>{ /*console.log('AQUI HAY QUE CANCELAR LA SUSCRIPCION')*/
        if(this.subsManager.checkForSubscription()){
          
          let ret = await this.subsManager.deletesSus(this.subsData.subscription).toPromise();
         
          if(ret){
          
            this.bu.locationReload();
          }
        }
      },
        ()=>{  }
      );
    }

  /*ERROR Y SUCCESS CONEKTA*/
  async successToken(token:any){
    //Esta función se agrega al atributo (successToken) para recibir el resultado de generar el token
    let cu_src_data = {
      id: token.id,
      last4: token.cardNumber,
      client_secret: token.id,
      brand: token.brand
    };
    let info = {
      "action":"add",
      "data":{
        "token":token.id
      }
    };
    console.log('generated token is ',cu_src_data);
    this.http.post(this.bu.endpointUrl+'payment_methods',info).subscribe( (res:any) => {
      if(res!=null){
        this.selectedMethod = res.default_payment_source_id;
        //this.setdefaultPaymentSource(res.default_payment_source_id);
        this.parseSources(res);
      }else{
        this.selectedMethod = null;
      }
    });
  }


  errorToken(error:any){
    //Esta función se agrega al atributo (errorToken) para recibir lo errores al momento de generar un token
    console.log(error);
    let alerta = this.alert.alertCtrl.create({
      title: "Error",
      subTitle: error.message_to_purchaser,
      buttons: ["OK"]
    });
    alerta.present();
  }
  /*FIN ERROR Y SUCCESS CONEKTA*/

  
  ionViewDidEnter(){
    this.btgLayout = false;
    this.loadSources();
  }


  calculateCostoOnChange():number{
    let ret = 0;
    if(this.onplanchange){

    }
    return ret;
  }

  ionViewDidLoad() {
    this.btgLayout = false;
    if(!this.permissions.checkUserSuscription([this.userData.PLAN_ANY])){
      this.subuserMan.cargarSubusuarios();
      this.activateChangePlanMode();
      this.cantcancel = true;
    }else{
      this.onplanchange = false;
      this.selectedPlan = this.subPlan;
      this.selectedPlanObject = this.planesData.getPlanById(this.selectedPlan);
    }
  }

  activateChangePlanMode(){
    this.selectedAditionals =  this.subAdicionales;
    this.selectedAditionalsDocs =  this.docAdicionales;
    this.onplanchange = true;
    this.loadSources();
  }

  editar(){
   
    this.activateChangePlanMode();
    console.log('editar end selectedplan',this.selectedPlan);
  }

  async guardar(){
    //this.guardarDefault();
    switch(this.ica.ActivePlatform){
      case CordovaAvailableProvider.PLATFORM_IOS: this.guardarIOS(); break;
      default: this.guardarDefault();
    }
   
  } 

  async guardarDefault(){ 
    if(!this.guardar_basic_validation()) return false;
    if(!this.guardar_subusernumber_validation()) return false;
    //await this.checkBasicToGroup();
    if(this.isBasicToGroup() && this.checkShowUserList()){
      this.setUsersSelected();
      this.btgLayout = true;
      console.log('changing from b to g');
    }else{
    //console.log('basictogroupcomplete');
    await this.suscribirse();
    }
    //this.onplanchange = false;
  }

  async guardarIOS(){
    if(this.ica.isIos && this.planesData.iosLoad){
      if(this.selected_ios_product_id){
        /*
      this.iap.buy(this.selected_ios_product_id).then(data =>{ 
      console.log("buy data", data );
      this.suscribirse();
      this.transactionID =  data['transactionId'];
      }).catch((error)=>{
      console.log('trailstore error buy',error);
      });
      */
     this.transactionID =  'testTransactionID';//data['transactionId'];
     this.suscribirse();
      }else{
        console.log('No encontro un producto para esta combinacion');
        this.alert.presentAlert('','No es posible ofrecer esta combinacion utilizando esta plataforma, porfavor seleccione otra combinacion');
      }
    }
  }
  /**
   * Regresa el id de la tienda de apple del product que se ajusta al plan seleccionado, si no lo encuentra regresa undefined
   */
  get selected_ios_product_id(){
    let ret = undefined;
    if(this.ica.isIos && this.planesData.iosLoad){
      let product = this.planesData.triangulate_Iosproduct(this.selectedPlan,this.selectedAditionals,this.selectedAditionalsDocs);
      if(product)
      ret = product.iosid;
    }
    console.log('selected_ios_product_id ret is', ret);
    return ret;
  }
  
 

  async guardarbtg(){
    if(!this.guardar_basic_validation()) return false;
    if(!this.guardar_subusernumber_validation()) return false;
    await this.userTutorialSetup();
    await this.checkBasicToGroup();
    await this.suscribirse();
  }


  async userTutorialSetup(){
    this.userData.userData.tutorial_state.und[0].value = ""+TutorialProvider.TUTORIAL_GROUP_STATE_FROMBASIC;
    let cloneData = {
      uid:this.userData.userData.uid,
      field_tutorial_state: {und: [{value: ""+TutorialProvider.TUTORIAL_GROUP_STATE_FROMBASIC}]},
    }
    await this.userMan.updateUserd(cloneData).toPromise();
  }
  /**
   * Revisa si se esta cambiando de plan basico a plan grupo medico.
   */
  async checkBasicToGroup(){
    console.log('checkBasicToGroup',this.subsManager.checkForSubscription(), !this.subsData.isGroup,Number(this.selectedPlan) === Number(SubscriptionDataProvider.PLAN_GROUP));
    if( this.isBasicToGroup() ){
     console.log('basictogroupenter');
      await this.subsManager.group_enter_selectedSubusersClean(this.subuserData.selectedForGroup,this.subsData.subscription);
      await this.subsManager.group_enter_notselectedSubusers_remove(this.subuserData.selectedForGroup,this.subsData.subscription);
      let reload_users = this.subsManager.aux_docstoReload.concat(this.subuserData.selectedForGroup.map((e)=>{ return Number(e.uid)}));
      this.wsMessenger.generateSuboutofgroup(reload_users,1);
      //clean the selectedusers.
      }
  }

  isBasicToGroup(){
    let ret = false;
    if( this.subsManager.checkForSubscription() && !this.subsData.isGroup  && Number(this.selectedPlan) === Number(SubscriptionDataProvider.PLAN_GROUP)){
      ret = true;
    }
    return ret;
  }

  guardar_basic_validation():boolean{
    let ret = true;
    
    if(!this.selectedPlan){  ret = false; this.alert.presentAlert('','Es necesario seleccionar un plan'); }else{
      this.selectedPlanObject = this.planesData.getPlanById(this.selectedPlan);
    }
    if(!this.guardar_payment_validation()){ ret = false;}
    return ret;
  }
  guardar_payment_validation(){
    let ret = true;
    if(this.ica.ActivePlatform.localeCompare(CordovaAvailableProvider.PLATFORM_DEFAULT) === 0){
      if(!this.selectedMethod){ ret = false; this.alert.presentAlert('','Es necesario seleccionar un Método de Pago'); }
    }
    return ret;
  }

  guardar_subusernumber_validation():boolean{
    let ret = true;
   
    if((this.selectedAditionals + this.subsData.getplanAccounts()) < this.subsData.getUsedSubAccounts()){
    
     ret = false;
     //title, msg, inputs, inputcallback, cancelCallback
     this.alert.setStrings('Usuarios','Cancelar');
     this.alert.chooseAlert('','No puedes reducir tus usuarios adicionales por debajo del número de usuarios con los que cuentas actualmente.',
    ()=>{
      this.alert.resetStrings();
      this.navCtrl.setRoot('UsuariosPage');
    },()=>{
      this.alert.resetStrings();
    });
  
    }
    return ret;
  }

  guardar_docnumber_validation(){
    let ret = true;
   
    if((this.selectedAditionalsDocs + this.subsData.getplanDocAccounts()) < this.subsData.getUsedDocAccounts()){
     ret = false;
   
     this.alert.setStrings('Grupo','Cancelar');
     this.alert.chooseAlert('','No puedes reducir tus doctores adicionales por debajo del número de doctores con los que cuentas actualmente.',
    ()=>{
      this.alert.resetStrings();
      this.navCtrl.setRoot('GroupPage');
    },()=>{
      this.alert.resetStrings();
    });
  
    }
    return ret;
  }

  cancelar(){
    this.onplanchange = false;
    this.btgLayout = false;
  }

  operateExtra(operand:number){
    this.selectedAditionals += operand;
    if (this.selectedAditionals < 0) this.selectedAditionals = 0;
    if (this.selectedAditionals > this.planesData.EXTRA_SUBUSERS_UPPERLIMIT){ this.selectedAditionals = this.planesData.EXTRA_SUBUSERS_UPPERLIMIT }
  }

  
  operateExtraDoc(operand:number){
    this.selectedAditionalsDocs += operand;
    if (this.selectedAditionalsDocs < 0) this.selectedAditionalsDocs = 0;
    if (this.selectedAditionalsDocs > this.planesData.EXTRA_DOCS_UPPERLIOMIT){ this.selectedAditionalsDocs = this.planesData.EXTRA_DOCS_UPPERLIOMIT }
   
  }



  async suscribirse(){
    if(!this.enabledButton()) return false;
    this.loader.presentLoader('Suscribiendo ...');
    //Tengo para crear una suscripcion, pero no para editar una suscripcion. vamos a hacer un codigo para editar suscripcion.
    //must set custom price.
    
    if(this.subsManager.checkForSubscription()){ //si tiene una suscripcion

      this.subsData.subscription.field_cantidad = this.selectedTotal;
      this.subsData.subscription.field_plan_sus = this.selectedPlan
      this.subsData.subscription.field_adicionales = Number(this.selectedAditionals);
      if(this.isgroup)this.subsData.subscription.field_docsadicionales = Number(this.selectedAditionalsDocs);
      this.subsData.subscription.pay_state = 'wait';
      let ret = await this.subsManager.updateSus(this.subsData.subscription).toPromise();
      if(this.permissions.checkUserSuscription([UserDataProvider.PLAN_ANY])){
      this.bu.locationReload();
      this.onplanchange = false;
      this.loader.dismissLoader();
    }else{
      this.loader.dismissLoader();
      //await this.CheckSuscriptionpayment();
    }
    }else{
      
      let aux_sus = subscriptions.getEmptySuscription();
      if(this.ica.isIos){ aux_sus.apple_transaction_id = this.transactionID; console.log('setting transaction id',this.transactionID); }
      aux_sus.field_platform = this.ica.ActivePlatform;
      aux_sus.field_cantidad = this.selectedTotal;
      aux_sus.field_plan_sus = this.selectedPlan;
      aux_sus.field_adicionales = Number(this.selectedAditionals);
      if(this.isgroup)aux_sus.field_docsadicionales = Number(this.selectedAditionalsDocs);
      let res = await this.subsManager.subscribe_conekta( this.selectedPlanObject, aux_sus);
      this.loader.dismissLoader();
      //await this.CheckSuscriptionpayment();
    }
  }

  async CheckSuscriptionpayment(){
    let done = false;
    this.loader.presentLoader('Comprobando pago ...');
    while(!done){
      
      await this.updater.updateSuscription();
      if(this.subsData.subscription.pay_state !== null){
        switch(this.subsData.subscription.pay_state){
         case 'done':
         if(Number(this.subsData.subscription.field_active) === 1){
         this.loader.dismissLoader();
         this.onplanchange = false;
         window.location.reload();
       }
       break;
       case 'fail':
          this.activateChangePlanMode();
      this.alert.presentAlert('','No se ha podido completar la transacción. Por favor revise su método de pago');
      this.loader.dismissLoader();
      done = true;
       break;
     }
      }
    }
    
  }

  cancelbtg(){
    this.btgLayout = false;
  }

  gotoentergroup(){
    this.navCtrl.setRoot('EntergrupoPage');
  }

  /*STRIPE METHODS*/

  checkStripeSetup(){
    let ret = (
      this.onplanchange && 
      this.userData.checkUserPermission([UserDataProvider.TIPO_DOCTOR]) 
      /*&& ( this.subsData.subscription === null || this.subsData.subscription.plan === null)*/
      );
      //console.log('check stripe setup',ret, this.userData.checkUserPermission([UserDataProvider.TIPO_DOCTOR]),this.onplanchange );
      return ret;
  }



loadSources(){
  //console.log(this.bu.endpointUrl+'payment_methods/'+this.userData.userData.uid);
  this.http.get(this.bu.endpointUrl+'payment_methods/'+this.userData.userData.uid).subscribe( (res:any) => {
    if(res!=null){
      this.selectedMethod = res.default_payment_source_id;
      this.parseSources(res);
    }
  });
  
}

parseSources(src){
  console.log(src.data);
  this.sources = src.data;
}

removeCard(index,card){
  let alerta = this.alert.alertCtrl.create({
    title: "",
    message:"¿Desea eliminar esta tarjeta?",
    buttons: [
      {
        text: "Cancelar",
        role: "cancel",
        handler: () =>  {
          console.log('se canceló')
        }
      },
      {
        text: "Eliminar",
        handler: () => {
          let info = {
            "action":"delete",
            "data":{
              "position":index
            }
          };
          this.http.post(this.bu.endpointUrl+'payment_methods',info).subscribe( (res:any) => {
            if(res!=null){
              this.selectedMethod = res.default_payment_source_id;
              this.parseSources(res);
            }else{
              this.selectedMethod = null;
              this.sources = [];
            }
          });
        }
      }
    ]
  });
  alerta.present();
}

selectCard( input_src:any ){
  let alerta = this.alert.alertCtrl.create({
    title: "",
    subTitle:"¿Desea asignar esta tarjeta como predeterminada?",
    message: "Todos sus pagos se realizarán por defecto con esta tarjeta.",
    buttons: [
      {
        text: "Cancelar",
        role: "cancel",
        handler: () =>  {
          //console.log('se canceló')
        }
      },
      {
        text: "Predeterminar",
        handler: () => {
          let info = {
            "action":"update",
            "data":{
              "source":input_src.id
            }
          };
          this.http.post(this.bu.endpointUrl+'payment_methods',info).subscribe( (res:any) => {
            if(res!=null){
              this.selectedMethod = res.default_payment_source_id;
              this.parseSources(res);
            }else{
              this.selectedMethod = null;
            }
          });
        }
      }
    ]
  });
  alerta.present();
}


  enabledButton():boolean{
    return this.selectedPlan !== null;
  }



  
  async removerSubsUser(uid){
    this.loader.presentLoader("Saliendo...");
    let recievers = this.subsData.subscription.field_doctores.concat(this.subsData.subscription.field_subusuarios);
    this.wsMessenger.generateDocoutgroup(recievers,uid);
    await this.subsManager.removeUser(uid);
    this.wsMessenger.generateSubsRemoveMessage(uid);
   
    this.loader.dismissLoader();
  }

  getOut(){
    this.alert.chooseAlert(
      '',
      '¿Está seguro que desea salir del grupo?',
      async ()=>{ await this.removerSubsUser(Number(this.userData.userData.uid));  this.bu.locationReload();},
      ()=>{}
    );
  }


  checkShowUserList(){
    console.log('checkShowUserList',this.isgroup,!this.subsData.isGroup,this.permissions.checkUserSuscription([this.PLAN_ANY]),this.subuserData.mySubUsers.length > 0);
    return (
      this.isgroup && 
      !this.subsData.isGroup && 
      this.permissions.checkUserSuscription([this.PLAN_ANY]) &&  
      this.subuserData.mySubUsers.length > 0);
  }


  updateCheckedOptions( planNid , event ){
    
    this.selectedPlan = Number( planNid );
    console.log('selected option is',planNid,this.selectedPlan);
  }


  checkChecked( planNid ):boolean{
    return  Number( this.selectedPlan ) === Number( planNid );
  }
  


  setUsersSelected(){
    console.log('TRAILSSU setting selected users');
    this.subuserData.mySubUsers.forEach((element)=>{
      console.log('TRAILSSU',this.subsLeftOnNew);
      if(this.subsLeftOnNew > 0){
        element.selectedForGroup = true;
      }
    });
  }  

  setUsersNotSelected(){
    this.subuserData.mySubUsers.forEach((element)=>{  element.selectedForGroup = false; });
  }

}

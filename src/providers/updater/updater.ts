
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
import { ServiciosManagerProvider } from '../servicios-manager/servicios-manager';
import { DateProvider } from '../date/date';

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
    public loader:LoaderProvider,
    public serviciosManager: ServiciosManagerProvider,
    public datep: DateProvider
   
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
  console.log('doc1',JSON.stringify(this.docData.doctores));
  await this.subscriptionManager.loadDoctorsSubscriptions();
  console.log('doc2',JSON.stringify(this.docData.doctores));
  this.docMan.filterActiveDoctors();
  console.log('doc3',JSON.stringify(this.docData.doctores));
  if(this.subsData.subscription && this.subsData.subscription.field_doctores_json){
    //this.docs = JSON.parse(this.subsData.subscription.field_doctores_json);
    this.subsData.setDoctores();
    }
  }

  async updateServicios(){
    this.serviciosManager.loadServicios();
  }

  async updateSubusers(){
    console.log();
    await this.subusersManager.cargarSubusuarios();
  }

  //las citas no se actualizan bien. no se filtran doctores que ya no se tienen agregados.
  //tengo dos listas de doctores, una en docdata y otra en subsdata. no se cual se usa para que. porque hay dos? que me pasa?
  async updateCitas(clear:boolean = false){
    //this.citasData.citas = new Array();
    //this.citasData.daysCitas = new Array();
    //this.citasManager.citasData.startDateFilter; 
    //this.citasManager.citasData.endDateFilter;

    console.log('updateCitas',clear,'from',this.citasData.startDateFilter,'to',this.citasManager.citasData.endDateFilter);
    //setting defaults.
    let def_from = this.datep.nowStart;
    let def_to = this.datep.nowEnd+(1000*60*60*24*365*5);
    let def_paciente = null;
   //Checking filters
    if(this.citasData.pacienteFilter != null){
      clear = true;
      def_paciente = this.citasData.pacienteFilter;
    }
    
    if(this.citasData.startDateFilter !== null && Number(this.citasData.startDateFilter) !== Number(0) ){
      clear = true;
      def_from = this.citasData.startDateFilter;
      def_to = this.citasData.endDateFilter;
    }else{
      if(this.citasData.pacienteFilter != null){
        def_from = null;
        def_to = null;
      }
    }
    //clearing if needed or filtered.
    if(clear){
      console.log('entering clear');
      this.citasData.citas = new Array();
      this.citasData.daysCitas = new Array();
    }
    //reloading.
    await this.citasManager.requestCitas(def_from,def_to,def_paciente).toPromise();
    this.docMan.evaluateCitas();
  }

}

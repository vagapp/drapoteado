
import { Injectable } from '@angular/core';
import { Citas } from '../user-data/citas';
import { servicios } from '../user-data/servicios';
import { Doctores } from '../user-data/doctores';
import { CitasManagerProvider } from '../citas-manager/citas-manager';
import { ModalController } from 'ionic-angular';
import { CitasDataProvider } from '../citas-data/citas-data';

/*
  Generated class for the CitaProgressControllerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CitaProgressControllerProvider {
  activeCita: Citas;
  available_services: servicios[];
  selectedService:number;
  costoCita:number;
  cobroEfectivo:number=null;
  cobroTarjeta:number=null;
  cobroCheque:number=null;
  activeCitaDoc:Doctores;
  showinterval = null;
  editfinish:boolean = false;
  factura_cantidad:number = null;
  factura: number = 0;
  added_services_list:{
    servicio:servicios
    costooverride:number
  };

  checkboxMode:boolean = true;//checkbox mode porque quisieron checkbox pero no es tan viable a ver que pasa.
  checkboxServicesList

  get CantidadRestante(){ return 0+ ( (Number(this.activeCita.costo)) - (Number(this.cobroEfectivo) + Number(this.cobroCheque) + Number(this.cobroTarjeta) ) ); }


  constructor(
    public citasManager: CitasManagerProvider,
    public modalCtrl:ModalController,
  ) {
  
  }

  setInputs(){
    this.cobroEfectivo=null;
    this.cobroTarjeta=null;
    this.cobroCheque=null;
  
    this.factura = 0;
    this.factura_cantidad = null;
  }
  

  openProgress(cita:Citas){ //open progress is called from the buttons using citas presentator
    if(!cita.checkState(CitasDataProvider.STATE_FINALIZADA)){
      this.setInputs();
    }
    if(!cita.checkState(CitasDataProvider.STATE_FINALIZADA) || !cita.checkState(CitasDataProvider.STATE_COBRO)){
      this.editfinish = false;
    }
    this.setActiveCita(cita);
    //this.evalServicios();
    //this.calcularCosto();
    this.evalServicios();
    //this.setCortesia();
    this.calcularCosto();
    this.startInterval();
    
    let Modal = this.modalCtrl.create("ProgresocitaModalPage", {cita : cita}, { cssClass: "smallModal progressModal" });
    Modal.present({});
  }


  setActiveCita(cita:Citas){
    this.activeCita = cita//navParams.get('cita');
    this.activeCitaDoc = this.citasManager.getDoctorOFCita(this.activeCita);
    console.log(this.activeCita.addedServices);
  }

  finalizarCitaActiva(){
    this.calcularCosto();
    this.activeCita.data.field_costo_sobrescribir.und[0].value = this.costoCita;
    this.activeCita.setServicesData();
    this.activeCitaDoc.citaActiva = null;
  }

  pagarCitaActiva(){
  this.activeCita.cobroEfectivo = this.cobroEfectivo;
  this.activeCita.cobroCheque = this.cobroCheque;
  this.activeCita.cobroTarjeta = this.cobroTarjeta;
  this.activeCita.data.field_facturar.und[0].value = this.factura;
  this.activeCita.data.field_facturar_cantidad.und[0].value = this.factura_cantidad;
  }

  updateCitaActiva(){
    this.calcularCosto();
    this.activeCita.data.field_costo_sobrescribir.und[0].value = this.costoCita;
    this.activeCita.setServicesData();
    this.activeCita.cobroEfectivo = this.cobroEfectivo;
  this.activeCita.cobroCheque = this.cobroCheque;
  this.activeCita.cobroTarjeta = this.cobroTarjeta;
  this.activeCita.data.field_facturar.und[0].value = this.factura;
  this.activeCita.data.field_facturar_cantidad.und[0].value = this.factura_cantidad;
  }

  addService(){
    let aux_servicio = null;
    console.log(this.selectedService);
    if(Number(this.selectedService) !== Number(0)){
      let service_to_add = this.available_services.find((services)=>{ return Number(services.Nid) === Number(this.selectedService)});
      console.log('service to add',service_to_add);
      if(this.activeCita.addServicio(service_to_add)){
        console.log('servicio added');
        this.available_services = this.activeCita.getServiciosAvailable(this.activeCitaDoc.servicios);
        this.calcularCosto();
        this.selectedService = 0;
       }
    }
  }

  /*setCortesia(){
    let found = this.available_services.find((services)=>{ return Number(services.Nid) === Number(CitasDataProvider.SERVICIO_CORTESIA_NID)});
    if(!found){
      const aux_serv = new servicios();
      aux_serv.Nid = Number(CitasDataProvider.SERVICIO_CORTESIA_NID);
      aux_serv.Uid = 1;
      aux_serv.title = 'Cortesía';
      aux_serv.costo = 0;
      this.available_services.push(aux_serv);
    }
    console.log('adding cortesia',this.available_services);
  }

  unsetCortesia(){
    this.available_services = this.available_services.filter((servicios)=>{ return Number(servicios.Nid) !== Number(CitasDataProvider.SERVICIO_CORTESIA_NID);  });
    console.log('removing cortesia',this.available_services);
  }*/

  removeService( servicio:servicios ){
    this.activeCita.removeServicio(servicio);
    this.available_services = this.activeCita.getServiciosAvailable(this.activeCitaDoc.servicios);
    this.calcularCosto();
  }

  removeServiceWnid( Nid:number ){
    this.activeCita.removeServicioNid(Nid);
    this.available_services = this.activeCita.getServiciosAvailable(this.activeCitaDoc.servicios);
    this.calcularCosto();
  }

  calcularCosto(){
    console.log('calculando costo');
    this.costoCita = 0;
    console.log(this.activeCita.addedServices);
    this.activeCita.addedServices.forEach(element => {
      this.costoCita += Number(element.costo);
      this.activeCita.data.field_costo_sobrescribir.und[0].value = this.costoCita;
    });
    console.log(this.costoCita);
  }


  evalServicios(){
    this.activeCita.setAddedServices(this.activeCitaDoc.servicios);
    this.available_services = this.activeCita.getServiciosAvailable(this.activeCitaDoc.servicios);
    }

    startInterval(){
      if(!this.showinterval){
        this.showinterval = setInterval(() => { this.activeCita.setDuracionMs(); }, 1000);
      }
    }

    stopInterval(){
      if(this.showinterval){
      clearInterval(this.showinterval);
      this.showinterval = null;
      }
    }

    updateCheckedOption(Nid,State){
      console.log('progresscontroller updateCheckedOption',Nid,State);
      if(State){
        this.selectedService = Nid;
        this.addService();
      }else{
        this.removeServiceWnid(Nid);
      }
      console.log('added',this.activeCita.addedServices);
    }

    checkChecked(Nid:number):boolean{
      return this.activeCita.addedServices.find((aux_serves)=>{ return Number(aux_serves.Nid) === Number(Nid) }) !== undefined;
    }

}

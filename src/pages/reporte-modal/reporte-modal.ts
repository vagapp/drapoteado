import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { Citas } from '../../providers/user-data/citas';
import { reportes } from '../../providers/user-data/reportes';
import { Debugger } from '../../providers/user-data/debugger';


/**
 * Generated class for the ReporteModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reporte-modal',
  templateUrl: 'reporte-modal.html',
})
export class ReporteModalPage {

  reportloaded:boolean = false;
  /*reportDateFrom:string;
  reportDateTo:string;
  doctoresFilter:number[];
  cajaFilter:number[];
  recepcionFilter:number[];*/
  //citas:Citas[];
  //servicios: servicios[];
  actualrepot:reportes = null;
  noCitas:number;
  noShow:number;
  noCancel:number;
  duracionTotalMs:number;
  duracionTotalStr:string;
  
  total:number;
  totalefectivo:number;
	totalTarjeta:number;
	totalCheques:number;
	totalcuentas:number;
  totalAdeudo:number;
  costoTotal:number;

  caja:number;
	cajaefectivo:number;
	cajaTarjeta:number;
	cajaCheques:number;
	cajacuentas:number;
  cajaAdeudo:number;
    

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userData: UserDataProvider,
    public loadingCtrl: LoadingController
  ) {
    let loading = this.loadingCtrl.create({
      content: 'Cargando Reporte...'
    });
    loading.present();
    this.reset();
    this.setReport();
    //this.setDefaultTodayFilter();
    this.loadReport( false );
    let loadinter = setInterval(() => {
      if(this.reportloaded){
        loading.dismiss();
        clearInterval(loadinter);
      }
     
    }, 500);
  }

  ionViewDidLoad() {
    
  }

  reset(){
    this.actualrepot = new reportes();
    this.actualrepot.citas = new Array();
    this.duracionTotalMs = 0;
    this.duracionTotalStr="00:00";
    this.noCitas = 0;
    this.noShow = 0;
    this.noCancel = 0;
    this.total = 0;
    this.totalefectivo = 0;
    this.totalTarjeta = 0;
    this.totalCheques = 0;
    this.totalcuentas = 0;
    this.totalAdeudo = 0;
    this.costoTotal = 0;
    this.caja = 0;
    this.cajaefectivo = 0;
    this.cajaTarjeta = 0;
    this.cajaCheques = 0;
    this.cajacuentas = 0;
    this.cajaAdeudo = 0;
  }

  setReport(){
    console.log('loadingservice', this.navParams.get('reporte'));
    let aux_repo = this.navParams.get('reporte');
    if(aux_repo){
      this.actualrepot = aux_repo;
    }else{
      this.actualrepot = this.userData.todayReport;
    }
    if (this.actualrepot === null){
     Debugger.log(['cagamos']);
    }
    Debugger.log(['reporte cargado es',this.actualrepot]);
  }

  setDefaultTodayFilter(){
    //let date = new Date();
    //this.reportDateFrom = (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear();
    /*this.reportDateFrom = "5/14/2018";
    this.reportDateTo = this.reportDateFrom;
    this.doctoresFilter = this.userData.getDoctoresSimpleArray();
    this.cajaFilter = new Array();
    this.recepcionFilter = new Array();*/
  }

  loadReport( logoutonerrror = true ){
    console.log("cargando citas de reporte");
    let aux_citas_list = new Array();
    this.userData.getCitas(this.actualrepot.reportDateFrom,this.actualrepot.reportDateTo,this.actualrepot.doctoresFilter,this.actualrepot.cajaFilter,this.actualrepot.recepcionFilter).subscribe(
      (val)=>{
        let aux_results = Object.keys(val).map(function (key) { return val[key]; });
        aux_results.forEach((element) => {
          Debugger.log([`loadReport check element ${element['Nid']}`,element]);
          let aux_cita = new Citas();
          aux_cita.setData(element);
          Debugger.log(['loadReport check aux cita',aux_cita]);
          aux_cita.setDuracionMs();
          Debugger.log(['loadReport check aux cita',aux_cita]);
          if(aux_cita.checkState(UserDataProvider.STATE_CANCELADA)){
            this.noCancel++;
            this.noCitas++;
          }
          if(aux_cita.checkState(UserDataProvider.STATE_FINALIZADA)){
            this.noShow++;
            this.noCitas++;
            if(aux_cita.duracionMs) this.duracionTotalMs += aux_cita.duracionMs;
            if(aux_cita.costo) this.costoTotal = aux_cita.costo;
            if(aux_cita.cobro) this.total+= aux_cita.cobro;
            if(aux_cita.cobroEfectivo) this.totalefectivo+=aux_cita.cobroEfectivo;
	          if(aux_cita.cobroTarjeta) this.totalTarjeta+=aux_cita.cobroTarjeta;
            if(aux_cita.cobroCheque) this.totalCheques+=aux_cita.cobroCheque;
           
	          this.totalcuentas+=100;
            this.totalAdeudo+=100;
            aux_citas_list.push(aux_cita);
           
          }
       });
       this.actualrepot.citas = aux_citas_list;
       this.setduracionTotalStr();
       //this.cargarServicios();
        this.reportloaded = true;
       console.log("citas obtenidas por el reporte",this.actualrepot.citas);
      },
       response => {
         console.log("POST call in error", response);
         if(logoutonerrror)
         this.userData.logout();
       }
      );
  }

  cargarServicios(){
    /*console.log("cargando servicios");
    this.actualrepot.servicios = new Array();
    let aux_arr = new Array();
    aux_arr[0]= this.userData.getDoctoresSimpleArray()
    this.userData.getServicios(aux_arr).subscribe(
      (val)=>{
         let aux_results = Object.keys(val).map(function (key) { return val[key]; });
         let dis  = this;
         aux_results.forEach(function(element) {
          dis.actualrepot.servicios.push(element);          
        });
        dis.actualrepot.citas.forEach(cita => {
          cita.setAddedServices(dis.actualrepot.servicios);
        });
        this.reportloaded = true;
      },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("citas w services added",this.actualrepot.citas);
          console.log("loadedServices",this.actualrepot.servicios);
      });
       */
      }

      setduracionTotalStr(){
        console.log("totalmscount",this.duracionTotalMs);
        let dsm_seconds = this.duracionTotalMs / 1000;
        let dsm_minutes = dsm_seconds / 60;
        dsm_seconds = dsm_seconds - (dsm_minutes * 60);
        let dsm_seconds_str = ""+dsm_seconds;
        let dsm_minutes_str = ""+dsm_minutes;
        while(dsm_minutes_str.length < 2) dsm_minutes_str = "0"+dsm_minutes_str;
        while(dsm_seconds_str.length < 2) dsm_seconds_str = "0"+dsm_seconds_str;
        this.duracionTotalStr = dsm_minutes_str+":"+dsm_seconds_str;
        console.log(this.duracionTotalStr);
      }


}

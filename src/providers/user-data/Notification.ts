import { Debugger } from "./debugger";

export class Notification_c{
    Nid:number = null;
    title: string; //titulo de la notificacion
    subtitle: string; //subtitulo de la notificacion
    text: string;   //texto de la notificacion.
    read: boolean;   //si ya se ha leido esta notificacion.
    user: number[]; //nid del usuario que tiene la notificacion.
    action: string; //accion de la notificacion, determina que se hace cuando se da click.

    constructor(){
    }

    setData( input_data ){
        Debugger.log(['trynna set noti data from',input_data]);
        this.Nid = input_data['nid'];
        this.title = input_data['field_title']['value'];
        this.subtitle = input_data['field_subtitle']['value'];
        this.text = input_data['field_text']['value'];
        this.user = input_data['field_user']['uid'];
        this.action = input_data['field_action'];
        Debugger.log(['item generated is this',this]);
        }
        /*
            array (
  0 => 
  stdClass::__set_state(array(
     'nid' => '183',
     'title' => 'Notitest1',
     'field_read' => 
    array (
      'value' => '0',
    ),
     'field_subtitle' => 
    array (
      'value' => 'subtitle',
      'format' => NULL,
      'safe_value' => 'subtitle',
    ),
     'field_text' => 
    array (
      'value' => 'text testes texte ',
      'format' => NULL,
      'safe_value' => 'text testes texte ',
    ),
     'field_title' => 
    array (
      'value' => 'Notitest1',
      'format' => NULL,
      'safe_value' => 'Notitest1',
    ),
     'field_user' => 
    array (
      'uid' => '76',
      'access' => true,
    ),
  )),
)
        */
    getData(){
        let aux_data = {
            Nid: this.Nid,
            type: 'notification',
            field_text:{und:[{value:this.text}]},
            field_user:{und:this.user},
            field_action:{und:[{value:this.action}]}
          };
          if(!this.Nid){
              delete aux_data.Nid;
          }
          Debugger.log(['Noti getData gets',aux_data]);
          return aux_data;
    }

    /**
     * CREAR NOTIFICACION CUANDO:
     * para doctor:
     *  para el doctor cuando se crea una cita.
     *  cuando se confirma una cita.
     * para caja:
     *  para caja cuando hay que cobrar una cita.
     * para subusuarios:
     *  cuando se les agrega o retira un doctor.
     * **/

}
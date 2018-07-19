export class Notification{
    Nid:number = null;
    title: string; //titulo de la notificacion
    subtitle: string; //subtitulo de la notificacion
    text: string;   //texto de la notificacion.
    read: boolean;   //si ya se ha leido esta notificacion.
    user: number; //nid del usuario que tiene la notificacion.

    constructor(){
    }

    setData( input_data ){
        this.Nid = input_data['Nid'];
        this.title = input_data['field_title']['und']['0']['value'];
        this.subtitle = input_data['field_subtitle']['und']['0']['value'];
        this.text = input_data['field_text']['und']['0']['value'];
        this.user = input_data['field_user']['und']['0'];
        }

    getData(){
        let aux_data = {
            Nid: this.Nid,
            type: 'notification',
            field_title:{und:[{value: this.title}]},
            field_subtitle:{und:[{value:this.subtitle}]},
            field_text:{und:[{value:this.text}]},
            field_read:{und:[{value:this.read}]},
            field_user:{und:[this.user]},
          };
          if(!this.Nid){
              delete aux_data.Nid;
          }
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
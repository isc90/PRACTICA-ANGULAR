import { Component, } from '@angular/core';
import { ComponenteHijo } from './componente-hijo/componente-hijo';

@Component({
  selector: 'app-componente-padre',
  imports: [ComponenteHijo],
  templateUrl: './componente-padre.html',
  styles: ``
})
export class ComponentePadre {

  mensaje:string ='';

  recibirNotificacion(mensaje:string){
    this.mensaje = mensaje;
  }

}

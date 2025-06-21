import { Component } from '@angular/core';
import { MensajeHijo } from './mensaje-hijo/mensaje-hijo';

@Component({
  selector: 'app-mensaje',
  imports: [MensajeHijo],
  templateUrl: './mensaje.html',
  styles: ``
})
export class Mensaje {
  mensaje:string = '';

  recibirMensaje(msg:string):void{
    this.mensaje = msg;
  }

}

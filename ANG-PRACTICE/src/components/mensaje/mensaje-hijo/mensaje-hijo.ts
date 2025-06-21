import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje-hijo',
  imports: [FormsModule],
  templateUrl: './mensaje-hijo.html',
  styles: ``
})
export class MensajeHijo {
  mensaje:string = '';

  @Output() enviarMensaje =new EventEmitter<string>();

  enviar():void{
    if(this.mensaje){
      this.enviarMensaje.emit(this.mensaje);
    }

    this.mensaje='';
  }
}

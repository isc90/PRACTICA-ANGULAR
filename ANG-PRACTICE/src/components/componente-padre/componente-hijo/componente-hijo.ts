import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  imports: [],
  templateUrl: './componente-hijo.html',
  styles: ``
})
export class ComponenteHijo {
  //@Input() mensaje!:string;

  @Output() notificarPadre =  new EventEmitter<string>();

  enviarMensaje(){
      this.notificarPadre.emit("mensaje desde el hijo");
  }


}

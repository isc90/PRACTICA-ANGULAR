import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grosero',
  imports: [],
  templateUrl: './grosero.html',
  styles: ``
})
export class Grosero {

  mensaje = '';

  @Output() mentarMadre = new EventEmitter<string>();

  mentar():void{
    if(this.mensaje){
      this.mentarMadre.emit(this.mensaje);
    }
    this.mensaje = '';
  }
}

import { Component, } from '@angular/core';
import { ComponenteHijo } from './componente-hijo/componente-hijo';

@Component({
  selector: 'app-componente-padre',
  imports: [ComponenteHijo],
  templateUrl: './componente-padre.html',
  styles: ``
})
export class ComponentePadre {

  mensajePadre:string = "YA LLEGO SU PAPA HIJOS DE SU PUTA MADRE!";

}

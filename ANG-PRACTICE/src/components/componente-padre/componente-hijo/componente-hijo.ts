import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  imports: [],
  templateUrl: './componente-hijo.html',
  styles: ``
})
export class ComponenteHijo {
  @Input() mensaje!:string;
}

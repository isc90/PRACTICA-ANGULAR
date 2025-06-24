import { Component } from '@angular/core';
import { Grosero } from './grosero/grosero';

@Component({
  selector: 'app-mentada',
  imports: [Grosero],
  templateUrl: './mentada.html',
  styles: ``
})
export class Mentada {

  mentadaDeMdr = '';

  recibirMentada(mnt:string){
    this.mentadaDeMdr = mnt;
  }

}

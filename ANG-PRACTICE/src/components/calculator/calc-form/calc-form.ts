import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc-form',
  imports: [FormsModule],
  templateUrl: './calc-form.html',
  styles: ``
})
export class CalcForm {

  operandoA:number| null = null;
  operandoB:number| null = null;

  @Output() sumar = new EventEmitter<number>();

  calculate():void{
    if(this.operandoA && this.operandoB){
      const resultado = Number(this.operandoA) + Number(this.operandoB);
      this.sumar.emit(resultado);

      this.operandoA = null;
      this.operandoB = null;
    }
  }
}

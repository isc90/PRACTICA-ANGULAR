import { Component } from '@angular/core';
import { CalcForm } from './calc-form/calc-form';

@Component({
  selector: 'app-calculator',
  imports: [CalcForm],
  templateUrl: './calculator.html',
  styles: ``
})
export class Calculator {
  result:number = 0;

  receiveResult(res:number){
    this.result = res;
  }
}

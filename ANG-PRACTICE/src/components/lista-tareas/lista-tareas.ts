import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  imports: [],
  templateUrl: './lista-tareas.html',
  styles: ``
})
export class ListaTareas {

tareas:Array<string> = ["Lavarse la cara","Comer","Cagar"];

addTask(task:string):void{
  if(task){
    this.tareas.push(task.trim());
  }
}

}

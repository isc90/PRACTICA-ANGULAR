import { Component } from '@angular/core';



@Component({
  selector: 'app-tienda-online',
  imports: [],
  templateUrl: './tienda-online.html',
  styles: ``
})
export class TiendaOnline {

 mac:Producto = new Producto("Macbook",2000);
 iphone:Producto = new Producto("iPhone",999);

 inventario:Array<Producto> = [this.mac,this.iphone];


 addProduct(prod:Producto):void{
  
 }
}


export class Producto{
  constructor(public descripcion: string,
  public precio: number){}
  
}

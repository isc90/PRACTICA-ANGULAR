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


 addProduct(prodName:string,price:string):void{
    const prod = new Producto(prodName,Number(price));
    this.inventario.push(prod)
 }
}


export class Producto{
  constructor(public descripcion: string,
  public precio: number){}
  
}

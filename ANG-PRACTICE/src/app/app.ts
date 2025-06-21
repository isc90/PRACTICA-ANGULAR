import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaTareas } from '../components/lista-tareas/lista-tareas';
import { TiendaOnline } from '../components/tienda-online/tienda-online';
import { ComponentePadre } from '../components/componente-padre/componente-padre';
import { ComponenteHijo } from "../components/componente-padre/componente-hijo/componente-hijo";
import { Calculator } from "../components/calculator/calculator";
import { Mensaje } from '../components/mensaje/mensaje';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaTareas, TiendaOnline, ComponentePadre, ComponenteHijo, Calculator, Mensaje],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ANG-PRACTICE';
}

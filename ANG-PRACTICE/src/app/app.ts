import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaTareas } from '../components/lista-tareas/lista-tareas';
import { TiendaOnline } from '../components/tienda-online/tienda-online';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaTareas, TiendaOnline],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ANG-PRACTICE';
}

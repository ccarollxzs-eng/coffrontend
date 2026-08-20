import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProdutos } from './components/lista-produtos/lista-produtos';
@Component({
  selector: 'app-root',
  imports: [ListaProdutos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-teste');
}

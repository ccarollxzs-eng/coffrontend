import { Component } from '@angular/core';

@Component({
  selector: 'app-produto',
  imports: [],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  nome = "Notebook";
  preco = 149.99;
  mostrarPreco = true;

  produtos = [
    {nome:'Monitor', preco:'250'}
  ]
}
 
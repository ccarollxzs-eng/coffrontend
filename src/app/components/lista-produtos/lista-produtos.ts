import { Component } from '@angular/core';
import { Produto } from '../produto/produto';


@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = [
  
      {nome:'notebook', preco:3800 },
      {nome:'mouse', preco:179},
  ];

  exibirProduto(nome: string){
    console.log(`Produto seleciondo: ${nome}`);
  }
}

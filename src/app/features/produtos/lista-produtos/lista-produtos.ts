import { Component, signal, computed, effect } from '@angular/core';
import { Produto } from '../produto/produto';



@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})


export class ListaProdutos {

  produtos = signal([
  {nome:'notebook', preco:3800 },
  {nome:'mouse', preco:179},
  ]);

produtoSelecionado = signal<string | null>(null);

carrinho = signal<{ nome: string; preco: number }[]>([]);

totalProdutos = computed(() => this.produtos().length);

quantidadeCarrinho = computed(()=> this.carrinho().length);

valorTotal = computed(() => {
  return this.produtos().reduce((total,item) => total+item.preco,0);
});

totalCarrinho = computed(()=> {
  return this.carrinho().reduce((total,item)=> total + item.preco,0);
});


  exibirProduto(nome: string){
    this.produtoSelecionado.set(nome);
  }

  adicionarProduto() {
  this.produtos.update(listaAtual => [
    ...listaAtual,
    { nome: 'Teclado', preco: 250 }
  ]);
}

adicionarAoCarrinho(produto:{ nome: string; preco: number}){
  this.carrinho.update(listaAtual => [
    ...listaAtual,
    produto
  ]);
}


substituirProdutos(){
  this.produtos.set([{nome:'Produto novo', preco:999}]);
}


constructor() {
  effect(() => {
    console.log(`Valor Total Atualizado: ${this.valorTotal()}`);
  });

  effect(() => {
    if (typeof document !== 'undefined') {
      document.title = `${this.totalProdutos()} Minha Loja`;
    }
  });
}

}
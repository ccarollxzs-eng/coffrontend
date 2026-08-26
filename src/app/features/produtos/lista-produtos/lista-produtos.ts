import { Component, signal, computed, effect } from '@angular/core';
import { Produto } from '../produto/produto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})

export class ListaProdutos {

  produtos = signal<{ nome: string; preco: number }[]>([]);

  carregando = signal(true);

  produtoSelecionado = signal<string | null>(null);

  carrinho = signal<{ nome: string; preco: number }[]>([]);

  totalProdutos = computed(() => this.produtos().length);

  quantidadeCarrinho = computed(() => this.carrinho().length);

  valorTotal = computed(() => {
    return this.produtos().reduce(
      (total, item) => total + item.preco,
      0
    );
  });

  totalCarrinho = computed(() => {
    return this.carrinho().reduce(
      (total, item) => total + item.preco,
      0
    );
  });

  constructor(private http: HttpClient) {

    this.carregarProdutos();

    effect(() => {
      console.log(`Valor Total Atualizado: ${this.valorTotal()}`);
    });

    effect(() => {
      if (typeof document !== 'undefined') {
        document.title = `${this.totalProdutos()} Minha Loja`;
      }
    });
  }

  exibirProduto(nome: string) {
    this.produtoSelecionado.set(nome);
  }

  adicionarProduto() {
    this.produtos.update(listaAtual => [
      ...listaAtual,
      { nome: 'Teclado', preco: 250 }
    ]);
  }

  adicionarAoCarrinho(produto: { nome: string; preco: number }) {
    this.carrinho.update(listaAtual => [
      ...listaAtual,
      produto
    ]);
  }

  substituirProdutos() {
    this.produtos.set([
      { nome: 'Produto novo', preco: 999 }
    ]);
  }

  carregarProdutos() {

    this.carregando.set(true);

    this.http
      .get<{ title: string; price: number }[]>(
        'https://fakestoreapi.com/products'
      )
      .subscribe({
        next: (dados) => {

          const produtosFormatados = dados.map(produto => ({
            nome: produto.title,
            preco: produto.price
          }));

          this.produtos.set(produtosFormatados);

          this.carregando.set(false);
        },

        error: (erro) => {
          console.error('Erro ao carregar produtos:', erro);
          this.carregando.set(false);
        }
      });
  }
}
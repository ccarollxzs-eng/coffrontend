import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrecoFormatadoPipe } from '../../pipes/preco-formatado-pipe';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-produto',
  imports: [CurrencyPipe, UpperCasePipe, PrecoFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  @Input() nome = "";
  @Input() preco = 0;

 @Output() produtoSelecionado = new EventEmitter<string>();

 selecionarProduto(){
  this.produtoSelecionado.emit(this.nome);
 }
}
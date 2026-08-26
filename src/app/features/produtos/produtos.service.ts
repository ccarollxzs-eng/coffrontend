import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

type ProdutoApi = {
    title: string;
    price: number;
}

type Produto = {
    nome: string;
    preco: number;
}

@Injectable({providedIn: 'root'})
export class ProdutosService{
    
}
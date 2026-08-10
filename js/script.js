const produtos = [
    {
        nome:"Caneta",
        preco:4.99
    },
    {
        nome:"Borracha",
        preco:2.58
    },
    {
        nome:"Caderno",
        preco:25.90
    }

];

console.log(produtos[0].nome);
console.log(produtos[2].preco);

const produtoJSON = JSON.stringify(produtos[1]);
console.log(produtoJSON);

const produtoObjeto = JSON.parse(produtoJSON);
console.log(produtoObjeto);

const produtosBaratos = produtos.filter(

);

for(let i=0; i<produtosBaratos.length;i++){
    console.log(`Nome: ${produtosBaratos[i].nome} - Preço:${produtosBaratos[i].preco}`);
};
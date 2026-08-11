const produtos = [
    {
        nome: "Caneta",
        preco: 4.99,
        categoria: "Papelaria",
        imagem: "caneta.jpg"
    },
    {
        nome: "Borracha",
        preco: 2.58,
        categoria: "Papelaria",
        imagem: "borracha.jpg"
    },
    {
        nome: "Caderno",
        preco: 25.90,
        categoria: "Papelaria",
        imagem: "caderno.jpg"
    },
    {
        nome: "Mochila",
        preco: 89.90,
        categoria: "Acessórios",
        imagem: "mochila.jpg"
    },
    {
        nome: "Garrafa",
        preco: 35.90,
        categoria: "Acessórios",
        imagem: "garrafa.jpg"
    }
];


function listarProdutos() {

    for (let i = 0; i < produtos.length; i++) {

        console.log(
            `Nome: ${produtos[i].nome} - Preço: ${produtos[i].preco} - Categoria: ${produtos[i].categoria}`
        );

    }

}

listarProdutos();


function filtrarProdutos(categoria) {

    const produtosFiltrados = produtos.filter(
        produto => produto.categoria === categoria
    );

    return produtosFiltrados;
}


const produtosPapelaria = filtrarProdutos("Papelaria");

console.log("Produtos de Papelaria:");

for (let i = 0; i < produtosPapelaria.length; i++) {

    console.log(
        `Nome: ${produtosPapelaria[i].nome} - Preço: ${produtosPapelaria[i].preco}`
    );

}


const { nome, preco, categoria, imagem } = produtos[0];

console.log("Destructuring:");

console.log(nome);
console.log(preco);
console.log(categoria);
console.log(imagem);


const produtoNovo = {
    ...produtos[0],
    preco: 5.99
};

console.log("Produto modificado:");

console.log(produtoNovo);




const novoProduto = {
    nome: "Lápis",
    preco: 1.99,
    categoria: "Papelaria",
    imagem: "lapis.jpg"
};

const novaLista = [...produtos, novoProduto];

console.log("Nova lista:");

console.log(novaLista);
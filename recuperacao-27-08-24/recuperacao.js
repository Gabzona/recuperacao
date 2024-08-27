var produtos = []
function adicionarProduto(nome, preco, quantidade){
    if(!nome || !preco || !quantidade){
        console.log("Os valores precisam ser preenchidos")
        return
    }
    if(preco <= 0){
        console.log("O preço não pode ser zero")
        return
    }
    if(quantidade <= 0){
        console.log("A quantidade não pode ser 0 ou abaixo de zero")
        return
    }
    let produto = {
        nome: nome,
        preco: preco,
        quantidade: quantidade
    }
    produtos.push(produto)
}

function listarProdutos(){
    if(produtos.length === 0) {
        console.log("Sem produtos cadastrados")
    }else{
        for(i = 0; i< produtos.length; i++){
            console.log(`${i + 1}. ${produtos[i].nome}, ${produtos[i].preco}, ${produtos[i].quantidade}, `)
        }
    }
}

function pegarProduto(nome){
    if (!produto) {
        console.log("Produto não encontrado");
        return;
    }else{
        console.log(`Produto encontrado: Nome: ${produto.nome}, Preço: ${produto.preco}, Quantidade: ${produto.quantidade}`);
    }

    let produto = produtos.find(produto => produto.nome === nome);
}

function removerProduto(){
    if (index === -1) {
        console.log("Produto não encontrado");
        return;
    }else{
        produtos.splice(index, 1);
    }

    let index = produtos.findIndex(produto => produto.nome === nome);

}

adicionarProduto('caneta', 10, 5)
adicionarProduto('lapis', 2, 10)

listarProdutos()


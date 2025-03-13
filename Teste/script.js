
const produtos = [
    { id: 1, nome: "Produto 1", preco: 99.90, imagem: "produto1.jpg" },
    { id: 2, nome: "Produto 2", preco: 149.90, imagem: "produto2.jpg" }
];

function carregarProdutos() {
    const lista = document.getElementById("lista-produtos");
    lista.innerHTML = "";
    produtos.forEach(produto => {
        let div = document.createElement("div");
        div.classList.add("produto");
        div.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
            <a href="detalhes.html?id=${produto.id}">Ver detalhes</a>
        `;
        lista.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", carregarProdutos);

function adicionarAoCarrinho(id) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let produto = produtos.find(p => p.id === id);
    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarContador();
}

function atualizarContador() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    document.getElementById("cart-count").textContent = carrinho.length;
}

document.addEventListener("DOMContentLoaded", atualizarContador);

function filtrarProdutos() {
    let termo = document.getElementById("search").value.toLowerCase();
    let produtosFiltrados = produtos.filter(p => p.nome.toLowerCase().includes(termo));
    const lista = document.getElementById("lista-produtos");
    lista.innerHTML = "";
    produtosFiltrados.forEach(produto => {
        let div = document.createElement("div");
        div.classList.add("produto");
        div.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
            <a href="detalhes.html?id=${produto.id}">Ver detalhes</a>
        `;
        lista.appendChild(div);
    });
}

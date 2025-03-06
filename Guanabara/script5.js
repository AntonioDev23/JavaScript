
const numeroInput = document.getElementById("numeroInput");
const adicionarBtn = document.getElementById("adicionarBtn");
const finalizarBtn = document.getElementById("finalizarBtn");
const resultado = document.getElementById("resultado");

let numeros = [];

adicionarBtn.addEventListener("click", () => {
    let numero = Number(numeroInput.value);

    if (isNaN(numero) || numero === "") {
        alert("Digite um número válido!");
        return;
    }

    numeros.push(numero);
    exibirNumeros();
    numeroInput.value = "";
    numeroInput.focus();
});

finalizarBtn.addEventListener("click", () => {
    if (numeros.length === 0) {
        alert("Adicione pelo menos um número antes de finalizar!");
        return;
    }

    let quantidade = numeros.length;
    let soma = numeros.reduce((acc, num) => acc + num, 0);
    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);

    resultado.innerHTML = `
        <p>Quantidade de números: <strong>${quantidade}</strong></p>
        <p>Soma total: <strong>${soma}</strong></p>
        <p>Maior número: <strong>${maior}</strong></p>
        <p>Menor número: <strong>${menor}</strong></p>
    `;

    // Limpa a lista para um novo ciclo
    numeros = [];
});

function exibirNumeros() {
    resultado.innerHTML = `<p>Números adicionados: ${numeros.join(", ")}</p>`;
}

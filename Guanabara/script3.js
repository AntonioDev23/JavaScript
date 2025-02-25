document.getElementById('contarBtn').addEventListener('click', function () {
    // Captura os valores dos inputs
    const inicio = parseInt(document.getElementById('inicio').value);
    const fim = parseInt(document.getElementById('fim').value);
    const passo = parseInt(document.getElementById('passo').value);

    // Valida os valores
    if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo <= 0) {
        alert("Por favor, insira valores válidos!");
        return;
    }

    let resultado = '';
    if (inicio <= fim) {
        // Contagem crescente
        for (let i = inicio; i <= fim; i += passo) {
            resultado += i + ' ';
        }
    } else {
        // Contagem decrescente
        for (let i = inicio; i >= fim; i -= passo) {
            resultado += i + ' ';
        }
    }

    // Exibe o resultado
    document.getElementById('resultado').textContent = resultado;
});
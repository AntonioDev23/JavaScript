document.getElementById('gerarBtn').addEventListener('click', function () {
    // Captura o número digitado
    const numero = parseInt(document.getElementById('numero').value);

    // Valida se o número é válido
    if (isNaN(numero)) {
        alert("Por favor, digite um número válido!");
        return;
    }

    // Gera a tabuada
    let tabuada = '';
    for (let i = 1; i <= 10; i++) {
        tabuada += `${numero} x ${i} = ${numero * i}\n`;
    }

    // Exibe a tabuada na área de resultado
    document.getElementById('tabuadaResultado').textContent = tabuada;
});
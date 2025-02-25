// Pede um número ao usuário e converte para inteiro
let numero = parseInt(prompt("Digite um número:"));

// Inicializa a variável para verificar se o número é primo
let ehPrimo = true;

// Números menores que 2 não são primos
if (numero < 2) {
    ehPrimo = false;
} else {
    // Loop de 2 até o número - 1 para verificar se ele é divisível por algum outro número
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) { // Se for divisível, não é primo
            ehPrimo = false;
            break; // Sai do loop, pois já sabemos que não é primo
        }
    }
}

// Exibe o resultado final
if (ehPrimo) {
    console.log(`${numero} é primo.`);
} else {
    console.log(`${numero} não é primo.`);
}


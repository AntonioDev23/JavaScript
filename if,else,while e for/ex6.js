// Importa o módulo readline-sync para receber entrada do usuário no Node.js
const readline = require('readline-sync');

// Solicita ao usuário que insira um número e converte a entrada para um número inteiro
let numero = parseInt(readline.question("Digite um número: "));

// Inicializa a variável 'ehPrimo' assumindo que o número é primo
let ehPrimo = true;

// Números menores que 2 não são considerados primos
if (numero < 2) {
    ehPrimo = false;
} else {
    // Loop que verifica divisores do número, começando de 2 até um valor menor que o número
    for (let i = 2; i < numero; i++) {
        // Se o número for divisível por 'i', não é primo
        if (numero % i === 0) {
            ehPrimo = false;
            // Interrompe o loop ao encontrar um divisor
            break;
        }
    }
}

// Exibe se o número é primo ou não, com base na variável 'ehPrimo'
if (ehPrimo) {
    console.log(`${numero} é primo.`);
} else {
    console.log(`${numero} não é primo.`);
}



// Importa o módulo readline-sync para receber entrada do usuário no Node.js
const readline = require('readline-sync');

// Solicita ao usuário que insira um número e converte a entrada para um número inteiro
let numero = parseInt(readline.question("Digite um número: "));

// Verifica se o número é divisível por 2
if (numero % 2 === 0) {
    // Se o resto da divisão por 2 for zero, o número é par
    console.log(`${numero} é par.`);
} else {
    // Caso contrário, o número é ímpar
    console.log(`${numero} é ímpar.`);
}

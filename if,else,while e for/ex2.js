// Importa o módulo readline-sync para receber entrada do usuário no Node.js
const readline = require('readline-sync');

// Solicita ao usuário que insira um número positivo e converte a entrada para um número inteiro
let numero = parseInt(readline.question("Digite um número positivo: "));

// Inicializa a variável 'soma' para acumular o total da soma
let soma = 0;

// Inicializa a variável de controle 'i' com valor 1
let i = 1;

// Enquanto 'i' for menor ou igual ao número fornecido
while (i <= numero) {
    // Adiciona o valor de 'i' à variável 'soma'
    soma += i;
    // Incrementa 'i' em 1 a cada iteração
    i++;
}

// Exibe o resultado da soma de 1 até o número fornecido
console.log(`A soma de 1 até ${numero} é ${soma}.`);

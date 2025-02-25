// Importa o módulo readline-sync para receber entrada do usuário no Node.js
const readline = require('readline-sync');

// Solicita ao usuário que insira um número para gerar a tabuada e converte a entrada para um número inteiro
let numero = parseInt(readline.question("Digite um número para ver a tabuada: "));

// Loop 'for' que itera de 1 a 10
for (let i = 1; i <= 10; i++) {
    // Calcula o produto do número fornecido pelo valor de 'i' e exibe o resultado
    console.log(`${numero} x ${i} = ${numero * i}`);
}

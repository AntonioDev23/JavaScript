const readline = require('readline-sync');

let numero = parseInt(readline.question("Digite um número positivo: "));
let soma = 0;
let i = 1;

while (i <= numero) {
    soma += i;
    i++;
}

console.log(`A soma de 1 até ${numero} é ${soma}.`);

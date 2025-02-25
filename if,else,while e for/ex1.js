const readline = require('readline-sync'); // Importa readline-sync

let numero = parseInt(readline.question("Digite um número: "));

if (numero % 2 === 0) {
    console.log(`${numero} é par.`);
} else {
    console.log(`${numero} é ímpar.`);
}

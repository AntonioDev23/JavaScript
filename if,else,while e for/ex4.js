const readline = require('readline-sync');

let numero = parseInt(readline.question("Digite um número para ver a tabuada: "));

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

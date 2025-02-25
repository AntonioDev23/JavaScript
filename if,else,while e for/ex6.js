const readline = require('readline-sync');

let numero = parseInt(readline.question("Digite um número: "));
let ehPrimo = true;

if (numero < 2) {
    ehPrimo = false;
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }
}

if (ehPrimo) {
    console.log(`${numero} é primo.`);
} else {
    console.log(`${numero} não é primo.`);
}


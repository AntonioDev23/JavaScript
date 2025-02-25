// Pede um número ao usuário e converte para inteiro
let numero = parseInt(prompt("Digite um número:"));

// Verifica se o número é divisível por 2 (par)
if (numero % 2 === 0) {
    console.log(`${numero} é par.`);
} else { // Caso contrário, é ímpar
    console.log(`${numero} é ímpar.`);
}


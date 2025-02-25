const readline = require('readline-sync');

let senha;

do {
    senha = readline.question("Digite a senha: ");
} while (senha !== "1234");

console.log("Acesso permitido.");

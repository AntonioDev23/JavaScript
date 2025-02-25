// Importa o módulo readline-sync para receber entrada do usuário no Node.js
const readline = require('readline-sync');

// Declara a variável 'senha' sem inicializá-la
let senha;

// Executa o bloco de código pelo menos uma vez
do {
    // Solicita ao usuário que insira a senha
    senha = readline.question("Digite a senha: ");
    // Continua solicitando a senha enquanto a entrada for diferente de "1234"
} while (senha !== "1234");

// Quando a senha correta é inserida, exibe a mensagem de acesso permitido
console.log("Acesso permitido.");

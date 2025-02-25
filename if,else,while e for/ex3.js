let senha; // Variável para armazenar a senha digitada

// O loop `do while` garante que o código execute pelo menos uma vez
do {
    senha = prompt("Digite a senha:"); // Pede a senha ao usuário
} while (senha !== "1234"); // Repete enquanto a senha for incorreta

console.log("Acesso permitido."); // Exibe mensagem ao acertar a senha

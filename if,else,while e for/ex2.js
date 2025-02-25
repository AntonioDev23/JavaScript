// Pede um número ao usuário e converte para inteiro
let numero = parseInt(prompt("Digite um número positivo:"));

// Inicializa a variável soma para armazenar o resultado
let soma = 0;

// Inicializa um contador começando em 1
let i = 1;

// Enquanto o contador for menor ou igual ao número informado
while (i <= numero) {
    soma += i; // Adiciona o valor de i à soma
    i++; // Incrementa o contador
}

// Exibe o resultado final da soma
console.log(`A soma de 1 até ${numero} é ${soma}.`);

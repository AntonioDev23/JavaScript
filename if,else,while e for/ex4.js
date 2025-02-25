// Pede ao usuário um número para gerar a tabuada
let numero = parseInt(prompt("Digite um número para ver a tabuada:"));

// Loop `for` que percorre de 1 até 10
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`); // Exibe a multiplicação
}

// Seleciona o campo de entrada onde os números e operadores aparecem
let display = document.getElementById('display');

// Armazena o valor atual digitado pelo usuário
let currentInput = '' ;

// Adiciona um número ou operador ao campo de entrada
function appendNumber(appendNumber) {
    display.value += number; // Concatena o número clicado ao valor atual do display
}

function appendOperator(operator) {
    display.value += operator; // Adiciona o operador ao display
}


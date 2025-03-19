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

// Limpa completamente o campo de entrada
function clearDisplay() {
    display.value = ""; // Define o valor do display como vazio
    currentInput = ''; // Reseta também a variável de controle
}

// Remove o último caractere digitado
function deleteLast() {
    display.value = display.value.slice(0, -1); // Remove o último caractere
    currentInput = currentInput.slice(0, -1); // Atualiza a variável de controle
}

// Calcula o resultado da expressão digitada no display
function calculate() {
    try {
        display.value = eval(display.value); // Usa eval() para avaliar a expressão matemática
        currentInput = display.value; // Atualiza a variável com o resultado
    } catch (error) {
        display.value = "Erro"; // Se houver erro na expressão, exibe "Erro"
    }
}

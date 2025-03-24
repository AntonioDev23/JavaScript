// Seleciona o campo de entrada onde os números e operadores aparecem
let display = document.getElementById('display');

// Armazena o valor atual digitado pelo usuário
let currentInput = '';

// Adiciona um número ao campo de entrada
function appendNumber(number) {
    display.value += number; // Concatena o número digitado ao valor atual do display
}

// Adiciona um operador ao campo de entrada
function appendOperator(operator) {
    display.value += operator; // Concatena o operador ao valor atual do display
}

// Limpa completamente o campo de entrada
function clearDisplay() {
    display.value = ""; // Limpa o display
    currentInput = ''; // Reseta a variável de controle
}

// Calcula o resultado da expressão digitada no display
function calculate() {
    try {
        display.value = eval(display.value); // Avalia a expressão matemática no display
        currentInput = display.value; // Atualiza a variável com o resultado
    } catch (error) {
        display.value = "Erro"; // Exibe "Erro" se houver um erro na expressão
    }
}

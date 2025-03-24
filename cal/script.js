// Seleciona o campo de entrada onde os números e operadores aparecem
let display = document.getElementById('display');

// Adiciona um número ao campo de entrada
function appendNumber(number) {
    display.value += number; // Concatena o número clicado ao valor atual do display
}

// Adiciona um operador ao campo de entrada
function appendOperator(operator) {
    display.value += operator; // Adiciona o operador ao display
}

// Limpa completamente o campo de entrada
function clearDisplay() {
    display.value = ""; // Define o valor do display como vazio
}

// Remove o último caractere digitado
function deleteLast() {
    display.value = display.value.slice(0, -1); // Remove o último caractere
}

// Calcula o resultado da expressão digitada no display
function calculate() {
    try {
        display.value = eval(display.value); // Usa eval() para avaliar a expressão matemática
    } catch (error) {
        display.value = "Erro"; // Se houver erro na expressão, exibe "Erro"
    }
}


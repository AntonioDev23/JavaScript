const display = document.getElementById('display');
let currentExpression = '';

function appendToDisplay(value) {
    const lastChar = currentExpression.slice(-1);
    const operators = ['+', '-', '*', '/', '%'];
    
    // Validações
    if (value === '.' && currentExpression.includes('.')) return;
    if (operators.includes(value) && operators.includes(lastChar)) return;
    
    currentExpression += value;
    display.value = currentExpression;
}

function clearDisplay() {
    currentExpression = '';
    display.value = '';
}

function backspace() {
    currentExpression = currentExpression.slice(0, -1);
    display.value = currentExpression;
}

function calculate() {
    try {
        // Substitui % por /100
        let expression = currentExpression.replace(/%/g, '/100');
        const result = Function(`'use strict'; return (${expression})`)();
        display.value = Number.isInteger(result) ? result : parseFloat(result.toFixed(10));
        currentExpression = display.value.toString();
    } catch {
        display.value = "Erro";
        currentExpression = '';
    }
}

// Event listeners dinâmicos
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        
        if (button.classList.contains('num-btn') || button.classList.contains('op-btn')) {
            appendToDisplay(value);
        } else if (value === 'C') {
            clearDisplay();
        } else if (value === '⌫') {
            backspace();
        } else if (value === '=') {
            calculate();
        } else if (value === '%') {
            appendToDisplay(value);
        }
    });
});

// Suporte a teclado
document.addEventListener('keydown', (e) => {
    if (/[0-9.]/.test(e.key)) {
        appendToDisplay(e.key);
    } else if (/[+\-*/]/.test(e.key)) {
        appendToDisplay(e.key);
    } else if (e.key === 'Enter' || e.key === '=') {
        calculate();
    } else if (e.key === 'Escape') {
        clearDisplay();
    } else if (e.key === 'Backspace') {
        backspace();
    }
});
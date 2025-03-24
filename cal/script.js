const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
let currentExpression = '';

// Função principal para adicionar valores ao display
function appendToDisplay(value) {
    const lastChar = currentExpression.slice(-1);
    const operators = ['+', '-', '*', '/', '%'];
    
    // Validações
    if (value === '.' && currentExpression.includes('.')) return;
    if (operators.includes(value) && operators.includes(lastChar)) return;
    if (value === '%' && !/\d$/.test(currentExpression)) return;
    
    currentExpression += value;
    display.value = currentExpression;
}

// Função segura para cálculo
function calculate() {
    try {
        // Substitui % por /100 antes do cálculo
        let expression = currentExpression.replace(/%/g, '/100');
        
        // Calcula com precisão decimal
        const result = Function(`'use strict'; return (${expression})`)();
        
        // Formata o resultado
        display.value = Number.isInteger(result) ? result : parseFloat(result.toFixed(10));
        currentExpression = display.value.toString();
    } catch {
        display.value = "Erro";
        currentExpression = '';
    }
}

// Limpar display
function clearDisplay() {
    currentExpression = '';
    display.value = '';
}

// Apagar último caractere
function backspace() {
    currentExpression = currentExpression.slice(0, -1);
    display.value = currentExpression;
}

// Mapeamento de botões
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        
        switch(value) {
            case '=':
                calculate();
                break;
            case 'C':
                clearDisplay();
                break;
            case '⌫':
                backspace();
                break;
            default:
                appendToDisplay(value);
        }
    });
});

// Suporte a teclado
document.addEventListener('keydown', (e) => {
    if (/[0-9.%+\-*/]/.test(e.key)) {
        appendToDisplay(e.key);
    } else if (e.key === 'Enter' || e.key === '=') {
        calculate();
    } else if (e.key === 'Escape') {
        clearDisplay();
    } else if (e.key === 'Backspace') {
        backspace();
    }
});

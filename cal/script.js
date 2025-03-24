const display = document.getElementById('display');
let currentValue = '';

// Função para atualizar o display
function updateDisplay() {
    display.value = currentValue || '0';
}

// Adiciona eventos a todos os botões
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        
        if (button.classList.contains('num')) {
            // Se for zero, evita múltiplos zeros no início
            if (value === '0' && currentValue === '0') return;
            currentValue += value;
        }
        else if (button.classList.contains('op') && value !== '=') {
            // Evita operadores consecutivos
            const lastChar = currentValue.slice(-1);
            if (['+', '-', '×', '/', '%'].includes(lastChar)) return;
            currentValue += value;
        }
        else if (value === 'C') {
            currentValue = '';
        }
        else if (value === '⌫') {
            currentValue = currentValue.slice(0, -1);
        }
        else if (value === '=') {
            try {
                // Substitui × por * para o cálculo
                currentValue = eval(currentValue.replace(/×/g, '*')).toString();
            } catch {
                currentValue = 'Erro';
            }
        }
        else if (value === '%') {
            currentValue = (parseFloat(currentValue) / 100).toString();
        }

        updateDisplay();
    });
});

// Suporte a teclado
document.addEventListener('keydown', (e) => {
    const key = e.key;
    
    // Mapeia teclas para ações
    const keyActions = {
        '0': () => currentValue += '0',
        '1': () => currentValue += '1',
        '2': () => currentValue += '2',
        '3': () => currentValue += '3',
        '4': () => currentValue += '4',
        '5': () => currentValue += '5',
        '6': () => currentValue += '6',
        '7': () => currentValue += '7',
        '8': () => currentValue += '8',
        '9': () => currentValue += '9',
        '.': () => currentValue += '.',
        '+': () => currentValue += '+',
        '-': () => currentValue += '-',
        '*': () => currentValue += '×',
        '/': () => currentValue += '/',
        'Enter': () => {
            try {
                currentValue = eval(currentValue.replace(/×/g, '*')).toString();
            } catch {
                currentValue = 'Erro';
            }
        },
        'Backspace': () => currentValue = currentValue.slice(0, -1),
        'Escape': () => currentValue = ''
    };

    if (keyActions[key]) {
        e.preventDefault();
        keyActions[key]();
        updateDisplay();
    }
});
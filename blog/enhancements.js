
// 1.1 Foco melhorado para navegação por teclado
document.addEventListener('keyup', (e) => {
    if (e.key === 'Tab') {
        const focusedElement = document.activeElement;
        focusedElement.classList.add('keyboard-focus');
        focusedElement.addEventListener('blur', () => {
            focusedElement.classList.remove('keyboard-focus');
        });
    }
});

// 1.2 Alternar entre tamanhos de fonte
function adjustFontSize(change) {
    const html = document.documentElement;
    const currentSize = parseFloat(window.getComputedStyle(html).fontSize);
    html.style.fontSize = `${currentSize + change}px`;
}

// 1.3 Contraste aumentado
function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
    localStorage.setItem('highContrast', document.body.classList.contains('high-contrast'));
}
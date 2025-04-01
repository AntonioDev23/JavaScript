
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

// 2.1 Sistema de favoritos/localStorage
function toggleFavorite(articleId) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.indexOf(articleId);
    
    if (index === -1) {
        favorites.push(articleId);
    } else {
        favorites.splice(index, 1);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButtons();
}

// 2.2 Tempo estimado de leitura
function calculateReadingTime() {
    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        const text = article.textContent;
        const wordCount = text.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // 200 palavras/minuto
        const readingTimeElement = document.createElement('div');
        readingTimeElement.className = 'reading-time';
        readingTimeElement.textContent = `⏱️ ${readingTime} min de leitura`;
        article.insertBefore(readingTimeElement, article.firstChild);
    });
}

// 3.1 Modal para imagens
function initImageModal() {
    const images = document.querySelectorAll('article img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'image-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                    <p>${img.getAttribute('longdesc') || img.alt}</p>
                </div>
            `;
            document.body.appendChild(modal);
            
            modal.querySelector('.close-modal').addEventListener('click', () => {
                modal.remove();
            });
        });
    });
}

// 3.2 Filtro de artigos por tags
function filterArticlesByTag(tag) {
    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        const articleTags = Array.from(article.querySelectorAll('[rel="tag"]'))
                               .map(t => t.textContent.toLowerCase());
        if (tag === 'all' || articleTags.includes(tag.toLowerCase())) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}


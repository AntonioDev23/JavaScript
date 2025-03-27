// Controle dos players de áudio
const audioControls = {
    'ia': {
        play: document.getElementById('play-ia'),
        pause: document.getElementById('pause-ia'),
        audio: document.getElementById('ia-audio'),
        status: document.getElementById('ia-audio-status')
    },
    'web': {
        play: document.getElementById('play-web'),
        pause: document.getElementById('pause-web'),
        audio: document.getElementById('web-audio'),
        status: document.getElementById('web-audio-status')
    },
    'quantica': {
        play: document.getElementById('play-quantica'),
        pause: document.getElementById('pause-quantica'),
        audio: document.getElementById('quantica-audio'),
        status: document.getElementById('quantica-audio-status')
    }
};

// Configura os controles de áudio
Object.keys(audioControls).forEach(key => {
    const control = audioControls[key];
    
    control.play.addEventListener('click', () => {
        control.audio.play();
        control.status.textContent = 'Reproduzindo...';
    });
    
    control.pause.addEventListener('click', () => {
        control.audio.pause();
        control.status.textContent = 'Pausado';
    });
    
    control.audio.addEventListener('ended', () => {
        control.status.textContent = 'Reprodução concluída';
    });
});

// Controle do tema (dark/light mode)
const toggleTheme = document.getElementById('toggle-theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Verifica o tema preferido do sistema
if (prefersDarkScheme.matches) {
    document.body.classList.add('dark-mode');
    toggleTheme.setAttribute('aria-pressed', 'true');
    toggleTheme.textContent = 'Alternar para Modo Claro';
}

// Alternar tema manualmente
toggleTheme.addEventListener('click', () => {
    const isPressed = toggleTheme.getAttribute('aria-pressed') === 'true';
    
    if (isPressed) {
        document.body.classList.remove('dark-mode');
        toggleTheme.setAttribute('aria-pressed', 'false');
        toggleTheme.textContent = 'Alternar para Modo Escuro';
    } else {
        document.body.classList.add('dark-mode');
        toggleTheme.setAttribute('aria-pressed', 'true');
        toggleTheme.textContent = 'Alternar para Modo Claro';
    }
});

// Simulação de integração com LIBRAS (normalmente usaria uma API como VLibras)
const librasToggle = document.getElementById('libras-toggle');
const librasContainer = document.getElementById('libras-container');

librasToggle.addEventListener('click', () => {
    const isActive = librasContainer.classList.toggle('visually-hidden');
    
    if (isActive) {
        librasContainer.innerHTML = '';
        librasToggle.setAttribute('aria-label', 'Abrir tradutor para LIBRAS');
    } else {
        librasContainer.innerHTML = `
            <div style="background: white; color: black; padding: 10px; border-radius: 5px;">
                <h3>Tradutor LIBRAS</h3>
                <p>Para tradução completa em LIBRAS, recomendamos o uso do plugin VLibras.</p>
                <button onclick="window.open('https://www.vlibras.gov.br/', '_blank')">Instalar VLibras</button>
            </div>
        `;
        librasToggle.setAttribute('aria-label', 'Fechar tradutor para LIBRAS');
    }
});

// Adiciona descrições longas como tooltips acessíveis
document.querySelectorAll('[longdesc]').forEach(img => {
    const descId = img.getAttribute('longdesc');
    const descContent = document.querySelector(descId).textContent;
    
    img.setAttribute('aria-describedby', descId);
    
    // Tooltip acessível
    img.addEventListener('focus', () => {
        const tooltip = document.createElement('div');
        tooltip.id = 'image-tooltip';
        tooltip.style.position = 'absolute';
        tooltip.style.background = 'rgba(0,0,0,0.8)';
        tooltip.style.color = 'white';
        tooltip.style.padding = '10px';
        tooltip.style.borderRadius = '5px';
        tooltip.style.maxWidth = '300px';
        tooltip.style.zIndex = '1000';
        tooltip.textContent = descContent;
        
        document.body.appendChild(tooltip);
        
        const rect = img.getBoundingClientRect();
        tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
        tooltip.style.left = `${rect.left}px`;
    });
    
    img.addEventListener('blur', () => {
        const tooltip = document.getElementById('image-tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});

// Atualiza o tema quando as preferências do sistema mudam
prefersDarkScheme.addEventListener('change', e => {
    if (e.matches) {
        document.body.classList.add('dark-mode');
        toggleTheme.setAttribute('aria-pressed', 'true');
        toggleTheme.textContent = 'Alternar para Modo Claro';
    } else {
        document.body.classList.remove('dark-mode');
        toggleTheme.setAttribute('aria-pressed', 'false');
        toggleTheme.textContent = 'Alternar para Modo Escuro';
    }
});
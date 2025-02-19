// Função para definir o tema com base no horário
function definirTema() {
    const agora = new Date();
    const hora = agora.getHours();
    const body = document.body;
    const imagem = document.getElementById("imagem");

    // Define o tema com base no horário
    if (hora >= 6 && hora < 12) {
        // Manhã (6h - 11h59)
        body.style.backgroundColor = "#87CEEB"; // Azul claro
        imagem.src = "manha.jpg"; // Imagem da manhã
    } else if (hora >= 12 && hora < 18) {
        // Tarde (12h - 17h59)
        body.style.backgroundColor = "#FFA500"; // Laranja
        imagem.src = "tarde.jpg"; // Imagem da tarde
    } else {
        // Noite (18h - 5h59)
        body.style.backgroundColor = "#2C3E50"; // Azul escuro
        imagem.src = "noite.jpg"; // Imagem da noite
    }
}

// Executa a função ao carregar a página
definirTema();

// Atualiza o tema a cada minuto (opcional)
setInterval(definirTema, 60000);
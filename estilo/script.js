function definirTema() {
    const agora = new Date();
    const hora = agora.getHours();
    const minutos = agora.getMinutes();
    const body = document.body;
    const imagem = document.getElementById("imagem");
    const mensagem = document.getElementById("mensagem");

    // Formata a hora para exibir sempre dois dígitos (ex: 09:05)
    const horaFormatada = String(hora).padStart(2, "0");
    const minutosFormatados = String(minutos).padStart(2, "0");

    // Define o tema com base no horário
    if (hora >= 6 && hora < 12) {
        // Manhã (6h - 11h59)
        body.style.backgroundColor = "#87CEEB"; // Azul claro
        imagem.src = "/Guanabara/imagens/istockphoto-491701259-612x612.jpg"; // Imagem da manhã
        mensagem.textContent = `Bom dia! Agora são ${horaFormatada}:${minutosFormatados}.`;
    } else if (hora >= 12 && hora < 18) {
        // Tarde (12h - 17h59)
        body.style.backgroundColor = "#FFA500"; // Laranja
        imagem.src = "/Guanabara/imagens/depositphotos_1654642-stock-photo-desert-sunset.jpg"; // Imagem da tarde
        mensagem.textContent = `Boa tarde! Agora são ${horaFormatada}:${minutosFormatados}.`;
    } else {
        // Noite (18h - 5h59)
        body.style.backgroundColor = "#2C3E50"; // Azul escuro
        imagem.src = "/Guanabara/imagens/4125202-panorama-da-noite-ceu-com-nuvens-e-lua-cheia-foto.jpg"; // Imagem da noite
        mensagem.textContent = `Boa noite! Agora são ${horaFormatada}:${minutosFormatados}.`;
    }
}

// Executa a função ao carregar a página
definirTema();

// Atualiza o tema a cada minuto (opcional)
setInterval(definirTema, 60000);
// Função para definir o tema com base no horário
function definirTema() {
    const agora = new Date();
    const hora = agora.getHours();
    const minutos = agora.getMinutes();
    const body = document.body;
    const imagem = document.getElementById("imagem");
    const mensagem = document.getElementById("mensagem");
    const videoFundo = document.getElementById("videoFundo");
    const somAmbiente = document.getElementById("somAmbiente");

    // Formata a hora para exibir sempre dois dígitos (ex: 09:05)
    const horaFormatada = String(hora).padStart(2, "0");
    const minutosFormatados = String(minutos).padStart(2, "0");

    // Define o tema com base no horário
    if (hora >= 6 && hora < 12) {
        // Manhã (6h - 11h59)
        body.style.backgroundColor = "#87CEEB";
        imagem.src = "manha.jpg";
        videoFundo.src = "videos/manha.mp4";
        somAmbiente.src = "sons/manha.mp3";
        mensagem.textContent = `Bom dia! Agora são ${horaFormatada}:${minutosFormatados}. Que tal um café para começar o dia?`;
    } else if (hora >= 12 && hora < 18) {
        // Tarde (12h - 17h59)
        body.style.backgroundColor = "#FFA500";
        imagem.src = "tarde.jpg";
        videoFundo.src = "videos/tarde.mp4";
        somAmbiente.src = "sons/tarde.mp3";
        mensagem.textContent = `Boa tarde! Agora são ${horaFormatada}:${minutosFormatados}. Hora de uma pausa para relaxar.`;
    } else {
        // Noite (18h - 5h59)
        body.style.backgroundColor = "#2C3E50";
        imagem.src = "noite.jpg";
        videoFundo.src = "videos/noite.mp4";
        somAmbiente.src = "sons/noite.mp3";
        mensagem.textContent = `Boa noite! Agora são ${horaFormatada}:${minutosFormatados}. Aproveite para descansar.`;
    }

    // Inicia o vídeo e o som
    videoFundo.play();
    somAmbiente.play();

    // Verifica se a imagem foi carregada corretamente
    imagem.onerror = function() {
        console.error("Erro ao carregar a imagem: " + imagem.src);
        imagem.src = "placeholder.jpg"; // Use uma imagem de fallback
    };
}

// Função para alternar entre modo escuro e claro
const botaoModo = document.getElementById("alternarModo");
botaoModo.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");
});

// Função para selecionar o tema manualmente
const selecionarTema = document.getElementById("selecionarTema");
selecionarTema.addEventListener("change", (evento) => {
    const tema = evento.target.value;
    if (tema === "auto") {
        definirTema(); // Volta ao tema automático
    } else {
        definirTemaManual(tema); // Define o tema manualmente
    }
});

function definirTemaManual(tema) {
    const body = document.body;
    const imagem = document.getElementById("imagem");
    const videoFundo = document.getElementById("videoFundo");
    const somAmbiente = document.getElementById("somAmbiente");

    if (tema === "manha") {
        body.style.backgroundColor = "#87CEEB";
        imagem.src = "/Guanabara/imagens/istockphoto-491701259-612x612.jpg";
        videoFundo.src = "videos/manha.mp4";
        somAmbiente.src = "sons/manha.mp3";
    } else if (tema === "tarde") {
        body.style.backgroundColor = "#FFA500";
        imagem.src = "/Guanabara/imagens/depositphotos_1654642-stock-photo-desert-sunset.jpg";
        videoFundo.src = "videos/tarde.mp4";
        somAmbiente.src = "sons/tarde.mp3";
    } else if (tema === "noite") {
        body.style.backgroundColor = "#2C3E50";
        imagem.src = "/Guanabara/imagens/4125202-panorama-da-noite-ceu-com-nuvens-e-lua-cheia-foto.jpg";
        videoFundo.src = "videos/noite.mp4";
        somAmbiente.src = "sons/noite.mp3";
    }

    // Inicia o vídeo e o som
    videoFundo.play();
    somAmbiente.play();
}

// Executa a função ao carregar a página
definirTema();

// Atualiza o tema a cada minuto (opcional)
setInterval(definirTema, 60000);

const videoFundo = document.getElementById("videoFundo");
const imagem = document.getElementById("imagem");
const mensagem = document.getElementById("mensagem");
const selecionarTema = document.getElementById("selecionarTema");
const botaoModo = document.getElementById("alternarModo");

// Função para definir o tema com base no horário
function definirTema() {
    const agora = new Date();
    const hora = agora.getHours();
    const minutos = agora.getMinutes();
    const horaFormatada = String(hora).padStart(2, "0");
    const minutosFormatados = String(minutos).padStart(2, "0");

    if (hora >= 6 && hora < 12) {
        // Manhã
        videoFundo.src = "https://www.youtube.com/embed/s95M-a1iVls?autoplay=1&mute=1&loop=1&playlist=s95M-a1iVls";
        imagem.src = "/Guanabara/imagens/istockphoto-491701259-612x612.jpg";
        mensagem.textContent = `Bom dia! Agora são ${horaFormatada}:${minutosFormatados}.`;
    } else if (hora >= 12 && hora < 18) {
        // Tarde
        videoFundo.src = "https://www.youtube.com/embed/OUTRO_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=OUTRO_VIDEO_ID";
        imagem.src = "tarde.jpg";
        mensagem.textContent = `Boa tarde! Agora são ${horaFormatada}:${minutosFormatados}.`;
    } else {
        // Noite
        videoFundo.src = "https://www.youtube.com/embed/OUTRO_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=OUTRO_VIDEO_ID";
        imagem.src = "noite.jpg";
        mensagem.textContent = `Boa noite! Agora são ${horaFormatada}:${minutosFormatados}.`;
    }
}

// Função para alternar entre modo claro e escuro
botaoModo.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");
});

// Função para selecionar o tema manualmente
selecionarTema.addEventListener("change", (evento) => {
    const tema = evento.target.value;
    if (tema === "auto") {
        definirTema(); // Volta ao tema automático
    } else {
        definirTemaManual(tema); // Define o tema manualmente
    }
});

function definirTemaManual(tema) {
    if (tema === "manha") {
        videoFundo.src = "https://www.youtube.com/embed/s95M-a1iVls?autoplay=1&mute=1&loop=1&playlist=s95M-a1iVls";
        imagem.src = "manha.jpg";
    } else if (tema === "tarde") {
        videoFundo.src = "https://www.youtube.com/embed/OUTRO_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=OUTRO_VIDEO_ID";
        imagem.src = "tarde.jpg";
    } else if (tema === "noite") {
        videoFundo.src = "https://www.youtube.com/embed/OUTRO_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=OUTRO_VIDEO_ID";
        imagem.src = "noite.jpg";
    }
}

// Inicializa o tema ao carregar a página
definirTema();
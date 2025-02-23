
const videoFundo = document.getElementById("videoFundo");
const mensagem = document.getElementById("mensagem");
const selecionarTema = document.getElementById("selecionarTema");
const botaoModo = document.getElementById("alternarModo");
const ativarSom = document.getElementById("ativarSom");
let player;

// Função para carregar o player do YouTube
function onYouTubeIframeAPIReady() {
    player = new YT.Player('videoFundo', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    ativarSom.addEventListener("click", () => {
        player.unMute(); // Ativa o som
        player.playVideo(); // Garante que o vídeo continue tocando
    });
}

// Carrega a API do YouTube
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

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
        mensagem.textContent = `Bom dia! Agora são ${horaFormatada}:${minutosFormatados}.`;
    } else if (hora >= 12 && hora < 18) {
        // Tarde
        videoFundo.src = "https://www.youtube.com/embed/SvZFAbMPCfk?autoplay=1&mute=1&loop=1&playlist=SvZFAbMPCfk";
        mensagem.textContent = `Boa tarde! Agora são ${horaFormatada}:${minutosFormatados}.`;
    } else {
        // Noite
        videoFundo.src = "https://www.youtube.com/embed/ofGkvw8lvmE?autoplay=1&mute=1&loop=1&playlist=ofGkvw8lvmE";
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
    if (tema === "manhã") {
        videoFundo.src = "https://www.youtube.com/embed/s95M-a1iVls?autoplay=1&mute=1&loop=1&playlist=s95M-a1iVls";
    } else if (tema === "tarde") {
        videoFundo.src = "https://www.youtube.com/embed/SvZFAbMPCfk?autoplay=1&mute=1&loop=1&playlist=SvZFAbMPCfk";
    } else if (tema === "noite") {
        videoFundo.src = "https://www.youtube.com/embed/ofGkvw8lvmE?autoplay=1&mute=1&loop=1&playlist=ofGkvw8lvmE";
    }
}

// Inicializa o tema ao carregar a página
definirTema();
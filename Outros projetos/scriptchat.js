
let userName = "";  // Variável para armazenar o nome do usuário

// Função para mostrar as mensagens na tela
function displayMessage(message, sender = 'bot') {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    document.getElementById('messages').appendChild(messageElement);
    document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
}

// Função que processa a entrada do usuário
function getBotResponse(userInput) {
    const normalizedInput = userInput.toLowerCase();

    // Respostas de saudação
    if (normalizedInput.includes("oi") || normalizedInput.includes("olá")) {
        return "Olá! Como posso ajudar você hoje?";
    }

    // Respostas de despedida
    if (normalizedInput.includes("tchau") || normalizedInput.includes("adeus")) {
        return "Até logo! Volte quando quiser!";
    }

    // Resposta para perguntar o nome
    if (normalizedInput.includes("qual seu nome?")) {
        return "Eu sou um chatbot! E você, qual é o seu nome?";
    }

    // Armazenar o nome do usuário
    if (normalizedInput.includes("meu nome é") && userName === "") {
        userName = userInput.replace("meu nome é", "").trim();
        return `Prazer em te conhecer, ${userName}! Como posso ajudar?`;
    }

    // Perguntas sobre humor
    if (normalizedInput.includes("como você está?")) {
        return "Estou funcionando bem, obrigado por perguntar!";
    }

    // Resposta de ajuda
    if (normalizedInput.includes("ajuda") || normalizedInput.includes("socorro")) {
        return "Posso te ajudar com perguntas sobre o chatbot. O que você quer saber?";
    }

    // Resposta aleatória (sobre algo engraçado)
    if (normalizedInput.includes("piada") || normalizedInput.includes("engraçado")) {
        const jokes = [
            "Por que o computador foi ao médico? Porque estava com um vírus!",
            "O que o zero disse para o oito? Belo cinto!",
            "Como o elétron atende o telefone? 'Alô!'"
        ];
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        return randomJoke;
    }

    // Resposta padrão para desconhecido
    return "Desculpe, não entendi sua pergunta. Você pode reformular?";
}

// Função chamada quando o usuário clica em "Enviar"
function sendMessage() {
    const userInput = document.getElementById('userInput').value.trim();
    
    if (userInput === "") return;

    // Exibe a mensagem do usuário
    displayMessage(userInput, 'user');
    
    // Resposta do bot
    const botResponse = getBotResponse(userInput);
    displayMessage(botResponse);
    
    // Limpa o campo de entrada
    document.getElementById('userInput').value = "";
}

// Adicionar evento para enviar mensagem ao pressionar Enter
document.getElementById('userInput').addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

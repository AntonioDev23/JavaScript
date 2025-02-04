
// Função para enviar a mensagem
function sendMessage() {
    // Pega o valor digitado pelo usuário
    const userInput = document.getElementById("userInput").value;
  
    // Exibe a mensagem do usuário no chat
    displayMessage(userInput, 'user');
  
    // Resposta do chatbot
    let botResponse = getBotResponse(userInput);
  
    // Exibe a resposta do chatbot no chat
    displayMessage(botResponse, 'bot');
  
    // Limpa o campo de entrada
    document.getElementById("userInput").value = '';
  }
  
  // Função para exibir a mensagem no chat
  function displayMessage(message, sender) {
    const messagesDiv = document.getElementById("messages");
  
    // Cria o elemento de mensagem
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender);
    messageElement.textContent = message;
  
    // Adiciona a mensagem à lista de mensagens
    messagesDiv.appendChild(messageElement);
  
    // Rola para baixo para mostrar a nova mensagem
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
  
  // Função para gerar a resposta do chatbot
  function getBotResponse(userInput) {
    const lowerInput = userInput.toLowerCase(); // Converte a entrada para minúsculas
  
    // Respostas baseadas em palavras-chave mais específicas
    if (lowerInput.includes('olá') || lowerInput.includes('oi')) {
      return "Olá! Como posso te ajudar?";
    } else if (lowerInput.includes('tudo bem') || lowerInput.includes('como vai')) {
      return "Estou bem, obrigado por perguntar!";
    } else if (lowerInput.includes('nome') || lowerInput.includes('quem é você')) {
      return "Sou um chatbot simples feito para conversar com você!";
    } else if (lowerInput.includes('tchau')) {
      return "Tchau! Espero ter ajudado.";
    } else if (lowerInput.includes('quantos anos você tem') || lowerInput.includes('idade')) {
      return "Eu sou atemporal! Não tenho idade.";
    } else if (lowerInput.includes('onde você mora')) {
      return "Eu não tenho um lugar fixo, vivo na internet!";
    } else {
      return "Desculpe, não entendi sua mensagem. Você pode reformular?";
    }
  }
  
  // Evento para capturar pressionamento da tecla Enter
  document.getElementById("userInput").addEventListener("keypress", function(event) {
    // Verifica se a tecla pressionada foi Enter
    if (event.key === "Enter") {
      event.preventDefault();  // Impede o comportamento padrão do Enter (como enviar o formulário)
      sendMessage();  // Envia a mensagem
    }
  });
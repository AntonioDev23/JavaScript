
const apiKey = ' [REMOVIDO]'; // Substitua com a sua chave API

        async function sendMessage() {
            const userInput = document.getElementById('userInput').value;
            const messagesDiv = document.getElementById('messages');

            if (userInput.trim() === "") return; // Evitar envio de input vazio

            // Adiciona a mensagem do usuário na tela
            addMessage(userInput, 'user');

            // Limpa o campo de input
            document.getElementById('userInput').value = '';

            try {
                // Envia a mensagem para a API
                const response = await fetch('https://api.exemplo.com/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`,
                    },
                    body: JSON.stringify({ message: userInput })
                });

                // Verifica se a resposta da API foi bem-sucedida
                if (!response.ok) {
                    throw new Error('Erro ao obter resposta da API');
                }

                // Processa a resposta
                const data = await response.json();
                const botResponse = data.response || "Desculpe, não entendi sua pergunta.";

                // Adiciona a resposta do bot na tela
                addMessage(botResponse, 'bot');
            } catch (error) {
                console.error(error);
                addMessage("Erro ao se comunicar com a API.", 'bot');
            }
        }

        // Função para adicionar mensagens à interface
        function addMessage(text, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', sender);
            messageDiv.textContent = text;
            document.getElementById('messages').appendChild(messageDiv);

            // Rola para o final da conversa
            document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
        }
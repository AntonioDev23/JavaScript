document.addEventListener('DOMContentLoaded', function() {
    // Garante que o código JavaScript seja executado após o carregamento completo da página.
    const cityInput = document.getElementById('cityInput'); // Campo de entrada para a cidade.
    const searchButton = document.getElementById('searchButton'); // Botão de pesquisa.
    const weatherInfo = document.getElementById('weatherInfo'); // Área para exibir informações do clima.
    const apiKey = ''; // Sua chave de API da OpenWeatherMap (substitua pela sua chave).

    // Adiciona um evento de clique ao botão de pesquisa:
    searchButton.addEventListener('click', function() {
        const city = cityInput.value.trim(); // Obtém a cidade digitada e remove espaços extras.
        if (city) { // Verifica se a cidade foi digitada.
            getWeatherData(city); // Chama a função para buscar os dados do clima.
        }
    });

    // Função para buscar os dados do clima da API:
    function getWeatherData(city) {
        // Monta a URL da API com a cidade, chave de API e unidades métricas.
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

        // Faz a requisição à API usando fetch:
        fetch(apiUrl)
            .then(response => response.json()) // Converte a resposta para JSON.
            .then(data => {
                // Verifica se a cidade foi encontrada (código 404):
                if (data.cod === '404') {
                    weatherInfo.innerHTML = '<p>Cidade não encontrada.</p>';
                } else {
                    // Se a cidade foi encontrada, exibe os dados do clima.
                    displayWeatherData(data);
                }
            })
            .catch(error => {
                // Lida com erros na requisição à API.
                console.error('Erro ao obter dados:', error);
                weatherInfo.innerHTML = '<p>Erro ao obter dados do clima.</p>';
            });
    }

    // Função para exibir os dados do clima na página:
    function displayWeatherData(data) {
        // Extrai os dados relevantes do objeto de resposta da API.
        const { name, main, weather } = data;
        const temperature = main.temp; // Temperatura em graus Celsius.
        const description = weather[0].description; // Descrição do clima.

        // Atualiza o conteúdo da área de informações do clima:
        weatherInfo.innerHTML = `
            <h2>${name}</h2>
            <p>Temperatura: ${temperature}°C</p>
            <p>Descrição: ${description}</p>
        `;
    }
});
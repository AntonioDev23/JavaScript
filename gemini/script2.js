document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos HTML relevantes do labirinto.
    const personagem = document.querySelector('.personagem');
    const labirinto = document.querySelector('.labirinto');
    const saida = document.querySelector('.saida');

    // Função para criar obstáculos (paredes) no labirinto.
    function createWall(x, y, width, height) {
        const wall = document.createElement('div'); // Cria um novo elemento div.
        wall.classList.add('wall'); // Adiciona a classe 'wall' para estilização CSS.
        wall.style.left = x + 'px'; // Define a posição horizontal do obstáculo.
        wall.style.top = y + 'px'; // Define a posição vertical do obstáculo.
        wall.style.width = width + 'px'; // Define a largura do obstáculo.
        wall.style.height = height + 'px'; // Define a altura do obstáculo.
        labirinto.appendChild(wall); // Adiciona o obstáculo ao labirinto.
    }

    // Cria obstáculos (paredes) no labirinto:
    createWall(50, 50, 10, 200); // Cria uma parede vertical.
    createWall(150, 50, 200, 10); // Cria uma parede horizontal.
    createWall(340, 50, 10, 200); // Cria outra parede vertical.

    // Cria obstáculos adicionais:
    createWall(100, 100, 50, 50); // Cria um obstáculo quadrado.
    createWall(250, 250, 80, 20); // Cria um obstáculo retangular.

    // Função para verificar colisões entre dois elementos HTML.
    function checkCollision(element1, element2) {
        const rect1 = element1.getBoundingClientRect(); // Obtém as coordenadas do primeiro elemento.
        const rect2 = element2.getBoundingClientRect(); // Obtém as coordenadas do segundo elemento.
        // Verifica se os elementos se sobrepõem.
        return !(rect1.top > rect2.bottom || rect1.bottom < rect2.top || rect1.left > rect2.right || rect1.right < rect2.left);
    }

    // Adiciona um evento de clique ao labirinto para mover o personagem.
    labirinto.addEventListener('click', function(event) {
        // Calcula as coordenadas do clique em relação ao labirinto.
        const targetX = event.clientX - labirinto.getBoundingClientRect().left - personagem.clientWidth / 2;
        const targetY = event.clientY - labirinto.getBoundingClientRect().top - personagem.clientHeight / 2;

        // Verifica se o clique está dentro dos limites do labirinto.
        if (targetX >= 0 && targetX <= labirinto.clientWidth - personagem.clientWidth &&
            targetY >= 0 && targetY <= labirinto.clientHeight - personagem.clientHeight) {

            // Atualiza a posição do personagem com as coordenadas do clique.
            personagem.style.left = targetX + 'px';
            personagem.style.top = targetY + 'px';

            // Verifica colisões com os obstáculos (paredes).
            const walls = document.querySelectorAll('.wall');
            for (const wall of walls) {
                if (checkCollision(personagem, wall)) {
                    // Se houver colisão, impede o movimento do personagem.
                    personagem.style.left = personagem.style.left;
                    personagem.style.top = personagem.style.top;
                    return; // Sai da função para evitar movimentos adicionais.
                }
            }

            // Verifica se o personagem chegou à saída.
            if (checkCollision(personagem, saida)) {
                alert('Você venceu!'); // Exibe uma mensagem de vitória.
            }
        }
    });
});
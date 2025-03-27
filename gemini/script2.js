document.addEventListener('DOMContentLoaded', function() {
    // Garante que o código JavaScript seja executado após o carregamento completo da página.
    const personagem = document.querySelector('.personagem'); // Seleciona o elemento do personagem.
    const labirinto = document.querySelector('.labirinto'); // Seleciona o elemento do labirinto.
    const saida = document.querySelector('.saida'); // Seleciona o elemento da saída.
    let posX = 10; // Posição inicial do personagem no eixo X (horizontal).
    let posY = 10; // Posição inicial do personagem no eixo Y (vertical).

    // Função para criar paredes no labirinto:
    function createWall(x, y, width, height) {
        const wall = document.createElement('div');
        wall.classList.add('wall');
        wall.style.left = x + 'px';
        wall.style.top = y + 'px';
        wall.style.width = width + 'px';
        wall.style.height = height + 'px';
        labirinto.appendChild(wall);
    }

    // Cria algumas paredes no labirinto:
    createWall(50, 50, 10, 200);
    createWall(150, 50, 200, 10);
    createWall(340, 50, 10, 200);

    // Função para verificar colisões entre elementos:
    function checkCollision(element1, element2) {
        const rect1 = element1.getBoundingClientRect();
        const rect2 = element2.getBoundingClientRect();
        return !(rect1.top > rect2.bottom || rect1.bottom < rect2.top || rect1.left > rect2.right || rect1.right < rect2.left);
    }

    // Adiciona um evento de escuta para as teclas pressionadas:
    document.addEventListener('keydown', function(event) {
        // Armazena a posição anterior do personagem:
        const previousPosX = posX;
        const previousPosY = posY;

        // Verifica qual tecla foi pressionada:
        if (event.key === 'ArrowUp') {
            posY -= 10; // Move o personagem para cima.
        } else if (event.key === 'ArrowDown') {
            posY += 10; // Move o personagem para baixo.
        } else if (event.key === 'ArrowLeft') {
            posX -= 10; // Move o personagem para a esquerda.
        } else if (event.key === 'ArrowRight') {
            posX += 10; // Move o personagem para a direita.
        }

        // Limita o movimento do personagem dentro dos limites do labirinto:
        posX = Math.max(0, Math.min(posX, labirinto.clientWidth - personagem.clientWidth));
        posY = Math.max(0, Math.min(posY, labirinto.clientHeight - personagem.clientHeight));

        // Verifica colisões com as paredes:
        const walls = document.querySelectorAll('.wall');
        for (const wall of walls) {
            if (checkCollision(personagem, wall)) {
                // Se houver colisão, impede o movimento do personagem.
                posX = previousPosX;
                posY = previousPosY;
                break;
            }
        }

        // Atualiza a posição do personagem na tela:
        personagem.style.left = posX + 'px';
        personagem.style.top = posY + 'px';

        // Verifica se o personagem chegou à saída:
        if (posX === saida.offsetLeft && posY === saida.offsetTop) {
            alert('Você venceu!'); // Exibe uma mensagem de vitória.
        }
    });
});
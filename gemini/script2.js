document.addEventListener('DOMContentLoaded', function() {
    const personagem = document.querySelector('.personagem');
    const labirinto = document.querySelector('.labirinto');
    const saida = document.querySelector('.saida');
    let posX = 10;
    let posY = 10;

    function createWall(x, y, width, height) {
        const wall = document.createElement('div');
        wall.classList.add('wall');
        wall.style.left = x + 'px';
        wall.style.top = y + 'px';
        wall.style.width = width + 'px';
        wall.style.height = height + 'px';
        labirinto.appendChild(wall);
    }

    createWall(50, 50, 10, 200);
    createWall(150, 50, 200, 10);
    createWall(340, 50, 10, 200);

    function checkCollision(element1, element2) {
        const rect1 = element1.getBoundingClientRect();
        const rect2 = element2.getBoundingClientRect();
        return !(rect1.top > rect2.bottom || rect1.bottom < rect2.top || rect1.left > rect2.right || rect1.right < rect2.left);
    }

    document.addEventListener('keydown', function(event) {
        const previousPosX = posX;
        const previousPosY = posY;

        if (event.key === 'ArrowUp') {
            posY -= 10;
        } else if (event.key === 'ArrowDown') {
            posY += 10;
        } else if (event.key === 'ArrowLeft') {
            posX -= 10;
        } else if (event.key === 'ArrowRight') {
            posX += 10;
        }

        posX = Math.max(0, Math.min(posX, labirinto.clientWidth - personagem.clientWidth));
        posY = Math.max(0, Math.min(posY, labirinto.clientHeight - personagem.clientHeight));

        const walls = document.querySelectorAll('.wall');
        for (const wall of walls) {
            if (checkCollision(personagem, wall)) {
                posX = previousPosX;
                posY = previousPosY;
                break;
            }
        }

        // Converter para números inteiros antes de aplicar ao estilo
        personagem.style.left = parseInt(posX) + 'px';
        personagem.style.top = parseInt(posY) + 'px';

        if (posX === saida.offsetLeft && posY === saida.offsetTop) {
            alert('Você venceu!');
        }
    });
});
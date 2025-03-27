document.addEventListener('DOMContentLoaded', function() {
    const personagem = document.querySelector('.personagem');
    const labirinto = document.querySelector('.labirinto');
    const saida = document.querySelector('.saida');

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

    labirinto.addEventListener('click', function(event) {
        const targetX = event.clientX - labirinto.getBoundingClientRect().left - personagem.clientWidth / 2;
        const targetY = event.clientY - labirinto.getBoundingClientRect().top - personagem.clientHeight / 2;

        if (targetX >= 0 && targetX <= labirinto.clientWidth - personagem.clientWidth &&
            targetY >= 0 && targetY <= labirinto.clientHeight - personagem.clientHeight) {

            personagem.style.left = targetX + 'px';
            personagem.style.top = targetY + 'px';

            const walls = document.querySelectorAll('.wall');
            for (const wall of walls) {
                if (checkCollision(personagem, wall)) {
                    personagem.style.left = personagem.style.left;
                    personagem.style.top = personagem.style.top;
                    return;
                }
            }

            if (checkCollision(personagem, saida)) {
                alert('Você venceu!');
            }
        }
    });
});
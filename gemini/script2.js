document.addEventListener('DOMContentLoaded', function() {
    // Garante que o código JavaScript seja executado após o carregamento completo da página.
    const personagem = document.querySelector('.personagem'); // Seleciona o elemento do personagem.
    const labirinto = document.querySelector('.labirinto'); // Seleciona o elemento do labirinto.
    const saida = document.querySelector('.saida'); // Seleciona o elemento da saída.
    let posX = 10; // Posição inicial do personagem no eixo X.
    let posY = 10; // Posição inicial do personagem no eixo Y.

    // Adiciona um evento de escuta para as teclas pressionadas:
    document.addEventListener('keydown', function(event) {
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

        // Atualiza a posição do personagem na tela:
        personagem.style.left = posX + 'px';
        personagem.style.top = posY + 'px';

        // Verifica se o personagem chegou à saída:
        if (posX === saida.offsetLeft && posY === saida.offsetTop) {
            alert('Você venceu!'); // Exibe uma mensagem de vitória.
        }
    });
});
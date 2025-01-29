
const board = document.getElementById('game-board');
const restartButton = document.getElementById('restart');
let cards = [];
let flippedCards = [];
let matchedCards = 0;

// Função para gerar as cartas
function createCards() {
  const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const cardDeck = [...cardValues, ...cardValues]; // Duplicando as cartas

  // Embaralha as cartas
  cardDeck.sort(() => Math.random() - 0.5);

  // Cria as cartas HTML
  cardDeck.forEach(value => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = value;
    card.addEventListener('click', flipCard);
    board.appendChild(card);
    cards.push(card);
  });
}

// Função para virar as cartas
function flipCard() {
  if (flippedCards.length === 2) return; // Impede virar mais de 2 cartas por vez
  this.classList.add('flipped');
  flippedCards.push(this);

  // Verifica se as cartas viradas são iguais
  if (flippedCards.length === 2) {
    setTimeout(checkMatch, 1000);
  }
}

// Função para verificar se as cartas combinam
function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.dataset.value === card2.dataset.value) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    matchedCards++;
  } else {
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');
  }
  flippedCards = [];

  // Se todas as cartas forem combinadas, o jogo acaba
  if (matchedCards === cards.length / 2) {
    setTimeout(() => alert('Você ganhou!'), 500);
  }
}

// Função para reiniciar o jogo
function restartGame() {
  matchedCards = 0;
  flippedCards = [];
  cards.forEach(card => card.classList.remove('flipped', 'matched'));
  board.innerHTML = '';
  createCards();
}

restartButton.addEventListener('click', restartGame);

// Inicia o jogo
createCards();
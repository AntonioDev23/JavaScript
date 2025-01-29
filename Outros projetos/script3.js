
const board = document.getElementById('game-board');
const restartButton = document.getElementById('restart');
let cards = [];
let flippedCards = [];
let matchedCards = 0;

// Função para gerar as cartas
function createCards() {
  const cardValues = [
    'https://via.placeholder.com/100x100?text=1', 
    'https://via.placeholder.com/100x100?text=2', 
    'https://via.placeholder.com/100x100?text=3', 
    'https://via.placeholder.com/100x100?text=4',
    'https://via.placeholder.com/100x100?text=5', 
    'https://via.placeholder.com/100x100?text=6', 
    'https://via.placeholder.com/100x100?text=7', 
    'https://via.placeholder.com/100x100?text=8'
  ];
  const cardDeck = [...cardValues, ...cardValues]; // Duplicando as cartas

  // Embaralha as cartas
  cardDeck.sort(() => Math.random() - 0.5);

  // Cria as cartas HTML
  cardDeck.forEach(value => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = value;
    card.style.backgroundImage = 'url("https://via.placeholder.com/100x100")'; // Carta virada
    card.addEventListener('click', flipCard);
    board.appendChild(card);
    cards.push(card);
  });
}

// Função para virar as cartas
function flipCard() {
  if (flippedCards.length === 2) return; // Impede virar mais de 2 cartas por vez
  this.classList.add('flipped');
  this.style.backgroundImage = `url("${this.dataset.value}")`; // Mostra a imagem da carta virada
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
    card1.style.backgroundImage = 'url("https://via.placeholder.com/100x100")'; // Reseta as imagens se não combinarem
    card2.style.backgroundImage = 'url("https://via.placeholder.com/100x100")';
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
  cards.forEach(card => {
    card.classList.remove('flipped', 'matched');
    card.style.backgroundImage = 'url("https://via.placeholder.com/100x100")'; // Reseta as imagens
  });
  board.innerHTML = '';
  createCards();
}

restartButton.addEventListener('click', restartGame);

// Inicia o jogo
createCards();
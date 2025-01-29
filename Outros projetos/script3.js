
const board = document.getElementById('game-board');
const restartButton = document.getElementById('restart');
let cards = [];
let flippedCards = [];
let matchedCards = 0;

// Função para gerar as cartas
function createCards() {
  board.innerHTML = ''; // Limpa o tabuleiro antes de criar novas cartas
  cards = []; // Resetando a lista de cartas

  const cardValues = [
    'imagens/card1.png', 
    'imagens/card2.png',
    'imagens/card3.png',
    'imagens/card4.png',
    'imagens/card5.png',
    'imagens/card6.png',
    'imagens/card7.png',
    'imagens/card8.png',    
  ];
  
  const cardDeck = [...cardValues, ...cardValues]; // Duplicando as cartas
  cardDeck.sort(() => Math.random() - 0.5); // Embaralha as cartas

  // Criando as cartas
  cardDeck.forEach(value => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = value;

    const frontFace = document.createElement('div');
    frontFace.classList.add('front-face');

    const backFace = document.createElement('div');
    backFace.classList.add('back-face');
    backFace.style.backgroundImage = `url("${value}")`; // Define a imagem da carta

    card.appendChild(frontFace);
    card.appendChild(backFace);
    
    card.addEventListener('click', flipCard);
    board.appendChild(card);
    cards.push(card);
  });
}

// Função para virar as cartas
function flipCard() {
  if (flippedCards.length === 2 || this.classList.contains('flipped')) return;

  this.classList.add('flipped');
  flippedCards.push(this);

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

  if (matchedCards === cards.length / 2) {
    setTimeout(() => alert('Você ganhou! 🎉'), 500);
  }
}

// Função para reiniciar o jogo
function restartGame() {
  matchedCards = 0;
  flippedCards = [];
  createCards();
}

restartButton.addEventListener('click', restartGame);

// Inicia o jogo
createCards();
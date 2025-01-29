
let display = document.getElementById('display');
let expressao = ''; // Armazena a expressão completa
let valorAnterior = '';
let operacao = '';
let novoNumero = false; // Agora, garante que os números sejam adicionados corretamente

function adicionarNumero(numero) {
  if (novoNumero) {
    expressao += numero; // Continua a expressão sem apagar
    novoNumero = false;
  } else {
    expressao += numero;
  }
  display.value = expressao; // Atualiza o display com toda a expressão
}

function adicionarOperador(op) {
  if (expressao === '' || expressao.slice(-2) === ` ${operacao} `) return; // Evita operadores duplicados

  valorAnterior = display.value;
  operacao = op;
  expressao += ` ${op} `; // Adiciona espaço antes e depois do operador
  display.value = expressao;
  novoNumero = true;
}

function limparDisplay() {
  display.value = '';
  expressao = '';
  valorAnterior = '';
  operacao = '';
  novoNumero = false;
}

function calcularResultado() {
  if (operacao === '' || novoNumero) return; // Evita calcular sem ter números suficientes

  try {
    let resultado = eval(expressao); // Usa eval para calcular a expressão completa
    expressao += ` = ${resultado}`;
    display.value = expressao;
  } catch (e) {
    display.value = 'Erro';
  }

  valorAnterior = '';
  operacao = '';
  novoNumero = true; // Garante que um novo cálculo possa começar corretamente
}
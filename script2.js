
let display = document.getElementById('display');
let operacao = '';
let valorAnterior = '';

function adicionarNumero(numero) {
  display.value += numero;
}

function adicionarOperador(op) {
  if (display.value === '') return; // Não faz nada se o display estiver vazio
  valorAnterior = display.value;
  operacao = op;
  display.value = '';
}

function limparDisplay() {
  display.value = '';
  valorAnterior = '';
  operacao = '';
}

function calcularResultado() {
  if (display.value === '' || valorAnterior === '') return; // Não faz nada se faltar valores
  let resultado;
  const num1 = parseFloat(valorAnterior);
  const num2 = parseFloat(display.value);

  switch (operacao) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      resultado = num1 / num2;
      break;
    default:
      return;
  }

  display.value = resultado;
  valorAnterior = '';
  operacao = '';
}
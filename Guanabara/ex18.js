let num = [5,2,8,9,3]
num [5] = 7
console.log(`Nosso vetor é o ${num}`)


for (let pos in num) {
    console.log(`O valor na posição ${pos} é ${num[pos]}`)
}

const pessoa = {
  nome: 'Ana',
  idade: 28,
  profissao: 'Engenheira'
};

for (const propriedade in pessoa) {
  console.log(`${propriedade}: ${pessoa[propriedade]}`);
}

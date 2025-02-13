
let tarefas = []; // Lista global para armazenar as tarefas

function adicionarTarefa() {
    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim(); // O `trim()` remove espaços em branco no início e no final
  
    let mensagemElemento = document.getElementById("mensagem");

    // Verificar se o campo está vazio
    if (tarefa === "") {
        mensagemElemento.textContent = "Por favor, digite uma tarefa!";
        mensagemElemento.style.color = "red"; // Define a cor vermelha
        return; // Impede de continuar com a função
    }

    // Adiciona a tarefa na lista
    tarefas.push(tarefa);

    // Atualiza a mensagem de sucesso
    mensagemElemento.textContent = "Tarefa adicionada com sucesso!";
    mensagemElemento.style.color = "green"; // Define a cor verde

    // Atualiza a lista na tela
    atualizarLista();

    // Limpa o campo de input
    inputTarefa.value = "";
}

function atualizarLista() {
    let listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = ""; // Limpa a lista antes de recriá-la

    // Percorre todas as tarefas e adiciona na tela
    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefas[i];
        listaTarefas.appendChild(novaTarefa);
    }
}



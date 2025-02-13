
let tarefas = []; // Lista global para armazenar as tarefas

function adicionarTarefa() {
    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();

    let mensagemElemento = document.getElementById("mensagem");

    // Verificar se o campo está vazio
    if (tarefa === "") {
        mensagemElemento.textContent = "Por favor, digite uma tarefa!";
        mensagemElemento.style.color = "red";
        return;
    }

    // Verificar se a tarefa já existe na lista (case insensitive)
    let tarefaExiste = tarefas.some(t => t.toLowerCase() === tarefa.toLowerCase());

    if (tarefaExiste) {
        mensagemElemento.textContent = "Tarefa já adicionada!";
        mensagemElemento.style.color = "red";
        return;
    }

    // Adiciona a tarefa na lista
    tarefas.push(tarefa);

    // Atualiza a mensagem de sucesso
    mensagemElemento.textContent = "Tarefa adicionada com sucesso!";
    mensagemElemento.style.color = "green";

    // Atualiza a lista na tela
    atualizarLista();

    // Limpa o campo de input
    inputTarefa.value = "";
}

function atualizarLista() {
    let listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";

    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefas[i];
        listaTarefas.appendChild(novaTarefa);
    }
}

function limparLista() {
    tarefas = []; // Zera a lista de tarefas
    atualizarLista(); // Atualiza a tela para remover os itens
    document.getElementById("mensagem").textContent = "Lista limpa!";
    document.getElementById("mensagem").style.color = "blue";
}

// Adicionar evento para a tecla "Enter"
document.getElementById("inputTarefa").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});

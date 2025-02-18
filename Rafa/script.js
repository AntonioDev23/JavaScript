
let tarefas = []; // Lista global para armazenar as tarefas

// Função para adicionar uma tarefa
function adicionarTarefa() {
    let inputTarefa = document.getElementById("inputTarefa"); // Obtém o input de tarefa
    let tarefa = inputTarefa.value.trim(); // Remove espaços extras da tarefa

    let mensagemElemento = document.getElementById("mensagem"); // Elemento onde as mensagens são exibidas

    // Verifica se a tarefa está vazia
    if (tarefa === "") {
        mensagemElemento.textContent = "Por favor, digite uma tarefa!";
        mensagemElemento.style.color = "red";
        return;
    }

    // Verifica se a tarefa já existe
    let tarefaExiste = tarefas.some(t => t.toLowerCase() === tarefa.toLowerCase());
    if (tarefaExiste) {
        mensagemElemento.textContent = "Tarefa já adicionada!";
        mensagemElemento.style.color = "red";
        return;
    }

    tarefas.push(tarefa); // Adiciona a nova tarefa na lista
    mensagemElemento.textContent = "Tarefa adicionada com sucesso!";
    mensagemElemento.style.color = "green";
    atualizarLista(); // Atualiza a lista na tela
    inputTarefa.value = ""; // Limpa o campo de input
}

// Função para atualizar a lista de tarefas na tela
function atualizarLista() {
    let listaTarefas = document.getElementById("listaTarefas"); // Obtém a lista
    listaTarefas.innerHTML = ""; // Limpa a lista na tela

    // Loop para criar os itens da lista com botões de edição e remoção
    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li"); // Cria um novo item de lista

        let textoTarefa = document.createElement("span"); // Cria um span para o texto da tarefa
        textoTarefa.textContent = tarefas[i];
        novaTarefa.appendChild(textoTarefa);

        let botaoEditar = document.createElement("button"); // Cria o botão de editar
        botaoEditar.textContent = "Editar";
        botaoEditar.classList.add("botao-editar"); // Adiciona a classe correta
        botaoEditar.onclick = () => editarTarefa(i, textoTarefa); // Define a ação ao clicar

        let botaoRemover = document.createElement("button"); // Cria o botão de remover
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("botao-remover"); // Adiciona a classe correta
        botaoRemover.onclick = () => removerTarefa(i); // Define a ação ao clicar

        // Adiciona os botões na tarefa
        novaTarefa.appendChild(botaoEditar);
        novaTarefa.appendChild(botaoRemover);
        listaTarefas.appendChild(novaTarefa); // Adiciona o item à lista
    }
}

// Função para remover uma tarefa
function removerTarefa(indice) {
    tarefas.splice(indice, 1); // Remove a tarefa da lista pelo índice
    atualizarLista(); // Atualiza a lista na tela
}

// Função para editar uma tarefa
function editarTarefa(indice, textoTarefa) {
    let inputEdicao = document.createElement("input");
    inputEdicao.value = tarefas[indice];
    textoTarefa.textContent = "";
    textoTarefa.appendChild(inputEdicao);
    inputEdicao.focus(); // Foca automaticamente no campo de edição

    let botaoSalvar = document.createElement("button");
    botaoSalvar.textContent = "Salvar";
    botaoSalvar.classList.add("botao-salvar"); // Adiciona a classe correta
    botaoSalvar.onclick = () => {
        let novoTexto = inputEdicao.value.trim();
        if (novoTexto !== "" && !tarefas.some(t => t.toLowerCase() === novoTexto.toLowerCase())) {
            tarefas[indice] = novoTexto; // Atualiza o texto da tarefa
            atualizarLista(); // Atualiza a lista na tela
        } else {
            alert("Tarefa inválida ou já existente!");
        }
    };

    textoTarefa.appendChild(botaoSalvar);
}

// Função para limpar todas as tarefas
function limparLista() {
    tarefas = []; // Limpa a lista de tarefas
    atualizarLista(); // Atualiza a lista na tela
    document.getElementById("mensagem").textContent = "Lista limpa!";
    document.getElementById("mensagem").style.color = "blue"; // Exibe mensagem de lista limpa
}

// Adiciona evento para a tecla "Enter" no campo de input
document.getElementById("inputTarefa").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa(); // Adiciona a tarefa ao pressionar Enter
    }
});
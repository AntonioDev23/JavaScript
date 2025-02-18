
let tarefas = [];

function adicionarTarefa() {
    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();
    let mensagemElemento = document.getElementById("mensagem");

    if (tarefa === "") {
        mensagemElemento.textContent = "Por favor, digite uma tarefa!";
        mensagemElemento.style.color = "red";
        return;
    }

    if (tarefas.some(t => t.toLowerCase() === tarefa.toLowerCase())) {
        mensagemElemento.textContent = "Tarefa já adicionada!";
        mensagemElemento.style.color = "red";
        return;
    }

    tarefas.push(tarefa);
    mensagemElemento.textContent = "Tarefa adicionada com sucesso!";
    mensagemElemento.style.color = "green";

    atualizarLista();
    inputTarefa.value = "";
}

function atualizarLista() {
    let listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        let novaTarefa = document.createElement("li");

        // Criando um span para editar direto no local
        let textoTarefa = document.createElement("span");
        textoTarefa.textContent = tarefa;
        textoTarefa.classList.add("tarefa-texto");

        // Ativar edição ao clicar duas vezes
        textoTarefa.ondblclick = function () {
            let inputEdicao = document.createElement("input");
            inputEdicao.type = "text";
            inputEdicao.value = tarefa;
            inputEdicao.classList.add("input-edicao");

            inputEdicao.onblur = function () {
                if (inputEdicao.value.trim() !== "") {
                    tarefas[index] = inputEdicao.value.trim();
                }
                atualizarLista();
            };

            inputEdicao.onkeypress = function (event) {
                if (event.key === "Enter") {
                    inputEdicao.blur();
                }
            };

            novaTarefa.replaceChild(inputEdicao, textoTarefa);
            inputEdicao.focus();
        };

        // Botão de remover
        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("botao-remover");
        botaoRemover.onclick = function () {
            tarefas.splice(index, 1);
            atualizarLista();
        };

        novaTarefa.appendChild(textoTarefa);
        novaTarefa.appendChild(botaoRemover);
        listaTarefas.appendChild(novaTarefa);
    });
}

function limparLista() {
    tarefas = [];
    atualizarLista();
    document.getElementById("mensagem").textContent = "Lista limpa!";
    document.getElementById("mensagem").style.color = "blue";
}

document.getElementById("inputTarefa").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});

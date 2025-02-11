

  function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!";
  
    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim(); // O `trim()` remove espaços em branco no início e no final
  
    let mensagemElemento = document.getElementById("mensagem");
  
    // Verificar se o campo está vazio
    if (tarefa === "") {
      // Se estiver vazio, mostra uma mensagem de erro
      mensagemElemento.textContent = "Por favor, digite uma tarefa!";
      mensagemElemento.style.color = "red"; // Define a cor vermelha
      return; // Impede de continuar com a função
    }
  
    // Se o campo não estiver vazio, adiciona a tarefa
    mensagemElemento.textContent = mensagem;
    mensagemElemento.style.color = "green"; // Define a cor verde
  
    let listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefa;
  
    listaTarefas.appendChild(novaTarefa);
  
    // Limpa o campo de input
    inputTarefa.value = "";
  }


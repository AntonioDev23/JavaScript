
function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!";
  
    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim(); // O `trim()` remove espaços em branco no início e no final
  
    // Verificar se o campo está vazio
    if (tarefa === "") {
      // Se estiver vazio, mostra uma mensagem ou faz nada
      document.getElementById("mensagem").textContent = "Por favor, digite uma tarefa!";
      return; // Impede de continuar com a função
    }
  
    // Se o campo não estiver vazio, adiciona a tarefa
    document.getElementById("mensagem").textContent = mensagem;
  
    let listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefa;
  
    listaTarefas.appendChild(novaTarefa);
  
    // Limpa o campo de input
    inputTarefa.value = "";
    
    
  }
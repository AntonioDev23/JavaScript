document.addEventListener('DOMContentLoaded', function() {
    // Esta linha garante que o código JavaScript seja executado somente após o DOM (Document Object Model)
    // ser completamente carregado. Isso evita erros ao tentar acessar elementos HTML que ainda não existem.

    // Seleciona os elementos HTML que serão utilizados no código:
    const taskInput = document.getElementById('taskInput'); // Campo de entrada para adicionar tarefas
    const addButton = document.getElementById('addButton'); // Botão para adicionar tarefas
    const taskList = document.getElementById('taskList'); // Lista onde as tarefas serão exibidas

    // Adiciona um "ouvinte de evento" (event listener) ao botão de adicionar tarefas:
    addButton.addEventListener('click', function() {
        // Esta função será executada quando o botão for clicado.

        const taskText = taskInput.value.trim(); // Obtém o texto da tarefa digitada e remove espaços em branco extras.

        if (taskText) { // Verifica se o texto da tarefa não está vazio.
            addTask(taskText); // Chama a função para adicionar a tarefa à lista.
            taskInput.value = ''; // Limpa o campo de entrada após adicionar a tarefa.
        }
    });

    // Função para adicionar uma nova tarefa à lista:
    function addTask(taskText) {
        const taskItem = document.createElement('li'); // Cria um novo elemento <li> para a tarefa.

        // Define o conteúdo HTML do elemento <li>, incluindo o texto da tarefa e um botão de remover:
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteButton">Remover</button>
        `;

        // Adiciona um "ouvinte de evento" ao elemento <li> para lidar com cliques:
        taskItem.addEventListener('click', function(event) {
            // Esta função será executada quando o item da lista for clicado.

            if (event.target.classList.contains('deleteButton')) {
                // Se o elemento clicado for o botão de remover, remove o item da lista.
                taskItem.remove();
            } else {
                // Caso contrário, marca a tarefa como concluída (ou desmarca, se já estiver concluída).
                taskItem.classList.toggle('completed');
            }
        });

        // Adiciona o novo item da lista à lista de tarefas exibida na página.
        taskList.appendChild(taskItem);
    }
});
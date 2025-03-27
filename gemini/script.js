document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteButton">Remover</button>
        `;

        taskItem.addEventListener('click', function(event) {
            if (event.target.classList.contains('deleteButton')) {
                taskItem.remove();
            } else {
                taskItem.classList.toggle('completed');
            }
        });

        taskList.appendChild(taskItem);
    }
});
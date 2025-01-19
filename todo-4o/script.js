document.addEventListener('DOMContentLoaded', function() {
    const newTodoInput = document.getElementById('new-todo');
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');

    addTodoButton.addEventListener('click', function() {
        const todoText = newTodoInput.value.trim();
        if (todoText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = todoText;
            listItem.addEventListener('click', function() {
                todoList.removeChild(listItem);
            });
            todoList.appendChild(listItem);
            newTodoInput.value = '';
        }
    });

    newTodoInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTodoButton.click();
        }
    });
});

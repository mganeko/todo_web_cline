document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todo-list');
    const newTodoInput = document.getElementById('new-todo');

    function addTodo() {
        const todoText = newTodoInput.value.trim();
        if (todoText === '') return;

        const listItem = document.createElement('li');
        listItem.className = 'todo-item';

        const textSpan = document.createElement('span');
        textSpan.textContent = todoText;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            todoList.removeChild(listItem);
        };

        listItem.appendChild(textSpan);
        listItem.appendChild(deleteButton);

        todoList.appendChild(listItem);
        newTodoInput.value = '';
    }

    window.addTodo = addTodo;
});

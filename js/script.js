function addTask(boardId, taskContent) {
    const board = document.getElementById(boardId);
    const task = document.createElement('div');
    task.className = 'task';
    task.textContent = taskContent;
    board.querySelector('.board-tasks').appendChild(task);
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
}
function addTask(boardId) {
    const board = document.getElementById(boardId);
    const taskInput = board.querySelector('.task-input');
    const taskContent = taskInput.value.trim();

    if (taskContent) {
        const task = document.createElement('div');
        task.className = 'task';
        task.textContent = taskContent;

        task.onclick = function() {
            const newTaskContent = prompt("Edit task:", task.textContent);
            if (newTaskContent !== null) {
                task.textContent = newTaskContent;
            }
        };

        board.querySelector('.board-tasks').appendChild(task);
        taskInput.value = ''; 
    } else {
        alert("Please enter a task.");
    }
}
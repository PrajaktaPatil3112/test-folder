function deleteTask(button) {
  
    var row = button.closest('tr');
    
    row.remove();}
    document.addEventListener('DOMContentLoaded', () => {
        const addTaskButton = document.querySelector('.add-button');
        const taskInput = document.getElementById('taskInput');
        const taskTableBody = document.getElementById('taskTableBody');
    
    
        function addTask() {
            const taskText = taskInput.value.trim();
    
            if (taskText === '') {
                alert('Please enter a task.');
                return;
            }
    
            const tr = document.createElement('tr');
    
            const tdTask = document.createElement('td');
            tdTask.textContent = taskText;
    
            const tdActions = document.createElement('td');
            tdActions.classList.add('actions');
    
            const span = document.createElement('span');
            span.textContent = 'completed';
            tdActions.appendChild(span);
    
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', () => {
                taskTableBody.removeChild(tr);
            });
            tdActions.appendChild(deleteButton);
    
            tr.appendChild(tdTask);
            tr.appendChild(tdActions);
    
            taskTableBody.appendChild(tr);
            taskInput.value = '';
        }
    

        addTaskButton.addEventListener('click', addTask);
    });
    
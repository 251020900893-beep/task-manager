document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // 1. Create Form
    const form = document.createElement('form');

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Nhập công việc mới...';
    input.required = true;

    const prioritySelect = document.createElement('select');
    const options = ['Thấp', 'Trung bình', 'Cao'];
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        prioritySelect.appendChild(opt);
    });

    const addButton = document.createElement('button');
    addButton.textContent = 'Thêm';
    addButton.type = 'submit';

    form.appendChild(input);
    form.appendChild(prioritySelect);
    form.appendChild(addButton);

    app.appendChild(form);

    // 2. Create List
    const taskList = document.createElement('ul');
    taskList.id = 'task-list';
    app.appendChild(taskList);

    // 3. Handle Submit
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const taskText = input.value.trim();
        const taskPriority = prioritySelect.value;

        if (taskText) {
            addTask(taskText, taskPriority);
            input.value = '';
        }
    });

    // 4. Add Task Function with Delete
    function addTask(text, priority) {
        const li = document.createElement('li');

        // Content span
        const span = document.createElement('span');
        span.textContent = `${text} [${priority}]`;

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Xóa';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
});
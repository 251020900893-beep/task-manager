document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // Tạo form thêm task
  const form = document.createElement('form');

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Nhập công việc mới...';
  input.required = true;

  const prioritySelect = document.createElement('select');
  const options = ['Thấp', 'Trung bình', 'Cao'];
  options.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option.toLowerCase();
    opt.textContent = option;
    prioritySelect.appendChild(opt);
  });

  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = 'Thêm';

  form.appendChild(input);
  form.appendChild(prioritySelect);
  form.appendChild(button);

  // Tạo danh sách công việc
  const taskList = document.createElement('ul');
  taskList.id = 'task-list';

  app.appendChild(form);
  app.appendChild(taskList);

  // Xử lý sự kiện submit form
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const taskText = input.value.trim();
    const priority = prioritySelect.value;
    if (taskText) {
      addTask(taskText, priority);
      input.value = '';
      prioritySelect.selectedIndex = 0;
    }
  });

  function addTask(text, priority) {
    const li = document.createElement('li');
    li.className = 'task-item';
    const span = document.createElement('span');
    span.textContent = `${text} `;
    const badge = document.createElement('span');
    badge.className = `badge priority-${priority}`;
    badge.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);
    const delBtn = document.createElement('button');
    delBtn.className = 'delete-btn';
    delBtn.textContent = 'Xóa';
    delBtn.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(badge);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  }
});
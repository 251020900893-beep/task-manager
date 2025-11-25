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
    }
  });

  function addTask(text, priority) {
    const li = document.createElement('li');
    li.textContent = `${text} (Ưu tiên: ${priority})`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Xóa';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
      li.remove();
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }
});
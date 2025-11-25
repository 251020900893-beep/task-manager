document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // 1. Tạo form thêm task
  const form = document.createElement('form');

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Nhập công việc mới...';
  input.required = true;

  // Select độ ưu tiên (Kết quả bài thực hành 3)
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

  // 2. Tạo danh sách công việc
  const taskList = document.createElement('ul');
  taskList.id = 'task-list';
  
  app.appendChild(form);
  app.appendChild(taskList);

  // 3. Xử lý sự kiện submit form
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
    
    const span = document.createElement('span');
    span.textContent = `${text} - Mức độ: ${priority}`;
    
    // Nút xóa (Kết quả bài thực hành 4)
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
document.addEventListener('DOMContentLoaded', () => {
 const app = document.getElementById('app');
 // Tạo form thêm task với ưu tiên
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

 // Xử lý submit
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
   li.textContent = `${text} (${priority})`;
   // Thêm nút xóa task
   const delBtn = document.createElement('button');
   delBtn.textContent = 'Xóa';
   delBtn.style.marginLeft = '10px';
   delBtn.onclick = () => { li.remove(); };
   li.appendChild(delBtn);
   taskList.appendChild(li);
 }
});

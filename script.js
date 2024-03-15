function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');
  var taskText = taskInput.value;
  if (taskText.trim() !== '') {
    var li = document.createElement('li');
    var priority = document.createElement('span');
    var status = document.createElement('span');
    var actions = document.createElement('span');
    priority.className = 'priority';
    status.className = 'status';
    actions.className = 'actions';
    var prioritySelect = document.createElement('select');
    prioritySelect.innerHTML = `
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    `;
    var doneButton = document.createElement('button');
    doneButton.innerText = 'Done';
    doneButton.onclick = function() {
      li.classList.toggle('task-done');
      status.innerText = li.classList.contains('task-done') ? 'Completed' : 'Pending';
    };
    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
      taskList.removeChild(li);
    };
    actions.appendChild(prioritySelect);
    actions.appendChild(doneButton);
    actions.appendChild(deleteButton);
    li.className = 'task';
    li.innerHTML = `
      <span>${taskText}</span>
    `;
    li.appendChild(priority);
    li.appendChild(status);
    li.appendChild(actions);
    taskList.appendChild(li);
    taskInput.value = '';
  } else {
    alert('Please enter a task.');
  }
}

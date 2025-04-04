// Select the input field and task list
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add a new task to the list
function addTask() {
  const taskText = taskInput.value.trim();

  // Ignore empty tasks
  if (taskText === '') {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement('li');

  // Add text
  li.textContent = taskText;

  // Create action buttons container
  const actions = document.createElement('div');
  actions.className = 'task-actions';

  // Complete button
  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔';
  completeBtn.className = 'complete-btn';
  completeBtn.onclick = () => {
    li.classList.toggle('completed');
  };

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = () => {
    li.remove();
  };

  // Append buttons to actions
  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);

  // Append actions to list item
  li.appendChild(actions);

  // Append list item to task list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';
}

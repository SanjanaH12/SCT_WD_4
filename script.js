function addTask() {
  const taskInput = document.getElementById("task-input");
  const dateInput = document.getElementById("task-datetime");
  const taskText = taskInput.value.trim();
  const taskDate = dateInput.value;

  if (taskText === "") return;

  const li = document.createElement("li");

  // Task text + datetime
  const taskInfo = document.createElement("span");
  taskInfo.className = "task-info";
  taskInfo.textContent = taskText + (taskDate ? ` ⏰ ${taskDate}` : "");

  // Action buttons
  const actions = document.createElement("div");
  actions.className = "task-actions";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✅";
  completeBtn.onclick = () => li.classList.toggle("completed");

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.onclick = () => editTask(taskInfo, taskText, taskDate);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskInfo);
  li.appendChild(actions);

  document.getElementById("task-list").appendChild(li);

  taskInput.value = "";
  dateInput.value = "";
}

function editTask(taskInfo, oldText, oldDate) {
  const newText = prompt("Edit task:", oldText);
  const newDate = prompt("Edit date & time (YYYY-MM-DD HH:MM):", oldDate);

  if (newText !== null && newText.trim() !== "") {
    taskInfo.textContent = newText + (newDate ? ` ⏰ ${newDate}` : "");
  }
}

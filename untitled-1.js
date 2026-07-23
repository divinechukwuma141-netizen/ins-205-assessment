document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle completion
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete");
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}

const apiUrl = "http://localhost:3000/todos";
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const addTodoText = document.getElementById("addTodoText");
const todoModal = document.getElementById("todoModal");
const closeModal = document.getElementById("closeModal");
const saveModalTodo = document.getElementById("saveModalTodo");
const modalTodoInput = document.getElementById("modalTodoInput");

document.addEventListener("DOMContentLoaded", loadTodos);
filterOption.addEventListener("change", filterTodo);

// Modal
addTodoText.addEventListener("click", () => {
  todoModal.classList.remove("hidden");
  modalTodoInput.focus();
});

closeModal.addEventListener("click", () => {
  todoModal.classList.add("hidden");
  modalTodoInput.value = "";
});

saveModalTodo.addEventListener("click", addTodo);
todoList.addEventListener("click", handleTodoClick);

// todo from server
async function loadTodos() {
  try {
    const response = await fetch(apiUrl);
    const todos = await response.json();

    todos.forEach((todo) => {
      const todoDiv = createTodoElement(todo);
      todoList.appendChild(todoDiv);
    });
  } catch (error) {
    console.error("Failed to load todos:", error);
  }
}

// add todos
async function addTodo() {
  const todoText = modalTodoInput.value.trim();
  if (!todoText) return;

  const newTodo = { text: todoText, completed: false };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    const savedTodo = await response.json();

    const todoDiv = createTodoElement(savedTodo);
    todoList.appendChild(todoDiv);
    modalTodoInput.value = "";
    todoModal.classList.add("hidden");
  } catch (error) {
    console.error("Failed to add todo:", error);
  }
}

function createTodoElement(todo) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add(
    "todo",
    "flex",
    "justify-between",
    "items-center",
    "bg-white",
    "p-4",
    "rounded-lg",
    "shadow-lg",
    "transition-transform",
    "duration-300"
  );
  todoDiv.dataset.id = todo.id;

  const newTodo = document.createElement("li");
  newTodo.innerText = todo.text;
  newTodo.classList.add("todo-item", "flex-1");
  todoDiv.appendChild(newTodo);

  todoDiv.appendChild(
    createButton("fas fa-check", "complete-btn bg-green-500 hover:bg-green-600")
  );
  todoDiv.appendChild(
    createButton("fas fa-trash", "trash-btn bg-red-500 hover:bg-red-600")
  );

  if (todo.completed) {
    todoDiv.classList.add("completed", "line-through", "opacity-50");
  }

  return todoDiv;
}

function createButton(iconClass, btnClass) {
  const button = document.createElement("button");
  button.classList.add(...btnClass.split(" "), "text-white", "p-2", "rounded");
  const icon = document.createElement("i");
  icon.className = iconClass;
  button.appendChild(icon);
  return button;
}

async function handleTodoClick(event) {
  const button = event.target.closest("button");
  if (!button) return;

  const todoDiv = button.closest(".todo");
  const todoId = todoDiv.dataset.id;

  if (button.classList.contains("trash-btn")) {
    todoDiv.classList.add("opacity-0", "translate-x-4");
    setTimeout(() => todoDiv.remove(), 300);

    try {
      await fetch(`${apiUrl}/${todoId}`, { method: "DELETE" });
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  }

  if (button.classList.contains("complete-btn")) {
    todoDiv.classList.toggle("completed");
    todoDiv.classList.toggle("line-through");
    todoDiv.classList.toggle("opacity-50");

    const isCompleted = todoDiv.classList.contains("completed");
    try {
      await fetch(`${apiUrl}/${todoId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: isCompleted }),
      });
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  }
}

async function filterTodo() {
  const todos = todoList.children;
  const filterValue = filterOption.value;

  [...todos].forEach((todo) => {
    const isCompleted = todo.classList.contains("completed");
    todo.style.display =
      filterValue === "all" ||
      (filterValue === "completed" && isCompleted) ||
      (filterValue === "uncompleted" && !isCompleted)
        ? "flex"
        : "none";
  });
}

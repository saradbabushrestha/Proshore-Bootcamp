const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

document.addEventListener("DOMContentLoaded", loadTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", handleTodoClick);
filterOption.addEventListener("change", filterTodo);

function addTodo(event) {
  event.preventDefault();
  const todoText = todoInput.value.trim();
  if (!todoText) return;

  // nw todo
  const todoDiv = createTodoElement(todoText);
  todoList.appendChild(todoDiv);

  saveTodoToLocal(todoText);
  todoInput.value = "";
}

function createTodoElement(todoText) {
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

  const newTodo = document.createElement("li");
  newTodo.innerText = todoText;
  newTodo.classList.add("todo-item", "flex-1");
  todoDiv.appendChild(newTodo);

  // comp and del butn
  todoDiv.appendChild(
    createButton("fas fa-check", "complete-btn bg-green-500 hover:bg-green-600")
  );
  todoDiv.appendChild(
    createButton("fas fa-trash", "trash-btn bg-red-500 hover:bg-red-600")
  );

  return todoDiv;
}

function createButton(iconClass, btnClass) {
  const button = document.createElement("button");
  button.classList.add(
    ...btnClass.split(" "),
    "text-white",
    "p-2",
    "rounded",
    "transition-all",
    "duration-200"
  );

  const icon = document.createElement("i");
  icon.className = iconClass;
  button.appendChild(icon);

  return button;
}

function handleTodoClick(event) {
  const button = event.target.closest("button");
  if (!button) return; //button click or not
  const todoDiv = button.closest(".todo");

  if (button.classList.contains("trash-btn")) {
    todoDiv.classList.add("opacity-0", "translate-x-4");
    setTimeout(() => {
      todoDiv.remove();
      removeTodoFromLocal(todoDiv);
    }, 300);
  }

  if (button.classList.contains("complete-btn")) {
    todoDiv.classList.toggle("completed");
    todoDiv.classList.toggle("line-through");
    todoDiv.classList.toggle("opacity-50");
    updateTodoInLocal(todoDiv);
  }
}

function filterTodo() {
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

function saveTodoToLocal(todo) {
  const todos = getTodosFromLocal();
  todos.push({ text: todo, completed: false });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  const todos = getTodosFromLocal();
  todos.forEach((todo) => {
    const todoDiv = createTodoElement(todo.text);
    if (todo.completed) {
      todoDiv.classList.add("completed", "line-through", "opacity-50");
    }
    todoList.appendChild(todoDiv);
  });
}

function getTodosFromLocal() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

function removeTodoFromLocal(todoDiv) {
  const todos = getTodosFromLocal();
  const todoText = todoDiv.querySelector(".todo-item").innerText;
  const updatedTodos = todos.filter((todo) => todo.text !== todoText);
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
}

function updateTodoInLocal(todoDiv) {
  const todos = getTodosFromLocal();
  const todoText = todoDiv.querySelector(".todo-item").innerText;
  todos.forEach((todo) => {
    if (todo.text === todoText) {
      todo.completed = todoDiv.classList.contains("completed");
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

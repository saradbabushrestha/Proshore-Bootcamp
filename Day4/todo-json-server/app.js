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

    todos.sort((a, b) => a.order - b.order || a.id - b.id);

    todos.forEach((todo, index) => {
      const todoRow = createTodoElement(todo, index);
      todoList.appendChild(todoRow);
    });

    new Sortable(todoList, {
      animation: 150,
      ghostClass: "sortable-ghost",
      onEnd: async () => {
        const reorderedTodos = Array.from(todoList.children).map(
          (todo, index) => ({
            id: todo.dataset.id,
            order: index,
          })
        );

        for (const todo of reorderedTodos) {
          await fetch(`${apiUrl}/${todo.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ order: todo.order }),
          });
        }

        Array.from(todoList.children).forEach((row, index) => {
          row.firstChild.textContent = index + 1;
        });
      },
    });
  } catch (error) {
    console.error("Failed to load todos:", error);
  }
}

// add todos

async function addTodo() {
  const todoText = modalTodoInput.value.trim();
  if (!todoText) return;

  const newTodo = {
    text: todoText,
    completed: false,
    order: todoList.children.length,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    const savedTodo = await response.json();

    const todoRow = createTodoElement(savedTodo, todoList.children.length);
    todoList.appendChild(todoRow);

    modalTodoInput.value = "";
    todoModal.classList.add("hidden");
  } catch (error) {
    console.error("Failed to add todo:", error);
  }
}

function createTodoElement(todo, index) {
  const todoRow = document.createElement("tr");
  todoRow.classList.add("todo", "bg-white", "hover:bg-gray-100", "transition");
  todoRow.dataset.id = todo.id;

  const snCell = document.createElement("td");
  snCell.classList.add(
    "border",
    "border-gray-300",
    "px-4",
    "py-2",
    "text-center"
  );
  snCell.textContent = index + 1;
  todoRow.appendChild(snCell);

  const todoCell = document.createElement("td");
  todoCell.classList.add("border", "border-gray-300", "px-4", "py-2");
  const todoText = document.createElement("span");
  todoText.textContent = todo.text;

  if (todo.completed) {
    todoText.classList.add("line-through", "opacity-50");
  }

  todoCell.appendChild(todoText);
  todoRow.appendChild(todoCell);

  const actionsCell = document.createElement("td");
  actionsCell.classList.add(
    "border",
    "border-gray-300",
    "px-1",
    "py-2",
    "text-center",
    "space-x-8"
  );

  actionsCell.appendChild(
    createButton("fas fa-check", "complete-btn bg-green-500 hover:bg-green-600")
  );

  actionsCell.appendChild(
    createButton("fas fa-trash", "trash-btn bg-red-500 hover:bg-red-600")
  );

  todoRow.appendChild(actionsCell);

  return todoRow;
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

  const todoRow = button.closest(".todo");
  const todoId = todoRow.dataset.id;
  if (button.classList.contains("trash-btn")) {
    todoRow.classList.add("opacity-0", "translate-x-4");
    setTimeout(() => todoRow.remove(), 300);

    try {
      await fetch(`${apiUrl}/${todoId}`, { method: "DELETE" });
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  }

  if (button.classList.contains("complete-btn")) {
    const todoText = todoRow.querySelector("td:nth-child(2) span");
    const isCurrentlyCompleted = todoText.classList.contains("line-through");

    todoText.classList.toggle("line-through");
    todoText.classList.toggle("opacity-50");

    try {
      await fetch(`${apiUrl}/${todoId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !isCurrentlyCompleted }),
      });
    } catch (error) {
      console.error("Failed to update todo:", error);
      todoText.classList.toggle("line-through");
      todoText.classList.toggle("opacity-50");
    }
  }
}

async function filterTodo() {
  const todos = todoList.children;
  const filterValue = filterOption.value;

  [...todos].forEach((todo) => {
    const todoText = todo.querySelector("td:nth-child(2) span");
    const isCompleted = todoText && todoText.classList.contains("line-through");

    todo.style.display =
      filterValue === "all" ||
      (filterValue === "completed" && isCompleted) ||
      (filterValue === "uncompleted" && !isCompleted)
        ? "table-row"
        : "none";
  });
}

import { createButton } from "./createButton.js";

export function createTodoElement(todo, index) {
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

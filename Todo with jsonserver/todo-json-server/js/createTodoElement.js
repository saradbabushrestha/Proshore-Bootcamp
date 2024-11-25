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

  const todoCell = document.createElement("td"); //new td fot todo text is created
  todoCell.classList.add("border", "border-gray-300", "px-4", "py-2");

  const todoText = document.createElement("span"); //holds the todo text
  todoText.textContent = todo.text;

  if (todo.completed) {
    todoText.classList.add("line-through", "opacity-50");
  }

  todoCell.appendChild(todoText);

  const actionsCell = document.createElement("td");
  actionsCell.classList.add(
    "border",
    "border-gray-300",
    "px-1",
    "py-2",
    "text-center",
    "space-x-8"
  );

  actionsCell.append(
    createButton(
      "fas fa-check",
      "complete-btn bg-green-500 hover:bg-green-600"
    ),
    createButton("fas fa-trash", "trash-btn bg-red-500 hover:bg-red-600")
  );

  todoRow.append(snCell, todoCell, actionsCell);

  return todoRow;
}

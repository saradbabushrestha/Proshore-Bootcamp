import { loadTodos } from "./js/loadTodos.js";
import { addTodo } from "./js/addTodo.js";
import { handleTodoClick } from "./js/handleTodoClick.js";
import { filterTodo } from "./js/filterTodo.js";
import { setupModal } from "./js/modal.js";

const apiUrl = "http://localhost:3000/todos";
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const addTodoText = document.getElementById("addTodoText");
const todoModal = document.getElementById("todoModal");
const closeModal = document.getElementById("closeModal");
const saveModalTodo = document.getElementById("saveModalTodo");
const modalTodoInput = document.getElementById("modalTodoInput");

document.addEventListener("DOMContentLoaded", () =>
  loadTodos(apiUrl, todoList)
);
filterOption.addEventListener("change", () =>
  filterTodo(todoList, filterOption)
);
todoList.addEventListener("click", (event) =>
  handleTodoClick(event, apiUrl, todoList)
);
addTodoText.addEventListener("click", () =>
  setupModal(todoModal, modalTodoInput)
);
closeModal.addEventListener("click", () => setupModal(todoModal));
saveModalTodo.addEventListener("click", () =>
  addTodo(apiUrl, todoList, modalTodoInput, todoModal)
);

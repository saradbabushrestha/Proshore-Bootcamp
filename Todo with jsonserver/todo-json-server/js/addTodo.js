import { createTodoElement } from "./createTodoElement.js";

export async function addTodo(apiUrl, todoList, modalTodoInput, todoModal) {
  const todoText = modalTodoInput.value.trim(); //to get user input
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

    if (!response.ok) throw new Error("Failed to save todo");

    const savedTodo = await response.json();
    const todoRow = createTodoElement(savedTodo, todoList.children.length);
    todoList.appendChild(todoRow); //add todo to list or Ui uodate

    modalTodoInput.value = "";
    todoModal.classList.add("hidden");
  } catch (error) {
    console.error("Error adding todo:", error);
  }
}

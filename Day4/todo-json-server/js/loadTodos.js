import { createTodoElement } from "./createTodoElement.js";

export async function loadTodos(apiUrl, todoList) {
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

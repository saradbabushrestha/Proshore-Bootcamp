import { createTodoElement } from "./createTodoElement.js";

export async function loadTodos(apiUrl, todoList) {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Failed to fetch todos");

    const todos = await response.json();

    // sort using order
    todos.sort((a, b) => a.order - b.order);

    todoList.innerText = "";
    //todo lai list ma add
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

        //update odered list
        await Promise.all(
          reorderedTodos.map((todo) =>
            fetch(`${apiUrl}/${todo.id}`, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ order: todo.order }),
            })
          )
        );

        Array.from(todoList.children).forEach((row, index) => {
          row.firstChild.textContent = index + 1;
        });
      },
    });
  } catch (error) {
    console.error("Failed to load todos:", error);
  }
}

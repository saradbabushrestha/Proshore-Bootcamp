export async function handleTodoClick(event, apiUrl, todoList) {
  event.preventDefault(); // Prevent default action for clicks, if necessary

  const button = event.target.closest("button");
  if (!button) return;

  const todoRow = button.closest(".todo");
  const todoId = todoRow.dataset.id;

  // Handle Delete
  if (button.classList.contains("trash-btn")) {
    todoRow.classList.add("opacity-0", "translate-x-4");
    setTimeout(() => todoRow.remove(), 300);

    try {
      await fetch(`${apiUrl}/${todoId}`, { method: "DELETE" });
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  }

  // Handle Complete
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
      // Revert the changes if the update fails
      todoText.classList.toggle("line-through");
      todoText.classList.toggle("opacity-50");
    }
  }
}

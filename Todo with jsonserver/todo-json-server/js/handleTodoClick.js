export async function handleTodoClick(event, apiUrl, todoList) {
  event.preventDefault();

  const button = event.target.closest("button");
  if (!button) return;

  const todoRow = button.closest(".todo"); //todo rows find garne containing the clicked btn
  const todoId = todoRow.dataset.id; //retrv id

  const updateTodoStatus = async (completed) => {
    try {
      await fetch(`${apiUrl}/${todoId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed }),
      });
    } catch (error) {
      console.error("Failed to update todo:", error);
      throw error;
    }
  };

  //  Delete
  if (button.classList.contains("trash-btn")) {
    todoRow.classList.add("opacity-0", "translate-x-4");
    setTimeout(() => todoRow.remove(), 300); //animation lai timeout garya

    try {
      await fetch(`${apiUrl}/${todoId}`, { method: "DELETE" });
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  }

  // Complete
  if (button.classList.contains("complete-btn")) {
    const todoText = todoRow.querySelector("td:nth-child(2) span");
    const isCurrentlyCompleted = todoText.classList.contains("line-through");

    todoText.classList.toggle("line-through");
    todoText.classList.toggle("opacity-50");

    try {
      await updateTodoStatus(!isCurrentlyCompleted);
    } catch {
      todoText.classList.toggle("line-through");
      todoText.classList.toggle("opacity-50");
    }
  }
}

export function filterTodo(todoList, filterOption) {
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

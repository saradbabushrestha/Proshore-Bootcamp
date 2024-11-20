export function setupModal(todoModal, modalTodoInput = null) {
  if (todoModal.classList.contains("hidden")) {
    todoModal.classList.remove("hidden");
    if (modalTodoInput) modalTodoInput.focus();
  } else {
    todoModal.classList.add("hidden");
    if (modalTodoInput) modalTodoInput.value = "";
  }
}

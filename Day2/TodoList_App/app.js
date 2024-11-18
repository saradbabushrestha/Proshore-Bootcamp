//selectors
const todoInput = document.querySelector(".todo-input"); //input field where user will type todo
const todoButton = document.querySelector(".todo-button"); //add button
const todoList = document.querySelector(".todo-list"); //todo list display
const filterOption = document.querySelector(".filter-todo"); //filter option

//event listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//functions
function addTodo(event) {
  event.preventDefault(); //sdesont refresh
  console.log("add vayo hai");
  //todo ko div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //li create
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo); //append list item to todo div
  //add todo to localstoagre
  saveLocalTodos(todoInput.value);
  //check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>'; //inner text ni milxa and innterHTMl helps to add html tags
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton); //append to div

  //check mark button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("trash-btn");
  todoDiv.appendChild(deleteButton); //append to div

  //apped to list
  todoList.appendChild(todoDiv);

  //clear input value after adding todo
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;

  //delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
    removeLocalTodos(todo);
  }

  //check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodos(todo) {
  //check if there is already todos
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos")); //array
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos")); //array
  }
  todos.forEach(function (todo) {
    //todo ko div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //li create
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo); //append list item to todo div
    //check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>'; //inner text ni milxa and innterHTMl helps to add html tags
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton); //append to div

    //check mark button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("trash-btn");
    todoDiv.appendChild(deleteButton); //append to div

    //apped to list
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos")); //array
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// const todoInput = document.querySelector(".todo-input");
// const todoButton = document.querySelector(".todo-button");
// const todoList = document.querySelector(".todo-list");
// const filterOption = document.querySelector(".filter-todo");

// document.addEventListener("DOMContentLoaded", loadTodos);
// todoButton.addEventListener("click", addTodo);
// todoList.addEventListener("click", handleTodoClick);
// filterOption.addEventListener("change", filterTodo);

// function addTodo(event) {
//   event.preventDefault();
//   const todoText = todoInput.value.trim();
//   if (!todoText) return;

//   // nw todo
//   const todoDiv = createTodoElement(todoText);
//   todoList.appendChild(todoDiv);

//   saveTodoToLocal(todoText);
//   todoInput.value = "";
// }

// function createTodoElement(todoText) {
//   const todoDiv = document.createElement("div");
//   todoDiv.classList.add(
//     "todo",
//     "flex",
//     "justify-between",
//     "items-center",
//     "bg-white",
//     "p-4",
//     "rounded-lg",
//     "shadow-lg",
//     "transition-transform",
//     "duration-300"
//   );

//   const newTodo = document.createElement("li");
//   newTodo.innerText = todoText;
//   newTodo.classList.add("todo-item", "flex-1");
//   todoDiv.appendChild(newTodo);

//   // comp and del butn
//   todoDiv.appendChild(
//     createButton("fas fa-check", "complete-btn bg-green-500 hover:bg-green-600")
//   );
//   todoDiv.appendChild(
//     createButton("fas fa-trash", "trash-btn bg-red-500 hover:bg-red-600")
//   );

//   return todoDiv;
// }

// function createButton(iconClass, btnClass) {
//   const button = document.createElement("button");
//   button.classList.add(
//     ...btnClass.split(" "),
//     "text-white",
//     "p-2",
//     "rounded",
//     "transition-all",
//     "duration-200"
//   );

//   const icon = document.createElement("i");
//   icon.className = iconClass;
//   button.appendChild(icon);

//   return button;
// }

// function handleTodoClick(event) {
//   const button = event.target.closest("button");
//   if (!button) return; //button click or not
//   const todoDiv = button.closest(".todo");

//   if (button.classList.contains("trash-btn")) {
//     todoDiv.classList.add("opacity-0", "translate-x-4");
//     setTimeout(() => {
//       todoDiv.remove();
//       removeTodoFromLocal(todoDiv);
//     }, 300);
//   }

//   if (button.classList.contains("complete-btn")) {
//     todoDiv.classList.toggle("completed");
//     todoDiv.classList.toggle("line-through");
//     todoDiv.classList.toggle("opacity-50");
//     updateTodoInLocal(todoDiv);
//   }
// }

// function filterTodo() {
//   const todos = todoList.children;
//   const filterValue = filterOption.value;

//   [...todos].forEach((todo) => {
//     const isCompleted = todo.classList.contains("completed");
//     todo.style.display =
//       filterValue === "all" ||
//       (filterValue === "completed" && isCompleted) ||
//       (filterValue === "uncompleted" && !isCompleted)
//         ? "flex"
//         : "none";
//   });
// }

// function saveTodoToLocal(todo) {
//   const todos = getTodosFromLocal();
//   todos.push({ text: todo, completed: false });
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// function loadTodos() {
//   const todos = getTodosFromLocal();
//   todos.forEach((todo) => {
//     const todoDiv = createTodoElement(todo.text);
//     if (todo.completed) {
//       todoDiv.classList.add("completed", "line-through", "opacity-50");
//     }
//     todoList.appendChild(todoDiv);
//   });
// }

// function getTodosFromLocal() {
//   return JSON.parse(localStorage.getItem("todos")) || [];
// }

// function removeTodoFromLocal(todoDiv) {
//   const todos = getTodosFromLocal();
//   const todoText = todoDiv.querySelector(".todo-item").innerText;
//   const updatedTodos = todos.filter((todo) => todo.text !== todoText);
//   localStorage.setItem("todos", JSON.stringify(updatedTodos));
// }

// function updateTodoInLocal(todoDiv) {
//   const todos = getTodosFromLocal();
//   const todoText = todoDiv.querySelector(".todo-item").innerText;
//   todos.forEach((todo) => {
//     if (todo.text === todoText) {
//       todo.completed = todoDiv.classList.contains("completed");
//     }
//   });
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

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
}

<button id="myButton">Click me</button>;

//getting refrence to button element
const button = document.getElementById("myButton");

//adding event listener
button.addEventListener("click", function () {
  console.log("Button clicked");
});
//it takes normally two parameter => event name and logic or function to perfrom on buttom click

//event ahndling => respondin to user actions in we page
//allows to attach an event name and with function we want to perform on that event
//event handling is done using event listener

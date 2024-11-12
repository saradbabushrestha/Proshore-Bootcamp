//using var
function example() {
  if (true) {
    var count = 10;
    console.log(count); //10
  }
  console.log(count); //10
}

//using let
function example() {
  if (true) {
    let count = 10;
    console.log(count); //10
  }
  console.log(count); //ReferenceError: count is not defined
}
//using const
const count = 10;

count = 5; //leads to error
//cannot be changed once declared

console.log(count);

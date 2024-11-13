function add(x, y) {
  return x + y;
}

let a = 3,
  b = 4;
let result = add(a, b);

console.log(result);

function display(x, y, operations) {
  var result = operations(x, y);
  console.log(result);
}
//operation is a callback function
display(3, 4, add);

function sub(x, y) {
  return x - y;
}

display(3, 4, sub);

//callback function as iteration

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function logNumber(number) {
  console.log(number);
}
numbers.forEach(logNumber);

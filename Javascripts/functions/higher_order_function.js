//definition
//take one or more function as arguments(callback function)
//return a function as results

function sayHello(name) {
  console.log(`hello ${name}`);
}

function sayBye(name) {
  console.log(`bye ${name}`);
}

function hof(func) {
  func("proshore");
}

hof(sayHello);
hof(sayBye);

//hof is higher order function
//sayHello and sayBye are callback function

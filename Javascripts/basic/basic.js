//array
let animals = ["cat", "dog", "mouse"];

console.log(animals[1]);

console.log(animals.length);

animals.push("rat");
console.log(animals);

//function
function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

//object
let person = {
  name: "proshore",
  age: 30,
  city: "New York",
  grades: ["A", "B", "C"],
  greet: function () {
    console.log(this.name);
  },
};

console.log(person.grades[2]);

console.log(person.name);
person.greet();

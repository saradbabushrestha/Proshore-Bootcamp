const person = {
  name: "Sarad",
  age: 21,
  isMarried: false,
};

// const name = person.name;
// const age = person.age;
// const isMarried = person.isMarried;
//this takes lot of space

const { name, age, isMarried } = person;

//use of spreadoperator

const person1 = { ...person, name: "Ram " };

const names = ["ram", "shyam", "hari"];
const names1 = [...name, "jhon"];

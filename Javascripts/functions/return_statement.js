function checkAge(name, age) {
  if (age < 21) {
    return `Sorry ${name}, you aren't old enough `;
  }
  return `Welcome ${name}`;
}

console.log(checkAge("proshore1", 20));
console.log(checkAge("proshore2", 30));
//skips further code written after return

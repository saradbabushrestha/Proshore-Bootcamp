let carName = "Ferrari";

class Car {
  //static property
  static numOfWheels = 4;

  //dyanimic property
  constructor(name, model, color) {
    this.name = name; //this  refers curent context or scope in which code is being excuted
    this.model = model;
    this.color = color;
  }
  //method
  start() {
    console.log(`${this.name} is started`);
  }
}
//creating instance of Car class
const myCar = new Car(carName, "F40", "red");
//accessing static property
console.log(Car.numOfWheels);
//accessing dyanimic property
console.log(myCar.name);

//access methods
myCar.start();

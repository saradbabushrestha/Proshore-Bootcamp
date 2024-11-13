//creating promise using its constructor

const myPromise = new Promise((resolve, reject) => {
  //timeout of 1 sec
  setTimeout(() => {
    //random number generator
    let randomNum = Math.floor(Math.random() * 10);
    //resolve
    if (randomNum < 5) {
      resolve("Success");
    } else {
      reject("Failed");
    }
  }, 1000);
  //using .then() to handle the resolve promise
});
myPromise
  .then((result) => {
    console.log(result);
  })
  //using .catch() to handle the reject promise
  .catch((error) => {
    console.log(error);
  });

//use of promises in real applications
//API CALLS, FILE HANDLING, data fetching, animations and visual effects, eventhandling

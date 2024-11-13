console.log("start");
setTimeout(() => {
  console.log("hello");
}, 2000);
console.log("end");
//settimeout is an asynchronous operation
//start
//end
//hello

//this doesnt block the execution
//settimeout is asynchronous function which executes callback function after a specified time period of time

//use of this
//settimeout, promises, loading data from an API, uploading files, animations and transitions

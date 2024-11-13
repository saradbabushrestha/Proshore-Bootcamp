//way to handle asynchronous operations
//may not be available yet but will be available in the future
//its states=> pending, resolved or rejected

const promise = new Promise((resolve, reject) => {
  //perform asynchronous operation
  //if successful, call resolve with result
  //if failed, call reject with error message
});

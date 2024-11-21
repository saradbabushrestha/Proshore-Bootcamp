const axios = require("axios"); //for HTTP requests

const data = axios.get("https://cat-fact.herokuapp.com/facts");

data
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promised resolved");
  });

let names = ["sarad", "saram", "samrat", "sarad", "sarthak"];

names = names.filter((name) => {
  return name != "sarad";
});
console.log(names);

//[ 'saram', 'samrat', 'sarthak' ]

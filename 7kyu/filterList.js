function filter_list(l) {
  let resultArray = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === "number") {
      resultArray.push(l[i]);
    }
  }
  return resultArray;
}

console.log(filter_list([1, 2, "a", "b"]));

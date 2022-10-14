function giveMeFive(obj) {
  let resArr = [];
  for (let key in obj) {
    if (key.length === 5) {
      resArr.push(key);
    }
    if (obj[key].length === 5) {
      resArr.push(obj[key]);
    }
  }
  return resArr;
}

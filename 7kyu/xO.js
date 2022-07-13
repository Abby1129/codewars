function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length); // if x and o are equal, return true else return false
}
console.log(XO("ooxx"));

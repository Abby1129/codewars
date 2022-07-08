function getMiddle(s) {
  let middle = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    return s.substring(middle - 1, middle + 1);
  }
  return s.substring(middle, middle + 1);
}

console.log(getMiddle("test"));

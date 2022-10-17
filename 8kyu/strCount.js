function strCount(str, letter) {
  return str.split(letter).length - 1;
}

console.log(strCount("Hello", "o"));

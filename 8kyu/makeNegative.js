function makeNegative(num) {
  if (num >= 0) {
    return num - Math.abs(num * 2);
  }
  return num;
}

console.log(makeNegative(1));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log();

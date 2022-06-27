function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split("")
      .map((x) => Math.pow(parseInt(x), 2))
      .join("")
  );
}

console.log(squareDigits(9119));

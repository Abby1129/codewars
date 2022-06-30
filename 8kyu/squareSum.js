function squareSum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr * curr, 0);
}

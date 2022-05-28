function positiveSum(arr) {
  const newArr = [];
  for (const num of arr) {
    if (num >= 0) {
      newArr.push(num);
    }
  }
  return newArr.reduce((a, b) => a + b, 0);
}

console.log(positiveSum([1, -4, 7, 12]));

function firstNonConsecutive(numArray) {
  for (i = 0; i <= numArray.length; i++) {
    if (i === numArray.length - 1) {
      return null;
    }
    if (numArray[i + 1] - numArray[i] !== 1) {
      return numArray[i + 1];
    }
  }
  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7]));

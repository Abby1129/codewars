function findOdd(A) {
  let int = 0;
  A.forEach((num) => {
    // iterate through array of numbers and count the number of times each number appears in the array
    if (A.filter((n) => n === num).length % 2 !== 0) {
      // if the number of times it appears is odd
      int = num; // set int to the number
    }
  });
  return int;
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); //4

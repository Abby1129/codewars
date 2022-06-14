/**Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
 */

function evenNumbers(array, number) {
  // good luck
  return array
    .filter(function (x) {
      return x % 2 === 0; // filter out all odd numbers and return only even numbers
    })
    .slice(-number); // return the last number of even numbers from the array (in the same order)
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

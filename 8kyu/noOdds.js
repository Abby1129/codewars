//Write a small function that returns the values of an array that are not odd.

//For loop over array

//num % 2 !== 0 is odd
//num % 2 === 0 is even

//All values in the array will be integers. Return the good values in the order they are given.

function noOdds(values) {
  const result = [];
  for (const value of values) {
    console.log(value);
    if (value % 2 === 0) {
      result.push(value);
    }
  }
  return result;
}

console.log(noOdds([2, 3, 4]));

//with Array.filter()

function noOdds(values) {
  return values.filter((val) => val % 2 === 0);
}

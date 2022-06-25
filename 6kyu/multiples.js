function solution(number) {
  let result = [];

  for (let i = 1; i < number; i++) {
    console.log(i);
    if (i % 3 === 0 || i % 5 === 0) {
      result.push(i);
    }
  }
  console.log(result);
  return result.reduce((a, b) => a + b);
}

console.log(solution(10));

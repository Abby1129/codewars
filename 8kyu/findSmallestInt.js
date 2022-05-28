function findSmallestInt(args) {
  args.sort((a, b) => a - b);
  return args[0];
}

//with Math.min()
function findSmallestInt(args) {
  return Math.min(...args);
}
console.log(findSmallestInt([78, 56, 232, 12, 8]));
console.log(findSmallestInt([78, 56, 232, 12, 18]));
console.log(findSmallestInt([34, 15, 88, 2]));
console.log(findSmallestInt([34, -345, -1, 100]));

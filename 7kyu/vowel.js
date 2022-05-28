function getCount(str) {
  let vowelsCount = 0;
  const cleanStr = str.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];

  for (const char of cleanStr) {
    for (const v of vowels) {
      if (char[0] === v[0]) {
        vowelsCount += 1;
      }
    }
  }
  return vowelsCount;
}

console.log(getCount("abracadabra"));
console.log(getCount("Abracadabra"));
console.log(getCount("bracadabraIi"));

function getCountv2(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  lower_string = str.toLowerCase();
  count = 0;
  for (const char of lower_string) {
    if (vowels.includes(char)) {
      count = count + 1;
    }
  }
  return count;
}

console.log("--------------------");
console.log(getCountv2("abracadabra"));
console.log(getCountv2("Abracadabra"));
console.log(getCountv2("bracadabraIi"));

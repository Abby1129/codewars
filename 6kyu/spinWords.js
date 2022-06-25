function spinWords(string) {
  const splitStr = string.split(" ");
  let result = [];

  for (const word of splitStr) {
    console.log(word);
    if (word.length >= 5) {
      result.push(word.split("").reverse().join(""));
    } else {
      result.push(word);
    }
  }
  return result.join(" ");
}

console.log(spinWords("Hey fellow warriors"));

/**
 * input string
 * output string
 * condition if a word in a string has 5 or more letters, reverse it
 */

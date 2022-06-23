/**You are given a random string of lower-case letters. Your job is to find out how many ordered and consecutive vowels there are in the given string beginning from "a". Keep in mind that the consecutive vowel to "u" is "a" and the cycle continues.

Return an integer with the length of the consecutive vowels found.


This is a slightly trickier example: you are given the string "erfaiekjudhyfimngukduo". As you move right you ignore all vowels until you get to the "a", then ignore the rest until you get to the "e", which is the consecutive vowel and so forth until you get to the "o". Return 4.
Note
For this kata, the vowels are 'a', 'e', 'i', 'o', 'u', in that order. y is not considered a vowel in this kata. */

function getTheVowels(word) {
  let vowels = ["a", "e", "i", "o", "u"];

  let currentCount = 0;
  let totalCount = 0;

  for (let char of word.toLowerCase()) {
    if (char === vowels[currentCount]) {
      currentCount = currentCount + 1;
    }
    if (currentCount === vowels.length) {
      totalCount = totalCount + currentCount;
      currentCount = 0;
    }
  }
  return totalCount + currentCount;
}

console.log(getTheVowels("agrtertyfikfmroyrntbvsukldkfa"));
console.log(getTheVowels("erfaiekjudhyfimngukduo"));

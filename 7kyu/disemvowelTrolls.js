//Trolls are attacking your comment section!

//A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

//remove all the vowels

//Your task is to write a function that takes a string and return a new string with all vowels removed.

// takes a string
// returns a new string with no vowels

//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

//Note: for this kata y isn't considered a vowel.

// let vowels = [a, b, c, d, e];

function disemvowel(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let newStr = "";
  for (const char of str) {
    if (!vowels.includes(char)) {
      newStr += char;
    }
  }
  return newStr;
}

console.log(disemvowel("This website is for losers!"));

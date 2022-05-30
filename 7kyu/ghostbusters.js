/**
Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

If the building contains no ghosts, return the string:
"You just wanted my autograph didn't you?"

*/

function ghostBusters(string) {
  var strArray = string.split(" ");

  if (strArray.length === 1) {
    return "You just wanted my autograph didn't you?";
  } else {
    return strArray.join("");
  }
}

console.log(ghostBusters("Sky scra per"));
console.log(ghostBusters("BusStation"));
console.log(ghostBusters("Factor y"));

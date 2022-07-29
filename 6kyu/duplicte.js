function duplicateCount(text) {
  let count = 0;
  let textArr = text.toLowerCase().split("");
  let textObj = {};
  textArr.forEach(function (letter) {
    if (textObj[letter]) {
      textObj[letter]++;
    } else {
      textObj[letter] = 1;
    }
  });
  for (let key in textObj) {
    if (textObj[key] > 1) {
      count++;
    }
  }
  return count;
}

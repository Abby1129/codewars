function flip(direction, numList) {
  if (direction.toUpperCase() === "R")
    return numList.sort(function (a, b) {
      return a - b;
    });
  if (direction.toUpperCase() === "L")
    return numList
      .sort(function (a, b) {
        return a - b;
      })
      .reverse();
}

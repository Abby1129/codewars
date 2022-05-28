function feast(beast, dish) {
  if (beast.charAt(0) === dish.charAt(0)) {
    if (beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)) {
      return true;
    }
  }
  return false;
}

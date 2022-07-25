function smallEnough(a, limit) {
  for (const i of a) {
    if (i > limit) return false;
  }
  return true;
}

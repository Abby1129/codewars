function accum(s) {
  return s
    .split("")
    .map((x, i) => x.toUpperCase() + x.toLowerCase().repeat(i))
    .join("-");
}

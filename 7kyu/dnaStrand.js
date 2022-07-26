function DNAStrand(dna) {
  let dnaArr = dna.split("");
  let dnaComplement = dnaArr.map((letter) => {
    if (letter === "A") {
      return "T";
    } else if (letter === "T") {
      return "A";
    } else if (letter === "C") {
      return "G";
    } else if (letter === "G") {
      return "C";
    }
  });
  return dnaComplement.join("");
}

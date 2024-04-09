const countChar = (s: string, l: string): number => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === l) {
      count++;
    }
  }
  return count;
};
const countBs = (s: string): number => {
  return countChar(s, "B");
};

console.log(countBs("BOB"));

console.log(countChar("kakkerlak", "k"));

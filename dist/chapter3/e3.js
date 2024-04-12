const countChar = (s, l) => {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === l) {
            count++;
        }
    }
    return count;
};
const countBs = (s) => {
    return countChar(s, "B");
};
console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));
export {};
//# sourceMappingURL=e3.js.map
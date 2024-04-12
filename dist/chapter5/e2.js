console.log("myOwnL00p");
const myOwnLoop = (value, test, update, body) => {
    for (let i = value; test(i); i = update(i)) {
        body(i);
    }
};
myOwnLoop(3, (n) => n > 0, (n) => n - 1, console.log);
export {};
//# sourceMappingURL=e2.js.map
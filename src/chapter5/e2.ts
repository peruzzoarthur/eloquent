console.log("myOwnL00p");

const myOwnLoop = (
  value: number,
  test: (n: number) => boolean,
  update: (n: number) => number,
  body: (n: number) => void
) => {
  for (let i = value; test(i); i = update(i)) {
    body(i);
  }
};

myOwnLoop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);

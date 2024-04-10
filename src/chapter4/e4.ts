const deepEqual = (x: any, y: any): boolean => {
  if (x === y) {
    return true;
  }

  if (x == null || typeof x != "object" || y == null || typeof y != "object") {
    return false;
  }

  const keysX = Object.keys(x as object);
  const keysY = Object.keys(y as object);

  console.log(keysX, keysY);

  if (keysX.length != keysY.length) {
    return false;
  }

  for (let key of keysX) {
    if (!keysY.includes(key) || !deepEqual(x[key], y[key])) {
      return false;
    }
  }
  return true;
};

let obj = { here: { is: "an" }, object: 2 };

console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, { here: 1, object: 2 }));

console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));

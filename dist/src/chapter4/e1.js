const range = (start, end, step = start < end ? 1 : -1)=>{
    let numArray = [];
    if (step > 0) {
        for(let i = start; i <= end; i += step){
            numArray.push(i);
        }
    } else {
        for(let i = start; i >= end; i += step){
            numArray.push(i);
        }
    }
    return numArray;
};
const sum = (numArray)=>{
    let s = 0;
    for (let value of numArray){
        s += value;
    }
    return s;
};
console.log(range(1, 10));
console.log(range(5, 2, -1));
const test = range(88, 6, -1);
console.log(test);
console.log(sum(test));

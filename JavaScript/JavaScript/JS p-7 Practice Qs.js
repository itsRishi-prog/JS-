//              JS p-7 Practice Qs.
//Qs1. Write an arrow function named array Average that accepts an array of numbers and returns the average of those numbers.
const arrayAverage=(arr) => {
    let total=0;
    for(let number of arr) {
        total += number;
    }
    return total / arr.length;
};

let arr=[1,2,3,4,5,6];
console.log(arrayAverage(arr));

//Qs2. Write an arrow function named is Even() that takes a single number as argument and returns if it is even or not.
let num = 4;
const isEven = (num) => num % 2 == 0;
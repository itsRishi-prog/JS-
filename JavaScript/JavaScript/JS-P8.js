//ARRAY METHODES

//forEach:- arr.forEach(some function definition or name);
let arr = [1, 2, 3, 4, 5];

function print(el){
    console.log(el);
}

arr.forEach(print);

//  Or

arr.forEach(function(el) {
    console.log(el);
});

//Map:- let newArr = arr.map(some function definition or name);
let num = [1, 2, 3, 4];

let double = num.map(function(el) {
    return el*2;
});

//filter :let newArr = arr.filter(some function definition or name);

let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];

let even = nums.filter( (num) => (num % 2 == 0) ); 

//every:- returns true if every element of array gives true for some function. else return false.
//        arr.every(some function definition or name);  
[1, 2, 3, 4].some( (el) => (el%2 == 0));

//reduce:- reduces the array to a single value 
//arr.reduce( reduce function with 2 variables for (accumulator, Element));
[1, 2, 3, 4].reduce( (res,el) => (res+el));

//reduce: finding max in an array

let Arr = [ 1, 4, 2, 5, 6, 7, 2, 9, 2];
// let max = -1;
// for (let i = 0; i < arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }

// console.log(max);

let max = arr.reduce((max, el) => {
    if (max < el){
        return el;
    } else {
        return max;
    }
});


//PRACTICE Qs
//check if all numbers in our array are multiple of 10 or not.

let numbers = [10, 20, 30, 40];
let ans = numbers.every((el) => el % 10 ==0);
console.log(ans);

//default parameters:- giving a default value to the arguments

// function func(a, b = 3){
//     do something;
// }

//spread:- Expands an iterable into multiple values
// function func(...arr){
//     do something
// }
let ARR = [1, 2, 3, 4, 5];
Math.min(...ARR);
console.log(ARR);

console.log(...ARR);

// Spread WITH ARRAY LITERALS
let newArr = [...ARR];
console.log(newArr);
newArr.push(6);
console.log(newArr);

let odd = [1, 3, 5, 7, 9];
let Even = [2, 4, 6, 8, 10];

let Nums = [...Even, ...odd];           // order very much matters
console.log("this are the numbers ",...Nums);

// Spread EITH OBJECT LITERALS
let data = {
    email: "bhagatsingh@bharat.com",
    Passward: "jaihind",
};

let dataCopy = {
    ...data, id: 123
};

console.log(dataCopy);


let obj = [..."rishi"];
console.log(...obj);


//REST: Allows a function to take an indeinite number of arguments and bundle them in an array
function SUM(...args){
    //arguments 
    for (let i=0; i < args.length; i++){
        console.log("you gave us: ", args[i]);
    }
}

function sum(...args){
    return args.reduce((sum, el) => sum + el);
}

function min(msg, ...args){
    console.log(msg);
    return args.reduce((min, el) => {
        if(min > el) {
            return el;
        } else {
            return min;
        }
    });
} 

//Destructuring:- Storing values of array into multiple variables

let names = ["Delhi", "Bombay", "Channayi", "Bangluru", "kolkata"];
let [winner, runnerup] = names;
console.log(winner, runnerup);

//  Or

// lat [winner, runnerup, ...others] = names;

//Destructuring (objects)

const student = {
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "math", "science"],
    username: "motabhai",
    Passward: "abcd",
};

let {user, Passward} = student;

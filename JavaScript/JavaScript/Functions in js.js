//FUNCTION IN JS

//what is the syntax to write function

//Funtion Definition(telling JS)
//  function funName(){
//      do somthing
//  }
function hello(){
    console.log("hello");
}
function printName(){
    console.log("rishi raj");
}
//Function Calling(using the function)
//  funcName();
hello();
printName();


//PRACTICE Qs
//create a function that prints a poem.
function printpoem(){
    console.log("motu sheth sadak pr let");
    console.log("aayi gadi phat gaya pet");
    console.log("gadi ka number 88");
    console.log("chal meri gadi INDIA gate");
}
printpoem();


//creat a function to roll a dice & always display the value of the dice (1 to 6).
function rollDice(){
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}
rollDice();

//Functin with Arguments:- value we pass to the function
// function funcName(arg1,arg2...){
//     do somthing
// }
function newName(name){
    console.log(name);
}
newName("mehul");

//PRACTICE Qs
//create a function that gives us the average of 3 numbers.
function calcAvg(a, b, c){
    let avg = (a+b+c)/3;
    console.log(avg);
}

calcAvg(2,3,4);

//create a function that prints the multiplocation table of a number.]
function printTable(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}

printTable(17);

//RETURN:-return keyword is used to return some value from the function
// function funcName(arg1, arg2...){
//     do something
//     return Val;
// }
function isAdult(age){
    if(age >= 18){
        return "adult";
    } else {
        return "not adult";
    }
}

//PRACTICE Qs
//create a function that returns the sum of numbers from 1 to n.
function getSum(n){
    let sum = 0;
    for (let i=1; i<=n; i++){
        sum += i;
    }
    return sum;
}

//create a function that returns the concatenation of all string in an array.
let str = ["hi", "hello", "bye", "!"];
function concat(str){
    let result = "";
    for(let i=0; i<str.length; i++){
        result += str[i];
    }
    return result;
}

//SCOPE:- scope determines the accessibility of variables, objects and function from different parts of the code.
//1. Function scope: variables defined inside a function are not accessible (visible) from outside the function.
let sum = 54; //global scope
function calSum(a, b){
    let sum = a+b;
    console.log(sum);
}
calSum(1, 2);
//2. Block scope: variable declared inside a {} block cannot be accessed from outside the block
// {
//     let a = 25
// }
// console.log(a);

// for(let i=1; i<=5; i++){
//     console.log(i); //block scope
// }

//3.lexical scope: a variable defined outside a function can be accessible inside another function defined after the variable declaration.
//  The opposite is NOT true
function outerFunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){
        console.log(x);
    }
    innerFunc();
}

//PRACTICE Qs
//what will be the output?
let greet = "hello";//global scope
function changeGreet() {
    let greet = "namaste";//function scope
    console.log(greet);
    function innerGreen() {
        console.log(greet);//lexical scope
    }
}
console.log(greet);
changeGreet();

//Function expressions(name less function)
// const variable = function(arg1, arg2..){
//     do or return somwthing
// }
let name = "rishi";
let Sum = function(a, b){
    return a+b;
}

//High order functions:- A function that does one or both:
//  (1.)take one or multiple function as arguments
// function multipleGreet(func, n){
//     for(let i=1; i<=n; i++){
//         func();       [somthing wrong]
//     }
// }
// let Greet = function(){
//     console.log("hello");
// }
// multipleGreet(greet, 2);

//  (2.)return a function
function oddOrEvenFactory(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n%2 ==0));
        }
        return odd;
    } else if(request == "even"){
        let even = function(n){
            console.log(n%2 == 0);
        }
        return even;
    }else{
        console.log("wrong request");
    }
}
let request = "odd";

//Methods:- action that can be performed on an object.
const calculator = {
    num: 55,
    add: function(a, b){
        return a + b;
    },
    sub: function(a, b){
        return a-b;
    },
    mul: function(a, b){
        return a*b;
    }
};

//shorthand
// const calculator = {
//     add(a,b){
//         return a + b;
//     },
//     sub(a,b){
//         return a - b;
//     }
// };
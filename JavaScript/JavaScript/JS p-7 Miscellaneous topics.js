//Arrow functions: variable ko assing krte hain yaa call back ki tarha use kete hain. 
const sum = (a,b) =>{
    console.log(a+b);
}
//1. implicit return
const mul = (a,b) => (
    a * b
);

//Set timeout(in built function): setTimeout(function, timeout) => function means callback, timeout => how much time taken to recall function i.e. always in milli seconds 1000ms=1s.
console.log("hi there!");

setTimeout ( () => {
    console.log("welcome to my home!");
}, 1000);

console.log("namaste");

//set interval: setinterval(function, time)
// setInterval(()=>{
//     console.log("JAI SHRI RAM");
// }, 2000);
//TO STOP THE REPETATON USE(clearId) in console

//this keyword with Arrow Functions
//for arrow: this funtion checks its parent status but for funtion : this only check function's status
const student = {
    name: "rishi",
    marks: 82,
    prop: this,//globle scope
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent's scope -> window
        return this.marks;
    },
    getInfo1: function (){
        setTimeout(() => {
            console.log(this); //student object
        }, 2000);
    },
    getInfo2: function (){
        setTimeout(function () {
            console.log(this); //window object
        }, 2000);
    },
};


//PRACTICE Qs
//write an arrow function that returns the square of a numbeer 'n'.
const square = (n) => n * n;
console.log(square(4));

//write a function that prints "hello world" 5 times at interval of 2s each.
let id = setInterval(() => {
    console.log("hello world");
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 10000);
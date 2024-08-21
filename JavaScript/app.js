let pencilPrice =10;
let erasorPrice = 5;
// let output = "The total price is : " + (pencilPrice + erasorPrice) + "Rupees.";
console.log(`The total price is : ${pencilPrice + erasorPrice} Rupees`);


//Arithmetic Operators
let a = 10;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//Comparision Operators
let age = 18;
console.log(age > 18);
console.log(age >= 18);
console.log(age < 18);
console.log(age <= 18);
console.log(age == 18);
console.log(age != 18);


//Conditional statements
console.log("before my if statements");
// let agE = 23;
let agE = 13;
if(agE >= 18){
    console.log("you can vote");
}
console.log("after my if statements");
if(agE > 20){
    console.log("you are in yours 20s")
}

let firstName = "RISHI";
if(firstName == "MEHUL"){
    console.log(`welcome ${firstName}`);
}


//Practice question.
//CREATE A TRAFFIC LIGHT SYSTEM THAT SHOWS WHAT TO DO BASED ON COLOR.
let color = "red";
if(color==="red"){
    console.log("stop!");
}else if(color==="yellow"){
    console.log("slow down");
}else{
    console.log("go");
}

//create a system to calulate popcorn price based on the size customer asked for
let size ="XL";
if(size === "XL"){
    console.log("price is Rs.250");
}else if(size === "L"){
    console.log("price is Rs.200");
}else if(size === "M"){
    console.log("price is Rs.100");
}else {
    console.log("price is Rs.50");
}

//nested if-else
let marks = 45;
if (marks >= 33){
    console.log("Pass");
    if (marks >= 80){
        console.log("Grade : O");
    }else {
        console.log("Grade : A");
    }
} else {
    console.log("Better luck next time!")
}


//practice question
//a "good string" is a string that starts with the letter 'a' and has a length > 3. write a program to find if a string is good or not.
let string = "apple";
if((string[0]==='a') && (string.length>3)){
    console.log("good string");
} else{
    console.log("not a good string");
}


//switch statement 
let COLOR = "red";
switch (COLOR){
    case "red":
    console.log("stop");
    break;
    case "yellow":
    console.log("slow down");
    break;
    case "green":
    console.log("go");
    break;
    default:
    console.log("light is broken");
}


let day = 1;
switch (day){
    case 1:
        console.log("Monday");
        break;
        case 2:
        console.log("Tuesday");
        break;
        case 3:
        console.log("wednesday");
        break;
        case 4:
        console.log("Thursday");
        break;
        case 5:
        console.log("Friday");
        break;
        case 6:
        console.log("Saturday");
        break;
        case 7:
        console.log("Sunday");
        break;
        default:
            console.log("wrong day");
}

//Alart 

// alert("alert");
// console.log("please alert");
// console.error("error");
// console.warn("warning");


// Prompt CAN TAKE USER INPUT


let fName = prompt("enter your name : ");
console.log(fName);


//  Practice Questions

//Qs1. Create a number variable num with some value. Now, print “good” if the number is divisible by 10 and print “bad” if it is not.
let num;
num = 50;
if (num/10){
    console.log("good");
}else{
    console.log("bad");
}

//Qs2. Take the user's name & age as input using prompts. Then return back the following statement to the user as an alert (by substituting their name & age):name is age year sold.[Use template Literals to print this sentence]
let Name = prompt("enter your name : ");
let AGE = prompt("enter your age : ");
alert(`${Name} is ${AGE} years old.`);




//Qs3. Write a switch statement to print the months in a quarter. 
//Months in Quarter 1 : January, February, March
//Months in Quarter 2 : April, May, June 
//Months in Quarter 3 : July, August, September 
//Months in Quarter 4 : October, November, December

//STRING METHODS

//1. TRIM STRING
let password = prompt("set your password");
let newPass = password.trim();
console.log(newPass);

//2. str.toUpperCase(),  str.toLowerCase()
let name= ("rishi"); 

//3. str.indexOf("") 
//str.slice("5/2,5/-number=>length-num")
let msg = "complete";
console.log(msg.slice(0,3)); // to print COM
//replace:- searches a value in the string & returns a new string with the value replaced
//Ex- msg.replace("plete","press");
//repeat:- returns a string with the number of copies of a string Ex- msg.repeat(n);


//Practice question 
//Qs. for the given string: let msg = "help";  trim it & convert it to uppercase.
console.log(msg.trim().toUpperCase()); 


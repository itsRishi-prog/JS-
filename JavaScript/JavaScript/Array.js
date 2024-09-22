let arr = ["a","b","c"];
//mixed
// let mixed = ["ram", 23, 43.9];
//empArr = [];
//Arrays are mutable in JS
//Methods 
//1.) Push: add to end 
//2.) unshift: add to start 
//3.) pop: delete from end & returns it 
//4.) shift: delete from start & returns it
//5.) indexOf: return index 
//6.) includes: search for a value 
//7.) concat:- merge 2 array 
//8.) reverse:- reverse an array 
//9.) slice:- copies a portion of an array
//10.) splice:- removes/ replaces/ add elements in place
//11.) sort:- sorts an array[not work on numbers just like alphabets(sorted on the basis of string{first number --> string then it will sorted})]
//Practice Qs
//Qs. For the given start state of an array, change it to final form using methods.
//Start: ['january', 'july', 'march', 'august']
//end: ['july', 'june', 'march', 'august']
//sol let months = ["January","July","March","August"];
    // months
    // (4) ['January', 'July', 'March', 'August']
    // months.shift();
    // 'January'
    // months.shift();
    // 'July'
    // months
    // (2) ['March', 'August']
    // months.unshift("June");
    // 3
    // months
    // (3) ['June', 'March', 'August']
    // months.unshift("July");
    // 4
    // months
    // (4) ['July', 'June', 'March', 'August']


// Practice Qs 
// Qs. For the given start state of an array, change it to final form using splice.
// start :[' january' , 'july' , 'march' , 'august' ]
// final :['july', 'june', 'march', 'august' ]

// Qs. Return the index of the "javascript" from the given array, if it was reversed.
// ['c' , 'c+', 'html', 'javascript', 'python', 'java', 'c#' , 'sql' ]

// let lang = ["c", "c++", "html", "javascript", "python", "java", "c#"];
// undefined
// lang.push("sql");
// 8
// lang
// (8) ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql']
// lang.reverse();
// (8) ['sql', 'c#', 'java', 'python', 'javascript', 'html', 'c++', 'c']
// lang
// (8) ['sql', 'c#', 'java', 'python', 'javascript', 'html', 'c++', 'c']
// lang.reverse().indexOf("javascript");

//JS(Part3) Practice Questions 
//Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
//For example: for array[7,9,0,-2] and n=3 Print [7,9,0]

let ar=[7,9,0,-2]; 
let n=3; 
let ans = ar.slice(0,n); 
console.log(ans)

//Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any positive number]. 
//For example: for array[7,9,0,-2] and n=3 Print [9,0,-2]
let arR=[7,9,0,-2];
let N=3;
let anS= arR.slice(arR.length-n);
console.log(anS);
//Qs3. Write a JavaScript program to check whether a string is blank or not.
let str=prompt("please enter a string");
if(str.length==0)
    {console.log("string is empty");}
else{
    console.log("stringisnotempty");
}
//Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case. 
let stR="ApNaCoLlEgE";
let idx=3; 
if(str[idx] == str[idx].toLowerCase()){
    console.log("character is lowercase");
}else{
    console.log("character is not lowercase");
}
//Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.
let sTr=prompt("please enter a string");
console.log(`original string=${str}`);
console.log(`string without spaces=${str.trim()}`);
//Qs6. Write a JavaScript program to check if an element exists in an array or not.
let Arr=["hello",'a',23,64,99,-6];
let item=64; 
if(arr.indexOf(item) !=-1)
    {console.log("element exists in array");
}else {console.log("element doesn't exist in array");
}
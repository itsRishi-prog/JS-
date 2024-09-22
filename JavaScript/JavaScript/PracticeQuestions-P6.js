//Qs1. Write a JavaScript function that returns array elements larger than a number.
let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;
//elements larger than a number num
function getElements(arr,num) {
    for(let i=0; i<arr.length; i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
getElements(arr,num);

//Qs2. Write a JavaScript function to extract unique characters from a string.
//     Example: str=“abcdabcdefgggh”
//              ans=“abcdefgh”
let str="abcdabcdefgggh";
//function to get String with all unique elements 
function getUnique(str){
    let ans="";
    for(let i=0; i<str.length; i++){
        let currChar=str[i];
        if(ans.indexOf(currChar) == -1){
        //if current character is not added, then add it in ans.
        //Other wise it is a duplicate.
            ans+=currChar;
        }
    }
    return ans;
}
getUnique(str);

//Qs3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
//     Example: country = ["Australia","Germany","United States of America"]
//              output: "United States of America"
let country=["Australia","Germany","United States of America"];
function longestName(country){
    let ansIdx=0;
    for(let i=0; i< country.length; i++){
        let ansLen=country[ansIdx].length;
        let currLen=country[i].length;
        if (currLen>ansLen){
            ansIdx=i;
        }
    }
    return country[ansIdx];
}
longestName(country);

//Qs4. Write a JavaScript function to count the number of vowels in a String argument.
let Str = "jaihind";
function countVowels(Str){
    let count = 0;
    for (let i=0; i<Str.length; i++){
        if(
            Str.charAt(i) == "a" ||
            Str.charAt(i) == "e" ||
            Str.charAt(i) == "i" ||
            Str.charAt(i) == "o" ||
            Str.charAt(i) == "u"
        ) {
            count++;
        }
    }
    return count;
}

//Qs5. Write a JavaScript function to generate a random number within a range (start, end).
let start=100;
let end=200;
function generateRandom(start, end){
    let diff = end-start;
    return Math.floor(Math.random( )* diff) + start;
}
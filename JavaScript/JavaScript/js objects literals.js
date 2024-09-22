//js objects literals :- used to store keyed collections & complex entities.
//property => (key, value) pair
//JS automatically converts objects keys to strinfs.
//Even is we made the number as a key , the number will be converted to string.


//how to create a literals
//eg
let student = {
    name:"Rishi",
    age: 19,
    marks: 82.6,
};

//PRACTICE QUESTION
//create an objest literal for the properties of twitter post which includes- username, content, likes, reposts, tag
let post = {
    usrename: "@rishiraj",
    content: "This is my #firstPost",
    likes: 150,
    reposts: 5,
    tags: ["@mehulkumar","@rajeshkumar"]
};
//how to get value:- objectName["name"]   Or   objectName.name
//Add or update step 1.-> objectName.name step 2.-> objectName.name = "newName"
//if we have to delete any property then just ADD delete key before calling
//object of object:- storing information of multiple atudents
const classInfo = {
    rishi : {
        grade: "C",
        city: "Koderma"
    },
    ranjan : {
        grade: "B",
        city: "Madhuban"
    },
    aditya : {
        grade: "B",
        city: "Barhi"
    },
    shankar : {
        grade: "B",
        city: "Barkatha"
    },
    jatin : {
        grade: "B",
        city: "Hazaribagh"
    }
};

//array of objects

const ClassInfo = [
    {
        name: "rishi",
        grade: "C",
        city: "Koderma"
    },
    {
        name: "ranjan",
        grade: "B",
        city: "Madhuban"
    },
    {
        name: "aditiya",
        grade: "B",
        city: "Barhi"
    },
    {
        name: "shankar",
        grade: "B",
        city: "Brkatha"
    },
    {
        name: "jatin",
        grade: "B",
        city: "Hazaribagh"
    }
]

//MATH OBJECT
//PROPERTIES :-  Math.PI   ,    Math.E
//METHODS :- Math.abs(n) -> gives (+)=>(+) but also (-)=>(+),
//  Math.pow(a,b) -> a^b,  Math.floor(n) -> gives =<n eg*- Math.floor(5)=5, Math.floor(5.99999)=5, Math.floor(5.5)=5
//  similarly! Math.ceil(n) eg*- Math.floor(5)=5, Math.floor(5.99999)=6, Math.floor(5.5)=6,  
//  WE USE MATH OBJETC BECAUSE OF Math.random() -> it can give any number present between 0 and 1 (but except 1(0 is inclusive and 1 is exclusive))
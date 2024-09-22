// DOM Events :- events are signals that something has occurred. (user inputs / actions)
// # onclick (when an element is clicked)
// # onmouseenter (when mouse enters an element)

// let btn = document.querySelector("button");
// console.dir(btn);

//         btn.onclick = function () {
//             console.log("button was clicked");
//         //  alert("button was clicked");
//         };

// Or
        // function sayHello(){
        //     alert("Hello!");
        // }

        // btn.onclick = sayHello;

// similarly If we will have to apply this event on all btns then we can also do this in another way
 
// let btns = document.querySelectorAll("button");

// for (btn of btns){
    // btn.onclick = sayHello;
    // btn.onmouseenter = function (){
    //     console.log("you entered a button");
    // };

//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("click", sayName);
// }

// function sayHello(){
//     alert("Hello!");
// }

// function sayName(){
//     alert("Prithvi");
// }

// Event Listener
// # addEventListener
// "this" in Event Listeners:- When 'this' is used in a callback of event handler of something, it refers to that something.
    // let btn = document.querySelector("button");

    // btn.addEventListener("click",function(){
    //     console.dir(this.innerText);
    //     this.style.backgroundColor = "blue";
    // });

// "From" events

// for form 


// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.dir(form);

//     let user = this.elements[0];
//     let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });

// to stay on the defalt or present page we use "event.preventDefault"
// Extracting Form Data

// "change" event:- the change event occurs when the value of an element has been changed (only works in <input>, <textarea> and <select> elements).
// "input" event:- the input fires when the value of an <input>, <select>, or <textarea> element has been changed.

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
});
let user = document.querySelector("#user");

user.addEventListener("change", function() {
    console.log("input changed");
    console.log("final value = ", user.value);
});
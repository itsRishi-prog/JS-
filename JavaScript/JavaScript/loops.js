//for loop

//for(initialisation; condition; updation){
//  do somting
//}

// for(let i = 1; i<=5; i++){
//     console.log(i);
// }

//print all odd numbers (1-15)
// for(let i=1; i<=15; i=i+2){
//     console.log(i);
// }


//print all even numbers (2-10)
for(let i=2; i<=10; i=i+2){
    console.log(i);
}

//infinite loops:- ending condition missing 

//print the multiplication table for 5

for(let n=5; n<=50; n=n+5){
    console.log(n);
}

//nested for loop:- loop {loop {loop...}}
//Ex
for(let a=1; a<=3; a++){
    console.log(`outer loop ${a}`);
    for(let b=1; b<=3; b++){
        console.log(b);
    }
}

//while loop
//while(condition){
//do something
//}

//ex
let c=1;
while(c<=5){
    console.log(c);
    c++;
}
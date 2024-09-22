//this Keyword: "This" keyword refers to an objects that is executing the current piece of code.
const student = {
    name: "rishi",
    age: "15",
    eng: "80",
    math: "97",
    phy: "74",
    getAvg(){
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(avg);
    }
}

function getAvg(){
    console.log(this);
}

//try & catch
//The try statement allows you to define a block of code to be tested for errors while it is being executed.
//The catch ststement allows you to define a block of code to be executed, if an error occurs in the try block.
try {
    console.log(a);
} catch {
    console.log("variable a doesn't")
}
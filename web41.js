console.log("this ttutorial 41")

function greet(name, greetText){
    console.log(greetText + " " + name)
    console.log(name + " is a good boy")
}

function sum(a, b, c){
    let d = a + b + c;
    return d;
    // this line will never excuted (unreachable code)
    // console.log("function is returned");
}

let name = "harry";
let name1 = "kunal";
let name2 = "badda";
let name3 = "alia";
let greetText = "good morning";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);

let returnval = sum(1,2,3);
console.log(returnval)
// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
// function declaration


function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Jack")); //Hello, Jack!

//function expression

const greet2 = function (name) {
    return `Hello, ${name}!`;
}
console.log(greet2("Jill")); //Hello, Jill!

//arrow function(mern a besshi use hoy)

const greet3 = (name) => `Hello, ${name}!`;
console.log(greet3("John")); //Hello, John!



// arrow function with multiple parameters


//single parameter -> bracket lagbe na
const double = x => x * 2;
console.log(double(5)); //10

//multiple parameters -> bracket lagbe
const add = (a, b) => a + b;
console.log(add(3, 4)); //7

//multiple lines -> curly braces lagbe+ return statement lagbe
const multiply = (a, b) => {
    const result = a * b;
    return result;
}
console.log(multiply(3, 4)); //12

//object return korte hole () lagbe
const getUser = (name) => ({ name, role: "admin" });
console.log(getUser("Jack")); //{ name: 'Jack', role: 'admin' }



//parameters 

//default parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); //Hello, Guest!
console.log(greet("Jack")); //Hello, Jack!

//rest parameters -> baki parameters gula ke array te convert kore
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); //15
console.log(sum(4, 5)); //9

//destructering parameters -> object er property gula ke direct parameter hishebe use kora
function userCard({ name, age, role = "user" }) {
    return `Name: ${name} is ${age} years old, Role: ${role}`;
}
console.log(userCard({ name: "Jack", age: 23 })); //Name: Jack is 23 years old, Role: user



//first class functions -> function ke variable er moto treat kora jay.. function ke parameter hishebe pass kora jay.. function ke return korte paray

//function ke variable a store kora
const sayHi = () => console.log("Hi");

//function ke argument hishebe pass kora
function runFunc(fn) {
    fn(); //fn ke call kora.. sayHi function ke call kora hobe..
}
runFunc(sayHi); //Hi

//function theke function return kora
function multiplier(x) {
    return (y) => x * y; //x ke closure kore rakha.. multiplier function call korle x er value set hobe.. return function y ke parameter hishebe nibe.. x * y return korbe..
}
const double = multiplier(2); //x er value 2 set holo.. double function y ke parameter hishebe nibe.. 2 * y return korbe..
console.log(double(5)); //10
const triple = multiplier(3); //x er value 3 set holo.. triple function y ke parameter hishebe nibe.. 3 * y return korbe..
console.log(triple(5)); //15    



//callback function -> function ke parameter hishebe pass kora jay.. callback function ke specific event er por call kora hoy..

function fetchData(callback) {
    const data = { name: "Jack", age: 23 }; //data fetch kora holo.. real life a api call er por data asbe..
    callback(data); //data ke callback function a pass kora holo..
}
fetchData(user => {
    console.log(user.name); //Jack
    console.log(user.age); //23
});

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num)); //1 2 3 4 5.. forEach method a callback function pass kora hoy.. prottek number ke num parameter hishebe nibe.. console.log(num) call korbe.. prottek number print hobe..
numbers.map(num => num * 2); //[ 2, 4, 6, 8, 10 ].. map method a callback function pass kora hoy.. prottek number ke num parameter hishebe nibe.. num * 2 return korbe.. notun array return hobe jekhane prottek number double hobe..
console.log(numbers.filter(num => num % 2 === 0)); //[ 2, 4 ].. filter method a callback function pass kora hoy.. prottek number ke num parameter hishebe nibe.. num % 2 === 0 check korbe.. jodi true hoy tahole oi number return korbe.. notun array return hobe jekhane sudhu even number thakbe..
numbers.filter(num => num % 2 === 0); //[ 2, 4 ].. filter method a callback function pass kora hoy.. prottek number ke num parameter hishebe nibe.. num % 2 === 0 check korbe.. jodi true hoy tahole oi number return korbe.. notun array return hobe jekhane sudhu even number thakbe..



//IIFE (Immediately Invoked Function Expression) -> function ke declare korar sathe sathe call kora hoy.. IIFE er maddhome private scope create kora jay.. variable global scope a pollute hoy na..

(function () {
    const message = "i want to be a software engineer"; //message variable ke IIFE er scope a rakha holo.. global scope a pollute hoy nai.. 
    console.log(message);
})(); //function ke declare korar sathe sathe call kora holo.. IIFE er maddhome message variable ke private scope a rakha holo.. global scope a pollute hoy nai..

//arrow function a IIFE

(() => {
    const message = "i want to be a AI engineer"; //message variable ke IIFE er scope a rakha holo.. global scope a pollute hoy nai.. 
    console.log(message);
})(); //function ke declare korar sathe sathe call kora holo.. IIFE er maddhome message variable ke private scope a rakha holo.. global scope a pollute hoy nai..

//global scope a pollute na korar jonno IIFE use kora hoy.. IIFE er maddhome variable ke private scope a rakha jay.. global scope a pollute hoy na.. app initialization a use kora hoy.. jekhane kichu setup korte hoy.. IIFE er maddhome oi setup ke private scope a rakha jay.. global scope a pollute hoy na..

(async () => {
    const data = await fetchSomething(); //data fetch kora holo.. real life a api call er por data asbe..
    console.log(data); //data print kora holo..
})(); //function ke declare korar sathe sathe call kora holo.. IIFE er maddhome data variable ke private scope a rakha holo.. global scope a pollute hoy nai.. async IIFE use kora hoy jodi async code run korte hoy.. jekhane await use korte hoy.. IIFE er maddhome oi async code ke private scope a rakha jay.. global scope a pollute hoy na..



//impure function -> function je same input er jonno different output dey.. side effect thake.. global variable modify kore.. external state modify kore.. pure function er opposite..
let count = 0; //count variable ke global scope a declare kora holo.. global scope a pollute hoy nai.. IIFE er maddhome count variable ke private scope a rakha jay.. global scope a pollute hoy na..
function increment() {
    count++; //count variable ke increment kora holo.. IIFE er maddhome count variable ke private scope a rakha jay.. global scope a pollute hoy na..
    console.log(count); //count variable ke print kora holo..
}
increment();

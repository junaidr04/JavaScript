//scope mane kono variable kothay access kora jabe.. scope er maddhome variable er accessibility control kora hoy.. JavaScript a 3 type er scope ache -> global scope, function scope, block scope

//global scope -> shob khane access kora jay.. global scope a declare kora variable shob function a access kora jay.. global scope a declare kora variable ke global variable bola hoy..
const globalVar = "I am a global variable"; //global scope a declare kora variable.. shob khane access kora jay..
function test() {
    //function scope shudhu ei function er moddhe access kora jay.. function scope a declare kora variable ke local variable bola hoy..
    const localVar = "I am a local variable"; //function scope a declare kora variable.. shudhu ei function er moddhe access kora jay..
    console.log(globalVar); //I am a global variable.. global scope a declare kora variable ke function a access kora jay..
    console.log(localVar); //I am a local variable.. function scope a declare kora variable ke function er moddhe access kora jay..
}
test(); // globalVar and localVar er value print hobe.. global scope a declare kora variable ke function a access kora jay.. function scope a declare kora variable ke function er moddhe access kora jay..
console.log(globalVar); //I am a global variable.. global scope a declare kora variable ke function a access kora jay..
//console.log(localVar); //ReferenceError: localVar is not defined.. function scope a declare kora variable ke function er baire access kora jay na..



// global scope
const name = "Jack"; //global scope a declare kora variable.. shob khane access kora jay..
//function scope
function greet() {
    const message = "Hello"; //function scope a declare kora variable.. shudhu ei function er moddhe access kora jay..
    console.log(message); //Hello.. function scope a declare kora variable ke function er moddhe access kora jay..
}
greet(); //Hello.. function scope a declare kora variable ke function er moddhe access kora jay..
console.log(name); //Jack.. global scope a declare kora variable ke shob khane access kora jay..
//console.log(message); //ReferenceError: message is not defined.. function scope a declare kora variable ke function er baire access kora jay na..

//block scope -> {} er bhitore let/const diye declare kora variable block scope a thake.. block scope a declare kora variable ke block er bhitore access kora jay.. block scope a declare kora variable ke block er baire access kora jay na..
{
    const blockVar = "I am a block variable"; //block scope a declare kora variable.. block scope a declare kora variable ke block er bhitore access kora jay..
    const blockConst="Me too"; //block scope a declare kora variable.. block scope a declare kora variable ke block er bhitore access kora jay..
    var notBlock= "I am not a block variable"; //var diye declare kora variable block scope a thake na.. function scope a thake.. var diye declare kora variable ke block er baire access kora jay..
}
//console.log(blockVar); //ReferenceError: blockVar is not defined.. block scope a declare kora variable ke block er baire access kora jay na..
//console.log(blockConst); //ReferenceError: blockConst is not defined.. block scope a declare kora variable ke block er baire access kora jay na..
console.log(notBlock); //I am not a block variable.. var diye declare kora variable ke block er baire access kora jay.. var diye declare kora variable block scope a thake na.. function scope a thake..    



//scope chain - kibhbe variable khoja hoy.. jodi kono variable current scope a na thake tahole parent scope a khoja hoy.. jodi parent scope a na thake tahole grandparent scope a khoja hoy.. eivabe global scope porjonto khoja hoy.. jodi global scope a o na thake tahole ReferenceError throw kora hoy..

const a="global"; //global scope a declare kora variable.. shob khane access kora jay..
function outer() {
    const b="outer"; //outer function er scope a declare kora variable.. shudhu outer function er moddhe access kora jay..
    function inner() {
        const c="inner"; //inner function er scope a declare kora variable.. shudhu inner function er moddhe access kora jay..
        console.log(a); //global.. scope chain er maddhome global scope a khoja hoy.. global scope a declare kora variable ke shob khane access kora jay..
        console.log(b); //outer.. scope chain er maddhome parent scope a khoja hoy.. outer function er scope a declare kora variable ke outer function er moddhe access kora jay..
        console.log(c); //inner.. inner function er scope a declare kora variable ke inner function er moddhe access kora jay..
    }
    inner(); //global, outer, inner print hobe.. scope chain er maddhome global scope, parent scope, current scope a khoja hoy.. global scope a declare kora variable ke shob khane access kora jay.. outer function er scope a declare kora variable ke outer function er moddhe access kora jay.. inner function er scope a declare kora variable ke inner function er moddhe access kora jay..
    //console.log(c); //ReferenceError: c is not defined.. inner function er scope a declare kora variable ke outer function er baire access kora jay na..
}
outer(); //global, outer, inner print hobe.. scope chain er maddhome global scope, parent scope, current scope a khoja hoy.. global scope a declare kora variable ke shob khane access kora jay.. outer function er scope a declare kora variable ke outer function er moddhe access kora jay.. inner function er scope a declare kora variable ke inner function er moddhe access kora jay..



// let vs var vs const -> let and const block scope a thake.. var function scope a thake.. let and const ke block er baire access kora jay na.. var ke block er baire access kora jay.. let and const ke reassign kora jay na.. var ke reassign kora jay..

//var - function scoped, hoisted, avoid koro
function test() {
    if (true) {
        var x = 10; //var diye declare kora variable function scope a thake.. var diye declare kora variable ke block er baire access kora jay..
    }
    console.log(x); //10.. var diye declare kora variable ke block er baire access kora jay.. var diye declare kora variable function scope a thake..
}
test(); //10.. var diye declare kora variable ke block er baire access kora jay.. var diye declare kora variable function scope a thake..

//let - block scoped, not hoisted, use koro
function testLet() {
    if (true) {
        let y = 20; //let diye declare kora variable block scope a thake.. let diye declare kora variable ke block er baire access kora jay na..
        console.log(y); //20.. let diye declare kora variable ke block er bhitore access kora jay..
    }
    //console.log(y); //ReferenceError: y is not defined.. let diye declare kora variable ke block er baire access kora jay na..
}
testLet(); //20.. let diye declare kora variable ke block er bhitore access kora jay..

//const - block scoped, not hoisted, use koro
function testConst() {
    if (true) {
        const z = 30; //const diye declare kora variable block scope a thake.. const diye declare kora variable ke block er baire access kora jay na..
        console.log(z); //30.. const diye declare kora variable ke block er bhitore access kora jay..
    }
    //console.log(z); //ReferenceError: z is not defined.. const diye declare kora variable ke block er baire access kora jay na..
}
testConst(); //30.. const diye declare kora variable ke block er bhitore access kora jay..



//closure -> function er sathe oi function er surrounding state ke closure kore rakha.. closure er maddhome function surrounding state ke access korte pare.. closure er maddhome private variable create kora jay.. closure er maddhome data encapsulation kora jay..

function makeCounter() {
    let count = 0; //ei variable ta "close over" hoye jabe.. makeCounter function call korle count variable create hobe.. 
    return function () { //ei function ta closure kore rakha hobe.. makeCounter function call korle ei function ta return hobe.. ei function ta count variable ke access korte parbe..
        count++; //count variable ke increment kora holo.. ei function ta count variable ke access korte parbe.. closure er maddhome count variable ke access kora jay..
        //console.log(count); //count variable ke print kora holo.. ei function ta count variable ke access korte parbe.. closure er maddhome count variable ke access kora jay..
        return count; //count variable ke return kora holo.. ei function ta count variable ke access korte parbe.. closure er maddhome count variable ke access kora jay..
    }
}
const counter = makeCounter(); //makeCounter function call korle count variable create hobe.. counter variable a oi function ta assign hobe jeta count variable ke access korte parbe.. closure er maddhome count variable ke access kora jay..
console.log(counter()); //1.. counter function call korle count variable increment hobe.. closure er maddhome count variable ke access kora jay..
console.log(counter()); //2.. counter function call korle count variable increment hobe.. closure er maddhome count variable ke access kora jay..
console.log(counter()); //3.. counter function call korle count variable increment hobe.. closure er maddhome count variable ke access kora jay..
//console.log(count); //ReferenceError: count is not defined.. count variable ke closure kore rakha holo.. count variable ke makeCounter function er scope a rakha holo.. count variable ke makeCounter function er baire access kora jay na.. closure er maddhome count variable ke access kora jay.. closure er maddhome count variable ke private variable hishebe use kora jay..



// closure er real use cases

//data privacy -> closure er maddhome private variable create kora jay.. private variable ke closure kore rakha jay.. private variable ke direct access kora jay na.. private variable ke access korte hole closure function ke call korte hoy..
function createUser(name) {
    let _password = "secret123"; //password variable ke closure kore rakha holo.. createUser function call korle _password variable create hobe.. _password variable ke direct access kora jay na.. _password variable ke access korte hole closure function ke call korte hoy..
    return {
        getName: () => name, //name variable ke closure kore rakha holo.. getName function call korle name variable ke access kora jay.. closure er maddhome name variable ke access kora jay..
        checkPassword: (input) => input === _password //checkPassword function call korle input parameter ke _password variable er sathe compare kora jay.. closure er maddhome _password variable ke access kora jay..
    }
}
const user = createUser("Jack"); //createUser function call korle _password variable create hobe.. user variable a oi object ta assign hobe jeta name variable ke access korte pare.. closure er maddhome name variable ke access kora jay.. closure er maddhome _password variable ke access kora jay..
console.log(user.getName()); //Jack.. getName function call korle name variable ke access kora jay.. closure er maddhome name variable ke access kora jay..
console.log(user.checkPassword("secret123")); //true.. checkPassword function call korle input parameter ke _password variable er sathe compare kora jay.. closure er maddhome _password variable ke access kora jay..
console.log(user.checkPassword("wrongpassword")); //false.. checkPassword function call korle input parameter ke _password variable er sathe compare kora jay.. closure er maddhome _password variable ke access kora jay.. 



//function factory -> closure er maddhome function factory create kora jay.. function factory er maddhome notun function create kora jay.. function factory er maddhome code reuse kora jay..
function multiplier(x) {
    return (y) => x * y; //x ke closure kore rakha.. multiplier function call korle x er value set hobe.. return function y ke parameter hishebe nibe.. x * y return korbe..
}
const double = multiplier(2); //x er value 2 set holo.. double function y ke parameter hishebe nibe.. 2 * y return korbe..
console.log(double(5)); //10
const triple = multiplier(3); //x er value 3 set holo.. triple function y ke parameter hishebe nibe.. 3 * y return korbe..
console.log(triple(5)); //15
const times10 = multiplier(10); //x er value 10 set holo.. times10 function y ke parameter hishebe nibe.. 10 * y return korbe..
console.log(times10(5)); //50.. times10 function call korle y er value 5 set hobe.. 10 * 5 return korbe.. closure er maddhome x variable ke access kora jay.. closure er maddhome x variable ke private variable hishebe use kora jay.. function factory er maddhome notun function create kora jay.. function factory er maddhome code reuse kora jay..



// lexical scope -> function er scope ta tar declaration er location er upor depend kore.. function jekhane declare kora hoy, tar surrounding scope ke access korte pare.. function jekhane call kora hoy, tar surrounding scope ke access korte pare na.. lexical scope er maddhome function er surrounding state ke access kora jay.. lexical scope er maddhome closure create kora jay..

const x = "outer x"; //global scope a declare kora variable.. shob khane access kora jay..
function outer() {
    const x = "outer x"; //outer function er scope a declare kora variable.. shudhu outer function er moddhe access kora jay.. lexical scope er maddhome outer function er surrounding scope a declare kora variable ke access kora jay..
    function inner() {
        console.log(x); //outer x.. lexical scope er maddhome inner function er surrounding scope a declare kora variable ke access kora jay.. outer function er scope a declare kora variable ke inner function er moddhe access kora jay..
    }
    return inner; //inner function ke return kora holo.. inner function ke call korle x variable ke access kora jay.. lexical scope er maddhome inner function er surrounding scope a declare kora variable ke access kora jay..
}
const fn = outer(); //outer function call korle inner function return hobe.. fn variable a oi inner function ta assign hobe.. inner function ke call korle x variable ke access kora jay.. lexical scope er maddhome inner function er surrounding scope a declare kora variable ke access kora jay..
fn(); //outer x.. inner function call korle x variable ke access kora jay.. lexical scope er maddhome inner function er surrounding scope a declare kora variable ke access kora jay.. outer function er scope a declare kora variable ke inner function er moddhe access kora jay..
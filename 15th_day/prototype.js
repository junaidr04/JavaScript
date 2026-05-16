// JavaScript এ প্রতিটা Object এর একটা hidden property আছে
// সেটা হলো __proto__ — এটা parent object কে point করে

const arr = [1, 2, 3]
console.log(arr.__proto__)
// Array এর সব methods — map, filter, reduce...

const str = "hello"
console.log(str.__proto__)
// String এর সব methods — toUpperCase, slice...

// এজন্যই arr.map() call করতে পারিস
// arr নিজে map জানে না — __proto__ তে গিয়ে খোঁজে



//Prototype Chain


const arr = [1, 2, 3]

// arr.map() call করলে JS এভাবে খোঁজে:
// ১. arr নিজে কি map জানে? → না
// ২. arr.__proto__ (Array.prototype) এ আছে? → হ্যাঁ পেয়ে গেছে!

// Chain টা এরকম:
// arr → Array.prototype → Object.prototype → null

console.log(arr.__proto__ === Array.prototype)        // true
console.log(arr.__proto__.__proto__ === Object.prototype) // true
console.log(arr.__proto__.__proto__.__proto__)         // null — chain শেষ



//নিজে Prototype এ Method যোগ করা


// String এ নতুন method যোগ করা
String.prototype.trueLength = function () {
    return this.trim().length;
}
const str = "  HELLO  ";
console.log(str.length); // 11 — spaces সহ
console.log(str.trueLength); // 5  — trim করে
// Array তে নতুন method
Array.prototype.second = function () {
    return this[1];
}
const arr = [10, 20, 30];
console.log(arr.second()); //20
// Number এ
Number.prototype.isPositive = function () {
    return this > 0;
}

const num = 5;
console.log(num.isPositive());// true



//Object.create() — Prototype manually set করা


const animal = {
    eat() {
        console.log(`${this.name} is eating`);
    },
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}
// dog এর prototype হবে animal
const dog = Object.create(animal);
dog.name = "Bruno"
dog.bark = function () {
    console.log("WOLFFFF!!!");
}
dog.eat()   // "Bruno is eating" ← animal থেকে পেয়েছে
dog.sleep() // "Bruno is sleeping" ← animal থেকে পেয়েছে
dog.bark()  // "Woof!" ← নিজের

// Chain:
// dog → animal → Object.prototype → null
console.log(dog.__proto__ === animal) // true



//Constructor Function + Prototype — Class এর আগে এটাই ছিল


// Class বানানোর আগে এভাবে করত
function User(name, email) {
    this.name = name
    this.email = email
}

// Prototype এ method যোগ করা
// সব User instance এ available হবে
User.prototype.greet = function () {
    console.log(`Hi, I am ${this.name}`);
}

User.prototype.getEmail = function () {
    return this.email;
}

const jack = new User("Jack", "jack@gmail.com");
const alice = new User("Alice", "alice@gmail.com");

jack.greet()          // "Hi, I am Jack"
alice.greet()         // "Hi, I am Alice"

// দুইজনই একই prototype method share করছে — memory efficient 
console.log(jack.greet === alice.greet);// true — same function!



//Class vs Prototype 


//class diye likha

class User {
    constructor(name) {
        this.name = name
    }
    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
}
// Prototype দিয়ে লেখা — একদম same কাজ করে
function User(name) {
    this.name = name
}
User.prototype.greet = function () {
    console.log(`Hi, I am ${this.name}`);
}
// Class = Prototype এর উপরে syntactic sugar
// ভেতরে একই কাজ হচ্ছে
const jack = new User("Jack");
console.log(jack.__proto__ === User.prototype); // true — দুই ক্ষেত্রেই



// Prototype Inheritance


function Animal(name) {
    this.name = name
}
Animal.prototype.eat = function () {
    console.log(`${this.name} is eating`);
}
function Dog(name, breed) {
    Animal.call(this, name) // Parent constructor call
    this.breed = breed
}
// Dog এর prototype কে Animal এর prototype এ connect করো
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog // constructor fix করো
Dog.prototype.bark = function () {
    console.log("WOFF");
}
const dog = new Dog("Bruno", "Labrador");
dog.eat() // "Bruno is eating" ← Animal থেকে
dog.bark() // "Woof!" ← Dog এর নিজের

// Chain:
// dog → Dog.prototype → Animal.prototype → Object.prototype → null



//hasOwnProperty — নিজের property কিনা check


const user = { name: "Jack", age: 22 }

console.log(user.hasOwnProperty("name"))      // true — নিজের
console.log(user.hasOwnProperty("toString"))  // false — prototype থেকে পাওয়া

// for...in loop এ prototype property ও আসে
for (const key in user) {
    // শুধু নিজের property দেখাও
    if (user.hasOwnProperty(key)) {
        console.log(key, user[key])
    }
}
/*
Object Oriented Programming —
Real world জিনিসকে Object হিসেবে model করা।

যেমন: User একটা Object
- Properties: name, email, age (data)
- Methods: login(), logout() (কাজ)
*/

//import { use } from "react";


// Class — Object এর blueprint


class User {
    // Constructor — নতুন object বানানোর সময় run হয়
    constructor(name, email, age) {
        this.name = name //property
        this.email = email
        this.age = age
    }
    //method
    greet() {
        console.log(`HI, I am ${this.name}`);
    }
    getInfo() {
        return
        {
            name: this.name,
                email; this.email,
                    age; this.age
        }
    }
}
// Object বানানো — instance
const jack = new User("Jack", "jack@gmail.com", 22);
const alice = new User("Alice", "alice@gmail.com", 26);
jack.greet() // // "Hi, I am Jack"
console.log(jack.getInfo()); // { name: "Jack", ... }
console.log(alice.name);   // "Alice"




// Inheritance — একটা class আরেকটা থেকে নেয়


class user {
    constructor(name, email) {
        this.name = name
        this.email = email
    }
    greet() {
        console.log(`HI, I am ${this.name}`);
    }
}
// Admin, User এর সব পাবে + extra
class Admin extends user {
    constructor(name, email, role) {
        super(name, email) // Parent এর constructor call করো
        this.role = role
    }
    deleteUser(user) {
        console.log(`${this.name} deleted ${user.name}`);
    }
}
const admin = new Admin("Jack", "jack@gmail.com", "superadmin");
admin.greet(); // "Hi, I am Jack" ← User থেকে পেয়েছে
admin.deleteUser({ name: "Alice" }) // "Jack deleted Alice"
console.log(admin.role) // "superadmin"




//Encapsulation — Data hide করা


class BankACC {
    // Private field — # দিয়ে
    #balance = 0
    constructor(owner) {
        this.owner = owner
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Invalid amount!");
            return
        }
        this.#balance += amount
        console.log(`Deposited ${amount}. Balance: ${this.#balance}`);
    }
    withdraw(amount) {
        if (amount > this.#balance) {
            console.log("Insufficient balance!");
            return;
        }
        this.#balance -= amount;
    }
    getBalance() {
        return this.#balance // controlled access
    }
}
const account = new BankACC("Jack");
account.deposit(1000); // "Deposited 1000. Balance: 1000"
account.withdraw(400);
console.log(account.getBalance()); //600
// Direct access করা যাবে না
//console.log(account.#balance); // SyntaxError — private!



// Getters & Setters


class user {
    constructor(fname, lname) {
        this.fname = fname
        this.lname = lname
    }
    // getter — property এর মতো access করা যায়
    get fullName() {
        return `${this.fname} ${this.lname}`;
    }
    // setter — value set করার সময় validation করা যায়
    set fullName(name) {
        const parts = name.split(" ");
        this.parts = parts[0]
        this.fname = parts[1]
    }
}
const User = new user("Jack", "Ahmed");
// method call না করেই access
console.log(user.fname) // "Jack Ahmed" ← getter

// set করা
user.fname = "Alice Smith" // ← setter
console.log(user.fname)  // "Alice"
console.log(user.lname)   // "Smith"




//Static Methods — instance ছাড়াই call করা যায়


class MathHelper {
    static add(a, b) {
        return a + b;
    }
    static multiply(a, b) {
        return a * b;
    }
    // Utility — instance বানানোর দরকার নেই
    static generateId() {
        return Math.random().toString(36).slice(2, 9);
    }
}
// Class directly call করো — new লাগে না
console.log(MathHelper.add(3, 4));      // 7
console.log(MathHelper.multiply(3, 4)); // 12
console.log(MathHelper.generateId());   // "x7k2m9p"

// Instance থেকে call করা যাবে না
//const math = new MathHelper();
//math.add(3, 4) // TypeError




//Prototype — JS OOP এর ভেতরে যা আছে


// Class এর আগে JS এ Prototype দিয়ে OOP হত
// Class = Prototype এর উপরে syntactic sugar

function User(name, email) {
    this.name = name
    this.email = email
}
// Prototype এ method যোগ করা
User.prototype.greet = function () {
    console.log(`Hi, I am ${this.name}`)
}

const jack = new User("Jack", "jack@gmail.com")
jack.greet() // "Hi, I am Jack"






//Real MERN Pattern — MongoDB Model এটাই



// Mongoose Model — MongoDB তে এভাবেই লিখবি
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    }
})

// Method যোগ করা — instance method
userSchema.methods.getPublicProfile = function () {
    return {
        name: this.name,
        email: this.email,
        role: this.role
        // password দিচ্ছি না — private!
    }
}

// Static method
userSchema.statics.findByEmail = function (email) {
    return this.findOne({ email })
}

const User = mongoose.model("User", userSchema)
export default User
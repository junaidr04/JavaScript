//this holo ekta special keyword, jeta function er moddhe use kora hoy. this er value depend kore function ta kivabe call kora hoy tar upor.
// object a this method

const user = {
    name: "Jack",
    age: 22,
    greet() {
        console.log(this)        // user object টাই
        console.log(this.name)   // "Jack"
        console.log(this.age)    // 22
    }
}

user.greet() // user call করেছে, তাই this = user



// regular function vs arrow function

const user = {
    name: "Jack",
    age: 22,
    greetRegular: function() { //regular func a this kaaj kore.
        console.log(this.name) // user object টাই
    },
    //greetArrow: () => { //arrow func a this kaaj kore na, this = window object
        //console.log(this.name) // undefined
    //}
}
user.greetRegular() // user call করেছে, তাই this = user
//user.greetArrow() // undefined..



// this er ashol value ke thik kore?

const user = {
    name: "Jack",
}
const admin = {
    name: "Admin",
}
function greet() {
    console.log(this.name)
}
//ke call korse shetai this.
user.greet = greet
admin.greet = greet

user.greet() // Jack
admin.greet() // Admin



//call, apply, bind  - this ke manually set korte use kora hoy.

function greet(city, country) {
    console.log(`${this.name} is from ${city}, ${country}`)
}
const user = {
    name: "Jack",
}
greet.call(user, "Dhaka", "Bangladesh") // call -> argument gula ke comma diye separate kore diye hoy.Jack is from Dhaka, Bangladesh
greet.apply(user, ["Chittagong", "Bangladesh"]) // apply -> argument gula ke array er moddhe diye hoy.Jack is from Chittagong, Bangladesh
const boundGreet = greet.bind(user, "Khulna", "Bangladesh") // bind -> argument gula ke comma diye separate kore diye hoy, but ekta function return kore.Jack is from Khulna, Bangladesh
boundGreet() // call korle function ta execute hobe, but call/apply korle function ta execute hoye jabe.



//class a this keyword use kora hoy class er instance ke refer korar jonno.

class User {
    constructor(name, age) {
        this.name = name // this = instance of the class, jeta create hobe
        this.age = age
    }
    greet() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`)
    }
    getInfo() {
        return{
            name: this.name,
            age: this.age
        }
    }
}
const jack = new User("Jack", 22)
jack.greet() // Hello, I'm Jack and I'm 22 years old.
console.log(jack.getInfo()) // { name: 'Jack', age: 22 }



//setTimeout, setInterval a this keyword use kora hoy, but arrow function use korle this keyword er value thik thakbe.

const user = {
    name:"Jack",
    greetRegular: function() {
        setTimeout(function() {
            console.log(this.name) // undefined, karon this = window object
        }, 1000)
    },
    greetArrow: function() {
        setTimeout(() => {
            console.log(this.name) // Jack, karon arrow function this ke parent scope theke ney, ar parent scope holo greetArrow function, jekhane this = user object
        }, 1000)
    }
}
user.greetRegular() // undefined
user.greetArrow() // Jack
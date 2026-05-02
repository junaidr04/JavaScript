// object literal

const user = {
    name: "Jack",
    age: 23,
    isLoggedIn: false,
    address: { // nested object
        city: "Chittagong",
        country: "Bangladesh"
    }
}
console.log(user);
console.log(user.name);
console.log(user["name"]);
console.log(user.address.city);


//object a add, update, delete


const user2 = {
    name: "Jack",
    age: 23
}
//add
user2.email = "jack@example.com";
console.log(user2);

//update
user2.age = 24;
console.log(user2);

//delete
delete user2.name;
console.log(user2); //{ age: 24, email: 'jack@example.com'}


//destructuring


const user = {
    name: "Jack",
    age: 23,
    role: "admin"
}
const { name, age } = user;
console.log(name, age); //Jack 23

//renaming
const { name: userName, age: userAge } = user;
console.log(userName); //Jack

//default value
const { role, email = "jack@example.com" } = user;
console.log(email); // user a nai.. default nise.. jack@example.com

//function parameter destructuring
function greet({ name, age }) {
    console.log(`Hello, ${name}! You are ${age}. Am i right?`);
}
greet(user); //Hello, Jack! You are 23.



//spread operator


const user1 = {
    name: "Jack",
    age: 23
}

//copy
const userCopy = { ...user1 };

//merge
const extraInfo = {
    role: "admin",
    city: "Chittagong"
}
const fullUser = { ...user1, ...extraInfo };
console.log(fullUser); //{ name: 'Jack', age: 23, role: 'admin', city: 'Chittagong' }

//override

const updated = { ...user1, age: 24 };
console.log(updated); //{ name: 'Jack', age: 24 }

//react state update
const newState = { ...user1, isLoggedIn: true }; // user1 a nai.. newState a add holo.. user1 unchanged



//object loop

const user = { name: "Jack", age: 23, role: "admin" };

//for in loop
for (const key in user) {
    console.log(` ${key}: ${user[key]}`);
}  // name: Jack
// age: 23
// role: admin

//object.keys
console.log(Object.keys(user)); //[ 'name', 'age', 'role' ]

//object.values
console.log(Object.values(user)); // er kaaj array er moto.. [ 'Jack', 23, 'admin' ]

//object.entries
console.log(Object.entries(user)); // er kaaj pairs er moto..[ [ 'name', 'Jack' ], [ 'age', 23 ], [ 'role', 'admin' ] ]

//entries loop
Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
}); // name: Jack
// age: 23
// role: admin



//optional chaining

const user = {
    name: "Jack",
    address: {
        city: "Chittagong"
    }
}
console.log(user?.address?.city); //Chittagong
console.log(user?.contact?.email); //undefined.. error na.. contact nai.. optional chaining use korar karone undefined return holo..



//computed property names

//dynamic key dia object create kora
const key = "name";
const user = {
    [key]: "Jack", // key variable er value name: "Jack" hobe.. dynamic key
    age: 23
}
console.log(user); //{ name: 'Jack', age: 23 }

//dynamic from data
const field = "email";
const value = "jack@example.com";
const fromData = { ...user, [field]: value }; // existingData a already je data ache.. tar sathe email: "jack@example.com"
console.log(fromData); //{ name: 'Jack', age: 23, email: 'jack@example.com' }



//method in object

const user = {
    name: "Jack",
    age: 23,
    greet() {
        console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
    },
    getAge: function () {
        return this.age; // this age property ke refer kore.. user object er age return hobe..
    }
}
user.greet(); //Hello, I am Jack and I am 23 years old.
console.log(user.getAge()); //23

//arrow function a this kaaj kore na..
const obj = {
    name: "jack",
    greet: () => {
        console.log(this.name); // this name ke refer kore na.. undefined return hobe..
    }
}



//object.assign() vs spread operator

const target = { a: 1 };
const source = { b: 2, c: 3 };

//object.assign
Object.assign(target, source);
console.log(target); // target change holo.. { a: 1, b: 2, c: 3 }

//new object create kore.. target unchanged
const merged = { ...target, ...source };
console.log(merged); //target change holo na.. { a: 1, b: 2, c: 3 }



// API থেকে আসা data এরকম দেখায়
const apiResponse = {
    status: "success",
    data: {
        user: {
            _id: "64abc123",
            name: "Jack",
            email: "jack@gmail.com",
            role: "admin"
        }
    }
}

// ✅ Destructure করে নাও
const { data: { user } } = apiResponse
const { name, email, role } = user

console.log(name)  // "Jack"
console.log(email) // "jack@gmail.com"

// ✅ Update করতে spread use করো
const updatedUser = { ...user, role: "superadmin" }
console.log(updatedUser) // { _id: '64abc123', name: 'Jack', email: 'jack@gmail.com', role: 'superadmin' }
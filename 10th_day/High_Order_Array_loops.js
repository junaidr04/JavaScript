// যে function অন্য function কে argument হিসেবে নেয়
// Array methods গুলো সবই Higher Order Function


array.map(callBack) // callBack function কে map method টা call করে
array.filter(callBack) // callBack function কে filter method টা call করে
array.reduce(callBack) // callBack function কে reduce method টা call করে
array.forEach(callBack) // callBack function কে forEach method টা call করে

// forEach method টা কোন value return করে না, শুধু array এর প্রতিটা element এর উপর callBack function টা call করে

const nums = [1, 2, 3, 4, 5];
nums.forEach((num, index, array) => {
    console.log(`index: ${index}, value: ${num}, array: ${array}`);
}); // index: 0, value: 1, array: 1,2,3,4,5
// index: 1, value: 2, array: 1,2,3,4,5
// index: 2, value: 3, array: 1,2,3,4,5
// index: 3, value: 4, array: 1,2,3,4,5
// index: 4, value: 5, array: 1,2,3,4,5

// forEach kisu resturn kore na..
const result = nums.forEach((num) => num * 2);
console.log(result); // undefined



// map method টা একটা নতুন array return করে, যেখানে প্রতিটা element এর উপর callBack function টা call করা হয়


const nums = [1, 2, 3, 4, 5];
const result = nums.map((num) => num * 2);
console.log(result); // [2, 4, 6, 8, 10]
console.log(nums); // [1, 2, 3, 4, 5] (original array unchanged)

//object এর ক্ষেত্রে map method টা কাজ করে না, কারণ object এর কোন index নেই, তাই map method টা call করা যায় না
const user = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Doe', age: 35 }
];
const names = user.map((user) => user.name);
console.log(names); // ['John', 'Jane', 'Doe']
const upadatedUser = user.map((user) => ({ ...user, age: user.age >= 18 })); // object এর age property টা 1 year increase করে
console.log(upadatedUser); // [{ name: 'John', age: 31 }, { name: 'Jane', age: 26 }, { name: 'Doe', age: 36 }]



// filter method টা একটা নতুন array return করে, যেখানে প্রতিটা element এর উপর callBack function টা call করা হয় এবং যেগুলো true return করে সেগুলো নতুন array তে রাখা হয়


const nums = [1, 2, 3, 4, 5];
const evenNums = nums.filter((num) => num % 2 === 0);
console.log(evenNums); // [2, 4]
const oddNums = nums.filter((num) => num % 2 !== 0);
console.log(oddNums); // [1, 3, 5]

// object এর ক্ষেত্রে filter method টা কাজ করে না, কারণ object এর কোন index নেই, তাই filter method টা call করা যায় না
const user = [
    { name: 'John', age: 30, isActive: true },
    { name: 'Jane', age: 25, isActive: false },
    { name: 'Doe', age: 35, isActive: true }
];
const activeUsers = user.filter((user) => user.isActive);
console.log(activeUsers); // [{ name: 'John', age: 30, isActive: true }, { name: 'Doe', age: 35, isActive: true }]
const admin = user.filter((user) => user.age === 30);
console.log(admin); // [{ name: 'John', age: 30, isActive: true }]



// reduce method টা একটা single value return করে, যেখানে প্রতিটা element এর উপর callBack function টা call করা হয় এবং যেগুলো true return করে সেগুলো নতুন array তে রাখা হয়


const nums = [1, 2, 3, 4, 5];
//sum
const sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

//max
const max = nums.reduce((acc, num) => (num > acc ? num : acc, 0));
console.log(max); // 5

//product
const product = nums.reduce((acc, num) => acc * num, 1);
console.log(product); // 120

//object theke count bananoo..
const fruits = ["apple", "banana", "apple", "mango", "banana", "apple"];
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1
    return acc
}, {})
console.log(count); // { apple: 3, banana: 2, mango: 1 }



// find and findIndex


const users = [
    { id: 1, name: "Jack" },
    { id: 2, name: "Sparrow" },
    { id: 3, name: "Xavier" }
]

// find → প্রথম match হওয়া element return করে
const user = users.find(u => u.id === 2)
console.log(user);
// { id: 2, name: "Sparrow" }

// না পেলে undefined
const notFound = users.find(u => u.id === 99)
console.log(notFound); // undefined

// findIndex → match হওয়া element এর index return করে
const index = users.findIndex(u => u.id === 2)
console.log(index); // 1
// না পেলে -1
console.log(users.findIndex(u => u.id === 99)); // -1



// some & every


const nums = [1, 2, 3, 4, 5];
// some-> ekta condition match korle true
console.log(nums.some(num => num > 4)); //true->5
console.log(nums.some(num => num > 10)); //false-> nai

//every->সবাই condition match করলে true
console.log(nums.every(num => num > 0));  // true → সবাই > 0
console.log(nums.every(num => num > 3));  // false → 1,2,3 নেই

// ✅ Real use
const users = [
    { name: "Jack", verified: true },
    { name: "Alice", verified: true },
    { name: "Bob", verified: false },
]

const anyUnverified = users.some(u => !u.verified);
console.log(anyUnverified); // true → Bob unverified

const allVerified = users.every(u => u.verified);
console.log(allVerified); // false → Bob unverified



// Chaining — সবচেয়ে Powerful Pattern


const users = [
    { name: "Jack", age: 22, role: "admin", active: true },
    { name: "Alice", age: 17, role: "user", active: true },
    { name: "Bob", age: 25, role: "user", active: false },
    { name: "Sara", age: 20, role: "user", active: true },
]

// Active adult users দের নাম বের করো
const result = users
    .filter(u => u.active) // active users
    .filter(u => u.age >= 18) // adults only
    .map(u => u.name) // শুধু নাম নাও
console.log(result) // ["Jack", "Sara"]

// Total age of active users
const totalAge = users
    .filter(u => u.active)
    .reduce((acc, u) => acc + u.age, 0)
console.log(totalAge) // 22 + 17 + 20 = 59




// real mern pattern

// Backend থেকে আসা data render করা
const products = [
    { id: 1, name: "Phone", price: 999, inStock: true },
    { id: 2, name: "Laptop", price: 1999, inStock: false },
    { id: 3, name: "Watch", price: 299, inStock: true },
]

// In stock products দেখাও, price বাড়িয়ে
const available = products
    .filter(p => p.inStock)
    .map(p => ({
        ...p,
        price: p.price * 1.1,  // 10% markup
        priceLabel: `$${(p.price * 1.1).toFixed(2)}`
    }))

console.log(available)
// [
//   { id: 1, name: "Phone", price: 1098.9, priceLabel: "$1098.90", inStock: true },
//   { id: 3, name: "Watch", price: 328.9, priceLabel: "$328.90", inStock: true }
// ]




// normal loop vs map or filter


// Normal loop দিয়ে করলে
const result = []
for (let i = 0; i < users.length; i++) {
    if (users[i].active) {
        result.push(users[i].name)
    }
}

// map/filter দিয়ে করলে — এটাই সবাই লেখে
const result = users
    .filter(u => u.active)
    .map(u => u.name)
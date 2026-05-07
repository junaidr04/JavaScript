// if-else if

const age = 18;
if (age < 18) {
    console.log("You are a minor.");
} else if (age === 18) {
    console.log("Congratulations on reaching adulthood!");
} else {
    console.log("You are an adult.");
}

// switch-case

const dayOfWeek = "Monday";
switch (dayOfWeek) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Tuesday":
        console.log("Second day of the work week.");
        break;
    case "Wednesday":
        console.log("Midweek.");
        break;
    case "Thursday":
        console.log("Almost the weekend.");
        break;
}



// truthy and falsy values

// Falsy values — if এ false হিসেবে কাজ করে
if (false) { } // falsy
if (0) { } // falsy
if ("") { } // falsy
if (null) { } // falsy
if (undefined) { } // falsy
if (NaN) { } // falsy

// Truthy — বাকি সব
if (1) { } // truthy
if ("hello") { } // truthy
if ([]) { } // truthy  empty array truthy!
if ({}) { } // truthy  empty object truthy!
if (-1) { } // truthy

// Real use
const user = null
if (user) {
    console.log(user.name) // if null হলে এখানে আসবে না — safe 
}
const user2 = { name: "Alice" }
if (user2) {
    console.log(user2.name) // user2 truthy তাই এখানে আসবে — safe 
}



// comparison operators (== vs ===)

// == type convert kore compare kore
console.log(0 == false); // true
console.log("" == false); // true
console.log(null == undefined); // true

// === type convert kore compare kore na, type o check kore.. type+value check
console.log(0 === false); // false
console.log("" === false); // false
console.log(null === undefined); // false
console.log(1 === 1); // true
console.log("hello" === "hello"); // true
console.log("1" === 1); // false



// logical operators

// AND (&&) - duita condition true holei true return kore
console.log(true && true); // true
console.log(true && false); // false

// OR (||) - duita condition er modhye jekono ekta true holei true return kore
console.log(true || false); // true
console.log(false || false); // false

// NOT (!) - condition er opposite return kore
console.log(!true); // false
console.log(!false); // true
console.log(!null); // true
console.log(!undefined); // true
console.log(!0); // true
console.log(!""); // true

// short-circuit evaluation
const user = null;
const userName = user && user.name; // user null hole user.name access korbe na, short-circuit kore null return korbe
console.log(userName); // null

// || use kore default value set kora
const user2 = "" || "Guest"; // user2 empty string hole "Guest" return korbe
console.log(user2); // "Guest"

// ?? (nullish coalescing) operator.. shudhu null or undefined hole default value return kore
const user3 = "" ?? "Guest"; // user3 null hole
console.log(user3); // "" (empty string) return korbe, karon empty string null na undefined na, tai ?? operator default value use korbe na
const user4 = null ?? "Guest"; // user4 null hole "Guest" return korbe
console.log(user4); // "Guest"

// || vs ?? operator
const s = 0;
console.log(s || 100); // 100 return korbe, karon 0 falsy
console.log(s ?? 100); // 0 return korbe, karon 0 null na undefined na, tai ?? operator default value use korbe na



// ternary operator

// condition ? expressionIfTrue : expressionIfFalse
const age = 18;
const message = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(message); // "You are an adult."

// nested ternary operator
const score = 85;
const grade = score >= 90 ? "A" :
    score >= 80 ? "B" :
        score >= 70 ? "C" :
            score >= 60 ? "D" : "F";
console.log(grade); // score er value onujayi grade print korbe



// loops
// for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // 0 theke 4 porjonto print korbe
}

//reverse for loop
for (let i = 5; i > 0; i--) {
    console.log(i); // 5 theke 1 porjonto print korbe
}

// while loop
let j = 0;
while (j < 5) {
    console.log(j); // 0 theke 4 porjonto print korbe
    j++;
}

let a = 0;
while (a < 5) {
    console.log(`Value of a: ${a}`);
    a++;
}

//for...of loop
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(fruit); // fruits array er prottek element print korbe
}
for (const char of "jack") {
    console.log(char); // "jack" string er prottek character print korbe
}

// for...in loop - object er prottek key er jonno loop chalay
const person = { name: "Alice", age: 30, city: "New York" };
for (const key in person) {
    console.log(`${key}: ${person[key]}`); // person object er prottek key-value pair print korbe
}



// break and continue

// break - loop theke ber hoye jete use hoy
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // i 5 hole loop theke ber hoye jabe
    }
    console.log(i); // 0 theke 4 porjonto print korbe
}

// continue - current iteration skip kore next iteration e chole jay
for (let j = 0; j < 10; j++) {
    if (j % 2 === 0) {
        continue; // j even hole current iteration skip kore next iteration e chole jabe
    }
    console.log(j); // odd number gulo print korbe (1, 3, 5, 7, 9)
}

// do...while loop - prothome ekbar code block execute hoy, tarpor condition check kore
let k = 10;
do {
    console.log(k); // 10 print korbe, karon prothome code block execute hoy
    k++;
} while (k < 10); // condition false holeo ekbar code block execute hoy, tai 10 print korbe


//example of do...while loop with user input
let password = "";
do {
    password = "j.b123"; // user input er moto dhore nilam
    console.log("Enter your password (at least 6 characters):");
}
while (password !== "j.b123" || password.length < 6)
console.log("Password accepted!");
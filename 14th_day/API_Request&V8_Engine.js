/*
//V8 Engine

Google এর বানানো JavaScript Engine। Chrome browser এ আছে।
Node.js ও V8 use করে — এজন্য JS কে browser এর বাইরে server এ run করা যায়।
code → V8 → Machine code → CPU execute করে
*/


//Call Stack & Event Loop


// JS single threaded — একটা Call Stack
// একটার পর একটা execute করে

console.log("1")        // Call Stack এ ঢোকে, execute, বের হয়

setTimeout(() => {
    console.log("2")    // Web API তে যায়, ২ সেকেন্ড পরে Queue তে আসে
}, 2000)

console.log("3")        // Call Stack এ ঢোকে, execute, বের হয়

// Output:
// 1
// 3
// 2 ← ২ সেকেন্ড পরে

/*
Call Stack    → Sync code execute করে
Web APIs      → setTimeout, fetch এগুলো handle করে
Callback Queue → Async কাজ শেষ হলে এখানে আসে
Event Loop    → Call Stack খালি হলে Queue থেকে নেয়
*/



/*
//API Request
তুই → Request পাঠালি → Server
Server → Response দিল → তুই

API = দুইটা system এর মধ্যে কথা বলার নিয়ম
*/



//fetch() — Browser এ API call


// GET request — data আনা
const getUser = async () => {
    try {
        const response = await fetch("https://api.github.com/users/junaidr04")

        console.log(response.status)  // 200
        console.log(response.ok)      // true

        const data = await response.json() // JSON parse করো
        console.log(data)
    } catch (error) {
        console.log("Error:", error)
    }
}

getUser()



//POST request — data পাঠানো


const createUser = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Jack",
                email: "jack@gmail.com"
            })
        })

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error:", error)
    }
}

createUser()



// HTTP Methods:


// GET    → data আনা
// POST   → নতুন data পাঠানো
// PUT    → পুরো data update করা
// PATCH  → আংশিক update করা
// DELETE → data delete করা

// Headers এ যা থাকে:
{
    "Content-Type": "application/json",  // কী format এ data যাচ্ছে
        "Authorization": "Bearer token123"    // Authentication
}



//Node.js এ API call — fetch বা axios


// Node.js 18+ এ built-in fetch আছে
const getUser = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const data = await response.json()
        console.log(data.name)
    } catch (error) {
        console.log(error)
    }
}

getUser()

// অথবা axios — MERN এ এটাই বেশি use হয়
// npm install axios
import axios from "axios"

const getUser = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/1")
        console.log(response.data.name) // axios automatically JSON parse করে ✅
    } catch (error) {
        console.log(error.response.data)
    }
}
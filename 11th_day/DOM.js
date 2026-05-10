// HTML file লেখার পরে Browser সেটাকে একটা Object এ convert করে — এটাই DOM। JavaScript দিয়ে সেই Object এ ঢুকে HTML কে read, change, add, delete করা যায়।

//Element Select


// getElementById — সবচেয়ে fast
const titleById = document.getElementById("title")
// getElementsByClassName — array-like list দেয়
const cards = document.getElementsByClassName("card")
// getElementsByTagName
const paragraphs = document.getElementsByTagName("p")
// querySelector — CSS selector দিয়ে, প্রথমটা দেয়
const titleByQuery = document.querySelector("#title") // id
const card = document.querySelector(".card")          // class
const para = document.querySelector("p")              // tag
const btn = document.querySelector("div > button")    // nested
// querySelectorAll — সব match করা elements দেয়
const allCards = document.querySelectorAll(".card") // NodeList

allCards.forEach(card => console.log(card))



// Content Read & Change 


const title = document.querySelector("#title")

// Content read করা
console.log(title.textContent) // শুধু text
console.log(title.innerHTML)   // HTML সহ text

// Content change করা
title.textContent = "New Title"         // শুধু text set করে
title.innerHTML = "<span>Hello</span>"  // HTML parse করে set করে



//Style Change


const box = document.querySelector(".box")

// Inline style দেওয়া
box.style.color = "red"
box.style.backgroundColor = "blue"  // camelCase লিখতে হয়
box.style.fontSize = "24px"
box.style.display = "none"          // hide করা

// ✅ Class add/remove করা — এটাই best practice
box.classList.add("active")
box.classList.remove("active")
box.classList.toggle("active")      // থাকলে remove, না থাকলে add
box.classList.contains("active")    // true/false



//Attribute Read & Change


const link = document.querySelector("a")
const img = document.querySelector("img")

// Read
console.log(link.getAttribute("href"))  // "https://..."
console.log(img.getAttribute("src"))    // "image.jpg"

// Change
link.setAttribute("href", "https://google.com")
img.setAttribute("src", "new-image.jpg")
img.setAttribute("alt", "New Image")

// Remove
link.removeAttribute("href")

// ✅ Shortcut — common attributes directly access করা যায়
console.log(link.href)   // getAttribute এর দরকার নেই
console.log(img.src)



// Element বানানো ও Add করা


// নতুন element বানানো
const newDiv = document.createElement("div")
newDiv.textContent = "I am new!"
newDiv.classList.add("card")

// DOM এ add করা
const container = document.querySelector(".container")
container.appendChild(newDiv)      // শেষে add
container.prepend(newDiv)          // শুরুতে add
container.remove()                 // element delete

// ✅ Modern way
container.insertAdjacentHTML("beforeend", `
    <div class="card">
        <h2>Jack</h2>
        <p>Developer</p>
    </div>
`)
// "beforeend" → ভেতরে শেষে
// "afterbegin" → ভেতরে শুরুতে
// "beforebegin" → element এর আগে
// "afterend" → element এর পরে



//Events 


const btn = document.querySelector("#myBtn")

// ✅ addEventListener — এটাই সবসময় use করো
btn.addEventListener("click", function () {
    console.log("Button clicked!")
})

// Arrow function দিয়ে
btn.addEventListener("click", () => {
    console.log("Clicked!")
})

// Event object — কী হয়েছে সেই info থাকে
btn.addEventListener("click", (e) => {
    console.log(e.target)        // যেটাতে click হয়েছে
    console.log(e.target.value)  // input এর value
    e.preventDefault()           // default behavior বন্ধ করে
})

// Common Events
btn.addEventListener("click", handler)       // click
input.addEventListener("input", handler)     // typing
input.addEventListener("change", handler)    // value change
form.addEventListener("submit", handler)     // form submit
window.addEventListener("load", handler)     // page load
window.addEventListener("resize", handler)   // window resize
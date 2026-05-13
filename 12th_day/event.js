//User বা Browser যা করে সেটাই Event। Click, typing, scroll, page load — সব Event। JavaScript এই events এ "listen" করে response দেয়।



//event listener  - 3 ways..

// Way 1: HTML এ inline — avoid করো
//<button onclick="handleClick()">Click</button>
// Way 2: DOM property — একটাই listener দেওয়া যায়
//btn.onclick = () => console.log("Clicked")
// Way 3: addEventListener — সবসময় এটাই use করো
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    console.log("Clicked!");
})

// একই element এ একাধিক listener দেওয়া যায়
btn.addEventListener("click", handler1);
btn.addEventListener("click", handler2); //duitaii kaaj korbee.

//remove kora
btn.removeEventListener("click", handler1);



//Event object


btn.addEventListener("click", (e) => {
    console.log(e.type); //click
    console.log(e.target); //যেটাতে click হয়েছে
    console.log(e.target.id); // সেটার id
    console.log(e.target.value); // input এর value
    e.preventDefault(); //default behavior বন্ধ — form submit, link follow
    e.stopPropagation(); // bubbling বন্ধ করে (নিচে দেখবি)
})



//Common events


//mouse events
btn.addEventListener("click", handler);
btn.addEventListener("dbclick", handler); //double check
btn.addEventListener("mouseover", handler); //hover in
btn.addEventListener("mouseout", handler); //hover out
//keyboard event
input.addEventListener("keydown", (e) => {
    console.log(e.key); // "Enter", "a", "Backspace"
    console.log(e.code); // "KeyA", "Enter"
    if (e.key == "Enter") {
        console.log("Enter Password!");
    }
})

//from event
input.addEventListener("input", (e) => {
    console.log(e.target.value); //typing er shate shate
})
input.addEventListener("change", (e) => {
    console.log(e.target.value); // focus হারালে
})
form.addEventListener("submit", (e) => {
    e.preventDefault(); //page reload bondho koro
    console.log("Form submitted!");
})
//window events
window.addEventListener("load", () => console.log("Page Loaded"))
window.addEventListener("resize", () => console.log(window.innerWidth))
window.addEventListener("load", () => console.log(window.scrollY))



// Event Bubbling


// Child এ click করলে Parent এও event fire হয়
// এটাই Bubbling — নিচে থেকে উপরে উঠে

document.querySelector(".child").addEventListener("click", () => {
    console.log("Child clicked");
})
document.querySelector(".parent").addEventListener("click", () => {
    console.log("Parent clicked");
})

// Child এ click করলে output:
// "Child clicked"
// "Parent clicked" ← bubble হয়ে parent এ গেছে

//Bubbling off kora
document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation() //parent a jabe na
    console.log("Child only!");
})



//Event Delegation


//প্রতিটা button এ আলাদা listener — inefficient
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", handler)
})

// Parent এ একটা listener — সব children handle করে
document.querySelector(".container").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
        console.log("Button clicked:", e.target.textContent)
    }
})
// কেন better?
// ১. একটাই listener
// ২. Dynamic elements এও কাজ করে





//real mern pattern


// Form handle করা — Backend এ data পাঠানো
const form = document.querySelector("#loginForm")

form.addEventListener("submit", async (e) => {
    e.preventDefault() // page reload বন্ধ

    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    try {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
})
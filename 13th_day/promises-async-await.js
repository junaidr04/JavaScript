// JavaScript single threaded — একটার পর একটা কাজ করে
// কিন্তু কিছু কাজ সময় লাগে — DB call, API call, file read

const { use } = require("react")

// যদি সব কাজ wait করত
const data = fetchFromDB() // ৩ সেকেন্ড লাগলো
console.log(data)          // ততক্ষণ পুরো app frozen! 

// Solution — Async কাজগুলো background এ করো
// বাকি code চলতে থাকুক



//Callback — পুরনো solution


//agee eibhabe korto
function fetchUser(id, callback) {
    setTimeout(() => {
        const user = { id, name: "Jack" }
        callback(user)
    }, 2000)
}
fetchUser(1, (user) => {
    console.log(user.name) // "Jack" - 2 second pore
})

//  Callback Hell — nested হতে হতে nightmare
fetchUser(1, (user) => {
    fetchPosts(user.id, (posts) => {
        fetchComments(posts[0].id, (comments) => {
            fetchLikes(comments[0].id, (likes) => {
                // ar pora jacche naa..
            })
        })
    })
})



// Promise — modern solution


// Promise = ভবিষ্যতে একটা value দেওয়ার কথা
// তিনটা state:
// pending  → কাজ চলছে
// fulfilled → কাজ সফল, value পাওয়া গেছে
// rejected → কাজ ব্যর্থ, error এসেছে

const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Data fetched!") // সফল হলে resolve
    }
    else {
        reject("Something went wrong!") // ব্যর্থ হলে reject
    }
})

// Promise consume করা
myPromise
    .then((data) => {
        console.log(data); // "Data fetched!"
    })
    .catch((error) => {
        console.log(error); // "Something went wrong!"
    })
    .finally(() => {
        console.log("Done!"); // সবসময় run হয়
    })



//Real Example — setTimeout দিয়ে


function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id <= 0) {
                reject("Invalid ID!");
                return;
            }
            const user = { id, name: "Jack", age: 22 }
            resolve(user)
        }, 2000)
    })
}

//use kora
fetchUser(1)
    .then(user => {
        console.log(user.name); // "Jack" — 2 সেকেন্ড পরে
        return user.id; // পরের .then এ পাঠাচ্ছি
    })
    .then(id => {
        console.log(`User ID : ${id}`); // "User ID: 1"
    })
    .catch(error => {
        console.log(error); // Error handle
    })
fetchUser(-1)
    .then(user => console.log(user));
.catch (error => console.log(error)) // "Invalid ID!"



// Promise Chaining — Callback Hell এর fix


// Flat, readable
fetchUser(1)
    .then(user => fetchPosts(user.id))
    .then(posts => fetchComments(posts[0].id))
    .then(comments => console.log(comments))
    .catch(error => console.log(error)) // যেকোনো জায়গায় error হলে এখানে আসবে



//Async/Await — সবচেয়ে clean


// async function সবসময় Promise return করে
// await = এই Promise শেষ না হওয়া পর্যন্ত wait করো

async function getUser() {
    const user = await fetchUser(1) // Promise শেষ হওয়া পর্যন্ত wait
    console.log(user.name); //Jack
}
getUser()

// Error handling — try/catch দিয়ে
async function getUser() {
    try {
        const user = await fetchUser(1);
        console.log(user.name); //Jack
    }
    catch (error) {
        console.log(error); //Error handle
    }
    finally {
        console.log("Done!"); //সবসময় run হয়
    }
}



//Async/Await — Multiple calls

async function getData() {
    try {
        //Sequential — একটার পর একটা, মোট ৬ সেকেন্ড লাগবে
        const user = await fetchUser(1); //2 second
        const posts = await fetchPosts(1); // 2 second
        const photos = await fetchPhotos(1); // 2 second
        //parallel — একসাথে, মোট ২ সেকেন্ড লাগবে
        const [user, posts, photos] = await Promise.all([
            fetchUser(1),
            fetchPosts(1),
            fetchPhotos(1)
        ])
        console.log(user, posts, photos)
    }
    catch (error) {
        console.log(error);
    }
}



//Promise Methods


// Promise.all → সবাই resolve হলে তারপর চলবে
// একটা fail করলে সব fail
const [user, posts] = await Promise.all([
    fetchUser(1),
    fetchPosts(1)
])

// Promise.allSettled → সবার result দেয়, fail হলেও
const results = await Promise.allSettled([
    fetchUser(1),
    fetchUser(-1) // eta fail korbe
])
results.forEach(result => {
    if (result.status === "fulfilled") {
        console.log(result.value);
    }
    else {
        console.log(result.reason); //reason
    }
})

// Promise.race → প্রথম যেটা resolve/reject করবে সেটাই নেবে
const first = await Promise.race([
    fetchUser(1),
    fetchUser(2)
])
console.log(first); //যেটা আগে শেষ হয়






//Real MERN Pattern


// Express route — Backend এ
const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id) // DB call

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        res.status(200).json({ success: true, data: user })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Frontend — API call
const fetchUser = async (id) => {
    try {
        const response = await fetch(`/api/users/${id}`)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error:", error)
    }
}
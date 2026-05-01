//Array initialize

const fruits = ['apple', 'banana', 'cherry', 'date'];
console.log(fruits[0]); // Output: apple
console.log(fruits[fruits.length - 1]); // last element Output: date

const numbers = [1, 2, 3, 4, 5];
console.log(numbers[2]); // Output: 3

const mixed=[1,'hello',true, null, {name:'Jack'}];
console.log(mixed[1]) // Output: hello
console.log(mixed[4].name) // Output: Jack

const empty=[];


//Array add and remove

const arr=['a', 'b', 'c'];
arr.push('d'); // add 'd' at the end
arr.pop(); // remove last element 'd'
arr.unshift('z'); // add 'z' at the beginning
arr.shift(); // remove first element 'z'
console.log(arr); // Output: ['a', 'b', 'c', 'd']


//array splice() jekono position theke element add or remove korte parbo.

const arr1=['a', 'b', 'c', 'd'];
arr1.splice(2, 1); // index 2 theke 1 element remove korbe, mane 'c' remove hobe.
arr1.splice(2, 0, 'x'); // index 2 theke 'x' add korbe. remove korbe na, karon remove count 0.
arr1.splice(1, 2, 'y', 'z'); // index 1 theke 2 element remove korbe, mane 'b' and 'c' remove hobe, ar tar jaygay 'y' and 'z' add hobe.
console.log(arr1); // Output: ['a', 'y', 'z', 'd']

const removed=arr1.splice(0, 2); // index 0 theke 2 element remove korbe, mane 'a' and 'y' remove hobe, ar tar jaygay kichu add korbe na, karon remove count 2, ar add count 0.
console.log(removed); // Output: ['a', 'y']



//slice() diye copy kore.. original array change hobe na, splice() diye cut kore..


const arr2=['a', 'b', 'c', 'd', 'e'];
console.log(arr2.slice(1, 3)); // index 1 theke 3 er age porjonto element copy korbe, mane 'b' and 'c' copy hobe, ar original array change hobe na.
console.log(arr2.slice(2)); // index 2 theke shuru kore last porjonto element copy korbe, mane 'c', 'd', and 'e' copy hobe, ar original array change hobe na.
console.log(arr2.slice(-2)); // last theke 2 element copy korbe, mane 'd' and 'e' copy hobe, ar original array change hobe na.
console.log(arr2); // Output: ['a', 'b', 'c', 'd', 'e'] original array change hobe na, karon slice() method diye copy kore, cut kore na.



//array search


const arr3=[10, 20, 30, 40, 50];
console.log(arr3.indexOf(30)); // indexOf() method diye element er index ber korte parbo, jodi element array te thake. ekhane 30 element er index ber korbe, jeta 2 hobe. na thkle -1 hobe.
console.log(arr3.includes(20)); // includes() method diye check korte parbo, jodi element array te thake. ekhane 20 element check korbe, jeta true hobe, karon 20 element array te ache. na thkle false hobe.
console.log(arr3.lastIndexOf(20)); // lastIndexOf() method diye element er last index ber korte parbo, jodi element array te thake. ekhane 20 element er last index ber korbe, jeta 1 hobe, karon 20 element array te ache, ar tar index 1 hobe.

//conditional search
console.log(arr3.find(x=> x > 25)); // find() method diye condition onujayi element ber korte parbo, jodi element array te thake. 1st element jeta condition satisfy korbe, seta ber korbe. ekhane 25 theke boro element ber korbe, jeta 30 hobe, karon 30 element array te ache, ar seta 25 theke boro hobe. na thkle undefined hobe.
console.log(arr3.findIndex(x=> x > 25)); // findIndex() method diye condition onujayi element er index ber korte parbo, jodi element array te thake. 1st element jeta condition satisfy korbe, tar index ber korbe. ekhane 25 theke boro element er index ber korbe, jeta 2 hobe, karon 30 element array te ache, ar seta 25 theke boro hobe, ar tar index 2 hobe. na thkle -1 hobe.


//array loop

const arr4 = [1, 2, 3, 4, 5];
arr4.forEach((num, index) => {
    console.log(`Index: ${index}, Value: ${num}`);
}); // forEach() method diye array er prottek element er upor loop chalayte parbo, ar tar index and value access korte parbo. ekhane arr4 array er prottek element er index and value dekhabe, jeta "Index: 0, Value: 1", "Index: 1, Value: 2", "Index: 2, Value: 3", "Index: 3, Value: 4", "Index: 4, Value: 5" hobe.

const doubled = arr4.map(num => num * 2); // map() method diye array er prottek element er upor loop chalayte parbo, ar tar value modify kore notun array create korte parbo. ekhane arr4 array er prottek element ke 2 diye gun kore notun array create korbe, jeta [2, 4, 6, 8, 10] hobe.
console.log(doubled); // Output: [2, 4, 6, 8, 10]

const evens = arr4.filter(num => num % 2 === 0); // filter() method diye array er prottek element er upor loop chalayte parbo, ar tar value check kore notun array create korte parbo. ekhane arr4 array er prottek element ke check korbe, jodi element even hoy, tahole notun array te add korbe, jeta [2, 4] hobe.
console.log(evens); // Output: [2, 4]

const sum = arr4.reduce((acc, num) => acc + num, 0); // reduce() method diye array er prottek element er upor loop chalayte parbo, ar tar value use kore ekta single value create korte parbo. ekhane arr4 array er prottek element ke add kore total sum ber korbe, jeta 15 hobe.
console.log(sum); // Output: 15

for (const num of arr4) {
    console.log(num);
} // for...of loop diye array er prottek element er upor loop chalayte parbo, ar tar value access korte parbo. ekhane arr4 array er prottek element dekhabe, jeta 1, 2, 3, 4, 5 hobe.

//array join

const arr5 = ['Hello', 'World', 'jack'];
console.log(arr5.join(' ')); // join() method diye array er prottek element ke ekta string e join korte parbo, ar separator specify korte parbo. ekhane arr5 array er prottek element ke space diye join korbe, jeta "Hello World jack" hobe.
console.log(arr5.join('-')); // ekhane arr5 array er prottek element ke hyphen diye join korbe, jeta "Hello-World-jack" hobe.

const str = 'Hello,World,Jack';
console.log(str.split(',')); // split() method diye string ke array te convert korte parbo, ar separator specify korte parbo. ekhane str string ke comma diye split korbe, jeta ['Hello', 'World', 'Jack'] hobe.

//array sorting

const fruits = ['banana', 'apple', 'cherry', 'date'];
console.log(fruits.sort()); // sort() method diye array er prottek element ke alphabetically sort korte parbo. ekhane fruits array ke alphabetically sort korbe, jeta ['apple', 'banana', 'cherry', 'date'] hobe.

const numbers = [40, 100, 1, 5, 25];
console.log(numbers.sort()); // sort() method diye array er prottek element ke alphabetically sort korte parbo, jeta numbers ke string hishebe sort korbe, jeta [1, 100, 25, 40, 5] hobe. karon sort() method by default string hishebe sort kore.

console.log(numbers.sort((a, b) => a - b)); // sort() method diye array er prottek element ke numerically sort korte parbo, jeta numbers ke ascending order e sort korbe, jeta [1, 5, 25, 40, 100] hobe. ekhane compare function use kore sort korchi, jeta a and b ke compare kore, jodi a - b negative hoy, tahole a age asbe, jodi positive hoy, tahole b age asbe, ar jodi zero hoy, tahole order change hobe na.

console.log(numbers.sort((a, b) => b - a)); // sort() method diye array er prottek element ke numerically sort korte parbo, jeta numbers ke descending order e sort korbe, jeta [100, 40, 25, 5, 1] hobe. ekhane compare function use kore sort korchi, jeta a and b ke compare kore, jodi b - a negative hoy, tahole b age asbe, jodi positive hoy, tahole a age asbe, ar jodi zero hoy, tahole order change hobe na.


//array combine

const arr6 = [1, 2, 3];
const arr7 = [4, 5, 6];
const combined = arr6.concat(arr7); // concat() method diye duita array ke combine korte parbo, jeta notun array create korbe. ekhane arr6 and arr7 array ke combine korbe, jeta [1, 2, 3, 4, 5, 6] hobe.
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

const combined2 = [...arr6, ...arr7]; // spread operator diye duita array ke combine korte parbo, jeta notun array create korbe. ekhane arr6 and arr7 array ke combine korbe, jeta [1, 2, 3, 4, 5, 6] hobe.
console.log(combined2); // Output: [1, 2, 3, 4, 5, 6]

const combined3 = [...arr6, 99, ...arr7, 88]; // ekhane arr6 and arr7 array ke combine korbe, ar tar modhye 99 and 88 add korbe, jeta [1, 2, 3, 99, 4, 5, 6, 88] hobe.
console.log(combined3); // Output: [1, 2, 3, 99, 4, 5, 6, 88]


//nested array 

const nested = [[1, 2], [3, 4], [5, 6], 7];
console.log(nested.flat()); // flat() method diye nested array ke flatten korte parbo, jeta notun array create korbe. ekhane nested array ke flatten korbe, jeta [1, 2, 3, 4, 5, 6, 7] hobe. karon flat() method by default 1 level nested array ke flatten kore.
console.log(nested.flat(2)); // ekhane nested array ke 2 level nested array ke flatten korbe, jeta [1, 2, 3, 4, 5, 6, 7] hobe. karon flat() method e parameter diye specify korte parbo, koto level nested array ke flatten korte chai. ekhane 2 level nested array ke flatten korchi, jeta nested array te nai, tai output same hobe.
console.log(nested.flat(Infinity)); // ekhane nested array ke infinite level nested array ke flatten korbe, jeta [1, 2, 3, 4, 5, 6, 7] hobe. karon flat() method e parameter diye specify korte parbo, koto level nested array ke flatten korte chai. ekhane infinite level nested array ke flatten korchi, jeta nested array te nai, tai output same hobe.

const arr = [1, 2, 3, 4, 5];
console.log(arr.flatMap(x => [x, x * 2])); // flatMap() method diye array er prottek element ke modify kore, ar tar modhye notun array create korte parbo, jeta notun array create korbe. ekhane arr array er prottek element ke modify kore, ar tar modhye notun array create korbe, jeta [1, 2, 2, 4, 3, 6, 4, 8, 5, 10] hobe. karon flatMap() method e parameter diye specify korte parbo, koto level nested array ke flatten korte chai. ekhane 1 level nested array ke flatten korchi, jeta arr array te nai, tai output same hobe.


//array check

console.log(Array.isArray([1, 2, 3])); // Array.isArray() method diye check korte parbo, jodi value array hoy. ekhane [1, 2, 3] value ke check korbe, jeta true hobe, karon eta array.
console.log(Array.isArray('Hello')); // ekhane 'Hello' value ke check korbe, jeta false hobe, karon eta array na.
console.log(Array.isArray({ a: 1 })); // ekhane {a: 1} value ke check korbe, jeta false hobe, karon eta array na.


//Array theke array create

console.log(Array.from('Hello')); // Array.from() method diye string ke array te convert korte parbo. ekhane 'Hello' string ke array te convert korbe, jeta ['H', 'e', 'l', 'l', 'o'] hobe.
console.log(Array.from({ length: 5 }, (_, i) => i + 1)); // ekhane length 5 diye ekta array create korbe, ar tar modhye index er value add korbe, jeta [1, 2, 3, 4, 5] hobe. karon Array.from() method e parameter diye specify korte parbo, koto length er array create korte chai, ar second parameter e callback function diye specify korte parbo, koto level nested array ke flatten korte chai. ekhane 1 level nested array ke flatten korchi, jeta arr array te nai, tai output same hobe.

const withHoles = [1, 2, 3, 3, 4, 5];
const unique = [...new Set(withHoles)]; // Set object diye array er duplicate element ke remove korte parbo, ar tar modhye notun array create korte parbo. ekhane withHoles array er duplicate element ke remove korbe, jeta [1, 2, 3, 4, 5] hobe. karon Set object e duplicate value store hoy na, tai unique array te duplicate element remove hoye jabe.
console.log(unique); // Output: [1, 2, 3, 4, 5]


//destructuring assignment

const arr8 = [1, 2, 3, 4, 5];
const [first, second, third] = arr8; // destructuring assignment diye array er prottek element ke variable e assign korte parbo. ekhane arr8 array er prottek element ke variable e assign korbe, jeta first=1, second=2, third=3 hobe. karon destructuring assignment e variable er name diye specify korte parbo, koto level nested array ke flatten korte chai. ekhane 1 level nested array ke flatten korchi, jeta arr8 array te nai, tai output same hobe.
console.log(first);
console.log(second);

const [a, , b] = arr8; // ekhane arr8 array er prottek element ke variable e assign korbe, jeta a=1, b=3 hobe. karon destructuring assignment e variable er name diye specify korte parbo, koto level nested array ke flatten korte chai. ekhane 1 level nested array ke flatten korchi, jeta arr8 array te nai, tai output same hobe.
console.log(a, b);

const [x, ...rest] = arr8; // ekhane arr8 array er prottek element ke variable e assign korbe, jeta x=1, rest=[2, 3, 4, 5] hobe. karon destructuring assignment e variable er name diye specify korte parbo, koto level nested array ke flatten korte chai. ekhane 1 level nested array ke flatten korchi, jeta arr8 array te nai, tai output same hobe.
console.log(x); // Output: 1
console.log(rest); // Output: [2, 3, 4, 5]

let x1 = 10, x2 = 20;
[x1, x2] = [x2, x1]; // ekhane x1 and x2 variable er value swap korbe, jeta x1=20, x2=10 hobe. karon destructuring assignment e variable er name diye specify korte parbo, koto level nested array ke flatten korte chai. ekhane 1 level nested array ke flatten korchi, jeta arr8 array te nai, tai output same hobe.
console.log(x1, x2); // Output: 20 10


//immutable array

const users = [
    { name: "Jack", age: 22, role: "admin" },
    { name: "Alice", age: 25, role: "user" },
    { name: "Bob", age: 19, role: "user" },
]

// Filter করো → শুধু users
const regularUsers = users.filter(u => u.role === "user")

// Map করো → শুধু নাম বের করো
const names = users.map(u => u.name)
console.log(names) // ["Jack", "Alice", "Bob"]

// Find করো → নির্দিষ্ট user খোঁজো
const jack = users.find(u => u.name === "Jack")

// Chain করো — filter + map একসাথে
const userNames = users
    .filter(u => u.role === "user")
    .map(u => u.name)
console.log(userNames) // ["Alice", "Bob"]
//Backtick (`) দিয়ে লিখলে ${} এর ভেতরে যেকোনো variable বা expression directly বসানো যায়। এটাই Template Literal। + দিয়ে জোড়া লাগানোর চেয়ে অনেক clean।

const name = "Alice";
const repo = 50;
console.log(`hi dear, my name is ${name} and i have ${repo} repositories in github`);

const Name = new String("AliceFAHHH");
console.log(Name);
console.log(typeof Name); //object

console.log(Name.toUpperCase()); //string er method use korte parbo, karon Name ekta string object, tai toUpperCase() method use korte parbo.

console.log(Name.charAt(5)); // karon Name ekta string object, tai charAt() method use korte parbo. charAt() method diye string er kono specific index er character ber korte parbo. ekhane 5 index er character ber korbe, jeta H hobe.

console.log(Name.indexOf("H")); //indexOf() method diye string er kono specific character er index ber korte parbo. ekhane "H" character er index ber korbe, jeta 7 hobe.

const newString = Name.substring(0, 5); //substring() method diye string er kono specific part ber korte parbo. ekhane 0 index theke 5 index porjonto part ber korbe, jeta "Alice" hobe.
console.log(newString);
 
const newString2 = Name.slice(-10, 5);
console.log(newString2); //slice() method diye string er kono specific part ber korte parbo. ekhane -10 index theke 5 index porjonto part ber korbe, jeta "Alice" hobe. slice() method e negative index use korte parbo, jeta string er end theke count kore. ekhane -10 index mane string er end theke 10 index porjonto part ber korbe, jeta "Alice" hobe.

const url = "https://www.youtube.com/watch?v=abc123";
console.log(url.replace("youtube", "vimeo")); //replace() method diye string er kono specific part replace korte parbo. ekhane "youtube" ke "vimeo" diye replace korbe, jeta "https://www.vimeo.com/watch?v=abc123" hobe.

console.log(url.includes("youtube")); //includes() method diye string er kono specific part ache kina check korte parbo. ekhane "youtube" ache kina check korbe, jeta true hobe.

console.log(Name.split("")); //split() method diye string ke array te convert korte parbo. ekhane Name string ke "" diye split korbe, jeta ["A","l","i","c","e","F","A","H","H"] hobe.

const cardNumber = "9876";
console.log(cardNumber.padStart(16, "*")); //padStart() method diye string er shuru te kono specific character add korte parbo. ekhane cardNumber string er shuru te "*" add korbe, jeta "************9876" hobe.

console.log("saaar".repeat(3)); //repeat() method diye string ke bar bar repeat korte parbo. ekhane "saaar" string ke 3 bar repeat korbe, jeta "saarsaarsaaar" hobe.

console.log("  Hello   ".trimStart()); //trimStart() method diye string er shuru te thaka extra space remove korte parbo. ekhane "  Hello   " string er shuru te thaka extra space remove korbe, jeta "Hello   " hobe.

console.log("  Hello   ".trimEnd()); //trimEnd() method diye string er shesh e thaka extra space remove korte parbo. ekhane "  Hello   " string er shesh e thaka extra space remove korbe, jeta "  Hello" hobe.

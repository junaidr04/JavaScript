//NUMBERS IN JAVASCRIPT

const x = 400
console.log(x); //400

const bal = new Number(500)
console.log(bal); //[Number: 500]

console.log(x.toString().length); //400 string e convert hoye gese and length ber korbe, jeta 3 hobe.

console.log(x.toFixed(2)); //toFixed() method diye number ke string e convert korte parbo and decimal point er por koto digit thakbe seta specify korte parbo. "400.00" hobe.

const num1 = 1055.5454
console.log(num1.toPrecision(4)); //toPrecision() method  total koto digit thakbe seta specify korte parbo. "1055" hobe.
console.log(num1.toPrecision(5)); //toPrecision() method  total koto digit thakbe seta specify korte parbo. "1055.5" hobe.
console.log(num1.toExponential(2)); //toExponential() method diye exponential form e dekha jabe. "1.06e+3" hobe.

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // toLocaleString() method diye number ke locale specific format e convert korte parbo. ekhane 'en-IN' locale use korle Indian number format e convert hobe, jeta "10,00,000" hobe.


//MATH IN JAVASCRIPT

console.log(Math); //Math object er shob properties and methods dekhabe.
console.log(Math.PI); //Math.PI diye pi er value ber korte parbo, jeta 3.141592653589793 hobe.

console.log(Math.round(4.7)); //Math.round() method diye number ke nearest integer e round korte parbo. ekhane 4.7 ke round korbe, jeta 5 hobe.
console.log(Math.round(4.4)); //Math.round() method diye number ke nearest integer e round korte parbo. ekhane 4.4 ke round korbe, jeta 4 hobe. karon .5 er upore hole round up hobe, ar nicher hole round down hobe.

console.log(Math.ceil(4.1)); //Math.ceil() method diye number ke next integer e round up korte parbo. ekhane 4.1 ke round up korbe, jeta 5 hobe.
console.log(Math.floor(4.9)); //Math.floor() method diye number ke previous integer e round down korte parbo. ekhane 4.9 ke round down korbe, jeta 4 hobe.

//abs, sqrt, pow, min, max, random

console.log(Math.abs(-5)); //Math.abs() method diye number er absolute value ber korte parbo. ekhane -5 er absolute value ber korbe, jeta 5 hobe.
console.log(Math.sqrt(16)); //Math.sqrt() method diye number er square root ber korte parbo. ekhane 16 er square root ber korbe, jeta 4 hobe.
console.log(Math.pow(2, 3)); //Math.pow() method diye number er power ber korte parbo. ekhane 2 er 3rd power ber korbe, jeta 8 hobe.
console.log(Math.min(5, 10, 2, 8)); //Math.min() method diye number gulo theke minimum value ber korte parbo. ekhane 5, 10, 2, 8 er minimum value ber korbe, jeta 2 hobe.
console.log(Math.max(5, 10, 2, 8)); //Math.max() method diye number gulo theke maximum value ber korte parbo. ekhane 5, 10, 2, 8 er maximum value ber korbe, jeta 10 hobe.

console.log(Math.random()); //Math.random() method diye random number generate korte parbo. ekhane 0 theke 1 er moddhe random number generate korbe, jeta 0.123456789 hobe.

console.log(Math.floor(Math.random() * 10 + 1)); //Math.random() method diye random number generate korte parbo, ar Math.floor() method diye number ke round down korte parbo. ekhane 0 theke 9 er moddhe random integer generate korbe, jeta 5 hobe. karon Math.random() * 10 diye 0 theke 10 er moddhe random number generate korbe, ar Math.floor() method diye number ke round down korbe, jeta 0 theke 9 er moddhe random integer generate korbe.

const min = 10
const max = 20
const result = Math.floor(Math.random() * (max - min + 1)) + min
console.log(result); //Math.random() method diye random number generate korte parbo, ar Math.floor() method diye number ke round down korte parbo. ekhane 10 theke 20 er moddhe random integer generate korbe, jeta 15 hobe. karon Math.random() * (max - min + 1) diye 0 theke (max - min) er moddhe random number generate korbe, ar Math.floor() method diye number ke round down korbe, jeta 0 theke (max - min) er moddhe random integer generate korbe, ar tar sathe min add korle 10 theke 20 er moddhe random integer generate korbe.
let date = new Date();
console.log(date);// current date and time dekhabe.
console.log(date.getDate()); //getDate() method diye current date er day of the month ber korte parbo. 
console.log(date.getDay()); //getDay() method diye current date er day of the week ber korte parbo. ekhane 0 mane Sunday, 1 mane Monday, 2 mane Tuesday, 3 mane Wednesday, 4 mane Thursday, 5 mane Friday, ar 6 mane Saturday hobe.
console.log(date.getFullYear());
console.log(date.getHours()); // getHours() method diye current date er hours ber korte parbo. ekhane 0 theke 23 er moddhe hours ber korbe, jeta 14 hobe.

console.log(date.toString()); //toString() method diye date ke string e convert korte parbo. ekhane current date ke string e convert korbe, jeta "Wed Jun 26 2024 14:30:00 GMT+0000 (Coordinated Universal Time)" hobe.
console.log(date.toDateString()); //toDateString() method diye date ke string e convert korte parbo, ar time part remove kore date part e convert korbe. ekhane current date ke string e convert korbe, jeta "Wed Jun 26 2024" hobe.
console.log(date.toLocaleString()); //toLocaleString() method diye date ke locale specific format e convert korte parbo. ekhane current date ke locale specific format e convert korbe, jeta "6/26/2024, 2:30:00 PM" hobe.

let date2 = new Date(2024, 0, 1); // January is month 0 in JavaScript
console.log(date2.toDateString()); //toDateString() method diye date ke string e convert korte parbo, ar time part remove kore date part e convert korbe. ekhane date2 ke string e convert korbe, jeta "Tue Jan 01 2024" hobe.

let myTime = Date.now(); // now() method diye current time er timestamp ber korte parbo. ekhane current time er timestamp ber korbe, jeta 1714411800000 hobe.
console.log(myTime); //myTime variable er value dekhabe, jeta 1714411800000 hobe. karon date.now() method diye current time er timestamp ber korbe, jeta 1714411800000 hobe.

let myCreatedDate = new Date(2024, 0, 1); // January is month 0 in JavaScript
console.log(myCreatedDate.getTime()); //getTime() method diye date er timestamp ber korte parbo. ekhane myCreatedDate er timestamp ber korbe, jeta 1704067200000 hobe. karon myCreatedDate variable e 2024-01-01 date set kora ache, ar getTime() method diye tar timestamp ber korbe, jeta 1704067200000 hobe.
console.log(Math.floor(myTime / 1000)); //Math.floor() method diye number ke round down korte parbo, ar date.now() method diye current time er timestamp ber korte parbo. ekhane current time er timestamp ke 1000 diye divide kore second e convert korbe, ar Math.floor() method diye number ke round down korbe, jeta 1714411800 hobe. karon date.now() method diye current time er timestamp ber korbe, jeta 1714411800000 hobe, ar tar sathe 1000 diye divide kore second e convert korbe, jeta 1714411800 hobe, ar Math.floor() method diye number ke round down korbe, jeta 1714411800 hobe.

let date3 = new Date();
date3.toLocaleString('default', { weekday: 'long' }); //toLocaleString() method diye date ke locale specific format e convert korte parbo, ar weekday option use kore week er din er name ber korte parbo. ekhane current date ke locale specific format e convert korbe, ar weekday option use kore week er din er name ber korbe, jeta "Wednesday" hobe.
console.log(date3.toLocaleString('default', { weekday: 'long' })); //toLocaleString() method diye date ke locale specific format e convert korte parbo, ar weekday option use kore week er din er name ber korte parbo. ekhane current date ke locale specific format e convert korbe, ar weekday option use kore week er din er name ber korbe, jeta "Wednesday" hobe.
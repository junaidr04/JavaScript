//typeof and Type Conversion
let score="53";
let name="jack";
console.log(typeof score);
console.log(typeof name);

//convert into number
let valNum=Number(score);
console.log(typeof valNum);

//convert into number
let valStr=Number(name);
console.log(typeof valStr);


//number er khetre correct conversion hoyeche, kintu string er khetre conversion er somoy o/p number hoise but, tai valStr er value NaN (Not a Number) hoyeche.
console.log(valNum);
console.log(valStr);

//increament and decrement
let x=10;
x++;
console.log(x);
x--;
console.log(x);

//post increment  
let y=5;
console.log(y++);//5 print hbe agge, tarpor y=6 hbe.
console.log(y); // 6

//pre increment
let z=12;
console.log(++z); // agge z er value barabe tarpor print korbe, tai o/p 13 hobe.
console.log(z); // z er value 13 hobe, karon pre increment er khetre agge value barabe tarpor print korbe.

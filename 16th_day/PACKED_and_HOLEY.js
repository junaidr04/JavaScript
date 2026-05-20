// PACKED — সব index এ value আছে, কোনো gap নেই

const packed = [1, 2, 3, 4, 5];
// V8 এর কাছে এটা PACKED_SMI_ELEMENTS
// SMI = Small Integer

const packedStr = ["a", "b", "c"];
// PACKED_ELEMENTS

const packedMixed = [1, "a", true];
// PACKED_ELEMENTS



// HOLEY — কোনো gap আছে

const holey = [1, 2, , 4, 5]; // index 2 তে কিছু নেই
// V8 এর কাছে এটা HOLEY_ELEMENTS

// এভাবেও HOLEY হয়
const arr = new Array(5); // [empty x 5]
console.log(arr);         // [ <5 empty items> ]

// index skip করলে
const arr2 = [];
arr2[0] = 1;
arr2[2] = 3;  // index 1 skip — HOLEY!
console.log(arr2); // [1, empty, 3]



//V8 এর Element Kinds — উপর থেকে নিচে fast থেকে slow

/*
PACKED_SMI_ELEMENTS      ← সবচেয়ে fast 
PACKED_DOUBLE_ELEMENTS
PACKED_ELEMENTS
HOLEY_SMI_ELEMENTS
HOLEY_DOUBLE_ELEMENTS
HOLEY_ELEMENTS           ← সবচেয়ে slow 
*/

const arr = [1, 2, 3];      // PACKED_SMI_ELEMENTS 

arr.push(4.5);              // PACKED_DOUBLE_ELEMENTS — downgrade
arr.push("hello");          // PACKED_ELEMENTS — আরো downgrade
arr[10] = 99;               // HOLEY_ELEMENTS — সবচেয়ে নিচে ❌
// এখান থেকে আর উপরে যাবে না!



// HOLEY array তে operation করলে V8 extra check করে
// প্রতিটা element এর জন্য:
// ১. Array তে আছে কিনা
// ২. Prototype এ আছে কিনা
// ৩. তারপর value দেয়

// PACKED array তে এই extra check লাগে না → faster!

// Performance difference
const packed = [1, 2, 3, 4, 5];
const holey = [1, , 3, , 5];    // holes আছে

// map, filter, forEach সব PACKED এ faster কাজ করে



//Best Practices — Performance এর জন্য


// HOLEY বানাবি না
const arr = new Array(10)     // [empty x 10] — HOLEY
arr[0] = 1
arr[5] = 5                    // gap তৈরি হলো

// PACKED রাখো
const arr = []
arr.push(1)
arr.push(2)
arr.push(3)

// Delete করলে HOLEY হয়
const arr = [1, 2, 3]
delete arr[1]    // [1, empty, 3] — HOLEY!

// splice use করো
arr.splice(1, 1) // [1, 3] — PACKED 

// Array length manually বাড়ানো
const arr = [1, 2, 3]
arr.length = 10  // HOLEY হয়ে গেলো

// শুরু থেকেই সব value দাও
const arr = [1, 2, 3, 4, 5] // PACKED
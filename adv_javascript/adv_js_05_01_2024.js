// //mutable immutable
// var x = 5;
// var y = x;
// y++;
// console.log(x, y);

// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = arr1;
// arr2.push(6);
// console.log(arr1, arr2);

// var string = "";
// for (var counter = 0; counter < 100; counter++) {
//   string += counter + " ";
// }
// console.log(string);
//===============================================================================
// console.log("0==''", 0 == ""); //true
// console.log("0===''", 0 === ""); //false

// console.log("0=='0'", 0 == "0"); //true
// console.log("0==='0'", 0 === "0"); //false

// console.log("false==0", false == 0); //true
// console.log("false===0", false === 0); //false

// console.log("true==1", true == 1); //true
// console.log("true===0", true === 1); //false

// console.log("null==undefined",null==undefined); //true
// console.log("null===undefined",null===undefined); //false
//==============================================================================

console.log(typeof "john bryce");

//number
console.log(typeof 3);
console.log(typeof 3.5);
console.log(typeof Infinity);
console.log(typeof NaN);

//boolean
console.log(typeof false);
console.log(typeof true);

//object
console.log(typeof [1, 2, 3, 4]);
console.log(typeof { name: "yeruslav", age: 2 });
console.log(typeof "/^[0-9]$/");
console.log(typeof new Date());

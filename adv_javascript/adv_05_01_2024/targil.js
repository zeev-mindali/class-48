var str = "test"; //string -> primitive
var num = 1; //number -> primitive
var bol = true; //boolean -> primitive

var str1 = new String(str); //Object
var num1 = new Number(num); //Object
var bol1 = new Boolean(bol); //Object

console.log(typeof str);
console.log(typeof str1);
console.log(typeof num);
console.log(typeof num1);
console.log(typeof bol);
console.log(typeof bol1);

console.log("================================");
console.log(bol == bol1);
console.log(bol === bol1);
console.log(typeof bol == typeof bol1);

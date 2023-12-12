//constructor function made by ilan
function Car(){
    this.manufacturer = "bmw";
    this.model = "x6";
}

//creating object constructor 
const bmw_Daniel = new Car();
const bmw_Gabriel = new Car();

// console.log(bmw_Daniel);
// console.log(bmw_Gabriel);

//added by Yardon 
Car.prototype.engine = 3000;

// console.log("==========================================");
// console.log(bmw_Daniel);
// console.log(bmw_Gabriel);

//achmed said the engine is 3300
//changing only new create objects from Car
Car.prototype = {engine: 3300}

const bmw_ofir = new Car();

// console.log(`the car of daniel ${bmw_Daniel.manufacturer}-${bmw_Daniel.model} have engine :${bmw_Daniel.engine}`);
// console.log(`the car of Gabriel ${bmw_Gabriel.manufacturer}-${bmw_Gabriel.model} have engine :${bmw_Gabriel.engine}`);
// console.log(`the car of Gabriel ${bmw_ofir.manufacturer}-${bmw_ofir.model} have engine :${bmw_ofir.engine}`);


function Person(){
    this.name="zeev";
}

Person.prototype.name="zeevik the fox";
Person.prototype.age=49;

Person.prototype = {name:"Mess with the best and die like the rest!!!",age:49};
const zeev = new Person();

console.log(zeev);

console.log(zeev.name,zeev.age);

console.log(zeev.__proto__)
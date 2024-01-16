// function Cat(name, age) {
//   var _age;
//   var _name;

//   this.getAge = function () {
//     return this._age;
//   };

//   this.getName = function () {
//     return this._name;
//   };

//   this.setName = function (newName) {
//     if (newName.length < 2 || newName.length > 15) {
//       console.log(
//         "please enter a name in more then 2 letters and less then 15 letters"
//       );
//       this._name = "";
//       return;
//     }
//     this._name = newName;
//   };

//   this.setAge = function (newAge) {
//     if (newAge < 0 || newAge > 20) {
//       console.log("age need to be between 0-20");
//       this._age = 0;
//       return;
//     }
//     this._age = newAge;
//   };

//   /*
//   this.drinkMilk = function () {
//     console.log("milkkkkk, yam yammmm");
//   };
//   */

//   this.setName(name);
//   this.setAge(age);
// }

// Cat.prototype.drinkMilk = function () {
//   console.log("milkkkkk, yam yammmm");
// };

// Cat.prototype.isAlive = false;

// Cat.type = "Cat";
// //console.log(Cat.prototype.isAlive);
// //console.log(Cat.type);

// // let cat = new Cat("kitzi", 1);
// // console.log(cat.age);
// // console.log(cat.name);
// // console.log(cat);
// // cat.drinkMilk();

// let cat = new Cat("Mitzi", -4);
// console.log(cat);

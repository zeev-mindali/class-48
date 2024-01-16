class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  print() {
    return `name: ${this.name} is ${this.age} years old`;
  }

  static description() {
    return "i am a Person class";
  }

  stars() {
    return "*********************************";
  }
}

class Student extends Person {
  //grade
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  //Override
  print(grade) {
    if (grade === undefined) {
      return `${super.print()} grade:${this.grade}`;
    }
    return `${super.print()} grade:${grade}`;
  }
}

class Lecturer extends Person {
  //Course
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  print() {
    return `${super.print()} tech ${this.course}`;
  }
}

// Person.description();
// let gabriel = new Person("Gabriel", 29);
// console.log(gabriel.print());
// //console.log(gabriel.description());
// console.log(gabriel instanceof Person);

let gabriel = new Student("Gabriel", 29, 100);
let zeev = new Lecturer("Zeev", 49, "FullStack");

console.log(gabriel);
console.log(zeev);
console.log(zeev.print());
console.log(gabriel.print());
console.log(gabriel.print("A++"));
console.log(zeev.stars());
console.log(gabriel.stars());


//  5X1 + 5X2 +5X3 =30
// 5(1+2+3) = 30

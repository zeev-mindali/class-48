//object
const student = {
    firstName : 'Gabriel',
    studentClass: 48,
    sayHi: ()=>{
        console.log("Hello world !!!");
    },
    getClass: function (){
        return this.studentClass;
    }
}

const student2 = {
    firstName : 'Matti',
    studentClass: 48,
    sayHi: ()=>{
        console.log("i got fiber !!!");
    },
    getClass: function (){
        return this.firstName;
    }
}
//print the object
console.log(student);

console.log("who is your man: ",student.firstName);

//print class by noation
var classField = "studentClass";
console.log("the best class that lecturer can get: ",student[classField]);
student.sayHi();
console.log("And the class is :",student.getClass());
student2.sayHi();
console.log("the fastest student: ",student2.getClass());
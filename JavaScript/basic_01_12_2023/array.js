/*
var namesArray = ["zeev","mati","simyon","hammer","Angel"];

console.log(namesArray[namesArray.length-1]);
*/

//var grades = [50,100,88,70,85,78,50,89,45,90,100,80,100,95];
//var grades = [50,80,90,88,100];

// for (var index=0;index<5;index++){
//     grades[index] = Number(prompt ("enter a grade"));
// }

//grades[99]=100; array will be now in size of 100 cells.
//cell from 5 to 98 will be undefined
//which give us a calculation of NaN=>Not A Number (not the indian bread);


var grades = [];

//push => last in first out => LIFO
for (var index=0;index<5;index++){
    grades.push(Number(prompt("enter a grade")));
}

var lowGrade=100;
var highGrade=0;
var avg=0;

for (var index=0;index<grades.length;index++){
    //look for the lowest grade
    if (grades[index]<lowGrade){
        lowGrade=grades[index];
    }
    if (grades[index]>highGrade){
        highGrade=grades[index];
    }
    avg+=grades[index];
}
avg/=grades.length;

console.log("lowest grade:",lowGrade);
console.log("highest grade:",highGrade);
console.log("average:",avg);
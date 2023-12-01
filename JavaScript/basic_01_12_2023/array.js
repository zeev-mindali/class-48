/*
var namesArray = ["zeev","mati","simyon","hammer","Angel"];

console.log(namesArray[namesArray.length-1]);
*/

var grades = [50,100,88,70,85,78,50,89,45,90,100,80,100,95];
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
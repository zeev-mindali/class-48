var grade1 = 50;
var grade2 = 100;
var grade3 = 88;
var grade4 = 70;
var grade5 = 85;

var topGrade=0;
var lowGrade=100;

//check top grades
if (grade1>topGrade){
    topGrade=grade1;
} 
if (grade2>topGrade){
    topGrade=grade2;
}
if (grade3>topGrade){
    topGrade = grade3;
}

if (grade4>topGrade){
    topGrade=grade4;
}
if (grade5>topGrade){
    topGrade=grade5;
}

//check low grade
if (grade1<lowGrade){
    lowGrade=grade1;
}

if (grade2<lowGrade){
    lowGrade=grade2;
}

if (grade3<lowGrade){
    lowGrade=grade3;
}

if (grade4<lowGrade){
    lowGrade=grade4;
}

if (grade5<lowGrade){
    lowGrade=grade5;
}

var avg = grade1+grade2+grade3+grade4+grade5;
avg /=5;

console.log("top grade: ",topGrade);
console.log("low grade: ",lowGrade);
console.log("average: ",avg);


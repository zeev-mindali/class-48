var grades1=[85,84,89,92,57,88,94];
var grades2=[88,92,54,100,75,60,90];
var grades3=[100,89,90,55,60,92,100];

// var avg1=0;
// var avg2=0;
// var avg3=0;

// for (var counter=0;counter<grades1.length;counter++){
//     avg1+=grades1[counter];
// }
// avg1/=grades1.length;

// for (var counter=0;counter<grades2.length;counter++){
//     avg2+=grades2[counter];
// }
// avg1/=grades2.length;

// for (var counter=1;counter<grades3.length;index++){
//     avg3+=grades[2]
// }
// avg3/=grades3.length;


//DRY=>Do not Repeat Yourself

function printHello(){
    console.log("Hello class 48");
}

function printHi(userName){
    console.log("Hello ",userName);
}

function getPi(){
    return 3.1415;
}

function getAvg(grades){
    avg=0;
    for (var index=0;index<grades.length;index++){
        avg+=grades[index];
    }
    return avg/grades.length;
}

printHello();
printHi("Ofir");
printHi("Ilan");
var pi = getPi();
console.log(getPi());
console.log(getAvg(grades1));
console.log(getAvg(grades2));
console.log(getAvg(grades3));

var userNumber=8774;
console.log("User Number:",userNumber)
function getDigits(userNumber){   
    var digits=0;
    while (userNumber>0){
        digits++;
        userNumber=parseInt(userNumber/10);
    }
    console.log("user number inside function:",userNumber);
    return digits;
}
console.log("User Number:",userNumber)
console.log("total digits: ",getDigits(7834658734));


function getHigh(numberArray){
    var highNumber=numberArray[0];
    for (var counter=1;counter<numberArray.length;counter++){
        if (numberArray[counter]>highNumber){
            highNumber=numberArray[counter];
        }
    }
    return highNumber;
}

console.log(getHigh(grades1));
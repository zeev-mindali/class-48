var userNumber = prompt("Please enter a number");

if (userNumber<10){
    alert ("1 digit");
} else if (userNumber<100){
    alert ("2 digit");
} else if (userNumber<1000){
    alert ("3 digit");
} else {
    alert ("4 digit or more....")
}
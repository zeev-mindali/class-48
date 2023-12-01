//לולאת תנאי

//var => undefined (var x), number , String , boolean, object (arrays, function)
var userNumber = prompt ("please enter a number");
var digits=0;
var temp=userNumber;
while (temp>0){
    digits++;
    temp = parseInt(temp/10);
    //console.log(temp);
}
console.log("user number:",userNumber," has ",digits," digits");
/*
 to change a number to integer
 use the command parseInt();
*/

//לולאת אינדקס
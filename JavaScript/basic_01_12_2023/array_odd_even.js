var numbers = [5,4,8,9,2,3,4,5,8,8,5,9,4,2,7,6,5,2,8,6,5,3];

var odd=0;
var even=0;
for (var counter=0;counter<numbers.length;counter++){
    if (numbers[counter]%2==0){
        even++;
    } else {
        odd++;
    }
}

console.log("total even:",even);
console.log("total odds:",odd);
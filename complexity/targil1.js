let number = 23702389;
let numberArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let temp = number;
while (temp > 0) {
  numberArray[temp % 10]++;
  temp = parseInt(temp / 10);
}
console.log(numberArray);
// [0,0,2,2,0,0,0,1,1,1]
for (let counter = 0; counter < numberArray.length; counter++) {
  if (numberArray[counter] === 0) {
    console.log(`the number ${counter} not exists`);
  }
}

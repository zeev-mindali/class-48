function func() {
  num1 = 4;
  if (num1 == 3) {
    var num1 = 3;
  }
}

//func();
//console.log(num1);
function func2() {
  for (let counter = 1; counter <= 10; counter++) {
    console.log(counter);
  }
  //console.log(counter); <== error not defined
}

func2();
//console.log(counter); <== error not defined

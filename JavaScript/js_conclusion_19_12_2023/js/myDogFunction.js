//what we did before
//name of dog
function Dog(name){
    this.name = name;
    this.speak = ()=>{
        console.log("WOOF WOOF !!!!");
    }
}

function OldDog(name){
    this.name=name;
    this.speak = ()=>{
        console.log("HOUUUUU HOUUUUU");
    }
}

var myDog = new Dog("Butch");
myDog.speak();
var nippo = new OldDog("Nippo");
nippo.speak();

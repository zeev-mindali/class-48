//regular class
class Dog{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes sound`);
    }

    walk(){
        console.log(`${this.name} is going to walk`);
    }
}

//extended class
class GurdianDog extends Dog{
    bark(){
        console.log("HAOUUU HAOUUU WOOF WOOF");
    }
}
var jasper = new Dog("Jasper");
jasper.speak();
var nipo = new Dog("Nippo");
nipo.speak();
nipo.walk();
var shoko = new GurdianDog("shoko");
shoko.speak();
shoko.bark();


class MathUtils{
    static calculateVat(price){
        return price*1.17;
    }
}

//price 250
//var myUtils = new MathUtils();
console.log(`price after VAT: ${MathUtils.calculateVat(425)}`);
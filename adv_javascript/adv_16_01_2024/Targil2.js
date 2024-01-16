class Animal {
  constructor(name, sound) {
    this.setName = name;
    this.setSound = sound;
    this.setIsAlive = true;
  }

  set setName(name) {
    this.name = name;
  }

  set setSound(sound) {
    this.sound = sound;
  }

  set setIsAlive(isAlive) {
    this.isAlive = isAlive;
  }

  get getName() {
    return this.name;
  }

  get getSound() {
    return this.sound;
  }

  get getIsAlive() {
    return this.isAlive;
  }

  eat(animal) {
    if (this instanceof Lion || this instanceof Cat) {
      animal.setIsAlive = false;
    }
  }

  drinkMilk(cow) {
    if (cow instanceof Cow) {
      return cow.isAlive === true;
    }
  }
}

class Lion extends Animal {
  constructor(name, sound) {
    super(name, sound);
  }
}

class Cow extends Animal {
  constructor(name, sound) {
    super(name, sound);
  }
}

class Cat extends Animal {
  constructor(name, sound) {
    super(name, sound);
  }
}

class Mouse extends Animal {
  constructor(name, sound) {
    super(name, sound);
  }
}

class Dog extends Animal {
  constructor(name, sound) {
    super(name, sound);
  }
}

let lion = new Lion("lev", "roarrrrrrr!!!!!");
let cow = new Cow("mushmush", "muuuuuuuuuuuuuuuu");
let cat = new Cat("mitzi", "Miouuuuu, Chatuuuula");
let mouse = new Mouse("mish", "sqiwttt");
let dog = new Dog("Nipo", "Huuuuuu, Huuuuuu");
console.log(lion.getSound);
console.log(cow.getSound);
console.log(cat.getSound);
console.log(mouse.getSound);
console.log("===================================");
console.log(cat.drinkMilk(cow) ? "yammmy milk" : "She is dead !!!!!!!");
lion.eat(cow);
console.log(cat.drinkMilk(cow) ? "yammmy milk" : "She is dead !!!!!!!");
console.log(dog.getSound);

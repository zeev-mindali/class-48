class Shape {
  constructor(x, y, color) {
    this.setX = x;
    this.setY = y;
    this.color = color;
  }

  set setX(x) {
    this.x = x;
  }

  set setY(y) {
    this.y = y;
  }

  get getX() {
    return this.x;
  }

  get getY() {
    return this.y;
  }

  set setColor(color) {
    this.color = color;
  }

  get getColor() {
    return this.color;
  }

  toString() {
    return `x=${this.x} y=${this.y} color=${this.color}`;
  }
}

let shape = new Shape(5, 7, "Blue");
console.log(shape);
console.log(shape.toString());

class Circle extends Shape {
  static pi = 3.14;

  constructor(x, y, color, radius) {
    super(x, y, color);
    this.setRadius = radius;
  }

  set setRadius(radius) {
    this.radius = radius;
  }

  get getRadius() {
    return this.radius;
  }

  toString() {
    return `${super.toString()} radius=${this.radius}`;
  }

  get getArea() {
    //return Circle.pi*this.radius*this.radius;
    return Circle.pi * Math.pow(this.radius, 2);
    //return Circle.pi*this.radius**;
  }

  get getPrimeter() {
    return Circle.pi * this.radius;
  }
}

let circle = new Circle(20, 50, "Red", 10);
console.log(circle.toString());
console.log(
  `distance ${Math.sqrt(Math.pow(circle.getX, 2) + Math.pow(circle.getY, 2))}`
);
console.log(`area: ${circle.getArea}`);
console.log(`preimter: ${circle.getPrimeter}`);
console.log(`PI: ${Circle.pi}`);
console.log(`full PI : ${Math.PI}`);

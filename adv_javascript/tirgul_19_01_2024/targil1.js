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
    return `x=${this.x} y=${this.y} color:${this.color}`;
  }
}

let shape = new Shape(5, 7, "Blue");
console.log(shape);
console.log(shape.toString());

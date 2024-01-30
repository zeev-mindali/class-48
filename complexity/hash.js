class Point {
  x = 0;
  y = 0;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  compare = (x, y) => {
    return x + y === this.x + this.y;
  };
}

let point1 = new Point(1, 2);
let point2 = new Point(2, 1);
let point4 = new Point(0, 3);
let point5 = new Point(3, 0);
let point6 = new Point(-1, 4);
let point7 = new Point(4, -1);

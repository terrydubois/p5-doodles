let pg;
let branches;

function setup() {
  createCanvas(1080, 1080);

  pg = createGraphics(width, height);
  pg.background(200);

  branches = [];
  for (let i = 0; i < 5; i++) {
    new Branch();
  }
}

function randomRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Branch {

  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.rad = 10;
    this.dir = randomRange(0, 360);
    this.spd = 4;
    branches.push(this);

    console.log("new branch!");
  }

  update() {

    // draw self
    pg.fill(0);
    pg.circle(x, y, rad);

    // move
    this.x = x + (spd * cos(radians(dir)));
    this.y = y + (spd * sin(radians(dir)));
  }

}

function keyPressed() {

  // reset background
  if (key === 'r') {
    pg.reset();
    pg.background(200);
  }
}

function draw() {
  
  pg.background(200);
  image(pg, 0, 0);
}
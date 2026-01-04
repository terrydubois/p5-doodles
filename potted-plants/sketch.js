let pg;
let branches;

function setup() {
  createCanvas(1080, 1080);
  reset();
}

function reset() {

  // create graphics
  pg = createGraphics(width, height);
  pg.background(200);

  // create branches
  branches = [];
  for (let i = 0; i < 1; i++) {
    new Branch(width / 2, height / 2);
  }

  // reset after 5 seconds
  setTimeout(reset, 5000);
}

function randomRange(min, max) {
  return Math.random() * (max - min + 1) + min;
}

class Branch {

  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.rad = 10;
    this.dir = 270;
    this.dirStart = this.dir;
    this.dirIncr = 1;
    this.spd = 1;
    this.turnSwitches = 0;

    // switch turning direction
    setInterval(() => {
      this.turnSwitches++;
      this.dirIncr = -this.dirIncr;
    }, 1000);

    branches.push(this);
  }

  update() {

    // draw self
    pg.fill(0);
    pg.circle(this.x, this.y, this.rad);

    // move
    this.x = this.x + (this.spd * cos(radians(this.dir)));
    this.y = this.y + (this.spd * sin(radians(this.dir)));

    // turn
    this.dir += this.dirIncr;
  }

}

function keyPressed() {

  // reset when pressing R
  if (key === 'r') {
    reset();
  }
}

function draw() {

  // draw branches
  for (let i = 0; i < branches.length; i++) {
    let _branch = branches[i];
    _branch.update();

    pg.fill('black');
    pg.rect(10, 10, 100, 60);
    pg.fill('white');
    pg.textSize(20);
    pg.text(round(_branch.x) + ", " + round(_branch.y), 20, 30);
    pg.text(_branch.turnSwitches, 20, 60);
  }

  image(pg, 0, 0);
}
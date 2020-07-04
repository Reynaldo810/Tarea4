var pacman = {
  x: 200,
  v: 5,
  y: 200,
  mo: 0,
  mc: 0,
}
var n 

function setup() {
  createCanvas(400, 400);
  frameRate(20);
  n=2
}

function draw() {
  background(0);
  noStroke();
  fill(255, 204, 0)
  arc(pacman.x,pacman.y,40,40,pacman.mo,pacman.mc)
  if (keyCode == 37){
    pacman.x= pacman.x - pacman.v
    pacman.mo = 12/PI
    pacman.mc = 8/PI
  } else if (keyCode == 38) {
    pacman.y= pacman.y - pacman.v
    pacman.mo= 17/PI
    pacman.mc= 13/PI
  } else if (keyCode == 39) {
    pacman.x= pacman.x + pacman.v
    pacman.mo= 22/PI
    pacman.mc= 18/PI
  } else if (keyCode == 40) {
    pacman.y= pacman.y + pacman.v
    pacman.mo = 7/PI
    pacman.mc = 3/PI
  } 
  if (pacman.x > 400) {
    pacman.x = 0
  } else if (pacman.x < 0) {
    pacman.x = 400
  } 
  if (pacman.y > 400) {
    pacman.y = 0
  } else if (pacman.y < 0) {
    pacman.y = 400
  }

  if (n%2==0){
    pacman.mo=PI
    pacman.mc=PI
  } n = n+1
}

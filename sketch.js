let cor;
let posX; //x
let posY; //y

function setup() {
  createCanvas(400, 400);
  background("brown");
  cor = color(random(0,255),random(0,255),random(0,255));
  posX = 200;
  posY = 200;
}

function draw() {
  fill(cor);
  circle(posX, posY, 50);
  
  if(mouseX < posX) {
    posX = posX - 1;
  }
  
  if(mouseX > posX) {
    posX = posX + 1;
  }
  
  if(mouseY > posY) {
    posY = posY + 1;
  }

  if(mouseY < posY) {
    posY = posY - 1;
  }
  
  if(mouseIsPressed) {
    cor = color(random(0,255),random(0,255),random(0,255), random(0,100));
  }
}
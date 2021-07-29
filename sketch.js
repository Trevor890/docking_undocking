var sevastapol,torrens,hasDocked;

function preload(){
  sevastapol=loadImage("iss.png");
  torrens=loadAnimation("spacecraft1.png,spacecraft2.png,spacecraft3.png,spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}


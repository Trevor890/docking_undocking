var sevastapol,torrens,hasDocked,bg;

function preload(){
  sevastapol=loadImage("iss.png");
  torrens=loadAnimation("spacecraft1.png");
  torrens1=loadAnimation("spacecraft2.png");
  torrens2=loadAnimation("spacecraft3.png");
  torrens3=loadAnimation("spacecraft4.png");
  bg=loadImage("spacebg.jpg");
}

function setup() {
  createCanvas(1300,700);
  sevastapol_s=createSprite(400, 200, 50, 50);
  sevastapol_s.addImage("iss.png",sevastapol);
  sevastapol_s.scale=0.75;
  torrens_s=createSprite(200,600,40,40);
  torrens_s.addAnimation("tor",torrens);
  torrens_s.scale=0.15;
  hasDocked=createSprite(200,200,1,1);
  hasDocked.visible=false;
}

function draw() {
  background(bg); 
//if(!hasDocked){
  if(keyDown(LEFT_ARROW)){
    torrens_s.addAnimation("tor",torrens2);
    torrens_s.changeAnimation("tor");
    torrens_s.x=torrens_s.x-5;
  }
  if(keyDown(RIGHT_ARROW)){
    torrens_s.addAnimation("tor",torrens3);
    torrens_s.changeAnimation("tor");
    torrens_s.x=torrens_s.x+5;

  }
  if(keyDown(DOWN_ARROW)){
    torrens_s.addAnimation("tor",torrens);
    torrens_s.changeAnimation("tor");
    
  }
  if(keyDown(UP_ARROW)){
    torrens_s.addAnimation("tor",torrens1);
    torrens_s.changeAnimation("tor");
    torrens_s.y=torrens_s.y-5;
  }

  if(torrens_s.x==350&&torrens_s.y==260){
textSize (80);
text ("Docking Successful!",500,300)
  }

  
console.log(torrens_s.x);
console.log(torrens_s.y);
//}
 drawSprites();
}
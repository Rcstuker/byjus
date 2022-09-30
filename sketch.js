var triangulo

function setup() {
  createCanvas(400,400);
  triangulo = createSprite (200,200,100,100);
 



}

function draw() 
{

  background(30);
 if(keyIsDown (RIGHT_ARROW)){
  triangulo.x = triangulo.x +1
 }
 

  drawSprites()
}













var buttonMoveX= 0;
var buttonMoveY= 20;
var score=0;
 
var backgroundR= 0; 
function setup() { 
  createCanvas(windowWidth,windowHeight);
  button = createButton("GameTime");
  button.mousePressed(randomLocation); 
  button.position(buttonMoveX, buttonMoveY);
} 

function draw() { 
  textSize(15);
	text(score, 20 ,20);
  button.position(buttonMoveX, buttonMoveY);
}

function randomLocation(){
  fill('white');
  background(random(255),random(255),random(255));
  buttonMoveX = random(width);
  buttonMoveY = random(height);
  score = score + 1
}
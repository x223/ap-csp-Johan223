var fill_color= 'white';

function setup() {
   createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#29BEEA'); 
  fill('black');
  rect(120,60,100,200);
  rect(155,260,25,200); 
  fill(fill_color);
  ellipse(170,100, 60 ,60);
  ellipse (170,163,60,60);
  ellipse(170,225,60,60);
  if (mouseY <= windowHeight *1  /3 ){
    fill_color = 'red';
  } 
}
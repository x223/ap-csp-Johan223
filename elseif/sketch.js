var colorbg= 'blue';
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(colorbg);
  if (mouseX  < 1 * windowWidth /3 ){
    colorbg='#cc0000';
  }
  else if(mouseX<2 * windowWidth /3 ){
    colorbg= '#ff8000';
  
  }
  
}
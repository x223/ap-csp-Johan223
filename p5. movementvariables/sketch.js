var x = 0;
var y = 0; 
var oppx = 1;
var oppy = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(220);
	fill(random(255),random(255),random(255));
	rect(x, y, 20, 50);
	
	x = x + 10 * oppx;
	
	if (x <= 0 || x >= windowWidth - 25) {
		oppx = oppx * -1;
	}
	if( y <= 0 || y > windowheight){
	  oppy = oppy * -1; 
	}

}
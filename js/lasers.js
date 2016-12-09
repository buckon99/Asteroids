var cX, cY, shoot, x1, y1, speed;
//lasers
var laser = []
function setup(){
	shoot = false;
	createCanvas(400, 400);
	//x = 200;
	//y = 200;
	cX = width/2;
	cY = height/2;
	speed = 0;

}
function draw(){
	background(255);
	fill(255, 0 , 0);
	
	var ship = createVector(mouseX-cX, mouseY-cY);
	ship.normalize();
	ship.mult(10);
	line(cX, cY, cX+ship.x, cY+ship.y);
	
	for(var i=0; i<laser.length; i++){
		laser[i].draw();
		laser[i].updatePos();
	}
}

function ddrawLaser(x0, x1, y0, y1){
		var laser = createVector(x1-x0, y1-y0);
		laser.normalize();
		laser.mult(10);

		this.x = x0;
		this.y = y0;
		
	this.draw = function(){
		push();
			noStroke();
			ellipse(this.x, this.y, 5);
		pop();
	}
	this.updatePos = function(){
		this.x += laser.x;
		this.y += laser.y;
	}
}
function mouseClicked(){

	laser.push(new drawLaser(cX, mouseX, cY, mouseY));

}
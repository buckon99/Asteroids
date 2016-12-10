var cX;
var cY;
var shoot = false;
var lasers = [];
function drawLaser(){
	cX = width/2;
	cY = height/2;
	fill(255, 0 , 0);
	var ship = createVector(mouseX-cX, mouseY-cY);
	ship.normalize();
	ship.mult(100);
	line(cX, cY, cX+ship.x, cY+ship.y);
	for(var i=0; i< lasers.length; i++){
		lasers[i].draw();
		lasers[i].updatePos();
	}
}

function Laser(x0, x1, y0, y1){
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
function laserClick(){

	lasers.push(new Laser(cX, mouseX, cY, mouseY));

}
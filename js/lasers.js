var cX, cY, shoot, x1, y1, speed;

var lasers = []
function laserSetup(){
	shoot = false;
	cX = width/2;
	cY = height/2;
	speed = 0;

}
function laserDraw(){
	var ship = createVector(mouseX-cX, mouseY-cY);
	ship.normalize();
	ship.mult(10);
	line(cX, cY, cX+ship.x, cY+ship.y);
	
	for(var i=0; i<lasers.length; i++){
		lasers[i].draw();
		lasers[i].updatePos();
	}
}

function drawLaser(x0, x1, y0, y1){ //normal lasers
		var laser = createVector(x1-x0, y1-y0);
		laser.normalize();
		laser.mult(10);
		// Not positive that this will work
		this.sound = new Audio('Sound Assets/laser 5.wav');

		this.x = x0;
		this.y = y0;
		
	this.draw = function(){
		push();
			noStroke();
			ellipse(this.x, this.y, 5);
		pop();
	}

	this.playSound = function() {
		this.sound.play();
	}

	this.updatePos = function(){
		this.x += laser.x;
		this.y += laser.y;
	}
}

function drawBigLaser(x0, x1, y0, y1){ //big laser, can also be used in mouse dragged
		var laser = createVector(x1-x0, y1-y0);
		laser.normalize();
		laser.mult(3);

		// Not positive that this will work
		this.sound = new Audio('Sound Assets/laser 3.wav');
		this.x = x0;
		this.y = y0;
		
	this.draw = function(){
		push();
			noStroke();
			ellipse(this.x, this.y, 50);
		pop();
	}

	this.playSound = function() {
		this.sound.play();
	}

	this.updatePos = function(){
		this.x += laser.x;
		this.y += laser.y;
	}
}

function drawLaserBeam(x0, x1, y0, y1){ //beams
		var laser = createVector(x1-x0, y1-y0);
		laser.normalize();
		laser.mult(5);

		this.x = x0;
		this.y = y0;

		// Not positive that this will work
		this.sound = new Audio('Sound Assets/laser 2.wav');
		
	this.draw = function(){
		push();
			noStroke();
			for(var i=0; i<10; i+= .5){
				ellipse(this.x + laser.x*i, this.y + laser.y*i, 5);
			}
		pop();
	}
	this.playSound = function() {
		this.sound.play();
	}
	this.updatePos = function(){
		this.x += laser.x;
		this.y += laser.y;
	}
}

function drawRocket(x0, x1, y0, y1){ //rockets
		var laser = createVector(x1-x0, y1-y0);
		laser.normalize();
		laser.mult(5);

		this.x = x0;
		this.y = y0;
		// Not positive that this will work
		this.sound = new Audio('Sound Assets/missile.wav');

	this.playSound = function() {
		this.sound.play();
	}	
	
	this.draw = function(){
		push();
			noStroke();
			//need to insert code for the rocket design
			

		pop();
	}
	this.updatePos = function(){
		this.x += laser.x;
		this.y += laser.y;
	}
}
function laserClick(){

	lasers.push(new drawLaser(cX, mouseX, cY, mouseY));
	lasers[lasers.length - 1].playSound();

}
var currentRound = 1;
var endRoundTime = 600;
var currentRoundTime = 0;
var asteroids = [];
var roundFill = 255;
var customizationTime = false;
function startRound(){
	currentRoundTime = 0;
	currentRound++;
	roundFill = 255;
	
	endRoundTime += 300;	
}
function updateRound(){
	fill(255, 255, 255, roundFill);
	textAlign(CENTER);
	text("ROUND " + currentRound, width/2, height/3);
	if(currentRoundTime >= 90)
		roundFill-=5;
	updateAsteroids();
	if(currentRoundTime >= endRoundTime){
		if(asteroids.length == 0)
			customizationTime = true;
		return;
	}
	currentRoundTime++;
	if(currentRoundTime%(30-currentRound) == 0 && random(0, 100-currentRound) <= 25){
		var x = parseInt(random(0, 2))*width;
		var y = parseInt(random(0, 2))*height;
		if(random(0,1) >= .5)
			y = random(0, height);
		else x = random(0, width);
		
		var v = createVector(width/2 - x, height/2 - y);
		v.normalize();
		v.mult(random(1, currentRound));
		console.log(x, y);
		asteroids.push(new asteroid(x, y, 1, 1, PI/60, v, [60, 60,60]));
	}
}
function updateAsteroids(){
	for(var i = 0; i < asteroids.length; i++){
		var destroyAsteroid = false;
		asteroids[i].updatePosition();
		for(var j = 0; j < lasers.length; j++)
		{
			var destroyLaser = false;
			if(asteroids[i]!=null && asteroids[i].isInside(lasers[j].x, lasers[j].y)){
				//asteroids[i].spark(lasers[j].x, lasers[j].y, createVector(random(-1, 1), random(-1, 1)));
				asteroids[i].spark(lasers[j].x, lasers[j].y, createVector(asteroids[i].mainAsteroid.xPos - lasers[j].x, asteroids[i].mainAsteroid.yPos - lasers[j].y));
				destroyLaser = true;
				destroyAsteroid = true;
				score+=10;
			}
			if((lasers[j].x < 0 || lasers[j].x>width)&&(lasers[j].y<0 || lasers[j].y>=height))
				destroyLaser = true;
			if(destroyLaser)
				lasers.splice(j--, 1);
		}
		if(asteroids[i]!=null && asteroids[i].mainAsteroid.xPos >= width/2-50 && asteroids[i].mainAsteroid.xPos <= width/2+50 && asteroids[i].mainAsteroid.yPos >= height/2-50 && asteroids[i].mainAsteroid.yPos <= height/2+50 && asteroids[i].hits != 0){
				console.log(asteroids[i].mainAsteroid.xPos +", " + asteroids[i].mainAsteroid.yPos);
				asteroids[i].spark(-50, -50, createVector(0, 0));
				destroyAsteroid = true;
				dropHealth(currentRound);
		}
		if(asteroids[i]== null)
			i--;
		else 
			asteroids[i].draw();
	}
}
function endRound(){
	
	asteroids = [];
}
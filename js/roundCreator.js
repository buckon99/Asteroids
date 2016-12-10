var currentRound = 1;
var lastRound = 0;
var asteroids = [];
function startRound(){
	for(var i = 0; i < 5 + currentRound * 6; i++)
		var v = createVector(-1, 0);
		asteroids.push(new asteroid(width/2, height/2, 1, 1, PI/60, v, [60, 60,60]));
}
function roundDraw(){
	if(currentRound != lastRound)
	{
		lastRound = currentRound;
		startRound();
	}
	for(var i = 0; i < asteroids.length; i++){
		asteroids[i].updatePosition();
		asteroids[i].draw();
	}
}
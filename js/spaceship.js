var shipR;
var shipStart = true;
function updateShip(){
	if(shipStart)
	{
		shipStart = false;
		shipX = width/2;
		shipY = height/2;
		shipR = 0;
	}
	var vX = mouseX - width/2;
	var vY = height/2 - mouseY;
	var angle = PI/2-atan(vY/vX);
	if(mouseX < width/2)
		var angle = atan(-vY/vX) - PI / 2;
	console.log(angle+ PI/2);
	drawShip(width/2, height/2, angle);
}
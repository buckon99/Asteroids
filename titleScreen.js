var buttons = [];
var stars = [];
var font;
function setup(){
	createCanvas(1200, 720)
	setupTitleScreen();
}
function populateStarArray(count, minSize, maxSize, colors)
{
	for(var i = 0; i < count; i++){
		var obj = {};
		obj.size = random(minSize, maxSize);
		obj.x = random(random(random(0, random(100, random(200, 400)))), 1200);
		obj.y = random(random(random(0, random(100, random(200, 400)))), 720);
		stars.push(obj);
	}
}
function titleScreenBackground(){
	fill(255);
	for(var i = 0; i < stars.length; i++)
		ellipse(stars[i].x, stars[i].y, stars[i].size);
}
function setupTitleScreen(){
	font = loadFont('font.ttf');
	populateStarArray(100, 1, 4);
	for(var i = 0; i < 3; i++)
		buttons.push({scalerX: 1.5, scalerY: 1, hover: false});
	buttons[0].text="Play";
	buttons[1].text="Options";
	buttons[2].text="Credits";
}
function updateTitleScreen(){
	titleScreenBackground();
	if(mouseX >= 375 && mouseX <= 750){
		if(mouseY >= 300 && mouseY <= 400)
			buttons[0].hover = true;
		else buttons[0].hover = false;
		if(mouseY >= 420 && mouseY <= 520)
			buttons[1].hover = true;
		else buttons[1].hover = false;
		if(mouseY >= 540 && mouseY <= 640)
			buttons[2].hover = true;
		else buttons[2].hover = false;
		
	}
	for(var i = 0; i < 3; i++){
		if(buttons[i].hover == true && buttons[i].scalerY < 1.4){
			buttons[i].scalerY += .05;
			buttons[i].scalerX += .05;
		}else if(buttons[i].hover == false && buttons[i].scalerY > 1)
		{
			buttons[i].scalerY -= .05;
			buttons[i].scalerX -= .05;
		}
		textFont(font);
		textSize(32);
		drawButton(475- buttons[i].scalerY*100, 400 + i*120 - buttons[i].scalerY*100, buttons[i].scalerX, buttons[i].scalerY, buttons[i].hover, buttons[i].text);
	}
}
function draw(){
	background(0);
	updateTitleScreen();
}
function drawButton(x, y, s1, s2, hover, str){
	fill(0);
	push();
		translate(x, y);
		scale(s1, s2);
		scale(.5);
		translate(260, 100);
		noFill();
		stroke(0, 0, 200);
		strokeWeight(1);
		beginShape();
		vertex(252.225, -46.35);
		vertex(252.225, -86.5);
		vertex(217.425, -86.5);
		endShape();
		if(hover)
			fill(0, 0, 255, 50);
		else
			fill(0, 0, 255, 0);
		beginShape();
		vertex(-245.825, -22.2);
		vertex(-192.975, -74.65);
		vertex(239.975, -74.65);
		vertex(239.975, 21.6);
		vertex(194.075, 66.7);
		vertex(-245.825, 66.7);
		vertex(-245.825, -22.2);
		endShape();
		noFill();
		beginShape();
		vertex(-166.775, 87.15);
		vertex(197.375, 87.15);
		vertex(258.775, 26.15);
		vertex(258.775, -32.45);
		endShape();
		beginShape();
		vertex(156.825, -88.15);
		vertex(-199.525, -88.15);
		vertex(-259.775, -29.6);
		vertex(-259.775, 26.15);
		endShape();
		beginShape();
		vertex(-256.075, 42.9);
		vertex(-256.075, 84.7);
		vertex(-214.725, 84.7);
		endShape();
	pop();
	push();
		noFill();
		textAlign(CENTER);
		translate(x + 145, y+15);
		stroke(255);
		scale(s2);
		textSize(50);
		text(str, 50, 50);
	pop();
}
function mouseClicked(){
	if(mouseX >= 375 && mouseX <= 750){
		if(mouseY >= 300 && mouseY <= 400)
		{
			//begin game
		}
		if(mouseY >= 420 && mouseY <= 520)
		{
			//show audio options
			//show difficulty options
		}
		if(mouseY >= 540 && mouseY <= 640)
		{
			//show team member names & roles
		}
	}
}
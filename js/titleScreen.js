var buttons = [];
var stars = [];

var exitOffscreenX = 0;
var font;

var img;
function populateStarArray(count, minSize, maxSize, colors)
{
	for(var i = 0; i < count; i++){
		var obj = {};
		obj.size = random(minSize, maxSize);
		obj.x = random(random(random(0, random(100, random(200, 400)))), width);
		obj.y = random(random(random(0, random(100, random(200, 400)))), height);
		stars.push(obj);
	}
}
function sceneBackground(){
	background(0);
	fill(255);
	for(var i = 0; i < stars.length; i++)
		ellipse(stars[i].x, stars[i].y, stars[i].size);
}
function setupTitleScreen(){
	font = loadFont('font.ttf');
	populateStarArray(100, 1, 4);
	for(var i = 0; i < 3; i++)
		buttons.push({scalerX: 1.5, scalerY: 1, hover: false, clicked: false});
	buttons[0].text="Play";
	buttons[1].text="Options";
	buttons[2].text="Credits";
	//drawMainTitle();
}

function updateTitleScreen(){
	if(mouseX >= width/2 - 200 && mouseX <= width/2 + 200){
		if(mouseY >= 2*height/3-100 && mouseY <= 2*height/3)
			buttons[0].hover = true;
		else buttons[0].hover = false;
		if(mouseY >= 2*height/3 + 20 && mouseY <= 2*height/3 + 120)
			buttons[1].hover = true;
		else buttons[1].hover = false;
		if(mouseY >= 2*height/3 + 140 && mouseY <= 2*height/3 + 240)
			buttons[2].hover = true;
		else buttons[2].hover = false;
		
	}
	var clicked = false;
	if(buttons[0].clicked || buttons[1].clicked || buttons[2].clicked)
		clicked = true;
	if(clicked)
		exitOffscreenX += 40;
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
		if(exitOffscreenX >= i*200)
			drawButton(width/2 - 130 - buttons[i].scalerY*100 + exitOffscreenX - i*200, 2*height/3 + i*120 - buttons[i].scalerY*100, buttons[i].scalerX, buttons[i].scalerY, buttons[i].hover, buttons[i].text);
		else
			drawButton(width/2 - 130 - buttons[i].scalerY*100, 2*height/3 + i*120 - buttons[i].scalerY*100, buttons[i].scalerX, buttons[i].scalerY, buttons[i].hover, buttons[i].text);
	}
	if(width/2 - 530 - buttons[2].scalerY*100 + exitOffscreenX > width)
		mainMenu = false;
	drawMainTitle();
}

function drawButton(x, y, s1, s2, hover, str){
	fill(0);
	//var hoverSound = new Audio('Sound Assets/Menu Hover.wav');
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
		if(hover){
			fill(0, 0, 255, 50);
			//hoverSound.play();
		}
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

function titleScreenClick(){
	var menuClick = new Audio('Sound Assets/Menu Click2.wav');
	if(mouseX >= width/2 - 200 && mouseX <= width/2 + 200){
		if(mouseY >= 2*height/3-100 && mouseY <= 2*height/3){
			buttons[0].clicked = true;
			menuClick.play();
		}
		if(mouseY >= 2*height/3 + 20 && mouseY <= 2*height/3 + 120) {
			buttons[1].clicked = true;
			menuClick.play();
		}
		if(mouseY >= 2*height/3 + 140 && mouseY <= 2*height/3 + 240){
			buttons[2].clicked = true;
			menuClick.play();
		}
	}
}

function drawMainTitle() {
	textSize(230);
	textAlign(CENTER);
	textFont("font");
	fill(0, 112, 112);
	text("Asteroids", width/2, height/3);
	textSize(12);
	loadPixels();
	img.loadPixels();
	for(var y = 0; y < height/3; y++) {
		for (var x = 0; x < width/2; x++) {
			if(get(x, y)[0] === 0 && get(x, y)[1] === 112 && get(x, y)[2] === 112) 
				set(img.get(x, y));
		}
	}
	updatePixels();
}

function preload() {
	img = loadImage("Image Assets/Craterscape1.jpg");
}
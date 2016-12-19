var customizations = [];
var img;
var nextWaveHov = false;
var boughtButton;
function windowInitiate(){
	generateButton();
	img = loadImage("lib/button.png");
	var customization1 = {
		name: "Fortified Health ('A' to buy)",
		description: "Makes it 1.5x harder to lose health",
		bought: false,
		cost: 350,
	}
	var customization2 = {
		name: "Upgraded Lasers ('B' to buy)",
		description: "Lasers do 2x as much damage",
		bought: false,
		cost: 600
	}
	var customization3 = {
		name: "Blue Spaceship ('C' to buy)",
		description: "Style your ship with a blue coating",
		bought: false,
		cost: 200
	}
	var customization4 = {
		name: "",
		description: "PRESS SPACE TO START NEXT ROUND",
		bought: false,
		cost: 200
	}
	nextWaveHov = false;
	customizations.push(customization1);
	customizations.push(customization2);
	customizations.push(customization3);
	customizations.push(customization4);
}
function customizationWindow(){
	push();
	stroke(0, 0, 200);
	translate(width/15, height/2- height/16);
	scale(2,2);
	drawCustomPanel(0, 0, 1, 1);
	noFill();
	stroke(255);
	strokeWeight(1);
	textSize(24);
	text("Customizations", 120, -100);
	push();
	scale(.5);
	textAlign(LEFT);
	strokeWeight(0);
	fill(255);
	text("Balance: " + balance, -50, -130);
	for(var i = 0; i < customizations.length; i++){
		var startX = -50;
		var startY = -100 + i*80;
		noFill();
		strokeWeight(1);
		textSize(20);
		if(customizations[i].bought)
			stroke(0, 255, 0);
		else stroke(255);
		text(customizations[i].name, startX, startY);
		if(customizations[i].bought)
			fill(0, 255, 0);
		else fill(255);
		strokeWeight(0);
		textSize(14);
		text(customizations[i].description, startX, startY+30);
		push();
			scale(.3333);
			textSize(40);
			textAlign(CENTER);
			//if(!customizations[i].bought)
				//customizations[i].btn = img;
			//else
				customizations[i].btn = boughtButton;	
			image(boughtButton, startX + 1000, startY*3-30);
			text(customizations[i].cost + "C", startX + 1200, startY*3+25);
		pop();
	}
	pop();
	pop();
	push();
		scale(.5);
		drawButton(width/3, 10*height/6, 1.5, 1, nextWaveHov, "Next Wave");
	pop();
	customizationHover();
}
function customizationHover(){
	if(mouseX >= width/6 && mouseX <= width/5 + 100 && mouseY >= 5*height/6 && mouseY <= 13*height/14){
		nextWaveHov = true;
	}else nextWaveHov = false;
}
function customizationClick(){
	if(mouseX >= width/5 && mouseX <= width/5 + 100 && mouseY >= 6*height/7 && mouseY <= 13*height/14){
		startRound();
		customizationTime = false;
	}
		
}
function generateButton(){
	boughtButton = loadImage("lib/button.png");
	boughtButton.loadPixels();
	for(var x = 0; x < boughtButton.width; x++){
		for(var y = 0; y < boughtButton.height; y++){
			var color = boughtButton.get(x, y);
			console.log("COLOR: " + color);
			var br = brightness(color);
			console.log(br);
			boughtButton.set(x, y, br);
		}
	}
	boughtButton.updatePixels();
}
function keyPressed() {
	if (keyCode === 65)
		if(balance >= customizations[0].cost &&  !customizations[0].bought)
		{
			balance -= customizations[0].cost;
			customizations[0].bought = true;
		}
	if (keyCode === 66)
		if(balance >= customizations[1].cost&&  !customizations[1].bought)
		{
			balance -= customizations[1].cost;
			customizations[1].bought = true;
		}
	if (keyCode === 67)
		if(balance >= customizations[2].cost&&  !customizations[2].bought)
		{
			balance -= customizations[2].cost;
			customizations[2].bought = true;
		}
	if (keyCode ===32)
	{
		startRound();
		customizationTime = false;
	}
}
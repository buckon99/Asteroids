var customizations = [];
function Initiate(){
	var customization1 = {
		name: "Fortified Health",
		description: "Makes it 1.5x harder to lose health",
		bought: false,
		cost: 350
	}
}
function customizationWindow(){
	push();
	stroke(0, 0, 200);
	translate(width/15, height/2- height/16);
	scale(3.8,4);
	drawCustomPanel(0, 0, 1, 1);
	strokeWeight(.1);
	noFill();
	stroke(255);
	text("Customizations", 50, -100);
	
	pop();
}
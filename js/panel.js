function drawPanel(x, y){
	push();
		translate(x, y);
		translate(550, 225);
		scale(3, 2.3);
		noStroke();
		fill(0, 0, 255, 40);
		stroke(0, 0, 200);
		strokeWeight(3);
		beginShape();
		vertex(-337.25, 52.9);
		vertex(-63.1, 52.9);
		vertex(-34.45, 26);
		vertex(-34.45, -241.75);
		vertex(-307.4, -241.75);
		vertex(-337.25, -211.3);
		vertex(-337.25, 52.9);
		endShape();
	pop();
}
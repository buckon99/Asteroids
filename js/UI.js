var score = 0;
function updateUI(){
	
	textAlign(RIGHT);
	textSize(60);
	text(score, width-50, 50);
	push();
	translate(170, height-100);
	drawHealthBar();
	pop();
	gameOverScreen();
}
function addScore(x){
	score+=x;
}
function gameOverScreen(){
	drawPanel(width/2, height/2);
	textAlign(CENTER);
	textSize(80);
	text("GAME OVER", width/2, height/3);
	textSize(50);
	text("Score: " + score, width/2, 2*height/3)
	//text("GAME OVER", width/2, 2*height/3);
}
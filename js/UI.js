var score = 0;
var gameOver = false;
var gameOverBtn = null;
var resetGame = false;
function updateUI(){
	
	textAlign(RIGHT);
	textSize(60);
	text(score, width-50, 50);
	push();
	translate(170, height-100);
	drawHealthBar();
	pop();
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
	text("Score: " + score, width/2, 2*height/3-100);
	if(gameOverBtn == null);
		gameOverBtn = {scalerX: 1.5, scalerY: 1, hover: false};
	if(mouseX >= width/2-175 && mouseX <= width/2+200 && mouseY>=2*height/3 && mouseY <= 2*height/3+70)
		gameOverBtn.hover = true;
	drawButton(width/2-175, 2*height/3, gameOverBtn.scalerX, gameOverBtn.scalerY, gameOverBtn.hover, "Play Again");
	//text("GAME OVER", width/2, 2*height/3);
}
function gameOverClicked(){
	if(mouseX >= width/2-175 && mouseX <= width/2+200 && mouseY>=2*height/3 && mouseY <= 2*height/3+70)
		resetGame = true;
}
var score = 0;
function updateUI(){
	textAlign(RIGHT);
	textSize(60);
	text(score, width-60, 50);
	translate(170, height-100);
	drawHealthBar();
}
function addScore(x){
	score+=x;
}
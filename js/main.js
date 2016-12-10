var mainMenu = true;
var resize = function() {
	console.log(document.documentElement.clientWidth);
	width = displayWidth;
	height = document.documentElement.clientHeight;
};
var canvas;
function setup(){
	cursor("normal.cur");
	canvas = createCanvas(displayWidth, displayHeight);
	
	resize();
	setupTitleScreen();
}
window.addEventListener("resize", resize);
function draw(){
	sceneBackground();
	if(mainMenu)
		updateTitleScreen();
	else if(gameOver){
		gameOverScreen();
	}
	else
	{
		roundDraw();
		drawLaser();
		updateShip();
		updateUI();
	}
	
	if(resetGame){
		newGame();
	}
}
function newGame(){
	resetGame = false;
	gameOver = false;
	health = 16;
	score = 0;
}
function mouseClicked(){
	if(mainMenu)
		titleScreenClick();
	else if (gameOver)
		gameOverClicked();
	else{
		laserClick();
	}
	
}
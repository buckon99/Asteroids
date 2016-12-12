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
	laserSetup();
	resize();
	setupTitleScreen();
}
window.addEventListener("resize", resize);
function draw(){
	console.log("Should be calling 1");
	sceneBackground();
	if(mainMenu)
		updateTitleScreen();
	else if(gameOver){
		console.log("is this calling");
		gameOverScreen();
	}
	else
	{
		console.log("Should be calling");
		laserDraw();
		updateShip();
		updateRound();
		if(customizationTime)
			customizationWindow();
		else
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
	currentRound = 1;
	endRoundTime = 600;
	currentRoundTime = 0;
	asteroids = [];
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
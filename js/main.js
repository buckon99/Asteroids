var mainMenu = true;
var storyOpen = false;
var resize = function() {
	console.log(document.documentElement.clientWidth);
	width = displayWidth;
	height = document.documentElement.clientHeight;
};
var canvas;
function setup(){
	windowInitiate();
	cursor("normal.cur");
	canvas = createCanvas(displayWidth, displayHeight);
	laserSetup();
	resize();
	setupTitleScreen();
	bossSetup();
}
window.addEventListener("resize", resize);
function draw(){
	sceneBackground();

	if(mainMenu)
		updateTitleScreen();
	else if(gameOver){
		gameOverScreen();
	}
	else if(storyOpen){
		storyScreen();
	}
	else
	{
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
	balance = 0;
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
	else if (gameOver || storyOpen)
		gameOverClicked();
	else if(customizationTime)
		customizationClick();
	else{
		if(customizations[1].bought)
		laserClick(2);
		else laserClick(1);
	}
	
}
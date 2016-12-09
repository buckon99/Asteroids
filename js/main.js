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
	else
	{
		updateShip();
		updateUI();
	}
}
function mouseClicked(){
	if(mainMenu)
		titleScreenClick();
	else{
		dropHealth(1);
	}
	
}
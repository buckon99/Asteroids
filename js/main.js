var mainMenu = true;
function setup(){
	cursor("normal.cur");
	createCanvas(1200, 720)
	setupTitleScreen();
}
function draw(){
	sceneBackground();
	if(mainMenu)
		updateTitleScreen();
}
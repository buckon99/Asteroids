// This is just code so you guys can see how to use these files, and see what they sound like at the same time
// fell free to use my code, delete my code, and whatever else you would want to do with it
// not sure if we need to give credit for the website, but just in case here it is: www.freesound.org
var laser1;
var laser2;
var laser3;
var laser4;
var laser5;
var mouseClick;
var mouseClick2;
var menuHover;
var explosion1;
var explosion2;
var explosion3;
var explosion4;

function setup() {
    laser1 = new Audio('laser 1.wav');
    laser2 = new Audio('laser 2.wav');
    laser3 = new Audio('laser 3.wav');
    laser4 = new Audio('laser 4.wav');
    laser5 = new Audio('laser 5.wav');
    mouseClick1 = new Audio('Menu Click.wav');
    mouseClick2 = new Audio('Menu Click2.wav');
    menuHover = new Audio('Menu Hover.wav');
    explosion1 = new Audio('explosion1.wav');
    explosion2 = new Audio('explosion2.wav');
    explosion3 = new Audio('explosion3.wav');
    explosion4 = new Audio('explosion4.wav');
}

function laser1Pressed() {
    laser1.play();
}
function laser2Pressed() {
    laser2.play();
}
function laser3Pressed() {
    laser3.play();
}
function laser4Pressed() {
    laser4.play();
}
function laser5Pressed() {
    laser5.play();
}
function menuClickPressed() {
    mouseClick1.play();
}
function menuClick2Pressed() {
    mouseClick2.play();
}
function menuHoverPressed() {
    menuHover.play();
}
function explosion1Pressed() {
    explosion1.play();
}
function explosion2Pressed() {
    explosion2.play();
}
function explosion3Pressed() {
    explosion3.play();
}
function explosion4Pressed() {
    explosion4.play();
}
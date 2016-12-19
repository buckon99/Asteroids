var Dlocx;
var Dlocy;
var dirX, dirY;
var neckR, wingR, time, FlegR;

var neckDown = true;
var wingDown = false;
var animate = true;
var legDown = false;

//normal set up
function bossSetup()
{
   neckR = 0;
   wingR =0;
   Dlocx = width*0.9;
   Dlocy = height/2;
   dirX = -1;
   dirY = 0;
   time = 0.5;
   FlegR = 0;
}

//normal draw
function drawBoss()
{
   drawEnemy();
   moveEnemy();
}
function checkBossCollission(x, y){
	if(Dlocx <= width/2 + 30)
		gameOver = true;
	if(x >= Dlocx -50 && x <=Dlocx + 50 && y >= Dlocy -50 && y <=Dlocy+ 50)
		return true;
	
}
function drawEnemy()
{
   noStroke();

   push();

      //move the entire alien
      translate(Dlocx, Dlocy);
      scale(2); //scale the entire alien

      // draw ship
      //fill(204, 65, 79);
      for (i = 0; i < 100; i++) {
        fill(0+2*i, 0+2*i, 0+2*i);
        ellipse(0,0,100-i);
      }
      triangle(0,0, -50, -50, 50, -50);
      for (i = 0; i < 25; i++) {
        fill(255-10*i, 0, 0);
        strokeWeight(1);
        stroke(0);
        triangle(0,-2*i, -50+2*i, -50-2*i, 50-2*i, -50-2*i);
      }

      //draw neck and head with possible animation transforms
      push();
         translate(0, 0); //move into pivot position
         rotate(neckR);  //rotate by neckR parameter
         fill(0);
         triangle(0,0, -20,50, 20,50);
      pop();

      //draw wing with possible animation transforms
      push();
         translate(0, 0); //move into pivot position
         rotate(wingR); //animtion parameter to control wing flap
         fill(0)
         triangle(0,0, -20,50, 20,50);
      pop();


      //TODO - this is where you will add the code to animation the legs - follow
      //the examples for the wings and neck


   pop();
}

//function to update all animation parameters - very simple scripted animation
function moveEnemy()
{
   //update the ducks global location
   Dlocx = Dlocx + dirX*time;
   Dlocy = Dlocy + dirY*time;

  //find out how much the neck is rotated to decide which way to rotate
  //these constrain how much the neck moves up and down
   if (neckR < -2)
   {
      neckDown = false;
   }
   if (neckR > 2)
   {
      neckDown = true;
   }

   // depending on which way we need to rotate, do so
   if (neckDown === true)
   {
      neckR -= 0.03;
   }
   else
   {
      neckR += 0.03;
   }

   //find out how much the wing is rotated to decide which way to rotate
   //these constrain how much the wing moves up and down
   if (wingR < -2)
   {
      wingDown = false;
   }
   if (wingR > 2)
   {
      wingDown = true;
   }

   // depending on which way we need to rotate, do so
   if (wingDown === true)
   {
      wingR -= 0.03;
   }
   else
   {
      wingR += 0.03;
   }
}

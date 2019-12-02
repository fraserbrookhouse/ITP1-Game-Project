/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isFalling;
var isPlummeting;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
	isLeft = false
	isRight = false
	isFalling = false
	isPlummeting = false
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon


	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
		//Body
		strokeWeight(0.5);
		stroke(0);
		fill(126, 125, 243); //purple
		rect(gameChar_x - 11.5, gameChar_y - 40, 20, 30, 3);
		//Head
		strokeWeight(0);
		stroke(0);
		fill(209, 136, 119); //skin colour
		ellipse(gameChar_x - 2, gameChar_y - 58	, 35);
		//Left foot
		fill(0); //black
		rect(gameChar_x - 15, gameChar_y - 15, 10, 8, 1);
		//Left eye
		fill(255); //white
		ellipse(gameChar_x - 8, gameChar_y - 50, 10, 5); //eyeball
		fill(0); //black
		ellipse(gameChar_x - 8, gameChar_y - 50, 8, 3); //iris
		fill(0, 205, 0); //green
		ellipse(gameChar_x - 8, gameChar_y - 50, 2, 2); //pupil
		//Left arm
		strokeWeight(0.5);
		stroke(0);
		fill(209, 136, 119); //skin colour
		ellipse(gameChar_x -2, gameChar_y - 12.5, 5, 5); //hand
		fill(126, 125, 243); //purple
		rect(gameChar_x - 4, gameChar_y - 35, 4, 20, 5); //arm
	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
		//Body
		strokeWeight(0.5);
		stroke(0);
		fill(126, 125, 243); //purple
		rect(gameChar_x - 11.5, gameChar_y - 40, 20, 30, 3);
		//Head
		strokeWeight(0);
		stroke(0);
		fill(209, 136, 119); //skin colour
		ellipse(gameChar_x, gameChar_y - 58	, 35);
		//Right foot
		fill(0); //black
		rect(gameChar_x + 3, gameChar_y - 15, 10, 8, 1);
		//Right eye
		fill(255); //white
		ellipse(gameChar_x + 7, gameChar_y - 50, 10, 5); //eyeball
		fill(0); //black
		ellipse(gameChar_x + 7, gameChar_y - 50, 8, 3); //iris
		fill(0, 205, 0); //green
		ellipse(gameChar_x + 7, gameChar_y - 50, 2, 2); //pupil
		//Right arm
		strokeWeight(0.5);
		stroke(0);
		fill(209, 136, 119); //skin colour
		ellipse(gameChar_x, gameChar_y - 12.5, 5, 5); //hand
		fill(126, 125, 243); //purple
		rect(gameChar_x - 2, gameChar_y - 35, 4, 20, 5); //arm
	}
	else if(isLeft)
	{
		// add your walking left code
		//Body
		strokeWeight(0.5);
		stroke(0);
		fill(126, 125, 243); //purple
		rect(gameChar_x - 8.5, gameChar_y - 35, 20, 30, 3);
		//Head
		strokeWeight(0);
		stroke(0);
		fill(209, 136, 119); //skin colour
		ellipse(gameChar_x + 1, gameChar_y - 50	, 35);
		//Left foot
		fill(0); //black
		rect(gameChar_x - 3, gameChar_y - 5, 10, 8, 1);
		//Left eye
		fill(255); //white
		ellipse(gameChar_x - 7, gameChar_y - 50, 10, 5); //eyeball
		fill(0); //black
		ellipse(gameChar_x - 7, gameChar_y - 50, 8, 3); //iris
		fill(0, 205, 0); //green
		ellipse(gameChar_x - 7, gameChar_y - 50, 2, 2); //pupil
		//Left arm
		strokeWeight(0.5);
		stroke(0);
		fill(209, 136, 119); //skin colour
		ellipse(gameChar_x + 2, gameChar_y - 9.5, 5, 5); //hand
		fill(126, 125, 243); //purple
		rect(gameChar_x, gameChar_y - 32, 4, 20, 5); //arm
	}
	else if(isRight)
	{
		// add your walking right code
		//Body
		strokeWeight(0.5);
		stroke(0);
		fill(126, 125, 243); //purple
		rect(gameChar_x - 8.5, gameChar_y - 35, 20, 30, 3);
		//Head
		strokeWeight(0);
		stroke(0);
		fill(209, 136, 119); //skin colour
		ellipse(gameChar_x + 1, gameChar_y - 50	, 35);
		//Right foot
		fill(0); //black
		rect(gameChar_x - 3, gameChar_y - 5, 10, 8, 1);
		//Right eye
		fill(255); //white
		ellipse(gameChar_x + 7, gameChar_y - 50, 10, 5); //eyeball
		fill(0); //black
		ellipse(gameChar_x + 7, gameChar_y - 50, 8, 3); //iris
		fill(0, 205, 0); //green
		ellipse(gameChar_x + 7, gameChar_y - 50, 2, 2); //pupil
		//Right arm
		strokeWeight(0.5);
		stroke(0);
		fill(209, 136, 119); //skin colour
		ellipse(gameChar_x + 2, gameChar_y - 9.5, 5, 5); //hand
		fill(126, 125, 243); //purple
		rect(gameChar_x, gameChar_y - 32, 4, 20, 5); //arm
	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
		//Body
		strokeWeight(0.5);
		stroke(0);
		fill(126, 125, 243); //purple
		rect(gameChar_x - 12.5, gameChar_y - 40, 25, 30, 3);
		//Head
		strokeWeight(0);
		stroke(0);
		fill(209, 136, 119); //skin colour
		ellipse(gameChar_x, gameChar_y - 58	, 35);
		//Left foot
		fill(0); //black
		rect(gameChar_x - 11, gameChar_y - 15, 10, 8, 1);
		//Right foot
		fill(0); //black
		rect(gameChar_x + 1, gameChar_y - 15, 10, 8, 1);
		//Left eye
		fill(255); //white
		ellipse(gameChar_x - 7, gameChar_y - 50, 10, 5); //eyeball
		fill(0); //black
		ellipse(gameChar_x - 7, gameChar_y - 50, 8, 3); //iris
		fill(0, 205, 0) //green
		ellipse(gameChar_x - 7, gameChar_y - 50, 2, 2); //pupil
		//Right eye
		fill(255); //white
		ellipse(gameChar_x + 7, gameChar_y - 50, 10, 5); //eyeball
		fill(0); //black
		ellipse(gameChar_x + 7, gameChar_y - 50, 8, 3); //iris
		fill(0, 205, 0) //green
		ellipse(gameChar_x + 7, gameChar_y - 50, 2, 2); //pupil
		//Left arm
		strokeWeight(0.5);
		stroke(0);
		fill(126, 125, 243); //purple
		rect(gameChar_x - 17.5, gameChar_y - 37, 4, 15, 20); //arm
		fill(209, 136, 119); //skin colour
		ellipse(gameChar_x - 15.5, gameChar_y - 22, 5, 5); //hand
		//Right arm
		strokeWeight(0.5);
		stroke(0);
		fill(126, 125, 243); //purple
		rect(gameChar_x + 13.5, gameChar_y - 37, 4, 15, 20); //arm
		fill(209, 136, 119); //skin colour
		ellipse(gameChar_x + 15.5, gameChar_y - 22, 5, 5); //hand
	}
	else
	{
		// add your standing front facing code
		//Body
		strokeWeight(0.5);
		stroke(0);
		fill(126, 125, 243); //purple
		rect(gameChar_x - 12.5, gameChar_y - 35, 25, 30, 3);
		//Head
		strokeWeight(0);
		stroke(0);
		fill(209, 136, 119); //skin colour
		ellipse(gameChar_x, gameChar_y - 50	, 35);
		//Left foot
		fill(0); //black
		rect(gameChar_x - 11, gameChar_y - 5, 10, 8, 1);
		//Right foot
		fill(0); //black
		rect(gameChar_x + 1, gameChar_y - 5, 10, 8, 1);
		//Left eye
		fill(255); //white
		ellipse(gameChar_x - 7, gameChar_y - 50, 10, 5); //eyeball
		fill(0); //black
		ellipse(gameChar_x - 7, gameChar_y - 50, 8, 3); //iris
		fill(0, 205, 0); //green
		ellipse(gameChar_x - 7, gameChar_y - 50, 2, 2); //pupil
		//Right eye
		fill(255); //white
		ellipse(gameChar_x + 7, gameChar_y - 50, 10, 5); //eyeball
		fill(0); //black
		ellipse(gameChar_x + 7, gameChar_y - 50, 8, 3); //iris
		fill(0, 205, 0); //green
		ellipse(gameChar_x + 7, gameChar_y - 50, 2, 2); //pupil
		//Left arm
		strokeWeight(0.5);
		stroke(0);
		fill(209, 136, 119); //skin colour
		ellipse(gameChar_x - 15.5, gameChar_y - 8, 5, 5); //hand
		fill(126, 125, 243); //purple
		rect(gameChar_x - 17.5, gameChar_y - 32, 4, 22, 20); //arm
		//Right arm
		strokeWeight(0.5);
		stroke(0);
		fill(209, 136, 119); //skin colour
		ellipse(gameChar_x + 15.5, gameChar_y - 8, 5, 5); //hand
		fill(126, 125, 243); //purple
		rect(gameChar_x + 13.5, gameChar_y - 32, 4, 22, 20); //arm
	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	
	//moves character left
	if(isLeft == true)
	{
		gameChar_x -= 1;
	}
	//moves character right
	if(isRight == true)
	{
		gameChar_x +=1;
	}

	if(gameChar_y < floorPos_y)
	{
		isFalling = true;
		gameChar_y += 5 ;
	}
	
	else
	{
		isFalling = false;
	}
}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//left arrow pressed
	if(keyCode == 37)
	{
		console.log("left arrow pressed");
		isLeft = true;
	}
	//right arrow pressed
	else if(keyCode == 39)
	{
		console.log("right arrow pressed");
		isRight = true;
	}
	//spacebar pressed
	else if (keyCode == 32)
	{
		console.log("spacebarispressed")
		if(gameChar_y == floorPos_y)
		gameChar_y -= 100;
	}
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	//left arrow released
	if(keyCode == 37)
	{
		console.log("left arrow released");
		isLeft = false;
	}
	//right arrow released
	else if(keyCode == 39)
	{
		console.log("right arrow released");
		isRight = false;
	}
	//spacebar released
	else if (keyCode == 32)
	{
		console.log("spacebarispressed")
	}
}

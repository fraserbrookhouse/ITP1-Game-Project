/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds;
var mountains;
var trees_x;
var canyons;
var collectables;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.
	trees_x = [100, 300, 500, 1000];
	clouds = [
		{pos_x: 100, pos_y: 200},
		{pos_x: 600, pos_y: 100},
		{pos_x: 800, pos_y: 200},
		{pos_x: 1100, pos_y: 200},
		{pos_x: 1600, pos_y: 100},
		{pos_x: 1800, pos_y: 200}
	]
	
	canyons = [
		{pos_x: 160, width: 150},
		{pos_x: 800, width: 180},
		{pos_x: 1300, width: 120},
		{pos_x: 1600, width: 150},
		{pos_x: 1800, width: 180},
		{pos_x: 2300, width: 120}
	]

	mountains = [
		{pos_x: 50, size: 60},
		{pos_x: 500, size: 75},
		{pos_x: 1100, size: 65},
		{pos_x: 1050, size: 60},
		{pos_x: 1500, size: 75},
		{pos_x: 2100, size: 65}
	]

	collectables = [
		{pos_x: 50, pos_y: floorPos_y, size: 50},
		{pos_x: 450, pos_y: floorPos_y - 75, size: 70},
		{pos_x: 700, pos_y: floorPos_y, size: 50},
		{pos_x: 1400, pos_y: floorPos_y - 75, size: 70},
		{pos_x: 1050, pos_y: floorPos_y, size: 50},
		{pos_x: 1450, pos_y: floorPos_y - 75, size: 70},
		{pos_x: 2000, pos_y: floorPos_y, size: 50},
		{pos_x: 2400, pos_y: floorPos_y - 75, size: 70},
	]
}

function draw()
{
	// fill the sky blue
	background(100, 155, 255);
	
	// draw some green ground
	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height/4); 
	
	//start translate to enable background objects to move.
	push();
	translate(scrollPos, 0);

	// Draw clouds.
	for(var i = 0; i < clouds.length; i++)
	{
		fill(255, 255, 255);
		ellipse(clouds[i].pos_x, clouds[i].pos_y, 80);
		ellipse(clouds[i].pos_x - 40, clouds[i].pos_y, 60);
		ellipse(clouds[i].pos_x + 40, clouds[i].pos_y, 60);
	}
	// Draw mountains.
	for(var i = 0; i < mountains.length; i++)
	{
		fill(150, 150, 150);
		triangle(mountains[i].pos_x + 600 * (mountains[i].size/50), floorPos_y, mountains[i].pos_x  + 400 * (mountains[i].size/50), floorPos_y, mountains[i].pos_x + 500 * (mountains[i].size/50), floorPos_y - 332 * (mountains[i].size/50));
		triangle(mountains[i].pos_x + 550 * (mountains[i].size/50), floorPos_y, mountains[i].pos_x + 650 * (mountains[i].size/50), floorPos_y, mountains[i].pos_x + 600 * (mountains[i].size/50), floorPos_y - 232 * (mountains[i].size/50));
		triangle(mountains[i].pos_x + 350 * (mountains[i].size/50), floorPos_y, mountains[i].pos_x + 450 * (mountains[i].size/50), floorPos_y, mountains[i].pos_x + 400 * (mountains[i].size/50), floorPos_y - 232 * (mountains[i].size/50));
		//snow cap
		fill(255, 255, 255);
		triangle(mountains[i].pos_x + 500 * (mountains[i].size/50), floorPos_y - 332 * (mountains[i].size/50), mountains[i].pos_x + 515 * (mountains[i].size/50), floorPos_y - 282 * (mountains[i].size/50), mountains[i].pos_x + 485 * (mountains[i].size/50), floorPos_y - 282 * (mountains[i].size/50));
	}
	// Draw trees.
	for(var i = 0; i < trees_x.length; i++)
	{
		//Trunk
		fill(120, 100, 40);
		rect(trees_x[i], floorPos_y - 150, 60, 150);
		//Branches
		fill(0, 155, 0);
		triangle(trees_x[i] - 50, floorPos_y - 100, 
			trees_x[i] + 30, floorPos_y - 200, 
			trees_x[i] + 110, floorPos_y - 100);
		triangle(trees_x[i] - 50, floorPos_y - 150, 
			trees_x[i] +30, floorPos_y - 250, 
			trees_x[i] + 110, floorPos_y- 150);
	}
	// Draw canyons
	for(var i = 0; i < canyons.length; i++)
	{
		beginShape();
		fill(139, 69, 19);
		vertex(canyons[i].pos_x, floorPos_y); //150, 432
		vertex(canyons[i].pos_x + 5, floorPos_y + 30);
		vertex(canyons[i].pos_x + 15, floorPos_y + 60);
		vertex(canyons[i].pos_x + 25, floorPos_y + 90);
		vertex(canyons[i].pos_x + 35, floorPos_y + 144);
		vertex(canyons[i].pos_x + 45 * (canyons[i].width/100), floorPos_y + 144);
		vertex(canyons[i].pos_x + 55 * (canyons[i].width/100), floorPos_y + 90);
		vertex(canyons[i].pos_x + 65 * (canyons[i].width/100), floorPos_y + 60);
		vertex(canyons[i].pos_x + 75 * (canyons[i].width/100), floorPos_y + 30);
		vertex(canyons[i].pos_x + 85 * (canyons[i].width/100), floorPos_y);
		endShape();
	}
	// Draw collectable items
	for(var i = 0; i < collectables.length; i++)
	{
	
		fill(255,215,0);
		ellipse(collectables[i].pos_x, collectables[i].pos_y, collectables[i].size * 0.2);
	
	}
	// stop translate so that character does not have x_pos translated, will make it seem to be moving in relation to the background.
	pop();
	// Draw the game character - this must be last
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
	//////// Game character logic ///////
	// Logic to move

	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}

	}
}

function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}

}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}
}

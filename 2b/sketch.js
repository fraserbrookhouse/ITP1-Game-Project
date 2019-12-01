/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = floorPos_y - 150;

	canyon = {x_pos: 0, width: 100}

	mountain = {x_pos: -100, size: 50}

	collectable = {x_pos: 100, y_pos: 100, size: 50}

	cloud = {x_pos: 200, size: 60}

}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0); //green
	rect(0, floorPos_y, height, width - floorPos_y); //Draw some green ground

	//Draw cloud
	fill(255, 255, 255);
	ellipse(cloud.x_pos, 150, 80 * (cloud.size/50));
	ellipse(cloud.x_pos - 40 * (cloud.size/50), 150, 60 * (cloud.size/50));
	ellipse(cloud.x_pos + 40 * (cloud.size/50), 150, 60 * (cloud.size/50));

	//Draw mountain
	fill(150, 150, 150);
	triangle(mountain.x_pos + 600 * (mountain.size/50), floorPos_y, mountain.x_pos  + 400 * (mountain.size/50), floorPos_y, mountain.x_pos + 500 * (mountain.size/50), floorPos_y - 332 * (mountain.size/50));
	triangle(mountain.x_pos + 550 * (mountain.size/50), floorPos_y, mountain.x_pos + 650 * (mountain.size/50), floorPos_y, mountain.x_pos + 600 * (mountain.size/50), floorPos_y - 232 * (mountain.size/50));
	triangle(mountain.x_pos + 350 * (mountain.size/50), floorPos_y, mountain.x_pos + 450 * (mountain.size/50), floorPos_y, mountain.x_pos + 400 * (mountain.size/50), floorPos_y - 232 * (mountain.size/50));
	//snow cap
	fill(255, 255, 255);
	triangle(mountain.x_pos + 500 * (mountain.size/50), floorPos_y - 332 * (mountain.size/50), mountain.x_pos + 515 * (mountain.size/50), floorPos_y - 282 * (mountain.size/50), mountain.x_pos + 485 * (mountain.size/50), floorPos_y - 282 * (mountain.size/50));

	//Draw tree
	//Trunk
	fill(120, 100, 40);
	rect(treePos_x, treePos_y, 60, 150);
	//Branches
	fill(0, 155, 0);
	triangle(treePos_x - 50, treePos_y + 50, treePos_x + 30, treePos_y - 50, treePos_x + 110, treePos_y + 50);
	triangle(treePos_x - 50, treePos_y, treePos_x +30, treePos_y - 100, treePos_x + 110, treePos_y);

	//Draw canyon
	beginShape();
	fill(139, 69, 19);
	vertex(canyon.x_pos, floorPos_y); //150, 432
	vertex(canyon.x_pos + 5, floorPos_y + 30);
	vertex(canyon.x_pos + 15, floorPos_y + 60);
	vertex(canyon.x_pos + 25, floorPos_y + 90);
	vertex(canyon.x_pos + 35, floorPos_y + 144);
	vertex(canyon.x_pos + 45 * (canyon.width/100), floorPos_y + 144);
	vertex(canyon.x_pos + 55 * (canyon.width/100), floorPos_y + 90);
	vertex(canyon.x_pos + 65 * (canyon.width/100), floorPos_y + 60);
	vertex(canyon.x_pos + 75 * (canyon.width/100), floorPos_y + 30);
	vertex(canyon.x_pos + 85 * (canyon.width/100), floorPos_y);
	endShape();

	//Draw collectable - coin
	fill(255,215,0);
	ellipse(collectable.x_pos, collectable.y_pos + 332, collectable.size * 0.2)

	//Draw game character
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

function mousePressed()
{
	gameChar_x = mouseX;
	gameChar_y = mouseY

}

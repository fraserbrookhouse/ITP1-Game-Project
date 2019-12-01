/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. If you're character takes more than 5 lines
of code to draw then you've probably over done it.

** Only submit your sketch.js **

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ...
	
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
	
	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...
	
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

	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...

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

	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code here ...

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

	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...

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

	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...

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


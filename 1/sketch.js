function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here

	fill(255, 255, 255);
	ellipse(200, 150,80, 80);
	ellipse(160, 150, 60, 60);
	ellipse(240, 150, 60, 60);

	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	//... add your code here

	fill(150, 150, 150);
	triangle(700, 432, 500, 432, 600, 100);
	triangle(650, 432, 750, 432, 700, 200);
	triangle(450, 432, 550, 432, 500, 200);
	
	//snow cap
	fill(255, 255, 255);
	triangle(600, 100, 615, 150, 585, 150);

	noStroke();
	fill(255);
	text("mountain", 500, 256);

	//3. a tree
	//... add your code here

	fill(120, 100, 40);
	rect(900, 282, 60, 150);

	//branches
	
	fill(0, 155, 0);
	triangle(850, 332, 930, 232, 1010, 332);
	triangle(850, 282, 930, 182, 1010, 282);

	noStroke();
	fill(255);
	text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here
	
	beginShape();
	
	fill(139, 69, 19);
	vertex(150, 432);
	vertex(155, 462);
	vertex(165, 492);
	vertex(175, 522);
	vertex(185, 576);
	vertex(195, 576);
	vertex(205, 522);
	vertex(215, 492);
	vertex(225, 462);
	vertex(235, 432);

	endShape();
	

	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here
	//grapes

	fill(70, 0, 130);
	ellipse(350, 410, 10, 10);
	ellipse(360, 410, 10, 10);
	ellipse(370, 410, 10, 10);
	ellipse(355, 420, 10, 10);
	ellipse(365, 420, 10, 10);
	ellipse(360, 430, 10, 10);

	//stem
	fill(34, 139, 34);
	rect(359, 397, 2, 8);


	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}

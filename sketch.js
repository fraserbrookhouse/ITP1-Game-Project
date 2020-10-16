/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
/* eslint-disable no-var */
/*

My first extension is sound. I have added sound files for background music, when you jump, when you lose a life, when you win and for game over. There were a couple of things I found difficult in implementing this. First was stopping the sound from constantly restarting or playing over again and again. I found there are different play modes in p5.js for sound, so made sure to be explicit in how I wanted the sound to play (generally only once, and not to play again if it is already playing). I also found getting the sounds to play without breaking other parts of my code tough. When I first added sounds, if those sounds were triggered the game essentially froze with no key presses being registered so the only way to keep playing was to refresh the page.  I was careless with where I called the sounds, and this taught me to be a lot more careful with where I put my code in relations to other instructions, taking 10 minutes to ensure they play nicely so I don't need to spend hours debugging later. I also spent about 3 hours trying to debug why the game over sound wouldn't play, I kept going over and over my logic and couldn't find any fault. As soon as I gave up I realised I had no written the file path correctly in preload. So I learned to not get to caught up and focused on one area of code, when the issue could be something simple somewhere else.

My second extension is enemies. I did not find this unduly hard to implement. I learned from my experience with implementing sound and as a result my first implementation of enemies was without bugs after following along carefully from the lecture. I had to wrap my head around constructor functions, which were slightly confusing at first, but after a couple of practises became clear to understand. In this instance I used a ready made graphic, rather than using p5.js to fully draw the enemy. There are two reasons for this. One is that the artistic design side of things is not really my thing, I am far more interested in the back end and making sure everything works together, and the second is that as I have not tried to call an image file previously I thought it was worth trying something new.

The Game Project 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var game_score;
var lives;
var flagpole;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var clouds;
var mountains;
var trees_x;
var canyons;
var collectables;

var backgroundMusic;
var jumpSound;
var dieSound;
var winSound;
var gameOverSound;

var enemies;

// eslint-disable-next-line no-unused-vars
function preload() {
  // load used sound formats
  soundFormats('mp3', 'wav');

  // load sounds
  backgroundMusic = loadSound('assets/background.mp3'); // a freesound.org sound effect found here https://freesound.org/s/405220/ licensed under creative commons
  backgroundMusic.setVolume(5);

  jumpSound = loadSound('assets/jump.wav'); // a freesound.org sound effect found here https://freesound.org/s/350898/ licensed under creative commons
  jumpSound.setVolume(10);

  dieSound = loadSound('assets/die.mp3'); // a freesound.org sound effect found here https://freesound.org/s/364929/ licensed under creative commons
  dieSound.setVolume(10);

  winSound = loadSound('assets/win.wav'); // a freesound.org sound effect found here https://freesound.org/s/270319/ licensed under creative commons
  winSound.setVolume(10);

  gameOverSound = loadSound('assets/gameover.wav'); // a freesound.org sound effect found here https://freesound.org/s/365782/ licensed under creative commons
  winSound.setVolume(10);

  enemyImg = loadImage('assets/enemy.png'); // an opengameart.org image file found here https://opengameart.org/content/ufo-enemy-game-character licensed under creative commons
}

function startGame() {
  // character starting position
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;

  // Variable to control the background scrolling.
  scrollPos = 0;

  // Variable to store the real position of the gameChar in the game
  // world. Needed for collision detection.
  gameChar_world_x = gameChar_x - scrollPos;

  // init game score
  game_score = 0;

  // init flagpole
  flagpole = { isReached: false, x_pos: 3000 };

  // Boolean variables to control the movement of the game character.
  isLeft = false;
  isRight = false;
  isFalling = false;
  isPlummeting = false;

  // Initialise arrays of scenery objects.
  trees_x = [100, 300, 500, 1000];

  clouds = [
    { pos_x: 100, pos_y: 200 },
    { pos_x: 600, pos_y: 100 },
    { pos_x: 800, pos_y: 200 },
    { pos_x: 1100, pos_y: 200 },
    { pos_x: 1600, pos_y: 100 },
    { pos_x: 1800, pos_y: 200 }
  ];

  mountains = [
    { pos_x: 50, size: 60 },
    { pos_x: 500, size: 75 },
    { pos_x: 1100, size: 65 },
    { pos_x: 1050, size: 60 },
    { pos_x: 1500, size: 75 },
    { pos_x: 2100, size: 65 }
  ];

  canyons = [
    { pos_x: 160, width: 150 },
    { pos_x: 800, width: 180 },
    { pos_x: 1300, width: 120 },
    { pos_x: 1600, width: 150 },
    { pos_x: 1800, width: 180 },
    { pos_x: 2300, width: 120 }
  ];

  collectables = [
    { pos_x: 50, pos_y: floorPos_y, size: 70, isFound: false },
    { pos_x: 450, pos_y: floorPos_y - 75, size: 70, isFound: false },
    { pos_x: 700, pos_y: floorPos_y, size: 70, isFound: false },
    { pos_x: 1400, pos_y: floorPos_y - 75, size: 70, isFound: false },
    { pos_x: 1050, pos_y: floorPos_y, size: 70, isFound: false },
    { pos_x: 1450, pos_y: floorPos_y - 75, size: 70, isFound: false },
    { pos_x: 2000, pos_y: floorPos_y, size: 70, isFound: false },
    { pos_x: 2400, pos_y: floorPos_y - 75, size: 70, isFound: false }
  ];

  enemies = [];
  enemies.push(new Enemy(40, floorPos_y - 30, 100));
  enemies.push(new Enemy(990, floorPos_y - 30, 250));
  enemies.push(new Enemy(1480, floorPos_y - 30, 100));
  enemies.push(new Enemy(1990, floorPos_y - 30, 250));
  enemies.push(new Enemy(2490, floorPos_y - 30, 400));
}

// eslint-disable-next-line no-unused-vars
function setup() {
  createCanvas(1024, 576);
  floorPos_y = (height * 3) / 4;
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;

  // init lives
  lives = 3;

  startGame();
}

// eslint-disable-next-line no-unused-vars
function draw() {
  background(100, 155, 255); // fill the sky blue

  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height / 4); // draw some green ground

  checkPlayerDie();

  push();
  translate(scrollPos, 0);

  // Draw clouds.
  drawClouds();
  // Draw mountains.
  drawMountains();
  // Draw trees.
  drawTrees();

  // Draw canyons.
  for (var i = 0; i < canyons.length; i++) {
    drawCanyon(canyons[i]);
    checkCanyon(canyons[i]);
  }

  // Draw collectable items.

  for (var i = 0; i < collectables.length; i++) {
    if (!collectables[i].isFound) {
      drawCollectable(collectables[i]);
      checkCollectable(collectables[i]);
    }
  }

  // check if character passed flagpole
  checkFlagpole();

  // draw flagpole in either raised or lowered state
  renderFlagpole();

  for (var i = 0; i < enemies.length; i++) {
    enemies[i].draw();

    var isContact = enemies[i].checkContact(gameChar_world_x, gameChar_y);

    if (isContact) {
      if (lives > 0) {
        lives -= 1;
        if (lives > 0) {
          dieSound.playMode('sustain');
          dieSound.isLooping(false);
          dieSound.play();
          startGame();
        }
      }
    }
  }

  pop();

  // logic to make game over sound play when run out of lives and reset if space pressed
  if (lives < 1) {
    fill(255);
    stroke(15);
    textSize(50);
    textAlign(CENTER);
    text('GAME OVER', width / 2, height / 2);
    text('Press space to continue...', width / 2, height / 2 + 50);
    backgroundMusic.stop();
    gameOverSound.playMode('untilDone');
    gameOverSound.isLooping(false);
    gameOverSound.play();
    if (key == ' ') {
      lives = 3;
      gameOverSound.stop();
      startGame();
    } else {
      return;
    }
  }

  // logic to play win sound if flagpole reached and allow reset if space pressed
  if (flagpole.isReached == true) {
    fill(255);
    stroke(15);
    textSize(50);
    textAlign(CENTER);
    text('LEVEL COMPLETE!', width / 2, height / 2);
    text('Press space to continue...', width / 2, height / 2 + 50);
    backgroundMusic.stop();
    winSound.playMode('untilDone');
    winSound.isLooping(false);
    winSound.play();
    if (key == ' ') {
      lives = 3;
      winSound.stop();
      startGame();
    } else {
      return;
    }
  }

  // draw game score
  fill(255);
  noStroke();
  textSize(15);
  textAlign(LEFT);
  text('Score: ' + game_score, 20, 20);

  // draw lives

  drawLives();

  // Draw game character.

  drawGameChar();

  // Logic to make the game character move or the background scroll.

  if (isLeft) {
    if (isPlummeting == false) {
      if (gameChar_x > width * 0.2) {
        gameChar_x -= 5;
      } else {
        scrollPos += 5;
      }
    }
  }
  if (isRight) {
    if (isPlummeting == false) {
      if (gameChar_x < width * 0.8) {
        gameChar_x += 5;
      } else {
        scrollPos -= 5; // negative for moving against the background
      }
    }
  }

  // Logic to make the game character rise and fall.
  if (gameChar_y < floorPos_y) {
    isFalling = true;
    gameChar_y += 5;
  } else {
    isFalling = false;
  }
  // Update real position of gameChar for collision detection.
  gameChar_world_x = gameChar_x - scrollPos;
}

// ---------------------
// Key control functions
// ---------------------

// eslint-disable-next-line no-unused-vars
function keyPressed() {
  if (gameChar_y < floorPos_y + 5) {
    if (keyCode == 37) {
      if (isPlummeting == false) {
        console.log('left arrow pressed');
        isLeft = true;
      }
      // right arrow pressed
    } else if (keyCode == 39) {
      if (isPlummeting == false) {
        console.log('right arrow pressed');
        isRight = true;
      }
      // spacebar pressed
    } else if (keyCode == 32) {
      if (keyCode == 32) {
        console.log('spacebarispressed');
        if (gameChar_y == floorPos_y) {
          gameChar_y -= 200;
          jumpSound.play();
        }
      }
    }
  }
}

// eslint-disable-next-line no-unused-vars
function keyReleased() {
  if (keyCode == 37) {
    console.log('left arrow released');
    isLeft = false;
    // right arrow released
  } else if (keyCode == 39) {
    console.log('right arrow released');
    isRight = false;
    // spacebar released
  } else if (keyCode == 32) {
    console.log('spacebarispressed');
  }
}

// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar() {
  // draw game character
  if (isLeft && isFalling) {
    // add your jumping-left code
    // Body
    strokeWeight(0.5);
    stroke(0);
    fill(126, 125, 243); // purple
    rect(gameChar_x - 11.5, gameChar_y - 40, 20, 30, 3);
    // Head
    strokeWeight(0);
    stroke(0);
    fill(209, 136, 119); // skin colour
    ellipse(gameChar_x - 2, gameChar_y - 58, 35);
    // Left foot
    fill(0); // black
    rect(gameChar_x - 15, gameChar_y - 15, 10, 8, 1);
    // Left eye
    fill(255); // white
    ellipse(gameChar_x - 8, gameChar_y - 50, 10, 5); // eyeball
    fill(0); // black
    ellipse(gameChar_x - 8, gameChar_y - 50, 8, 3); // iris
    fill(0, 205, 0); // green
    ellipse(gameChar_x - 8, gameChar_y - 50, 2, 2); // pupil
    // Left arm
    strokeWeight(0.5);
    stroke(0);
    fill(209, 136, 119); // skin colour
    ellipse(gameChar_x - 2, gameChar_y - 12.5, 5, 5); // hand
    fill(126, 125, 243); // purple
    rect(gameChar_x - 4, gameChar_y - 35, 4, 20, 5); // arm
  } else if (isRight && isFalling) {
    // add your jumping-right code
    // Body
    strokeWeight(0.5);
    stroke(0);
    fill(126, 125, 243); // purple
    rect(gameChar_x - 11.5, gameChar_y - 40, 20, 30, 3);
    // Head
    strokeWeight(0);
    stroke(0);
    fill(209, 136, 119); // skin colour
    ellipse(gameChar_x, gameChar_y - 58, 35);
    // Right foot
    fill(0); // black
    rect(gameChar_x + 3, gameChar_y - 15, 10, 8, 1);
    // Right eye
    fill(255); // white
    ellipse(gameChar_x + 7, gameChar_y - 50, 10, 5); // eyeball
    fill(0); // black
    ellipse(gameChar_x + 7, gameChar_y - 50, 8, 3); // iris
    fill(0, 205, 0); // green
    ellipse(gameChar_x + 7, gameChar_y - 50, 2, 2); // pupil
    // Right arm
    strokeWeight(0.5);
    stroke(0);
    fill(209, 136, 119); // skin colour
    ellipse(gameChar_x, gameChar_y - 12.5, 5, 5); // hand
    fill(126, 125, 243); // purple
    rect(gameChar_x - 2, gameChar_y - 35, 4, 20, 5); // arm
  } else if (isLeft) {
    // add your walking left code
    // Body
    strokeWeight(0.5);
    stroke(0);
    fill(126, 125, 243); // purple
    rect(gameChar_x - 8.5, gameChar_y - 35, 20, 30, 3);
    // Head
    strokeWeight(0);
    stroke(0);
    fill(209, 136, 119); // skin colour
    ellipse(gameChar_x + 1, gameChar_y - 50, 35);
    // Left foot
    fill(0); // black
    rect(gameChar_x - 3, gameChar_y - 5, 10, 8, 1);
    // Left eye
    fill(255); // white
    ellipse(gameChar_x - 7, gameChar_y - 50, 10, 5); // eyeball
    fill(0); // black
    ellipse(gameChar_x - 7, gameChar_y - 50, 8, 3); // iris
    fill(0, 205, 0); // green
    ellipse(gameChar_x - 7, gameChar_y - 50, 2, 2); // pupil
    // Left arm
    strokeWeight(0.5);
    stroke(0);
    fill(209, 136, 119); // skin colour
    ellipse(gameChar_x + 2, gameChar_y - 9.5, 5, 5); // hand
    fill(126, 125, 243); // purple
    rect(gameChar_x, gameChar_y - 32, 4, 20, 5); // arm
  } else if (isRight) {
    // add your walking right code
    // Body
    strokeWeight(0.5);
    stroke(0);
    fill(126, 125, 243); // purple
    rect(gameChar_x - 8.5, gameChar_y - 35, 20, 30, 3);
    // Head
    strokeWeight(0);
    stroke(0);
    fill(209, 136, 119); // skin colour
    ellipse(gameChar_x + 1, gameChar_y - 50, 35);
    // Right foot
    fill(0); // black
    rect(gameChar_x - 3, gameChar_y - 5, 10, 8, 1);
    // Right eye
    fill(255); // white
    ellipse(gameChar_x + 7, gameChar_y - 50, 10, 5); // eyeball
    fill(0); // black
    ellipse(gameChar_x + 7, gameChar_y - 50, 8, 3); // iris
    fill(0, 205, 0); // green
    ellipse(gameChar_x + 7, gameChar_y - 50, 2, 2); // pupil
    // Right arm
    strokeWeight(0.5);
    stroke(0);
    fill(209, 136, 119); // skin colour
    ellipse(gameChar_x + 2, gameChar_y - 9.5, 5, 5); // hand
    fill(126, 125, 243); // purple
    rect(gameChar_x, gameChar_y - 32, 4, 20, 5); // arm
  } else if (isFalling || isPlummeting) {
    // add your jumping facing forwards code
    // Body
    strokeWeight(0.5);
    stroke(0);
    fill(126, 125, 243); // purple
    rect(gameChar_x - 12.5, gameChar_y - 40, 25, 30, 3);
    // Head
    strokeWeight(0);
    stroke(0);
    fill(209, 136, 119); // skin colour
    ellipse(gameChar_x, gameChar_y - 58, 35);
    // Left foot
    fill(0); // black
    rect(gameChar_x - 11, gameChar_y - 15, 10, 8, 1);
    // Right foot
    fill(0); // black
    rect(gameChar_x + 1, gameChar_y - 15, 10, 8, 1);
    // Left eye
    fill(255); // white
    ellipse(gameChar_x - 7, gameChar_y - 50, 10, 5); // eyeball
    fill(0); // black
    ellipse(gameChar_x - 7, gameChar_y - 50, 8, 3); // iris
    fill(0, 205, 0); // green
    ellipse(gameChar_x - 7, gameChar_y - 50, 2, 2); // pupil
    // Right eye
    fill(255); // white
    ellipse(gameChar_x + 7, gameChar_y - 50, 10, 5); // eyeball
    fill(0); // black
    ellipse(gameChar_x + 7, gameChar_y - 50, 8, 3); // iris
    fill(0, 205, 0); // green
    ellipse(gameChar_x + 7, gameChar_y - 50, 2, 2); // pupil
    // Left arm
    strokeWeight(0.5);
    stroke(0);
    fill(126, 125, 243); // purple
    rect(gameChar_x - 17.5, gameChar_y - 37, 4, 15, 20); // arm
    fill(209, 136, 119); // skin colour
    ellipse(gameChar_x - 15.5, gameChar_y - 22, 5, 5); // hand
    // Right arm
    strokeWeight(0.5);
    stroke(0);
    fill(126, 125, 243); // purple
    rect(gameChar_x + 13.5, gameChar_y - 37, 4, 15, 20); // arm
    fill(209, 136, 119); // skin colour
    ellipse(gameChar_x + 15.5, gameChar_y - 22, 5, 5); // hand
  } else {
    // add your standing front facing code
    // Body
    strokeWeight(0.5);
    stroke(0);
    fill(126, 125, 243); // purple
    rect(gameChar_x - 12.5, gameChar_y - 35, 25, 30, 3);
    // Head
    strokeWeight(0);
    stroke(0);
    fill(209, 136, 119); // skin colour
    ellipse(gameChar_x, gameChar_y - 50, 35);
    // Left foot
    fill(0); // black
    rect(gameChar_x - 11, gameChar_y - 5, 10, 8, 1);
    // Right foot
    fill(0); // black
    rect(gameChar_x + 1, gameChar_y - 5, 10, 8, 1);
    // Left eye
    fill(255); // white
    ellipse(gameChar_x - 7, gameChar_y - 50, 10, 5); // eyeball
    fill(0); // black
    ellipse(gameChar_x - 7, gameChar_y - 50, 8, 3); // iris
    fill(0, 205, 0); // green
    ellipse(gameChar_x - 7, gameChar_y - 50, 2, 2); // pupil
    // Right eye
    fill(255); // white
    ellipse(gameChar_x + 7, gameChar_y - 50, 10, 5); // eyeball
    fill(0); // black
    ellipse(gameChar_x + 7, gameChar_y - 50, 8, 3); // iris
    fill(0, 205, 0); // green
    ellipse(gameChar_x + 7, gameChar_y - 50, 2, 2); // pupil
    // Left arm
    strokeWeight(0.5);
    stroke(0);
    fill(209, 136, 119); // skin colour
    ellipse(gameChar_x - 15.5, gameChar_y - 8, 5, 5); // hand
    fill(126, 125, 243); // purple
    rect(gameChar_x - 17.5, gameChar_y - 32, 4, 22, 20); // arm
    // Right arm
    strokeWeight(0.5);
    stroke(0);
    fill(209, 136, 119); // skin colour
    ellipse(gameChar_x + 15.5, gameChar_y - 8, 5, 5); // hand
    fill(126, 125, 243); // purple
    rect(gameChar_x + 13.5, gameChar_y - 32, 4, 22, 20); // arm
  }
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
function drawClouds() {
  for (var i = 0; i < clouds.length; i++) {
    fill(255, 255, 255);
    ellipse(clouds[i].pos_x, clouds[i].pos_y, 80);
    ellipse(clouds[i].pos_x - 40, clouds[i].pos_y, 60);
    ellipse(clouds[i].pos_x + 40, clouds[i].pos_y, 60);
  }
}
// Function to draw mountains objects.
function drawMountains() {
  for (var i = 0; i < mountains.length; i++) {
    fill(150, 150, 150);
    triangle(
      mountains[i].pos_x + 600 * (mountains[i].size / 50),
      floorPos_y,
      mountains[i].pos_x + 400 * (mountains[i].size / 50),
      floorPos_y,
      mountains[i].pos_x + 500 * (mountains[i].size / 50),
      floorPos_y - 332 * (mountains[i].size / 50)
    );
    triangle(
      mountains[i].pos_x + 550 * (mountains[i].size / 50),
      floorPos_y,
      mountains[i].pos_x + 650 * (mountains[i].size / 50),
      floorPos_y,
      mountains[i].pos_x + 600 * (mountains[i].size / 50),
      floorPos_y - 232 * (mountains[i].size / 50)
    );
    triangle(
      mountains[i].pos_x + 350 * (mountains[i].size / 50),
      floorPos_y,
      mountains[i].pos_x + 450 * (mountains[i].size / 50),
      floorPos_y,
      mountains[i].pos_x + 400 * (mountains[i].size / 50),
      floorPos_y - 232 * (mountains[i].size / 50)
    );
    // snow cap
    fill(255, 255, 255);
    triangle(
      mountains[i].pos_x + 500 * (mountains[i].size / 50),
      floorPos_y - 332 * (mountains[i].size / 50),
      mountains[i].pos_x + 515 * (mountains[i].size / 50),
      floorPos_y - 282 * (mountains[i].size / 50),
      mountains[i].pos_x + 485 * (mountains[i].size / 50),
      floorPos_y - 282 * (mountains[i].size / 50)
    );
  }
  // Draw trees.
  for (var i = 0; i < trees_x.length; i++) {
    // Trunk
    fill(120, 100, 40);
    rect(trees_x[i], floorPos_y - 150, 60, 150);
    // Branches
    fill(0, 155, 0);
    triangle(
      trees_x[i] - 50,
      floorPos_y - 100,
      trees_x[i] + 30,
      floorPos_y - 200,
      trees_x[i] + 110,
      floorPos_y - 100
    );
    triangle(
      trees_x[i] - 50,
      floorPos_y - 150,
      trees_x[i] + 30,
      floorPos_y - 250,
      trees_x[i] + 110,
      floorPos_y - 150
    );
  }
}

// Function to draw trees objects.
function drawTrees() {
  for (var i = 0; i < trees_x.length; i++) {
    // Trunk
    fill(120, 100, 40);
    rect(trees_x[i], floorPos_y - 150, 60, 150);
    // Branches
    fill(0, 155, 0);
    triangle(
      trees_x[i] - 50,
      floorPos_y - 100,
      trees_x[i] + 30,
      floorPos_y - 200,
      trees_x[i] + 110,
      floorPos_y - 100
    );
    triangle(
      trees_x[i] - 50,
      floorPos_y - 150,
      trees_x[i] + 30,
      floorPos_y - 250,
      trees_x[i] + 110,
      floorPos_y - 150
    );
  }
}

// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon) {
  // stroke(0)
  // strokeWeight(1)
  fill(139, 69, 19);
  triangle(
    t_canyon.pos_x,
    floorPos_y,
    t_canyon.pos_x + 1 * t_canyon.width,
    floorPos_y,
    t_canyon.pos_x + t_canyon.width / 2,
    floorPos_y + 500
  );
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon) {
  if (
    gameChar_world_x > t_canyon.pos_x &&
    gameChar_world_x < t_canyon.pos_x + t_canyon.width &&
    gameChar_y > floorPos_y - 1
  ) {
    isPlummeting = true;
    gameChar_y += 20;
  }
}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable) {
  fill(255, 215, 0);
  ellipse(t_collectable.pos_x, t_collectable.pos_y, t_collectable.size * 0.2);
}

// Function to check character has collected an item.

function checkCollectable(t_collectable) {
  if (
    dist(
      gameChar_world_x,
      gameChar_y,
      t_collectable.pos_x,
      t_collectable.pos_y
    ) < 20
  ) {
    t_collectable.isFound = true;
    game_score += 1;
  }
}

// function to draw finish flagpole

function renderFlagpole() {
  push();
  strokeWeight(5);
  stroke(100);
  line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 250);
  fill(255, 0, 255);
  noStroke();

  if (flagpole.isReached) {
    rect(flagpole.x_pos, floorPos_y - 50, 100, 50);
  } else {
    rect(flagpole.x_pos, floorPos_y - 250, 100, 50);
  }
  pop();
}

// function to check if player has died

function checkPlayerDie() {
  if (gameChar_y > 600) {
    if (lives > 0) {
      lives -= 1;
      if (lives > 0) {
        dieSound.playMode('sustain');
        dieSound.isLooping(false);
        dieSound.play();
        startGame();
      }
    }
  }
}

// draw remaining lives

function drawLives() {
  for (i = 0; i < lives; i++) {
    fill(255, 0, 0);
    ellipse(30 + 25 * i, 40, 20, 20);
  }
}

// function to check if flagpole is reached

function checkFlagpole() {
  var d = gameChar_world_x - flagpole.x_pos;
  if (d > 0) {
    flagpole.isReached = true;
    if (backgroundMusic.isPlaying()) {
      backgroundMusic.stop();
    }
  } else {
    flagpole.isReached = false;
    backgroundMusic.playMode('untilDone');
    backgroundMusic.isLooping(true);
    backgroundMusic.play();
  }
}

function Enemy(x, y, range) {
  this.x = x;
  this.y = y;
  this.range = range;

  this.currentX = x;
  this.inc = 1;

  this.update = function() {
    this.currentX += this.inc;

    if (this.currentX >= this.x + this.range) {
      this.inc = -1;
    } else if (this.currentX < this.x) {
      this.inc = 1;
    }
  };

  this.draw = function() {
    this.update();
    image(enemyImg, this.currentX - 20, this.y, 50, 50);
  };

  this.checkContact = function(gc_x, gc_y) {
    var d = dist(gc_x, gc_y, this.currentX, this.y);

    if (d < 40) {
      return true;
    } else {
      return false;
    }
  };
}

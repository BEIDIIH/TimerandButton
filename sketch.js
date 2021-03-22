/***********************************************************************************
	Timers and Buttons
	by Beidi Han



***********************************************************************************/
//Gif variables
var shark;
var cthulhu;

//Button variables
var startButton;

//Timer variables
var simpleTimer;
var elapsedSeconds;

//Gif X variable
var sharkX;
var cthulhuX;

//Speed variables
var sharkSpeed;
var cthulhuSpeed;

var gameStart
var gameOver
//running start and over
//var runStarted;
//var runOver;

function preload() {
	//shark
	shark = createImg('assets/shark.gif');
	
	//Cthulhu
	cthulhu = createImg('assets/cthulhu.gif');
}

// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

//make the timer
  simpleTimer = new Timer(0);
  simpleTimer.start();
  elapsedSeconds = 0;


//draw the button
  startButton = new Clickable();

  startButton.cornerRadius = 0;
  startButton.locate(width/2, height - 200);
  startButton.textScaled = true;
  startButton.text = "Start";
  startButton.textSize = 30;
  startButton.resize = (500, 200);


  // Button states
  startButton.onOutside = function () {
    this.color = "#FFFFFF";
  }
  startButton.onHover = function () {
    this.color = "#F2F2F2";
  }

  startButton.onPress = function() {
  	simpleTimer.start();
  	frameRate(30);
  	gameStart = true;
  }
 
//set the x and speed
  sharkX = windowWidth - 400;
  cthulhuX = windowWidth - 280;

  sharkSpeed = -4;
  cthulhuSpeed = -3;
  
  gameOver = false;

 }


// Draw code goes here
function draw() {
  background(254, 253, 252);
 

  drawScene();
  
  if(gameStart) {
  	gameBegan();
  }
  }
 

function drawScene() {
	//draw shark
	shark.size(400, 200);
	shark.position(sharkX, 100);

    //draw cthulhu
    cthulhu.size(250, 250);
	cthulhu.position(cthulhuX, 300);

	startButton.draw();

}


function gameBegan() {
	sharkX = sharkX + sharkSpeed;
	cthulhuX = cthulhuX + cthulhuSpeed;

	elapsedSeconds++;

	text("Time:" + elapsedSeconds, width / 2 + 50, height - 250);
	fill(0);

	if (sharkX < 200) {
		cthulhuSpeed = 0;
		sharkSpeed = 0;
		gameOver = true;
		simpleTimer.over();
	}

}



  
  



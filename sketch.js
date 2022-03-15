const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var groundObj;
var leftside;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Matter.Bodies.circle(200,150,15)

	groundObj = new Ground(width/2,670,width,20);
	leftside = new Ground(1100,600,20,120);
	
	Engine.run(engine);
  
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj = new Ground(width/2,670,width,20);
  leftside = new Ground(1100,600,20,120);

 
}

function keyPressed()
{
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
	}
}


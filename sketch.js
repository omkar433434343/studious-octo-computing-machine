const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper;

var dustbin1, dustbin2, dustbin3;

var groundObject;

var world;

var score = 0

var gameState = "launch"

function preload(){

	dustbinImg = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(400, 500, 50, 50);

	dustbin1 = new dustbin(1200, 570, 20, 200);

	dustbin2 = new dustbin(1400, 570, 20, 200);

	dustbin3 = new dustbin(1300, 660, 180, 20);

	groundObject = new ground(width/2, 680,width, 20);

	Engine.run(engine);
  
}

function draw() {

	background("white");
	
	textSize(50)
	fill("cyan")
	text("Score " + score,1000,100)

	textSize(40)
	fill("red")
	text("press space to reset" ,50,40)

	textSize(50)
	fill("green")
	text("press up arrow to lauch",50,100)

  rectMode(CENTER);

  paper.display();

console.log(paper.body.position.y)
  groundObject.display();
 
  dustbin1.display();

  dustbin2.display();

  dustbin3.display();

  
  
  image(dustbinImg, 1180, 440, 250, 230);

  reset()
}

function reset(){
	if(keyCode === 32){  
		Matter.Body.setPosition(paper.body, {x: 400,y: 500});
		gameState = "launch";
	}
}
function keyPressed(){
	
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:550, y:-550});
		gameState = "launched";
   }

}
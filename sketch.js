
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var ground,roof,bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,10)
	bob1=new Paper(125,500)
	bob2=new Paper(165,500)
	bob3=new Paper(205,500)
	bob4=new Paper(245,500)
	bob5=new Paper(285,500)
	roof=new Ground(400,100,600,10)
	Engine.run(engine);
	rope1=new slingshot(bob1.body,{x:125,y:100})
	rope2=new slingshot(bob2.body,{x:165,y:100})
	rope3=new slingshot(bob3.body,{x:205,y:100})
	rope4=new slingshot(bob4.body,{x:245,y:100})
	rope5=new slingshot(bob5.body,{x:285,y:100})
}


function draw() {
  rectMode(CENTER);
  background(100);
  ground.display()
  roof.display()
  rope1.display()
  rope2.display()
  rope3.display()
  bob1.display()
  bob2.display()
  bob3.display()
  rope4.display()
  rope5.display()
  bob4.display()
  bob5.display()
  if (keyDown("UP_ARROW")){
	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-40,y:-10})
  }
  drawSprites();
 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1 , bob2 , bob3 , bob4 , bob5;
var roof;
var rope1 , rope2 , rope3 , rope4 , rope5;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(800 , 500 , 70);
	bob2 = new Bob(730 , 550 , 70);
	bob3 = new Bob(660 , 550 , 70);
	bob4 = new Bob(590 , 550  , 70);
	bob5 = new Bob(520 , 550 , 70);

	roof = new Roof(600 , 10);

	rope1 = new Rope(bob1.body , {x:800 , y:50});
	rope2 = new Rope(bob2.body,{x: 730 , y:50});
	rope3 = new Rope(bob3.body , {x:660 ,y:50 });
	rope4 = new Rope(bob4.body , {x:590 ,y:50});
	rope5 = new Rope(bob5.body ,{x: 520 , y:50});


	Engine.run(engine);


  
}


function draw() {

  background(220);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(bob1.body , bob1.body.position , {x: 10 ,y:-10});
	}
}







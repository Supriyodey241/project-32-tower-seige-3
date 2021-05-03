const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground,upperGroud,backgroundImg;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box16,box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,box31,box32,box33,box34,box35,box36,box37,box38,box39,box40,box41,box42;
var ball;
var slingShot;
var score = 0;
var bg = "orange";

function preload(){
  getBackgroundImg();
}

function setup() {
    createCanvas(1500, 600);
    
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.

  //creation of level 1
  box1 = new Box(810,389,20,20);
  box2 = new Box(831,389,20,20);
  box3 = new Box(851,389,20,20);
  box4 = new Box(871,389,20,20);
  box5 = new Box(891,389,20,20);
  box6 = new Box(911,389,20,20);
  box7 = new Box(931,389,20,20);
  box8 = new Box(951,389,20,20);
  box9 = new Box(971,389,20,20);
  box10 = new Box(991,389,20,20);
  box11 = new Box(1011,389,20,20);
  box12 = new Box(1031,389,20,20);

  //creation of level 2
  box13 = new Box(831,359,20,20);
  box14 = new Box(851,359,20,20);
  box15 = new Box(871,359,20,20);
  box16 = new Box(891,359,20,20);
  box17 = new Box(911,359,20,20);
  box18 = new Box(931,359,20,20);
  box19 = new Box(951,359,20,20);
  box20 = new Box(971,359,20,20);
  box21 = new Box(991,359,20,20);
  box22 = new Box(1011,359,20,20);

  //creation of level 3
  box23 = new Box(851,329,20,20);
  box24 = new Box(871,329,20,20);
  box25 = new Box(891,329,20,20);
  box26 = new Box(911,329,20,20);
  box27 = new Box(931,329,20,20);
  box28 = new Box(951,329,20,20);
  box29 = new Box(971,329,20,20);
  box30 = new Box(991,329,20,20);

  //creation of level 4
  box31 = new Box(871,299,20,20);
  box32 = new Box(891,299,20,20);
  box33 = new Box(911,299,20,20);
  box34 = new Box(931,299,20,20);
  box35 = new Box(951,299,20,20);
  box36 = new Box(971,299,20,20);

  //creation of level 5
  box37 = new Box(891,269,20,20);
  box38 = new Box(911,269,20,20);
  box39 = new Box(931,269,20,20);
  box40 = new Box(951,269,20,20);
  
  //creation of level 6
  box41 = new Box(911,239,20,20);
  box42 = new Box(931,239,20,20);

  ball = new Polygon(200,330,40);
  slingShot = new SlingShot(ball.body, {x:200 ,y:350});

  ground = new Ground(400,589,20000,20);
  upperGround = new Ground(920,400,300,20);
	
    Engine.run(engine); 
}


function draw(){
  Engine.update(engine);
  rectMode(CENTER);
  background("white");

  text("Score" +score,750,40);

  box1.display();
  box1.score();

  box2.display();
  box2.score();

  box3.display();
  box3.score();

  box4.display();
  box4.score();

  box5.display();
  box5.score();
  
  box6.display();
  box6.score();

  box7.display();
  box7.score();

  box8.display();
  box8.score();

  box9.display();
  box9.score();

  box10.display();
  box10.score();

  box11.display();
  box11.score();

  box12.display();
  box12.score();


  box13.display();
  box13.score();

  box14.display();
  box14.score();

  box15.display();
  box15.score();

  box16.display();
  box16.score();

  box17.display();
  box17.score();

  box18.display();
  box18.score();

  box19.display();
  box19.score();
  
  box20.display();
  box20.score();

  box21.display();
  box21.score();

  box22.display();
  box22.score();

  
  box23.display();
  box23.score();

  box24.display();
  box24.score();

  box25.display();
  box25.score();

  box26.display();
  box26.score();

  box27.display();
  box27.score();

  box28.display();
  box28.score();

  box29.display();
  box29.score();

  box30.display();
  box30.score();


  box31.display();
  box31.score();

  box32.display();
  box32.score();

  box33.display();
  box33.score();

  box34.display();
  box34.score();

  box35.display();
  box35.score();

  box36.display();
  box36.score();


  box37.display();
  box37.score();

  box38.display();
  box38.score();

  box39.display();
  box39.score();

  box40.display();
  box40.score();


  box41.display();
  box41.score();

  box42.display();
  box42.score();


  ball.display();

  ground.display();
  upperGround.display();

  
}

 function mouseDragged(){
   Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
 }   
 
 function mouseReleased(){
   slingShot.fly();
 }

 function keyPressed(){
   if(keyCode === 32){
     slingShot.attach(ball.body);
   }
 }

 async function getBackgroundImg(){
   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var responseJSON = await response.json();

   var datetime = responseJSON.datetime;
   var hour = datetime.slice(11,13);

   if(hour>=0600 && hour<=1900){
     bg = "orange";
   }
   else{
     bg = "blue";
   }

   backgroundImg = loadImage(bg);
   console.log(backgroundImg);
 }
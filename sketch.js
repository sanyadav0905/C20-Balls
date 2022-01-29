
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ball2;
var ground;
var stand;
var angle=60

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  stand = Bodies.rectangle(150,200,100,20,ground_options);
  World.add(world,stand);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball,);
  ball2 = Bodies.circle(150,10,30, ball_options);
  World.add(world,ball2);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 
  ellipse(ball2.position.x, ball2.position.y,30);
  Matter.Body.rotate(stand,angle)
  push ()
  translate (stand.position.x,stand.position.y)
  rotate (angle)
  rect(0,0,100,20)
  pop ()
  angle+=0.5



}


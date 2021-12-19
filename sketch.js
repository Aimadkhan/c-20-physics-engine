
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ground,ball,wall

function setup()
{
  createCanvas(400,400);
  

  engine=Engine.create()
  world=engine.world;

  var ground_options={
    isStatic:true
  }

  ground=Bodies.rectangle(200,370,400,20,ground_options)
  World.add(world,ground)
  
  var ball_options={
    restitution:0.8
  }

  ball=Bodies.circle(100,10,20,ball_options)
  World.add(world,ball)
  
wall=Bodies.rectangle(300,150,50,10,ground_options)
World.add(world,wall)
}

function draw() 
{
  background(51);

  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)

  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,20)

  rect(wall.position.x,wall.position.y,50,10)
 
}


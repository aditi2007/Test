const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1;
var box2;
var ball;
var box3;
var box4;
var box5;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
 var box1_options={
restitution:3
 }
 var box2_options={
restitution:0.6
 }
 var ball_options={
restitution:1
 }
 var box3_options={
     restitution:1
 }
 var box4_options={
restitution:1
 }
 var box5_options={
restitution:1
 }
 box5=Bodies.rectangle(240,240,20,20,box5_options)
 box4=Bodies.rectangle(180,180,20,20,box4_options)
 box3=Bodies.rectangle(150,150,20,20,box3_options) ;
 ball=Bodies.circle(100,100,30,ball_options);
 box2=Bodies.rectangle(300,300,20,20,box2_options)
 box1=Bodies.rectangle(200,200,20,20,box1_options);
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
World.add(world,box1);
World.add(world,box2);
World.add(world,ball);
World.add(world,box3);
World.add(world,box4);
World.add(world,box5);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(box1.position.x,box1.position.y,20,20);
    rect(box2.position.x,box2.position.y,20,20);
    rect(box3.position.x,box3.position.y,20,20)
    rect(box4.position.x,box4.position.y,20,20)
    rect(box5.position.x,box5.position.y,20,20)
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,30,30)

}
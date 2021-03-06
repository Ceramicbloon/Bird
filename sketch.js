const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var engine, world;
var box1, box2, box3, box4, box5;
var log1, log2, log3, log4;
var pig1, pig2;
var bird;
var bg;
function preload(){
    bg = loadImage("sprites/bg.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600, height, 1200,20)
    box1 = new Box(720,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(820,310)
    log1 = new Log(820, 260, 270, PI/2)
    box3 = new Box(720, 230, 70, 70);
    box4 = new Box(920,230,70,70)
    pig2 = new Pig(820, 230)
    log2 = new Log(820, 210, 270, PI/2)
   
    box5 = new Box(820, 190, 70, 70)
    log3 = new Log(770, 180, 120, PI/4)
    log4 = new Log(870, 180, 120, -PI/4)
    bird = new Bird(220, 230)
}
function draw(){
    background(bg);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    log1.display();
    pig1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}
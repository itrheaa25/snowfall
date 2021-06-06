const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var snow = []
var santa, santaImg;

function preload(){
  backgroundImg = loadImage("snow2.jpg");
  santaImg = loadImage("santa.jpg");
}

function setup() {
  createCanvas(800,400);
 engine = Engine.create()
 world = engine.world


  //createSprite(400, 200, 50, 50);
  santa = createSprite(200,150,20,20);
  santa.addImage(santaImg);
  santa.scale = 0.4; 

  
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  if(frameCount%10===0){
    snow.push(new SNOW(random(0,800),10,20,20))

 }
  
 santa.x = mouseX ; 
 santa.y = mouseY ; 

  //display the paricles 
  for (var i = 0; i < snow.length; i++) {
    snow[i].display();   
  }

  drawSprites();

}
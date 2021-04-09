const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);

  coach = new Coaches(50,170,50,50);  
  coach2 = new Coaches(120,170,50,50);
  coach3 = new Coaches(190,170,50,50);
  coach4 = new Coaches(260,170,50,50);
  coach5 = new Coaches(330,170,50,50);
  coach6 = new Coaches(400,170,50,50);
  coach7 = new Coaches(470,170,50,50);
  coach8 = new Coaches(540,170,50,50);
  coach9 = new Coaches(610,170,50,50);

  slingShot = new SlingShot(coach.body, coach2.body);
  slingShot2 = new SlingShot(coach2.body, coach3.body);
  slingShot3 = new SlingShot(coach3.body, coach4.body);
  slingShot4 = new SlingShot(coach4.body, coach5.body);
  slingShot5 = new SlingShot(coach5.body, coach6.body);
  slingShot6 = new SlingShot(coach6.body, coach7.body);
  slingShot7 = new SlingShot(coach7.body, coach8.body);
  slingShot8 = new SlingShot(coach8.body, coach9.body);

  rock = new Rock(1100,200,100,100);
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  
  coach.show()
  coach2.show()
  coach3.show()
  coach4.show()
  coach5.show()
  coach6.show()
  coach7.show()
  coach8.show()
  coach9.show()

  slingShot.show()
  slingShot2.show()
  slingShot3.show()
  slingShot4.show()
  slingShot5.show()
  slingShot6.show()
  slingShot7.show()
  slingShot8.show()

  rock.show()

  if(coach9.body.position.x > 1100){
    fill("blue")
    text("CRASH!!!",1100,100)
  }

  }

  function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        Matter.Body.applyForce(coach9.body, {x:coach9.body.position.x, y:coach9.body.position.y},{x:0.5, y:0});
    }
}
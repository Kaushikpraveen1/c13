var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var bananasGroup;
var survivalTime = 0;
var score,scoreImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600, 500);  
var message = "This is a message"
console.log(message);  

monkey = createSprite(50,340,20,50);  
monkey.addAnimation("running", monkey_running);

monkey.scale = 0.2;
  
ground = createSprite(400,350,900,10);  
ground.velocityX = -4; 
ground.x = ground.width/2;
console.log(ground.x)  
  
  
  bananasGroup = new Group();  
obstaclesGroup = new Group();
  

}


function draw() {

background("forest");  

stroke("white");
textSize(20);  
fill("white");  
text("score: "+ score, 500,50);  
  
stroke("black");  
textSize(20);  
fill("black");
survivalTime = Math.ceil(frameCount/frameRate()) 
text("survival Time: "+ survivalTime, 100,50);  
  
  if(gameState=== PLAY){
   
 
 
 //ground.velocityX = -(4 + 3* score/100)
 monkey.collide(ground);
createBananas(); 
createObstacles(); 
 
 
 
 }

drawSprites();

}

function createBananas(){
if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananasGroup.add(banana);
    banana.scale = 0.1;  
}

  
}

function createObstacles(){
if(frameCount % 300 === 0) {
  obstacle = createSprite(800,320,10,40);
  obstacle.velocityX = -6; 
  obstacle.addImage(obstaceImage);
  obstacle.scale=0.15;
  obstacle.lifetime = 300;
  obstaclesGroup.add(obstacle);
}  
  
}



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
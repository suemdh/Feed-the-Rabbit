var garden,rabbit;
var gardenImg,rabbitImg;
var apples,orange_leaves;

function preload(){
  gardenImg= loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  leavesImg=loadImage("Leaves.png")
}

function setup(){
createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  var select_sprites=Math.round(random(1,2));
  if( frameCount % 80 == 0) {
    if(select_sprites == 1) {
      createApples();
    }
  else {
  createLeaves();
  }
  }





function createApples(){
apple=createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.velocityY=4;
apple.scale=0.1;
apple.lifetime=80;
}
function createLeaves(){
leaves=createSprite(random(75,375),40,10,10);
leaves.addImage(leavesImg);
leaves.velocityY=3
leaves.scale=0.1
leaves.lifetime=100;
}



}



var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(600,400,80,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100,100,40,40);
  gameObject2 = createSprite(200,100,40,40);
  gameObject3 = createSprite(300,100,40,40);
  gameObject4 = createSprite(400,100,40,40);

  fixedRect.velocityY = 5;
  movingRect.velocityY = -5;

  
}

function draw() {
  background(0,0,0);  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObject3)){
    movingRect.shapeColor = "blue";
    gameObject3.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject3.shapeColor = "green";
  }

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
}
if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect.velocityY = fixedRect.velocityY * (-1);
}

  drawSprites();
}

function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
  }
  else {
    return false;
  }
}
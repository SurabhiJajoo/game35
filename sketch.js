var balloon;
var position;
var database

function preload() {
  backgroundImg = loadImage("Hot Air Ballon-01.png");
   balloonImg = loadImage ("Hot Air Ballon-02.png")
 
 }
function setup() {
  createCanvas(1000,500);
  balloon = createSprite(500,250,70,70)
 
 /* database=firebase.database();
  
 balloon = createSprite(250,250,10,10);
 
  var balloonPosition= database.ref("balloon/position");
  balloonPosition.on("value",readPosition,showError);*/
}



function draw() {
  background(backgroundImg);
 

  if(keyDown(LEFT_ARROW)){
      changePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
      changePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
      changePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
      changePosition(0,+1);
  }
  balloon.display()
  
  drawSprites();
}

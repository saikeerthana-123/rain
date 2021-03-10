var PLAY = 1;
var END = 0;
var gameState = PLAY;
var count = 0;
var BallGroup;
var player;

function setup(){
  BallGroup = createGroup();
}

function draw() {
  background("rgb(250,250,230)");
  createEdgeSprites();
  if (gameState === PLAY) {
      Ball();
  }
  
  drawSprites();
}

function Ball(){
  if (World.frameCount %2 === 0) {
    var ball = createSprite(400, 10, 2, 10);
    ball.velocityY = 8;
    ball.x = random(100, 300);
    BallGroup.add(ball);
   }
  }
// Declaring variables
var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score;

//Preloading the image/animation
function preload(){
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  
}



function setup() {
  //Creating canvas
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,200,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  //Setting score value
   score = 0    
}

function draw() {
 background(0);
  //Moving background
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //Bow moves with the mouse
  bow.y = World.mouseY
  
   //Release arrow when space is pressed
  if (keyDown("space")) {
    createArrow();
  }

  // Setting limits for the bow sprit to stay in the canvas
  if (bow.y<70) {
    bow.y=70
  }
  if (bow.y>330) {
    bow.y=330
  }
   
  //creating continous balloons randomly

  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  

  drawSprites();

  //Displaying score on canvas
  text("Score: "+ score, 320,20);
}


//Making Arrows
 function createArrow() {

  var arrow= createSprite(bow.x, bow.y);
  arrow.addImage(arrowImage);
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;

  //Setting limits for the arrow sprit to stay in the canvas
  if (arrow.y<70) {
    arrow.y=70
  }
  if (arrow.y>330) {
    arrow.y=330
  }

}


//Red balloon
 function redBalloon() {
   var red = createSprite(0,Math.round(random(70, 330)), 10, 10);
   red.addImage(red_balloonImage);
   red.velocityX = 3;
   red.lifetime = 150;
   red.scale = 0.1;
 }


 //Blue balloon
function blueBalloon() {
  var blue = createSprite(0,Math.round(random(70, 330)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}


//Green balloon
function greenBalloon() {
  var green = createSprite(0,Math.round(random(70, 330)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}


//Pink balloon
function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(70, 330)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
}
var backgroundImg;
var cat1, cat2;

function preload() {
    //load the images here
    backgroundImg = loadImage("garden.png");
    cat1 = loadAnimation("cat1.png");
    mouse1 = loadAnimation("mouse1.png");
    cat2 = loadAnimation("cat2.png");
    mouse2 = loadAnimation("mouse2.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(200, 200, 50, 80);
    mouse = createSprite(400, 200, 80, 30);

}

function draw() {

    background("garden.png");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing", mouseimg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }

  if(keyCode === RIGH_ARROW){
      mouse.addAnimation("mouseTeasing", mouseimg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;

  }


}

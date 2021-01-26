var cat, mouse
function preload() {
    //load the images here
}

function setup(){
    createCanvas(1000,800);
cat = createSprite(400,200,50,80)
mouse = createSprite(400,800,80,30)
}

function draw() {
 
    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
   //For moving and changing animation write code here
 cat.velocityX = -5;
 cat.addAnimation("catRunning",catImg2);
 cat.changeAnimation("catRunning");


}

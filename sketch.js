var bgImag;
var cat;

function preload() {
    //load the images here
    bgImag = loadImage("images/garden.png")
    catimg1 = loadAnimation("images/cat1.png");
    mouseimg1 = loadAnimation("images/mouse1.png");
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catimg3 = loadAnimation("images/cat4.png");
    mouseimg2 = loadAnimation("images/mouse3.png","images/mouse2.png");
    mouseimg3 = loadAnimation("images/mouse4.png");
    

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     cat = createSprite(800,700);
     mouse = createSprite(200,700);
     cat.addAnimation("catsitting",catimg1)
     cat.addAnimation("catrunning",catimg2)
     cat.addAnimation("cat",catimg3)
     mouse.addAnimation("mouse1",mouseimg1)
     mouse.addAnimation("mouse2",mouseimg2)
     mouse.addAnimation("mouse3",mouseimg3)
     cat.scale = 0.2;
     mouse.scale = 0.2;
}

function draw() {

    background(bgImag);
    //Write condition here to evalute if tom and jerry collide
     
      if(cat.x - mouse.x < (cat.width - mouse.width)/2){
         cat.changeAnimation("cat",catimg3)
         mouse.changeAnimation("mouse3",mouseimg3)
      }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if(keyCode === LEFT_ARROW){
    cat.x = cat.x-10;
    cat.changeAnimation("catrunning",catimg2)
    mouse.changeAnimation("mouse2",mouseimg2)


    }

}

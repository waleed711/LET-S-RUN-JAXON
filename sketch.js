var path,movingpath
var boundries,boundries1
var jake,jakerunning
function preload(){
  //pre-load images
  
  movingpath = loadImage("path.png")
  jakerunning = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path= createSprite(200,200,10,10)
  path.addImage(movingpath)
  path.velocityY = 4
  path.scale=1.2

jake = createSprite(200,350,10,10)
jake.addAnimation("jakerunning",jakerunning)
  

boundries= createSprite(0,0,100,800)
boundries1= createSprite(400,0,100,800)
 boundries.visible = false
  boundries1.visible = false

}

function draw() {
  background(0);

  if(path.y > 400){
    path.y = height/2
  }
  jake.x = mouseX
  
    jake.collide(boundries)
  jake.collide(boundries1)
  

  
  drawSprites()
}

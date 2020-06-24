
var sun,mercury,venus,earth,mars,end;
function preload(){
  mercuryImg=loadImage("images/mercury.jpg");
}
  function setup() {
  createCanvas(1800,1400);

  //sun
  sun = createSprite(7,7, 100, 150);
  //sun.addImage(sunImg);
  sun.scale= 0.1;
  console.log(sun.x);
  sun.setCollider("circle",0,0,100);
  sun.debug=true;

  //mercury
  mercury = createSprite(110,130,40,40);
  mercury.addImage(mercuryImg);
  mercury.scale= 0.06;
  mercury.debug=true;

  //venus
  venus = createSprite(200,200,30,30);
  //venus.addImage(venusImg);
  venus.scale= 0.2;

  //earth
  earth = createSprite(280,300,40,40);
  //earth.addImage(earthImg);
  earth.scale= 0.25;

  //mars
  mars = createSprite(390,350,40,40);
  //mars.addImage(marsImg);
  mars.scale= 0.10;

  //jupitor
  jupiter = createSprite(550,420,30,30);
  //jupiter.addImage(jupeterImg);
  jupiter.scale= 0.30;

  //saturn
  saturn = createSprite(750,520,40,40);
  //saturn.addImage(saturnImg);
  saturn.scale= 0.25;

  //uranus
  uranus = createSprite(920,600,30,30);
  //uranus.addImage(uranusImg);
  uranus.scale= 0.15;

  //neptune
  neptune = createSprite(1100,650,40,40);
  //neptune.addImage(neptuneImg);
  neptune.scale= 0.11;
}
function draw() {
  background(0);

  if(frameCount%70===0){
    sun.scale+=0.1;
  }

  if(sun.collide(mercury)){
    mercury.destroy();
  }

  if(sun.collide(venus)){
    venus.destroy();
  }

  if(sun.collide(earth)){
    earth.destroy();
  }

  if(sun.collide(mars)){
    mars.destroy();
  }

  if(sun.collide(jupiter)){
    jupiter.destroy();
  }

  if(sun.collide(saturn)){
    saturn.destroy();
  }

  if(sun.collide(uranus)){
    uranus.destroy();
  }

  if(sun.collide(neptune)){
    neptune.destroy();
  }
  drawSprites();
}

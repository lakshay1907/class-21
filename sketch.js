var wall,thickness;
var bullet,speed,weight;
var rect;
function setup() {
  createCanvas(1600,400);
  speed = random(230,321);
  weight= random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50,200,50,50);
  bullet.velocityX = speed;
  wall = createSprite(1350, 200, thickness, 400);
  wall.shapeColor = (80,80,80);
  rect = createSprite(50,200,50,50);
  rect.velocityX = speed;
}
  function draw() {
  background(0); 
  rect.x = bullet.x;
  if (hascollided(bullet,wall)){
     console.log("hello");
      bullet.velocityX = 0;
      var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
      if(damage<10){
         wall.shapeColor = color (255,0,0);
      }
         if(damage>10){
            wall.shapeColor =color(0,128,0);
         }
         }
  drawSprites();}
  
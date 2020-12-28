var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600, 400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, 200);
  wall.shapeColor = color(80, 80, 80);
  car.shapeColor = "cyan";
  speed =  random(55, 90);
  weight = random(400,  1500);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  wall.depth = car.depth;
  car.depth = car.depth + 1;
  if(wall.x - car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    console.log(wall.x - car.x);
    var deformation = 0.5 * weight * speed * speed / 22500;
  if (deformation < 100){
    car.shapeColor = "lime";
  }
  if (deformation > 100 && deformation < 180){
    car.shapeColor = "gold";
  }
  if (deformation > 180){
    car.shapeColor = "red";
  }
}
  drawSprites();
}
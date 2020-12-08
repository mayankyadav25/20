var car;
var wall;
var speed;
var weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  weight=random(400,1500);
  speed=random(55,90);


  car = createSprite(50, 200, 50, 30);
 car.shapeColor="yellow";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);

  car.velocityX = speed;
}

 

function draw() {
  background(0);  

  if(car.collide(wall))
  {
    car.velocityX=0;
    deformation=0.5*weight*speed*speed/22500;
    if(deformation<100){
      car.shapeColor=color(0,255,0)
    }
    if (deformation<180&&deformation>100) {
      car.shapeColor=color(230,230,0)
    }
        if(deformation>180){
      car.shapeColor=color(255,0,0)
    }

}
    console.log(thickness);
  drawSprites();
}


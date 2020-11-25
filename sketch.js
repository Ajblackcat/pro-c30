const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var groundobj,stand1,stand2,block1
var block2,block3,block4,block5,block6
var block7,block8,block9,block10
var block11,block12,block13,block14,block15,block16
var block17,block18,block19,block20,block21,block22
var block23,block24,block25,block26,block27
var block28,block29,block30
var sling,polygon

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world= engine.world
  groundobj=new Ground(400,400,800,30)
  stand1=new Ground(400,300,700,10)
  
  polygon=new Polygon(200,200,60)
  block2=new Box(260,275,30,40)
  block3=new Box(310,275,30,40)
  block4=new Box(360,275,30,40)
  block5=new Box(410,275,30,40)
  block6=new Box(460,275,30,40)
  block7=new Box(510,275,30,40)
  block1=new Box( 560,275,30,40)
  block8=new Box(285,235,30,40)
  block9=new Box(335,235,30,40)
  block10=new BoxPink(385,235,30,40)
  block11=new BoxPink(435,235,30,40)
  block12=new BoxPink(485,235,30,40)
  block13=new BoxPink(535,235,30,40)
  block14=new BoxPink(335,235,30,40)
  block15=new Box(410,195,30,40)
 
  block16=new BoxPink(460,195,30,40)
  block17=new BoxPink(360,195,30,40)

  stand2=new Ground(600,150,300,10)
  block18=new BoxPink(750,125,30,40)
  block19=new BoxPink(650,125,30,40)
  block20=new BoxPink(600,125,30,40)
  block21=new Box(700,125,30,40)
  block22=new Box(675,85,30,40)
  block23=new Box(725,85,30,40)
  block24=new Box(625,85,30,40)
  block25=new Box(700,45,30,40)
  block26=new BoxPink(650,45,30,40)
 
  
  sling=new Slingshot(polygon.body,{x:100,y:200})
  Engine.run(engine);


}

function draw() {
  background('#3A2D2D');  
  groundobj.display()
  stand1.display()
  stand2.display()
  polygon.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
  block22.display()
  block23.display()
  block24.display()
  block25.display()
  block26.display()
  fill("red");
  textSize(20);
  text("PRESS SPACE FOR A SECOND CHANCE !!",20,20)
  drawSprites();
}
function mouseDragged() {
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
  sling.fly();
}
function keyPressed(){
  if(keyCode=== 32 ){
      sling.attach(polygon.body);
  }
}

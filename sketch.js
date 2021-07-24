var runner,leftA,rightA;
var tries = 0;

function preload(){
  
    leftA = loadAnimation(
        "runnerIMG-L-Side/gifIMG1.png","runnerIMG-L-Side/gifIMG2.png","runnerIMG-L-Side/gifIMG3.png",
        "runnerIMG-L-Side/gifIMG4.png","runnerIMG-L-Side/gifIMG5.png","runnerIMG-L-Side/gifIMG6.png",
        "runnerIMG-L-Side/gifIMG7.png","runnerIMG-L-Side/gifIMG8.png","runnerIMG-L-Side/gifIMG9.png",
        "runnerIMG-L-Side/gifIMG10.png","runnerIMG-L-Side/gifIMG11.png","runnerIMG-L-Side/gifIMG12.png",
        "runnerIMG-L-Side/gifIMG13.png","runnerIMG-L-Side/gifIMG14.png","runnerIMG-L-Side/gifIMG15.png");
        
        rightA = loadAnimation(
         "runnerIMG-R-Side/giphy-1.png","runnerIMG-R-Side/giphy-2.png","runnerIMG-R-Side/giphy-3.png",
         "runnerIMG-R-Side/giphy-4.png","runnerIMG-R-Side/giphy-5.png","runnerIMG-R-Side/giphy-6.png",
         "runnerIMG-R-Side/giphy-7.png","runnerIMG-R-Side/giphy-8.png","runnerIMG-R-Side/giphy-9.png",
         "runnerIMG-R-Side/giphy-10.png","runnerIMG-R-Side/giphy-11.png","runnerIMG-R-Side/giphy-12.png",
         "runnerIMG-R-Side/giphy-13.png","runnerIMG-R-Side/giphy-14.png","runnerIMG-R-Side/giphy-15.png");
    
}

function setup(){
canvas = createCanvas(1350,670);

runner = createSprite(50,400);
runner.addAnimation("right",rightA);
runner.addAnimation("left",leftA);
runner.scale = 0.1;


m1=createSprite(100,200,10,300);
m2=createSprite(100,500,10,200);
m3=createSprite(495,50,800,10);
m4=createSprite(890,150,10,195);
m5=createSprite(890,450,10,300);
m6=createSprite(495,600,800,10);
m7=createSprite(175,325,10,400);
m8=createSprite(450,125,560,10);
m9=createSprite(555,525,550,10);
m10=createSprite(825,325,10,400);
m11=createSprite(195,525,50,10);
m12=createSprite(805,125,50,10);
m13=createSprite(500,190,500,10);
m14=createSprite(500,460,500,10);
m15=createSprite(255,370,10,170);
m16=createSprite(255,205,10,40);
m17=createSprite(745,435,10,40);
m18=createSprite(745,275,10,170);
m19=createSprite(785,235,70,10);
m20=createSprite(215,405,70,10);
m21=createSprite(505,255,350,10);
m22=createSprite(335,325,10,140);
m23=createSprite(400,400,140,10);
m24=createSprite(610,400,140,10);
m25=createSprite(675,325,10,140);


}

function draw(){
    background("white");

    if(runner.isTouching(m1)|| runner.isTouching(m2)){
        runner.x = 50;
        runner.y = 400;
        tries ++;
    }
    drawSprites();
}

function keyPressed(){
     if(keyCode==RIGHT_ARROW){
        runner.changeAnimation("right");
        runner.x = runner.x + 7;
    }
    if(keyCode==UP_ARROW){
        runner.y = runner.y - 7;
    }
    if(keyCode==DOWN_ARROW){
        runner.y = runner.y + 7;
    }
    if(keyCode==LEFT_ARROW){
        runner.changeAnimation("left");
        runner.x = runner.x - 7;
     }
}

function obstacles(){
if(frameCount%100 === 0){
    var obs = createSprite(random(150,800), random(75,500),10,10);
   if(obs.x< 400){
       obs.velocityX = 5;
   }else{
       obs.velocityY = -5;
   }

}
}


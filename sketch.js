var runner,leftA,rightA;
var tries = 0;
var obsGrp;

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
    cImage1=loadAnimation("dragon.gif");
    cImage2=loadAnimation("spider.gif");
    cImage3=loadAnimation("lion.gif");
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

obsGrp = new Group();
}

function draw(){
    background("white");

    if(runner.isTouching(m1)|| runner.isTouching(m2)|| runner.isTouching(m3)|| runner.isTouching(m4)|| runner.isTouching(m5)
   ||runner.isTouching(m6)|| runner.isTouching(m7)|| runner.isTouching(m8)|| runner.isTouching(m9)|| runner.isTouching(m10)
   ||runner.isTouching(m11)|| runner.isTouching(m12)|| runner.isTouching(m13)|| runner.isTouching(m14)|| runner.isTouching(m15)
   ||runner.isTouching(m16)|| runner.isTouching(m17)|| runner.isTouching(m18)|| runner.isTouching(m19)|| runner.isTouching(m20)
   ||runner.isTouching(m21)|| runner.isTouching(m22)|| runner.isTouching(m23)|| runner.isTouching(m24)|| runner.isTouching(m25)){
        runner.x = 50;
        runner.y = 400;
        tries ++;
    }
    obstacles();
    if(tries == 5){
        reset();
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
       obs.velocityX = 2;
       if(obs.x>800){
        obs.velocityX = -2;
       }
   }else{
       obs.velocityY = -2;
       if(obs.x< 150){
        obs.velocityX = 2;
       }
   }
   //obs.addAnimation("dragon",cImage1);
   obs.scale = 0.2;
   obs.lifetime = 400;
   obs.bounceOff(m1);
   obs.bounceOff(m2);
   obs.bounceOff(m3);
   obs.bounceOff(m4);
   obs.bounceOff(m5);
   obs.bounceOff(m6);
   obs.bounceOff(m7);
   obs.bounceOff(m8);
   obs.bounceOff(m9);
   obs.bounceOff(m10);
   obs.bounceOff(m11);
   obs.bounceOff(m12);
   obs.bounceOff(m13);
   obs.bounceOff(m14);
   obs.bounceOff(m15);
   obs.bounceOff(m16);
   obs.bounceOff(m17);
   obs.bounceOff(m18);
   obs.bounceOff(m19);
   obs.bounceOff(m20);
   obs.bounceOff(m21);
   obs.bounceOff(m22);
   obs.bounceOff(m23);
   obs.bounceOff(m24);
   obs.bounceOff(m25);
   obsGrp.add(obs);
}
}

function reset(){
    //gameState = PLAY;
    //gameOver.visible = false;
    //restart.visible = false;
    
    obsGrp.destroyEach();
    runner.x = 50;
    runner.y = 400;
        
    if(localStorage["HighestScore"]<score){
      localStorage["HighestScore"] = score;
    }
        
    tries = 0;
    
  }



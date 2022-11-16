var face_X = []
var face_y = []
var face_size = []
var face_num =1
var song 
var songIsplay=false
var amp


function preload(){
  song = loadSound("Indecision - Dyalla.mp3");
  
}




function setup() {
  createCanvas (windowWidth, windowHeight);
  angleMode(DEGREES)
}




function draw() {
  
  background(255,227,132);
  textSize(40)
  text("X:"+mouseX+"Y:"+mouseY,50,50)
push()
  translate(width/2,height/2)
  fill("#adc178")
  ellipse(0,0,400) //大園
  
  fill("#ff9b85")
  ellipse(85,-160,40,10) //腮紅
  ellipse(-85,-160,40,10) //腮紅
  fill("#e9f5db")
  ellipse(0,75,250) //小圓
  
  fill("#adc178")
  ellipse(-75,-200,60) //眼睛
  ellipse(75,-200,60)  //眼睛

  fill("#31572c")
  ellipse(-150,-60,10)
  ellipse(-115,-80,10)
  ellipse(-145,-90,15)

  ellipse(150,-60,10)
  ellipse(115,-80,10)
  ellipse(145,-90,15)

  fill("#ffffff")
  ellipse(-75+map(mouseX,0,width,-20,20),-200+map(mouseY,0,height,-20,20),30) //左眼珠
  ellipse(75+map(mouseX,0,width,-20,20),-200+map(mouseY,0,height,-20,20),30) //右眼珠

  fill(0)
  ellipse(-75+map(mouseX,0,width,-20,20),-200+map(mouseY,0,height,-20,20),20) //左眼珠
  ellipse(75+map(mouseX,0,width,-20,20),-200+map(mouseY,0,height,-20,20),20) //右眼珠


  if(mouseIsPressed)
  {
    fill(255,0,0)
    arc(0,-150,200,200,0,180)
  }
  else
  {
    fill(255,0,0)
    arc(0,-150,200,125,0,180)
  }
  fill("#adc178")
  arc(0,-151,200,100,0,180) //嘴巴
pop()

  }

  function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()
    console.log(songIsplay)
  }
  else{
    song.pause()
    songIsplay=false
  }
}


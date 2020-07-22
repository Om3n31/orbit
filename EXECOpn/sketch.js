/*function setup() {
  createCanvas(1000,800);
  background(0);
  stroke(255,255,255);
  strokeWeight(2);
  noFill();

}*/

/*function draw() {
  point(500,400);
  line(500,400,mouseX,mouseY);

}*/
// EX3
/*function draw() {
  background(0,5);
  circle(mouseX,mouseY,30);
}*/
// EX4
/*function draw(){
  rectMode(RADIUS);
  background(0);
  if(mouseY<400){
    rect(450,350,55,55);
  }
  else{
    circle(500,400,55);
  }
}*/
// EX5
/*function draw(){
  rectMode(RADIUS);
  background(0);
  if(mouseY<400){
    rect(450,350,mouseX,mouseX);
  }
  else{
    circle(500,400,mouseX);
  }
}*/
// EX6
/*
function draw(){
  rectMode(RADIUS);
  background(0);
  if(mouseY<400){
    rect(450,350,mouseX,mouseX);
  }
  else{
    circle(500,400,mouseX);
  }
  fill(0,255,0,f);
  f++
  if(f==255){
    f=0;
  }

}*/
// EX7
/*
let i=0;
let r;
let g;
let b;
let opacite;

function mouseClicked(){
  i=(i+1)%3;
  if(i==0){
    r=0;
    g=255;
    b=0;
  }
  else if(i==1){
    r=0;
    g=0;
    b=255;
  }
  else{
    r=255;
    g=0;
    b=0;
  }
}
function draw(){
  rectMode(RADIUS);
  background(0);
  if(mouseY<400){
    rect(500,400,(mouseX/2),(mouseX/2));
  }
  else{
    circle(500,400,mouseX);
  }
  fill(r,g,b,opacite);
  opacite++
  if(opacite==255){
    opacite=0;
  }
  console.log("eg");
}*/
//EX 8
/*function draw(){
  ellipse()
}*/
/*function draw() {
  background(200);
  rectMode(CENTER);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  rect(0, 0, 20, 20);
}*/
//EX 9
/*
function draw(){
  ellipse(500,400,50,50);
  ellipse(500,400,50,100);
  ellipse(500,400,100,50);
  ellipse(500,400,100,100);
}*/
/*function ellpos(a,b,c=1){
  ellipse(a,b,50*c,50*c);
  ellipse(a,b,50*c,100*c);
  ellipse(a,b,100*c,50*c);
  ellipse(a,b,100*c,100*c);
}
*/
//EX 10
/*function draw(){
  background(0)
  ellpos(200,150);
  ellpos(200,650);
  ellpos(500,400,2);
  ellpos(800,650);
  ellpos(800,150);
  ellpos(mouseX,mouseY);
}
*/
//EX 11
/*
function draw(){
  strokeWeight(4);
  point(random(1001),random(801));
  point(random(1001),random(801));
  point(random(1001),random(801));
  point(random(1001),random(801));
  point(random(1001),random(801));
  point(random(1001),random(801));
  point(random(1001),random(801));
  point(random(1001),random(801));
  point(random(1001),random(801));
  point(random(1001),random(801));
  point(random(1001),random(801));
  point(random(1001),random(801));
  point(random(1001),random(801));
  point(random(1001),random(801));
  point(random(1001),random(801));
}
*/
//EX 12
/*function draw(){
    strokeWeight(4);
    stroke(random(256),random(256),random(256));
  for(let i=0; i<250; i++){
    point(random(1001),random(801));
  }
  

}*/
//EX 13
/*function draw(){
    strokeWeight(4);
  for(let i=0; i<250; i++){
    let xp=random(1001 );
    let yp=random(801);
    stroke(255,0,(xp/255)*150);
    point(xp,yp);

  }
}*/
//EX 14 et 15
/*function draw(){
  if(f%1000==0){
    f=0
  }
  if(r%800==0){
    r=0
  }
  background(0,0,255);
  fill(255,0,0);
  circle(f,r,25);
  f+=5;
  r+=5;  
}*/
//EX 16 et 17
/*let o=1;
let j=1;
function draw(){
  if(f%1000==0){
    o=-1;
  }
  if(f==0){
    o=1;
  }
  if(r%800==0){
    j=-1;
  }
  if(r==0){
    j=1;
  }
  background(0,0,255);
  fill(255,0,0);
  circle(f,r,25);
  f+=5*o;
  r+=5*j; 
}*/

//EX 18
/*let o=1;
let j=1;
let speedN=50;
function draw(){
  if(f>1000){
    o=-1;
  }
  if(f<0){
    o=1;
  }
  if(r>800){
    j=-1;
  }
  if(r<0){
    j=1;
  }
  background(0,0,255);
  fill(255,0,0);
  circle(f,r,25);
  f+=speedN*o;
  r+=speedN*j; 
  speedN*=0.98;
}
function mouseClicked(){
  speedN=50;
}*/
//EX 19
/*let t=0;
	
	function setup(){
		createCanvas(800,600);
    fill(0);
	}

	function draw(){
		background(255);
		for(var i = 0 ; i < 7 ; i++) {
			for(var j = 0 ; j < 10 ; j++) {
        let offset = Math.abs((t+j)%50-25);        
				rect(100+50*j + offset, 100+50*i, 40, 40);
			}
    }
    t+=1;
	}




*/
// PURPLE RAIN
/*let opacity;
let rX;
let yX;
let rW;
let rH;
function arect(rX,yX,dis){
  stroke(255, 0, 191,opacity);
  rect(rX,yX,10*dis,25*dis);
}
function setup(){
  background(200, 151, 207);
  createCanvas(800,800);
  fill(255, 0, 191);
}
function draw(){
  let randomY=random(801);
  let randomDis=random(11);
  for(let i=0; i<20; i++){

  }

}*/
let xA=400;
let yA=200;
let xB=200;
let yB=600;
let xC=600;
let yC=600;
let xP=xA;
let yP=yA;
let a="a";
function setup(){
  createCanvas(800,800);
  background(0);

}

function draw(){
  stroke(255);
  strokeWeight(10);
  point(xA,yA);
  point(xB,yB);
  point(xC,yC);
  for(let i=0; i<150; i++){
    let cible = Math.floor(random(3));
  stroke(255,255,0);
  strokeWeight(2);
  if(cible==0){
   xP=(xP+xA)/2;
   yP=(yP+yA)/2;
   point(xP,yP);
  }
  if(cible==1){   
      xP=(xP+xB)/2;
      yP=(yP+yB)/2;
      point(xP,yP);
  }
    if(cible==2){
    
      xP=(xP+xC)/2;
      yP=(yP+yC)/2;
      point(xP,yP);
    } 
  }

}
function createPoint(cible){
  
  }
  

console.log(600%400)

/*function keyPressed(){
  switch(key){
    case 'ArrowUp':
      y-=50;
      break;
    case 'ArrowDown':
      y+=50;
      break;
    case 'ArrowLeft':
      x-=50;
      break;
    case 'ArrowRight':
      x+=50;
    default:
      break;
  }
}*/
/*while(keyIsPressed()){
  if(key=="ArrowUp"){
    y-=25;
  }
  else if(key=="ArrowDown"){
    y+=25;
  }
  else if(key=="ArrowLeft"){
    x-=25;
  } 
  else if(key=="ArrowRight"){
    x+=25;
  }

}*/


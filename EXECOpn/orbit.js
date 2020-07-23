function setup(){
    createCanvas(windowWidth,windowHeight);
    background(0);


}
let anglePerLoop=0;
let xEarth;
let yEarth;
let xMoon;
let yMoon;
let b=0;
function draw(){
    background(0);
    stroke(255,100,0);
    fill(255,255,0);
    //Sun
    ellipse(400,400,200,200);
    stroke(255);
    noFill();
    //ellipse(400,400,600,600);
    // Earth x
    xEarth=400+Math.cos(anglePerLoop)*300;
    yEarth=400+Math.sin(anglePerLoop)*300;
    fill(0,200,255);
    stroke(0,150,255);
    //Earth
    ellipse(xEarth,yEarth,50,50);
    anglePerLoop+=0.01;
    xMoon=xEarth+Math.cos(b)*50;
    yMoon=yEarth+Math.sin(b)*50  ;
    b+=0.12; 
    stroke(255);
    noFill();
    //ellipse(xEarth,yEarth,100,100);
    stroke(150);
    fill(150);
    ellipse(xMoon,yMoon,20,20);





}
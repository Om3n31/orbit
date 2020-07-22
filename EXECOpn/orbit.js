function setup(){
    createCanvas(windowWidth,windowHeight);
    background(0);


}
let a=0;
let xA;
let yA;
let xB;
let yB;
let b=0;
function draw(){
    background(0);
    stroke(255,100,0);
    fill(255,255,0);
    ellipse(400,400,200,200);
    stroke(255);
    noFill();
    //ellipse(400,400,600,600);
    xA=400+Math.cos(a)*300;
    yA=400+Math.sin(a)*300;
    fill(0,200,255);
    stroke(0,150,255);
    ellipse(xA,yA,50,50);
    a+=0.01;
    xB=xA+Math.cos(b)*50;
    yB=yA+Math.sin(b)*50  ;
    b+=0.12; 
    stroke(255);
    noFill();
    //ellipse(xA,yA,100,100);
    stroke(150);
    fill(150);
    ellipse(xB,yB,20,20);





}
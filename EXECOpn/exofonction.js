let fibo = [0,1];
let fiboFunk = [];
// OPTI BOUCLE
function fibo1(n){
    if(n<2){
        return n;
    }
    else{
        for(let i=0; i<n; i++){
            fibo=[fibo[1],fibo[0]+fibo[1]];      
        }
        return fibo[0];  
    }
    
}
// OPTI RECURSIVE
function fibo1(n){
    if(n==1){
        return [1,0];
    }
    else{
        let t=fibo1(n-1);
        return [t[0]+t[1], t[0]];
    }
    
}
console.log(fibo1(9));
//console.log(fibonacci(150));
function fibo2(cons){
    fiboFunk=[fibo[cons-1],fibo[cons]];
}
function fibonacci(n){

    let arr = new Array(n+1).fill(0)

    arr[1] = 1;

    for(let i = 2; i <= n; i++){

      arr[i] = arr[i-1] + arr[i-2]
    }

    return arr[n]
}






function fiboSe2(index){
    
    for(let i=-1; i<index; i++){
        if(index<2){
            result = index;
        }
        else{
            let fOne = 1;
            let fTwo = 2;
            result     
        }
    
    }
}

function fiboSe(indexCall){
    
    if(indexCall==0){
        return 0;
    }
    if(indexCall==1){
        return 1;
    }
    else{
        return fiboSe(indexCall-1)+fiboSe(indexCall-2);
    }
} 
console.log(fiboSe(14));
let branchBud;
let angle;
function setup(){
    angle = PI/4;
    createCanvas(400,400);
    background(51);
    stroke(255);
    translate(200, height);
    
    var slider;
    slider = createSlider(0,TWO_PI,PI/4);
    
}


function draw(){
    angle = slider.value();
    fractalTree(100);

}
function fractalTree(len){
    
    branchBud=height-len;
    line(mouseX,0,mouseX,-len);
    translate(0, -len);
    rotate(angle);
    if(len>2){

        line(0,0,0,(-len*2)/3);
    }
    

    
}

function mouseClicked(){
    
}
